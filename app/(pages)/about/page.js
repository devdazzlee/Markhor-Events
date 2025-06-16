"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import CountUp from "react-countup";
import Layout from "@/components/layout/Layout";
import BrandSlider1 from "@/components/slider/BrandSlider1";
import EventOne from "@/components/sections/home1/EventOne"
import SlidingText from "@/components/sections/home1/SlidingText";
import EventDirection from "@/components/sections/home1/EventDirection";
import CTAOne from "@/components/sections/home1/CTAOne";
import BuyTicket from "@/components/sections/home1/BuyTicket"
// Example usage of the component with dynamic content


export default function Home() {
  return (
    <>
      <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="About US" backgroundImage="https://res.cloudinary.com/dneh5diea/image/upload/v1750073666/Recourses/tfj1iyi4i3gzm5mbf2jw.svg">
        <div>
          <EventOne />
          <SlidingText />
          <BuyTicket />
          <div style={{ "margin": "80px 0px 60px 0px" }} >
            <EventDirection />
          </div>
          <CTAOne />
        </div>
      </Layout>
    </>
  );
}
