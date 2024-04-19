import { useState } from "react";
import General from "./components/General.jsx";
import Education from "./components/Education.jsx";
import Experience from "./components/Experience.jsx";
import Resume from "./components/Resume.jsx";
import "./styles/App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [schoolStartDate, setSchoolStartDate] = useState("");
  const [schoolEndDate, setSchoolEndDate] = useState("");
  const [company, setCompany] = useState("");
  const [title, setTitle] = useState("");
  const [workStartDate, setWorkStartDate] = useState("");
  const [workEndDate, setWorkEndDate] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  const [editingEducation, setEditingEducation] = useState(false);
  const [editingExperience, setEditingExperience] = useState(false);

  return (
    <>
      <div className="container">
        <div className="left">
          <General setName={setName} setEmail={setEmail} setPhone={setPhone} />
          <Education
            school={school}
            degree={degree}
            schoolStartDate={schoolStartDate}
            schoolEndDate={schoolEndDate}
            education={education}
            setSchool={setSchool}
            setDegree={setDegree}
            setSchoolStartDate={setSchoolStartDate}
            setSchoolEndDate={setSchoolEndDate}
            setEducation={setEducation}
            setEditingEducation={setEditingEducation}
          />
          <Experience
            company={company}
            title={title}
            workStartDate={workStartDate}
            workEndDate={workEndDate}
            responsibilities={responsibilities}
            experience={experience}
            setCompany={setCompany}
            setTitle={setTitle}
            setWorkStartDate={setWorkStartDate}
            setWorkEndDate={setWorkEndDate}
            setResponsibilities={setResponsibilities}
            setExperience={setExperience}
            setEditingExperience={setEditingExperience}
          />
        </div>
        <div className="right">
          <Resume
            name={name}
            email={email}
            phone={phone}
            school={school}
            degree={degree}
            schoolStartDate={schoolStartDate}
            schoolEndDate={schoolEndDate}
            company={company}
            title={title}
            workStartDate={workStartDate}
            workEndDate={workEndDate}
            responsibilities={responsibilities}
            education={education}
            experience={experience}
            editingEducation={editingEducation}
            editingExperience={editingExperience}
          />
        </div>
      </div>
    </>
  );
}

export default App;
