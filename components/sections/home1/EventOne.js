"use client"; // Ensures the component runs on the client side

import { useState } from "react";
import Link from "next/link";

export default function EventOne() {
  // State for dynamic content
  const [eventContent, setEventContent] = useState({
    sectionTagline: "Vibe Check",
    sectionTitle: "Where Epic Memories Are Made",
    buttonText: "Secure Your Spot",
    buttonLink: "/event-details",
    points: [
      {
        id: 1,
        iconClass: "icon-air-horn",
        title: "Hype DJs & Visuals",
        description:
          "Feel the bass drop with top DJs and jaw-dropping light shows that keep the energy soaring.",
        link: "/event",
      },
      {
        id: 2,
        iconClass: "icon-party-blower",
        title: "Interactive Chill Zones",
        description:
          "Hang out in Instagram-worthy lounges with AR filters, viral photo ops, and pop-up snack bars.",
        link: "/event",
      },
    ],
    eventImage: "/assets/videos/HomeVideo.mov",
  });

  return (
    <>
      {/* Event One Start */}
      <section className="event-one">
        <div className="container">
          <div className="event-one__inner wow fadeInUp" data-wow-delay="300ms">
            <div className="event-one__top">
              <div className="section-title text-left">
                <div className="section-title__tagline-box">
                  <span className="section-title__tagline">
                    {eventContent.sectionTagline}
                  </span>
                </div>
                <h2 className="section-title__title">
                  {eventContent.sectionTitle}
                </h2>
              </div>
              <div className="event-one__btn-box">
                <Link
                  href={eventContent.buttonLink}
                  className="event-one__btn thm-btn"
                >
                  {eventContent.buttonText}
                  <span className="icon-arrow-right"></span>
                </Link>
              </div>
            </div>

            <ul className="list-unstyled event-one__points">
              {eventContent.points.map((point) => (
                <li key={point.id}>
                  <div className="icon">
                    <span className={point.iconClass}></span>
                  </div>
                  <div className="content">
                    <h4>
                      <Link href={point.link}>{point.title}</Link>
                    </h4>
                    <p>{point.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div style={{ width: "100%" }}>
              <video
                src={"/assets/videos/HomeVideo.mov"}
                autoPlay
                muted
                loop
                style={{
                  width: "100%",
                  borderRadius: "20px",
                  objectFit: "cover",
                  height: "350px",
                }}
              ></video>
            </div>
          </div>
        </div>
      </section>
      {/* Event One End */}
    </>
  );
}
