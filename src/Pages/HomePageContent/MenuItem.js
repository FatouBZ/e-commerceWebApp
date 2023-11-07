import { AiOutlineHome } from "react-icons/ai";
import { BiLogoBootstrap } from "react-icons/bi";
import { BsCartCheck } from "react-icons/bs";
import { IoLogOutOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function MenuItem() {
  return (
    <div className="flex flex-col justify-between h-full ">
      <div>
        <Link to={"/"}>
          <div>
            <BiLogoBootstrap className="text-white text-6xl" />
          </div>
        </Link>
        <div className="mt-3 flex flex-col justify-center ">
          <Link to={"/"}>
            <button className=" flex justify-center hover:bg-[rgb(106,178,155)] mb-2  focus:bg-[#6AB29B] py-3 px-2 rounded  ">
              <AiOutlineHome className="text-white text-3xl" />
            </button>
          </Link>
          <Link to={"/register"}>
            <button className=" flex justify-center hover:bg-[rgb(106,178,155)] mb-2  focus:bg-[#6AB29B] py-3 px-2 rounded  ">
              <BsCartCheck className="text-white text-3xl" />
            </button>
          </Link>
        </div>
      </div>
      <div>
        <Link to={"/login"}>
          <button className=" flex justify-center hover:bg-[rgb(106,178,155)] mb-2  focus:bg-[#6AB29B] py-3 px-2 rounded  ">
            <IoLogOutOutline className="text-white text-3xl" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default MenuItem;
