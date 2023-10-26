import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { ContextAPI } from '../../App'
import './proced.css'
import SweetAlert2 from 'react-sweetalert2';

const Proceed = () => {
    const [swalProps, setSwalProps] = useState({});

    const { register, handleSubmit, watch, formState: { errors }, } = useForm()
    const [googleData, setGoogleData] = useContext(ContextAPI)

    const onSubmit = (data) => {
        console.log(data)
        setSwalProps({
            show: true,
            title: 'Submitted!',
            text: 'Thank You for submission',
        });
    }

    console.log(watch("firstName"));
    return (
        <div>
            <h3> Shipping Form </h3>
            <form onSubmit={handleSubmit(onSubmit)} className='proceed-form'>

                <input placeholder="fullName" defaultValue={googleData.name} {...register("fullName", { required: true, })} />
                {errors.fullName && <span style={{ color: 'red' }} >full Name is required</span>}

                <input placeholder="email" defaultValue={googleData.email}   {...register("email", { required: true })} />
                {errors.email && <span style={{ color: 'red' }} >email is required</span>}

                <input placeholder="StudentID"   {...register("StudentID", { required: true })} />
                {errors.StudentID && <span style={{ color: 'red' }} >StudentID is required</span>}

                <input placeholder="phone number"  {...register("number", { required: true })} />
                {errors.number && <span style={{ color: 'red' }} >number is required</span>}

                <input type="submit" placeholder='' />
            </form>
            <SweetAlert2 {...swalProps} />

        </div>
    )
}

export default Proceed
