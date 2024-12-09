import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { IoMoonSharp } from "react-icons/io5";
import { LuSun, LuSunMoon } from "react-icons/lu";

export default function Header() {
  // darkmode on off
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // check local storage for dark mode preference on initial load
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    // apply dark mode styles when darkmode state changes
    if (darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("darkMode", true);
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("darkMode", false);
    }
  }, [darkMode]);

  // toggle darkmode function
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // navlist active
  const router = useRouter();
  const [clicked, setClicked] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setClicked(false);
  };

  useEffect(() => {
    // update active link state when the page is reloaded
    setActiveLink(router.pathname);
  }, [router.pathname]);

  // mobile nabar
  const [mobile, setMobile] = useState(false);

  // open
  const handleMobileOpen = () => {
    setMobile(!mobile);
  };

  // close
  const handleMobileClose = () => {
    setMobile(false);
  };
  return (
    <>
      <header>
        <nav className="container flex flex-sb">
          <div className="logo flex gap-2">
            <Link href="/">
              <img src={`/img/${darkMode ? "white" : "logo"}.png`} alt="logo" />
            </Link>
            <h2>Mohamed Ayad</h2>
          </div>
          <div className="navlist flex gap-2">
            <ul className="flex gap-2">
              <li>
                <Link
                  href="/"
                  onClick={() => handleLinkClick("/")}
                  className={activeLink === "/" ? "active" : ""}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  onClick={() => handleLinkClick("/blogs")}
                  className={activeLink === "/blogs" ? "active" : ""}
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  onClick={() => handleLinkClick("/gallery")}
                  className={activeLink === "/gallery" ? "active" : ""}
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  onClick={() => handleLinkClick("/services")}
                  className={activeLink === "/services" ? "active" : ""}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  onClick={() => handleLinkClick("/projects")}
                  className={activeLink === "/projects" ? "active" : ""}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  onClick={() => handleLinkClick("/shop")}
                  className={activeLink === "/shop" ? "active" : ""}
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  onClick={() => handleLinkClick("/contact")}
                  className={activeLink === "/contact" ? "active" : ""}
                >
                  Contact
                </Link>
              </li>
            </ul>
            <div className="darkmodetoggle" onClick={toggleDarkMode}>
              {darkMode ? <IoMoonSharp /> : <LuSun />}
            </div>
            <button>
              <Link href="/contact">Hire Me!</Link>
            </button>
            <div className="mobiletogglesvg" onClick={handleMobileOpen}>
              <HiMiniBars3BottomRight />
            </div>
          </div>
          <div className={mobile ? "mobilenavlist active" : "mobilenavlist"}>
            <span
              onClick={handleMobileClose}
              className={mobile ? "active" : ""}
            >
              {/* <h2 className="flex flex-center">Click Here</h2> */}
            </span>
            <div className="mobilelogo">
              <img src="/img/white.png" alt="logo" />
              <h2>Ayad</h2>
            </div>
            <ul
              className="flex gap-1 flex-col flex-left mt-3"
              onClick={handleMobileClose}
            >
              <li>
                <Link
                  href="/"
                  onClick={() => handleLinkClick("/")}
                  className={activeLink === "/" ? "active" : ""}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  onClick={() => handleLinkClick("/blogs")}
                  className={activeLink === "/blogs" ? "active" : ""}
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  onClick={() => handleLinkClick("/gallery")}
                  className={activeLink === "/gallery" ? "active" : ""}
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  onClick={() => handleLinkClick("/services")}
                  className={activeLink === "/services" ? "active" : ""}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  onClick={() => handleLinkClick("/projects")}
                  className={activeLink === "/projects" ? "active" : ""}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  onClick={() => handleLinkClick("/shop")}
                  className={activeLink === "/shop" ? "active" : ""}
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  onClick={() => handleLinkClick("/contact")}
                  className={activeLink === "/contact" ? "active" : ""}
                >
                  Contact
                </Link>
              </li>
            </ul>
            <p>Copyright &copy; 2025 | Mohamed Ayad</p>
          </div>
        </nav>
      </header>
    </>
  );
}
