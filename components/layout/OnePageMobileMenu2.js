"use client";
import Link from "next/link";
import { useState } from "react";

const MobileMenu = ({ isSidebar, handleMobileMenu, handleSidebar }) => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
    subMenuKey: "",
  });

  const handleToggle = (key, subMenuKey = "") => {
    if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
      setIsActive({
        status: false,
        key: "",
        subMenuKey: "",
      });
    } else {
      setIsActive({
        status: true,
        key,
        subMenuKey,
      });
    }
  };
  return (
    <>
      {/*End Mobile Menu */}
      <div className="mobile-nav__wrapper">
        <div
          className="mobile-nav__overlay mobile-nav__toggler"
          onClick={handleMobileMenu}
        />
        {/* /.mobile-nav__overlay */}
        <div className="mobile-nav__content">
          <span
            className="mobile-nav__close mobile-nav__toggler"
            onClick={handleMobileMenu}
          >
            <i className="fa fa-times" />
          </span>
          <div className="logo-box">
            <Link href="/" aria-label="logo image">
              <img style={{ width: "135px", height: "auto" }} src="/assets/images/logo.svg" alt="Logo" />
            </Link>
          </div>
          {/* /.logo-box */}
          <div className="mobile-nav__container">
            <ul className="main-menu__list">
              <li className={isActive.key == 1 ? "dropdown current" : "dropdown"}>
                <Link href="/" onClick={handleMobileMenu}>
                  Home{" "}
                </Link>
              </li>

              <li className={isActive.key == 2 ? "dropdown current" : "dropdown"}>
                <Link href="/about" onClick={handleMobileMenu}>
                  About Us
                </Link>
              </li>

              <li className={isActive.key == 3 ? "dropdown current" : "dropdown"}>
                <Link href="#" onClick={handleMobileMenu}>
                  Services
                </Link>
                <ul style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                  <li>
                    <Link href="/services" onClick={handleMobileMenu}>
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/event-prodigy" onClick={handleMobileMenu}>
                      Event Prodigy
                    </Link>
                  </li>
                  <li>
                    <Link href="/stellar-events-co" onClick={handleMobileMenu}>
                      Stellar Events Co
                    </Link>
                  </li>
                  <li>
                    <Link href="/elite-event-management" onClick={handleMobileMenu}>
                      Elite Event Management
                    </Link>
                  </li>
                  <li>
                    <Link href="/infinite-occasions" onClick={handleMobileMenu}>
                      Infinite Occasions
                    </Link>
                  </li>
                  <li>
                    <Link href="/dream-event-planners" onClick={handleMobileMenu}>
                      Dream Event Planners
                    </Link>
                  </li>
                </ul>
                <div
                  className={isActive.key == 3 ? "dropdown-btn open" : "dropdown-btn"}
                  onClick={() => handleToggle(3)}
                >
                  <span className="fa fa-angle-right" />
                </div>
              </li>

              <li className={isActive.key == 4 ? "dropdown current" : "dropdown"}>
                <Link href="#" onClick={handleMobileMenu}>
                  Event
                </Link>
                <ul style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
                  <li>
                    <Link href="/event" onClick={handleMobileMenu}>
                      Event
                    </Link>
                  </li>
                  <li>
                    <Link href="/event-details" onClick={handleMobileMenu}>
                      Event Details
                    </Link>
                  </li>
                </ul>
                <div
                  className={isActive.key == 4 ? "dropdown-btn open" : "dropdown-btn"}
                  onClick={() => handleToggle(4)}
                >
                  <span className="fa fa-angle-right" />
                </div>
              </li>

              <li className={isActive.key == 5 ? "dropdown current" : "dropdown"}>
                <Link href="#" onClick={handleMobileMenu}>
                  Blog
                </Link>
                <ul style={{ display: `${isActive.key == 5 ? "block" : "none"}` }}>
                  <li>
                    <Link href="/blog" onClick={handleMobileMenu}>
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog-list" onClick={handleMobileMenu}>
                      Blog List
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog-details" onClick={handleMobileMenu}>
                      Blog Details
                    </Link>
                  </li>
                </ul>
                <div
                  className={isActive.key == 5 ? "dropdown-btn open" : "dropdown-btn"}
                  onClick={() => handleToggle(5)}
                >
                  <span className="fa fa-angle-right" />
                </div>
              </li>

              <li>
                <Link href="/contact" onClick={handleMobileMenu}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="fa fa-envelope" />
              <a href="mailto:needhelp@packageName__.com">
                needhelp@eventflow.com
              </a>
            </li>
            <li>
              <i className="fa fa-phone-alt" />
              <a href="tel:666-888-0000">666 888 0000</a>
            </li>
          </ul>
          {/* /.mobile-nav__contact */}
          <div className="mobile-nav__top">
            <div className="mobile-nav__social">
              <a href="#" className="fab fa-twitter" />
              <a href="#" className="fab fa-facebook-square" />
              <a href="#" className="fab fa-pinterest-p" />
              <a href="#" className="fab fa-instagram" />
            </div>
            {/* /.mobile-nav__social */}
          </div>
          {/* /.mobile-nav__top */}
        </div>
        {/* /.mobile-nav__content */}
      </div>

      <div
        className="nav-overlay"
        style={{ display: `${isSidebar ? "block" : "none"}` }}
        onClick={handleSidebar}
      />
    </>
  );
};
export default MobileMenu;
