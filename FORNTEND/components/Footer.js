import Link from "next/link";
import { FaFacebookF, FaGithub, FaTwitch, FaTwitter } from "react-icons/fa6";
import { GrLinkedinOption } from "react-icons/gr";
import { LiaBasketballBallSolid } from "react-icons/lia";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footersec flex flex-center flex-col gap-2">
          <div className="logo">
            <img src="/img/logo.png" alt="logo" />
          </div>
          <div className="ul flex gap-2">
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/services">Works</Link>
            </li>
            <li>
              <Link href="/services">Resume</Link>
            </li>
            <li>
              <Link href="/services">Skills</Link>
            </li>
            <li>
              <Link href="/services">Testimonials</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </div>
          <ul className="hero_social">
            <li>
              <Link href="/" target="_blank">
                <FaTwitch />
              </Link>
            </li>
            <li>
              <Link href="/" target="_blank">
                <FaTwitch />
              </Link>
            </li>
            <li>
              <Link href="/" target="_blank">
                <FaTwitch />
              </Link>
            </li>
            <li>
              <Link href="/" target="_blank">
                <FaTwitch />
              </Link>
            </li>
          </ul>
          <div className="copyrights">
            &copy; 2025 All Rights Reseved By <span>Mohamed Ayad</span>
          </div>
        </div>
      </footer>
    </>
  );
}
