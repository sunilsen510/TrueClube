import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import CustomButton from '../../components/CustomButton';
import smileBoy from '../../assets/smilessboy.jpg';
import eyeImg from '../../assets/beye.svg';
import CeyeImg from '../../assets/ceye.svg';

// Extended schema for full profile
const profileSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  email: z.string().trim().min(1, 'Email is required').email('Invalid email address'),
  message: z.string().min(1, 'Message is required'),
});

const ProfilePage = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    resolver: zodResolver(profileSchema),
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  // Watched values for error handling
  const firstNameValue = watch('firstName', '');
  const lastNameValue = watch('lastName', '');
  const phoneValue = watch('phone', '');
  const emailValue = watch('email', '');
  const messageValue = watch('message', '');

  const onSubmit = (data) => {
    console.log('Form Data Submitted:', data);
    navigate('/');
    reset();
  };

  return (
    <div className="flex  gap-[0px] border border-[#D4DEEB] rounded-[10px] mt-[40px]">
        <div className=" p-[30px]">
            <div className='w-[375px] pt-[24px] flex items-center justify-center gap-[20px] flex-col rounded-[11px]  bg-[#ffffff] border border-[#D4DEEB]'>
                <div className="w-[224px] h-[224px] rounded-full border-[11px] border-[#F5F7F9]">
                    <img
                    src={smileBoy}
                    alt="smileBoy"
                    className="w-full h-full rounded-full object-cover"
                    />
                </div>
                <div className="">                 
                    <div className="flex justify-center mb-[-24px]">
                        <div className="w-max">
                            <CustomButton
                            type="submit"
                            label="Edit Profile Picture"
                            variant="primary"
                            className="!py-[23px] !px-[30px] !text-[16px] w-full cursor-pointer hover:!text-[#0A2540]"
                            disabled={!isValid || isSubmitting}
                            />
                        </div>
                    </div>
                </div>
            </div>  
            <div className='w-[375px] mt-[58px] flex items-center justify-center gap-[20px] flex-col rounded-[11px]  bg-[#ffffff] border border-[#D4DEEB]'>
                <div className='p-[30px]'>
                    <h3 className='text-[25px] text-[#0A2540] font-semibold text-center'>Want A Break?</h3>
                    <p className='text-[16px] font-normal text-[#40658B] leading-[26px] my-[25px]'>How about we temporarily deactivate the account to preserve your health tracking data?</p>
                     <div className=" h-[44px] hidden md:flex items-center justify-center gap-5 bg-[#F5F7F9] rounded-full w-[157px] my-[40px] mx-auto">
                        <div className="hidden  lg:flex items-center gap-[15px] lg:gap-[0px] xl:gap-[8px] py-[5px]">
                            <span className='text-[16px] font-medium text-[#40658B]'>Break</span>
                            <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between text-sm gap-[20px] sm:gap-0">
                                <label className="flex items-center gap-[8px] cursor-pointer">
                                    <div className="relative">
                                        <input type="checkbox" className="sr-only peer" />
                                        <div className="w-11 h-6 rounded-full bg-[#F2F2F2] peer-checked:bg-[#04C000] transition-all duration-300" />
                                        <div className="absolute left-1 top-1 w-4 h-4 rounded-full bg-white shadow-md transition-all duration-300 peer-checked:translate-x-5" />
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </div>    
        <div className="w-[calc(100%-375px)] lg:w-full md:w-full">
            <div className="py-[20px] px-[30px] rounded-[20px]">
                <div className="bg-white pt-[20px]  rounded-[20px]">
                    <h2 className="text-[25px] sm:text-[22px] md:text-[26px] lg:text-[30px] font-medium leading-[27px] tracking-[0] text-[var(--text-primary)] text-start">
                    Profile Details
                    </h2>
                    <div className="w-20 h-1 bg-[var(--btn-primary-bg)] font-semibold rounded-full mt-[20px]"></div>

                    {/* Form */}
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-full mt-[30px]">
                        <div className="flex items-center justify-center flex-col">
                            {/* First Name */}
                            <div className="flex flex-col gap-6 w-full">
                                {/* Full Name */}
                                <div className="flex items-center gap-4">
                                    <label className="min-w-[91px] text-sm font-bold leading-[44px]">Full Name</label>
                                    <span>:</span>
                                    <div className="w-full">
                                    <input
                                        {...register('firstName')}
                                        placeholder="Jane Cooper"
                                        className={`w-full py-2 text-[#40658B] text-sm font-light focus:outline-none border-b ${
                                        firstNameValue && errors.firstName
                                            ? 'border-[var(--color-error)]'
                                            : 'border-[var(--color-border)]'
                                        }`}
                                    />
                                    {firstNameValue && errors.firstName && (
                                        <p className="text-[var(--color-error)] text-xs mt-1">{errors.firstName.message}</p>
                                    )}
                                    </div>
                                </div>

                                {/* Phone Number */}
                                <div className="flex items-center gap-4">
                                    <label className="min-w-[91px] text-sm font-bold leading-[44px]">Phone Number</label>
                                    <span>:</span>
                                    <div className="w-full">
                                    <input
                                        {...register('phone')}
                                        placeholder="+91-1234567890"
                                        className={`w-full py-2 text-[#40658B] text-sm font-light focus:outline-none border-b ${
                                        phoneValue && errors.phone
                                            ? 'border-[var(--color-error)]'
                                            : 'border-[var(--color-border)]'
                                        }`}
                                    />
                                    {phoneValue && errors.phone && (
                                        <p className="text-[var(--color-error)] text-xs mt-1">{errors.phone.message}</p>
                                    )}
                                    </div>
                                </div>

                                {/* Email Address */}
                                <div className="flex items-center gap-4">
                                    <label className="min-w-[91px] text-sm font-bold leading-[44px]">Email Address</label>
                                    <span>:</span>
                                    <div className="w-full">
                                    <input
                                        {...register('email')}
                                        type="email"
                                        placeholder="janecooperinfo@gmail.com"
                                        className={`w-full py-2 text-sm text-[#40658B] font-light focus:outline-none border-b ${
                                        emailValue && errors.email
                                            ? 'border-[var(--color-error)]'
                                            : 'border-[var(--color-border)]'
                                        }`}
                                    />
                                    {emailValue && errors.email && (
                                        <p className="text-[var(--color-error)] text-xs mt-1">{errors.email.message}</p>
                                    )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    {/* Submit */}
                        <div className="flex justify-end">
                            <div className="w-max">
                                <CustomButton
                                type="submit"
                                label="Update Details"
                                variant="primary"
                                className="!py-[23px] !px-[30px] !text-[16px] w-full cursor-pointer hover:!text-[#0A2540]"
                                disabled={!isValid || isSubmitting}
                                />
                            </div>
                        </div>
                    </form>
                    {/* End of Form */}
                </div>
            </div>

            <div className="py-[20px] px-[30px] rounded-[20px]">
            <div className="bg-white pt-[30px]  rounded-[20px]">
                <h2 className="text-[25px] sm:text-[22px] md:text-[26px] lg:text-[30px] font-medium leading-[27px] tracking-[0] text-[var(--text-primary)] text-start">
                Change Password
                </h2>
                <div className="w-20 h-1 bg-[var(--btn-primary-bg)] font-semibold rounded-full mt-[20px]"></div>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-full mt-[30px]">
                    <div className="flex items-center justify-center flex-col">
                        {/* First Name */}
                        <div className="flex flex-col gap-6 w-full">
                            {/* Full Name */}
                            <div className="flex items-center gap-4">
                                <label className="min-w-[91px] text-sm font-bold leading-[44px]">Old Password</label>
                                <span>:</span>
                                <div className="w-full relative">
                                <input
                                    {...register('firstName')}
                                    placeholder="Enter Old Password"
                                    className={`w-full py-2 text-[#0A2540] text-sm font-light focus:outline-none border-b ${
                                    firstNameValue && errors.firstName
                                        ? 'border-[var(--color-error)]'
                                        : 'border-[var(--color-border)]'
                                    }`}
                                />
                                <img
                                    src={eyeImg}
                                    alt="toggle visibility"
                                    onClick={() => setShowPassword((v) => !v)}
                                    className="absolute right-[15px] top-1/2 transform -translate-y-1/2 w-4 h-4 cursor-pointer"
                                />
                                {firstNameValue && errors.firstName && (
                                    <p className="text-[var(--color-error)] text-xs mt-1">{errors.firstName.message}</p>
                                )}
                                </div>
                            </div>

                            {/* Phone Number */}
                            <div className="flex items-center gap-4">
                                <label className="min-w-[91px] text-sm font-bold leading-[44px]">New Password</label>
                                <span>:</span>
                                <div className="w-full relative">
                                <input
                                    {...register('phone')}
                                    placeholder="*****************"
                                    className={`w-full py-2 text-[#0A2540] text-sm font-light focus:outline-none border-b ${
                                    phoneValue && errors.phone
                                        ? 'border-[var(--color-error)]'
                                        : 'border-[var(--color-border)]'
                                    }`}
                                />
                                <img
                                    src={CeyeImg}
                                    alt="toggle visibility"
                                    onClick={() => setShowPassword((v) => !v)}
                                    className="absolute right-[15px] top-1/2 transform -translate-y-1/2 w-4 h-4 cursor-pointer"
                                />
                                {phoneValue && errors.phone && (
                                    <p className="text-[var(--color-error)] text-xs mt-1">{errors.phone.message}</p>
                                )}
                                </div>
                            </div>

                            {/* Email Address */} 
                            <div className="flex items-center gap-4">
                                <label className="min-w-[120px] text-sm font-bold leading-[44px]">Confirm Pasword</label>
                                <span>:</span>
                                <div className="w-full relative">
                                <input
                                    {...register('email')}
                                    type="email"
                                    placeholder="Enter Confirm Password"
                                    className={`w-full py-2 text-sm text-[#0A2540] font-light focus:outline-none border-b ${
                                    emailValue && errors.email
                                        ? 'border-[var(--color-error)]'
                                        : 'border-[var(--color-border)]'
                                    }`}
                                />
                                <img
                                    src={eyeImg}
                                    alt="toggle visibility"
                                    onClick={() => setShowPassword((v) => !v)}
                                    className="absolute right-[15px] top-1/2 transform -translate-y-1/2 w-4 h-4 cursor-pointer"
                                />
                                {emailValue && errors.email && (
                                    <p className="text-[var(--color-error)] text-xs mt-1">{errors.email.message}</p>
                                )}
                                </div>
                            </div>
                        </div>
                    </div>
                {/* Submit */}
                    <div className="flex justify-end">
                        <div className="w-max">
                            <CustomButton
                            type="submit"
                            label="Change Passsword"
                            variant="primary"
                            className="!py-[23px] !px-[30px] !text-[16px] w-full cursor-pointer hover:!text-[#0A2540]"
                            disabled={!isValid || isSubmitting}
                            />
                        </div>
                    </div>
                </form>
                {/* End of Form */}
            </div>
            </div>
        </div>
    </div>
  );
};

export default ProfilePage;
