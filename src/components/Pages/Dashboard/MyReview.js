import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const MyReview = () => {
  const [reviews, setReviews] = useState([]);
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    fetch("https://secret-brushlands-38053.herokuapp.com/reviews")
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
                <td>{user.displayName}</td>
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
