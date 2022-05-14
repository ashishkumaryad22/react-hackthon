import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import DATA from "../Data";
import "./timer.css";
import CountdownTimer from "./timer/CountdownTimer";
const Product = () => {
  const [expTimer, setExpTimer] = useState(true);

  const OLD_TIME_IN_MS = 1 * 1 * 2 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();
  const dateTimer = NOW_IN_MS + OLD_TIME_IN_MS;
  const cardItem = (item) => {
    console.log(expTimer);
    return (
      <div className="card my-4 py-3" style={{ width: "18rem" }} key={item.id}>
        {expTimer ? (
          <CountdownTimer targetDate={dateTimer} setExpTimer={setExpTimer} />
        ) : (
          <div className="expired-notice">
            <span>Expired!!!</span>
          </div>
        )}
        <img
          src={item.img}
          className="card-img-top"
          alt={item.title}
          height="200px"
        />{" "}
        <div className="card-body text-center">
          <h5 className="card-title">{item.title}</h5>
          <p className="lead">${item.price}</p>
          {expTimer && (
            <NavLink
              to={`/products/${item.id}`}
              className="btn btn-outline-primary me-2"
            >
              Buy Now
            </NavLink>
          )}
        </div>
      </div>
    );
  };
  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Product</h1>
            <hr />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-around ">{DATA.map(cardItem)}</div>
      </div>
    </div>
  );
};

export default Product;
