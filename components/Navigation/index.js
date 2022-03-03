import { FaBars } from "react-icons/fa";
import { BsArrowLeftSquare, BsCart  , BsTextRight , BsFillXCircleFill} from "react-icons/bs";
import { useState } from "react";

const Navigation = () => {
  const [isExpanded , setIsExpanded] = useState(false)
  return (
    <>
      <nav className="flex items-center justify-between w-full shadow-lg p-4">
        <div className="flex">
          <div className="w-8 h-8 cursor-pointer">
            <img src="https://s6.uupload.ir/files/logo_mmle.jpg" alt="logo" />
          </div>
          <button onClick={()=>setIsExpanded(!isExpanded)} className="md:hidden  mr-10">
            {isExpanded ? <BsFillXCircleFill className="text-3xl text-purple-700 " /> : <BsTextRight className="text-3xl text-purple-700 " />}
          </button>
          <div className="hidden mx-4 md:flex md:items-center ">
            <ul className="flex">
              <li className="mx-2 flex  cursor-pointer items-center p-2 text-sm text-purple-800 hover:text-white hover:bg-purple-600 rounded-lg">
                خانه
              </li>
              <li className="mx-2 flex  cursor-pointer items-center p-2 text-sm  hover:text-white hover:bg-purple-600 rounded-lg">
                دوره اموزشی
              </li>
              <li className="mx-2 flex cursor-pointer  items-center p-2 text-sm  hover:text-white hover:bg-purple-600 rounded-lg">
                مقالات
              </li>
              <li className="mx-2 flex  cursor-pointer items-center p-2 text-sm  hover:text-white hover:bg-purple-600 rounded-lg">
                درباره ما
              </li>
            </ul>
          </div>
        </div>
        <div className="flex">
          <div className="mx-4 md:mx-8 cursor-pointer hover:bg-gray-100 p-2 rounded-full">
            <span className="text-purple-600  text-2xl">
              <BsCart />
            </span>
          </div>
          <div className="flex items-center justify-center mx-4  p-2 cursor-pointer hover:bg-gray-100 rounded-full">
            <span className="mx-1 text-purple-600 font-bold text-2xl">
              <BsArrowLeftSquare />
            </span>
            <span className="mx-1 font-bold text-sm text-purple-600">ورود</span>
          </div>
        </div>
      </nav>
      <div className={`w-full flex flex-col  bg-white shadow-lg md:hidden ${isExpanded ? "h-auto" : "hidden"}`}>
        <ul>
          <li className="p-2 text-sm text-purple-800  hover:bg-purple-600 hover:text-white rounded cursor-pointer">
            خانه
          </li>
          <li className="p-2 text-sm hover:bg-purple-600 hover:text-white rounded cursor-pointer">
            دوره اموزشی
          </li>
          <li className="p-2 text-sm hover:bg-purple-600 hover:text-white rounded cursor-pointer">
            مقالات
          </li>
          <li className="p-2 text-sm hover:bg-purple-600 hover:text-white rounded cursor-pointer">
            درباره ما
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navigation;
