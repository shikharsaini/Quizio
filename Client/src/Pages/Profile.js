import React from "react";

function Profile(props){
    return(
        <div >

        <div className="container py-5">
          <div className="row">
            <div className="col-lg-4">
              <div className="card mb-4">
                <div className="card-body text-center">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar" className="rounded-circle img-fluid" style={{width: '150px'}} />
                  <h5 className="my-3">{props.userData.name}</h5>
                  <p className="text-muted mb-1">Administrator</p>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="card mb-4">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-5">
                      <p className="mb-0">ID</p>
                    </div>
                    <div className="col-sm-7">
                      <p className="text-muted mb-0">{props.userData.id}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-5">
                      <p className="mb-0">Name</p>
                    </div>
                    <div className="col-sm-7">
                      <p className="text-muted mb-0">{props.userData.name}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-5">
                      <p className="mb-0">Email</p>
                    </div>
                    <div className="col-sm-7">
                      <p className="text-muted mb-0">{props.userData.email}</p>
                    </div>
                  </div>
                </div></div></div></div></div>
        </div>
    );
}

export default Profile;