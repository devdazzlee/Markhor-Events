"use client";

import Link from "next/link";
import { useState } from "react";

const galleryItems = [
  {
    src: "https://res.cloudinary.com/dneh5diea/image/upload/v1750073681/Recourses/mzaihysevbpsfmyfaoyn.jpg",
    alt: "Beach Glow Party",
    title: "Beach Glow Party",
    subtitle: "Neon Nights",
    href: "/gallery-details/beach-glow-party",
  },
  {
    src: "https://res.cloudinary.com/dneh5diea/image/upload/v1750073702/Recourses/za47sm1zrkab9awdl7xg.jpg",
    alt: "Rooftop Dance",
    title: "Rooftop Dance",
    subtitle: "Sky High Beats",
    href: "/gallery-details/rooftop-dance",
  },
  {
    src: "https://res.cloudinary.com/dneh5diea/image/upload/v1750073694/Recourses/qitltenlw6wpiyfmlhan.jpg",
    alt: "Girls Night Out",
    title: "Girls Night Out",
    subtitle: "VIP Lounge",
    href: "/gallery-details/girls-night-out",
  },
  {
    src: "https://res.cloudinary.com/dneh5diea/image/upload/v1750073681/Recourses/fizzh4zxwfcofweptwd9.jpg",
    alt: "Day Fest Vibes",
    title: "Day Fest Vibes",
    subtitle: "Chill Zone",
    href: "/gallery-details/day-fest-vibes",
  },
  {
    src: "https://res.cloudinary.com/dneh5diea/image/upload/v1750073692/Recourses/z8zwh16tmeuwckq2c8z0.jpg",
    alt: "Live Music",
    title: "Live Music",
    subtitle: "Front Row",
    href: "/gallery-details/live-music",
  },
  {
    src: "https://res.cloudinary.com/dneh5diea/image/upload/v1750073658/Recourses/e2rtahxiifgj4crbqiqo.jpg",
    alt: "Art & Vibes",
    title: "Art & Vibes",
    subtitle: "Creative Corner",
    href: "/gallery-details/art-vibes",
  },
  {
    src: "https://res.cloudinary.com/dneh5diea/image/upload/v1750073715/Recourses/gdrzzjizkr7ybuanydgc.jpg",
    alt: "Street Fair Fun",
    title: "Street Fair Fun",
    subtitle: "Food & Fun",
    href: "/gallery-details/street-fair-fun",
  },
  {
    src: "https://res.cloudinary.com/dneh5diea/image/upload/v1750073689/Recourses/h4oiznqlne954iy9qfl1.jpg",
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
