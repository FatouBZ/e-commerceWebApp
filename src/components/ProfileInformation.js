import React from 'react'
import Profile from './Profile'
import ProfileMenuItems from '../Pages/HomePageContent/ProfileMenuItems'
import Orders from './Orders'

function ProfileInformation() {
  return (
    <div className=" flex w-full flex-row h-screen bg-[#247158] py-20 px-40">
      <div className=" flex flex-col w-[20%] text-white  text-xl mr-10">
        <ProfileMenuItems />
      </div>
      <div className="w-[80%] items-center">
        <Orders />
      </div>
    </div>
  )
}

export default ProfileInformation
