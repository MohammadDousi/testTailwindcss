import React from "react";

import profile1 from "../../assets/image/profile1.png";
import profile2 from "../../assets/image/profile2.png";
import profile4 from "../../assets/image/profile4.png";
import profile5 from "../../assets/image/profile5.png";
import profile8 from "../../assets/image/profile8.png";

export default function Team() {
  return (
    <>
      <div className="teamBox">
        <div className="titleBox">
          <p>Team</p>
          <div className="count">
            <i className="far fa-user"></i>
            <p>23</p>
          </div>
        </div>

        <div className="contactContainer">
          <div className="contact">
            <div>
              <img src={profile1} alt={profile1} />
              <div>
                <h1>Billy Parker</h1>
                <h2>Project Manager</h2>
              </div>
            </div>
            <div className="envelope">
              <i className="far fa-envelope"></i>
            </div>
          </div>
          <div className="contact">
            <div>
              <img src={profile2} alt={profile2} />
              <div>
                <h1>Nancy Salmon</h1>
                <h2>Salas Manager</h2>
              </div>
            </div>
            <div className="envelope">
              <i className="far fa-envelope"></i>
            </div>
          </div>
          <div className="contact">
            <div>
              <img src={profile8} alt={profile8} />
              <div>
                <h1>stella maxwell</h1>
                <h2>UI/UX designer</h2>
              </div>
            </div>
            <div className="envelope">
              <i className="far fa-envelope"></i>
            </div>
          </div>
        </div>

        <span className="w-full h-1 rounded-full bg-slate-50"></span>

        <div className="newMember">
          <div>
            <i className="fa fa-plus"></i>
          </div>
          <p>Invite new team member</p>
        </div>
      </div>

      <div className="teamBox">
        <div className="titleBox">
          <p>Project onboarding</p>
        </div>

        <div className="contactContainer">
          <div className="task">
            <i className="far fa-clock"></i>
            <p>11:00 - 12:30</p>
            <i className="fa fa-ellipsis-v"></i>
          </div>

          <div className="task">
            <i className="far fa-calendar"></i>
            <p>Monday, 20 Ferbruary</p>
            <i className="fa fa-ellipsis-v"></i>
          </div>
        </div>

        <div className="attendees">
         
          <div className="boxAvator">
            <p>Attendees</p>
            <div className="avatorGrid">
              <img className="avator" src={profile1} alt={profile1} />
              <img className="avator" src={profile2} alt={profile2} />
              <img className="avator" src={profile4} alt={profile4} />
              <img className="avator" src={profile8} alt={profile8} />
              <img className="avator" src={profile5} alt={profile5} />
              <div className="avator bg-sky-200 flex justify-center items-center text-sm font-medium">+2</div>
            </div>
          </div>
         
          <div className="sendInvite"> 
            <p>Send Invitation link</p>
            <div>
              <i className="far fa-paper-plane"></i>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}
