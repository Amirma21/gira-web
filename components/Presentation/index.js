import { useState } from "react"


const Present = () => {

  const [hover, setHover] = useState(null);

  const information = [{ id: 0, title: "بهترین مقالات", description: "در گیراوب جدیدترین و به روزترین مقالات روز دنیا را در زمینه های برنامه نویسیو علوم مهندسی را مطالعه کنید" }, { id: 1, title: "دوره های آموزشی", description: "گیراوب متشکل از استادید مختلف در زمینه های مختلف میباشد که با کمترین  هزینه میتوانید آموزش ببینید" }, { id: 2, title: "مسابقه", description: "در گیراوب میتوانید دانش خود را در زمینه های مختلف محک بزنید و جایزه ببرید" }]


  const hoverHandler = (id) => {
    setHover(id)
  }


  return (
    <>
      <div className="justify-between items-center flex flex-wrap mx-auto mt-20 py-8 px-2 bg-gray-50">
        <div className="relative mx-auto" style={{ maxWidth: "630px" }}>
          <img
            className="w-full"
            src="https://s6.uupload.ir/files/laptop_17j1.png"
            alt="laptop"
          />
          <img
         className={`${hover===0 ? "top-[40%]" : "top-[46.8%]"} w-[22%] right-[8%] absolute animation-hover`}
            src="https://s6.uupload.ir/files/course_4wdh.png"
            alt="مقالات علمی"
          />
          <img
          className={`${hover===1 ? "top-[40%]" : "top-[46.8%]"} w-[25%] right-[36%] absolute animation-hover`}
            src="https://s6.uupload.ir/files/learn_w52.png"
            alt="دوره آموزشی"
          />
          <img
            className={`${hover===2 ? "top-[40%]" : "top-[46.8%]"} w-[26%] right-[67%] absolute animation-hover`}
            src="https://s6.uupload.ir/files/competition_5n5n.png"
            alt="مسابقه"
          />
        </div>


        <div className=" mx-auto w-100 md:mt-0 w-full md:w-[400px] flex-col ">
          {information.map((item) => {
            return <div key={item.id} className=" rounded-lg px-6 my-4 py-4 hover:bg-purple-300 cursor-pointer" onMouseLeave={() => setHover(null)} onMouseEnter={() => hoverHandler(item.id)}>
              <h2 className="font-bold text-lg mb-3">{item.title} </h2>
              <p className="text-sm text-gray-700">{item.description}</p>
            </div>
          })}
        </div>


      </div>
    </>
  );
};

export default Present;



