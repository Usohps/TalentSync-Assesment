"use client";
import React from "react";
import Logo from "@/assets/logo (2).png";
import Image from "next/image";
import { GoChevronDown } from "react-icons/go";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const toggle = ()=>{
    setNavbar(!navbar)
    console.log(navbar)
  }
  return (
    <div className="relative">
      <nav
      data-aos="fade-down"
      className="fixed top-0 right-0 w-full z-[60] bg-[#D0D5DD] backdrop-blur-sm py-4 sm:py-4"
    >
      <div className="container relative m-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex text-white items-center gap-4 font-bold text-2xl ">
            <Image src={Logo} alt="logo" className="w-24 md:w-32" />
          </div>
          <ul className="lg:flex items-center gap-3 text-sm md:text-medium py-4 sm:py-0 hidden">
            <li className="flex gap-1 items-center">
              <button>Products</button>
              <span>
                <GoChevronDown />
              </span>
            </li>
            <li className="flex gap-1 items-center">
              <button>Solutions</button>
              <span>
                <GoChevronDown />
              </span>
            </li>
            <li className="flex gap-1 items-center">
              <button>Resources</button>
              <span>
                <GoChevronDown />
              </span>
            </li>
            <li>
              <button>
                <a href="#">Pricing</a>
              </button>
            </li>
          </ul>
          <div className="flex gap-3">
            <div className="md:block">
              <button className="primary-button lg:w-[200px] lg:block primary-button  hidden  bg-white text-sm text-black">
                Login
              </button>
            </div>
            <div>
              <button className="lg:w-[200px] lg:block primary-button  hidden text-sm ">
                Sign up for free
              </button>
            </div>
          </div>
          <div className="lg:hidden z-40">
            <button onClick={toggle}>
              {navbar ? (
                <AiOutlineClose size={30} className="text-black font-medium" />
              ) : (
                <RxHamburgerMenu size={30} className="text-black font-medium" />
              )}
            </button>
          </div>
        </div>
        
        {/* {navbar && (
          <div
            className={
              navbar
                ? " w-full h-full md:hidden flex justify-center text-sm items-center fixed top-[0] backdrop-blur-sm  right-0 "
                : "lg:hidden w-full h-full flex justify-center text-sm items-center fixed top-[0] backdrop-blur-sm   right-[100%] "
            }
          >
            <div className=" flex w-[300px] flex-col ease-in-out  justify-center items-center rounded-xl m-auto  shadow-2xl shadow-slate-900 bg-gradient-to-r from-blue-950 to-purple-900  font-bold">
              <ul className=" w-full  md:max-w-[300px] text-white h-[150px] flex flex-col justify-center items-center text-sm space-y-4">
                <li>Home</li>
                <li>Project</li>
                <li>Blog</li>
              </ul>
            </div>
          </div>
        )} */}
      </div>
    {
          navbar && (
            <div className="lg:hidden w-[80%] absolute top-0 right-0 min-h-screen  backdrop-blur-sm  border border-red-500">
              <div >

              </div>
            </div>
          )
        }
    </nav>
    </div>
  );
}

export default Navbar;
