import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddReview = () => {
  const [addreviews, setAddreviews] = useState([]);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("https://secret-brushlands-38053.herokuapp.com/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("success");
      });
  };
  let n = 0;
  return (
    <div>
      <h2 className="text-2xl my-9">This is my add review page </h2>
      <div class="overflow-x-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="Rate us"
            {...register("ratings", { required: true })}
            className="border-2 mx-4"
            type="text"
          />
          <input
            placeholder="Comments here"
            {...register("comments", { required: true })}
            className="border-2 mx-3"
            type="text"
          />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
