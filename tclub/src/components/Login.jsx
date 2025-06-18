import React, { useState } from 'react';
import CustomButton from '../components/CustomButton';
import { useNavigate, NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import emailImg from '../assets/email.svg';
import eyeImg from '../assets/eye.svg';
import lockImg from '../assets/lock.svg';

// Zod schema
const loginSchema = z.object({
  email: z.string().trim().min(1, 'Email is required').email('Invalid email address'),
  password: z.string().trim().min(8, 'Password must be at least 8 characters'),
});

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    trigger,
    reset,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const emailValue = watch('email', '');
  const passwordValue = watch('password', '');

  const onSubmit = (data) => {
    console.log('Logging in with', data);
    navigate('/');
    reset();
  };

  const handleRoute = async (route) => {
    const valid = await trigger();
    if (valid) {
      navigate(route === 'login' ? '/login' : '/signup');
    } else {
      console.warn('Validation failed');
    }
  };
  const handleNavigate = (route) => {
    const isValid = false; 

    if (isValid) {
      navigate(route);
    } else {
      navigate("/error");
    }
  };

  return (
    <div className="w-full flex flex-col justify-center h-full text-center md:text-left my-8 md:my-[30px] lg:my-[100px]">
      <h2 className="text-[20px] sm:text-[22px] md:text-[26px] lg:text-[30px] font-medium tracking-[0] text-[#0A2540] line-height text-center">Login Now</h2>
      <div className="w-20 h-1 bg-[#006AF2] rounded-full tracking-[0]  mt-[16px]  mb-4 mx-auto" />
      <p className="text-[#40658B] text-[16px] font-normal lg:mb-[50px] mb-[20px]   text-center">
        Welcome Back! please enter your email and password.
      </p>
      <div className="border border-[#D4DEEB] rounded-xl h-[100%] bg-[#ffff]">
        <div className="hidden md:flex items-center justify-center gap-5 bg-[#F5F7F9] rounded-full w-[283px] my-[40px] mx-auto">
          <div className="hidden lg:flex items-center gap-[15px] lg:gap-[0px] xl:gap-[8px] py-[5px]">
            <CustomButton
              label="Login"
              onClick={() => handleNavigate("/login")}
              variant="outline"
              className="shadow-[8px_6px_15px_0px_#0061DE40] ml-[5px] hover:!text-[#0A2540] cursor-pointer"
            />
            <CustomButton label="Sign Up" onClick={() => handleNavigate("/signup")} variant="outline" className="!px-[36px] !bg-transparent !text-[#0A2540]" />
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-full lg:px-[30px] !p-[30px] md:px-[30px] md:!pt-[0] sm:!pt-[30px] sm:!px-[30px]">
          {/* Email Field */}
          <div className="mb-[30px] relative border-[#D4DEEB]">
            <label className="block text-[14px] font-bold text-[#0A2540] bg-[#ffff] mb-1 absolute px-[2px] top-[-10px] left-[20px] z-50">
              Email
            </label>
            <div className="relative rounded-[5px]">
              <img
                src={emailImg}
                alt="email icon"
                className="absolute left-[20px] top-1/2 transform -translate-y-1/2 w-4 h-4"
              />
              <input
                {...register('email')}
                type="email"
                placeholder="Enter Your Email"
                className={`
                  w-full pl-10 pr-0 py-[20px] text-[12px] font-light text-[#40658B] border rounded-md focus:outline-none
                  ${emailValue && errors.email ? 'border-red-500' : 'border-gray-300'}
                `}
              />
            </div>
            {emailValue && errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password Field */}
          <div className="mb-[30px] relative">
            <label className="block text-[14px] font-bold text-[#0A2540] bg-[#ffff] mb-1 absolute top-[-10px] px-[2px] left-[20px] z-50">
              Password
            </label>
            <div className="relative">
              <img
                src={lockImg}
                alt="password icon"
                className="absolute left-[20px] top-1/2 transform -translate-y-1/2 w-4 h-4"
              />
              <img
                src={eyeImg}
                alt="toggle visibility"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-[15px] top-1/2 transform -translate-y-1/2 w-4 h-4 cursor-pointer"
              />
              <input
                {...register('password')}
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter Your Password"
                className={`
                  w-full pl-10 pr-0 py-[20px] text-[12px] font-light text-[#40658B] border rounded-md focus:outline-none
                  ${passwordValue && errors.password ? 'border-red-500' : 'border-gray-300'}
                `}
              />
            </div>
            {passwordValue && errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* Remember & Forgot */}
          <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between text-sm gap-[20px] sm:gap-0 mb-[30px]">
            <label className="flex items-center gap-[8px] cursor-pointer">
            <div className="relative">
              {/* Hidden checkbox, acts as peer */}
              <input type="checkbox" className="sr-only peer" />

              {/* Track */}
              <div className="w-11 h-6 rounded-full bg-[#F2F2F2] peer-checked:bg-[#006AF2] transition-all duration-300" />

              {/* Thumb */}
              <div className="absolute left-1 top-1 w-4 h-4 rounded-full bg-white shadow-md transition-all duration-300 peer-checked:translate-x-5" />
            </div>

              <span className="text-[12px] font-normal line-heights text-[#40658B] hover:text-">Remember me</span>
            </label>
              <NavLink
                  to="/forgot-password"
                  className=" text-[#40658B] text-[12px] line-height text-left sm:text-right hover:underline"
                >
                  Forgot password?
              </NavLink>
          </div>

          {/* Submit Button */}
          <div className="mt-[40px]">
            <CustomButton
              type="submit"
              label="Login Now !"
              onClick={() => handleNavigate("/login")}
              variant="outline"
              className="
                w-full 
                !text-[14px] lg:!text-[18px] 
                px-4 sm:px-6 
                !py-[18px] sm:!py-[16px] md:!py-[23px] 
                cursor-pointer 
                shadow-[8px_6px_15px_0px_#0061DE40] ml-[5px] 
                hover:!text-[#0A2540]
                not-first:disabled={!isValid || isSubmitting}"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
