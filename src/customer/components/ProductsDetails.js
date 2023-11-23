import React from 'react'
import { IoArrowBackCircleSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import productCategoryData from '../data/productCategoryData.json'

function ProductsDetails() {
  return (
    <>
      <div className=" flex flex-col bg-[#fff] rounded-lg w-full h-full p-5 ">
        <Link to="/" className=" w-[5%]">
          <button>
            <IoArrowBackCircleSharp className="text-[#247158] text-5xl" />
          </button>
        </Link>
        <div className=" flex  w-full h-full gap-5">
          <ul className=" flex flex-col gap-2">
            {productCategoryData.map((productCategory) => (
              <li
                key={productCategory.id}
                className="bg-[#247158] rounded-lg w-20 h-20  p-2 text-center "
              >
                <button className=" hover:underline focus:underline underline-offset-8 hover:decoration-2 focus:decoration-2">
                  {productCategory.name}
                </button>
              </li>
            ))}
          </ul>

          <div className="w-full h-full overflow-hidden">
            <img
              src="../asset/6.jpg"
              alt="product name"
              className="rounded-lg w-full h-full object-cover"
            />
          </div>

          <div className=" flex flex-col justify-between ">
            <div className="space-y-5">
              <p className="text-[#000] text-2xl font-bold ">Product Name</p>
              <p className="text-[#247158] font-bold text-xl   ">$20</p>
              <div className="">
                <p className="text-[#247158]">Product Description:</p>
                <small>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris{' '}
                </small>
              </div>
            </div>
            <div className="w-full ">
              <button className=" w-full bg-[#247158] p-2 text-[#fff] font-bold rounded-lg">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductsDetails
