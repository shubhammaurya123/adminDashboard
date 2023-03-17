import React, { useEffect, useState } from "react";
import "./Resume.css";
import StudentcardItem from "../StudentCardItem/StudentCardItem";
function Resume() {
  return (
    <div className="studentApp">
      <h2 className="student-text">Resume Shortlisted!</h2>
      <div className="dec-text">Ready to jump back in?</div>
      <div className="studentItem">
        <div className="row">
          <span className="applicant">Shortlisted Resume</span>

          <div className="selectItem">

            <input type="text" placeholder="Search.." className="search"/>
            <select value="All Status" className="dropdown">
              <option>All Status</option>
              <option>1</option>
              <option>2</option>
            </select>
          </div>
        </div>
     

        <div className="studentAllcardItem">
            <StudentcardItem/>
            <StudentcardItem/>
        </div>
        <div className="studentAllcardItem">
            <StudentcardItem/>
            <StudentcardItem/>
        </div>
        <div className="studentAllcardItem">
            <StudentcardItem/>
            <StudentcardItem/>
        </div>
        
      </div>
    </div>
  );
}

export default Resume;
