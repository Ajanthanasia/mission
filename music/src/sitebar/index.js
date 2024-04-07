import React from "react";
import "./sitebar.css";
import SidebarButton from "./sidebarButton";


export default function Sidebar() {
  return (
    <div className="SidebarContainner">
      <div>
        <SidebarButton title="Home" to="/" />
        <SidebarButton title="Scarch" to="/scarch" />
        <SidebarButton title="Album" to="/albumlisting" />
        <SidebarButton title="Gener" to="/gener" />
        <SidebarButton title="Artist" to="/artistlisting" />
      </div>
    </div>
  );
}
