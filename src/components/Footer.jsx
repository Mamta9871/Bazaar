import React from "react";
import { logo, paymentLogo } from "../assets/asset";
import { ImGithub } from "react-icons/im";
import { FaYoutube, FaFacebookF, FaTwitter, FaInstagram,FaHome } from "react-icons/fa";
import {MdLocationOn} from 'react-icons/md'
import {BsPersonFill,BsPaypal} from 'react-icons/bs'
 

const Footer = () => {
  return (
    <div className="bg-black text-[#949494] py-20 font-titleFont">
      <div className="max-w-screen-xl mx-auto grid grid-cols-4">
        <div className="flex flex-col gap-7">
          <img className="w-32 bg-white" src={logo} alt="logo" />
          <p className="text-white text-sm tracking-wide">@ ReactBD.com</p>
          <img className="w-56" src={paymentLogo} alt="paymentlogos" />
          <div className="flex gap-5 text-lg text-gray-400">
            <ImGithub className="hover:text-white duration-300 cursor-pointer" />
            <FaYoutube className="hover:text-white duration-300 cursor-pointer" />
            <FaFacebookF className="hover:text-white duration-300 cursor-pointer" />
            <FaTwitter className="hover:text-white duration-300 cursor-pointer" />
            <FaInstagram className="hover:text-white duration-300 cursor-pointer" />
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Locate us</h2>
          <div className="text-base flex flex-col gap-2">
            <p>MBD,Ruwi,Muscat-Oman</p>
            <p>Mobile: 00968 7291897481</p>
            <p>Phone: 00933 24758965</p>
            <p>e-mail: bazaar@gmail.com</p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">profile</h2>
          <div className="flex flex-col gap-2 text-base">
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <BsPersonFill/>
              </span>my account</p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <BsPaypal/>
              </span>checkout</p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <FaHome/>
              </span>order tracking</p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <MdLocationOn/>
              </span>help & support</p>
          </div>
        </div>
        <div className="flex flex-col justify-center hover:text-white duration-300 cursor-pointer">
          <input className="bg-transparent border px-4 py-2 text-sm" 
                 placeholder="e-mail"
                 type="text" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
