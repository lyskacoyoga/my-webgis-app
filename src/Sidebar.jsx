import React from "react";

export default function Sidebar({ isOpen, onNavigate }) {
  return (
    <div className={`fixed top-0 left-0 h-full bg-white shadow-lg transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300`}>
      <ul className="p-4 space-y-4">
        <li>
          <button onClick={() => onNavigate("dashboard")}>Dashboard</button>
        </li>
        <li>
          <button onClick={() => onNavigate("settings")}>Settings</button>
        </li>
        <li>
          <button onClick={() => onNavigate("resources")}>Resources</button>
        </li>
      </ul>
    </div>
  );
}
