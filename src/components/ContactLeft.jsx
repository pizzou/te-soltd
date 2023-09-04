import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import contactImg from '../assets/contactImg.png'
const ContactLeft = () => {

  
  return (
    
    <div className="border-l w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#c0cfed] to-[#c4daef] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
      <h6 className='text-grey-500 mb-6'> Obtaining further information by <span className="text-cyan-600">make a contact </span> <span className="text-black">with our experienced IT staffs.</span></h6>
        
        <p className="text-base text-gray-400 tracking-wide">
          
We’re available for 24 hours a day!
Contact to require a detailed analysis and assessment of your plan.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+25088301683</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">teso.solutions@outlook.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find us in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaFacebookF />
          </span>
          <span className="bannerIcon">
            <FaTwitter />
          </span>
          <span className="bannerIcon">
            <FaLinkedinIn />
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft