import React from "react";

import profile5 from "../../assets/image/profile5.png";
import "./cardStyle.css";

export default function App() {

    const onChangeMode = () => {
        if (localStorage.getItem("theme") === "dark") {
          document.documentElement.classList.add("dark");
          localStorage.setItem("theme", "light");
        } else {
          document.documentElement.classList.remove("dark");
          localStorage.setItem("theme", "dark");
        }
      };

  return (
    <>
      <div className="card" onClick={onChangeMode}>
        <img src={profile5} alt="profile img" className="imgCover" />

        <div className="cardText">
          <p>اریانا گراناده</p>
          <p>Software engeiner</p>
        </div>

       

        <i className="fa fa-angle-right text-slate-400"></i>
      </div>
    </>
  );
}
