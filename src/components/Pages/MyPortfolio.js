import React from "react";
import { Link } from "react-router-dom";

const MyPortfolio = () => {
  return (
    <div className="mt-16 text-center">
      <h2 className="text-4xl font-bold mb-3">
        Hi I am <span className="text-secondary">Ahsan Mustafa</span>
      </h2>
      <p className="mb-96 mb-3">
        <span className="font-bold">Email address:</span>{" "}
        ahsanfaisal665@gmail.com
        <p className="mb-3">
          <span className="font-bold ">Educational background:</span>{" "}
          <div class="overflow-x-auto">
            <table class="table table-zebra w-full">
              {/* <!-- head --> */}
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Name of degree</th>
                  <th>Year of passing</th>
                  <th>Grade/Point</th>
                  <th>Group</th>
                </tr>
              </thead>
              <tbody>
                {/* <!-- row 1 --> */}
                <tr>
                  <th>1</th>
                  <td>PSC</td>
                  <td>2012</td>
                  <td>4.50</td>
                  <td>General (Primary)</td>
                </tr>
                {/* <!-- row 2 --> */}
                <tr>
                  <th>2</th>
                  <td>JSC</td>
                  <td>2015</td>
                  <td>4.50</td>
                  <td>General (High)</td>
                </tr>
                {/* <!-- row 3 --> */}
                <tr>
                  <th>3</th>
                  <td>SSC</td>
                  <td>2018</td>
                  <td>4.22</td>
                  <td>Science</td>
                </tr>
                <tr>
                  <th>4</th>
                  <td>Diploma in Computer</td>
                  <td>Studying</td>
                  <td>---</td>
                  <td>Computer science</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="font-bold text-xl my-10">
            List of skills technologies:
          </div>
          <h6 className="font-bold ">HTML ➡️ 78%</h6>
          <h6 className="font-bold ">CSS ➡️ 70%</h6>
          <h6 className="font-bold ">JAVASCRIPT ➡️ 50%</h6>
        </p>
        <h4 className="font-bold">Some project below, created with me</h4>
        <p>1) Doctors repo website.</p>
        <a
          className="font-bold text-secondary"
          href="https://doctors-website-131c4.web.app/"
        >
          Here
        </a>
        <p>1) Warehouse website.</p>
        <a
          className="font-bold text-secondary"
          href="https://warehouse-website-60530.firebaseapp.com/"
        >
          Here
        </a>
        <p>1) Perfume products website.</p>
        <a
          className="font-bold text-secondary"
          href="https://the-perfume-reviews-site.netlify.app"
        >
          Here
        </a>
      </p>
    </div>
  );
};

export default MyPortfolio;
