import React from 'react'
import CustomButton from '../components/CustomButton';
import emailImg from '../assets/email.svg';
import eyeImg from '../assets/eye.svg';
import lockImg from '../assets/lock.svg';


// const Contact = () => {
//   return (
//     <>
//     <h2 className="text-xl font-bold text-gray-800 mb-2 text-center">Get In Touch</h2>
//         <div className="w-full md:w-full">
//                 <form className="space-y-6 w-full">
//                     <div className="mb-[30px] relative">
//                         <label className="block text-sm font-medium text-gray-700 bg-[#ffff] mb-1 absolute px-[6px] top-[-10px] left-[20px] z-50">Email</label>
//                         <div className="relative">
//                             <img
//                             src={emailImg}
//                             alt="email icon"
//                             className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
//                             />
//                             <input
//                             type="email"
//                             placeholder="Enter your email"
//                             className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none"
//                             />
//                         </div>
//                     </div>

//                     <div className="mb-[30px] relative">
//                         <label className="block text-sm font-medium text-gray-700 mb-1 bg-[#ffff] absolute top-[-10px] px-[6px] left-[20px] z-50">Password</label>
//                         <div className="relative">
//                             <img
//                             src={lockImg}
//                             alt="password icon"
//                             className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
//                             />
//                             <img
//                             src={eyeImg}
//                             alt="toggle visibility"
//                             className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 cursor-pointer"
//                             />
//                             <input
//                             type="password"
//                             placeholder="Enter your password"
//                             className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md  focus:outline-none"
//                             />
//                         </div>
//                     </div>

//                     <div className='mt-[40px]'>
//                         <CustomButton
//                         label="Submit"
//                         to="/login"
//                         variant="outline"
//                         className="px-6 w-full"
//                         />
//                     </div>
                    
//                 </form>
//             </div>
//     </>
//   )
// }

const Contact = () => {
  return (
    <>
      <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">Get In Touch</h2>

      <div className="w-full md:w-full">
        <form className="space-y-6 w-full">
          {/* First Name */}
          <div className="mb-[30px] relative">
            <label className="block text-sm font-medium text-gray-700 bg-white absolute top-[-10px] left-[20px] px-1 z-10">
              First Name
            </label>
            <input
              type="text"
              placeholder="Enter your first name"
              className="w-full pl-4 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none"
            />
          </div>

          {/* Last Name */}
          <div className="mb-[30px] relative">
            <label className="block text-sm font-medium text-gray-700 bg-white absolute top-[-10px] left-[20px] px-1 z-10">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Enter your last name"
              className="w-full pl-4 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none"
            />
          </div>

          {/* Phone Number */}
          <div className="mb-[30px] relative">
            <label className="block text-sm font-medium text-gray-700 bg-white absolute top-[-10px] left-[20px] px-1 z-10">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full pl-4 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none"
            />
          </div>

          {/* Email */}
          <div className="mb-[30px] relative">
            <label className="block text-sm font-medium text-gray-700 bg-white absolute top-[-10px] left-[20px] px-1 z-10">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full pl-4 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none"
            />
          </div>

          {/* Message */}
          <div className="mb-[30px] relative">
            <label className="block text-sm font-medium text-gray-700 bg-white absolute top-[-10px] left-[20px] px-1 z-10">
              Message
            </label>
            <textarea
              placeholder="Write your message..."
              rows="5"
              className="w-full pl-4 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="mt-[40px]">
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

