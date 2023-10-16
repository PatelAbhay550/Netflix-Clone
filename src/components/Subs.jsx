import React from "react";

const Subs = () => {
  return (
    <>
      <p className="gst">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div className="btnss">
        <input type="text" className="input" placeholder="Email Address" />
        <button className="getstart">
          Get Started<i class="ri-arrow-right-s-line"></i>
        </button>
      </div>
    </>
  );
};

export default Subs;
