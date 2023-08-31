import React, { useContext, useState } from 'react'
import './Sign.css'
import { ContextAPI } from '../../App'

const Sign = () => {

    const [googleData, setGoogleData] = useContext(ContextAPI)
    console.log(googleData);

    // const [getVal, setgetVal] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
    }


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


    return (
        <div >
            <form action="" onSubmit={handleSubmit} >
                <input placeholder='email' name='email' onChange={handleChange} type="text" />
                <br />
                <input placeholder='password' name='password' onChange={handleChange} type="password" />
                <br />
                <button className='btn btn-primary' value='Submit' type="Submit" > Submit </button>
            </form>
            <p> {googleData.email} </p>
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