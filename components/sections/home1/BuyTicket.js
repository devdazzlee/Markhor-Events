"use client"; // Ensures the component runs on the client side

import { useState } from "react";
import Link from "next/link";

export default function BuyTicket() {
  // State for dynamic content
  const [ticketContent, setTicketContent] = useState({
    address: "Clifton Beach, Sea View, Karachi, Pakistan",
    timing: "8 PM – Midnight | June 20, 2025",
    title: "Girls’ Night – Let’s Sparkle!",
    description:
      "Grab your besties and dance under the stars at Karachi’s coolest glow party. Great music, bright lights, and nonstop fun await!",
    buttons: [
      { id: 1, text: "Buy Ticket", link: "/contact", class: "buy-ticket__btn-1" },
      { id: 2, text: "Get in Touch", link: "/contact", class: "buy-ticket__btn-2" },
    ],
    ticketImage: "/assets/images/resources/beach_party.jpg",
  });


  return (
    <>
      {/* Buy Ticket Start */}
      <section className="buy-ticket">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div
                className="buy-ticket__left wow fadeInLeft"
                data-wow-delay="100ms"
              >
                <ul className="buy-ticket__address list-unstyled">
                  <li>
                    <div className="icon">
                      <span className="icon-clock"></span>
                    </div>
                    <div className="text">
                      <p>{ticketContent.address}</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-pin"></span>
                    </div>
                    <div className="text">
                      <p>{ticketContent.timing}</p>
                    </div>
                  </li>
                </ul>
                <h3 className="buy-ticket__title">{ticketContent.title}</h3>
                <p className="buy-ticket__text">{ticketContent.description}</p>
                <div className="buy-ticket__btn-box">
                  {ticketContent.buttons.map((button) => (
                    <Link
                      key={button.id}
                      href={button.link}
                      className={`${button.class} thm-btn`}
                    >
                      {button.text}
                      <span className="icon-arrow-right"></span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div
                className="buy-ticket__right wow fadeInRight"
                data-wow-delay="300ms"
              >
                <div className="buy-ticket__img">
                  <img src={ticketContent.ticketImage} alt="Ticket Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Buy Ticket End */}
    </>
  );
}
