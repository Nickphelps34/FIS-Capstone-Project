import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import UpdateUser from "./UpdateUser";




const SignUp = ({loggedInUser,  setUserToLogin}) => {
  const [signupFormData, setSignupFormData] = useState({
    email: "" ,
    name: "" ,
    username: "" ,
    password: ""
  })
  // const [errors, setErrors] = useState([])
  const navigate = useNavigate()
  //const [username, setUsername] = useState("")
  //const loggedInUserId = loggedInUser.id 
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
            setUserToLogin(user)
            navigate ('/home')

          })
        } else {
          r.json().then(badData => {
            console.warn(badData)
          })
        }
      } )
    
    
    
    
    //   .then(r => {
    //     if (r.errors) {
    //       setErrors(r.errors)
    //     } else {
    //       navigate ('/', {replace: true})
    //     }
    // })
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
          {/* <input type="text" name={username} onChange={(e) => {setUsername(e.target.value)}}>Update </input> */}

    </>

  )

}
export default SignUp