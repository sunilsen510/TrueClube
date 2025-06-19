// import React from 'react';
// import CustomButton from '../components/CustomButton';
// import emailImg from '../assets/email.svg';
// import userImg from '../assets/user.svg';
// import callImg from '../assets/call.svg';
// import { useNavigate } from "react-router-dom";
// import { useForm } from 'react-hook-form';
// import { z } from 'zod';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


// const contactSchema = z.object({
//   firstName: z
//     .string()
//     .pipe(z.string().trim().min(1, 'First name is required')),

//   lastName: z
//     .string()
//     .pipe(z.string().trim().min(1, 'Last name is required')),

//   phone: z
//     .string()
//     .pipe(
//       z
//         .string()
//         .trim()
//         .min(10, 'Phone number is required')
//         .regex(/^[0-9]{10,}$/, 'Invalid phone number')
//     ),

//   email: z
//     .string()
//     .pipe(
//       z
//         .string()
//         .trim()
//         .min(1, 'Email is required')
//         .email('Invalid email address')
//     ),

//   message: z
//     .string()
//     .pipe(z.string().trim().min(1, 'Message is required')),
// });


// export default function Contact() {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     watch,
//     formState: { errors, isValid, isSubmitting },
//   } = useForm({
//     resolver: zodResolver(contactSchema),
//     mode: 'onChange',
//     reValidateMode: 'onChange',
//   });

//   const firstNameValue = watch('firstName', '');
//   const lastNameValue = watch('lastName', '');
//   const phoneValue = watch('phone', '');
//   const emailValue = watch('email', '');
//   const messageValue = watch('message', '');

//   const navigate = useNavigate();

//   const onSubmit = (data) => {
//   if (!isValid) {
//     navigate('/error');
//     return;
//   }
//   console.log('Form data:', data);
//   toast.success('Form submitted successfully!');
//   reset();
// };


//   const handleNavigate = (route) => {
//     const isValid = false; 

//     if (isValid) {
//       navigate(route);
//     } else {
//       navigate("/error");
//     }
//   };


//   return (
//     <div className="w-full h-full md:w-full px-0 sm:px-2 md:px-2">
//       <h2 className="text-[24px] leading-[32px] sm:text-[30px] sm:leading-[38px] md:text-[36px] md:leading-[44px] lg:text-[45px] lg:leading-[53px]  
//         font-medium text-[#0A2540] mb-[30px] lg:mb-[50px]">Get In Touch</h2>
//       <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-full">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
//           {/* First Name */}
//           <div className="relative">
//             <label className="absolute text-[14px] font-bold text-[#0A2540] top-[-10px] left-4 bg-white px-1  z-10">
//               First Name
//             </label>
//             <div className="relative">
//               <img
//                 src={userImg}
//                 alt="user icon"
//                 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
    
//               />
//               <input
//                 {...register('firstName')}
//                 type="text"
//                 placeholder="Enter Your First Name"
//                 className={`w-full pl-[35px] pr-4 rounded-md focus:outline-none border py-[20px] text-[12px] font-light text-[#40658B] ${
//                   firstNameValue.trim() && errors.firstName ? 'border-red-500' : 'border-gray-300'
//                 }`}
//               />
//             </div>
//             {firstNameValue.trim() && errors.firstName && (
//               <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>
//             )}
//           </div>

//           {/* Last Name */}
//           <div className="relative">
//             <label className="absolute text-[14px] font-bold text-[#0A2540] top-[-10px] left-4 bg-white px-1 z-10">
//               Last Name
//             </label>
//             <div className="relative">
//               <img
//                 src={userImg}
//                 alt="user icon"
//                 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
//               />
//               <input
//                 {...register('lastName')}
//                 type="text"
//                 placeholder="Enter Your Last Name"
//                 className={`w-full pl-[35px] pr-4 py-[20px] text-[12px] font-light text-[#40658B] rounded-md focus:outline-none border ${
//                   lastNameValue.trim() && errors.lastName ? 'border-red-500' : 'border-gray-300'
//                 }`}
//               />
//             </div>
//             {lastNameValue.trim() && errors.lastName && (
//               <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>
//             )}
//           </div>

//           {/* Phone */}
//           <div className="relative">
//             <label className="absolute  text-[14px] font-bold text-[#0A2540] top-[-10px] left-4 bg-white px-1 z-10">
//               Phone Number
//             </label>
//             <div className="relative">
//               <img
//                 src={callImg}
//                 alt="call icon"
//                 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
//               />
//               <input
//                 {...register('phone')}
//                 type="text"
//                 placeholder="Enter Your Phone Number"
//                 className={`w-full pl-[35px] pr-4 py-[20px] text-[12px] font-light text-[#40658B] rounded-md focus:outline-none border ${
//                   phoneValue.trim() && errors.phone ? 'border-red-500' : 'border-gray-300'
//                 }`}
//               />
//             </div>
//             {phoneValue.trim() && errors.phone && (
//               <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
//             )}
//           </div>

//           {/* Email */}
//           <div className="relative">
//             <label className="absolute text-[14px] font-bold text-[#0A2540] top-[-10px] left-4 bg-white px-1 z-10">
//               Email
//             </label>
//             <div className="relative">
//               <img
//                 src={emailImg}
//                 alt="email icon"
//                 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
//               />
//               <input
//                 {...register('email')}
//                 type="email"
//                 placeholder="Enter Your Email"
//                 className={`w-full pl-[35px] pr-4 py-[20px] text-[12px] font-light text-[#40658B] rounded-md focus:outline-none border ${
//                   emailValue.trim() && errors.email ? 'border-red-500' : 'border-gray-300'
//                 }`}
//               />
//             </div>
//             {emailValue.trim() && errors.email && (
//               <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
//             )}
//           </div>
//         </div>

//         {/* Message */}
//         <div className="relative">
//           <label className="absolute text-[14px] font-bold text-[#0A2540] top-[-10px] left-4 bg-white px-1 z-10">
//             Message
//           </label>
//           <textarea
//             {...register('message')}
//             placeholder="Enter Your Message"
//             rows={5}
//             className={`w-full pl-5 pr-4 py-[20px] text-[12px] font-light text-[#40658B] rounded-md focus:outline-none border ${
//               messageValue.trim() && errors.message ? 'border-red-500' : 'border-gray-300'
//             }`}
//           />
//           {messageValue.trim() && errors.message && (
//             <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
//           )}
//         </div>

//         {/* Submit */}
//         <div className="w-max">
//           <CustomButton
//             type="submit"
//             label="Submit"
            
//             variant="outline"
//             className="px-6 w-full lg:mb-0 xl:mb-0 md:mb-0 cursor-pointer hover:!text-black"
//             disabled={!isValid || isSubmitting}
//           />
//         </div>
//       </form>
//     </div>
//   );
// }




import React from 'react';
import CustomButton from '../components/CustomButton';
import emailImg from '../assets/email.svg';
import userImg from '../assets/user.svg';
import callImg from '../assets/call.svg';
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const contactSchema = z.object({
  firstName: z.string().trim().min(1, 'First name is required'),
  lastName: z.string().trim().min(1, 'Last name is required'),
  phone: z.string().trim().min(10, 'Phone number is required').regex(/^[0-9]{10,}$/, 'Invalid phone number'),
  email: z.string().trim().min(1, 'Email is required').email('Invalid email address'),
  message: z.string().trim().min(1, 'Message is required'),
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

  const navigate = useNavigate();

  const onSubmit = (data) => {
    if (!isValid) {
      navigate('/error');
      return;
    }
    console.log('Form data:', data);
    toast.success('Form submitted successfully!');
    reset();
  };

  return (
    <div className="w-full h-full px-0 sm:px-2 md:px-2">
      <h2 className="text-[var(--text-xl)] leading-[var(--line-xl)] sm:text-[30px] sm:leading-[38px] md:text-[36px] md:leading-[44px] lg:text-[45px] lg:leading-[53px] font-medium  mb-[30px] lg:mb-[50px]">
        Get In Touch
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
          {/* First Name */}
          <div className="relative">
            <label className="absolute text-sm font-bold text-[var(--text-primary)] top-[-10px] left-4 bg-white px-1 z-10">
              First Name
            </label>
            <div className="relative">
              <img src={userImg} alt="user icon" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" />
              <input
                {...register('firstName')}
                type="text"
                placeholder="Enter Your First Name"
                className={`w-full pl-[var(--input-padding-x)] pr-4 py-[var(--input-padding-y)] text-[var(--text-sm)] font-light  rounded-md focus:outline-none border ${
                  firstNameValue.trim() && errors.firstName ? 'border-[var(--color-error)]' : 'border-[var(--color-border)]'
                }`}
              />
            </div>
            {firstNameValue.trim() && errors.firstName && (
              <p className="text-[var(--color-error)] text-xs mt-1">{errors.firstName.message}</p>
            )}
          </div>

          {/* Last Name */}
          <div className="relative">
            <label className="absolute text-sm font-bold text-[var(--text-primary)] top-[-10px] left-4 bg-white px-1 z-10">
              Last Name
            </label>
            <div className="relative">
              <img src={userImg} alt="user icon" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" />
              <input
                {...register('lastName')}
                type="text"
                placeholder="Enter Your Last Name"
                className={`w-full pl-[var(--input-padding-x)] pr-4 py-[var(--input-padding-y)] text-[var(--text-sm)] font-light  rounded-md focus:outline-none border ${
                  lastNameValue.trim() && errors.lastName ? 'border-[var(--color-error)]' : 'border-[var(--color-border)]'
                }`}
              />
            </div>
            {lastNameValue.trim() && errors.lastName && (
              <p className="text-[var(--color-error)] text-xs mt-1">{errors.lastName.message}</p>
            )}
          </div>

          {/* Phone */}
          <div className="relative">
            <label className="absolute text-sm font-bold text-[var(--text-primary)] top-[-10px] left-4 bg-white px-1 z-10">
              Phone Number
            </label>
            <div className="relative">
              <img src={callImg} alt="call icon" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" />
              <input
                {...register('phone')}
                type="text"
                placeholder="Enter Your Phone Number"
                className={`w-full pl-[var(--input-padding-x)] pr-4 py-[var(--input-padding-y)] text-[var(--text-sm)] font-light  rounded-md focus:outline-none border ${
                  phoneValue.trim() && errors.phone ? 'border-[var(--color-error)]' : 'border-[var(--color-border)]'
                }`}
              />
            </div>
            {phoneValue.trim() && errors.phone && (
              <p className="text-[var(--color-error)] text-xs mt-1">{errors.phone.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="relative">
            <label className="absolute text-sm font-bold text-[var(--text-primary)] top-[-10px] left-4 bg-white px-1 z-10">
              Email
            </label>
            <div className="relative">
              <img src={emailImg} alt="email icon" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" />
              <input
                {...register('email')}
                type="email"
                placeholder="Enter Your Email"
                className={`w-full pl-[var(--input-padding-x)] pr-4 py-[var(--input-padding-y)] text-[var(--text-sm)] font-light  rounded-md focus:outline-none border ${
                  emailValue.trim() && errors.email ? 'border-[var(--color-error)]' : 'border-[var(--color-border)]'
                }`}
              />
            </div>
            {emailValue.trim() && errors.email && (
              <p className="text-[var(--color-error)] text-xs mt-1">{errors.email.message}</p>
            )}
          </div>
        </div>

        {/* Message */}
        <div className="relative">
          <label className="absolute text-sm font-bold text-[var(--text-primary)] top-[-10px] left-4 bg-white px-1 z-10">
            Message
          </label>
          <textarea
            {...register('message')}
            placeholder="Enter Your Message"
            rows={5}
            className={`w-full pl-[20px] pr-4 py-[var(--input-padding-y)] text-[var(--text-sm)] font-light  rounded-md focus:outline-none border ${
              messageValue.trim() && errors.message ? 'border-[var(--color-error)]' : 'border-[var(--color-border)]'
            }`}
          />
          {messageValue.trim() && errors.message && (
            <p className="text-[var(--color-error)] text-xs mt-1">{errors.message.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="w-max">
          <CustomButton
            type="submit"
            label="Submit"
            variant="outline"
            className="px-6 w-full lg:mb-0 xl:mb-0 md:mb-0 cursor-pointer hover:!text-black"
            disabled={!isValid || isSubmitting}
          />
        </div>
      </form>
    </div>
  );
}
