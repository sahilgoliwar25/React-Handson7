import React, { useState } from "react";
import {Link} from 'react-router-dom'
import './Student.css'

const Students = () => {
  const [data] = useState([
    {
      Name: "Rachel",
      Age: 20,
      Course: "MERN",
      Batch: "January",
      Change: "Edit",
    },
    {
      Name: "Phoebe",
      Age: 12,
      Course: "MEAN",
      Batch: "February",
      Change: "Edit",
    },
    {
      Name: "Joey",
      Age: 45,
      Course: "MERN",
      Batch: "March",
      Change: "Edit",
    },
    {
      Name: "Chandler",
      Age: 23,
      Course: "MERN",
      Batch: "February",
      Change: "Edit",
    },
    {
      Name: "Ross",
      Age: 54,
      Course: "MEAN",
      Batch: "March",
      Change: "Edit",
    },
  ]);
  return(
    <div className="student">
      <div className="student-head">
        <h1>Students Details</h1>
        <button>Add New Student</button>
        </div>
        <table className="table-container" cellPadding="20px">
          <thead>
            <tr className="tableRow">
                <th>Name</th>
                <th>Age</th>
                <th>Course</th>
                <th>Batch</th>
                <th>Change</th>
            </tr>
            </thead>
            <tbody>
            {data.map((item, index) =>{
                return(
                    <tr key={index}>
                        <td>{item.Name}</td>
                        <td>{item.Age}</td>
                        <td>{item.Course}</td>
                        <td>{item.Batch}</td>
                        <td><Link to='/students'>{item.Change}</Link></td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    </div>
  ) 
};

export default Students;
