import React, { useEffect, useState } from "react";
import "./PostJob.css";
import { BsBriefcase } from "react-icons/bs";
import { FiCheckCircle } from "react-icons/fi";
import { GiMoneyStack } from "react-icons/gi";
function PostJob() {
  const [data, setData] = useState({
    name: "",
    email: "",
    companyName: "",
    domainName: "",
    designation: "",
    mobail: "",
    pinCode: "",
    address: "",
  });

  const handleSubmit = async (e) => {
    const response = await fetch("http://localhost:9002/api/permission/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: data.name, password: data.password }),
    });
    const json = await response.json();
    console.log(data);
  };
  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <div className="company">
      <h2 className="company-text">Post a New job!</h2>
      <div className="dec-text">Ready to jump back in?</div>
      <div className="companyItem">
        <span className="profile">Post Job</span>
        <div className="posjob-icon-all-style">
          <div className="message">
            <span className="icon-style-postjob">
              <BsBriefcase />
            </span>
            <div className="text-style-postjob"> Job Detail</div>
          </div>
          <div className="message">
            <span className="icon-style-postjob">
              <GiMoneyStack />
            </span>
            <div className="text-style-postjob">Package & Payments</div>
          </div>
          <div className="message">
            <span className="icon-style-postjob">
            <FiCheckCircle />
            </span>
            <div className="text-style-postjob">Confirmation</div>
          </div>
        </div>

        <div className="addEmployer">
          <div className="form-item">
            <label> Job title:</label>
            <br />
            <input
              type="text"
              placeholder="Enter Job title"
              className="input-aria1"
              name="name"
              onChange={onChange}
            />
          </div>
          <div className="form-item">
            <label> About Comapny:</label>
            <br />
            <input
              type="text"
              placeholder=""
              className="input-aria1 aria"
              name="name"
              onChange={onChange}
            />
          </div>
          <div className="form-item">
            <label> Name:</label>
            <br />
            <input
              type="text"
              placeholder="Enter Name"
              className="input-aria"
              name="name"
              onChange={onChange}
            />
          </div>
          <div className="form-item">
            <label>Email:</label>
            <br />
            <input
              type="email"
              placeholder="Enter Email"
              className="input-aria"
              name="email"
              value={data.email}
              onChange={onChange}
            />
          </div>
          <div className="form-item">
            <label> Company Name:</label>
            <br />
            <input
              type="text"
              placeholder="Enter Comapny Name"
              className="input-aria"
              name="companyName"
              value={data.companyName}
              onChange={onChange}
            />
          </div>
          <div className="form-item">
            <label> Domain Name:</label>
            <br />
            <input
              type="text"
              placeholder="Enter Domain Name"
              className="input-aria"
              name="domainName"
              value={data.domainName}
              onChange={onChange}
            />
          </div>
          <div className="form-item">
            <label> Your designation:</label>
            <br />
            <input
              type="text"
              placeholder="Enter Designation"
              className="input-aria"
              name="designation"
              value={data.designation}
              onChange={onChange}
            />
          </div>

          <div className="form-item">
            <label> Mobile:</label>
            <br />
            <input
              type="Mobile"
              placeholder="Enter Mobail Number"
              className="input-aria"
              name="mobail"
              value={data.mobail}
              onChange={onChange}
            />
          </div>

          <div className="form-item">
            <label> Pin Code:</label>
            <br />
            <input
              type="text"
              placeholder="Enter Designation"
              className="input-aria"
              name="pinCode"
              value={data.pinCode}
              onChange={onChange}
            />
          </div>

          <div className="form-item">
            <label> Address:</label>
            <br />
            <input
              type="text"
              placeholder="Address"
              className="input-aria"
              name="address"
              value={data.address}
              onChange={onChange}
            />
          </div>
        </div>
        <button type="submit" className="add-btn" onClick={handleSubmit}>
          Post Job
        </button>
      </div>
    </div>
  );
}

export default PostJob;
