import "../styles/General.css";

function General({ setName, setEmail, setPhone }) {
  return (
    <div className="generalContainer">
      <h3>General Information</h3>
      <label>
        Name: <input name="name" onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Email: <input name="email" onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Phone Number:{" "}
        <input name="phone" onChange={(e) => setPhone(e.target.value)} />
      </label>
    </div>
  );
}

export default General;
