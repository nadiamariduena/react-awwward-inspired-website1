import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        {/* ---------- */}
        <div className="row v-center space-between">
          <div className="logo">
            {/* the a tag isnt the right way to make links in react but he is going 
              to develop during the tutorial why he is doing it now */}
            <a href="/">AGENCY.</a>
          </div>
          {/* ---------- */}
          <div className="nav">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
