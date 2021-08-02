import React from "react";

function ResumeContent(props) {
  return (
    <div className="resume-item">
      <h5 className={props.title ? "resume-title" : "resume-no-title"}>
        {props.title}
      </h5>
      {props.title==="PASSWORD" ? (<input type="password"></input>) : (<input></input>)}
        
     
    
    </div>
  );
}

export default ResumeContent;
