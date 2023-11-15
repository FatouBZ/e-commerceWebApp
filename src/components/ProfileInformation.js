import React from 'react'
import Profile from './Profile'
import ProfileMenuItems from '../Pages/HomePageContent/ProfileMenuItems'
import Orders from './Orders'
import Coupons from './Coupons'
import AddressBook from './addressBook'

function ProfileInformation() {
  return (
    <div className=" flex w-full flex-row h-screen bg-[#247158]  px-5 py-2 ">
      <div className=" flex flex-col w-[20%] text-white  text-xl mr-10">
        <ProfileMenuItems />
      </div>
      <div className="w-[80%] items-center bg-[#E5DAC4] rounded p-20">
        <AddressBook />
      </div>
    </div>
  )
}

export default ProfileInformation
