import React from "react";
import Subs from "./Subs";

const Faq = () => {
  const accordions = document.querySelectorAll(".accordion-item");

  accordions.forEach((accordion) => {
    accordion.addEventListener("click", () => {
      const content = accordion.nextElementSibling;

      content.classList.toggle("active");

      // Close other accordions
      accordions.forEach((otherAccordion) => {
        if (otherAccordion !== accordion) {
          otherAccordion.nextElementSibling.classList.remove("active");
        }
      });
    });
  });
  return (
    <div className="faq">
      <h2>Frequently Asked adds</h2>
      <div className="faqa">
        <div className="accordion">
          <div className="accordion-item">
            <i className="ri-add-line"></i> How can I sign up for Netflix?
          </div>
          <div className="accordion-content">
            Netflix offers a variety of plans to suit your needs. Visit the
            Netflix website to sign up and start watching today.
          </div>
        </div>

        <div className="accordion">
          <div className="accordion-item">
            <i className="ri-add-line"></i> How can I cancel my subscription?
          </div>
          <div className="accordion-content">
            You can cancel your subscription at any time. Visit your account
            settings and select "Cancel Membership."
          </div>
        </div>

        <div className="accordion">
          <div className="accordion-item">
            <i className="ri-add-line"></i> Can I watch on multiple devices?
          </div>
          <div className="accordion-content">
            Yes, you can watch Netflix on multiple devices. Choose a plan that
            suits your needs.
          </div>
        </div>

        <div className="accordion">
          <div className="accordion-item">
            <i className="ri-add-line"></i> Is Netflix available worldwide?
          </div>
          <div className="accordion-content">
            Netflix is available in most countries. Check the Netflix website
            for a list of supported regions.
          </div>
        </div>

        <div className="accordion">
          <div className="accordion-item">
            <i className="ri-add-line"></i> How do I contact customer support?
          </div>
          <div className="accordion-content">
            You can contact Netflix customer support through the website or by
            phone.
          </div>
        </div>

        <div className="accordion">
          <div className="accordion-item">
            <i className="ri-add-line"></i> What's on Netflix?
          </div>
          <div className="accordion-content">
            Netflix offers a wide range of movies, TV shows, and documentaries.
            Browse the catalog to see what's available.
          </div>
        </div>
      </div>
      <div className="endfaq">
        <Subs />
      </div>
    </div>
  );
};

export default Faq;
