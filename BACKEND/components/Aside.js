import Link from "next/link";
import { IoHome } from "react-icons/io5";
import { BsPostcard } from "react-icons/bs";
import { GoBriefcase } from "react-icons/go";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GrGallery } from "react-icons/gr";
import { TiContacts } from "react-icons/ti";
import { IoSettingsOutline } from "react-icons/io5";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Aside() {
  const router = useRouter();

  const [clicked, setClicked] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleLinkClick = (link) => {
    setActiveLink((preActive) => (preActive === link ? null : link));
    setClicked(false);
  };

  useEffect(() => {
    setActiveLink(router.pathname);
  }, [router.pathname]);

  return (
    <>
      <aside className="asideleft active">
        <ul>
          <Link href="/">
            <li className="navactive">
              <IoHome />
              <span>Dashboard</span>
            </li>
          </Link>
          <li
            className={
              activeLink === "/blogs"
                ? "navactive flex-col flex-left"
                : "flex-col flex-left"
            }
            onClick={() => handleLinkClick("/blogs")}
          >
            <div className="flex gap-1">
              <BsPostcard />
              <span>Blogs</span>
            </div>
            {activeLink === "/blogs" && (
              <ul>
                <Link href="/">
                  <li>All Blogs</li>
                </Link>
                <Link href="/">
                  <li>Draft Blogs</li>
                </Link>
                <Link href="/">
                  <li>Add Blog</li>
                </Link>
              </ul>
            )}
          </li>
          <li
            className={
              activeLink === "/projects"
                ? "navactive flex-col flex-left"
                : "flex-col flex-left"
            }
            onClick={() => handleLinkClick("/projects")}
          >
            <div className="flex gap-1">
              <GoBriefcase />
              <span>Projects</span>
            </div>
            {activeLink === "/projects" && (
              <ul>
                <Link href="/">
                  <li>All Projects</li>
                </Link>
                <Link href="/">
                  <li>Draft Projects</li>
                </Link>
                <Link href="/">
                  <li>Add Project</li>
                </Link>
              </ul>
            )}
          </li>
          <li
            className={
              activeLink === "/shops"
                ? "navactive flex-col flex-left"
                : "flex-col flex-left"
            }
            onClick={() => handleLinkClick("/shops")}
          >
            <div className="flex gap-1">
              <MdOutlineShoppingCart />
              <span>Shops</span>
            </div>
            {activeLink === "/shops" && (
              <ul>
                <Link href="/">
                  <li>All Products</li>
                </Link>
                <Link href="/">
                  <li>Draft Products</li>
                </Link>
                <Link href="/">
                  <li>Add Product</li>
                </Link>
              </ul>
            )}
          </li>
          <li
            className={
              activeLink === "/gallery"
                ? "navactive flex-col flex-left"
                : "flex-col flex-left"
            }
            onClick={() => handleLinkClick("/gallery")}
          >
            <div className="flex gap-1">
              <GrGallery />
              <span>Gallery</span>
            </div>
            {activeLink === "/gallery" && (
              <ul>
                <Link href="/">
                  <li>All Photos</li>
                </Link>
                <Link href="/">
                  <li>Add Photo</li>
                </Link>
              </ul>
            )}
          </li>
          <Link href="/contacts">
            <li
              className={activeLink === "/contacts" ? "navactive" : ""}
              onClick={() => handleLinkClick("/contacts")}
            >
              <TiContacts />
              <span>Contacts</span>
            </li>
          </Link>
          <Link href="/Setting">
            <li
              className={activeLink === "/Setting" ? "navactive" : ""}
              onClick={() => handleLinkClick("/Setting")}
            >
              <IoSettingsOutline />
              <span>Settings</span>
            </li>
          </Link>
        </ul>
      </aside>
    </>
  );
}
