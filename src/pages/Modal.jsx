import React, { useState, useContext } from "react";
import { FaTimes } from "react-icons/fa";
import { StudentContext } from "../context/StudentContext";

export default function Modal({ type, student, onClose, onDelete }) {
  const { updateStudent } = useContext(StudentContext);

  const [name, setName] = useState(student.name);
  const [email, setEmail] = useState(student.email);
  const [age, setAge] = useState(student.age);
  const [major, setMajor] = useState(student.major);
  const [mobile, setMobile] = useState(student.mobile);

  const handleUpdate = () => {
    updateStudent({
      ...student,
      name,
      email,
      age: parseInt(age),
      major,
      mobile,
    });
    onClose();
  };

  // Inline styles
  const styles = {
    overlay: {
      position: "fixed",
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: "rgba(0,0,0,0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
    },
    modal: {
      backgroundColor: "#fff",
      padding: "20px",
      borderRadius: "10px",
      width: "400px",
      maxWidth: "90%",
      boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
      position: "relative",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "15px",
    },
    closeIcon: {
      cursor: "pointer",
      fontSize: "18px",
      color: "#333",
    },
    input: {
      width: "100%",
      padding: "8px 10px",
      marginBottom: "10px",
      borderRadius: "5px",
      border: "1px solid #ccc",
      fontSize: "14px",
    },
    btnEdit: {
      padding: "8px 15px",
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
    btnDelete: {
      padding: "8px 15px",
      backgroundColor: "#dc3545",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      marginRight: "10px",
    },
    btnCancel: {
      padding: "8px 15px",
      backgroundColor: "#6c757d",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div style={styles.header}>
          <h3>
            {type === "view" && "View Student"}
            {type === "edit" && "Edit Student"}
            {type === "delete" && "Delete Student"}
          </h3>
          <FaTimes style={styles.closeIcon} onClick={onClose} />
        </div>

        <div>
          {type === "view" && (
            <div>
              <p><strong>Name:</strong> {student.name}</p>
              <p><strong>Email:</strong> {student.email}</p>
              <p><strong>Age:</strong> {student.age}</p>
              <p><strong>Major:</strong> {student.major}</p>
              <p><strong>Mobile:</strong> {student.mobile}</p>
            </div>
          )}

          {type === "edit" && (
            <div>
              <input style={styles.input} value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
              <input style={styles.input} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
              <input style={styles.input} value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" />
              <input style={styles.input} value={major} onChange={(e) => setMajor(e.target.value)} placeholder="Major" />
              <input style={styles.input} value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="Mobile" />
              <button style={styles.btnEdit} onClick={handleUpdate}>Update</button>
            </div>
          )}

          {type === "delete" && (
            <div>
              <p>Are you sure you want to delete <strong>{student.name}</strong>?</p>
              <button style={styles.btnDelete} onClick={onDelete}>Yes, Delete</button>
              <button style={styles.btnCancel} onClick={onClose}>Cancel</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
