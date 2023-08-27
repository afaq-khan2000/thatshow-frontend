import React from "react";
import data from "../../data.js";

function Footer(props) {
  return (
    <div className="dark-container">
      <div className="row w-100 mx-auto py-5">
        <div className="col-6 col-md-3 m-0 p-0">
          <h2 className="fw-700 fs-20 mb-4">About</h2>
          <p className="fs-16 text-gray">Our Story</p>
          <p className="fs-16 text-gray">Our Mission</p>
          <p className="fs-16 text-gray">About Us</p>
          <p className="fs-16 text-gray">Privacy Policy</p>
          <p className="fs-16 text-gray">Contact</p>
        </div>
        <div className="col-6 col-md-3 m-0 p-0">
          <h2 className="fw-700 fs-20 mb-4">Categories</h2>
          {data.slice(0, 5).map((item, inde) => (
            <p className="fs-16 text-gray">{item.categoryName}</p>
          ))}
        </div>
        <div className="col-6 col-md-3 m-0 p-0">
          <h2 className="fw-700 fs-20 mb-4">Categories</h2>
          {data.slice(5, 10).map((item, inde) => (
            <p className="fs-16 text-gray">{item.categoryName}</p>
          ))}
        </div>
        <div className="col-6 col-md-3 m-0 p-0">
          <h2 className="fw-700 fs-20 mb-4">Categories</h2>
          {data.slice(10, 15).map((item, inde) => (
            <p className="fs-16 text-gray">{item.categoryName}</p>
          ))}
        </div>
      </div>
      <hr className="white-separator" />
      <div className="row w-100 mx-auto text-center">
        <div className="col-12 m-0 p-0">
          <p className="text-gray fs-13">
            Copyright ©2023 All rights reserved | Afaq Khan
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
