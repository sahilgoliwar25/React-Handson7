import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./StudentDesc.css";
import { useSelector } from "react-redux";
import { EditedStudent } from "./StudentSlice";
import { useDispatch } from "react-redux";

const EditStudent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useLocation();
  const studentId = data.state;
  const stdData = useSelector((state) =>
    state.Student.filter((item) => item.id === studentId)
  );
  const { Name, Age, Batch, Course } = stdData[0];

  const [newName, setName] = useState(Name);
  const [newAge, setAge] = useState(Age);
  const [newBatch, setBatch] = useState(Batch);
  const [newCourse, setCourse] = useState(Course);
  const handleSubmit = () => {
    dispatch(
      EditedStudent({
        id: studentId,
        newName,
        newAge,
        newBatch,
        newCourse,
      })
    );
    navigate("/students");
  };
  const cancelClick = () => {
    navigate("/students");
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
              value={newName}
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
              value={newAge}
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
              value={newCourse}
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
              value={newBatch}
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
            type="button"
            onClick={handleSubmit}
          >
            Edit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditStudent;
