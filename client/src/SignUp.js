import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const SignUp = () => {
  const [signupFormData, setSignupFormData] = useState({
    email: "" ,
    name: "" ,
    username: "" ,
    password: ""
  })
  const [errors, setErrors] = useState([])
  //const navigate = useNavigate()

const { email, name, username, password} = signupFormData

  //const [userToSignUp, setUserToSignUp] = useState

const onFormSubmit = (e) => {
  e.preventDefault()
  const user = {
    username,
    name,
    email,
    password
  }

  fetch('/users', {
    method: 'POST',
    headers: { "Content-Type": 'application/json' },
    body: JSON.stringify(signupFormData)
  }).then(r => r.json())
    .then(r => {console.log(r)
      
      
      
      // if (r.errors) {
      //   setErrors(r.errors)
      // } else {
      //   navigate ('/', {replace: true})
      // }
    })
}
  const handleChangeToSignUp = (e) => {
    console.log(e)
    const { name, value } = e.target
    setSignupFormData({ ...signupFormData, [name]: value})
  }


  return (

    <>
      <Link to="/home" className="btn">Home</Link>
      <div>Sign up Here!</div>
      
        
            <br></br><br></br>
            <br></br><br></br>
        
        <label>Name</label>
        <form onSubmit={onFormSubmit}>
          <input
            type="text"
            onChange={ handleChangeToSignUp }
            name="name"
            value={name}
          />
          <label>Username</label>
          <input 
            type="text"
            onChange={handleChangeToSignUp}
            name="username"
            value={username}
          />
          <label>Email</label>
          <input 
            type="text"
            name="email"
            onChange={handleChangeToSignUp}
            value={email}
          />
          <label>Password</label>
          <input
            type="text"
            name="password"
            onChange={handleChangeToSignUp}
            value={password}
          />
          <input type="submit" value="Sign Up!"/>
        </form>

    </>

  )

}
export default SignUp