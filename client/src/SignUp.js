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
      <Link to="/home" className="home-btn">Home</Link>
      <div></div>
        <fieldset className="signup-fieldset">
          <legend className="signup-legend">Sign Up!</legend>
            <form className="Submit-form" onSubmit={onFormSubmit}>
            <label>Name</label>
              <input
                className="Submit-form-name"
                type="text"
                onChange={ handleChangeToSignUp }
                name="name"
                value={name}
              />
            <label>Username</label>
              <input 
                className="Submit-form-username"
                type="text"
                onChange={handleChangeToSignUp}
                name="username"
                value={username}
              />
            <label>Email</label>
              <input 
                className="Submit-form-email"
                type="text"
                name="email"
                onChange={handleChangeToSignUp}
                value={email}
              />
            <label>Password</label>
              <input
                className="Submit-form-password"
                type="text"
                name="password"
                onChange={handleChangeToSignUp}
                value={password}
              />
            <input type="submit" value="Sign Up!"/>
          
          </form>
        </fieldset>
      <UpdateUser loggedInUser={loggedInUser}/>
    </>
  )
}
export default SignUp