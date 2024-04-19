import { useState } from "react";
import "../styles/Experience.css";

function Experience({
  company,
  title,
  workStartDate,
  workEndDate,
  responsibilities,
  experience,
  setCompany,
  setTitle,
  setWorkStartDate,
  setWorkEndDate,
  setResponsibilities,
  setExperience,
  setEditingExperience,
}) {
  const [showForm, setShowForm] = useState(true);
  const [showEditForm, setShowEditForm] = useState(false);
  const [idToEdit, setIdToEdit] = useState(0);

  const handleAddExperienceButton = () => {
    setShowForm(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      if (company && title && workStartDate && workEndDate) {
        const info = {
          company: company,
          title: title,
          workStartDate: workStartDate,
          workEndDate: workEndDate,
          responsibilities: responsibilities,
        };
        setExperience((oldInfo) => [...oldInfo, info]);
        resetForm();
        setShowForm(false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const editExperience = (ex, i) => {
    setIdToEdit(i);
    setShowEditForm(true);
    setCompany(ex.company);
    setTitle(ex.title);
    setWorkStartDate(ex.workStartDate);
    setWorkEndDate(ex.workEndDate);
    setResponsibilities(ex.responsibilities);
    setEditingExperience(true);
  };

  const handleEditSubmit = (event) => {
    event.preventDefault();
    const newInfo = experience.map((info, i) => {
      if (i === idToEdit) {
        return {
          company: company,
          title: title,
          workStartDate: workStartDate,
          workEndDate: workEndDate,
          responsibilities: responsibilities,
        };
      } else {
        return info;
      }
    });
    setExperience(newInfo);
    resetForm();
    setShowEditForm(false);
    setEditingExperience(false);
  };

  const deleteExperience = () => {
    event.preventDefault();
    const newExperience = experience.toSpliced(idToEdit, 1);
    setExperience(newExperience);
    resetForm();
    setShowEditForm(false);
  };

  const resetForm = () => {
    setCompany("");
    setTitle("");
    setWorkStartDate("");
    setWorkEndDate("");
    setResponsibilities("");
  };

  return (
    <div className="experienceContainer">
      <h3>Experience</h3>
      {showForm ? (
        <form onSubmit={handleSubmit} className="form">
          <label>
            Company:{" "}
            <input
              value={company}
              name="company"
              onChange={(e) => setCompany(e.target.value)}
            ></input>
          </label>
          <label>
            Title:{" "}
            <input
              value={title}
              name="title"
              onChange={(e) => setTitle(e.target.value)}
            ></input>
          </label>
          <label>
            Start Date:{" "}
            <input
              value={workStartDate}
              name="startDate"
              onChange={(e) => setWorkStartDate(e.target.value)}
            ></input>
          </label>
          <label>
            End Date:{" "}
            <input
              value={workEndDate}
              name="endDate"
              onChange={(e) => setWorkEndDate(e.target.value)}
            ></input>
          </label>
          <label>
            Responsibilities:{" "}
            <input
              value={responsibilities}
              name="responsibilities"
              onChange={(e) => setResponsibilities(e.target.value)}
            ></input>
          </label>
          <button type="submit" value="submit">
            Save
          </button>
        </form>
      ) : showEditForm ? (
        <form onSubmit={handleEditSubmit} className="">
          <label>
            Company:{" "}
            <input
              value={company}
              name="company"
              onChange={(e) => setCompany(e.target.value)}
            ></input>
          </label>
          <label>
            Title:{" "}
            <input
              value={title}
              name="title"
              onChange={(e) => setTitle(e.target.value)}
            ></input>
          </label>
          <label>
            Start Date:{" "}
            <input
              value={workStartDate}
              name="startDate"
              onChange={(e) => setWorkStartDate(e.target.value)}
            ></input>
          </label>
          <label>
            End Date:{" "}
            <input
              value={workEndDate}
              name="endDate"
              onChange={(e) => setWorkEndDate(e.target.value)}
            ></input>
          </label>
          <label>
            Responsibilities:{" "}
            <input
              value={responsibilities}
              name="responsibilities"
              onChange={(e) => setResponsibilities(e.target.value)}
            ></input>
          </label>
          <button onClick={deleteExperience}>Delete</button>
          <button type="submit" value="submit">
            Save
          </button>
        </form>
      ) : (
        <div>
          <ul>
            {experience.length > 0 &&
              experience.map((ex, i) => (
                <li key={i} onClick={() => editExperience(ex, i)}>
                  {ex.company}
                </li>
              ))}
          </ul>
          <button onClick={handleAddExperienceButton}>Add Experience</button>
        </div>
      )}
    </div>
  );
}

export default Experience;
