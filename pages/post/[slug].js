import React, { useEffect, useState } from "react";
import data from "../../data";
import Head from "next/head";
import Navbar from "@/components/partials/Navbar";
import SideCard from "@/components/partials/SideCard";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router.js";
import { Base_URL } from "@/config.js";
import InnerHTML from "dangerously-set-html-content";
import { Rings } from "react-loader-spinner";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import {
  Autoplay,
  Navigation,
  Mousewheel,
  Keyboard,
  Pagination,
} from "swiper/modules";
import SmallCard from "@/components/partials/SmallCard";
import NewsLetter from "@/components/partials/NewsLetter";
import Footer from "@/components/partials/Footer";

function SinglePost({ allPosts, allCategories }) {
  const [slug, setSlug] = useState(null);
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState();

  const breakpoints = {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 4,
    },
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      const { slug } = router.query;
      if (!slug) return null;
      setSlug(slug);
    }
  }, [router.isReady, router.query]);

  const post = allPosts.find((post) => post.slug === slug);
  const relatedPosts = allPosts.filter(
    (item) =>
      item.categoryId._id === post?.categoryId?._id && item.slug !== post?.slug
  );

  if (loading)
    return (
      <>
        <Head>
          <title>That's How</title>
        </Head>
        <Rings
          height="200px"
          width="200px"
          radius={1}
          color="#c70d0d"
          wrapperStyle={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
          wrapperClass=""
          visible={true}
          ariaLabel="rings-loading"
        />
      </>
    );

  return (
    <>
      <Head>
        <title>That's How | {post?.title.slice(0, 10)}</title>
      </Head>
      <div className="main-container">
        <Navbar allCategories={allCategories} />
        <div className="row w-100 mx-auto mt-4">
          <div className="col-md-8 m-0 p-0">
            <img
              src={
                post?.image
                  ? `${Base_URL}public/posts/${post?.image}`
                  : `/assets/images/placeholder.jpg`
              }
              className="single-post-main-img"
            />
            <h1 className="fs-35 fw-700 mt-4">{post?.title}</h1>

            <InnerHTML
              className="single-post-content"
              html={post?.content}
              key={post?._id}
            />
          </div>
          <div className="col-md-4 m-0 p-0">
            <div className="ml-0 ml-md-4 dark-background text-white text-center mb-3 py-3 hover-red">
              <h2 className="fs-30 fw-700">Related News</h2>
            </div>
            <div className="single-post-related-posts-container">
              {relatedPosts.slice(0, 10).map((item, index) => (
                <SideCard post={item} />
              ))}
            </div>
          </div>
        </div>
        <hr className="separator" />

        {/* Category */}

        <div className="row w-100 mx-auto mt-4">
          <div className="col-md-12 m-0 p-0 mb-4">
            <h2 className="fs-30 fw-700 d-inline">
              More Articles on{" "}
              {
                allCategories.find((item) => item._id === post?.categoryId?._id)
                  .name
              }
            </h2>
            <Link href="/category" className="link text-black float-right">
              See All
            </Link>
          </div>

          <Swiper
            className="p-5"
            slidesPerView={4}
            pagination={{ clickable: true }}
            navigation={true}
            loop={true}
            modules={[Autoplay, Mousewheel, Keyboard, Pagination, Navigation]}
            speed={1000}
            spaceBetween={30}
            Mousewheel={true}
            Keyboard={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            breakpoints={breakpoints}
          >
            {relatedPosts.slice(0, 8).map((item, index) => (
              <SwiperSlide>
                <div className="col-12">
                  <SmallCard post={item} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* news letter */}

      <NewsLetter />
      <Footer />
    </>
  );
}

export default SinglePost;
