import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header>
        <a href="">
          <div className="logo-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="32px"
              viewBox="0 -960 960 960"
              width="32px"
              fill="#e926dd"
              className="logo"
            >
              <path d="M160-320v-480 480ZM80-80v-720q0-33 23.5-56.5T160-880h440q33 0 56.5 23.5T680-800v17q-24 11-44 27t-36 36v-80H160v480h440v-160q16 20 36 36t44 27v97q0 33-23.5 56.5T600-240H240L80-80Zm160-320h160v-80H240v80Zm520-80q-50 0-85-35t-35-85q0-50 35-85t85-35q11 0 21 2t19 5v-207h160v80h-80v240q0 50-35 85t-85 35Zm-520-40h280v-80H240v80Zm0-120h280v-80H240v80Z" />
            </svg>
            <h1>LyricMaster</h1>
          </div>
        </a>
      </header>
    </>
  );
};

export default Header;
