import axios from "axios";
import { useState } from "react";
import { BsPersonCircle, BsX } from "react-icons/bs";
import { useAuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";

const Avatar = () => {
  const [isShowDropdown, setIsShowDropDown] = useState(false);
  const [isShowLogOutModal, setisShowLogOutModal] = useState(false);
  const {setState} = useAuthContext()
  

const modalHandler = ()=>{
  setisShowLogOutModal(true)
  setIsShowDropDown(false)
}

const logoutHandler = async ()=>{
  setisShowLogOutModal(false)
  try {
   await axios.get("/api/auth/logout")
    setState(null);
  toast.warning("از حساب کاربری خود خارج شدید")
  } catch (error) {
    console.log(error);
  }
}


  return (
    <>
      <div className="relative ">
        <BsPersonCircle
          className="text-gray-400 text-4xl cursor-pointer"
          onClick={() => setIsShowDropDown(!isShowDropdown)}
        />
        <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full"></span>
        <div
          className={`${
            isShowDropdown ? "block" : "hidden"
          } mt-2 bg-gray-50 w-32 shadow-lg rounded-lg absolute right-0`}
        >
          <li className="cursor-pointer text-sm p-2 hover:bg-blue-100 rounded-t-lg">
            پروفایل
          </li>
          <li
            className="cursor-pointer text-sm p-2 hover:bg-red-200 rounded-b-lg"
            onClick={modalHandler}
          >
            خروج
          </li>
        </div>
      </div>
      <div id="modal" className={`${isShowLogOutModal ? "block" : "hidden"}`}>
        <div
          className="w-screen h-screen fixed top-0 right-0"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          onClick={() => setisShowLogOutModal(false)}
        ></div>
        <div
          className="absolute top-1/4 rounded-lg bg-white shadow-lg  w-[28rem] h-[8rem] "
          style={{ right: "calc(calc(100vw / 2) - 14rem)" }}
        >
          <div>
            <span
              onClick={() => setisShowLogOutModal(false)}
              className="bg-red-600 cursor-pointer inline-block text-white rounded-bl-lg rounded-tr-lg text-2xl"
            >
              <BsX />
            </span>
          </div>

          <p className="text-sm p-2">
            آیا مطمئن هستید که میخواهید از حساب کاربری خود خارج شوید ؟
          </p>

          <div className="flex justify-end px-2 mt-4 ">
            <button className="mx-1 text-sm px-2 rounded-md py-1 border border-green-500" onClick={()=>setisShowLogOutModal(false)}>
              لغو
            </button>
            <button onClick={logoutHandler} className="border  text-sm px-2 py-1 rounded-md border-red-500 hover:bg-red-500 hover:text-white">
              خروج
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Avatar;
