import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import InputElement from "./Inputelement";

const SignUp = () => {
   let [email, setemail] = useState(false);
   let [password, setpassword] = useState(false);
   let [confirm, seteconfirm] = useState(false);
   
   return (
      <div className="flex flex-col text-center p-5 mx-[30%] my-[10%] shadow-2xl bg-blue-200 rounded-lg">
         <div className="m-4">
            <h1 className="text-black font-semibold text-3xl">SignUp</h1>
         </div>
         <div className="flex flex-col">
            <div className="rounded-3xl border border-gray-200 flex shadow-xl flex-row justify-between bg-red-200 m-2 p-1 align-middle text-center">
               <h1 className="px-2 font-semibold py-1 border-gray-400">Email</h1>
               <h1 className="relative left-[70%] cursor-pointer" onClick={() => {
                  setemail(!email);
               }}>
                  {email ? <button>🔓</button> : <button>🔒</button>}
               </h1>
               <input className="w-[60%] rounded-3xl text-xs px-2 py-1" type={email ? "text" : "password"} placeholder="Enter Email"/>
            </div>
            <div className="rounded-3xl border border-gray-200 flex shadow-xl flex-row justify-between bg-red-200 m-2 p-1 align-middle text-center">
               <h1 className="px-2 font-semibold py-1 border-gray-400">Password</h1>
               <h1 className="relative left-[67%] cursor-pointer" onClick={() => {
                  setpassword(!password);
               }}>
                  {password ? <button>🔓</button> : <button>🔒</button>}
               </h1>
               <input className="w-[60%] rounded-3xl text-xs px-2 py-1" type={password ? "email" : "password"} placeholder="Enter passwprd"/>
            </div>
            <div className="rounded-3xl border border-gray-200 flex shadow-xl flex-row justify-between bg-red-200 m-2 p-1 align-middle text-center">
               <h1 className="px-2 font-semibold py-1 border-gray-400">Confirm</h1>
               <h1 className="relative left-[68%] cursor-pointer" onClick={() => {
                  seteconfirm(!confirm);
               }}>
                  {confirm ? <button>🔓</button> : <button>🔒</button>}
               </h1>
               <input className="w-[60%] rounded-3xl text-xs px-2 py-1" type={confirm ? "text" : "password"} placeholder="Confirm password"/>
            </div>
         </div>    
         <div className="mt-4 mb-2 mx-3 flex flex-row justify-between">
            <button className="px-2 w-[20%] text-sm border border-blue-300 bg-white rounded-xl font-semibold hover:shadow-2xl hover:bg-red-100"><Link to={'/app'}>signup</Link></button>
            <div>
               <h1 className="text-xs m-1 font-semibold">Already have an account, <Link className="text-black px-2 rounded-2xl bg-white py-1 font-semibold" to = {'/signin'}>signin</Link></h1>
            </div>
         </div>
      </div>
   )
}

export default SignUp;