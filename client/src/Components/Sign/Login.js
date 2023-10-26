import React, { useContext } from "react";
import "./Sign.css";
import { ContextAPI } from "../../App";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase.config";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";

const Login = () => {
  const [googleData, setGoogleData] = useContext(ContextAPI);

  const navigate = useNavigate();
  const location = useLocation();

  const googleLogin = () => {
    signInWithPopup(auth, provider).then((res) => {
      const { displayName, email, photoURL } = res.user;
      console.log(res.user);
      const newUser = {
        isLogin: true,
        name: displayName,
        email: email,
        photoURL: photoURL,
      };
      setGoogleData(newUser);
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let isValidFrom = true;

    if (name === "email") {
      const re = /\S+@\S+\.\S+/;
      isValidFrom = re.test(e.target.value);
    }
    if (name === "password") {
      const isValidPass = e.target.value.length > 6;
      const isValidPassNum = /\d{1}/.test(e.target.value);
      isValidFrom = isValidPass && isValidPassNum;
    }
    if (isValidFrom) {
      const formUser = { ...googleData };
      formUser[e.target.name] = e.target.value;
      setGoogleData(formUser);
    }
  };

  const handleSubmit = (e) => {
    const userdata = { ...googleData };
    if (googleData.email && googleData.password) {
      signInWithEmailAndPassword(auth, googleData.email, googleData.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          userdata.success = "successfully login";
          userdata.isLogin = false;
          setGoogleData(userdata);
          if (location.state?.from) {
            navigate(location.state.from);
          }

          // ...
        })
        .catch((error) => {
          userdata.isLogin = true;
          userdata.error = "wrong information! sign in please";
          setGoogleData(userdata);
        });
    }
    e.preventDefault();
  };

  return (
    <div className="app-login">
      <div className="leftCol">
        <div className="content">
          <div className="content-script">
            <h1>LMS</h1>
            <p>LMS management</p>
          </div>
        </div>
        <div className="rest-content">
          <h1>WELCOME</h1>
          <p>
            IOTS based UITS Libarary <br /> oppotunities all in one place
          </p>
        </div>
      </div>
      <div className="rightCol">
        <div className="rightContent">
          <h1> Please Login </h1>
          <NavLink to="/Signin">
            {" "}
            <p> Don't have account? Sign-in </p>{" "}
          </NavLink>
          {googleData.isLogin === false ? (
            <p style={{ color: "green" }}> {googleData.success} </p>
          ) : (
            <p style={{ color: "red" }}> {googleData.error} </p>
          )}
          <div className="input-div">
            <form action="" onSubmit={handleSubmit}>
              <input
                className="inp"
                placeholder="email"
                name="email"
                onChange={handleChange}
                type="text"
              />
              <br />
              <input
                className="inp"
                placeholder="password"
                name="password"
                onChange={handleChange}
                type="password"
              />

              <button className="button-login" value="Submit" type="button">
                {" "}
                Submit{" "}
              </button>
            </form>
          </div>
          -<p className="pTag"> Or Sign In With </p>
          <div className="footerIcon">
            <GoogleIcon onClick={googleLogin} />
            <FacebookIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
