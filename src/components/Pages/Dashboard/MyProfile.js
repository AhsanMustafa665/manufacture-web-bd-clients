import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink, useParams } from "react-router-dom";
import auth from "../../../firebase.init";
import users from "../../Assests/Images/client/user.png";
import linkedin from "../../Assests/Images/linkedin/linkedin.png";

const MyProfile = () => {
  const [tools, setTools] = useState([]);
  const [user, loading, error] = useAuthState(auth);
  const id = useParams();

  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);

  const res = tools.filter((item) => item._id === id.id);
  const [item, setItem] = useState(res[0]?.minQuan);
  return (
    <div>
      <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row">
          <img className="rounded-2xl w-2/3 mr-14" src={user.photoURL} alt />
          <div>
            <h1 class="text-3xl text-secondary font-bold">
              This is my profile page
            </h1>

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
                <span class="label-text">Your phone number</span>
              </label>
              <input
                value="017XXXXXXXX"
                type="text"
                placeholder="Type here"
                class="input input-bordered w-full max-w-xs"
              />
            </div>
            <a href="https://www.linkedin.com/in/ahsan-mustafa-628910229/">
              Linked in profile
              <img src={linkedin} className="w-10" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
