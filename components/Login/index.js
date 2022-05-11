import FormsLayout from "../common/FormsLayout";
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/router";
import { useAuthContext } from "../../context/AuthContext";

const initialValues = { email: "", password: "" };

const validationSchema = Yup.object({
  password: Yup.string(" ")
    .required("رمز عبور را وارد کنید")
    .min(8, " حداقل 8 حرف")
    .max(20),
  email: Yup.string()
    .email("ایمیل معتبر وارد کنید")
    .required("ایمیل را وارد کنید"),
});

const Login = () => {
  const { state, setState } = useAuthContext();

  const router = useRouter();

  const submitHandler = async (value) => {
    try {
      const { data } = await axios.post("/api/auth/login", value);
      console.log(data);
      router.push("/");
      toast.success("با موفقیت وارد شدید")
    } catch (err) {
      const errorMessage = err.response.data.error;
      toast.error(errorMessage);
    }
    try {
      const { data } = await axios.get("/api/auth/user");
      setState({ token: data.token });
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit: submitHandler,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <>
      <FormsLayout title={"ورود به سایت"}>
        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col w-full  px-4">
            <div className="flex flex-col w-full my-2">
              <input
                onBlur={formik.handleBlur}
                value={formik.values.email}
                onChange={formik.handleChange}
                type="email"
                name="email"
                className="py-3 px-2 border text-sm rounded-lg outline-purple-800 "
                placeholder="ایمیل"
              />
              {formik.errors.email && formik.touched.email && (
                <div className=" text-red-500 text-xs  my-1">
                  {formik.errors.email}
                </div>
              )}
            </div>

            <div className="flex flex-col w-full my-2">
              <input
                onBlur={formik.handleBlur}
                value={formik.values.password}
                onChange={formik.handleChange}
                type="password"
                name="password"
                className="py-3 px-2 border text-sm rounded-lg outline-purple-800 "
                placeholder="رمز عبور"
              />
              {formik.errors.password && formik.touched.password && (
                <div className=" text-red-500 text-xs  my-1">
                  {formik.errors.password}
                </div>
              )}
            </div>
            <button
              disabled={!formik.isValid}
              className={`w-full p-1 rounded-lg my-4 text-white ${formik.isValid
                ? "gradient  "
                : "bg-purple-500 cursor-not-allowed"
                }`}
            >
              ورود
            </button>

            <div className="mt-4 mb-8">
              <Link href={"/register"}>
                <h2 className="text-sm text-blue-500 cursor-pointer hover:font-bold transition-all ease-out">
                  ایجاد حساب کاربری ؟
                </h2>
              </Link>
            </div>
          </div>
        </form>

      </FormsLayout>
    </>
  );
};

export default Login;
