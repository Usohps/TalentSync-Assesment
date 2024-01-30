import React from "react";
import Logo from "@/assets/logo (2).png";
import Image from "next/image";
import storeLogo from "@/assets/Mobile app store badge (1).png";
import storeLogo2 from "@/assets/Mobile app store badge.png";
function Footer() {
  return (
    <div className="bg-white text-gray-800 ">
      <section className="max-w-[1500px] mx-auto px-4 text-white">
        <div className=" px-4 flex flex-col justify-around md:flex-wrap flex-nowrap md:flex-row ">
          {/* first col */}
          <div className="py-8 px-4 space-y-4 md:max-w-[300px] w-full ">
            <Image src={Logo} alt="logo" className="w-24 md:w-32" />
            <p className="text-gray-800">
              ClearLink is your gateway to effortless, high-quality video
              conferencing. Join us in shaping the future of communication!
            </p>
          </div>
          {/* second col */}
          <div className=" text-gray-800 w-full md:w-6/12 flex flex-wrap md:flex-nowrap md:flex-row  justify-between">
            <div className="w-1/2 md:w-full">
              <div className="py-8 px-4 ">
                <h1 className="text-xl font-bold mb-3">Product</h1>
                <ul className="flex flex-col gap-3">
                  <li>
                    <a href="#">Overviews</a>
                  </li>
                  <li>
                    <a href="#">Features</a>
                  </li>
                  <li>
                    <a href="#">Solutions</a>
                  </li>
                  <li>
                    <a href="#">Tutorials</a>
                  </li>
                  <li>
                    <a href="#">Pricing</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-1/2 md:w-full">
              <div className="py-8 px-4 ">
                <h1 className="text-xl font-bold mb-3">Company</h1>
                <ul className="flex flex-col gap-3">
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                  <li>
                    <a href="#">Press</a>
                  </li>
                  <li>
                    <a href="#">News</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-1/2 md:w-full">
              <div className="py-8 px-4 ">
                <h1 className="text-xl font-bold mb-3">Resources</h1>
                <ul className="flex flex-col gap-3">
                  <li>
                    <a href="#">Blogs</a>
                  </li>
                  <li>
                    <a href="#">Events</a>
                  </li>
                  <li>
                    <a href="#">Help Centre</a>
                  </li>
                  <li>
                    <a href="#">Tutorials</a>
                  </li>
                  <li>
                    <a href="#">Support</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-1/2 md:w-full">
              <div className=" text-gray-800 py-8 px-4 ">
                <h1 className="text-xl font-bold mb-3">Legals</h1>
                <ul className="flex flex-col gap-3">
                  <li>
                    <a href="#">Terms</a>
                  </li>
                  <li>
                    <a href="#">Privacy</a>
                  </li>
                  <li>
                    <a href="#">Cookies</a>
                  </li>
                  <li>
                    <a href="#">Licenses</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            
          <div className="text-gray-800 ">
              <div className="py-8 space-y-3 flex-col flex items-center">
                <h1 className=" text-sm font-bold mb-3 text-center md:text-left">Get the App</h1>
                <div>
                <Image src={storeLogo} alt="playstore_logo"className=""/>
                </div>
                <div>
                <Image src={storeLogo2} alt="playstore_logo"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#F9FAFB] hidden sm:block">
          <div className=" p-4  border-gray-400 md:flex justify-between items-center">
            <span className="text-sm text-gray-400">
              copyright &copy; 2024 by CozyDev
            </span>
          </div>
        </div>
    </div>
    
  );
}

export default Footer;
