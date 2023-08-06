import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Student.css";
import { useSelector } from "react-redux";

const Students = () => {
  const navi = useNavigate();
  const data = useSelector((state) => state.Student);
  console.log(data);
  const clickHandle = () => {
    navi("/add-student");
  };

  return (
    <div className="student">
      <div className="student-head">
        <h1>Students Details</h1>
        <button onClick={clickHandle}>Add New Student</button>
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
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.Name}</td>
                <td>{item.Age}</td>
                <td>{item.Course}</td>
                <td>{item.Batch}</td>
                <td>
                  <Link to="/students">Edit</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Students;
