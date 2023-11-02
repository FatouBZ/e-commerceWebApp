import React from 'react'
import Products from './HomePageContent/Products'
import MenuItem from './HomePageContent/MenuItem'
import Cart from './HomePageContent/Cart'

function HomePage() {
  return (
    <div className=" flex flex-row h-screen bg-[#E5DAC4]">
      <div className="flex flex-col h-screen items-center px-10 py-5 w-[5%] bg-[#247158]">
        <MenuItem />
      </div>
      <div className="flex flex-col h-screen  w-[75%] px-10 py-5 ">
        <Products />
      </div>
      <div className="flex fle-col w-[20%] p-5 bg-[#247158] ">
        <Cart />
      </div>
    </div>
  )
}

export default HomePage
