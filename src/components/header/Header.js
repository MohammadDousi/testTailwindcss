import React from "react";

import profile from "../../assets/image/profile5.png";

export default function () {
  return (
    <div className="header">
      <div className="headerBoxleft">
        <div className="imgCoverProfile">
          <img src={profile} alt={profile} />
          <span className="absolute bottom-1 right-0 inline-flex rounded-full h-2 w-2 bg-green-500 ring-2 ring-offset-0 ring-white"></span>
        </div>

        <div className="nameText">
          <h1>Jenefer Akanjei</h1>
          <h2>Front-End developer</h2>
        </div>

        <span className="w-1 h-full mx-2 bg-slate-100 rounded-full"></span>

        <div className="todayCalenderHeader">
          <i className="far fa-calendar-check"></i>
          <p>27 Feb</p>
        </div>
      </div>

      <div className="headerBoxRight">
        <div className="search">
          <i className="fa fa-search"></i>
          <input type="text" placeholder="Search" />
        </div>

        <div className="notif">
          <i className="far fa-bell"></i>

          <span className="absolute top-1 right-0 inline-flex rounded-full h-2 w-2 bg-red-500 ring-2 ring-offset-0 ring-white"></span>
        </div>

        <div className="notif">
          <i className="far fa-comment-dots"></i>
        </div>
      </div>
    </div>
  );
}
