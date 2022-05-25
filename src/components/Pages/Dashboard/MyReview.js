import React, { useEffect, useState } from "react";

const MyReview = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  let n = 1;
  return (
    <div>
      <h2 className="text-2xl my-9">This is my review page </h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Ratings</th>
              <th>Comments</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review) => (
              <tr>
                <td>{n++}</td>
                <td>{review.name}</td>
                <td>{review.ratings}</td>
                <td>{review.comments}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReview;
