import Head from "next/head";
import Link from "next/link";
import { BiDownload } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { FaCalendarDays, FaFacebookF, FaInstagram } from "react-icons/fa6";
import { GrLinkedinOption } from "react-icons/gr";
import { GoArrowUpRight } from "react-icons/go";
import { useEffect, useState } from "react";
import Spinner from "@/components/Spinner";
import { LuMedal } from "react-icons/lu";
import { PiGraduationCap } from "react-icons/pi";

export default function Home() {
  // acitve service background color
  const [activeIndex, setActiveIndex] = useState(0);

  const handleHover = (index) => {
    setActiveIndex(index);
  };

  const handleMouseOut = () => {
    setActiveIndex(0); // set the first item as active when mouse leaves
  };

  // services data
  const services = [
    {
      title: "Web Development",
      description:
        "I am very good in web development offering services, I offer reliable web development services to generate the most remarkable results which your business need.",
    },
    {
      title: "Mobile Development",
      description:
        "Experienced mobile developer offering innovative solutions. Proficient in creating high-performance, user-centric mobile apps. Expertise in iOS, Android, and cross-platform development.",
    },
    {
      title: "Digital Marketing(SEO)",
      description:
        "My digital marketing services will take your business to the next level, we offer remarkable digital marketing strategies that drives traffic to your website, your business, and improves your brand awareness to potential customers.",
    },
    {
      title: "Content Creator",
      description:
        "Passionate photographer and videographer capturing moments with creativity. Transforming visions into visual stories. Expert in visual storytelling, skilled in both photography and videography to deliver captivating content.",
    },
  ];

  const [loading, setLoading] = useState(true);
  const [alldata, setAlldata] = useState([]);
  const [allwork, setAllwork] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [projectResponse, blogsResponse] = await Promise.all([
          fetch("/api/projects"),
          fetch("/api/blogs"),
        ]);

        const projectData = await projectResponse.json();
        const blogData = await blogsResponse.json();

        setAlldata(projectData);
        setAllwork(blogData);
      } catch (error) {
        console.log("Error Fetching Data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // filter projects based on selectedCategory
    if (selectedCategory === "All") {
      setFilteredProjects(alldata.filter((pro) => pro.status === "publish"));
    } else {
      setFilteredProjects(
        alldata.filter(
          (pro) =>
            pro.status === "publish" &&
            pro.projectcategory[0] === selectedCategory
        )
      );
    }
  }, [selectedCategory, alldata]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // function to format the date

  const formatDate = (date) => {
    // check if date is valid
    if (!date || isNaN(date)) {
      return "";
    }

    const options = {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour12: true,
    };

    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  return (
    <>
      <Head>
        <title>vbmcoder - Personal Portfolio</title>
        <meta name="description" content="vbmcoder - Personal Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" type="image/png" href="/favicon.png" />
      </Head>

      {/* hero section */}
      <section className="hero">
        <div className="intro_text">
          <svg>
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              className="animate-stroke"
            >
              HI
            </text>
          </svg>
        </div>
        <div className="container">
          <div className="flex w-100">
            <div className="heroinfoleft">
              <span className="hero_sb_title" data-aos="fade-right">
                I am Mohamed
              </span>
              <h1 className="hero_title" data-aos="fade-right">
                Web Developer
              </h1>
              <div
                className="hero_img_box heroimgbox"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <img src="/img/me.jpg" alt="Mohamed ayad" />
              </div>
              <div className="lead" data-aos="fade-up">
                A small description about me
              </div>
              <div className="hero_btn_box" data-aos="fade-up">
                <Link
                  href="/"
                  download={"/img/resume.pdf"}
                  className="download_cv"
                >
                  Download CV <BiDownload />
                </Link>
                <ul className="hero_social">
                  <li>
                    <a href="/">
                      <FaInstagram />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <GrLinkedinOption />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <FaGithub />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* right side image section and you can edit the dark mode on the global style file */}
            <div className="heroimageright">
              <div
                className="hero_img_box"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <img src="/img/me.png" alt="Mohamed Ayad" />
              </div>
            </div>
          </div>
          <div className="funfect_area flex flex_">
            <div className="funfect_item" data-aos="flip-right">
              <h3>7+</h3>
              <h4>
                Year of <br /> Experience
              </h4>
            </div>
            <div className="funfect_item" data-aos="flip-right">
              <h3>20+</h3>
              <h4>
                Projects <br /> Complated
              </h4>
            </div>
            <div className="funfect_item" data-aos="flip-left">
              <h3>12+</h3>
              <h4>
                OpenSource <br /> Library
              </h4>
            </div>
            <div className="funfect_item" data-aos="flip-left">
              <h3>25+</h3>
              <h4>
                Happy <br /> Clints
              </h4>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="services">
        <div className="container">
          <div className="services_titles">
            <h2>My Quality Services</h2>
            <p>put a small description about my services</p>
          </div>
          <div className="services_menu">
            {services.map((service, index) => (
              <div
                key={index}
                className={`services_item ${
                  activeIndex === index ? "sactive" : ""
                }`}
                onMouseOver={() => handleHover(index)}
                onMouseOut={handleMouseOut}
              >
                <div className="left_s_box">
                  <span>0{index + 1}</span>
                  <h3>{service.title}</h3>
                </div>
                <div className="right_s_box">
                  <p>{service.description}</p>
                </div>
                <GoArrowUpRight />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="projects">
        <div className="container">
          <div className="project_titles">
            <h2>My Recent Work</h2>
            <p>give me a small description in this place</p>
          </div>
          <div className="project_buttons">
            <button
              className={selectedCategory === "All" ? "active" : ""}
              onClick={() => setSelectedCategory("All")}
            >
              All
            </button>
            <button
              className={
                selectedCategory === "Website Development" ? "active" : ""
              }
              onClick={() => setSelectedCategory("Website Development")}
            >
              Website
            </button>
            <button
              className={selectedCategory === "App Development" ? "active" : ""}
              onClick={() => setSelectedCategory("App Development")}
            >
              Apps
            </button>
            <button
              className={selectedCategory === "Design System" ? "active" : ""}
              onClick={() => setSelectedCategory("Design System")}
            >
              Design System
            </button>
          </div>
          <div className="projects_cards">
            {loading ? (
              <div className="flex flex-center wh_50">
                <Spinner />
              </div>
            ) : filteredProjects.length === 0 ? (
              <h1 className="w-100 flex flex-center mt-3">No Projects Found</h1>
            ) : (
              filteredProjects.slice(0, 4).map((pro) => (
                <Link href="/" key={pro._id} className="procard">
                  <div className="proimgbox">
                    <img src={pro.images[0]} alt={pro.title} />
                  </div>
                  <div className="procontentbox">
                    <h2>{pro.title}</h2>
                    <GoArrowUpRight />
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Experience study */}
      <section className="exstudy">
        <div className="container flex flex-left flex-sb">
          <div className="experience">
            <div className="experience_title flex gap-1">
              <LuMedal />
              <h2>My Experience</h2>
            </div>
            <div className="exper_cards">
              <div className="exper_card">
                <span>2023 - Present</span>
                <h3>DVTECH IT</h3>
                <p>Full Stack web Developer</p>
              </div>
              <div className="exper_card">
                <span>2022 - 2023</span>
                <h3>DVTECH IT</h3>
                <p>Full Stack web Developer</p>
              </div>
              <div className="exper_card">
                <span>2021 - 2022</span>
                <h3>DVTECH IT</h3>
                <p>Full Stack web Developer</p>
              </div>
              <div className="exper_card">
                <span>2020 - 2021</span>
                <h3>DVTECH IT</h3>
                <p>Full Stack web Developer</p>
              </div>
            </div>
          </div>
          <div className="education">
            <div className="experience_title flex gap-1">
              <PiGraduationCap />
              <h2>My Education</h2>
            </div>
            <div className="exper_cards">
              <div className="exper_card">
                <span>2023 - Present</span>
                <h3>DVTECH IT</h3>
                <p>Full Stack web Developer</p>
              </div>
              <div className="exper_card">
                <span>2022 - 2023</span>
                <h3>DVTECH IT</h3>
                <p>Full Stack web Developer</p>
              </div>
              <div className="exper_card">
                <span>2021 - 2022</span>
                <h3>DVTECH IT</h3>
                <p>Full Stack web Developer</p>
              </div>
              <div className="exper_card">
                <span>2020 - 2021</span>
                <h3>DVTECH IT</h3>
                <p>Full Stack web Developer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Skills */}
      <section className="myskills">
        <div className="container">
          <div className="myskills_title">
            <h2>My Skills</h2>
            <p>Put a small title here so you can show everything in breif</p>
          </div>
          <div className="myskils_cards">
            <div className="mys_card">
              <div className="mys_inner">
                <img src="/img/python.svg" alt="python" />
                <p className="text-center">Python</p>
              </div>
            </div>
            <div className="mys_card">
              <div className="mys_inner">
                <img src="/img/python.svg" alt="python" />
                <p className="text-center">Python</p>
              </div>
            </div>
            <div className="mys_card">
              <div className="mys_inner">
                <img src="/img/python.svg" alt="python" />
                <p className="text-center">Python</p>
              </div>
            </div>
            <div className="mys_card">
              <div className="mys_inner">
                <img src="/img/python.svg" alt="python" />
                <p className="text-center">Python</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Blogs */}
      <section className="recentblogs">
        <div className="container">
          <div className="myskills_title">
            <h2>Recent Blogs</h2>
            <p>put a small description here if you want sir</p>
          </div>
          <div className="recent_blogs">
            {allwork.slice(0, 3).map((blog) => {
              return (
                <Link
                  href={`/blogs/${blog.slug}`}
                  key={blog._id}
                  className="re_blog"
                >
                  <div className="re_blogimg">
                    <img
                      src={blog.images[0] || "/img/noimage.png"}
                      alt={blog.title}
                    />
                    <span>{blog.blogcategory}</span>
                  </div>
                  <div className="re_bloginfo">
                    <div className="re_topdate flex gap-1">
                      <div className="res_date">
                        <FaCalendarDays />{" "}
                        <span>{formatDate(new Date(blog.createdAt))}</span>
                      </div>
                    </div>
                    <h2>{blog.title}</h2>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
