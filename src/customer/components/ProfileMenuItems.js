import React from 'react'

import { RiAccountCircleLine, RiCoupon4Line } from 'react-icons/ri'
import { HiOutlineClipboardList, HiOutlineLocationMarker } from 'react-icons/hi'
import { ImCreditCard } from 'react-icons/im'
import { AiOutlineHeart } from 'react-icons/ai'
import { BiLogoBootstrap } from 'react-icons/bi'
import { Link } from 'react-router-dom'
function ProfileMenuItems() {
  return (
    <>
      <Link to={'/'}>
        <div className="items-center">
          <BiLogoBootstrap className="text-white text-6xl " />
        </div>
      </Link>
      <Link
        to="/MyAccount"
        className="flex items-center hover:bg-[#6AB29B] focus:font-bold
          focus:border-none p-2 mb-3 focus:bg-[#6AB29B] w-full rounded"
      >
        <RiAccountCircleLine className="mr-2  text-2xl " />
        <p>My Account</p>
      </Link>
      <button className="flex items-center  hover:bg-[#6AB29B]  focus:font-bold focus:border-none p-2 mb-3 focus:bg-[#6AB29B] w-full  rounded">
        <HiOutlineClipboardList className="mr-2  text-2xl " />
        <p>Orders</p>
      </button>
      <button className="flex items-center  hover:bg-[#6AB29B]  focus:font-bold focus:border-none p-2 mb-3 focus:bg-[#6AB29B] w-full  rounded">
        <RiCoupon4Line className="mr-2  text-2xl " />
        <p>Coupons</p>
      </button>
      <button className="flex items-center  hover:bg-[#6AB29B]  focus:font-bold focus:border-none p-2 mb-3 focus:bg-[#6AB29B] w-full  rounded">
        <ImCreditCard className="mr-2  text-2xl " />
        <p>Gift Card</p>
      </button>
      <button className="flex items-center  hover:bg-[#6AB29B]  focus:font-bold focus:border-none p-2 mb-3 focus:bg-[#6AB29B] w-full  rounded">
        <HiOutlineLocationMarker className="mr-2  text-2xl " />
        <p>Address Book</p>
      </button>
      <button className="flex items-center  hover:bg-[#6AB29B]  focus:font-bold focus:border-none p-2 mb-3 focus:bg-[#6AB29B] w-full  rounded">
        <AiOutlineHeart className="mr-2  text-2xl " />
        <p>My Wish List</p>
      </button>
    </>
  )
}

export default ProfileMenuItems
