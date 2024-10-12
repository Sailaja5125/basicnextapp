"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function VerifyEmail() {
  const [token, setToken] = useState("");
  const [password , setPassword] = useState("")
  const [conformpass , setconformPass] = useState("")
  const verifyUser = async (event:any) => {
      try {
        event.preventDefault();
      console.log(password);
      console.log(conformpass);
      await axios.post("/api/users/updatePassword",{token , newPassword:conformpass});
      toast.success("Password changed successfully");
    } catch (error:any) {
      console.log(error.response.data);
      toast.error("Some error occurred");
    }
  };
  
  useEffect(() =>{
    const urlToken = window.location.search.split("=")[1]; //["token","dufughusgfuhshusgfg"]
    console.log(urlToken)
    setToken(urlToken);
  }, [token]);
 

  return (
    <>
      <section>
        <div className="bg-white relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-20 max-w-7xl">
          <div className="w-full max-w-md mx-auto md:max-w-sm md:px-0 md:w-96 sm:px-4">
            <div className="flex flex-col">
              <div>
                <h2 className="text-4xl text-black">Reset password</h2>
              </div>
            </div>
            <form >
              <div className="mt-4 space-y-6">
                <div className="col-span-full">
                  <label className="block mb-3 text-sm font-medium text-gray-600">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="******"
                    className="w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-full placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                    value={password}
                    onChange={(event)=>{setPassword(event.target.value)}}
                  />
                </div>
                <div className="col-span-full">
                  <label className="block mb-3 text-sm font-medium text-gray-600">
                    Confirm passord
                  </label>
                  <input
                    type="password"
                    placeholder="******"
                    className="w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-full placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                    value={conformpass}
                    onChange={(event)=>{setconformPass(event.target.value)}}
                  />
                </div>

                <div className="col-span-full">
                  <button
                    className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
                    onClick={verifyUser}
                    type="submit"
                  >
                    
                    Submit your request
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
