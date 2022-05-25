import React, { useState } from "react";

const AddReview = () => {
  const [addreviews, setAddreviews] = useState([]);
  let n = 0;
  return (
    <div>
      <h2 className="text-2xl my-9">This is my add review page </h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {addreviews.map((addre) => (
              <tr>
                <td>{n++}</td>
                <td>{addre.name}</td>
                <td>{addre.minQuan}</td>
                <td>{addre.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddReview;
