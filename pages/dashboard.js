import { HiOutlineMenuAlt3, HiOutlineUserGroup, HiOutlineX, HiOutlineHome } from "react-icons/hi";

const dashboard = () => {
    return (
        <nav className="bg-gray-100 text-gray-600 text-sm h-[100vh] w-[200px] shadow-lg mt-4 mr-2 rounded-lg p-2">
            <div className="text-2xl text-purple-800 px-2">
                <HiOutlineX className="hover:bg-purple-200 cursor-pointer" />
            </div>

            <div className="my-8 flex  items-center hover:bg-purple-200 py-3 px-2 rounded-lg">
                <span className="text-2xl ml-2"><HiOutlineHome /></span>
                <span className="text-sm ">صفحه اصلی</span>
            </div>

            <div className="my-8 flex items-center">
                <span className="text-2xl ml-2"><HiOutlineUserGroup /></span>
                <span className="text-sm">مدیریت کاربران</span>
            </div>
        </nav>);
}

export default dashboard;