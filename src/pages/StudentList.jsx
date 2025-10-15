import { useState, useMemo } from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import Modal from "./Modal";

const StudentList = ({ students, deleteStudent, onSelect }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const [currentStudent, setCurrentStudent] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const openModal = (type, student) => {
    setModalType(type);
    setCurrentStudent(student);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentStudent(null);
    setModalType("");
  };

  const handleDelete = (id) => {
    deleteStudent(id);
    closeModal();
  };

  const filteredStudents = useMemo(() => {
    return students.filter(
      (student) =>
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        String(student.age).includes(searchTerm)
    );
  }, [students, searchTerm]);

  const totalPages = Math.ceil(filteredStudents.length / itemsPerPage);
  const paginatedStudents = filteredStudents.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Inline CSS styles
  const styles = {
    container: {
      padding: "20px",
      fontFamily: "Arial, sans-serif",
    },
    card: {
      backgroundColor: "#fff",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    },
    search: {
      padding: "8px 12px",
      marginBottom: "15px",
      width: "100%",
      borderRadius: "5px",
      border: "1px solid #ccc",
      fontSize: "14px",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
    },
    th: {
      border: "1px solid #ccc",
      padding: "10px",
      textAlign: "left",
      backgroundColor: "#f0f0f0",
    },
    td: {
      border: "1px solid #ccc",
      padding: "10px",
      textAlign: "left",
    },
    actions: {
      display: "flex",
      gap: "10px",
    },
    clickable: {
      cursor: "pointer",
      color: "#007bff",
      textDecoration: "underline",
    },
    pagination: {
      marginTop: "15px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "5px",
    },
    noData: {
      textAlign: "center",
      padding: "15px",
      color: "#999",
    },
    icon: {
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Students</h2>

        <input
          type="text"
          placeholder="Search by name or age..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={styles.search}
        />

        <div style={{ overflowX: "auto" }}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>ID</th>
                <th style={styles.th}>Name</th>
                <th style={styles.th}>Age</th>
                <th style={styles.th}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedStudents.length === 0 ? (
                <tr>
                  <td colSpan="4" style={styles.noData}>
                    No students found.
                  </td>
                </tr>
              ) : (
                paginatedStudents.map((student, index) => (
                  <tr key={student.id}>
                    <td style={styles.td}>{(currentPage - 1) * itemsPerPage + index + 1}</td>
                    <td
                      style={{ ...styles.td, ...styles.clickable }}
                      onClick={() => openModal("view", student)}
                    >
                      {student.name}
                    </td>
                    <td style={styles.td}>{student.age}</td>
                    <td style={{ ...styles.td, ...styles.actions }}>
                      <FaEye
                        style={styles.icon}
                        title="View"
                        onClick={() => openModal("view", student)}
                      />
                      <FaEdit
                        style={styles.icon}
                        title="Edit"
                        onClick={() => openModal("edit", student)}
                      />
                      <FaTrash
                        style={styles.icon}
                        title="Delete"
                        onClick={() => openModal("delete", student)}
                      />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div style={styles.pagination}>
            <button onClick={() => setCurrentPage(1)} disabled={currentPage === 1}>
              {"<<"}
            </button>
            <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
              {"<"}
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>
              {">"}
            </button>
            <button onClick={() => setCurrentPage(totalPages)} disabled={currentPage === totalPages}>
              {">>"}
            </button>
          </div>
        )}
      </div>

      {modalOpen && currentStudent && (
        <Modal
          type={modalType}
          student={currentStudent}
          onClose={closeModal}
          onDelete={() => handleDelete(currentStudent.id)}
        />
      )}
    </div>
  );
};

export default StudentList;
