import React from "react";

import Card from "./components/card/Card";
import Header from "./components/header/Header";
import Team from "./components/team/Team";
import "./assets/font/all.css";
import "./index.css";
import Sidebar from "./components/sidebar/Sidebar";

export default function App() {
  if (localStorage.getItem("theme") === "dark") {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "dark");
  }

  return (
    <section className="containerMain">
      <Sidebar />
      <section className="boxRight">
        <Header />
        <Team />
      </section>
    </section>
  );
}
