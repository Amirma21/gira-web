import { HiClock, HiPhone, HiMail } from "react-icons/hi";
import React, { useEffect, useState } from 'react';
import { toast } from "react-toastify";
import { useAuthContext } from "../../context/AuthContext";



const Contact = () => {

  const { state } = useAuthContext()


  const [isAuth, setIsAuth] = useState(false)

  const [formData, setFormData] = useState({
    name: "", email: "", category: "", title: "", message: ""
  })

  useEffect(() => {
    { state ? setIsAuth(true) : setIsAuth(false) }
  }, [state])


  const submitHandler = (event) => {
    event.preventDefault();
    const values = { ...formData, isUser: "false", useName: "fadafdud" }
    console.log(values);

    // if(!formData.name || !formData.email || !formData.category || !formData.title || !formData.message ){
    //   toast.error("لطفا تمام مقادیر را وارد نمایید")
    // }else{

    // }
  }

  const changeFormDataHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }


  return (
    <div className="bg-gray-100 w-full h-[100vh] flex justify-center">

      <section className="w-full md:w-3/5 bg-white shadow-2xl mt-8 rounded-lg p-8 relative">

        <div className="md:w-[73%] w-full p-4">
          <p className="text-sm text-gray-700 mb-8">
            لطفاً ما را در جریان انتقادات و پیشنهادات خود و یا خطاهای موجود در سایت قرار
            دهید.
          </p>

          <form onSubmit={submitHandler} className="max-w-full">
            <div className={`${isAuth && "hidden"} lg:flex-row lg:justify-between w-full  flex flex-col`}>
              <div className="flex flex-col lg:w-[48%]">
                <label className="text-xs my-1"> نام</label>
                <input onChange={changeFormDataHandler} name="name" value={formData.name} type="text" className="border border-gray-500 outline-purple-500 rounded p-2" />
              </div>

              <div className="flex flex-col lg:mr-2 lg:w-[48%]">
                <label className="text-xs my-1"> ایمیل</label>
                <input onChange={changeFormDataHandler} name="email" value={formData.email} type="email" className="w-full border border-gray-500 outline-purple-500 rounded p-2" />
              </div>
            </div>
            <div className="flex flex-col">

              <div className="flex flex-col my-2">
                <label className="text-xs my-1">دسته بندی</label>
                <select className="border border-gray-500 text-sm outline-purple-500 rounded p-2" placeholder="انتخاب کنید" value={formData.category} name="category" onChange={changeFormDataHandler}>
                  <option value="" hidden disabled>انتخاب کنید ..</option>
                  <option value="test">شرکت در آزمون ها</option>
                  <option value="course">دوره های آموزشی</option>
                </select>
              </div>



              <div className="flex flex-col my-2">
                <label className="text-xs my-1">عنوان</label>
                <input onChange={changeFormDataHandler} name="title" value={formData.title} type="text" className="w-full border border-gray-500 outline-purple-500 rounded p-2" />
              </div>

              <div className="flex flex-col my-2">
                <label className="text-xs my-1">پیام</label>
                <textarea onChange={changeFormDataHandler} name="message" className="w-full text-xs h-32 border border-gray-500 outline-purple-500 rounded p-2 " />
              </div>

            </div>
            <button type="submit" className="bg-purple-700 px-4 py-2 rounded text-sm text-white">ارسال</button>
          </form>

        </div>

        <div className="bg-purple-700  rounded-sm hidden md:block absolute w-[15rem] top-16 lg:left-[-4rem] left-[-7rem] py-8 px-3 shadow-2xl">
          <h2 className="text-white">ارتباط با ما</h2>
          <div className="flex text-white my-4">
            <span className="text-lg"><HiPhone /></span> <span className="ltr mx-1 text-white">۰۹۱۹ ۱۸۳ ۱۶۳۵</span>
          </div>

          <div className="flex text-white my-4">
            <span className="text-lg"><HiMail /></span> <span className="mx-1 text-white">giraweb@gmil.com</span>
          </div>

          <div className="flex flex-col text-white my-4">
            <span className="text-lg flex"> <HiClock /> <span className="text-white mx-2 text-sm">ساعت کاری</span></span>  <span className="my-4 text-sm text-white">  شنبه تا چهارشنبه ساعت ۹ تا ۱۸  </span>
          </div>

        </div>

      </section>
    </div>
  );
};

export default Contact;




{/* <Select value={formData.category} onChange={changeFormDataHandler} name="category" className="w-full text-xs text-gray-700" options={options} placeholder="......." /> */ }