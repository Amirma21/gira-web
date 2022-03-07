const FormsLayout = ({ children, title }) => {
  return (
    <div
      className="w-full h-[190vh]  mt-4 z-[-1] bg-purple-400
      "
      style={{
        background:
          "url('https://s6.uupload.ir/files/pattern_c3j1.png') repeat #f3f7fa",
      }}
    >
      <div className="flex justify-center w-full h-full ">
        <div className="md:w-2/5 w-4/5  h-5/6 absolute mt-16 z-10">
          {" "}
          <div className=" w-full h-auto rounded-xl shadow-2xl bg-white formSection">
            <h2 className="text-center md:pt-8 pt-4 pb-4 ">{title}</h2>
            <h4 className="text-xs sm:text-sm text-gray-700 text-center">
              {" "}
              با ثبت نام در سایت ، از مزایای کاربران استفاده کنید
            </h4>
            <div className="w-full h-[10rem] sm:h-[12rem] md:h-[16rem] my-2 md:my-4 flex justify-center">
              <img
                src="https://s6.uupload.ir/files/auth_q2kv.jpg"
                alt="authentication"
                className="h-full "
              />
            </div>
            <div>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormsLayout;
