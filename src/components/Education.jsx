import { useState } from "react";
import "../styles/Education.css";

function Education({
  school,
  degree,
  schoolStartDate,
  schoolEndDate,
  education,
  setSchool,
  setDegree,
  setSchoolStartDate,
  setSchoolEndDate,
  setEducation,
  setEditingEducation,
}) {
  const [showForm, setShowForm] = useState(true);
  const [showEditForm, setShowEditForm] = useState(false);
  const [idToEdit, setIdToEdit] = useState(0);

  const handleAddEducationButton = () => {
    setShowForm(true);
  };

  const handleSubmit = (event) => {
    try {
      event.preventDefault();
      if (school && degree && schoolStartDate && schoolEndDate) {
        const info = {
          school: school,
          degree: degree,
          schoolStartDate: schoolStartDate,
          schoolEndDate: schoolEndDate,
        };
        setEducation((oldInfo) => [...oldInfo, info]);
        resetForm();
        setShowForm(false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const editEducation = (ed, i) => {
    setIdToEdit(i);
    setShowEditForm(true);
    setSchool(ed.school);
    setDegree(ed.degree);
    setSchoolStartDate(ed.schoolStartDate);
    setSchoolEndDate(ed.schoolEndDate);
    setEditingEducation(true);
  };

  const handleEditSubmit = (event) => {
    try {
      event.preventDefault();
      if (school && degree && schoolStartDate && schoolEndDate) {
        const newInfo = education.map((info, i) => {
          if (i === idToEdit) {
            return {
              school: school,
              degree: degree,
              schoolStartDate: schoolStartDate,
              schoolEndDate: schoolEndDate,
            };
          } else {
            return info;
          }
        });
        setEducation(newInfo);
        resetForm();
        setShowEditForm(false);
        setEditingEducation(false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const deleteEducation = () => {
    event.preventDefault();
    const newEducation = education.toSpliced(idToEdit, 1);
    setEducation(newEducation);
    resetForm();
    setShowEditForm(false);
  };

  const resetForm = () => {
    setSchool("");
    setDegree("");
    setSchoolStartDate("");
    setSchoolEndDate("");
  };

  return (
    <div className="educationContainer">
      <h3>Education</h3>
      {showForm ? (
        <form onSubmit={handleSubmit} className="form">
          <label>
            School:{" "}
            <input
              value={school}
              name="school"
              onChange={(e) => setSchool(e.target.value)}
            ></input>
          </label>
          <label>
            Degree:{" "}
            <input
              value={degree}
              name="degree"
              onChange={(e) => setDegree(e.target.value)}
            ></input>
          </label>
          <label>
            Start Date:{" "}
            <input
              value={schoolStartDate}
              name="startDate"
              onChange={(e) => setSchoolStartDate(e.target.value)}
            ></input>
          </label>
          <label>
            End Date:{" "}
            <input
              value={schoolEndDate}
              name="endDate"
              onChange={(e) => setSchoolEndDate(e.target.value)}
            ></input>
          </label>
          <button type="submit" value="submit">
            Save
          </button>
        </form>
      ) : showEditForm ? (
        <form onSubmit={handleEditSubmit} className="form">
          <label>
            School:{" "}
            <input
              value={school}
              name="school"
              onChange={(e) => setSchool(e.target.value)}
            ></input>
          </label>
          <label>
            Degree:{" "}
            <input
              value={degree}
              name="degree"
              onChange={(e) => setDegree(e.target.value)}
            ></input>
          </label>
          <label>
            Start Date:{" "}
            <input
              value={schoolStartDate}
              name="startDate"
              onChange={(e) => setSchoolStartDate(e.target.value)}
            ></input>
          </label>
          <label>
            End Date:{" "}
            <input
              value={schoolEndDate}
              name="endDate"
              onChange={(e) => setSchoolEndDate(e.target.value)}
            ></input>
          </label>
          <button onClick={deleteEducation}>Delete</button>
          <button type="submit" value="submit">
            Save
          </button>
        </form>
      ) : (
        <div>
          <ul>
            {education.length > 0 &&
              education.map((ed, i) => (
                <li key={i} onClick={() => editEducation(ed, i)}>
                  {ed.school}
                </li>
              ))}
          </ul>
          <button onClick={handleAddEducationButton}>Add Education</button>
        </div>
      )}
    </div>
  );
}

export default Education;
