import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const EmployeeList = () => {
  const [list,setList] = useState([]);
  useEffect(()=>{
    axios.get(`http://localhost:8080/employee`).then(({data})=>{
      setList(data)
    })
  },[])
  console.log(list)
  return (
    <div className="list_container">
      {
        list.map((e)=>(
        <Link to={`/employees/${e.id}`}>
          <div className="employee_card">
          <img src={e.image} className="employee_image" />
          <span className="employee_name">{e.employee_name}</span>
          <span className="employee_title">{e.title}</span>
          </div>
        </Link>
        ))
      
    }
    </div>
  );
};
