import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Signin = () => {

   let [email, setemail] = useState(false);
   let [password, setpassword] = useState(false);

   return (
      <div className="flex flex-col text-center p-5 mx-[30%] my-[10%] shadow-2xl bg-blue-200 rounded-lg">
         <div className="m-4">
            <h1 className="text-black font-semibold text-3xl">SignIn</h1>
         </div>
         <div className="flex flex-col">
            <div className="rounded-3xl border border-gray-200 flex shadow-xl flex-row justify-between bg-red-200 m-2 p-1 align-middle text-center">
               <h1 className="px-2 font-semibold py-1 border-gray-400">Email</h1>
               <h1 className="relative left-[70%] cursor-pointer" onClick={() => {
                  setemail(!email);
               }}>
                  {email ? <button>🔓</button> : <button>🔒</button>}
               </h1>
               <input className="w-[60%] rounded-3xl text-xs px-2 py-1" type={email ? "email" : "password"} placeholder="Enter Email"/>
            </div>
            <div className="rounded-3xl border border-gray-200 flex shadow-xl flex-row justify-between bg-red-200 m-2 p-1 align-middle text-center">
               <h1 className="px-2 font-semibold py-1 border-gray-400">Password</h1>
               <h1 className="relative left-[67%] cursor-pointer" onClick={() => {
                  setpassword(!password);
               }}>
                  {password ? <button>🔓</button> : <button>🔒</button>}
               </h1>
               <input className="w-[60%] rounded-3xl text-xs px-2 py-1" type={password ? "text" : "password"} placeholder="Enter password"/>
            </div>
         </div>    
         <div className="mt-4 mb-2">
            <button className="px-3 py-1 bg-white rounded-xl font-semibold hover:shadow-2xl hover:bg-red-100 w-[40%]"><Link to={'/signin/app'}>SignIn</Link></button>
         </div>
      </div>
   )
}

export default Signin;