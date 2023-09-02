import React, { useContext } from 'react'
import './Sign.css'
import { ContextAPI } from '../../App'
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from '../../firebase.config';
import { Link } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';

const Login = () => {

    const [googleData, setGoogleData] = useContext(ContextAPI)

    const googleLogin = () => {
        signInWithPopup(auth, provider).then(res => {
            const { displayName, email, photoURL } = res.user;
            console.log(res.user)
            const newUser = {
                isLogin: true,
                name: displayName,
                email: email,
                photoURL: photoURL
            }
            setGoogleData(newUser)

        })
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        let isValidFrom = true;

        if (name === 'email') {
            const re = /\S+@\S+\.\S+/;
            isValidFrom = re.test(e.target.value)
        }
        if (name === 'password') {
            const isValidPass = e.target.value.length > 6;
            const isValidPassNum = /\d{1}/.test(e.target.value);
            isValidFrom = isValidPass && isValidPassNum
        }
        if (isValidFrom) {
            const formUser = { ...googleData }
            formUser[e.target.name] = e.target.value
            setGoogleData(formUser)
        }
    }

    const handleSubmit = (e) => {
        const userdata = { ...googleData };
        if (googleData.email && googleData.password) {
            signInWithEmailAndPassword(auth, googleData.email, googleData.password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    userdata.success = 'successfully login'
                    userdata.isLogin = false;
                    setGoogleData(userdata)
                    // ...
                })
                .catch((error) => {
                    userdata.isLogin = true;
                    userdata.error = 'wrong information'
                    setGoogleData(userdata)
                });

        }
        e.preventDefault();
    }

    return (
        <div className='form'>
            <h4> Please Login in </h4>



            {googleData.isLogin === false ? <Link to='' >  <p style={{ color: 'green' }} >  {googleData.success} </p> </Link> : <p style={{ color: 'red' }} > {googleData.error} </p>}

            <form action="" onSubmit={handleSubmit} >
                <input placeholder='email' name='email' onChange={handleChange} type="text" />
                <br />
                <input placeholder='password' name='password' onChange={handleChange} type="password" />
                <br />
                <button className='btn btn-primary' value='Submit' type="Submit" > Submit </button>
            </form>

            <hr />
            <p> Login With </p>
            <div className="footer">

                <GoogleIcon onClick={googleLogin} />
                <FacebookIcon />
            </div>

        </div>
    )
}

export default Login
