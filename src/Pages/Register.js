import React from 'react';
// 1 - Require react hooks for the state of the application to storage the data
import { useState, useEffect } from 'react'
// 2 - Get the logo of the application and all the css required
import {Logo, FormRow, Alert } from '../components/index'
import  Wrapper from '../assets/wrappers/RegisterPage'

// Create the initial state for the form, basically an empty object that will storage the date inside useState()
const initialState = {
  name:'',
  email:'',
  password:'',
  isMember: true,
  notes:'',
  showAlert: false,
}

const Register = () => {
  // using hooks to grab and save the data/ 
  const [values,setValues] = useState(initialState)

  // global state and useNavigate state.

  const toggleMember = () => {
    setValues({...values, isMember:!values.isMember})
  }

  const handleChange = (e) =>{
    console.log(e.target);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  }




  return <Wrapper className="full-page">
    <form className="form" onSubmit={onSubmit}>
      <Logo/>
      <h3>{values.isMember ? "Login" : "Register"}</h3>
      {values.showAlert && <Alert/>}
      {/* Pass the input and the props - Input for Name */}
      {!values.isMember && (
        <FormRow type="text" name="name" value={values.name} handleChange={handleChange}/>
      )}
      {/* Pass the input and the props - Input for Email */}
      <FormRow type="email" name="email" value={values.email} handleChange={handleChange}/>
      {/* Pass the input and the props - Input for Password */}
      <FormRow type="password" name="password" value={values.password} handleChange={handleChange}/>

      <button type="submit" className="btn btn-block"> Submit </button>
      <p>
        {values.isMember ? "Not a member yet" : "Already a member?"}
        <button type="button" onClick={toggleMember} className="member-btn">
          {values.isMember ? ' Register' : 'Login'}
        </button>
      </p>


    </form>
  </Wrapper>

};

export default Register;
