import React from 'react'
import couponButtons from '../data/couponButtons.json'
function Coupons() {
  return (
    <div className="flex flex-col w-[100%] justify-center">
      <h1 className="text-4xl text-[#247158] font-bold mb-5">COUPONS</h1>
      <ul className="flex justify-start text-[#247158]">
        {couponButtons.map((couponButton) => (
          <li key={couponButton.id}>
            <button className="mr-10 hover:underline focus:underline underline-offset-8 hover:decoration-2 focus:decoration-2">
              {couponButton.name}
            </button>
          </li>
        ))}
      </ul>
      <hr className="w-[70%] mt-2 h-1 border-[#97d4c2]" />
    </div>
  )
}

export default Coupons
