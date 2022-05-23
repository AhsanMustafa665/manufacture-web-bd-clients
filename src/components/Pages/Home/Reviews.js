import React from "react";
import c1 from "../../Assests/Images/client/c1.webp";
import c2 from "../../Assests/Images/client/c2.webp";
import c3 from "../../Assests/Images/client/c3.webp";
import "./Review.css";

const Reviews = () => {
  return (
    <div>
      <div class="feedbacks">
        <div class="title">
          <h2 className="text-4xl text-center font-serif font-bold mt-36">
            <span className="text-secondary">Customer </span> Feedback
          </h2>
          <p>
            The best customer feedback tools make it simple and easy to collect
            useful data from customers to enable you to add value to their
            experience.
          </p>
        </div>
        <section>
          <div class="flex">
            <div class="feedback">
              <img src={c1} alt="item-2" />
              <h2>LAnnie A.</h2>
              <h4>Customer</h4>
              <h5 className="mb-3">Reviews: ⭐⭐⭐⭐</h5>
              <p>
                Top Customer Feedback Software & Tools in 2022 — Qualtrics, an
                experience management, and customer feedback software,
                automatically shows ...
              </p>
            </div>
          </div>
          <div class="flex">
            <div class="feedback">
              <img src={c2} alt="item-2" />
              <h2>Pat Francis</h2>
              <h4>Customer</h4>
              <h5 className="mb-3">Reviews: ⭐⭐⭐⭐⭐</h5>
              <p>
                Customer feedback tools can be part of a software solution
                designed to help businesses collect, measure, and analyze
                customer feedback.
              </p>
            </div>
          </div>
          <div class="flex">
            <div class="feedback">
              <img src={c3} alt="item-2" />
              <h2>John Doe</h2>
              <h4>Customer</h4>
              <h5 className="mb-3">Reviews: ⭐⭐⭐</h5>
              <p>
                UserReport is a free customer feedback tool that enables
                websites to create and customize online surveys. UserReport
                responsive survey collects data about your
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Reviews;
