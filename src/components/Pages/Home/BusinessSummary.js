import React from "react";
import "./BusinessSummary.css";

const BusinessSummary = () => {
  return (
    <div>
      <h2 className="text-4xl text-secondary text-center font-bold my-16 underline">
        Million Business Trust Us.
      </h2>
      <section class="users-statistics">
        <div class="flex">
          <h2>1000k</h2>
          <p>▶️ Youtube Subscribers</p>
        </div>
        <div class="flex">
          <h2>3.7M</h2>
          <p>👥 Instagram Followers</p>
        </div>
        <div class="flex">
          <h2>200k</h2>
          <p>👍 Dribbble Shot Likes</p>
        </div>
      </section>
      <div>
        <h2 className="text-center text-amber-500 text-2xl mt-11 font-semibold">
          Have any question about us or get a tools request?
        </h2>
        <h3 className="text-center font-semibold">Please Contact us.✆☎</h3>
      </div>
    </div>
  );
};

export default BusinessSummary;
