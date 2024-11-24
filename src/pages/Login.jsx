import TextInput from "../components/TextInput";
import CustomButton from "../components/CustomButton";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const nav = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onblur" });

  const Submit = async (data) => {
    //   try {
    //     const res = await axios.post("http://localhost:3005/login", data);

    //     if (res.status === 200) {
    //       toast.success(res.data.message);
    //       nav("/");
    //     }
    //   } catch (error) {
    //     if (error.response) {
    //       const { status, data } = error.response;

    //       if (status === 404) {
    //         toast.error(data);
    //       } else if (status === 400) {
    //         toast.error(data);
    //       } else {
    //         toast.error("An unexpected error occurred!");
    //       }
    //     } else {
    //       toast.error("Network error or server is unreachable!");
    //     }
    //   }
    nav("/");
  };

  return (
    <div className=" w-full h-[100vh] flex items-center justify-center p-6 ">
      <div className="w-full md:w-[50%] h-fit lg:h-full 2xl:h-5/6 py-8 lg:py-0 flex bg-gradient-to-r from-[#F2F6FF] to-[#DCECFF] rounded-sm overflow-hidden shadow-2xl">
        <div className="w-full lg:w-[90%] mx-auto h-full p-10 2xl:px-20 flex flex-col justify-center ">
          <p className="text-ascent-1 text-2xl font-semibold">
            Log in to your account
          </p>
          <span className="text-lg mt-2 text-ascent-2">Welcome back</span>

          <form
            className="py-4 flex flex-col gap-5"
            onSubmit={handleSubmit(Submit)}
          >
            <TextInput
              name="email"
              placeholder="email@example.com"
              label="Email Address"
              type="email"
              register={register("email", {
                required: "Email Address is required",
              })}
              styles="w-full rounded-lg"
              labelStyle="ml-2 "
              error={errors.email ? errors.email?.message : ""}
            />

            <TextInput
              name="password"
              label="Password"
              placeholder="Password"
              type="password"
              styles="w-full rounded-lg"
              labelStyle="ml-2"
              register={register("password", {
                required: "Password is required!",
              })}
              error={errors.password ? errors.password?.message : ""}
            />

            <Link
              to="/reset-password"
              className="text-xm text-right text-blue font-semibold m-2"
            >
              Forgot Password ?
            </Link>

            <CustomButton
              type="submit"
              containerStyles={`inline-flex justify-center rounded-md  px-8 py-3 text-sm font-medium text-white outline-none  bg-sky-700`}
              title="Login"
            />
          </form>

          <p className="text-ascent-2 text-base text-center">
            Don't have an account?
            <Link
              to="/signup"
              className="text-[#065ad8] font-semibold ml-2 cursor-pointer"
            >
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
