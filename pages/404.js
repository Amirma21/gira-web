import Link from "next/link";

const NotFound = () => {
  return (
    <div className="md:w-2/3 mx-auto mt-8">
      <img
        src="https://s6.uupload.ir/files/404_(2)_mt2.png"
        alt="notfoundPage"
        className="md:h-[60vh] h-[40vh] mx-auto"
      />
      <h2 className="font-bold md:text-lg text-sm mb-4 text-center">صفحه مورد نظر شما یافت نشد</h2>
      <div className="w-full flex justify-center"><Link href={"/"}><button className="gradient rounded-md p-2 md:my-2  my-1 md:text-lg text-sm">رفتن به صفحه اصلی  </button></Link></div>
    </div>
  );
};

export default NotFound;
