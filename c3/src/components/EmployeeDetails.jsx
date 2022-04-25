import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./EmployeeDetails.css";

export const EmployeeDetails = () => {
  const [user, setUser] = useState([]);
  const {id} = useParams();

  useEffect(()=>{
    axios.get(`http://localhost:8080/employee/${id}`).then(({data})=>{
      setUser(data)
    })
  },[])
  console.log("user:",user)
  return (
    <div className="user_details">
      <img src={user.image} className="user_image" />
      <h4 className="user_name">{user.employee_name}</h4>
      <span className="user_salary">$ {user.salary} </span>
      <span className="tasks">
        <li className="task"></li>
      </span>
      Status: <b className="status">{user.status}</b>
      Title: <b className="title">{user.title}</b>
      {/* Show this button only if user is not already terminated (users status is working) */}
      <button className="fire">Fire Employee</button>
      {/* Show this button only if user is not already team lead or terminated */}
      <button className="promote">promote</button>
    </div>
  );
};
