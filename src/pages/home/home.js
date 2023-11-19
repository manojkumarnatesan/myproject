import React from "react";
import HeroImage from "./hero-image.svg";
import { Link } from "react-router-dom";


function HomePage() {
  return (
    <div className="container">
      <div class="row">
        <div class="col-md-4">
          <div className="card-body">
            <h5 className="">Get Your Own Digital Clinic</h5>
            <h5 className="">On WhatsApp</h5>
            <h5 className="">In Less Than 7 Minutes</h5>
            <Link className="btn btn-primary" to="/sign-up">
              Start Now & Get Free Website
            </Link>
            <div className="card-body">
              <a className="btn btn-primary" href="/SignUp">
                Book Demo
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-6 p-10">
          <div className="card-body">
            <div className="row g-0">
              <img src={HeroImage} className="card-img-top" alt="Image 2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
