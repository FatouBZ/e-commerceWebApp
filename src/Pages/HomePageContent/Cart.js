import React from "react";
import { BsCashCoin, BsCreditCard, BsThreeDotsVertical } from "react-icons/bs";
import { BiQrScan } from "react-icons/bi";
import { AiFillPlusSquare, AiFillMinusSquare } from "react-icons/ai";

function Cart() {
  return (
    <>
      <div className="flex text-[#fff] font-bold  justify-between mb-5">
        <p className="text-lg">Cart</p>
        <BsThreeDotsVertical className="text-white text-lg " />
      </div>

      <div className=" flex bg-[#fff]  rounded-lg text-center mb-2">
        <div className="p-2 max-w-[35%]">
          <img
            src="./asset/1.jpg"
            alt="product name"
            className="rounded-lg w-[100%]"
          />
        </div>
        <div className="flex flex-col w-full ">
          <div className="flex flex-row w-full p-2 justify-between ">
            <p className=" text-sm">Product Name</p>
            <p className="text-[#247158] font-bold text-sm text-center">$20</p>
          </div>
          <div className="flex  justify-end px-2  items-center">
            <div className="flex flex-col items-center  text-[#aab3b0] font-bold">
              <AiFillMinusSquare />
            </div>
            <p className="flex flex-col items-center mb-1 mx-2 text-[#247158]">
              1
            </p>
            <div className="flex flex-col items-center   text-[#247158] font-bold">
              <AiFillPlusSquare />
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col bg-[#fff]  rounded-lg text-center p-5">
        <div className="flex justify-between text-[#247158]  mb-2">
          <p className="">SubTotal</p>
          <p>$200</p>
        </div>
        <div className="flex justify-between text-[#247158]  mb-2">
          <p className="">Discount</p>
          <p>$5</p>
        </div>
        <div className="flex justify-between text-[#247158]  mb-2">
          <p className="">Tax</p>
          <p>$200</p>
        </div>
        <div className="flex justify-between text-[#247158]  mb-2">
          <p className="font-bold ">SubTotal</p>
          <p>$1.90</p>
        </div>
        <hr></hr>
        <div className="flex justify-between text-[#247158] font-bold text-lg ">
          <p>Total</p>
          <p>$200</p>
        </div>
      </div>
      <div className="p-5 outline outline-white outline-1 mt-2 rounded-md">
        <p className="text-lg text-white">Payment Method</p>
        <div className="flex  justify-around items-center">
          <button className=" flex flex-col justify-center items-center hover:text-white hover:border  hover:bg-[#6AB29B] focus:border  focus:bg-[#6AB29B] w-20 h-16  rounded">
            <BsCashCoin className="text-[#fff] mb-1" />
            <small style={{ fontSize: 10 }} className=" text-[#fff]">
              Cash
            </small>
          </button>
          <button className=" flex flex-col justify-center items-center hover:text-white hover:border  hover:bg-[#6AB29B] focus:border  focus:bg-[#6AB29B] w-20 h-16  rounded">
            <BsCreditCard className="text-[#fff]  mb-1" />
            <small style={{ fontSize: 10 }} className=" text-[#fff] px-1 ">
              Debit Card
            </small>
          </button>
          <button className=" flex flex-col justify-center items-center hover:text-white hover:border  hover:bg-[#6AB29B] focus:border  focus:bg-[#6AB29B] w-20 h-16  rounded">
            <BiQrScan className="text-[#fff]  mb-1" />
            <small style={{ fontSize: 10 }} className="text-[#fff] ">
              QRS
            </small>
          </button>
        </div>
      </div>
      <div className="w-full">
        <button className=" w-full bg-[#fff] p-1 mb-2 text-[#247158] font-bold rounded-lg">
          Add to Billing
        </button>
      </div>
    </>
  );
}

export default Cart;
