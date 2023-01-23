import { useState } from "react";
import React from "react";

  const UpdateUser = ({loggedInUser}) => {
    console.log(loggedInUser)
    const [updatedFormData, setUpdateFormData] = useState({
      name: "" ,
  })
    const [currentUser, setCurrentUser] = useState(null)
    const { name, username} = updatedFormData
    const [newUserName, setNewUserName] = useState("")
    //const [NewUsername, setNewUsername] = useState{""}
    const [updateUserInfo, setUpdateUserInfo] = useState()

  const updateUser = (loggedInUser) => {
    let item = (username,name) 
    console.log(item)
   }
  
  const onUpdateSubmit = (e) => {
    e.preventDefault()
    const user = {
      username,
      name
    }
  fetch(`/users/${loggedInUser.id}` ,{
    method: "PATCH",
    headers: { "Content-Type": 'application/json' },
    body: JSON.stringify(updatedFormData)
  }).then( r => r.json())
    .then( updateUserInfo => {
      console.log(updateUserInfo)
      setCurrentUser( {...currentUser, name:newUserName})
    }
    
    
    )}
  const handleChangeToUpdate = (e) => {
    console.log(e)
    const { name, value } = e.target
    setUpdateFormData({ ...updatedFormData, [name]: value})
  }

  return (



    <div>
        <label>Name</label>
        <form onSubmit={onUpdateSubmit}>
          <input
            type="text"
            onChange={ handleChangeToUpdate }
            name="name"
            value={name}
          />
          {/* <label>Username</label>
          <input 
            type="text"
            onChange={handleChangeToUpdate}
            name="username"
            value={username}
          /> */}
          <input type ="submit" button={updateUser} value="Update!"/>
          
        </form>
    </div>
  )
}

export default UpdateUser