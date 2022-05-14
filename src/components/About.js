import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-center text-primary fw-bold mb-4">About Us</h1>
            <p className="lead mb-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias aut, repellat ipsum facere voluptate dicta obcaecati
              deserunt nobis suscipit eaque?Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Molestias aut, repellat ipsum facere
              voluptate dicta obcaecati deserunt nobis suscipit eaque?Lorem,
              ipsum dolor sit amet consectetur adipisicing elit. Molestias aut,
              repellat ipsum facere voluptate dicta obcaecati deserunt nobis
              suscipit eaque?Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Molestias aut, repellat ipsum facere voluptate dicta
              obcaecati deserunt nobis suscipit eaque?Lorem, ipsum dolor sit
              amet consectetur adipisicing elit. Molestias aut, repellat ipsum
              facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
            </p>
            <NavLink to="/contact" className="btn btn-outline-primary px-3">
              Contact Us
            </NavLink>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src="assets/images/img9.jpg"
              alt="About Us"
              height="400px"
              width="400px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
