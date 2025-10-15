import React, { useContext, useState, useEffect } from "react";
import { StudentContext } from "../context/StudentContext";
import { FaUsers, FaUserCheck, FaGraduationCap } from "react-icons/fa";
import "./DashboardHome.css";

export default function DashboardHome() {
  const { students } = useContext(StudentContext);
  const total = students.length;
  const active = Math.round(total * 0.8);
  const graduated = Math.round(total * 0.2);

  // Animated counters
  const [totalCount, setTotalCount] = useState(0);
  const [activeCount, setActiveCount] = useState(0);
  const [gradCount, setGradCount] = useState(0);

  useEffect(() => {
    const duration = 1000;
    const stepTime = 20;
    const animate = (target, setter) => {
      let current = 0;
      const step = Math.ceil(target / (duration / stepTime));
      const interval = setInterval(() => {
        current += step;
        if (current >= target) {
          setter(target);
          clearInterval(interval);
        } else setter(current);
      }, stepTime);
    };
    animate(total, setTotalCount);
    animate(active, setActiveCount);
    animate(graduated, setGradCount);
  }, [total, active, graduated]);

  const cards = [
    { title: "Total Students", value: totalCount, icon: <FaUsers />, color: "#4da6ff" },
    { title: "Active Students", value: activeCount, icon: <FaUserCheck />, color: "#33cc99" },
    { title: "Graduated", value: gradCount, icon: <FaGraduationCap />, color: "#ff9966" },
  ];

  return (
    <div className="home-container">
      <header className="dashboard-header">
        <h2>Welcome to the Student Dashboard</h2>
        <p>Manage and track student information efficiently</p>
      </header>

      <div className="stats-grid">
        {cards.map((card) => (
          <div
            key={card.title}
            className="stat-card"
            style={{ background: `linear-gradient(135deg, ${card.color}, #ffffff)` }}
          >
            <div className="card-icon">{card.icon}</div>
            <h3>{card.title}</h3>
            <p>{card.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
