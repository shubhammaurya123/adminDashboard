import React from "react";
import "../Student/Student.css"
import { CiLocationOn } from "react-icons/ci";
import { MdAttachMoney, MdOutlineVisibility } from "react-icons/md";
import { RxCrossCircled } from "react-icons/rx";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineCheck } from "react-icons/ai";

//  import { faAddressBook } from '@fortawesome/free-solid-svg-icons'
function StudentcardItem() {
  return (
    <div className="studentCardItem">
      <img
        src="https://picsum.photos/200/300"
        alt="Avatar"
        className="cardImage"
      ></img>
      <div className="content">
        <h3 className="name-style"> Shubham Maurya</h3>
        <div className="contentItem">
          <span className="role-style">Software develpoer</span>

          <span>
            {" "}
            <CiLocationOn />
            UP,INDIA
          </span>
        </div>

        <div>
          <MdAttachMoney />
          500 Rs/hour
        </div>

        <ul className="CardItemlist">
          <li className="CardItemlistVlaue">App</li>
          <li className="CardItemlistVlaue">Designer</li>
          <li className="CardItemlistVlaue">Digital</li>
        </ul>

        <ul className="view-btn">
          <li>
            <button className="btn-style">
              <MdOutlineVisibility />
            </button>
          </li>
          <li>
            <button className="btn-style">
              <AiOutlineCheck />
            </button>
          </li>
          <li>
            <button className="btn-style">
              <RxCrossCircled />
            </button>
          </li>
          <li>
            <button className="btn-style">
              <RiDeleteBin6Line />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default StudentcardItem;
