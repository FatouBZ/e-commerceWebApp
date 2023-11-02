import { FaApple, FaBeer } from "react-icons/fa";

function MenuItem() {
  return (
    <div className="flex flex-col ">
      <div>
        <FaBeer className="text-white text-2xl" />
        <FaApple className="text-white text-2xl" />
      </div>
    </div>
  );
}

export default MenuItem;
