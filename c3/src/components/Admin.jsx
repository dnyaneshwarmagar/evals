
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
export const Admin = () => {

  const [formData ,setFormData]=useState([])
 
  
  const handleChange=(e)=>{
  
    const {name, value}=e.target
        setFormData({
            ...formData,[name]:value,
        })
    }
  
  
    const handleSubmit=(e)=>{
      e.preventDefault()
      console.log(formData)
   
     
      const create={
       
        "employee_name": formData.employee_name,
        "employee_id":formData.employee_id,
        "title": formData.title,
        "salary": formData.salary,
        "image": formData.image,
        "username": formData.username,
        "password": formData.password,
        "tasks": formData.tasks,
        "status": formData.status,
        "team": formData.team,
      }
      fetch("http://localhost:8080/employee",{
        method:"POST",
        headers:{
            "content-type":"application/json",
        },
        body:JSON.stringify(create),
      
      }).then(()=>{
        
      })
      alert("registration succesful")
      
      }
  return (
    <form  onSubmit={handleSubmit}  className="createEmployee">
      <input onChange={handleChange} type="text" placeholder="Employee Name" name="employee_name" />
      <input onChange={handleChange} type="text" placeholder="Employee id" name="employee_id" />
      <select onChange={handleChange} name="title">
        <option value="intern">Intern</option>
        <option value="Jr Software Developer">Jr Software Developer</option>
        <option value="Sr Software Developer">Sr Software Developer</option>
        <option value="Team Lead">Team Lead</option>
      </select>
      <input onChange={handleChange} type="number" placeholder="Salary" name="salary" />
      <input onChange={handleChange} type="text" placeholder="Image" name="image" />
      <input onChange={handleChange} type="text" placeholder="User Name" name="username" />
      <input onChange={handleChange} type="password" placeholder="Password" name="password" />
      <input onChange={handleChange}
        type="text"
        placeholder="Enter tasks separated by commas"
        name="tasks"
      />
      <select onChange={handleChange} name="status" id="status">
        <option value="">Select Status</option>
        <option value="terminated">Terminated</option>
        <option value="working">Working</option>
      </select>
      <select onChange={handleChange} name="team" id="team">
        <option value="">Select team</option>
        <option value="frontend">Frontend</option>
        <option value="backend">Backend</option>
        <option value="qa">QA</option>
      </select>
      <input className="createUser" type="submit" value={"submit"} />
    </form>
  );
};
