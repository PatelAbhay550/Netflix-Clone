import React from "react";
import Navbar from "./Navbar";
import Subs from "./Subs";

const Home = () => {
  return (
    <div>
      <div className="home">
        <Navbar />
        <div className="bgimg">
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
            alt="background"
          />
        </div>
        <div className="text-cont">
          <h2>
            The biggest Indian hits. Ready to watch here <br /> from ₹ 149.
          </h2>
          <h3>Join today. Cancel anytime.</h3>
          <Subs />
        </div>
      </div>
    </div>
  );
};

export default Home;
