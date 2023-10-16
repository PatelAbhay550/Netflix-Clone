import React from "react";

const Secondpage = () => {
  return (
    <div className="sec">
      <div className="text">
        <h2>Enjoy on your TV</h2>
        <h3>
          Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
          players and more.
        </h3>
      </div>
      <div className="imgs">
        <div className="video">
          <video
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
            autoPlay
            muted
          ></video>
        </div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
          alt="tv"
        />
      </div>
    </div>
  );
};

export default Secondpage;
