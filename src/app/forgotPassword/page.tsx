"use client";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
export default function ForgotPassword() {
    const [email ,setEmail] = useState("")
    const SendMail = async(event:any)=>{
      try {
        event.preventDefault()
          console.log(email)
          const response = await axios.post('/api/users/forgotPassword',{email})
          console.log(response.data)
           toast.success("email sent")
        } catch (error:any) {
          toast.error("Could'nt send email")
          console.log(error)
        }
    }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="max-w-md bg-white p-6 rounded-lg shadow-md">
        <div className="text-center font-semibold text-xl mb-4">
          Forgot Password
        </div>

        <form className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="py-2 px-3 border rounded-md w-full focus:outline-none focus:border-blue-500"
              required
              value={email}
              onChange={(event)=>{setEmail(event.target.value);}}
            />
          </div>

          <button
            type="submit"
            className="bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition duration-300"
            onClick={SendMail}
          >
            Send Email
          </button>
        </form>
        <p className="text-center mt-4">
          Don't have an account?
          <a href="/signup" className="text-blue-500 hover:underline">
            Sign up now
          </a>
        </p>
      </div>
    </div>
  );
}
