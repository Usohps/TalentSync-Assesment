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
import check from "@/assets/check.png";
import Accordion from "@/components/Accordion/index";
import videoIcon from "@/assets/videorecorder.png";
import recordingicon from "@/assets/recording-01.png";
import keyicon from "@/assets/lock-unlocked-04.png";
import calandaricon from "@/assets/calendar.png";
import rectangeImg from "@/assets/Rectanglepicture.png";
import Svg from "@/assets/Hand-drawn-arrow.png";
function Banner() {
  return (
    <>
      {/* Top Banner */}
      <div
        data-aos="zoom-in"
        className="container m-auto  text-black pb-12 hero relative z-50 py-6 px-12"
      >
        <div className="md:container pt-20 border border-red-200 md:m-auto space-y-4">
          <div className=" grid grid-cols-1 lg:grid-cols-2  items-center">
            <div data-aos="zoom-in" className="p-2 border space-y-3">
              <h1
                data-aos="fade-up"
                data-aos-delay="300"
                className="capitalize text-3xl md:text-5xl"
              >
                Uniting the world,one video call at a time
              </h1>
              <p data-aos="fade-up" data-aos-delay="500">
                Experience the future of communication with ClearLink where
                crystal-clear video conferencing meets unparalleled simplicity.
              </p>
              <div className="flex items-center flex-col md:flex-row gap-6">
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
              <div className="flex flex-col  md:flex-row space-y-4 gap-6 items-center">
                <Image src={Group} alt="icon" />

                <div>
                  <span className="flex items-center gap-3">
                    <Image src={Star} alt="rating" />
                    5.0
                  </span>

                  <span className="flex items-center gap-3">
                    <Image src={Frameicon} alt="icon" />
                    from 3,000+ reviews
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center items-center">
              <Image
                data-aos="zoom-in"
                src={banner_img}
                alt="mockup_videocall"
                className="rounded md:w-[400px] w-[300px] shadow-2xl"
              />
            </div>
          </div>
        </div>
        <div className="p-4  flex items-center flex-col justify-center pt-6 space-y-6 font-medium w-full text-center text-sm md:text-xl">
          <h4 data-aos="zoom-in">
            Join 1,500+ companies already video conferencing the ClearLink way
          </h4>
          <div className=" container m-auto flex flex-col md:flex-row items-center  justify-center gap-2">
            <div className="flex space-x-2 items-center justify-center">
              <Image
                data-aos="zoom-in"
                src={shopifyLogo}
                alt="mockup_videocall"
                className="rounded w-[70px] h-[20px] shadow-2xl"
              />
              <Image
                data-aos="zoom-in"
                src={coinbaseLogo}
                alt="mockup_videocall"
                className="rounded w-[70px] h-[20px] shadow-2xl"
              />
            </div>
            <div className="flex px-2 space-x-4">
              <Image
                data-aos="zoom-in"
                src={dropboxLogo}
                alt="mockup_videocall"
                className="rounded w-[70px] h-[20px] shadow-2xl"
              />
              <Image
                data-aos="zoom-in"
                src={intercomLogo}
                alt="mockup_videocall"
                className="rounded w-[70px] h-[20px] shadow-2xl"
              />
              <Image
                data-aos="zoom-in"
                src={marvelLogo}
                alt="mockup_videocall"
                className="rounded w-[70px] h-[20px] shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex relative ">
      <div
        data-aos="zoom-in"
        className="max-w-[600px]  lg:text-left px-8 md:pl-12 relative"
      >
        <p>The ClearLink Advantage</p>
        <h1>Why choose ClearLink?</h1>
        <p>
          In a world where connection is everything, ClearLink takes the lead.
          Our cutting-edge video conferencing app offers:
        </p>
      </div>
      <div className="lg:block hidden absolute top-0 right-[20%]">
          <Image src={Svg} alt="svg icon" className="w-32" />
        </div>
      </div>
      <section className="container m-auto p-4 relative">
        <div className="flex lg:flex-row flex-col items-center space-y-4 justify-between">
          <div className="flex flex-col items-center md:items-baseline lg:max-w-[500px] border space-y-4 w-full p-4 flex-wrap">
            <div className="flex flex-col md:flex-row gap-4">
              <div data-aos="zoom-in" data-aos-delay="100">
                <div className="w-10 h-10 flex flex-col items-center justify-center bg-[#F9FAFB] rounded-full">
                  <Image src={videoIcon} alt="video recorder icon" />
                </div>
                <h1>Crystal-clear HD video</h1>
                <p>
                  No more pixelation or blurriness just stunning, lifelike
                  clarity that brings your team closer in meetings.
                </p>
              </div>
              <div data-aos="zoom-in" data-aos-delay="100">
                <div className="w-10 h-10 flex flex-col items-center justify-center bg-[#F9FAFB] rounded-full">
                  <Image src={recordingicon} alt="video recorder icon" />
                </div>
                <h1>Crystal-clear HD video</h1>
                <p>
                  No more pixelation or blurriness just stunning, lifelike
                  clarity that brings your team closer in meetings.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row">
              <div data-aos="zoom-in" data-aos-delay="200">
                <div className="w-10 h-10 flex flex-col items-center justify-center bg-[#F9FAFB] rounded-full">
                  <Image src={calandaricon} alt="video recorder icon" />
                </div>
                <h1>Crystal-clear HD video</h1>
                <p>
                  No more pixelation or blurriness just stunning, lifelike
                  clarity that brings your team closer in meetings.
                </p>
              </div>
              <div data-aos="zoom-in" data-aos-delay="200">
                <div className="w-10 h-10 flex flex-col items-center justify-center bg-[#F9FAFB] rounded-full">
                  <Image src={keyicon} alt="video recorder icon" />
                </div>
                <h1>Crystal-clear HD video</h1>
                <p>
                  No more pixelation or blurriness just stunning, lifelike
                  clarity that brings your team closer in meetings.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <Image
              data-aos="zoom-in"
              src={rectangeImg}
              alt="mockup_videocall"
              className="rounded md:w-[400px] shadow-2xl"
            />
          </div>
        </div>
      </section>

      <div className=" bg-[#D1E9FF] text-black  relative z-50">
        <div className="md:container p-4 m-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
            <div
              data-aos="zoom-in"
              className="p-4 container max-w-[400px] space-y-3 xl:pr-36"
            >
              <div className="space-y-4">
                <Image src={shopifyLogo} alt="stars" className="w-medium" />
                <Image src={Star} alt="stars" />
              </div>
              <h1
                data-aos="fade-up"
                data-aos-delay="300"
                className="capitalize md:text-xl"
              >
                ClearLink has upgraded our remote meetings. High-quality video,
                screen sharing, andtop-notch security make it essential for our
                team.
              </h1>
              <div className="flex  items-center container gap-3">
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
            <div className="w-full border md:w-[500px] flex justify-center items-center">
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
          <button className="p-2 bg-white hover:bg-[#175CD3] rounded-full">
            <VscArrowLeft className="text-[#175CD3] hover:text-white md:text-2xl text-xl font-extrabold" />
          </button>
          <button className="p-2 rounded-full hover:bg-[#175CD3] bg-white">
            <VscArrowRight className="font-extrabold md:text-2xl  hover:text-white text-xl text-[#175CD3]" />
          </button>
        </div>
      </div>
      {/* Accordion Section */}
      <section className=" w-full md:container md:m-auto gap-6 p-4 border flex lg:flex-row flex-col justify-between">
        <div className="p-4 max-w-[400px] space-y-3 ">
          <p className="text-[#175CD3] text-sm">Support</p>
          <h1 className="text-2xl font-bold">FAQs</h1>
          <p>
            Everything you need to know about the product and billing. Can’t
            find the answer you’re looking for? Please chat to our friendly
            team.
          </p>
        </div>
        <Accordion />
      </section>
      {/* Section before footer */}
      <section>
        <div className="container m-auto bg-white  text-black pb-12 relative z-50 py-6 px-12 ">
          <div className="container m-auto">
            <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4 items-center flex-col-reverse">
              <div data-aos="zoom-in" className="p-4 space-y-3">
                <p data-aos="fade-up" className="text-sky-800 capitalize "></p>
                <h3
                  data-aos="fade-up"
                  data-aos-delay="300"
                  className="capitalize text-2xl md:text-3xl"
                >
                  Ready to clear the path to perfect communication?
                </h3>
                <ul data-aos="fade-up" data-aos-delay="500">
                  <li className="flex items-center gap-3">
                    <Image src={check} alt="check icon" />
                    30 days free trial
                  </li>
                  <li className="flex items-center gap-3">
                    <Image src={check} alt="check icon" />
                    Cancel at any time
                  </li>
                  <li className="flex items-center gap-3">
                    <Image src={check} alt="check icon" />
                    Access to all features
                  </li>
                  <li className="flex items-center gap-3">
                    <Image src={check} alt="check icon" />
                    Personalized onboarding
                  </li>
                </ul>
                <div className="flex flex-col md:flex-row py-3 space-y-6 md:space-y-0 items-center justify-around">
                  <button className="w-full duration-500 ease-in-out hover:animate-bounce hover:border-blue-500 focus:border-blue-500 border py-2 md:w-[200px] font-bold rounded-full">
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
