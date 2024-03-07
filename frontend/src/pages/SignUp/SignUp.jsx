import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import {clearUser, setUser} from "../../store/userSlice"
import authServices from "../../services/userServices";
function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const create = (data) => {
    authServices.registerUser(data)
    .then((userData)=>{
      if(userData){
        dispatch(setUser(userData));
        navigate("/home");
      }else{
        dispatch(clearUser());
      }
    })
  };
  return (
    <div className="flex mx-auto justify-center ml-24">
      {/* Left Container */}
      <div className="w-auto p-4 my-auto">
        <h2 className="text-[40px] font-bold mb-2">Welcome to .Dot</h2>
        <h2 className="text-3xl font-bold mb-10">Join us to connect</h2>
        <form onSubmit={handleSubmit(create)}>
          <Input
            label="Full Name: "
            placeholder="Enter your full name"
            {...register("fullname", {
              required: true,
            })}
          />
          <Input
            label="Email: "
            placeholder="Enter your email"
            type="email"
            {...register("email", {
              required: true,
              validate: {
                matchPatern: (value) =>
                  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                  "Email address must be a valid address",
              },
            })}
          />
          <Input
            label="Username: "
            placeholder="Enter your username"
            type="text"
            {...register("username", {
              required: true,
            })}
          />
          <Input
            label="Password: "
            type="password"
            placeholder="Enter your password"
            {...register("password", {
              required: true,
            })}
          />
          <Button
            type="submit"
            title="Signup"
            className="mt-2 bg-green-500 text-white px-2 py-2"
          />
        </form>
        <h3 className="mt-2">
          Already have an account?{" "}
          <span>
            <Link to="/login">
            <button className="text-green-500 font-semibold">Login</button>
            </Link>
          </span>
        </h3>
      </div>

      {/* Right Container */}
      <div className="w-1/2 p-4">
        <img
          src="src/assets/Images/team-work.jpg"
          alt="Placeholder Image"
          className="w-[40vw] h-auto"
        />
      </div>
    </div>
  );
}

export default SignUp;
