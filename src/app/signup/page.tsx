<<<<<<< HEAD
"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function SignupPage() {
  const router=useRouter()  
  const [user , setUser] = React.useState({
        username:"",
        email:"",
        password:""
    })
    const [avatar,setAvatar]=React.useState(null)
    const [disableButton , setButtondisable] = React.useState(false)
    const [loading , setLoading] = React.useState(false)
    // const handleSubmit = (evt:any)=>{
    //   evt.preventDefault()
    //   console.log(user)
    //   console.log(avatar)
    // }
    const OnSignup=async()=>{
     try {
      setLoading(true)
      const response = await axios.post("/api/users/signup",user)
      console.log(response.data)
      toast.success("Signed up successfully")
      router.push("/login")
     } catch (error) {
      toast.error("Signup Failed")
     }
     finally{
      setLoading(false)
     }
    }
    useEffect(()=>{
     if(user.username.length>0 && user.email.length>0 && user.password.length>0){
      setButtondisable(false)
     }
     else{
      setButtondisable(true)
     }
    },[user])
  return (
    <div>
      {loading?<h1>..add.loading..component</h1>:
      <><h1 className="text-5xl font-bold text-center cursor-default dark:text-gray-300 text-gray-900 m-5">Signup</h1><div className="flex justify-center items-center">
          <section className="rounded-md p-2 bg-white">
            <div className="flex items-center justify-center my-3">
              <div className="xl:mx-auto shadow-md p-4 xl:w-full xl:max-w-sm 2xl:max-w-md">
                <div className="mb-2"></div>
                <h2 className="text-2xl font-bold leading-tight">
                  Sign up to create account
                </h2>
                <Link href={"/login"} className="mt-2 text-base flex text-gray-900">
                  <p className="text-gray-600 mx-3 ">Already have an account?</p>Login
                </Link>
                <form className="mt-5" onSubmit={OnSignup}>
                  <div className="space-y-4">
                    <div>
                      <label className="text-base font-medium text-gray-900">
                        User Name
                      </label>
                      <div className="mt-2">
                        <input
                          placeholder="username"
                          type="text"
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                          name="user_name"
                          id="username"
                          value={user.username}
                          onChange={(evt) => {
                            setUser({
                              ...user // to ensure that other values are not changed
                              ,
                              username: evt.target.value
                            });
                          } } />
                      </div>
                    </div>
                    <div>
                      <label className="text-base font-medium text-gray-900">
                        Email address
                      </label>
                      <div className="mt-2">
                        <input
                          placeholder="Email"
                          type="email"
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                          name="email"
                          id="email"
                          value={user.email}
                          onChange={(evt) => {
                            setUser({
                              ...user // to ensure that other values are not changed
                              ,
                              email: evt.target.value
                            });
                          } } />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <label className="text-base font-medium text-gray-900">
                          Password
                        </label>
                      </div>
                      <div className="mt-2">
                        <input
                          placeholder="Password"
                          type="password"
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                          name="password"
                          id="password"
                          value={user.password}
                          onChange={(evt) => {
                            setUser({
                              ...user // to ensure that other values are not changed
                              ,
                              password: evt.target.value
                            });
                          } } />
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <label className="text-base font-medium text-gray-900">
                          Profile Picture
                        </label>
                      </div>
                      <div className="mt-2">
                        <input
                          className="file-input w-full max-w-xs"
                          type="file"
                          name="avatar"
                          onChange={(evt) => {
                            // setAvatar(evt.target.files[0]);
                          } } />
                      </div>
                    </div>
                    <div>
                      {disableButton == true ? <button
                        className="inline-flex w-full items-center justify-center rounded-md bg-gray-700 px-3.5 py-2.5 font-semibold leading-7 text-white"
                        disabled
                      >
                        Create Account
                      </button> : <button
                        className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                        type="submit"

                      >
                        Create Account
                      </button>}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div></>
      }
            </div>
  );
}
=======
"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function SignupPage() {
  const router=useRouter()  
  const [user , setUser] = React.useState({
        username:"",
        email:"",
        password:""
    })
    const [avatar,setAvatar]=React.useState(null)
    const [disableButton , setButtondisable] = React.useState(false)
    const [loading , setLoading] = React.useState(false)
    // const handleSubmit = (evt:any)=>{
    //   evt.preventDefault()
    //   console.log(user)
    //   console.log(avatar)
    // }
    const OnSignup=async()=>{
     try {
      setLoading(true)
      const response = await axios.post("/api/users/signup",user)
      console.log(response.data)
      toast.success("Signed up successfully")
      router.push("/login")
     } catch (error) {
      toast.error("Signup Failed")
     }
     finally{
      setLoading(false)
     }
    }
    useEffect(()=>{
     if(user.username.length>0 && user.email.length>0 && user.password.length>0){
      setButtondisable(false)
     }
     else{
      setButtondisable(true)
     }
    },[user])
  return (
    <div>
      {loading?<h1>..add.loading..component</h1>:
      <><h1 className="text-5xl font-bold text-center cursor-default dark:text-gray-300 text-gray-900 m-5">Signup</h1><div className="flex justify-center items-center">
          <section className="rounded-md p-2 bg-white">
            <div className="flex items-center justify-center my-3">
              <div className="xl:mx-auto shadow-md p-4 xl:w-full xl:max-w-sm 2xl:max-w-md">
                <div className="mb-2"></div>
                <h2 className="text-2xl font-bold leading-tight">
                  Sign up to create account
                </h2>
                <Link href={"/login"} className="mt-2 text-base flex text-gray-900">
                  <p className="text-gray-600 mx-3 ">Already have an account?</p>Login
                </Link>
                <form className="mt-5" onSubmit={OnSignup}>
                  <div className="space-y-4">
                    <div>
                      <label className="text-base font-medium text-gray-900">
                        User Name
                      </label>
                      <div className="mt-2">
                        <input
                          placeholder="username"
                          type="text"
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                          name="user_name"
                          id="username"
                          value={user.username}
                          onChange={(evt) => {
                            setUser({
                              ...user // to ensure that other values are not changed
                              ,
                              username: evt.target.value
                            });
                          } } />
                      </div>
                    </div>
                    <div>
                      <label className="text-base font-medium text-gray-900">
                        Email address
                      </label>
                      <div className="mt-2">
                        <input
                          placeholder="Email"
                          type="email"
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                          name="email"
                          id="email"
                          value={user.email}
                          onChange={(evt) => {
                            setUser({
                              ...user // to ensure that other values are not changed
                              ,
                              email: evt.target.value
                            });
                          } } />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <label className="text-base font-medium text-gray-900">
                          Password
                        </label>
                      </div>
                      <div className="mt-2">
                        <input
                          placeholder="Password"
                          type="password"
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                          name="password"
                          id="password"
                          value={user.password}
                          onChange={(evt) => {
                            setUser({
                              ...user // to ensure that other values are not changed
                              ,
                              password: evt.target.value
                            });
                          } } />
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <label className="text-base font-medium text-gray-900">
                          Profile Picture
                        </label>
                      </div>
                      <div className="mt-2">
                        <input
                          className="file-input w-full max-w-xs"
                          type="file"
                          name="avatar"
                          onChange={(evt) => {
                            // setAvatar(evt.target.files[0]);
                          } } />
                      </div>
                    </div>
                    <div>
                      {disableButton == true ? <button
                        className="inline-flex w-full items-center justify-center rounded-md bg-gray-700 px-3.5 py-2.5 font-semibold leading-7 text-white"
                        disabled
                      >
                        Create Account
                      </button> : <button
                        className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                        type="submit"

                      >
                        Create Account
                      </button>}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div></>
      }
            </div>
  );
}
>>>>>>> bccb9a0efa33673745379d2cccc70d1a1fe9c232
