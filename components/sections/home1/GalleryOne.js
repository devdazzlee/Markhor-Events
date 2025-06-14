"use client";

import Link from "next/link";
import { useState } from "react";

const galleryItems = [
  {
    src: "/assets/images/resources/beach_glow_party.jpg",
    alt: "Beach Glow Party",
    title: "Beach Glow Party",
    subtitle: "Neon Nights",
    href: "/gallery-details/beach-glow-party",
  },
  {
    src: "/assets/images/resources/rooftop_dance.jpg",
    alt: "Rooftop Dance",
    title: "Rooftop Dance",
    subtitle: "Sky High Beats",
    href: "/gallery-details/rooftop-dance",
  },
  {
    src: "/assets/images/resources/girls_night.jpg",
    alt: "Girls Night Out",
    title: "Girls Night Out",
    subtitle: "VIP Lounge",
    href: "/gallery-details/girls-night-out",
  },
  {
    src: "/assets/images/resources/day_fest.jpg",
    alt: "Day Fest Vibes",
    title: "Day Fest Vibes",
    subtitle: "Chill Zone",
    href: "/gallery-details/day-fest-vibes",
  },
  {
    src: "/assets/images/resources/live_music.jpg",
    alt: "Live Music",
    title: "Live Music",
    subtitle: "Front Row",
    href: "/gallery-details/live-music",
  },
  {
    src: "/assets/images/resources/art_corner.jpg",
    alt: "Art & Vibes",
    title: "Art & Vibes",
    subtitle: "Creative Corner",
    href: "/gallery-details/art-vibes",
  },
  {
    src: "/assets/images/resources/street_fair.jpg",
    alt: "Street Fair Fun",
    title: "Street Fair Fun",
    subtitle: "Food & Fun",
    href: "/gallery-details/street-fair-fun",
  },
  {
    src: "/assets/images/resources/neon_light.jpg",
    alt: "Neon Light Show",
    title: "Neon Light Show",
    subtitle: "Glow Party",
    href: "/gallery-details/neon-light-show",
  },
];

export default function GalleryOne() {
  const [columns, setColumns] = useState(3);

  return (
    <section className="gallery-one">
      <div className="container">
        <div className="section-title text-center">
          <div className="section-title__tagline-box">
            <span className="section-title__tagline">Event Highlights</span>
          </div>
          <h2 className="section-title__title">
            See the Party <br /> Magic
          </h2>
        </div>
        <div className="row masonary-layout">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`col-xl-3 col-lg-6 col-md-6`}
            >
              <div className="gallery-one__single">
                <div className="gallery-one__img">
                  <img src={item.src} alt={item.alt} />
                  <div className="gallery-one__content">
                    <div className="gallery-one__sub-title-box">
                      <div className="gallery-one__sub-title-shape"></div>
                      <p className="gallery-one__sub-title">{item.subtitle}</p>
                    </div>
                    <h4 className="gallery-one__title">
                      <Link href={item.href}>{item.title}</Link>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
