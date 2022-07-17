const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const bodyParser = require("body-parser");
const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;
console.log("Connecting")

const UserDetails={
    id:'',
    name:'',
    email:'',
    password:''
}


const UserSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
});
const UserModel=new mongoose.model("UserModel",UserSchema);

app.get('/',(req,res)=>{
    res.send("backend");
});

app.get('/GetUsers',(req,res)=>{
    UserModel.find({},{__id:1,name:1,password:1,email:1},function(err, result) {
        if (err) throw err;
        res.send(result);
      });
});


app.post('/Register',(req,res)=>{
    const User=new UserModel(req.body);
    UserModel.findOne({ 'email': User.email }, function (err, result){
        console.log(result);
        if (err) console.log(err);
        else
        if(result){
            res.send({message:"Email Is ALready Registered"});
        }
        else{
            User.save(err=>{
                if(err){
                    console.log(err);
                }
                else{
                    console.log('Registered Successfully');
                }
            });
            res.send();
        }
      });
});


app.post('/Login',(req,res)=>{
    const {email,password}=req.body;
    UserModel.findOne({ 'email': email }, function (err, result){
        if (err) console.log(err);
        else
        if(result.password===password){
            res.send({result});
            UserDetails.email=result.email;
            UserDetails.password=result.password;
            UserDetails.id=result._id;
            UserDetails.name=result.name;
        }
        else{
            res.send({});
        }
      });
});
////////////////////////////////////////////////////////////////   Questions and Quiz Database   ///////////////////////////



const QuestionsSchema=new mongoose.Schema({
    Type:String,
    Question:String,
    Answer:String,
    Option1:String,
    Option2:String,
    Option3:String,
    Option4:String
});
const QuestionsModel=new mongoose.model("QuestionsModel",QuestionsSchema);

const QuizSchema=new mongoose.Schema({
    AdminId:{},
    QuizDate:Date,
    QuestionsId:[],
    AccessKey:String
});
const QuizModel=new mongoose.model("QuizModel",QuizSchema);

app.post('/SaveQuiz',(req,res)=>{
    var AllQuestions=req.body.SavedQuestions;
    var NewQuestionsId=[];
    AllQuestions.map((Questions)=>{
        const NewQuestion=new QuestionsModel(Questions);
        NewQuestionsId.push((NewQuestion._id));
        NewQuestion.save(err=>{
            if(err){
                console.log(err);
            }
            else{
                console.log('Question Created Successfully');
            }
        })
    })
    const Data={
        AdminId:ObjectId(req.body.id),
        QuizDate:'',
        QuestionsId:NewQuestionsId,
        AccessKey:req.body.AccessKey
    };
    const NewQuiz=new QuizModel(Data);
    NewQuiz.save(err=>{
        if(err){
            console.log(err);
        }
        else{
            console.log('Quiz Created Successfully');
        }
    })
});


app.get('/GetAllQuiz',(req,res)=>{
    const AdminId=ObjectId(req.query.AdminId);
    console.log(AdminId);
    QuizModel.find({'AdminId':AdminId},function(err, result) {
        if (err) throw err;
        res.send(result);
        console.log(result);
      });
});



///////////////////////////////////////// User Database //////////////////////////////////////

app.get('/GetQuiz',(req,res)=>{
    
    const AccessKey=req.query.AccessKey;
    console.log(req.query.AccessKey);
    QuizModel.findOne({'AccessKey':AccessKey},function (err, result){
        if (err) console.log(err);
        res.send({result});
      });
});

app.get('/CheckUser',(req,res)=>{
    console.log('CheckUser');
    console.log(req.query);
    StudentModel.findOne({'QuizId':req.query.Quizid,'name':req.query.name},function (err, result){
        if (err) console.log(err);
            console.log(result);
        res.send({result});
      });
});




app.get('/GetQuestion',(req,res)=>{
    
    const QuestionId=req.query.QuestionId;
    QuestionsModel.findOne({'_id':QuestionId},function (err, result){
        if (err) console.log(err);
        res.send({result});
      });
});





////////////////////////////////// student Database //////////////////////////////////////




const StudentSchema=new mongoose.Schema({
    name:String,
    QuizTime:Date,
    QuizId:String,
    Score:Number
});
const StudentModel=new mongoose.model("StudentModel",StudentSchema);


app.post('/StoreResult',(req,res)=>{
     const Data={
        name:req.body.name,
        QuizTime:'',
        QuizId:req.body.Quizid,
        Score:req.body.Score
     }
    const Student=new StudentModel(Data);
    Student.save(err=>{
        if(err){
            console.log(err);
        }
        else{
            console.log('Stored Student Score Successfully');
        }
    })
});


app.get('/GetLeaderboard',(req,res)=>{
    
    const QuizId=req.query.QuizId;
    // StudentModel.find({'QuizId':QuizId},function (err, result){
    //     if (err) console.log(err);
    //         console.log(result);
    //     res.send({result});
    //   });
    var sort = { Score: -1 };
    StudentModel.find({'QuizId':QuizId},function(err, result) {
        if (err) throw err;
        var arr=result.sort(function(x, y) {
            if (x.Score > y.Score) {
              return -1;
            }
            if (x.Score < y.Score) {
              return 1;
            }
            return 0;
          });
        res.send({result});
      });

});


////////////////////////////////////////////////////////////////////////////////////////////


app.listen(9002,()=>{
    console.log('Server Listening');
});