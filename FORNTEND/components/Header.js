import Link from "next/link";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { IoMoonSharp } from "react-icons/io5";
import { LuSun, LuSunMoon } from "react-icons/lu";

export default function Header() {
  return (
    <>
      <header>
        <nav className="container flex flex-sb">
          <div className="logo flex gap-2">
            <Link href="/">
              <img src="/img/logo.png" alt="logo" />
            </Link>
            <h2>Mohamed Ayad</h2>
          </div>
          <div className="navlist flex gap-2">
            <ul className="flex gap-2">
              <li>
                <Link href="/" className="active">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/">Services</Link>
              </li>
              <li>
                <Link href="/">Projects</Link>
              </li>
              <li>
                <Link href="/">Blogs</Link>
              </li>
              <li>
                <Link href="/">Shop</Link>
              </li>
              <li>
                <Link href="/">Contact</Link>
              </li>
            </ul>
            <div className="darkmodetoggle">
              <IoMoonSharp />
            </div>
            <button>
              <Link href="/contact">Hire Me!</Link>
            </button>
            <div className="mobiletogglesvg">
              <HiMiniBars3BottomRight />
            </div>
          </div>
          <div className="mobilenavlist active">
            <span className="active"></span>
            <div className="mobilelogo">
              <img src="/img/white.png" alt="logo" />
              <h2>Ayad</h2>
            </div>
            <ul className="flex gap-1 flex-col flex-left mt-3">
              <li>
                <Link href="/" className="active">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blogs">Blogs</Link>
              </li>
              <li>
                <Link href="/gallery">Gallery</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/projects">Projects</Link>
              </li>
              <li>
                <Link href="/shop">Shop</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
            <p>Copyright &copy; 2025 | Mohamed Ayad</p>
          </div>
        </nav>
      </header>
    </>
  );
}
