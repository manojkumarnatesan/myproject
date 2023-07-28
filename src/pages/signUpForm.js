import React from "react";
import Logo from "../assets/images/loginpage/logo.png";
function SignUpForm() {
  return (
    <div>
      <div className="container">
        <div className="col-3 mx-auto py-3">
          <img src={Logo} className="img-fluid" alt="" />
        </div>
        <div
          class="card px-5 py-3 border-0 shadow"
          style={{ backgroundColor: "#e0e0e0" }}
        >
          <div className="row g-2 g-lg-4">
            <div className="col-12 col-lg-6">
              <label className="form-label ms-3">Phone</label>
              <input
                className="form-control rounded-pill"
                placeholder="Manoj Kumar"
              />
              <small className="form-text">Enter your name without Dr.</small>
            </div>
            <div className="col-12 col-lg-6">
              <label className="form-label ms-3">Phone</label>
              <select
                class="form-select rounded-pill"
                aria-label="Default select example"
              >
                <option selected></option>
                <option value="1">Anesthesia</option>
                <option value="2">Gynaecologist</option>
                <option value="3">Clinical Psychologist</option> 
                <option value="3">Counselling Psychologist</option> 
                <option value="3">Therapist</option> 
                <option value="3">Counsellor</option>
                <option value="3">Psychologist</option>           
              </select>
            </div>
            <div className="col-12">
              <label className="form-label ms-3">Medical qualifications</label>
              <input
                className="form-control rounded-pill"
                placeholder="eg. MBBS"
              />
              <small className="form-text">
                Enter medical degrees separated by commas
              </small>
            </div>
            <div className="col-12">
              <label className="form-label ms-3">
                Do you have staff/help to manage clinic's ? -{" "}
                <small> Optional</small>
              </label>
              <input
                className="form-control rounded-pill"
                placeholder="eg. 2"
              />
            </div>
            <div className="col-12">
              <label className="form-label ms-3">
                How many years of experience do you have ?
              </label>
              <input
                className="form-control rounded-pill"
                placeholder="eg. 5"
              />
            </div>
            <div className="col-12 col-lg-6">
              <label className="form-label ms-3">
                Instagram Username <small> Optional</small>
              </label>
              <input
                className="form-control rounded-pill"
                placeholder="@example.instagram.com"
              />
            </div>
            <hr />
            <div className="col-12">
              <button
                className="btn px-4 rounded-pill mx-auto d-block"
                style={{ backgroundColor: "blue", color: "white" }}
              >
                Save & Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
