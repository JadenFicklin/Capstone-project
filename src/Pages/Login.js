import React, { useState } from "react";
import Nav from "./Nav";
import { useEffect } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const users = [
  {
    firstname: "jaden",
    lastname: "ficklin",
    email: "jadenficklin@gmail.com",
    username: "jado21",
    password: "password",
  },
  {
    firstname: "taryn",
    lastname: "ficklin",
    email: "tarynficklin@gmail.com",
    username: "taryn21",
    password: "password",
  },
];

function Login() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //get value of what user is putting for password and username
  const [error, setError] = useState("");
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const validate = () => {
    const user = users.find((user) => user.username === values.username);

    if (user?.username) {
      const passwordMatches = values.password === user.password;
      if (passwordMatches) {
        return "logged in";
      } else {
        return "error";
      }
    } else {
      return "user does not exist";
    }
  };

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <Nav />
      <div className="login-outer">
        <div className="login-top-bar"></div>
        <div className="login-left-side">
          <div className="login-left-side-border"></div>
        </div>
        <div className="login-right-side">
          <div className="login-create-account-text">Create Account</div>
          <div className="login-info-outer">
            <div className="login-email-text">Username</div>
            <div className="login-password-text">Password</div>
            <input
              className="login-email-box"
              type="text"
              name="username"
              placeholder="username"
              onChange={handleChange}
            ></input>
            <input
              className="login-password-box"
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            ></input>
          </div>
          <div className="login-bottom">
            <Link to="/Signup">
              <div className="login-already-have-account">
                I don't have an account
              </div>
            </Link>
            <button className="login-create-account" onClick={validate}>
              Login
            </button>
            {error && <div>{error}</div>}
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
