const Header = () => {
  return (
    <>
      <section className="flex-col h-5/6 md:h-full md:flex-row md:justify-between flex mx-auto mt-4  ">
        <div className="h-[15rem]  bg-local sm:h-120 bg-no-repeat bg-cover w-[22rem] sm:w-[25rem] sm:h-[20rem] md:w-[45rem] mx-auto md:mx-0 md:h-[30rem] banner px-2"></div>
        <div className=" h-auto md:h-[30rem] flex flex-col md:w-[45rem] sm:w-full mx-auto justify-center items-center mt-16 md:my-0">
          <h1 className="font-bold text text-lg md:mb-8 mb-4">
            مرجـعی راجع به دنیای علـــم ، تکـنولوژی و مهندسـی{" "}
          </h1>
          <h4 className="sm:text-lg text-sm md:text:xl my-4 md:my-8 ">
            با کمترینــــ هزینـه به صورت حرفه ای یاد بگـیــــر
          </h4>
          <div className="flex" id="buttonGroup">
            <button className="gradient p-2 rounded-lg font-sm shadow-2xl mx-2 hover:scale-110 duration-300 transition ease-in-out delay-150">
           رفتـن به فروشگاه
            </button>
            <button className="gradient p-2 rounded-lg shadow-2xl shadow-purple-500/50 font-sm mx-2 hover:scale-110 duration-300 transition ease-in-out delay-150">
            صفحه مقالات
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;

