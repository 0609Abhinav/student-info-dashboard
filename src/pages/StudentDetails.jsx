import React from "react";
import "./StudentDetails.css";

const StudentDetails = ({ student }) => {
  if (!student) 
    return <div className="student-details-placeholder">Select a student to see details</div>;

  return (
    <div className="student-details-card">
      <h2>Student Details</h2>
      <div className="details-row">
        <span className="label">Name:</span>
        <span className="value">{student.name}</span>
      </div>
      <div className="details-row">
        <span className="label">Email:</span>
        <span className="value">{student.email}</span>
      </div>
      <div className="details-row">
        <span className="label">Age:</span>
        <span className="value">{student.age}</span>
      </div>
      <div className="details-row">
        <span className="label">Major:</span>
        <span className="value">{student.major}</span>
      </div>
      <div className="details-row">
        <span className="label">Mobile:</span>
        <span className="value">{student.mobile}</span>
      </div>
    </div>
  );
};

export default StudentDetails;
