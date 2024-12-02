"use client";

import { Flash } from "iconsax-react";
import Link from "next/link";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const page = () => {
  const schema = yup.object({
    email: yup
      .string()
      .required("Required")
      .email("Enter a valid email address"),
    password: yup
      .string()
      .required("Required")
      .min(8, "Password should have a minimum of 8 characters"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="bg-black w-full h-screen flex justify-center items-center">
      <div className="bg-primary w-[90%] md:w-[50%] p-6 rounded-md">
        <div className="flex items-center justify-center gap-2">
          <p className="text-white text-xl font-semibold">Login to</p>
          <div className="flex items-center gap-2 bg-black p-3 px-5 rounded-lg w-fit">
            <Flash size="32" color="#FFF" variant="Bold" />
            <p className="text-white text-xl font-semibold">Polyglot</p>
          </div>
        </div>
        <div className="mt-5 ">
          <form className="flex flex-col items-center gap-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-1 w-[90%] md:w-[80%]">
              <label htmlFor="email" className="text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter a valid email"
                className="p-3 outline-none rounded-md text-white bg-black"
                {...(register("email"))}
              />
              <p className="text-red-500 text-sm">{ errors.email?.message }</p>
            </div>
            <div className="flex flex-col gap-1 w-[90%] md:w-[80%]">
              <label htmlFor="password" className="text-white">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter a password"
                className="p-3 outline-none rounded-md text-white bg-black"
                {...register("password")}
              />
              <p className="text-red-500 text-sm">{ errors.password?.message }</p>
            </div>
            <button
              type="submit"
              className="w-[90%] md:w-[80%] bg-secondary text-white font-semibold p-3 rounded-md"
            >
              Continue
            </button>
          </form>
        </div>
        <p className="mt-3 text-white">
          Don't have an account?{" "}
          <Link href="/register" className="text-secondary">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default page;
