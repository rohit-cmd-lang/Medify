import React from "react";
import "./DoctorsCarousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import doctorHeena from "../../assets/doctor-heena.png";
import doctorAnkur from "../../assets/doctor-ankur.png";
import doctorAhmad from "../../assets/doctor-ahmad.png";
import lesleyHull from "../../assets/lesley-hull.png";
import doctorStevens from "../../assets/ahmad-stevens.png";

// Import Swiper styles
import "swiper/css";

const DoctorsCarousel = () => {
  return (
    <div className="doctors-carousel">
      <Swiper
        modules={[Pagination]}
        spaceBetween={0}
        slidesPerView={3.8}
        centeredSlides={true}
        loop={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className="slide">
            <div className="slide-img">
              <img src={doctorHeena} alt="doctor heena" />
            </div>
            <p className="slide-name">Dr. Heena Sachdeva</p>
            <p className="slide-specialisation">Orthopadics</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">slide2</SwiperSlide>
        <SwiperSlide className="slide">slide3</SwiperSlide>
        <SwiperSlide className="slide">slide4</SwiperSlide>
        <SwiperSlide className="slide">slide5</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default DoctorsCarousel;
