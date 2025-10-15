import React, { useState, useEffect, useContext } from "react";
import { StudentContext } from "../context/StudentContext";

const EditStudentForm = () => {
  const { selectedStudent, updateStudent } = useContext(StudentContext);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [major, setMajor] = useState("");

  useEffect(() => {
    if (selectedStudent) {
      setName(selectedStudent.name);
      setAge(selectedStudent.age);
      setMajor(selectedStudent.major);
    }
  }, [selectedStudent]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedStudent) return;
    updateStudent({ ...selectedStudent, name, age: parseInt(age), major });
  };

  if (!selectedStudent) return null;

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Edit Student</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={e=>setName(e.target.value)} />
        <input type="number" value={age} onChange={e=>setAge(e.target.value)} />
        <input type="text" value={major} onChange={e=>setMajor(e.target.value)} />
        <button className="update" type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditStudentForm;
