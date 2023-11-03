import React from 'react'
import { FaSearch } from 'react-icons/fa'

function Search() {
  return (
    <>
      <div className="flex justify-between ">
        <form className=" w-[80%] ">
          <div className=" flex justify-between items-center w-full bg-[#fff] rounded-full outline outline-1 outline-gray-200">
            <input
              className=" w-[95%]  px-5 py-2 rounded-full outline outline-0 outline-gray-200"
              type="text"
              id=""
              name=""
              placeholder="Search menu"
            />
            <button className="mr-5">
              <FaSearch className="text-[#247158] text-2xl" />
            </button>
          </div>
        </form>

        <div className="flex ">
          <img
            className="w-10 h-10  rounded-full bg-[#000]"
            src=""
            alt="profile"
          />
          <p className="flex ml-2 mt-2 mr-10">Fatou Bintou</p>
        </div>
      </div>
    </>
  )
}

export default Search
