import Link from "next/link"
import Menu from "../OnePageMenu1"
import MobileMenu from "../OnePageMobileMenu1"
export default function Header1({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
  return (

    <header className={`main-header ${scroll ? "fixed-header" : ""}`}>
      <nav className="main-menu">
        <div className="main-menu__wrapper">
          <div className="main-menu__wrapper-inner">
            <div className="main-menu__left">
              <Link href="/">
                <img style={{ width: "135px", height: "auto" }} src="https://res.cloudinary.com/dneh5diea/image/upload/v1749922471/Blog/Base/hgfbjdvzjj5hfrphsczg.svg" alt="Logo" />
              </Link>
            </div>
            <div className="main-menu__main-menu-box">
              <div className="mobile-nav__toggler" onClick={handleMobileMenu}>
                <i className="fa fa-bars" />
              </div>
              <Menu />
            </div>
            <div className="main-menu__right">
              <div className="main-menu__cart-search-nav-sidebar-icon-and-btn-box">
                <a href="#" className="main-menu__search search-toggler" onClick={handlePopup}>
                  <span className="icon-loupe"></span>
                </a>
                <div className="main-menu__nav-sidebar-icon" onClick={handleSidebar}>
                  <div className="navSidebar-button">
                    <span className="icon-menu1"></span>
                  </div>
                </div>
              </div>
              <div className="main-menu__btn-box">
                <Link href="/contact" className="main-menu__btn thm-btn">
                  Buy Ticket <span className="icon-arrow-right"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className={`stricky-header stricked-menu main-menu ${scroll ? "stricky-fixed" : ""}`}>
        <div className="sticky-header__content" />
        <nav className="main-menu">
          <div className="main-menu__wrapper">
            <div className="main-menu__wrapper-inner">
              <div className="main-menu__left">
                <Link href="/">
                  <img style={{ width: "135px", height: "auto" }} src="https://res.cloudinary.com/dneh5diea/image/upload/v1749922471/Blog/Base/hgfbjdvzjj5hfrphsczg.svg" alt="Logo" />
                </Link>
              </div>
              <div className="main-menu__main-menu-box">
                <div className="mobile-nav__toggler" onClick={handleMobileMenu}>
                  <i className="fa fa-bars" />
                </div>
                <Menu />
              </div>
              <div className="main-menu__right">
                <div className="main-menu__cart-search-nav-sidebar-icon-and-btn-box">
                  <div className="main-menu__search search-toggler" onClick={handlePopup}>
                    <span className="icon-loupe"></span>
                  </div>
                  <div className="main-menu__nav-sidebar-icon" onClick={handleSidebar}>
                    <div className="navSidebar-button">
                      <span className="icon-menu1"></span>
                    </div>
                  </div>
                </div>
                <div className="main-menu__btn-box">
                  <Link href="/contact" className="main-menu__btn thm-btn">
                    Buy Ticket <span className="icon-arrow-right"></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <MobileMenu handleMobileMenu={handleMobileMenu} handleSidebar={handleSidebar} isSidebar={isSidebar} />
    </header>

  )
}