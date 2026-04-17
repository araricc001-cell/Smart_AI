import React from 'react'
import "./profile.css"

function Profile({ name, age, image, gander}) {
  return (
    <div>
        {/* Profile */}
        <img src={image} className="img" />
        <h1 className='header'>{name}</h1>
        <p>{age}</p>
        <p>{gander}</p>
    </div>

  )
}

export default Profile