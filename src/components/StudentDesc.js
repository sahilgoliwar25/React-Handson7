import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddStudent } from "./StudentSlice";

import { useNavigate } from "react-router-dom";
import "./StudentDesc.css";

const StudentDesc = () => {
  const studentList = useSelector((state) => state.Student);
  const navi = useNavigate();
  const dispatch = useDispatch();
  const [Name, setName] = useState("");
  const [Age, setAge] = useState("");
  const [Batch, setBatch] = useState("");
  const [Course, setCourse] = useState("");

  const clickHandle = () => {
    dispatch(
      AddStudent({
        id: studentList.length + 1,
        Name,
        Age,
        Batch,
        Course,
      })
    );
    setName("");
    setAge("");
    setBatch("");
    setCourse("");
    navi("/students");
  };
  const cancelClick = () => {
    navi("/students");
  };
  return (
    <div className="body-container">
      <form>
        <div className="form-row">
          <div className="form-input">
            <label htmlFor="name" className="form-label">
              Name{" "}
            </label>
            <input
              id="name"
              type="text"
              placeholder="Name"
              name="Name"
              className="form-field"
              value={Name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <br />
          <div className="form-input">
            <label htmlFor="age" className="form-label">
              Age{" "}
            </label>
            <input
              id="age"
              type="text"
              placeholder="Age"
              name="Age"
              className="form-field"
              value={Age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <br />
        </div>
        <div className="form-row">
          <div className="form-input">
            <label htmlFor="course" className="form-label">
              Course{" "}
            </label>
            <input
              id="course"
              type="text"
              placeholder="Course"
              name="Course"
              className="form-field"
              value={Course}
              onChange={(e) => setCourse(e.target.value)}
            />
          </div>
          <br />
          <div className="form-input">
            <label htmlFor="batch" className="form-label">
              Batch{" "}
            </label>
            <input
              id="batch"
              type="text"
              placeholder="Batch"
              name="Batch"
              className="form-field"
              value={Batch}
              onChange={(e) => setBatch(e.target.value)}
            />
          </div>
          <br />
        </div>
        <div className="form-actions">
          <button
            className="css-button-neumorphic"
            onClick={cancelClick}
            type="button"
          >
            Cancel
          </button>
          <button
            className="css-button-neumorphic"
            onClick={clickHandle}
            type="button"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentDesc;
