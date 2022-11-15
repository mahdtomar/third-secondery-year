import React from "react";
import "../sass/intro.css";
import subjectImage from "../images/book-solid.svg";
import HeroIcon from "../images/chess-rook-solid.svg";
import Subject from "./Subject";
function IntroPage() {
  return (
    <div className="container">
      <header>
        <img src={HeroIcon} alt="" className="logo" />
        <p>كلمه عن الموقع</p>
      </header>
      <div className="grid-3">
        <Subject src={subjectImage} name='اللغة العربية' />
        <Subject src={subjectImage} name='اللغة الانجليزية' />
        <Subject src={subjectImage} name='اللغة الفرنسية' />
        <Subject src={subjectImage} name='الاحياء' />
        <Subject src={subjectImage} name='الفزياء' />
        <Subject src={subjectImage} name='الكمياء' />
        <Subject src={subjectImage} name='الجيولوجيا' />
        <Subject src={subjectImage} name='الجبر' />
        <Subject src={subjectImage} name='الاستاتيكا' />
        <Subject src={subjectImage} name='الديناميكا' />
        <Subject src={subjectImage} name='الاحصاء' />
        <Subject src={subjectImage} name='علم النفس' />
        <Subject src={subjectImage} name='التاريخ' />
        <Subject src={subjectImage} name='الجغرافيا' />
      </div>
    </div>
  );
}

export default IntroPage;
