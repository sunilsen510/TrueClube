import React from 'react';
import CustomButton from '../components/CustomButton';
import { NavLink } from "react-router-dom"; // Adjust path as needed
import emailImg from '../assets/email.svg';
import eyeImg from '../assets/eye.svg';
import lockImg from '../assets/lock.svg';

 
const Login = () => {
  return (
    <div className="w-full md:w-full flex flex-col justify-center text-center md:text-left h-full my-[100px]">
        <h2 className="text-xl font-bold text-gray-800 mb-2 text-center">Login Now</h2>
        <div className="w-20 h-1 bg-blue-600 rounded-full mb-4 mx-auto"></div>
        <p className="text-gray-600 mb-6 text-center">
            Welcome Back! Please enter your email and password.
        </p>
        <div className='border border-[#D4DEEB] p-[30px]  rounded-xl h-[100%] bg-[#ffff] '>
            <div className="hidden md:flex items-center space-x-2 bg-[#F5F7F9] rounded-full px-2 py-1 w-[283px] mb-[40px] mx-auto">
                <CustomButton
                    label="Login"
                    to="/login"
                    variant="outline"
                    className="px-6"
                />
                <NavLink to="/signup" className="text-sm  font-medium text-black hover:underline px-2">
                    Sign Up
                </NavLink>
            </div>

            <div className="w-full md:w-full">
                <form className="space-y-6 w-full">
                    <div className="mb-[30px] relative">
                        <label className="block text-sm font-medium text-gray-700 bg-[#ffff] mb-1 absolute px-[6px] top-[-10px] left-[20px] z-50">Email</label>
                        <div className="relative">
                            <img
                            src={emailImg}
                            alt="email icon"
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                            />
                            <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none"
                            />
                        </div>
                    </div>

                    <div className="mb-[30px] relative">
                        <label className="block text-sm font-medium text-gray-700 mb-1 bg-[#ffff] absolute top-[-10px] px-[6px] left-[20px] z-50">Password</label>
                        <div className="relative">
                            <img
                            src={lockImg}
                            alt="password icon"
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                            />
                            <img
                            src={eyeImg}
                            alt="toggle visibility"
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 cursor-pointer"
                            />
                            <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md  focus:outline-none"
                            />
                        </div>
                    </div>


                    <div className="flex items-center justify-between text-sm mb-[30px]">
                        <label className="flex items-center gap-3 cursor-pointer">
                            <div className="relative">
                                <input type="checkbox" className="sr-only peer" />
                                <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-blue-600 transition-all duration-300"></div>
                                <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-md transition-all duration-300 peer-checked:translate-x-5"></div>
                            </div>
                            <span className="text-sm text-gray-700">Remember me</span>
                        </label>
                        <a href="/forgot-password" className="text-blue-600 hover:underline">
                            Forgot password?
                        </a>
                    </div>

                    
                    <div className='mt-[40px]'>
                        <CustomButton
                        label="Login Now !"
                        to="/login"
                        variant="outline"
                        className="px-6 w-full"
                        />
                    </div>
                    
                </form>
            </div>
        </div>
    </div> 

  );
};

export default Login;
