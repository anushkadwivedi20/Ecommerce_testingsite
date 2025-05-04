import React from "react";
import "./SubHeader.css";
import { FaBars } from "react-icons/fa";

const SubHeader = () => {
  const categories = [
    "All",
    "Fresh",
    "MX Player",
    "Sell",
    "Bestsellers",
    "Mobiles",
    "Today's Deals",
    "Prime",
    "Customer Service",
    "New Releases",
    "Electronics",
    "Fashion",
    "Amazon Pay",
    "Home & Kitchen",
    "Computers",
    "Books",
    "Car & Motorbike",
    "Toys & Games",
  ];

  return (
    <div className="subheader">
      <div className="subheader-container">
        <div className="subheader-item">
          <FaBars className="subheader-icon" />
          <span>
            <strong>All</strong>
          </span>
        </div>
        {categories.slice(1).map((item, index) => (
          <div className="subheader-item" key={index}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubHeader;
