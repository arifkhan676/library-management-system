import React, { useContext, useState } from 'react'
import './Sign.css'
import { ContextAPI } from '../../App'

import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from '../../firebase.config';

const Sign = () => {

    const [googleData, setGoogleData] = useContext(ContextAPI)
    console.log(googleData);

    // const [getVal, setgetVal] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.target;
        let isValidFrom = true;

        if (name === 'email') {
            const re = /\S+@\S+\.\S+/;
            isValidFrom = re.test(e.target.value)
            // console.log(validemail);
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
        if (googleData.email && googleData.password) {
            createUserWithEmailAndPassword(auth, googleData.email, googleData.password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                    // ..
                });
        }

        e.preventDefault();
    }


    return (
        <div className='form'>
            <form action="" onSubmit={handleSubmit} >
                <input placeholder='You Name' name='name' onChange={handleChange} type="text" />
                <br />
                <input placeholder='email' name='email' onChange={handleChange} type="text" />
                <br />
                <input placeholder='password' name='password' onChange={handleChange} type="password" />
                <br />
                <button className='btn btn-primary' value='Submit' type="Submit" > Submit </button>
            </form>

        </div>
    )
}

export default Sign
/*
            <input placeholder='Email'  name='name'  onChange={handleChange} type="text" />
                <br />

        
          setgetVal((preVal) => {
            return {
                ...preVal,
                formVal
            }
        })
        e.preventDefault();
                */