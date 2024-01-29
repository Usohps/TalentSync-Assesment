import React from "react";
import Logo from "@/assets/logo (2).png";
import Image from "next/image";
function Navbar() {
  return (
    <nav
      data-aos="fade-down"
      className="fixed top-0 right-0 w-full z-[60] bg-[#D0D5DD] backdrop-blur-sm py-4 sm:py-4"
    >
      <div className="container m-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex text-white items-center gap-4 font-bold text-2xl ">
            <Image src={Logo} alt="logo" className="w-24 md:w-32" />
          </div>
          <ul className="lg:flex items-center gap-6 text-xl py-4 sm:py-0 hidden">
            <li>
              <button>Products<span></span></button>
            </li>
            <li>
              <button>Solutions<span></span></button>
            </li>
            <li>
              <button>Resources<span></span></button>
            </li>
            <li>
              <button><a href="#">Pricing</a></button>
            </li>
          </ul>
          <div className="flex gap-3">
          <div className="md:block">
            <button className="primary-button bg-white text-sm text-black">
              Login
            </button>
          </div>
          <div>
            <button className="primary-button text-sm w-auto">Sign up for free</button>
          </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
