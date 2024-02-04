import React from 'react'
import "./UserInfo.css"
const UserInfo = () => {
  return (
      <li className='flex items-center py-3'>
        <img className='mr-4' src={"./public/images/Avataruser.svg"} alt="" />
        <h3 className='mr-16'>Eren Jaegar</h3>
        <p className='mr-8'>Spicy seasoned seafood noodles</p>
        <p className='mr-28'>$125</p>
        <button className='info-btn'>Completed</button>
      </li>
  )
}

export default UserInfo
