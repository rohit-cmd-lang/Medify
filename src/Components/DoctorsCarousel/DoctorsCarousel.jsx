import React from "react";
import "./DoctorsCarousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import doctorHeena from "../../assets/doctor-heena.png";
import doctorAnkur from "../../assets/doctor-ankur.png";
import doctorAhmad from "../../assets/doctorAhmed.png";
import lesleyHull from "../../assets/doctorLesley.png";
import doctorStevens from "../../assets/doctorStevens.png";

// Import Swiper styles
import "swiper/css";

const DoctorsCarousel = () => {
  return (
    <div className="doctors-carousel">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView="auto"
        centeredSlides={false}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
      >
        <SwiperSlide style={{ width: "auto" }}>
          <div className="slide">
            <div className="slide-img">
              <img src={doctorAnkur} alt="doctor heena" />
            </div>
            <p className="slide-name">Dr. Ankur Sharma</p>
            <p className="slide-specialisation">Medicine</p>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ width: "auto" }}>
          <div className="slide">
            <div className="slide-img">
              <img src={doctorAhmad} alt="" />
            </div>
            <p className="slide-name">Dr. Ahmad Khan</p>
            <p className="slide-specialisation">Neurologist</p>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ width: "auto" }}>
          <div className="slide">
            <div className="slide-img">
              <img src={lesleyHull} alt="doctor lesley" />
            </div>
            <p className="slide-name">Dr. Lesley Hull</p>
            <p className="slide-specialisation">Oncologist</p>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ width: "auto" }}>
          <div className="slide">
            <div className="slide-img">
              <img src={doctorStevens} alt="" />
            </div>
            <p className="slide-name">Dr. Stevens</p>
            <p className="slide-specialisation">Andrologist</p>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ width: "auto" }}>
          <div className="slide">
            <div className="slide-img">
              <img src={doctorHeena} alt="doctor heena" />
            </div>
            <p className="slide-name">Dr. Heena Sachdeva</p>
            <p className="slide-specialisation">Orthopadics</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default DoctorsCarousel;
