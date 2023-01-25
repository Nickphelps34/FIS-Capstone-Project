import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import UpdateUser from "./UpdateUser";




const SignUp = ({loggedInUser,  setLoggedInUser}) => {
  const [signupFormData, setSignupFormData] = useState({
    email: "" ,
    name: "" ,
    username: "" ,
    password: ""
  })
  const navigate = useNavigate()
  const { email, name, username, password} = signupFormData

  const onFormSubmit = (e) => {
    e.preventDefault()
    fetch('/users', {
      method: 'POST',
      headers: { "Content-Type": 'application/json' },
      body: JSON.stringify(signupFormData)
    }).then(r =>  {
        if (r.ok) {
          r.json().then((user) => {
            console.log("did a user come back?", user)
            setLoggedInUser(user)
            navigate ('/home')

          })
        } else {
          r.json().then(badData => {
            console.warn(badData)
          })
        }
      } )
  }
  const handleChangeToSignUp = (e) => {
    //console.log(e)
    const { name, value } = e.target
    setSignupFormData({ ...signupFormData, [name]: value})
  }
  return (
    <>
      <Link to="/home" className="btn">Home</Link>
      <div>Sign up Here!</div>
        
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
      <UpdateUser loggedInUser={loggedInUser}/>
    </>
  )
}
export default SignUp