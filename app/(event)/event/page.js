"use client";
import Link from "next/link";
import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import ScheduleOne from "@/components/sections/home1/ScheduleOne";
import CTAOne from "@/components/sections/home1/CTAOne";

export default function Home() {
  const [activeTab, setActiveTab] = useState("1st-day");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <Layout headerStyle={4} footerStyle={1} backgroundImage={'https://res.cloudinary.com/dneh5diea/image/upload/v1749922481/Blog/Base/tf5kg2ixs55iu8xrgyzu.jpg'} breadcrumbTitle="Event">
        <div style={{ "margin": "80px 0px 20px 0px" }}>
          <ScheduleOne />
        </div >
        <CTAOne />
      </Layout >
    </>
  );
}
