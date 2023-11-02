import React from 'react'

function Products() {
  return (
    <>
      <div className="flex justify-between ">
        <form className=" w-[80%] ">
          <input
            className=" w-[100%]  px-5 py-2 rounded-full outline outline-1 outline-gray-200"
            type="text"
            id=""
            name=""
            placeholder="Search menu"
          />
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

      <div className="text-lg  font-bold text-[#247158]  mt-2 mb-2">
        <h1>Choose Category</h1>
      </div>
      <div className="flex px-20 ml-10 ">
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
        <div className="bg-[#fff] rounded-lg w-20 h-20  m-2 text-center ">
          H
        </div>
        <div className="bg-[#fff] rounded-lg w-20 h-20  m-2 text-center ">
          H
        </div>
      </div>
      <div className=" text-4xl font-bold text-[#247158]  mt-2 mb-2">
        <h1>Category chosen name</h1>
      </div>
      <div className="flex flex-wrap justify-around ">
        <div className=" flex flex-col bg-[#fff] rounded-lg w-60 h-60 mt-5 text-center ">
          <div className="p-2 max-w-20 max-h-50">
            <img
              src="./asset/1.jpg"
              alt="product name"
              className="rounded-lg w-[100%]"
            />
          </div>
          <div className="flex flex-col">
            <p>Product Name</p>
            <p>Rating</p>
            <p>Product Brand</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Products
