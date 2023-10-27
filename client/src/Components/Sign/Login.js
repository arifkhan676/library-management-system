import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import validator from "validator"; // Import the validator library
import "./Sign.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate email and password here
    if (!isValidEmail(email)) {
      console.error("Invalid email format");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Successful login
        const data = await response.json();
        setMessage(data.message);
        // console.log(data.message + '1' );
      } else {
        // Login failed
        const data = await response.json();
        setMessage(data.message);
        //  console.log(data.message  + '2');
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const isValidEmail = (email) => {
    // Use the validator library to check for a valid email
    return validator.isEmail(email);
  };

  return (
    <>
      <div className="form">
        <p style={{ color: "green" }}> {} </p>
        <p style={{ color: "red" }}> {} </p>

        <div className="app-login">
          <div className="leftCol">
            <div className="content"></div>
            <div className="rest-content">
              <h1>WELCOME</h1>
              <p>
                UITS IOT Based Library <br /> oppotunities all in one place
              </p>
            </div>
          </div>
          <div className="rightCol">
            <div className="rightContent">
              <h1> Login Please </h1>
              <NavLink to="/Signin">
                <p>Don't have an account? Sign in</p>
              </NavLink>
              <div className="input-div">
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="inp"
                    placeholder="Your Email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <br />

                  <input
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    className="inp"
                    required
                  />
                  <br />
                  <button className="button-login" type="submit">
                    Submit
                  </button>
                  <NavLink to="/forgot-password">Forgot your password?</NavLink>
                </form>
                {message && <p>{message}</p>}
              </div>

              <p className="pTag"> Or Sign In With </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

// reset password form

// <div className="password-reset-form">
//     <input
//         type="text"
//         placeholder="Your Email"
//         required
//         onChange={(e) => setEmail(e.target.value)}
//     />
//     <input
//         placeholder="New Password"
//         type="password"
//         required
//         onChange={(e) => setNewPassword(e.target.value)}
//     />
//     <button className="button-reset" onClick={handlePasswordReset}>
//         Reset Password
//     </button>
// </div>
