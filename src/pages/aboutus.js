import React, { useState } from "react";
import Image from "./home/Image.png";

const AboutUsPage = () => {
  const initialState = {
    username: "",
    email: "",
    phoneNumber: "",
    timeToContact: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData(initialState);
  };

  return (
    <div>
      <div className="container text-center">
        <h1 className="text-decoration-underline">Our Vision. Our Mission</h1>
        <h4>
          <p>
            At Paperplane, we're building Digital Clinics on WhatsApp for
            Doctors and Hospitals to start and scale their medical practice
            using everyone's favorite messaging app!
          </p>
        </h4>
        <div className="container">
          <div className="card-body">
            <div className="col-md-4 p-5">
              <img src={Image} className="card-img-center" alt="Company Logo" />
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="card col-12 col-md-6 mx-auto" >
          <div className="card-body">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="phoneNumber" className="form-label">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="timeToContact" className="form-label">
                  Time to Contact
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="timeToContact"
                  name="timeToContact"
                  value={formData.timeToContact}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
