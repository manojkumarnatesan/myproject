import React, { useState } from "react";
import LoginPageImage from "../../assets/images/loginpage/loginPageImage.svg";
import LoginPageLogo from "../../assets/images/loginpage/logo.png";
import { Link } from "react-router-dom";

function LoginPage() {
  const initialState = {
    email: "",
    password: "",
  };

  const [loginDetails, setLoginDetails] = useState(initialState);

  function getLoginDetails(event) {
    setLoginDetails({
      ...loginDetails,
      [event.target.name]: event.target.value,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log(loginDetails);
    setLoginDetails(initialState);
  }

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
            <form className="row g-2 g-lg-3 px-3" onSubmit={handleSubmit}>
              <div className="col-12">
                <h1>Sign In</h1>
                <div className="form-text fs-6 text-secondary">
                  Login with your Phone number or Email
                </div>
              </div>
              <div class="col-12">
                <input
                  type="email"
                  class="form-control py-3 rounded-0"
                  id="emailOrPhone"
                  name="emailOrPhone"
                  placeholder="Phone / Email"
                  onChange={getLoginDetails}
                  value={loginDetails.email}
                />
              </div>
              <div class="col-12">
                <input
                  type="password"
                  class="form-control py-3 rounded-0"
                  id="password"
                  name="password"
                  placeholder="Password"
                  onChange={getLoginDetails}
                  value={loginDetails.password}
                />
              </div>
              <div className="col-12">
                <div className="d-grid gap-3">
                  <button type="submit" class="btn btn-primary py-3">
                    Login
                  </button>
                </div>
                <div className="pt-3">
                  <div>
                    <Link className="text-decoration-none" to="/forgot-password">
                      Forgot Password?
                    </Link>
                  </div>
                  <div className="mt-2">
                    Don't have an account?
                    <Link
                      className="text-decoration-none ms-2"
                      target="_blank"
                      rel="noopener noreferrer"
                      to="/sign-up"
                    >
                      Sign Up
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
