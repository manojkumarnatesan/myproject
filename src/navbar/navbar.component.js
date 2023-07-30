import React from "react";
import "./navbar.style.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <Link class="navbar-brand" to="/">
          Paperplane
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
          aria-controls="menu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="menu">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="buynowpaylater">
                Buy Now Pay Later
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link" to="videos">
                Videos
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="blogs">
                Blogs
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="Abha">
                Abha
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="AboutUs">
                About Us
              </Link>
            </li>
          </ul>
          <div className="ms-auto d-block d-lg-flex">
            <div class="nav-item ">
              <a
                class="btn btn-primary mb-2 mb-lg-0"
                href="https://play.google.com/store/apps/details?id=paperplane.health.app&hl=en_GB&gl=IN&pli=1"
                role="button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download App
              </a>
            </div>
            <div class="nav-item">
              <Link
                className="btn btn-outline-primary ms-0 ms-lg-2"
                to="/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
