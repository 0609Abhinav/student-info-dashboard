// import React, { useContext, useState, createContext } from "react";
// import { StudentProvider, StudentContext } from "./context/StudentContext";
// import StudentList from "./pages/StudentList";
// import StudentDetails from "./pages/StudentDetails";
// import AddStudentForm from "./pages/AddStudentForm";
// import EditStudentForm from "./pages/EditStudentForm";
// import Header from "./components/Header";
// import Sidebar from "./components/Sidebar";
// import Footer from "./components/Footer";
// import "./App.css";
// import "./index.css";

// // ✅ Create a Tab Context so Sidebar and Tabs can communicate
// export const TabContext = createContext();

// function App() {
//   const [activeTab, setActiveTab] = useState("list");

//   return (
//     <StudentProvider>
//       <TabContext.Provider value={{ activeTab, setActiveTab }}>
//         <div className="dashboard-container">
//           <Header />
//           <div className="dashboard-body">
//             <Sidebar />
//             <main className="dashboard-main">
//               <div className="dashboard-content">
//                 <div className="student-panel">
//                   <StudentTabs />
//                 </div>
//                 <div className="student-details-panel">
//                   <StudentDetailsWrapper />
//                 </div>
//               </div>
//             </main>
//           </div>
//           <Footer />
//         </div>
//       </TabContext.Provider>
//     </StudentProvider>
//   );
// }

// /** === Wrappers (existing logic stays untouched) === */
// const StudentListWrapper = () => {
//   const { students, selectStudent } = useContext(StudentContext);
//   return <StudentList students={students} onSelect={selectStudent} />;
// };

// const StudentDetailsWrapper = () => {
//   const { selectedStudent } = useContext(StudentContext);
//   return <StudentDetails student={selectedStudent} />;
// };

// /** === Tabs inside Student Panel === */
// const StudentTabs = () => {
//   const { activeTab, setActiveTab } = useContext(TabContext);

//   return (
//     <div className="student-tabs">
//       <div className="tab-header">
//         <button
//           className={activeTab === "list" ? "active" : ""}
//           onClick={() => setActiveTab("list")}
//         >
//           Student List
//         </button>
//         {/* <button
//           className={activeTab === "add" ? "active" : ""}
//           onClick={() => setActiveTab("add")}
//         >
//           Add Student
//         </button> */}
//         {/* <button
//           className={activeTab === "edit" ? "active" : ""}
//           onClick={() => setActiveTab("edit")}
//         >
//           Edit Student
//         </button> */}
//       </div>

//       <div className="tab-content">
//         {activeTab === "list" && <StudentListWrapper />}
//         {activeTab === "add" && <AddStudentForm />}
//         {activeTab === "edit" && <EditStudentForm />}
//       </div>
//     </div>
//   );
// };

// export default App;
  import React, { useContext, useState, createContext } from "react";
import { StudentProvider, StudentContext } from "./context/StudentContext";
import StudentList from "./pages/StudentList";
import StudentDetails from "./pages/StudentDetails";
import AddStudentForm from "./pages/AddStudentForm";
import EditStudentForm from "./pages/EditStudentForm";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import "./App.css";
import "./index.css";

// ✅ Create a Tab Context so Sidebar and Tabs can communicate
export const TabContext = createContext();

function App() {
  const [activeTab, setActiveTab] = useState("list");

  return (
    <StudentProvider>
      <TabContext.Provider value={{ activeTab, setActiveTab }}>
        <div className="dashboard-container">
          <Header />
          <div className="dashboard-body">
            <Sidebar />
            <main className="dashboard-main">
              <div className="dashboard-content">
                <div className="student-panel">
                  <StudentTabs />
                </div>
                <div className="student-details-panel">
                  <StudentDetailsWrapper />
                </div>
              </div>
            </main>
          </div>
          <Footer />
        </div>
      </TabContext.Provider>
    </StudentProvider>
  );
}

/** === Wrappers (pass deleteStudent from context) === */
const StudentListWrapper = () => {
  const { students, selectStudent, deleteStudent } = useContext(StudentContext);

  return (
    <StudentList
      students={students}
      onSelect={selectStudent}
      deleteStudent={deleteStudent} // ✅ added
    />
  );
};

const StudentDetailsWrapper = () => {
  const { selectedStudent } = useContext(StudentContext);
  return <StudentDetails student={selectedStudent} />;
};

/** === Tabs inside Student Panel === */
const StudentTabs = () => {
  const { activeTab, setActiveTab } = useContext(TabContext);

  return (
    <div className="student-tabs">
      <div className="tab-header">
        <button
          className={activeTab === "list" ? "active" : ""}
          onClick={() => setActiveTab("list")}
        >
          Student List
        </button>
        {/* Uncomment to enable add/edit tabs */}
        {/* <button
          className={activeTab === "add" ? "active" : ""}
          onClick={() => setActiveTab("add")}
        >
          Add Student
        </button> */}
        {/* <button
          className={activeTab === "edit" ? "active" : ""}
          onClick={() => setActiveTab("edit")}
        >
          Edit Student
        </button> */}
      </div>

      <div className="tab-content">
        {activeTab === "list" && <StudentListWrapper />}
        {activeTab === "add" && <AddStudentForm />}
        {activeTab === "edit" && <EditStudentForm />}
      </div>
    </div>
  );
};

export default App;
