import React, { useContext, useState } from "react";
import { TabContext } from "../App";
import { FaUserGraduate, FaUserPlus, FaEdit, FaBars } from "react-icons/fa";

export default function Sidebar() {
  const { setActiveTab, activeTab } = useContext(TabContext);
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    { id: "list", label: "Student List", icon: <FaUserGraduate /> },
    { id: "add", label: "Add Student", icon: <FaUserPlus /> },
    // { id: "edit", label: "Edit Student", icon: <FaEdit /> },
  ];

  return (
    <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar-header">
        {!collapsed && <h2 className="sidebar-title">Student Dashboard</h2>}
        <button
          className="collapse-btn"
          onClick={() => setCollapsed(!collapsed)}
        >
          <FaBars />
        </button>
      </div>

      <ul className="sidebar-menu">
        {menuItems.map((item) => (
          <li
            key={item.id}
            className={activeTab === item.id ? "active" : ""}
            onClick={() => setActiveTab(item.id)}
            title={collapsed ? item.label : ""}
          >
            <span className="icon">{item.icon}</span>
            {!collapsed && <span className="label">{item.label}</span>}
          </li>
        ))}
      </ul>
    </aside>
  );
}
