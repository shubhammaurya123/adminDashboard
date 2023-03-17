import React, { useEffect, useState } from "react";
// import "./Company.css";
import { BsArrowUp } from "react-icons/bs";
function RolesPermission() {
  const [permission, setPermissions] = useState([]);

  const [credentials, setCredentials] = useState({
    role: "",
    name: "",
    email: "",
    password: "",
  });
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
      <h2 className="company-text">AddUser!</h2>
      <div className="dec-text">Ready to jump back in?</div>
      <div className="companyItem">
        <div className="addEmployer">
          <div className="">
            <label> Role:</label> <br />
            <select
              value={credentials.role}
              onChange={onChange}
              name="role"
              className="input-aria1"
            >
              {permission.map((element) => {
                return (
                  <option value={element.role} key={element._id}>
                    {element.role}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-item">
            <label> Name:</label>
            <br />
            <input
              type="text"
              placeholder="Enter Name"
              className="input-aria"
              name="name"
              value={data.name}
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
            <label> Password:</label>
            <br />
            <input
              type="password"
              placeholder="Enter Password"
              className="input-aria"
              name="name"
              value={data.name}
              onChange={onChange}
            />
          </div>
        </div>
        <button type="submit" className="add-btn" onClick={handleSubmit}>
          Add RolesPermission
        </button>
      </div>
    </div>
  );
}

export default RolesPermission;
