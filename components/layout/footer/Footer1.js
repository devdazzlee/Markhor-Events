import Link from 'next/link';

export default function Footer1() {
    return (
        <>
            {/* Site Footer Start */}
            <footer className="site-footer">
                <div className="site-footer__shape-1 float-bob-y">
                    <img style={{ width: "135px", height: "auto" }} src="assets/images/logo.svg" alt="Logo" />
                </div>
                <div className="site-footer__top">
                    <div className="container">
                        <div className="site-footer__top-inner">
                            <div className="site-footer__logo">
                                <Link href="/">
                                    <img style={{ width: "135px", height: "auto" }} src="assets/images/logo.svg" alt="Logo" />
                                </Link>
                            </div>
                            <div className="site-footer__social">
                                <Link href="#"><i className="icon-facebook"></i></Link>
                                <Link href="#"><i className="icon-fi"></i></Link>
                                <Link href="#"><i className="icon-instagram"></i></Link>
                                <Link href="#"><i className="icon-pinterest"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-footer__middle">
                    <div className="container">
                        <div className="site-footer__middle-inner">
                            <div className="row">
                                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                                    <div className="footer-widget__column footer-widget__events">
                                        <div className="footer-widget__title-box">
                                            <h3 className="footer-widget__title">Upcoming Events</h3>
                                        </div>
                                        <ul className="footer-widget__events-list list-unstyled">
                                            <li>
                                                <p>15 June 2024 at 9:00 PM in DHA Karachi</p>
                                                <h5>Markhor Night Party</h5>
                                                <Link href="/contact">Get a Ticket <span className="icon-arrow-right"></span></Link>
                                            </li>
                                            <li>
                                                <p>29 June 2024 at 8:30 PM in Clifton Beach Karachi</p>
                                                <h5>Sunset Live Concert</h5>
                                                <Link href="/contact">Get a Ticket <span className="icon-arrow-right"></span></Link>
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                                    <div className="footer-widget__column footer-widget__link">
                                        <div className="footer-widget__title-box">
                                            <h3 className="footer-widget__title">Quick links</h3>
                                        </div>
                                        <ul className="footer-widget__link-list list-unstyled">
                                            <li><Link href="/about">About Us</Link></li>
                                            <li><Link href="/services">Service</Link></li>
                                            <li><Link href="/contact">Online Ticket</Link></li>
                                            <li><Link href="/contact">Contact Us</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                                    <div className="footer-widget__column footer-widget__contact">
                                        <div className="footer-widget__title-box">
                                            <h3 className="footer-widget__title">Contact</h3>
                                        </div>
                                        <div className="footer-widget__contact-inner">
                                            <ul className="footer-widget__contact-list list-unstyled">
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-envelop"></span>
                                                    </div>
                                                    <div className="text">
                                                        <p>
                                                            <a href="mailto:markhorevents@gmail.com">
                                                                markhorevents@gmail.com
                                                            </a>
                                                        </p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-pin"></span>
                                                    </div>
                                                    <div className="text">
                                                        <p>DHA Phase 6, Karachi, Pakistan</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-call"></span>
                                                    </div>
                                                    <div className="text">
                                                        <p>
                                                            <a href="tel:+9233278227842">+92 332 78227842</a>
                                                        </p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-footer__bottom">
                    <div className="container">
                        <div className="site-footer__bottom-inner">
                            <p className="site-footer__bottom-text">© Markhor Events {new Date().getFullYear()} | All Rights Reserved</p>
                            <ul className="list-unstyled site-footer__bottom-menu">
                                <li><Link href="/terms-conditions">Terms & Condition</Link></li>
                                <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                                <li><Link href="/about">Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            {/* Site Footer End */}
        </>
    );
}
