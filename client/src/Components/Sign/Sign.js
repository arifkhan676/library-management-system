import React, { useState } from "react";
import validator from "validator"; // Import the validator library
import "./Sign.css";

const Sign = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // State for error message

  const [succes, setSuccess] = useState("");
  const [failed, setFailed] = useState("");

  const handleRegister = async () => {

    let valid = true;
    // Validate email and password here
    if (!isValidEmail(email) || !isValidPassword(password)) {
      valid = false;
    }

    /* bayzed */

    // Clear the error message if validation passes
    setErrorMessage("");
    try {
      const response = await fetch("http://localhost:8000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, username, password }),
      });

      if (response.ok && valid) {
        setSuccess("Registration Successful");
        console.log("Successful");
      } else {
        setFailed("Registration Failed");
        console.log("failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const isValidEmail = (email) => {
    // Use the validator library to check for a valid email
    return validator.isEmail(email);
  };

  const isValidPassword = (password) => {
    // Password must meet your custom criteria:
    // Add your checks here (e.g., length, complexity)
    return (
      password.length >= 8 && // At least 8 characters
      /[a-z]/.test(password) && // Contains at least one lowercase letter
      /[A-Z]/.test(password) && // Contains at least one uppercase letter
      /\d/.test(password) && // Contains at least one digit
      /[@$!%*?&]/.test(password) // Contains at least one special character
    );
  };

  return (
    <div className="form">
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
            <h1> Sign Up Please </h1>

            <p style={{ color: "#FFC436" }}> {succes} </p>
            <p style={{ color: "red" }}> {failed} </p>

            <div className="input-div">
              <form>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Username"
                  className="inp"
                  required
                  onChange={(e) => setUsername(e.target.value)}
                />
                <br />

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
                  type="password"
                  id="password"
                  name="password"
                  className="inp"
                  placeholder="Password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <button
                  className="button-login"
                  type="button"
                  onClick={handleRegister}
                >
                  Register
                </button>
              </form>
            </div>

            <p className="pTag"> Or Sign In With </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sign;
