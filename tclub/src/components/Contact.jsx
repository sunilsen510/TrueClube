import React from 'react'
import CustomButton from '../components/CustomButton';
import emailImg from '../assets/email.svg';
import userImg from '../assets/user.svg';
import callImg from '../assets/call.svg';



const Contact = () => {
  return (
    <>
      <div className='w-full h-full'>
        <h2 className="text-4xl  font-bold text-gray-800 text-start">Get In Touch</h2>
        <form className="space-y-6 w-full">
          
          {/* First Name + Last Name + Phone + Email in 2-2 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-[30px] mb-0 mt-[50px]">
            {/* First Name */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 bg-white absolute top-[-10px] left-[20px] px-1 z-10">
                First Name
              </label>
              <div className="relative">
                <img src={userImg} alt="user icon" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Enter Your First Name"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none"
                />
              </div>
            </div>

            {/* Last Name */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 bg-white absolute top-[-10px] left-[20px] px-1 z-10">
                Last Name
              </label>
              <div className="relative">
                <img src={userImg} alt="user icon" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Enter Your Last Name"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none"
                />
              </div>
            </div>

            {/* Phone Number */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 bg-white absolute top-[-10px] left-[20px] px-1 z-10">
                Phone Number
              </label>
              <div className="relative">
                <img src={callImg} alt="call icon" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Enter Your Phone Number"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none"
                />
              </div>
            </div>

            {/* Email */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 bg-white absolute top-[-10px] left-[20px] px-1 z-10">
                Email
              </label>
              <div className="relative">
                <img src={emailImg} alt="email icon" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="relative mt-[30px]">
            <label className="block text-sm font-medium text-gray-700 bg-white absolute top-[-10px] left-[20px] px-1 z-10">
              Message
            </label>
            <textarea
              placeholder="Enter Your Message"
              rows="5"
              className="w-full pl-4 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="w-[227px]">
            <CustomButton
              label="Submit"
              to="#"
              variant="outline"
              className="px-6 w-full"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;

