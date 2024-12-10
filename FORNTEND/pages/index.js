import Head from "next/head";
import Link from "next/link";
import { BiDownload } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import { GrLinkedinOption } from "react-icons/gr";
import { GoArrowUpRight } from "react-icons/go";
import { useEffect, useState } from "react";
import Spinner from "@/components/Spinner";

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [projectResponse, blogsResponse] = await Promise.all([
          fetch("/api/projects"),
        ]);

        const projectData = await projectResponse.json();

        setAlldata(projectData);
      } catch (error) {
        console.log("Error Fetching Data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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
              <span className="hero_sb_title">I am Mohamed</span>
              <h1 className="hero_title">Web Developer</h1>
              <div className="hero_img_box heroimgbox">
                <img src="/img/me.jpg" alt="Mohamed ayad" />
              </div>
              <div className="lead">A small description about me</div>
              <div className="hero_btn_box">
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
              <div className="hero_img_box">
                <img src="/img/me.png" alt="Mohamed Ayad" />
              </div>
            </div>
          </div>
          <div className="funfect_area flex flex_">
            <div className="funfect_item">
              <h3>7+</h3>
              <h4>
                Year of <br /> Experience
              </h4>
            </div>
            <div className="funfect_item">
              <h3>20+</h3>
              <h4>
                Projects <br /> Complated
              </h4>
            </div>
            <div className="funfect_item">
              <h3>12+</h3>
              <h4>
                OpenSource <br /> Library
              </h4>
            </div>
            <div className="funfect_item">
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
            <button>All</button>
            <button>Website</button>
            <button>Apps</button>
            <button>UI/UX</button>
          </div>
          <div className="projects_cards">
            {loading ? (
              <Spinner />
            ) : (
              alldata.slice(0, 4).map((pro) => (
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
      <section className="exstudy"></section>

      {/* My Skills */}
      <section className="myskills"></section>

      {/* Recent Blogs */}
      <section className="recentblogs"></section>
    </>
  );
}
