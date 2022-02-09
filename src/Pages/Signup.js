import React, { useState } from "react";
import Nav from "./Nav";
import { useEffect } from "react";
import "./Signup.css";
import validation from "./validation";
import { Link } from "react-router-dom";
import axios from "axios";

function Signup() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setErrors(validation(values));
  };

  return (
    <>
      <Nav />
      <div className="signup-outer">
        <div className="signup-top-bar"></div>
        <div className="signup-left-side">
          <div className="signup-left-side-border"></div>
        </div>
        <form className="signup-right-side">
          <div className="signup-create-account-text">Create Account</div>
          <div className="signup-info-outer">
            <div className="signup-first-name-text">First name</div>
            <div className="signup-last-name-text">Last name</div>
            <div className="signup-first-name-last-name-outer">
              <input
                className="signup-first-name-box"
                type="text"
                placeholder="First name"
                name="firstname"
                value={values.firstname}
                onChange={handleChange}
              />
              {errors.firstname && (
                <p className="error error-firstname">{errors.firstname}</p>
              )}
              <input
                className="signup-last-name-box"
                type="text"
                placeholder="Last name"
                name="lastname"
                value={values.lastname}
                onChange={handleChange}
              />
              {errors.lastname && (
                <p className="error error-lastname">{errors.lastname}</p>
              )}
            </div>
            <div className="signup-email-text">Email</div>
            <input
              className="signup-email-box"
              type="text"
              placeholder="Email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="error error-email">{errors.email}</p>
            )}
            <div className="signup-username-text">Username</div>
            <div className="signup-password-text">Password</div>
            <input
              className="signup-username-box"
              type="text"
              placeholder="Username"
              name="username"
              value={values.username}
              onChange={handleChange}
            />
            {errors.username && (
              <p className="error error-username">{errors.username}</p>
            )}
            <input
              className="signup-password-box"
              type="password"
              placeholder="Password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && (
              <p className="error error-password">{errors.password}</p>
            )}
          </div>
          <div className="signup-bottom">
            <Link to="/Login">
              <div className="signup-already-have-account">
                I already have an account
              </div>
            </Link>
            <button
              className="signup-create-account"
              onClick={handleFormSubmit}
              type="submit"
            >
              Create account
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Signup;
