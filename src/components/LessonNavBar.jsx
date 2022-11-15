import React from "react";
import logo from "../images/chess-rook-solid.svg";
const LessonNavBar = (props) => {
  return (
    <nav>
      <div className="f-2">
        <div>
        <img src={logo} alt="" />
        </div>
        <div className="subject-container">
            <div>
            <span>{props.subjectName}Subject</span>
            </div>
        </div>
      </div>
    </nav>
  );
};

export default LessonNavBar;
