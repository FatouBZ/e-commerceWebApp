import React from 'react'

function Orders() {
  return (
    <div className="flex flex-col w-[100%] justify-center">
      <h1 className="text-4xl text-[#fff] font-bold mb-5">Orders</h1>
      <div className="flex justify-start text-white">
        <button className="mr-10 hover:underline focus:underline underline-offset-8 hover:decoration-2 focus:decoration-2">
          All
        </button>
        <button className="mr-10 hover:underline focus:underline underline-offset-8 hover:decoration-2 focus:decoration-2">
          Unpaid
        </button>
        <button className="mr-10 hover:underline focus:underline underline-offset-8 hover:decoration-2 focus:decoration-2">
          Processing
        </button>
        <button className="mr-10 hover:underline focus:underline underline-offset-8 hover:decoration-2 focus:decoration-2">
          Shipped
        </button>
        <button className="mr-10 hover:underline focus:underline underline-offset-8 hover:decoration-2 focus:decoration-2">
          Reviews
        </button>
        <button className="mr-10 hover:underline focus:underline underline-offset-8 hover:decoration-2 focus:decoration-2">
          Returns
        </button>
      </div>
      <hr className="w-[70%] mt-2 h-1" />
    </div>
  )
}

export default Orders
