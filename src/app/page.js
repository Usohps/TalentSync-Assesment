"use client"
import Navbar from "@/components/Navbar";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";
export default function Home() {
  // npm i aos for smooth animations here
  useEffect(() => {
    Aos.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  });
  return (
   <div>
    <Navbar/>
    <Banner/>
    <Footer/>
   </div>
  );
}
