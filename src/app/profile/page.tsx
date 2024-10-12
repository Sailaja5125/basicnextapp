"use client"
import React, { useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
export default function Profile() {
  const router = useRouter()
  const logout = async()=>{
    try {
      axios.get('/api/users/logout')
      toast.success("Logout successfully")
      setTimeout(() => {
        router.push('/login')
      }, 3000);
    } catch (error:any) {
      console.log(error.message)
      toast.error(error.message)
    }
  }
  const [user , setuser] = useState({
    id:"",
    username:"",
    email:""
  })
  const Userdetails = async()=>{
    try {
      const response = await axios.get('/api/users/details')
      
      setuser({id:response.data.getUser._id,username:response.data.getUser.username,email:response.data.getUser.email})      
      console.log(user)
    } catch (error:any) {
      console.log(error.message)
    }
  }
useEffect(()=>{
Userdetails()
},[])
  return (
    <div>
      <div className="flex min-h-screen items-center justify-center">
        <div className="w-64 rounded-lg border-2 border-indigo-500 bg-transparent p-4 text-center shadow-lg dark:bg-gray-800">
          <figure className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-500 dark:bg-indigo-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              fill="currentColor"
              className="bi bi-person-fill text-white dark:text-indigo-300"
              viewBox="0 0 16 16"
            >
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
            </svg>
            <figcaption className="sr-only"></figcaption>
          </figure>
          <h2 className="mt-4 text-xl font-bold text-indigo-600 dark:text-indigo-400">
            {user.username}
          </h2>
          <p className="mb-4 text-gray-600 dark:text-gray-300">{user.email}</p>
          <div className="flex items-center justify-center">
            <button
              
              className="rounded-full bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 dark:bg-indigo-400 dark:hover:bg-indigo-500"
              onClick={logout}
            >
              Logout
            </button>
            <Link
              href={`/profile/${user.id}`}
              className="ml-4 rounded-full bg-gray-300 px-4 py-2 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600"
            >
              {user.username}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
