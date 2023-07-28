import React from "react";
import LoginPageImage from "./../assets/images/loginpage/loginPageImage.svg";
import LoginPageLogo from "./../assets/images/loginpage/logo.png";
import PhoneIcon from "./../assets/images/loginpage/phoneIcon.svg";
import { Link } from "react-router-dom";

function ForgotPassword() {
  return (
    <div style={{ background: "#f0f5f1" }}>
      <div className="container-fluid">
        <div className="row ">
          <div
            className="col-12 col-md-5 rounded-end-5 vh-100 p-3 p-lg-5"
            style={{ background: "white" }}
          >
            <img
              src={LoginPageLogo}
              className="img-fluid col-8 mb-5"
              alt=".."
            />
            <img src={LoginPageImage} className="img-fluid" alt=".." />
          </div>
          <div className="col-12 col-md-6 offset-md-1 mt-auto p-2 p-lg-5">
            <form className="row g-2 g-lg-3 px-3">
              <div className="col-12">
                <img src={PhoneIcon} alt="..." className="mx-auto d-block"/>
              </div>
              <div className="col-12">
                <h1 className="text-center">Enter your registered phone number</h1>
              </div>
              <div class="col-12">
              <input
                  type="phone number"
                  class="form-control py-3 rounded-0"
                  id="Phone number"
                  name="Phone number"
                  placeholder="Phone number"
                />
              </div>
              <div className="col-12">
                <div className="d-grid gap-3">
                  <button type="submit" class="btn btn-primary py-3">
                    Send OTP
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
