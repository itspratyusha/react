import React from 'react'
import { useForm } from 'react-hook-form'

function Contact() {
    let {register, handleSubmit}=useForm()
    let onSubmit=(data)=> {console.log(data)}
  return (
    <div>
      <div className='mx-auto p-4'>
        <h2>Contact us</h2>
        <form className='space-y-4' onSubmit={handleSubmit(onSubmit)}>
            Full name:- <input className='border p-2' {...register("fname")} /> {/* ... is imp thru react hook form  */}
            <hr />
            phone name:- <input className='border p-2' {...register("phone")} />
            <hr />
            Gender:- <select {...register("gender")}>
                <option>male</option>
                <option>female</option>
            </select>
            <hr />
            <input type="checkbox" value="mern" {...register('courses')} /> MERN
            <input type="checkbox" value="web" {...register('courses')} /> WEB
            <hr />
            <button className='bg-red-500 p-4 rounded-2xl'>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
