import Link from "next/link";
import { useAuthContext } from "../../context/AuthContext";

const Statistics = () => {
    const { state } = useAuthContext()

    const information = [{
        id: 0, number: "۱۵۰۰", title: "دانشجو",
        description: "بیش از هزار دانشجو و فراگیر در زمینه های مختلف علمی در گیراوب در حال آموزش هستند"
    }, {
        id: 1, number: "۶۴", title: "استاد",
        description: "گیراوب تشکیل شده از استادید خبره در زمینه های مختلف میباشد"
    }, { id: 2, number: "۲۸۹۴", title: "مقالات علمی", description: "معتبرترین و به روز ترین مقالات علمی مختلف را در گیراوب بخوانید" }]


    return (<>

        <section className="md:flex md:items-center px-4 bg-gray-50 w-full h-[500px] mx-auto" style={{ backgroundImage: "url('https://s6.uupload.ir/files/stat.1-64f943eee077_ecv4.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
            {information.map((item) => {
                return <div key={item.id} className="flex-col m-2 bg-white shadow-xl px-2 py-4 w-full rounded-2xl md:w-auto">
                    <div className="text-5xl font-bold text-center text-purple-600">{item.number}</div>
                    <div className="text-center my-2"><mark className="bg-cyan-200 px-1 rounded-sm">{item.title}</mark></div>
                    <p className="text-center font-medium">{item.description}</p>
                </div>
            })}

        </section>
        <section className="bg-gray-50 h-auto w-full pb-4" >
            <div className="w-full md:w-5/6  md:p-8 rounded-lg bg-white shadow-lg mx-auto" style={{ backgroundImage: "url('https://s6.uupload.ir/files/signup-raychat-bg_rbon.png') ", backgroundRepeat: "repeat", backgroundPosition: "center center" }}>
                <h2 className="mx-auto  text-center font-bold text-lg mb-3">همین حالا یادگیری خود را شروع کنید !</h2>
                <p className="mx-auto text-sm text-center my-6 "> سولات ، ابهامات و همچنین نظرات خود را با ما در میان بگذارید.</p>
                <div className="flex justify-center">
                    <Link href={"/contact"}><button className="border border-purple-800 mx-2 py-2 px-4 bg-purple-50 text-sm  rounded-lg">تماس با ما </button></Link>
                    {!state && <Link href={"/register"}><button className="border mx-2 py-2 px-4 bg-purple-700 text-white text-sm rounded-lg">عضویت</button></Link>}
                </div>
            </div>
        </section>

    </>);
}

export default Statistics;



