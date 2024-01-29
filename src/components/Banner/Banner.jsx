import React from "react";
import mockupImg from "@/assets/mockup_videocall.png";
import Image from "next/image";
import shopifyLogo from "@/assets/Shopify.com svg.png";
import coinbaseLogo from "@/assets/Coinbase svg.png";
import dropboxLogo from "@/assets/Dropbox svg.png";
import intercomLogo from "@/assets/Intercom svg.png";
import marvelLogo from "@/assets/Group.png";
import banner_img from "@/assets/Frame 25.png";
import group_img from "@/assets/Contents.png";
import Star from "@/assets/Stars.png";
import Avater from "@/assets/Avatar.png";
import { VscArrowLeft } from "react-icons/vsc";
import { VscArrowRight } from "react-icons/vsc";
import Frameicon from "@/assets/Frame.png";
import Group from "@/assets/Avatargroup.png";
function Banner() {
  return (
    <>
      {/* Top Banner */}
      <div
        data-aos="zoom-in"
        className="container m-auto max-h-screen text-black pb-12 hero relative z-50 py-6 px-12"
      >
        <div className="container pt-24 m-auto">
          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
            <div data-aos="zoom-in" className="p-4  space-y-3 xl:pr-36">
              <h1
                data-aos="fade-up"
                data-aos-delay="300"
                className="capitalize text-2xl md:text-5xl"
              >
                Uniting the world,one video call at a time
              </h1>
              <p data-aos="fade-up" data-aos-delay="500">
                Experience the future of communication with ClearLink where
                crystal-clear video conferencing meets unparalleled simplicity.
              </p>
              <div className="flex items-center gap-10">
                <button
                  data-aos="fade-up"
                  data-aos-delay="600"
                  className="primary-button"
                >
                  Start your free trial
                </button>
                <div className="flex items-center gap-1">
                  <Image src={Frameicon} alt="icon" />
                  <p>Discover AI assistant</p>
                </div>
              </div>
              <div className="flex items-center">
                <Image src={Group} alt="icon" />

                <div>
                  <Image src={Frameicon} alt="icon" />
                  <p>from 3,000+ reviews</p>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center items-center">
              <Image
                data-aos="zoom-in"
                src={banner_img}
                alt="mockup_videocall"
                className="rounded md:w-[400px] shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="font-medium py-6 w-full text-center space-y-3 text-sm md:text-xl">
        <h4>
          Join 1,500+ companies already video conferencing the ClearLink way
        </h4>
        <div className="flex  flex-col md:flex-row items-center px-4 justify-center gap-4">
          <div className="flex items-center justify-center gap-3">
            <Image
              data-aos="zoom-in"
              src={shopifyLogo}
              alt="mockup_videocall"
              className="rounded min-w-[60px] shadow-2xl"
            />
            <Image
              data-aos="zoom-in"
              src={coinbaseLogo}
              alt="mockup_videocall"
              className="rounded min-w-[60px] shadow-2xl"
            />
          </div>
          <div className="flex px-2 gap-3">
            <Image
              data-aos="zoom-in"
              src={dropboxLogo}
              alt="mockup_videocall"
              className="rounded min-w-[60px] shadow-2xl"
            />
            <Image
              data-aos="zoom-in"
              src={intercomLogo}
              alt="mockup_videocall"
              className="rounded min-w-[60px] shadow-2xl"
            />
            <Image
              data-aos="zoom-in"
              src={marvelLogo}
              alt="mockup_videocall"
              className="rounded min-w-[60px] shadow-2xl"
            />
          </div>
        </div>
      </div>
      <div className="container m-auto max-h-screen bg-[#D1E9FF] text-black pb-12 relative z-50 py-6 px-12 ">
        <div className="container pt-24 m-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
            <div
              data-aos="zoom-in"
              className="p-4 container space-y-3 xl:pr-36"
            >
              <div className="space-y-4">
                <Image src={shopifyLogo} alt="stars" />
                <Image src={Star} alt="stars" />
              </div>
              <h1
                data-aos="fade-up"
                data-aos-delay="300"
                className="capitalize text-lg md:text-xl"
              >
                ClearLink has upgraded our remote meetings. High-quality video,
                screen sharing, andtop-notch security make it essential for our
                team.
              </h1>
              <div className="flex container gap-3">
                <Image
                  src={Avater}
                  alt="stars"
                  className=" w-[35px] h-[35px]"
                />
                <div>
                  <p className="text-gray-900">Sarah Thompson</p>
                  <span className="text-gray-600">
                    Project Manager, Shopify
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-[500px] flex justify-center items-center">
              <Image
                data-aos="zoom-in"
                src={group_img}
                alt="people on a system"
                className="rounded md:w-[400px] shadow-2xl"
              />
            </div>
          </div>
        </div>
        <div className=" w-[200px] m-auto p-4 flex items-center justify-between">
          <button className="p-2 bg-white rounded-full">
            <VscArrowLeft className="text-[#175CD3] md:text-2xl text-xl font-extrabold" />
          </button>
          <button className="p-2 rounded-full bg-white">
            <VscArrowRight className="font-extrabold md:text-2xl text-xl text-[#175CD3]" />
          </button>
        </div>
      </div>

      {/* Section before footer */}
      <section className="max-h-screen">
        <div className="container m-auto bg-white mt-24  text-black pb-12 relative z-50 py-6 px-12 ">
          <div className="container m-auto">
            <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4 items-center flex-col-reverse">
              <div data-aos="zoom-in" className="p-4 space-y-3 xl:pr-36">
                <p data-aos="fade-up" className="text-sky-800 capitalize "></p>
                <h3
                  data-aos="fade-up"
                  data-aos-delay="300"
                  className="capitalize text-2xl md:text-3xl"
                >
                  Ready to clear the path to perfect communication?
                </h3>
                <ul data-aos="fade-up" data-aos-delay="500">
                  <li>30 days free trial</li>
                  <li>Cancel at any time</li>
                  <li>Access to all features</li>
                  <li>Personalized onboarding</li>
                </ul>
                <div className="flex flex-col md:flex-row py-3 space-y-6 md:space-y-0 items-center justify-between">
                  <button className="w-full border py-2 md:w-[200px] font-bold rounded-full">
                    Talk to sales
                  </button>
                  <button
                    data-aos="fade-up"
                    data-aos-delay="300"
                    className="primary-button "
                  >
                    Start your free trial
                  </button>
                </div>
              </div>
              <div className="w-full flex justify-center items-center">
                <Image
                  data-aos="zoom-in"
                  src={mockupImg}
                  alt="mockup_videocall"
                  className="rounded shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
