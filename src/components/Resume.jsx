import "../styles/Resume.css";

function Resume(props) {
  return (
    <div>
      <div className="resumeGeneral">
        <h2 className="name">{props.name}</h2>
        <div className="resumeGeneralInfo">
          <p>{props.email}</p>
          <p>{props.phone}</p>
        </div>
      </div>

      <div className="resumeEducation">
        <h3>Education</h3>
        <hr></hr>

        {props.education.length > 0 &&
          !props.editingEducation &&
          props.education.map((ed) => (
            <div key={ed.school} className="singleEducation">
              <div className="topLine">
                <p className="school">{ed.school}</p>
                <div className="dates">
                  <p>{ed.schoolStartDate}</p>
                  <p> - </p>
                  <p>{ed.schoolEndDate}</p>
                </div>
              </div>
              <p className="degree">{ed.degree}</p>
            </div>
          ))}

        {props.school ||
        props.degree ||
        props.schoolStartDate ||
        props.schoolEndDate ? (
          <div className="singleEducation">
            <div className="topLine">
              <p className="school">{props.school}</p>
              <div className="dates">
                <p>{props.schoolStartDate}</p>
                {props.schoolEndDate ? <p> - </p> : null}
                <p>{props.schoolEndDate}</p>
              </div>
            </div>
            <p className="degree">{props.degree}</p>
          </div>
        ) : (
          <></>
        )}
      </div>

      <div className="resumeExperience">
        <h3>Experience</h3>
        <hr></hr>
        {props.experience.length > 0 &&
          !props.editingExperience &&
          props.experience.map((ex) => (
            <div key={ex.company}>
              <div className="topLine">
                <p className="school">{ex.company}</p>
                <div className="dates">
                  <p>{ex.workStartDate}</p>
                  <p>-</p>
                  <p>{ex.workEndDate}</p>
                </div>
              </div>
              <div className="bottomLine">
                <p className="title">{ex.title}</p>
                <p className="responsibilities">{ex.responsibilities}</p>
              </div>
            </div>
          ))}

        {props.company ? (
          <div className="singleExperience">
            <div className="topLine">
              <p className="school">{props.company}</p>
              <div className="dates">
                <p>{props.workStartDate}</p>
                {props.workEndDate ? <p>-</p> : null}
                <p>{props.workEndDate}</p>
              </div>
            </div>
            <div className="bottomLine">
              <p className="title">{props.title}</p>
              <p className="responsibilities">{props.responsibilities}</p>
            </div>
          </div>
        ) : null}
        {/* <div className="singleExperience">
          <div className="topLine">
            <p className="school">{props.company}</p>
            <div className="dates">
              <p>{props.workStartDate}</p>
              {props.workEndDate ? <p>-</p> : null}
              <p>{props.workEndDate}</p>
            </div>
          </div>
          <div className="bottomLine">
            <p className="title">{props.title}</p>
            <p className="responsibilities">{props.responsibilities}</p>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Resume;
