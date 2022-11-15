import React from "react";
// import subjectImage from "../images/book-solid.svg";

function Subject(props) {
  return (
    <div className="subject f-2-v">
      <div>
        <img src={props.src} alt="" className="subject-logo" />
      </div>
      <p>{props.name}</p>
    </div>
  );
}

export default Subject;
