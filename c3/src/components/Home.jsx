import axios from "axios";
import { useEffect, useState } from "react";
import './Home.css';

export const Home = () => {
  // create statistics for user.
  // get Total user count from DB,
  // other fields are in memory values stored in context API.
  // they will reset to 0
  // if page gets refreshed

  // thins to store in context api
  //   total: get from db,
  //   terminated: 0, // inc when user in terminated
  //   promoted: 0,// inc when user in promoted
  //   total_new: 0,/ / inc when a new user in created
  const [list,setList] = useState([]);

  useEffect(()=>{
    axios.get(`http://localhost:8080/employee`).then(({data})=>{
      setList(data)
   
   })
  },[])

  let count={
    terminated:0,
    promoted:0,
    new:0
  }

  list.map((e)=>{    
    if(e.status==="terminated")
    {
      count.terminated++
    }
    if(e.title!="Team Lead" && e.title !="intern"&& e.status!=="terminated")
    {
      count.promoted++
    }
    if(e.title=="intern")
    {
      count.new++
    }
  
  })

  return (
    <>
      <h3 className="welcome">Welcome To employee management system</h3>
      <div className="home">
        <span>Stats</span>
        <div>
          Total Employees<span className="totalemp">{list.length}</span>
        </div>
        <div>
          Total Terminated: <span className="total_terminated">{count.terminated}</span>
        </div>
        <div>
          Total Promoted: <span className="total_promoted">{count.promoted}</span>
        </div>
        <div>
          Total New: <span className="total_new">{count.new}</span>
        </div>
      </div>
    </>
  );
};
