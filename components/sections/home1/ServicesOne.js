"use client"; // Ensures the component runs on the client side

import Link from "next/link";
import { useState } from "react";

export default function ServicesOne() {
  // State for dynamic data (e.g., dynamic images, text, links)
  const [servicesContent, setServicesContent] = useState({
    sectionTagline: "Feel the Vibe",
    sectionTitle: "Karachi’s Ultimate Party Scene",
    services: [
      {
        id: 1,
        title: "Sunset Beats",
        description: "Join us at the beach for a neon-lit rave with top DJs, awesome visuals, and non-stop dancing as the sun dips below the waves.",
        icon: "icon-camera",
        link: "/sunset-beats",
      },
      {
        id: 2,
        title: "City Lights Carnival",
        description: "Stroll through Karachi’s coolest street festival—live bands, food trucks serving spicy local bites, and art installations on every corner.",
        icon: "icon-skewer",
        link: "/city-lights-carnival",
      },
      {
        id: 3,
        title: "VIP Lounge Sessions",
        description: "Chill in an exclusive rooftop lounge with handcrafted cocktails, live acoustic sets, and panoramic views of the city skyline.",
        icon: "icon-dinner-table",
        link: "/vip-lounge-sessions",
      },
    ],
  });

  return (
    <>
      {/* Services One Start */}
      <section className="services-one">
        <div className="container">
          <div className="section-title text-center">
            <div className="section-title__tagline-box">
              <span className="section-title__tagline">{servicesContent.sectionTagline}</span>
            </div>
            <h2 className="section-title__title">{servicesContent.sectionTitle}</h2>
          </div>
          <div className="row">
            {servicesContent.services.map((service) => (
              <div key={service.id} className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
                <div className="services-one__single">
                  <div className="services-one__icon">
                    <span className={service.icon}></span>
                  </div>
                  <h3 className="services-one__title">
                    <Link href={service.link}>{service.title}</Link>
                  </h3>
                  <p className="services-one__text">{service.description}</p>
                  <Link href={service.link} className="services-one__read-more">
                    Read More <span className="icon-arrow-right"></span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Services One End */}
    </>
  );
}
