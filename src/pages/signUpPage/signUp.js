import React from "react";
import Logo from "../../assets/images/loginpage/logo.png";
import SignUpPageImage from "../../assets/images/loginpage/loginPageImage.svg";
import MobileIcon from "../../assets/images/loginpage/mobileIcon.svg";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="container">
      <div className="col-3 mx-auto py-3">
        <img src={Logo} className="img-fluid" alt="" />
      </div>
      <div>
        <div
          class="card border-0 shadow"
          style={{ backgroundColor: "#e0e0e0" }}
        >
          <div class="row g-0">
            <div class="col-md-6 p-5">
              <img
                src={SignUpPageImage}
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div class="col-md-6">
              <div class="card-body">
                <h4 className="text-center card-title">Create an account</h4>
                <div class=" col-3 col-lg-4 mx-auto">
                  <img src={MobileIcon} alt="" className="img-fluid" />
                </div>
                <p class="card-text">
                  <div>
                    <label className="form-label ms-3">Phone</label>
                    <input
                      className="form-control rounded-pill"
                      placeholder="+91"
                    />
                  </div>
                  <div className="my-3">
                    <Link
                      className="btn rounded-pill mx-auto d-block"
                      to="/application-form"
                      style={{ background: "darkblue", color: "white" }}
                    >
                      Send OTP
                    </Link>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
