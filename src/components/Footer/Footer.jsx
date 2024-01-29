import React from "react";
import Logo from "@/assets/logo (2).png";
import Image from "next/image";
import storeLogo from "@/assets/Mobile app store badge (1).png"
import storeLogo2 from "@/assets/Mobile app store badge.png"
function Footer() {
  return (
    <div className="bg-white text-gray-800 ">
      <section className="max-w-[1500px] mx-auto text-white">
        <div className="grid md:grid-cols-3 py-5 border px-4 ">
          {/* first col */}
          <div className="py-8 px-4 space-y-4 ">
            <Image src={Logo} alt="logo" className="w-24 md:w-32" />
            <p className="text-gray-800">
              ClearLink is your gateway to effortless, high-quality video
              conferencing. Join us in shaping the future of communication!
            </p>
          </div>
          {/* second col */}
          <div className=" text-gray-800 grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols col-span-2 md:pl-10">
            <div>
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
            <div>
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
            <div>
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
            <div>
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
            <div className="text-gray-800">
              <div className="py-8 px-4 space-y-3 ">
                <h1 className="text-xl font-bold mb-3">Get the App</h1>
                <Image src={storeLogo} alt="playstore_logo"/>
                <Image src={storeLogo2} alt="playstore_logo"/>
                {/* <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <HiLocationMarker />
                    <p>CozyDev Abuja, Nigeria</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <MdMessage />
                    <p>usohps@gmail.com</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <MdCall />
                    <p>+2348062268744</p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#F9FAFB] hidden sm:block">
          <div className=" p-4  border-gray-400 md:flex justify-between items-center">
            <span className="text-sm text-gray-400">
              copyright &copy; 2024 by CozyDev
            </span>
            {/* <div className="flex items-center gap-4 justify-center">
              <a href="#">
                <FaLinkedin />
              </a>
              <a href="#">
                <FaXTwitter />
              </a>
              <a href="#">
                <FaGithub />
              </a>
            </div> */}
          </div>
        </div>
      </section>
      {/* <hr className="" /> */}
      {/* buttom section */}
    </div>
  );
}

export default Footer;
