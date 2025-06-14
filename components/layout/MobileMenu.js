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
              <img style={{ width: "135px", height: "auto" }} src="assets/images/logo.svg" alt="Logo" />
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
                <Link href="/services" onClick={handleMobileMenu}>
                  Services
                </Link>
              </li>

              <li className={isActive.key == 4 ? "dropdown current" : "dropdown"}>
                <Link href="/event" onClick={handleMobileMenu}>
                  Events
                </Link>
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
              <a href="mailto:markhorevents@gmail.com">
                markhorevents@gmail.com
              </a>
            </li>
            <li>
              <i className="fa fa-phone-alt" />
              <a href="tel:+9233278227842">+92 332 78227842</a>
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
