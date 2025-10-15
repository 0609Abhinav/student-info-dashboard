import React, { useState } from "react";
import Sidebar from "./Sidebar";
import DashboardHome from "./DashboardHome";
import { TabContext } from "../App";

export default function DashboardLayout() {
  const [activeTab, setActiveTab] = useState("list");

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      <div className="dashboard-container">
        <Sidebar />

        <main className="dashboard-content">
          {activeTab === "list" && <DashboardHome />}
          {activeTab === "add" && <div className="placeholder">Add Student Form</div>}
          {activeTab === "edit" && <div className="placeholder">Edit Student Form</div>}
        </main>
      </div>
    </TabContext.Provider>
  );
}
