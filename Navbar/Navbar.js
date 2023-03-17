import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { HiOutlineHome } from "react-icons/hi";
import { AiOutlineUser, AiOutlineLogout, AiOutlineHome } from "react-icons/ai";
import { CiPaperplane } from "react-icons/ci";
import { BsBriefcase } from "react-icons/bs";
import { TbFileInvoice } from "react-icons/tb";
import { FiSettings } from "react-icons/fi";

function Navbar() {

 
  var path = window.location.pathname;
  let urlParts = path.split("/");
  const[activeTab , setActiveTab] = useState(urlParts[1]);
  
  return (
    <div className="Navbar">
      <div className="inner-bar">
        <ul className="list">
          <li className={`navbarlistItem  ${activeTab === "dashboard" ? "active":""}` } onClick={() => setActiveTab("dashboard")}>
            <div className="navItemtoggle" >
              <AiOutlineHome className="listItemIcon" />
              <a href="/dashboard" className="text-decorate">
                {" "}
                <span>Dashboard </span>
              </a>
            </div>
          </li>
          <li className={`navbarlistItem  ${activeTab === "company" ?"active" :""}`}  onClick={() => setActiveTab("company")}>
            <div className="navItemtoggle">
              <AiOutlineUser className="listItemIcon" />
                <span>Company</span>
            </div>
          </li>
          {activeTab ==="company" && (
            <div className="list-item extra">
              <ul className="list-style-nav">
                {" "}
                <li className="item-gap">
                  <a href="/company/addEmployer" className="text-decorate" >
                      Add New Employer
                  </a>
                </li>
                <li className="item-gap">
                  <a href="/company/allEmployer" className="text-decorate" >
                       All Employer
                  </a>
                </li>
          
              </ul>
            </div>
          )}
          <li  className={`navbarlistItem  ${activeTab === "student" ?"active" :""}`}  onClick={() => setActiveTab("student")}>
            <div className="navItemtoggle">
              <CiPaperplane className="listItemIcon" />
                <span>Student</span>
            </div>
          </li>
          {activeTab ==="student" && (
            <div className="list-item extra">
              <ul className="list-style-nav">
                {" "}
                <li className="item-gap">
                  <a href="/student/addStudent" className="text-decorate" >
                      Add New Student
                  </a>
                </li>
                <li className="item-gap">
                  <a href="/student/allStudent" className="text-decorate" >
                       All Student
                  </a>
                </li>
          
              </ul>
            </div>
          )}
          <li className={`navbarlistItem  ${activeTab === "resume" ?"active" :""}`}  onClick={() => setActiveTab("resume")}>
            <div className="navItemtoggle">
              <BsBriefcase className="listItemIcon" />
              <a href="/resume" className="text-decorate">
                {" "}
                <span> Resume</span>
              </a>
            </div>
          </li>
          <li className="navbarlistItem">
            <div className="navItemtoggle">
              <TbFileInvoice className="listItemIcon" />
              <a href="/postjob" className="text-decorate">
                {" "}
                <span>Post Job</span>
              </a>
            </div>
          </li>
          <li className={`navbarlistItem  ${activeTab === "setting" ?"active" :""}`}  onClick={() => setActiveTab("setting")}>
            <div className="navItemtoggle">
              <FiSettings className="listItemIcon" />
                 <span>Setting</span>
            </div>
          </li>
          {activeTab==="setting" && (
            <div className="list-item extra">
              <ul className="list-style-nav">
                {" "}
                <li className="item-gap ">
                  <a href="/setting/addUser"  className="text-decorate" >
                    Team/Users
                  </a>
                </li>
                <li className="item-gap">Payments Setting</li>
                <li className="item-gap">
                  <a href="/setting/roles&permission"  className="text-decorate" >
                    Roles and Permisson{" "}
                  </a>
                </li>
                <li className="item-gap">Email Setting</li>
                <li className="item-gap">
                  <a href="/setting/viewpermission"  className="text-decorate" >
                    View Permission{" "}
                  </a>
                </li>
              </ul>
            </div>
          )}

          <li className="navbarlistItem">
            <div className="navItemtoggle">
              <AiOutlineLogout className="listItemIcon" />
              <span>Logout</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
