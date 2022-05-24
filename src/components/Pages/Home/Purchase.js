import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../../firebase.init";

const Purchase = () => {
  const [tools, setTools] = useState([]);
  const [user, loading, error] = useAuthState(auth);

  const id = useParams();

  useEffect(() => {
    fetch("/tools.json")
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);
  console.log(user);
  console.log(tools);

  const res = tools.filter((item) => item._id === id.id);
  const [item, setItem] = useState(res[0]?.minQuan);
  console.log(typeof res[0]?.minQuan);
  return (
    <div>
      <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row">
          <img className="rounded-2xl mr-14" src={res[0]?.picture} alt />
          <div>
            <h1 class="text-3xl text-secondary font-bold">PURCHASE FORM</h1>

            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Tools name</span>
              </label>
              <input
                value={res[0]?.name}
                type="text"
                placeholder="Type here"
                class="input input-bordered w-full max-w-xs"
              />
            </div>

            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Your name</span>
              </label>
              <input
                value={user?.displayName}
                type="text"
                placeholder="Type here"
                class="input input-bordered w-full max-w-xs"
              />
            </div>

            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Your email</span>
              </label>
              <input
                value={user?.email}
                type="text"
                placeholder="Type here"
                class="input input-bordered w-full max-w-xs"
              />
            </div>

            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Minimum quantity</span>
              </label>
              <input
                value={res[0]?.minQuan}
                type="text"
                placeholder="Type here"
                class="input input-bordered w-full max-w-xs"
              />
            </div>

            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Available quantity</span>
              </label>
              <input
                value={res[0]?.avaQuan}
                type="text"
                placeholder="Type here"
                class="input input-bordered w-full max-w-xs"
              />
            </div>

            <button
              onClick={() => setItem(item + 1)}
              class="btn btn-primary mr-6 mt-7"
            >
              Increase
            </button>
            <button onClick={() => setItem(item - 1)} class="btn btn-primary">
              Decrease
            </button>
            <br />
            <button class="mt-5 w-full btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
              Place order 🛒
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
