import Head from "next/head";
import Navbar from "../components/partials/Navbar";
import Card from "../components/partials/Card";
import SideCard from "../components/partials/SideCard";
import SmallCard from "../components/partials/SmallCard";
import Link from "next/link";
import NewsLetter from "@/components/partials/NewsLetter";
import Footer from "@/components/partials/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Rings } from "react-loader-spinner";

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
import { useEffect, useState } from "react";

export default function Home({ allPosts, allCategories }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

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
        <title>That's How</title>
      </Head>

      <div className="main-container">
        <Navbar allCategories={allCategories} />

        {/* Top Stories Section */}

        <div className="row w-100 mx-auto mt-4">
          <div className="col-md-7 m-0 p-0">
            <Card post={allPosts[0]} />
          </div>
          <div className="col-md-5 m-0 p-0">
            {allPosts.slice(1, 4).map((item, index) => (
              <SideCard post={item} />
            ))}
          </div>
        </div>
        <hr className="separator" />

        {/* Category 1 */}

        <div className="row w-100 mx-auto mt-4">
          <div className="col-md-12 m-0 p-0 mb-4">
            <h2 className="fs-30 fw-700 d-inline">{allCategories[0]?.name}</h2>
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
            {allPosts
              ?.filter((item) => item.categoryId._id === allCategories[0]?._id)
              .slice(0, 8)
              .map((item, index) => (
                <SwiperSlide>
                  <div className="col-12">
                    <SmallCard post={item} />
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>

        <hr className="separator" />

        {/* Category 2 */}

        <div className="row w-100 mx-auto mt-4">
          <div className="col-md-12 m-0 p-0 mb-4">
            <h2 className="fs-30 fw-700 d-inline">{allCategories[1]?.name}</h2>
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
            {allPosts
              ?.filter((item) => item.categoryId._id === allCategories[1]?._id)
              .slice(0, 8)
              .map((item, index) => (
                <SwiperSlide>
                  <div className="col-12">
                    <SmallCard post={item} />
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
        <hr className="separator" />
      </div>
      <div className="dark-container">
        {/* black one */}
        {/* Category 3 */}

        <div className="row w-100 mx-auto mt-4">
          <div className="col-md-12 m-0 p-0 mb-4">
            <h2 className="fs-30 fw-700 d-inline">{allCategories[2]?.name}</h2>
            <Link href="/category" className="link float-right text-white">
              See All
            </Link>
          </div>
          <div className="col-md-7 m-0 p-0">
            <Card
              post={
                allPosts?.filter((post) => {
                  return post.categoryId._id === allCategories[2]?._id;
                })[0]
              }
            />
          </div>
          <div className="col-md-5 m-0 p-0">
            {allPosts
              ?.filter((post) => post.categoryId._id === allCategories[2]?._id)
              .slice(1, 4)
              .map((item, index) => (
                <SideCard post={item} />
              ))}
          </div>
        </div>
      </div>
      <div className="main-container">
        <hr className="separator" />

        {/* Category 4 */}

        <div className="row w-100 mx-auto mt-4">
          <div className="col-md-12 m-0 p-0 mb-4">
            <h2 className="fs-30 fw-700 d-inline">{allCategories[3]?.name}</h2>
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
            {allPosts
              ?.filter((post) => post.categoryId._id === allCategories[3]?._id)
              .slice(0, 12)
              .map((item, index) => (
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
