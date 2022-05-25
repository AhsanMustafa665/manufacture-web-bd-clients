import React from "react";

const Blogs = () => {
  return (
    <div className="container">
      <div
        tabindex="0"
        class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
      >
        <div class="collapse-title text-xl font-medium">
          1. How will you improve the performence of a react appliction?
        </div>
        <div class="collapse-content">
          <p>
            Hardik covers different ways and tips for React performance
            optimization that are extracted from the experience of many
            programmers and agencies who have faced similar kind of issues in
            past.
          </p>
        </div>
      </div>

      <div
        tabindex="0"
        class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
      >
        <div class="collapse-title text-xl font-medium">
          <strong>
            2. What are different ways to manage a state in a react appliction?{" "}
          </strong>{" "}
        </div>
        <div class="collapse-content">
          <p>
            There are four main types of state you need to properly manage in
            your React apps: <br />
            i) Local state. <br />
            ii) Global state.
            <br />
            iii) Server state.
            <br />
            iv) URL state.
          </p>
        </div>
      </div>
      <div
        tabindex="0"
        class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
      >
        <div class="collapse-title text-xl font-medium">
          <strong>
            4. Why you do not set the state directly in react for example, if
            you have const[products,setProducts]=useState([])? Why you do not
            setProducts=[...]instead,you use the setProducts?
          </strong>{" "}
        </div>
        <div class="collapse-content">
          <p>
            Setproducts use the date definition there was the client
            shown.So,this state is globally use and setProducts are json
            converted then date uses.
          </p>
        </div>
      </div>
      <div
        tabindex="0"
        class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
      >
        <div class="collapse-title text-xl font-medium">
          <strong>
            5. You have an array of products. Each object has a name, price,
            description, etc. How will you implement a search to find products
            by name?
          </strong>{" "}
        </div>
        <div class="collapse-content">
          <p>
            {" "}
            const products = [ <br />
            name: 'Phone', price: 700,des:this is phone <br />
            name:'Camera', price: 9000, des:this is Camera ]; <br /> const
            name:'TV', price: 8000, des:this is TV ]; <br /> const findName =
            products.find(product => product.name > 'Laptop');
          </p>
        </div>
      </div>
      <div
        tabindex="0"
        class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
      >
        <div class="collapse-title text-xl font-medium">
          <strong>6. What is a unit test? Why should write unit tests?</strong>{" "}
        </div>
        <div class="collapse-content">
          <p>
            {" "}
            JavaScript Unit Testing is a method where JavaScript test code is
            written for a web page or web application module. <br />
            Unit testing is an important and often overlooked part of the
            development process.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
