import React from "react";

function TableEntries(props){
    return (
        <tr className="tablentries">
            <td className="tablentries">{props.ind}</td>
            <td className="tablentries">{props.StudentDetails.name}</td>
            <td className="tablentries">{props.StudentDetails.Score}</td>
        </tr>
    );
}

export default TableEntries;