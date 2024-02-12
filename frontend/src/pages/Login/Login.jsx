import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import {setUser} from "../../store/userSlice"

function Login() {
  const navigate = useNavigate()
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch()

  const login = async (data) => {
    setError("");
    try {
      console.log("inside login method")
      console.log("Email : ", data.email)
      console.log("Password : ", data.password)
      const response = await fetch("http://localhost:8000/api/v1/users/login", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      console.log("Response : ", response)
      console.log("got something !!")
      if (!response.ok) {
        console.log("failed to login");
        throw new Error("Failed to login");
      }

      const responseData = await response.json();
      const userData = responseData.data.user;
      console.log("User : ", userData)
      navigate("/home");
      dispatch(setUser(userData));
      // return data;
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex mx-auto justify-center ml-24">
      {/* Left Container */}
      <div className="w-auto p-4 my-auto">
        <h2 className="text-[40px] font-bold mb-2">Welcome Back to .Dot</h2>
        <h2 className="text-3xl font-bold mb-10">Login to continue</h2>
        <form onSubmit={handleSubmit(login)}>
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
            label="Password: "
            type="password"
            placeholder="Enter your password"
            {...register("password", {
              required: true,
            })}
          />
          <Button
          type = "submit"
            title="Login"
            className="mt-2 bg-green-500 text-white px-2 py-2"
          />
        </form>
        <h3 className="mt-2">
          Didn't have an account?{" "}
          <span>
            <Link to="/signup">
            <button className="text-green-500 font-semibold">Join Us</button>
            </Link>
          </span>
        </h3>
      </div>

      {/* Right Container */}
      <div className="w-1/2 p-4">
        <img
          src="src/assets/Images/Collab-rafiki.png"
          alt="Placeholder Image"
          className="w-[40vw] h-auto"
        />
      </div>
    </div>
  );
}

export default Login;
