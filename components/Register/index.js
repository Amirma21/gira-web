import FormsLayout from "../common/FormsLayout";
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
const initialValues = {
  email: "",
  password: "",
  name: "",
  phoneNumber: "",
  passwordConfirm: "",
};

const validationSchema = Yup.object({
  name: Yup.string("نام کاربری معتبر وارد کنید")
    .required("نام کاربری را وارد کنید")
    .min(3, "حداقل سه حرف"),

  password: Yup.string(" ")
    .required("رمز عبور را وارد کنید")
    .min(8, "حداقل 8 کارکتر")
    .max(20),

  email: Yup.string()
    .email("ایمیل معتبر وارد کنید ")
    .required("ایمل را وارد کنید"),

  phoneNumber: Yup.string()
    .required("شماره تماس را وارد کنید")
    .matches(/^[0-9]{11}$/, "شماره تماس معتبر وارد کنید")
    .nullable(),

  passwordConfirm: Yup.string()
    .required("تکرار رمز عبور را وارد کنید ")
    .oneOf([Yup.ref("password"), null], "رمز عبور باید مطابق باشد"),
});

const Register = () => {
  const submitHandler = () => {};

  const formik = useFormik({
    initialValues,
    onSubmit: submitHandler,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <>
      <FormsLayout title={"ثبت نام در سایت"}>
        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col w-full  px-4">
            <div className=" w-full md:flex  md:justify-between md:my-2">
              <div className="flex flex-col md:ml-1 my-2 md:w-1/2">
                {" "}
                <input
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  type="text"
                  name="name"
                  className=" border text-xs rounded-lg py-3 px-2 outline-purple-800 "
                  placeholder="نام کاربری"
                />
                {formik.errors.name && formik.touched.name && (
                  <div className=" text-red-500 text-xs  my-1">
                    {formik.errors.name}
                  </div>
                )}
              </div>
              <div className="flex flex-col md:mr-1 my-2 md:w-6/12">
                {" "}
                <input
                  onBlur={formik.handleBlur}
                  value={formik.values.phoneNumber}
                  onChange={formik.handleChange}
                  type="tell"
                  name="phoneNumber"
                  className=" border text-xs rounded-lg py-3 px-2 outline-purple-800 "
                  placeholder="تلفن"
                />
                {formik.errors.phoneNumber && formik.touched.phoneNumber && (
                  <div className=" text-red-500 text-xs  my-1">
                    {formik.errors.phoneNumber}
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-col w-full my-2">
              <input
                onBlur={formik.handleBlur}
                value={formik.values.email}
                onChange={formik.handleChange}
                type="email"
                name="email"
                className="py-3 px-2 border text-xs rounded-lg outline-purple-800 "
                placeholder="ایمیل"
              />
              {formik.errors.email && formik.touched.email && (
                <div className=" text-red-500 text-xs  my-1">
                  {formik.errors.email}
                </div>
              )}
            </div>
            <div className=" w-full md:flex  md:justify-between md:my-2">
              <div className="flex flex-col md:ml-1 md:w-1/2">
                {" "}
                <input
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  type="password"
                  name="password"
                  className=" border text-xs rounded-lg py-3 px-2 outline-purple-800 "
                  placeholder="رمز عبور"
                />
                {formik.errors.password && formik.touched.password && (
                  <div className=" text-red-500 text-xs  my-1">
                    {formik.errors.password}
                  </div>
                )}
              </div>
              <div className="flex flex-col md:mr-1 md:w-6/12">
                {" "}
                <input
                  onBlur={formik.handleBlur}
                  value={formik.values.passwordConfirm}
                  onChange={formik.handleChange}
                  type="tell"
                  name="passwordConfirm"
                  className=" border text-xs rounded-lg py-3 px-2 outline-purple-800 "
                  placeholder="تکرار رمزعبور"
                />
                {formik.errors.passwordConfirm &&
                  formik.touched.passwordConfirm && (
                    <div className=" text-red-500 text-xs  my-1">
                      {formik.errors.passwordConfirm}
                    </div>
                  )}
              </div>
            </div>
          <button
            disabled={!formik.isValid}
            className={`w-full py-1 px-2  rounded-lg my-4 text-white ${
              formik.isValid
                ? "gradient "
                : "bg-purple-500 cursor-not-allowed"
            }`}
          >
            ثبت نام
          </button>
        <div className="mt-4 mb-8"><Link href={"/login"}><h2 className="text-sm text-blue-500 cursor-pointer hover:font-bold transition-all ease-out"> از قبل حساب کاربری ساخته اید؟ </h2></Link></div>
          </div>
        </form>
      </FormsLayout>
    </>
  );
};

export default Register;
