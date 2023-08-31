import React, { useState } from 'react'
import './Sign.css'

const Sign = () => {


    /*   const [formVal, setformVal] = useState('');
       const [getVal, setgetVal] = useState('')
       */
    const handleSubmit = (e) => {
    }


    const handleChange = (e) => {
        // const { name, value } = e.target;

        if (e.target.name === 'email') {
            const re = /\S+@\S+\.\S+/;
            const validemail = re.test(e.target.name)
            console.log(validemail);
        }
    }


    return (
        <div className='form'>
            <form action="" onSubmit={handleSubmit} >
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