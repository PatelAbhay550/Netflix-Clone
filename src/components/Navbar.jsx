import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="logo">
          <img
            src="https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png"
            alt="Netflix"
          />
        </div>
        <div className="btns">
          <button className="lang">English</button>
          <button className="signin">Sign in</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
