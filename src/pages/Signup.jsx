import React, { useState } from "react";
import TextInput from "../components/TextInput";
import CustomButton from "../components/CustomButton";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useUserStore from "../store/useUserStore";

const Signup = () => {
  const { login } = useUserStore();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({ mode: "onBlur" });
  const [picture, setPicture] = useState(null); // State for storing selected image
  const nav = useNavigate();

  const handleSelect = (e) => {
    setPicture(e.target.files[0]); // Save selected file to state
  };

  const submit = async (data) => {
    // Access the login function from the user store

    try {
      if (!picture) {
        toast.error("Please upload an image!");
        return;
      }

      const formData = new FormData();
      formData.append("userName", data.userName);
      formData.append("fullName", data.fullName);
      formData.append("email", data.email);
      formData.append("password", data.password);
      formData.append("avatar", picture); // Append image to FormData

      const res = await axios.post(
        "http://192.168.1.191:8000/api/v1/users/register",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(res);

      if (res.status === 201) {
        // Extract required fields from API response
        const { fullName, userName, email, avatar } = res.data.data;

        // Update the user store with the mapped fields
        login({
          fullName,
          userName,
          email,
          avatar,
        });

        toast.success(res.data.message);
        nav("/"); // Redirect to the home page
      }
    } catch (error) {
      console.error("Signup error:", error);
      toast.error("Sign-up failed!");
    }
  };

  return (
    <div className="bg-bgColor w-full h-[100vh] flex items-center justify-center p-6">
      <div className="w-full md:w-[50%] h-fit lg:h-full 2xl:h-5/6 py-8 lg:py-0 flex bg-gradient-to-r from-[#F2F6FF] to-[#DCECFF] rounded-sm overflow-hidden shadow-xl">
        <div className="w-full lg:w-[90%] mx-auto h-full p-10 2xl:px-20 flex flex-col justify-center">
          <p className="text-ascent-1 text-lg font-semibold">
            Create your account
          </p>

          <form
            className="py-8 flex flex-col gap-5"
            onSubmit={handleSubmit(submit)}
          >
            <div className="w-full flex flex-col lg:flex-row gap-1 md:gap-2">
              <TextInput
                name="userName"
                label="User Name"
                placeholder="User Name"
                type="text"
                styles="w-full"
                register={register("userName", {
                  required: "User Name is required!",
                })}
                error={errors.userName ? errors.userName?.message : ""}
              />

              <TextInput
                name="fullName"
                label="Full Name"
                placeholder="Full Name"
                type="text"
                styles="w-full"
                register={register("fullName", {
                  required: "Full Name is required",
                })}
                error={errors.fullName ? errors.fullName?.message : ""}
              />
            </div>
            <TextInput
              name="email"
              placeholder="email@example.com"
              label="Email Address"
              type="email"
              register={register("email", {
                required: "Email Address is required",
              })}
              styles="w-full"
              error={errors.email ? errors.email?.message : ""}
            />
            <div className="w-full flex flex-col lg:flex-row gap-1 md:gap-2">
              <TextInput
                name="password"
                label="Password"
                placeholder="Password"
                type="password"
                styles="w-full"
                register={register("password", {
                  required: "Password is required!",
                })}
                error={errors.password ? errors.password?.message : ""}
              />

              <TextInput
                label="Confirm Password"
                placeholder="Password"
                type="password"
                styles="w-full"
                register={register("cPassword", {
                  validate: (value) => {
                    const { password } = getValues();
                    if (password !== value) {
                      return "Passwords do not match";
                    }
                  },
                })}
                error={errors.cPassword ? errors.cPassword?.message : ""}
              />
            </div>

            <span>Upload Image</span>
            <label
              className="flex items-center gap-1 text-base text-ascent-2 hover:text-ascent-1 cursor-pointer my-4"
              htmlFor="imgUpload"
            >
              <input
                type="file"
                id="imgUpload"
                onChange={handleSelect}
                accept=".jpg, .png, .jpeg"
                className="hidden"
              />
              <span className="bg-blue-500 text-white px-4 py-2 rounded">
                Choose File
              </span>
            </label>

            {picture && (
              <p className="text-green-600 text-sm">
                {picture.name} ({(picture.size / 1024).toFixed(2)} KB)
              </p>
            )}

            <CustomButton
              type="submit"
              containerStyles="inline-flex justify-center rounded-md bg-sky-700 px-8 py-3 text-sm font-medium text-white outline-none"
              title="Create Account"
            />
          </form>

          <p className="text-ascent-2 text-base text-center">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-[#065ad8] font-semibold ml-2 cursor-pointer"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
