import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { ContextAPI } from '../../App'
import './proced.css'

const Proceed = () => {
    const { register, handleSubmit, watch, formState: { errors }, } = useForm()
    const [googleData, setGoogleData] = useContext(ContextAPI)

    const onSubmit = (data) => { console.log(data) }

    console.log(watch("firstName"));
    return (
        <div>
            <h3> Shipping Form </h3>
            <form onSubmit={handleSubmit(onSubmit)} className='form'>

                <input placeholder="firstName" defaultValue={googleData.name} {...register("firstName", { required: true, })} />
                {errors.firstName && <span style={{ color: 'red' }} >firstName is required</span>}

                <input placeholder="email" defaultValue={googleData.email}   {...register("email", { required: true })} />
                {errors.email && <span style={{ color: 'red' }} >email is required</span>}

                <input placeholder="Address"   {...register("address", { required: true })} />
                {errors.address && <span style={{ color: 'red' }} >Address is required</span>}

                <input placeholder="phone number"  {...register("number", { required: true })} />
                {errors.number && <span style={{ color: 'red' }} >number is required</span>}

                <input type="submit" placeholder='' />
            </form>
        </div>
    )
}

export default Proceed
