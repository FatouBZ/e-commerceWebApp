import { AiOutlineHome } from 'react-icons/ai'
import { BiLogoBootstrap } from 'react-icons/bi'
import { BsCartCheck } from 'react-icons/bs'
import { IoLogOutOutline } from 'react-icons/io5'

function MenuItem() {
  return (
    <div className="flex flex-col justify-between h-full ">
      <div>
        <div>
          <BiLogoBootstrap className="text-white text-6xl" />
        </div>

        <div className="mt-3 flex flex-col justify-center ">
          <button className=" flex justify-center hover:bg-[rgb(106,178,155)] mb-2  focus:bg-[#6AB29B] py-3 px-2 rounded  ">
            <AiOutlineHome className="text-white text-3xl" />
          </button>
          <button className=" flex justify-center hover:bg-[rgb(106,178,155)] mb-2  focus:bg-[#6AB29B] py-3 px-2 rounded  ">
            <BsCartCheck className="text-white text-3xl" />
          </button>
        </div>
      </div>

      <div>
        <button className=" flex justify-center hover:bg-[rgb(106,178,155)] mb-2  focus:bg-[#6AB29B] py-3 px-2 rounded  ">
          <IoLogOutOutline className="text-white text-3xl" />
        </button>
      </div>
    </div>
  )
}

export default MenuItem
