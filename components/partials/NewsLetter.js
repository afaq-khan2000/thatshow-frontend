import React from "react";

function NewsLetter(props) {
  return (
    <div className="secondary-container">
      <div className="row w-100 mx-auto py-5">
        <div className="col-md-12 m-0 p-0 mb-4 text-center">
          <h2 className="fw-700 fs-40">Subscribe to our newsletter</h2>
          <p className="newsletter-text">
            Get a weekly digest of our top stories
          </p>
        </div>
        <div className="col-12 col-md-3"></div>
        <div className="col-12 col-md-6 newsletter-input-container">
          <input
            type="email"
            className="newsletter-input"
            placeholder="Enter Your Email"
          />
          <button className="newsletter-button float-right">
            Subscribe
          </button>
        </div>

        <div className="col-12 col-md-3"></div>
 
      </div>
    </div>
  );
}

export default NewsLetter;
