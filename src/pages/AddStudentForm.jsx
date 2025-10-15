import React, { useState, useContext } from "react";
import { StudentContext } from "../context/StudentContext";
import "./AddStudentForm.css";

const AddStudentForm = () => {
  const { addStudent } = useContext(StudentContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [major, setMajor] = useState("");
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !age || !major || !mobile) {
      setError("Please fill all fields");
      return;
    }

    addStudent({
      id: Date.now(),
      name,
      email,
      age: parseInt(age),
      major,
      mobile,
    });

    setName("");
    setEmail("");
    setAge("");
    setMajor("");
    setMobile("");
    setError("");
  };

  return (
    <div className="add-student-form">
      <h3>Add New Student</h3>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="text"
          placeholder="Major"
          value={major}
          onChange={(e) => setMajor(e.target.value)}
        />
        <input
          type="text"
          placeholder="Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <button type="submit" className="btn-add">
          ➕ Add Student
        </button>
      </form>
    </div>
  );
};

export default AddStudentForm;
