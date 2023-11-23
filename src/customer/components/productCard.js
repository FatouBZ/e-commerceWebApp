import React, { useState } from 'react'
import { MdFavoriteBorder, MdOutlineFavorite } from 'react-icons/md'
import { Link } from 'react-router-dom'

export default function ProductCard() {
  const [addToFavorites, setAddToFavorites] = useState(false)
  const addFavorite = () => {
    setAddToFavorites(!addToFavorites)
  }

  return (
    <div className=" flex flex-col bg-[#fff] rounded-lg w-60 text-center outline outline-1 outline-gray-200 hover:shadow-lg hover:outline-[#247158]">
      <div className="p-2 max-w-full h-44 overflow-hidden">
        <Link to="product-detail">
          <img
            src="./asset/1.jpg"
            alt="product name"
            className="rounded-lg w-full h-full object-cover"
          />
        </Link>
      </div>
      <div className="flex flex-col text-left p-2 ">
        <p className="font-bold">Product Name</p>
        <div className="flex">
          <p className="text-[#247158] text-lg mr-20 ">$20</p>
          <p>Rating</p>
        </div>
      </div>
      <div className="flex  px-2 w-full space-x-20">
        <button className=" w-full bg-[#247158] p-1 mb-2 text-[#fff] rounded-lg">
          Add to Cart
        </button>
        <div className='"w-full'>
          {addToFavorites ? (
            <MdOutlineFavorite
              className="text-3xl text-red-700"
              onClick={addFavorite}
            />
          ) : (
            <MdFavoriteBorder className="text-3xl" onClick={addFavorite} />
          )}
        </div>
      </div>
    </div>
  )
}
