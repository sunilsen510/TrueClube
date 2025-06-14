import React from 'react';
import CustomButton from '../components/CustomButton';
import emailImg from '../assets/email.svg';
import userImg from '../assets/user.svg';
import callImg from '../assets/call.svg';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';


const contactSchema = z.object({
  firstName: z
    .string()
    .pipe(z.string().trim().min(1, 'First name is required')),

  lastName: z
    .string()
    .pipe(z.string().trim().min(1, 'Last name is required')),

  phone: z
    .string()
    .pipe(
      z
        .string()
        .trim()
        .min(1, 'Phone number is required')
        .regex(/^[0-9]{10,}$/, 'Invalid phone number')
    ),

  email: z
    .string()
    .pipe(
      z
        .string()
        .trim()
        .min(1, 'Email is required')
        .email('Invalid email address')
    ),

  message: z
    .string()
    .pipe(z.string().trim().min(1, 'Message is required')),
});


export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const firstNameValue = watch('firstName', '');
  const lastNameValue = watch('lastName', '');
  const phoneValue = watch('phone', '');
  const emailValue = watch('email', '');
  const messageValue = watch('message', '');

  const onSubmit = (data) => {
    console.log('Form data:', data);
    reset();
  };

  return (
    <div className="w-full h-full md:w-full px-0 sm:px-2 md:px-2">
      <h2 className="text-4xl font-bold text-gray-800 mb-6">Get In Touch</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
          {/* First Name */}
          <div className="relative">
            <label className="absolute top-[-10px] left-4 bg-white px-1 text-sm font-medium text-gray-700 z-10">
              First Name
            </label>
            <div className="relative">
              <img
                src={userImg}
                alt="user icon"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
              />
              <input
                {...register('firstName')}
                type="text"
                placeholder="Enter your first name"
                className={`w-full pl-10 pr-4 py-2 rounded-md focus:outline-none border ${
                  firstNameValue.trim() && errors.firstName ? 'border-red-500' : 'border-gray-300'
                }`}
              />
            </div>
            {firstNameValue.trim() && errors.firstName && (
              <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>
            )}
          </div>

          {/* Last Name */}
          <div className="relative">
            <label className="absolute top-[-10px] left-4 bg-white px-1 text-sm font-medium text-gray-700 z-10">
              Last Name
            </label>
            <div className="relative">
              <img
                src={userImg}
                alt="user icon"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
              />
              <input
                {...register('lastName')}
                type="text"
                placeholder="Enter your last name"
                className={`w-full pl-10 pr-4 py-2 rounded-md focus:outline-none border ${
                  lastNameValue.trim() && errors.lastName ? 'border-red-500' : 'border-gray-300'
                }`}
              />
            </div>
            {lastNameValue.trim() && errors.lastName && (
              <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>
            )}
          </div>

          {/* Phone */}
          <div className="relative">
            <label className="absolute top-[-10px] left-4 bg-white px-1 text-sm font-medium text-gray-700 z-10">
              Phone Number
            </label>
            <div className="relative">
              <img
                src={callImg}
                alt="call icon"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
              />
              <input
                {...register('phone')}
                type="text"
                placeholder="Enter your phone number"
                className={`w-full pl-10 pr-4 py-2 rounded-md focus:outline-none border ${
                  phoneValue.trim() && errors.phone ? 'border-red-500' : 'border-gray-300'
                }`}
              />
            </div>
            {phoneValue.trim() && errors.phone && (
              <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="relative">
            <label className="absolute top-[-10px] left-4 bg-white px-1 text-sm font-medium text-gray-700 z-10">
              Email
            </label>
            <div className="relative">
              <img
                src={emailImg}
                alt="email icon"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
              />
              <input
                {...register('email')}
                type="email"
                placeholder="Enter your email"
                className={`w-full pl-10 pr-4 py-2 rounded-md focus:outline-none border ${
                  emailValue.trim() && errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
              />
            </div>
            {emailValue.trim() && errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
            )}
          </div>
        </div>

        {/* Message */}
        <div className="relative">
          <label className="absolute top-[-10px] left-4 bg-white px-1 text-sm font-medium text-gray-700 z-10">
            Message
          </label>
          <textarea
            {...register('message')}
            placeholder="Enter your message"
            rows={5}
            className={`w-full pl-4 pr-4 py-2 rounded-md focus:outline-none border ${
              messageValue.trim() && errors.message ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {messageValue.trim() && errors.message && (
            <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
          )}
        </div>

        {/* Submit */}
        <div className="w-max">
          <CustomButton
            type="submit"
            label="Submit"
            variant="outline"
            className="px-6"
            disabled={!isValid || isSubmitting}
            onClick={handleSubmit(onSubmit)}
          />
        </div>
      </form>
    </div>
  );
}
