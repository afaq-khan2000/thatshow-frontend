import { all } from "axios";
import Link from "next/link";
import React from "react";

function Navbar({ allCategories }) {
  return (
    <>
      {/* sticky-top  */}
      <nav
        className="navbar navbar-expand-lg p-0 m-0 pb-1"
        style={{
          backgroundColor: "#fff !important",
        }}
      >
        <Link className="navbar-brand text-black mr-4" href={"/"}>
          That's <span className="text-red">How</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item mr-2">
              <Link className="nav-link text-black fs-15 fw-700" href="/">
                Home
              </Link>
            </li>
            {allCategories.slice(0, 6).map((item, index) => (
              <li className="nav-item mr-2">
                <a className="nav-link text-black fs-15 fw-700" href="#">
                  {item.name}
                </a>
              </li>
            ))}
            <li className="nav-item dropdown mr-2">
              <a
                className="nav-link dropdown-toggle text-black fs-15 fw-700"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ cursor: "pointer" }}
              >
                More Categories
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdown"
                style={{ backgroundColor: "#fff" }}
              >
                {allCategories.slice(6, 12).map((item, index) => (
                  <a className="dropdown-item" href="#">
                    {item.name}
                  </a>
                ))}
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <hr className="separator" />
    </>
  );
}

export default Navbar;
