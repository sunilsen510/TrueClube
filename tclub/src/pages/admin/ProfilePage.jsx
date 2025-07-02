import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import CustomButton from '../../components/CustomButton';
import smileBoy from '../../assets/smilessboy.jpg';
import eyeImg from '../../assets/beye.svg';
import CeyeImg from '../../assets/ceye.svg';
import { toast } from 'react-toastify';
import editImg from '../../assets/edit.svg';

// Profile schema
const profileSchema = z.object({
  firstName: z.string().min(1, 'Full name is required'),
  phone: z
    .string()
    .min(10, 'Phone must be at least 10 digits')
    .regex(/\+91-\d{10}/, 'Format: +91-XXXXXXXXXX'),
  email: z.string().email('Invalid email address'),
});

// Password schema
const passwordSchema = z
  .object({
    oldPassword: z.string().min(6, 'Old password required'),
    newPassword: z.string().min(6, 'New password must be at least 6 characters'),
    confirmPassword: z.string().min(6, 'Please confirm your password'),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

const ProfilePage = () => {
  const navigate = useNavigate();
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  // Profile form
  const {
    register: registerProfile,
    handleSubmit: handleProfileSubmit,
    formState: { errors: profileErrors, isValid: isProfileValid, isSubmitting: isProfileSubmitting },
    reset: resetProfile,
  } = useForm({
    resolver: zodResolver(profileSchema),
    mode: 'onChange',
  });

  // Password form
  const {
    register: registerPassword,
    handleSubmit: handlePasswordSubmit,
    formState: { errors: passwordErrors, isValid: isPasswordValid, isSubmitting: isPasswordSubmitting },
    reset: resetPassword,
  } = useForm({
    resolver: zodResolver(passwordSchema),
    mode: 'onChange',
  });

  const onProfileSubmit = (data) => {
    console.log('Profile Updated:', data);
    toast.success('Profile updated successfully');
    resetProfile();
  };

  const onPasswordSubmit = (data) => {
    console.log('Password Changed:', data);
    toast.success('Password changed successfully');
    resetPassword();
  };

  return (
    <div className="flex flex-col lg:flex-col md:flex-col xl:flex-row gap-[0px] border border-[#D4DEEB] rounded-[10px] lg:my-[40px] m-[20px] lg:mx-[50px]">
      <div className=" p-[30px]">
        <div className='xl:w-[375px] lg:w-full pt-[24px] flex items-center justify-center gap-[20px] flex-col rounded-[11px]  bg-[#ffffff] border border-[#D4DEEB]'>
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
                  type="button"
                  label="Edit Profile Picture"
                  variant="primary"
                  className="!py-[23px] !px-[30px] !text-[16px] w-full cursor-pointer hover:!text-[#0A2540]"
                />
              </div>
            </div>
          </div>
        </div>  
        <div className='xl:w-[375px] lg:w-full  mt-[58px] flex items-center justify-center gap-[20px] flex-col rounded-[11px]  bg-[#ffffff] border border-[#D4DEEB]'>
          <div className='p-[30px]'>
            <h3 className='text-[25px] text-[#0A2540] font-semibold leading-[27px] text-center'>Want A Break?</h3>
            <p className='text-[16px] font-normal text-[#40658B] leading-[26px] my-[25px]'>How about we temporarily deactivate the account to preserve your health tracking data?</p>
            <div className=" h-[44px] hidden md:flex items-center justify-center gap-5 bg-[#F5F7F9] rounded-full w-[157px] mt-[25px] mx-auto">
              <div className="flex lg:flex items-center gap-[15px] lg:gap-[0px] xl:gap-[8px] py-[5px]">
                <span className='text-[16px] font-medium text-[#40658B]'>Break</span>
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
      <div className="xl:w-[calc(100%-375px)] lg:w-full md:w-full w-full relative">
        <div className="py-[20px] px-[30px] rounded-[20px]">
          <div className=''>
            <img src={editImg} alt='edit img' className="absolute top-[40px] right-[50px] -translate-x-1/2 -translate-y-1/2 cursor-pointer"
              onClick={() => setIsEditing((prev) => !prev)}
            />
          </div>
          <div className="bg-white pt-[20px]  rounded-[20px]">
            <h2 className="text-[25px] sm:text-[22px] md:text-[26px] lg:text-[30px] font-medium leading-[27px] tracking-[0] text-[var(--text-primary)] text-start">
              Profile Details
            </h2>
            <div className="w-20 h-1 bg-[var(--btn-primary-bg)] font-semibold rounded-full mt-[20px]" />

            {/* Profile Form */}
            <form onSubmit={handleProfileSubmit(onProfileSubmit)} className="space-y-6 w-full mt-[30px]">
              <div className="flex flex-col gap-6 w-full">
                <div className="flex items-center gap-4">
                  <label className="min-w-[91px] text-sm font-bold leading-[44px]">Full Name</label>
                  <span>:</span>
                  <div className="w-full">
                    <input
                      {...registerProfile('firstName')}
                      placeholder="Jane Cooper"
                      disabled={!isEditing} 
                      className={`w-full py-2 text-[#40658B] text-sm font-light focus:outline-none border-b ${
                        profileErrors.firstName ? 'border-[var(--color-error)]' : 'border-[var(--color-border)]'
                      } ${!isEditing ? 'bg-[#f8f9fa] cursor-not-allowed' : ''}`}
                    />
                    {profileErrors.firstName && (
                      <p className="text-[var(--color-error)] text-xs mt-1">{profileErrors.firstName.message}</p>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <label className="min-w-[91px] text-sm font-bold leading-[44px]">Phone Number</label>
                  <span>:</span>
                  <div className="w-full">
                    <input
                      {...registerProfile('phone')}
                      placeholder="+91-1234567890"
                      className={`w-full py-2 text-[#40658B] text-sm font-light focus:outline-none border-b ${
                        profileErrors.phone ? 'border-[var(--color-error)]' : 'border-[var(--color-border)]'
                      }`}
                    />
                    {profileErrors.phone && (
                      <p className="text-[var(--color-error)] text-xs mt-1">{profileErrors.phone.message}</p>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <label className="min-w-[91px] text-sm font-bold leading-[44px]">Email Address</label>
                  <span>:</span>
                  <div className="w-full">
                    <input
                      {...registerProfile('email')}
                      type="email"
                      placeholder="janecooperinfo@gmail.com"
                      className={`w-full py-2 text-sm text-[#40658B] font-light focus:outline-none border-b ${
                        profileErrors.email ? 'border-[var(--color-error)]' : 'border-[var(--color-border)]'
                      }`}
                    />
                    {profileErrors.email && (
                      <p className="text-[var(--color-error)] text-xs mt-1">{profileErrors.email.message}</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <div className="w-max">
                  <CustomButton
                    type="submit"
                    label="Update Details"
                    variant="primary"
                    className="!py-[23px] !px-[30px] !text-[16px]"
                    disabled={!isProfileValid || isProfileSubmitting}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="py-[20px] px-[30px] rounded-[20px]">
          <div className="bg-white pt-[20px]  rounded-[20px]">
            <h2 className="text-[25px] sm:text-[22px] md:text-[26px] lg:text-[30px] font-medium leading-[27px] tracking-[0] text-[var(--text-primary)] text-start">
              Change Password
            </h2>
            <div className="w-20 h-1 bg-[var(--btn-primary-bg)] font-semibold rounded-full mt-[20px]" />

            {/* Password Form */}
            <form onSubmit={handlePasswordSubmit(onPasswordSubmit)} className="space-y-6 w-full mt-[30px]">
              <div className="flex flex-col gap-6 w-full">
                {[
                  ['oldPassword', 'Old Password', showOldPassword, setShowOldPassword],
                  ['newPassword', 'New Password', showNewPassword, setShowNewPassword],
                  ['confirmPassword', 'Confirm Password', showConfirmPassword, setShowConfirmPassword],
                ].map(([field, label, show, setShow], idx) => (
                  <div className="flex items-center gap-4" key={idx}>
                    <label className="min-w-[120px] text-sm font-bold leading-[44px]">{label}</label>
                    <span>:</span>
                    <div className="w-full relative">
                      <input
                        {...registerPassword(field)}
                        type={show ? 'text' : 'password'}
                        placeholder={`Enter ${label}`}
                        className={`w-full py-2 text-sm text-[#0A2540] font-light focus:outline-none border-b ${
                          passwordErrors[field] ? 'border-[var(--color-error)]' : 'border-[var(--color-border)]'
                        }`}
                      />
                      <img
                        src={show ? CeyeImg : eyeImg}
                        alt="toggle"
                        onClick={() => setShow((prev) => !prev)}
                        className="absolute lg:block md:block sm:block hidden  right-[15px] top-1/2 transform -translate-y-1/2 w-4 h-4 cursor-pointer"
                      /> 
                      {passwordErrors[field] && (
                        <p className="text-[var(--color-error)] text-xs mt-1">{passwordErrors[field].message}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-end lg:mb-[80px] md:mb-0">
                <div className="w-max">
                  <CustomButton
                    type="submit"
                    label="Change Password"
                    variant="primary"
                    className="!py-[23px] !px-[30px] !text-[16px]"
                    disabled={!isPasswordValid || isPasswordSubmitting}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
