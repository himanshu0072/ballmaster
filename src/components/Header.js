import React from "react";

function Header() {
  return (
    <div className="mainHeading">
      <div className="left">
        <h1>Ball Master 🏀</h1>
      </div>
      <div className="right">
        🎵
        <button className="musicButton">
          <lable className="switch">
            <input type="checkbox" checked></input>
            <span className="slider round"></span>
          </lable>
        </button>
      </div>
    </div>
  );
}

export default Header;
