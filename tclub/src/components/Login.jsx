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

  return (
    <div className="w-full flex flex-col justify-center h-full text-center md:text-left my-8 md:my-[30px] lg:my-[100px]">
      <h2 className="text-xl font-bold text-gray-800 mb-2 text-center">Login Now</h2>
      <div className="w-20 h-1 bg-blue-600 rounded-full mb-4 mx-auto" />
      <p className="text-gray-600 mb-6 text-center">
        Welcome Back! Please enter your email and password.
      </p>
      <div className="border border-[#D4DEEB] p-[30px] rounded-xl h-[100%] bg-[#ffff]">
        <div className="hidden md:flex items-center space-x-2 bg-[#F5F7F9] rounded-full px-2 py-1 w-[283px] mb-[40px] mx-auto">
          <CustomButton
            label="Login"
            to="/login"
            variant="outline"
            className="px-6"
            onClick={() => handleRoute('login')}
          />
          <NavLink
            to=""
            className="text-sm font-medium text-black hover:underline px-2"
            onClick={() => handleRoute('signup')}
          >
            Sign Up
          </NavLink>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-full">
          {/* Email Field */}
          <div className="mb-[30px] relative">
            <label className="block text-sm font-medium text-gray-700 bg-[#ffff] mb-1 absolute px-[6px] top-[-10px] left-[20px] z-50">
              Email
            </label>
            <div className="relative">
              <img
                src={emailImg}
                alt="email icon"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
              />
              <input
                {...register('email')}
                type="email"
                placeholder="Enter your email"
                className={`
                  w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none
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
            <label className="block text-sm font-medium text-gray-700 bg-[#ffff] mb-1 absolute top-[-10px] px-[6px] left-[20px] z-50">
              Password
            </label>
            <div className="relative">
              <img
                src={lockImg}
                alt="password icon"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
              />
              <img
                src={eyeImg}
                alt="toggle visibility"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 cursor-pointer"
              />
              <input
                {...register('password')}
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                className={`
                  w-full pl-10 pr-10 py-2 border rounded-md focus:outline-none
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
            <label className="flex items-center gap-3 cursor-pointer">
              <div className="relative">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-blue-600 transition-all duration-300" />
                <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-md transition-all duration-300 peer-checked:translate-x-5" />
              </div>
              <span className="text-sm text-gray-700">Remember me</span>
            </label>
              <NavLink
                  to="/forgot-password"
                  className="text-blue-600 text-left sm:text-right hover:underline"
                >
                  Forgot password?
              </NavLink>
          </div>

          {/* Submit Button */}
          <div className="mt-[40px]">
            <CustomButton
              type="submit"
              label="Login Now !"
              variant="outline"
              className="px-6 w-full"
              disabled={!isValid || isSubmitting}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
