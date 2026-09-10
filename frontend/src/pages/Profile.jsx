// import react from 'react'
// import { useSelector } from 'react-redux'
// import {IoIosArrowRoundBack} from 'react-icons/io'
// import { useNavigate } from 'react-router-dom'

// function Profile() {
//     let {userData}= useSelector(state=>state.user)
//     let navigate = useNavigate()
//     return(
//         <>
//         <div >
//             <img src="frontend/src/assets/dp.png" alt="Profile Image" />
//         </div>
//         <div onClick={()=>navigate("/")} className='cursor-pointer'>
//             <IoIosArrowRoundBack/>
//         </div>
//         <div>
//             <form>
//                 <input type="text" placeholder="Enter Your name" />
//                 <input type="text" readOnly value={userData?.name} />
//                 <input type="email" readOnly value={userData?.email} />
//                 <button type="submit">Save Profile</button>
//             </form>
            
//         </div>
//         </>
//     )
// }
import React from 'react';
import { ArrowLeft, User, Mail, AtSign, Camera } from 'lucide-react';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import dp from '../assets/dp.png';

function Profile() {
    let {userData} = useSelector(state => state.user)
    let navigate = useNavigate()

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-4 relative overflow-hidden">

            {/* Ambient Background Glow */}
            <div className="absolute top-1/4 -left-20 w-80 h-80 bg-indigo-600/30 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-600/30 rounded-full blur-3xl pointer-events-none" />

            {/* Main Profile Card */}
            <div className="w-full max-w-md bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 shadow-2xl z-10">

                {/* Back */}
                <div className="mb-6">
                    <button 
                        className="flex items-center gap-2 text-slate-400 hover:text-slate-200 transition"
                        onClick={() => navigate("/")}
                    >
                        <ArrowLeft className="w-5 h-5" />
                        <span className="text-sm">Back</span>
                    </button>
                </div>

                {/* Header */}
                <div className="text-center mb-8">

                    {/* Profile Image */}
                    <div className="relative inline-block">

                        <div className="w-28 h-28 rounded-full p-[2px] bg-gradient-to-tr from-indigo-500 to-purple-500 shadow-lg shadow-indigo-500/25">

                            <img
                                src={dp}
                                alt="Profile"
                                className="w-full h-full rounded-full object-cover bg-slate-950"
                            />

                        </div>

                        {/* Camera */}
                        <button
                            className="absolute bottom-0 right-0 w-9 h-9 rounded-full
                            bg-gradient-to-tr from-indigo-500 to-purple-600
                            border-4 border-slate-900
                            flex items-center justify-center
                            shadow-lg"
                        >
                            <Camera className="w-4 h-4 text-white" />
                        </button>

                    </div>

                    <h1 className="text-3xl font-bold mt-5 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                        Your Profile
                    </h1>

                    <p className="text-slate-400 text-sm mt-2">
                        Update your profile information
                    </p>

                </div>

                {/* Form UI */}
                <form className="space-y-4">

                    {/* Name */}
                    <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1.5 uppercase tracking-wider">
                            Full Name
                        </label>

                        <div className="relative">
                            <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />

                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full bg-slate-950/60 border border-slate-800 rounded-xl py-3 pl-11 pr-4 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
                            />
                        </div>
                    </div>

                    {/* Username */}
                    <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1.5 uppercase tracking-wider">
                            Username
                        </label>

                        <div className="relative">
                            <AtSign className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />

                            <input
                                type="text"
                                value={userData?.userName || ""}
                                readOnly
                                className="w-full bg-slate-950/60 border border-slate-800 rounded-xl py-3 pl-11 pr-4 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"

                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1.5 uppercase tracking-wider">
                            Email Address
                        </label>

                        <div className="relative">
                            <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />

                            <input
                                type="email"
                                value={userData?.email || ""}
                                readOnly
                                className="w-full bg-slate-950/60 border border-slate-800 rounded-xl py-3 pl-11 pr-4 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
                            />
                        </div>
                    </div>

                    {/* Save Button */}
                    <button
                        type="button"
                        className="w-full mt-6 bg-gradient-to-r from-indigo-500 to-purple-600
                        hover:from-indigo-600 hover:to-purple-700
                        text-white font-medium py-3 px-4 rounded-xl
                        shadow-lg shadow-indigo-500/20
                        transition duration-200"
                    >
                        Save Profile
                    </button>

                </form>

            </div>
        </div>
    );
}

export default Profile;