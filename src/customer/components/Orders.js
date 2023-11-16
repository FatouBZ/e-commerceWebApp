import React from 'react'
import orderButtons from './orderButtons'
function Orders() {
  return (
    <div className="flex flex-col w-[100%] justify-center">
      <h1 className="text-4xl text-[#247158] font-bold mb-5">ORDERS</h1>
      <ul className="flex justify-start text-[#247158]">
        {orderButtons.map((orderButton) => (
          <li key={orderButton.id}>
            <button className="mr-10 hover:underline focus:underline underline-offset-8 hover:decoration-2 focus:decoration-2">
              {orderButton.name}
            </button>
          </li>
        ))}
      </ul>
      <hr className="w-[70%] mt-2 h-1 border-[#97d4c2]" />
    </div>
  )
}

export default Orders
