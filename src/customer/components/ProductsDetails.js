import React from 'react'
import { IoArrowBackCircleSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'

function ProductsDetails() {
  return (
    <>
      <Link to="/">
        <button className="mt-20 mb-10">
          <IoArrowBackCircleSharp className="text-[#247158] text-5xl" />
        </button>
      </Link>

      <div className=" flex justify-between w-full">
        <div className="flex flex-col max-w-[10%] justify-start ">
          <div className="bg-[#fff] rounded-lg w-20 h-20  m-2 text-center ">
            H
          </div>
          <div className="bg-[#fff] rounded-lg w-20 h-20  m-2 text-center ">
            H
          </div>
          <div className="bg-[#fff] rounded-lg w-20 h-20  m-2 text-center ">
            H
          </div>
          <div className="bg-[#fff] rounded-lg w-20 h-20  m-2 text-center ">
            H
          </div>
          <div className="bg-[#fff] rounded-lg w-20 h-20  m-2 text-center ">
            H
          </div>
        </div>
        <div className="max-w-[60%] max-h[50%] ">
          <img
            src="./asset/1.jpg"
            alt="product name"
            className="rounded-lg w-full h-full object-cover border-2 border-black"
          />
        </div>
        <div className=" flex flex-col max-w-[30%] max-h[50%] ml-2 justify-between ">
          <div>
            <p className="text-[#000] text-2xl font-bold mb-5">Product Name</p>
            <p className="text-[#247158] font-bold text-xl mr-20  mb-5">$20</p>
            <div className="mb-44">
              <p className="text-[#247158]">Product Description:</p>
              <small>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris{' '}
              </small>
            </div>
          </div>
          <div className="w-full p-2">
            <button className=" w-full bg-[#247158] p-1 mb-2 text-[#fff] font-bold rounded-lg">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductsDetails
