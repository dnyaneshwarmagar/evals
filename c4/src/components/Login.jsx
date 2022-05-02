import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
const [form ,setForm]=useState({
  username:"",
  pass:""
})
const navigate = useNavigate();

const [data,setData]=useState([]);


const handleChange=(e)=>{
const {name,value}=e.target;
setForm({...form,
  [name]:value
})
}

useEffect(()=>{
  getData()
},[])

const getData=async()=>{
  const res=await fetch("http://localhost:8080/users")
  const data=await res.json()
  setData(data)
}

// console.log(data[0].role)
console.log(form)

const handleSubmit=()=>{
  
  data.map(e=>{
    
    if(e.username==form.username && e.pass==form.pass)
    {console.log(form.username,e.username)
      if(e.role==="admin")
      {
        navigate("/orders")
      }else{
        navigate("/neworder")
      }
    }
  })
}



  return (
    <div>
      <input
        className="username"
        type="text"
        name="username"
        placeholder="Enter Username"
        onChange={handleChange}
      />
      <input
        className="password"
        type="password"
        name="password"
        placeholder="Enter password"
        onChange={handleChange}
      />
      {/* On this button click make network req to find user with same username and password */}
      {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
      <button className="submit" onClick={handleSubmit}>Login</button>
    </div>
  );
};
