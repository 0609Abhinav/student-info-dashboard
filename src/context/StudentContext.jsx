import React, { createContext, useState, useEffect } from "react";

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);

  useEffect(() => {
    const storedStudents = JSON.parse(localStorage.getItem("students")) || [];
    setStudents(storedStudents);
  }, []);

  const persistStudents = (updatedStudents) => {
    setStudents(updatedStudents);
    localStorage.setItem("students", JSON.stringify(updatedStudents));
  };

  const addStudent = (student) => persistStudents([...students, student]);
  const updateStudent = (updatedStudent) => {
    const updated = students.map((s) =>
      s.id === updatedStudent.id ? updatedStudent : s
    );
    persistStudents(updated);
    setSelectedStudent(updatedStudent);
  };
  const deleteStudent = (id) => {
    const updated = students.filter((s) => s.id !== id);
    persistStudents(updated);
    if (selectedStudent?.id === id) setSelectedStudent(null);
  };
  const selectStudent = (student) => setSelectedStudent(student);

  return (
    <StudentContext.Provider
      value={{ students, selectedStudent, addStudent, updateStudent, deleteStudent, selectStudent }}
    >
      {children}
    </StudentContext.Provider>
  );
};
