import { Swiper, SwiperSlide } from "swiper/react";
import useFetchData from "@/hooks/useFetchData";
import Link from "next/link";
import { useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { FreeMode } from "swiper/modules";
import Head from "next/head";
import Spinner from "@/components/Spinner";

export default function blogs() {
  // pagination
  const [currentPage, setCurrentPage] = useState(1); // for page 1
  const [perPage] = useState(7);

  // search
  const [searchQuery, setSearchQuery] = useState("");

  //fetch blog data
  const { alldata, loading } = useFetchData("/api/blogs");

  //function to handle page change
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // total number of blogs
  const allblog = alldata.length;

  // filter all data based on search query
  const filteredBlogs =
    searchQuery.trim() === ""
      ? alldata
      : alldata.filter((blog) =>
          blog.title.toLowerCase().includes(searchQuery.toLowerCase())
        );

  // calculate index of the first blog displayed onthe currend page
  const indexOfFirstBlog = (currentPage - 1) * perPage;
  const indexofLastBlog = currentPage * perPage;

  // get the current page's blogs
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexofLastBlog);
  const publishedData = currentBlogs.filter((ab) => ab.status === "publish");
  const sliderpubdata = alldata.filter((ab) => ab.status === "publish");
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allblog / perPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <Head>
        <title>Blogs</title>
      </Head>
      <div className="blogpage">
        <section className="tophero">
          <div className="container">
            <div className="toptitle">
              <div className="toptitlecont flex">
                <h1>
                  Welcome to <span>Ayad's Blogs!</span>
                </h1>
                <p>I write about web development and about the modern tech</p>
                <div className="subemail">
                  <form className="flex">
                    <input type="text" placeholder="Search here..." />
                    <button>Search</button>
                  </form>
                </div>
              </div>
            </div>
            <div className="featured">
              <div className="container">
                <div className="border"></div>
                <div className="featuredposts">
                  <div className="feltitle flex">
                    <h3>Featured Posts :</h3>
                  </div>
                  <div className="feposts flex">
                    <Swiper
                      slidesPerView={"auto"}
                      freeMode={true}
                      spaceBetween={30}
                      className="mySwiper"
                      modules={FreeMode}
                    >
                      {loading ? (
                        <div className="flex flex-center wh_50">
                          <Spinner />
                        </div>
                      ) : (
                        <>
                          {sliderpubdata.slice(0, 6).map((blog) => {
                            return (
                              <SwiperSlide key={blog._id}>
                                <div className="fpost" key={blog._id}>
                                  <Link href={`/blogs/${blog.slug}`}>
                                    <img
                                      src={blog.images[0]}
                                      alt={blog.title}
                                    />
                                  </Link>
                                  <div className="fpostinfo">
                                    <div className="tags flex">
                                      {blog.blogcategory.map((cat) => {
                                        return (
                                          <Link
                                            href={`/blog/category${cat}`}
                                            className="ai"
                                          >
                                            <span></span>
                                            {cat}
                                          </Link>
                                        );
                                      })}
                                    </div>
                                    <h2>
                                      <Link href={`/blogs/${blog.slug}`}>
                                        {blog.title}
                                      </Link>
                                    </h2>
                                    <div className="fpostby flex">
                                      <img src="/img/coder.jpg" alt="ayad" />
                                      <p>By mohamed ayad</p>
                                    </div>
                                  </div>
                                </div>
                              </SwiperSlide>
                            );
                          })}
                        </>
                      )}
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="populartegssec">
          <div className="container">
            <div className="border"></div>
            <div className="populartegsdata">
              <div className="fetitle">
                <h3>Popular</h3>
              </div>
              <div className="poputegs">
                <Link href="/blog/category/Next Js" className="pteg">
                  <img src="/img/logo.png" alt="logo" />
                  <div className="tegs">
                    <div className="apps">
                      <span>Next Js</span>
                    </div>
                  </div>
                </Link>
                <Link href="/blog/category/Js" className="pteg">
                  <img src="/img/logo.png" alt="logo" />
                  <div className="tegs">
                    <div className="apps">
                      <span>Next Js</span>
                    </div>
                  </div>
                </Link>
                <Link href="/blog/category/css" className="pteg">
                  <img src="/img/logo.png" alt="logo" />
                  <div className="tegs">
                    <div className="apps">
                      <span>Next Js</span>
                    </div>
                  </div>
                </Link>
                <Link href="/blog/category/fafaf" className="pteg">
                  <img src="/img/logo.png" alt="logo" />
                  <div className="tegs">
                    <div className="apps">
                      <span>Next Js</span>
                    </div>
                  </div>
                </Link>
                <Link href="/blog/category/fadfafd" className="pteg">
                  <img src="/img/logo.png" alt="logo" />
                  <div className="tegs">
                    <div className="apps">
                      <span>Next Js</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <div className="latestpostsec">
          <div className="contatiner">
            <div className="border"></div>
            <div className="latestpostsdata">
              <div className="fatitle">
                <h3>Latest Articles</h3>
              </div>
              <div className="latestposts">
                {loading ? (
                  <div className="flex flex-center wh_50">
                    <Spinner />
                  </div>
                ) : (
                  <>
                    {publishedData.map((blog) => {
                      return (
                        <div className="lpost" key={blog._id}>
                          <div className="lpostimg">
                            <Link href={`/blogs/${blog.slug}`}>
                              <img src={blog.images[0]} alt={blog.title} />
                            </Link>
                            <div className="tegs">
                              {blog.blogcategory.map((cat) => {
                                return (
                                  <Link
                                    href={`/blog/category${cat}`}
                                    className="ai"
                                  >
                                    <span></span>
                                    {cat}
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                          <div className="lpostinfo">
                            <h3>
                              <Link href={`/blogs/${blog.slug}`}>
                                {blog.title}
                              </Link>
                            </h3>
                            <p>
                              Lorem, ipsum dolor sit amet consectetur
                              adipisicing elit. Voluptatum aspernatur non
                              maiores magni quibusdam dignissimos adipisci,
                              accusamus alias quas tempora consectetur
                              reiciendis. Id quasi ab eveniet animi aliquam
                              optio accusamus!
                            </p>
                            <h4 className="flex">
                              <img src="/img/coder.jpg" alt="" />
                              By mohamed Ayad
                            </h4>
                          </div>
                        </div>
                      );
                    })}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
