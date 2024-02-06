import React from 'react'
import Input from "../../Input"
import Button from "../../Button"
function SignUp() {
  return (
    <div className="flex mx-auto justify-center ml-24">
      {/* Left Container */}
      <div className="w-auto p-4 my-auto">
        <h2 className="text-[40px] font-bold mb-2">Welcome to .Dot</h2>
        <h2 className="text-3xl font-bold mb-10">Join us to connect</h2>
        <Input label = "Name" placeholder = "Enter your name"/>
        <Input label = "Email" placeholder = "Enter your email" type = "email"  />
        <Input label = "Password" placeholder = "Enter your password" type = "password" />
        <Button title="Signup" className='mt-2 bg-green-500 text-white px-2 py-2'/>
        <h3 className='mt-2'>Already have an account? <span><button className='text-green-500 font-semibold'>Login</button></span></h3>
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
  )
}

export default SignUp