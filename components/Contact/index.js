import { HiClock, HiPhone, HiMail } from "react-icons/hi";
import { FaTelegram, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import React, { useEffect, useState } from 'react';
import { toast } from "react-toastify";
import { useAuthContext } from "../../context/AuthContext";
import axios from "axios";

const contactIcons = [
  { id: 0, icon: <FaGithub />, href: "https://github.com/Amirma21" },
  { id: 1, icon: <FaInstagram />, href: "https://www.instagram.com/amir__maleki21" },
  { id: 2, icon: <FaTelegram />, href: "https://telegram.me/amirma_21" },
  { id: 3, icon: <FaLinkedin />, href: "" }]

const selectOption = [
  { id: 0, value: "دوره های آموزشی" },
  { id: 1, value: "شرکت در آزمون ها" },
  { id: 2, value: "خرید و پرداخت" },
  { id: 3, value: "مشکل های سایت" },
  { id: 4, value: "سایر پرسش ها" }]



const Contact = () => {

  const { state } = useAuthContext()

  const [isAuth, setIsAuth] = useState(false)

  const [formData, setFormData] = useState({
    name: "", email: "", category: "", title: "", message: ""
  })

  useEffect(() => {
    { state ? setIsAuth(true) : setIsAuth(false) }
  }, [state])


  const submitHandler = async (event) => {
    event.preventDefault();
    const values = { ...formData, isUser: isAuth }

    if (!formData.name || !formData.email || !formData.category || !formData.title || !formData.message) {
      toast.error("لطفا تمام مقادیر را وارد نمایید")
    } else {
      try {
        const { data } = await axios.post("/api/contact", values);
        console.log(data);
        toast.success("پیام شما با موفقیت ارسال شد")
        setFormData({ name: "", email: "", category: "", title: "", message: "" })

      } catch (error) {
        console.log(error);
      }
    }
  }

  const changeFormDataHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }


  return (
    <div className="bg-gray-100 w-full h-[100vh] flex justify-center">

      <section className="w-full h-auto md:w-3/5 bg-white shadow-2xl mt-8 rounded-lg p-8 relative">

        <div className="md:w-[78%] w-full p-4">
          <p className="text-sm text-gray-700 mb-8">
            لطفاً ما را در جریان انتقادات و پیشنهادات خود و یا خطاهای موجود در سایت قرار
            دهید.
          </p>

          <form onSubmit={submitHandler} className="max-w-full">
            <div className={`${isAuth && "hidden"} lg:flex-row lg:justify-between w-full  flex flex-col`}>
              <div className="flex flex-col lg:w-[48%]">
                <label className="text-xs my-1"> نام</label>
                <input onChange={changeFormDataHandler} name="name" value={formData.name} type="text" className="border text-sm border-gray-300 outline-purple-500 rounded p-2" />
              </div>
              <div className="flex flex-col lg:mr-2 lg:w-[48%]">
                <label className="text-xs my-1"> ایمیل</label>
                <input onChange={changeFormDataHandler} name="email" value={formData.email} type="email" className="w-full border text-sm border-gray-300 outline-purple-500 rounded p-2" />
              </div>
            </div>
            <div className="flex flex-col">

              <div className="flex flex-col my-2">
                <label className="text-xs my-1">دسته بندی</label>
                <select className="border border-gray-300 text-xs outline-purple-500 rounded p-2" placeholder="انتخاب کنید" value={formData.category} name="category" onChange={changeFormDataHandler}>
                  <option value="" hidden disabled>انتخاب کنید ..</option>
                  {selectOption.map((item) => {
                    return <option key={item.id} value={item.value}>{item.value}</option>
                  })}
                </select>
              </div>



              <div className="flex flex-col my-2">
                <label className="text-xs my-1">عنوان</label>
                <input onChange={changeFormDataHandler} name="title" value={formData.title} type="text" className="w-full text-sm border border-gray-300 outline-purple-500 rounded p-2" />
              </div>

              <div className="flex flex-col my-2">
                <label className="text-xs my-1">پیام</label>
                <textarea onChange={changeFormDataHandler} name="message" className="w-full text-xs h-32 border border-gray-300 outline-purple-500 rounded p-2 " />
              </div>

            </div>
            <button type="submit" className="bg-purple-500 px-4 py-2 rounded text-sm text-white">ارسال</button>
          </form>

        </div>

        <div className="bg-purple-500 h-[30rem]  rounded-lg hidden md:block absolute w-[15rem] top-16 lg:left-[-4rem] left-[-7rem] py-8 px-3 shadow-2xl">
          <h2 className="text-white">ارتباط با ما</h2>
          <div className="flex text-white my-4">
            <span className="text-lg"><HiPhone /></span> <span className="ltr text-sm mx-1 text-white">۰۹۱۹ ۱۸۳ ۱۶۳۵</span>
          </div>

          <div className="flex text-white my-4">
            <span className="text-lg"><HiMail /></span> <span className="mx-1 text-white">giraweb@gmil.com</span>
          </div>

          <div className="flex flex-col text-white my-4">
            <span className="text-lg flex"> <HiClock /> <span className="text-white mx-2 text-sm">ساعت کاری</span></span>  <span className="my-4 text-sm text-white">  شنبه تا چهارشنبه ساعت ۹ تا ۱۸  </span>
          </div>

          <div className="flex justify-center">
            {contactIcons.map((item) => {
              return <a target="_blank" className="mx-2 text-xl text-slate-200 hover:text-white" key={item.id} href={item.href}> {item.icon}</a>
            })}
          </div>

        </div>

      </section>
    </div>
  );
};

export default Contact;



