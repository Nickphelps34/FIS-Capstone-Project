import { useState } from "react";
import React from "react";

const UpdateUser = ({loggedInUser}) => {
    const [updatedFormData, setUpdateFormData] = useState({
      name: "" ,
    })
    const [currentUser, setCurrentUser] = useState()
  const onUpdateSubmit = (e) => {
    fetch(`/users/${loggedInUser.id}` ,{
        method: "PATCH",
        headers: { "Content-Type": 'application/json' },
        body: JSON.stringify(updatedFormData)
      }).then(r => r.json())
        .then( updateUserInfo => {
          setCurrentUser( {...currentUser, name:updateUserInfo})
      })
  }

  const handleChangeToUpdate = (e) => {
    const { name, value } = e.target
    setUpdateFormData({ ...updatedFormData, [name]: value})
  }

  return (
      <div>
        <fieldset className="update-fieldset">
        <legend className="update-legend">Wanna change your name?</legend>
          <label>Name</label>
            <form onSubmit={onUpdateSubmit}>
              <input
                type="text"
                onChange={ handleChangeToUpdate }
                name="name"
            />
              <input type ="submit" value="Update!"/>
          </form>
        </fieldset>
    </div>
  )
}

export default UpdateUser