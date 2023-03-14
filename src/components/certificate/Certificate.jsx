import React from "react";
import "./Certificate.css";
import C1 from "../../Assets/certificate1.jpg";
import C2 from "../../Assets/certificate2.jpg";
import C3 from "../../Assets/certificate3.jpg";
import C4 from "../../Assets/certificate4.jpg";
import C5 from "../../Assets/certificate5.jpg";
import C6 from "../../Assets/certificate6.jpg";
import C7 from "../../Assets/certificate7.jpg";
import L1 from "../../Assets/learn tube 1.jpg";
import L2 from "../../Assets/learn tube 2.jpg";
import logo from "../../Assets/logo123.png";

import google from "../../Assets/google.png";
import meta from "../../Assets/meta.png";
import infosys from "../../Assets/infosys.png";

import { Swiper, SwiperSlide } from 'swiper/react';
import {  Pagination, } from 'swiper';


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


function Certificate() {
  return (
    <>
  <div className="certificate-container" id="certificate">
    <div className="experience-title" data-aos="zoom-in-up">
          <p className="experience-p1"> What Certification I Have</p>
          <p className="experience-p2"> My Certificate</p>
        </div>
        <div className="experience-logo" data-aos="fade-up"
          data-aos-anchor-placement="top-bottom">
           <img src={logo} alt="" />
        </div>
     
    </div>

      <div className="certification" data-aos="zoom-in-up">
      <Swiper className="container achivement__container"
           // install Swiper modules
           modules={[Pagination]}
           spaceBetween={40}
           slidesPerView={1}
           pagination={{ clickable: true }}
      >
         <SwiperSlide className="achivement">
          <div className="certificate__img">
            <img src={meta} alt="" />
          </div>
         
        </SwiperSlide>

        <SwiperSlide className="achivement">
          <div className="certificate__img">
            <img src={google} alt="" />
          </div>
         
        </SwiperSlide>

        <SwiperSlide className="achivement">
          <div className="certificate__img">
            <img src={infosys} alt="" />
          </div>
         
        </SwiperSlide>

        <SwiperSlide className="achivement">
          <div className="certificate__img">
            <img src={L1} alt="" />
          </div>
         
        </SwiperSlide>

        <SwiperSlide className="achivement">
          <div className="certificate__img">
            <img src={L2} alt="" />
          </div>
         
        </SwiperSlide>

        <SwiperSlide className="achivement">
          <div className="certificate__img">
            <img src={C1} alt="" />
          </div>
         
        </SwiperSlide>

        <SwiperSlide className="achivement">
          <div className="certificate__img">
            <img src={C2} alt="" />
          </div>
        
        </SwiperSlide>

        <SwiperSlide className="achivement">
          <div className="certificate__img">
            <img src={C3} alt="" />
          </div>
         
        </SwiperSlide>

        <SwiperSlide className="achivement">
          <div className="certificate__img">
            <img src={C5} alt="" />
          </div>
        </SwiperSlide>

        <SwiperSlide className="achivement">
          <div className="certificate__img">
            <img src={C4} alt="" />
          </div>
        
        </SwiperSlide>

        <SwiperSlide className="achivement">
          <div className="certificate__img">
            <img src={C6} alt="" />
          </div>
         
        </SwiperSlide>

        <SwiperSlide className="achivement">
          <div className="certificate__img">
            <img src={C7} alt="" />
          </div>
        
        </SwiperSlide>
      </Swiper>
    </div>


    
    </>
  );
}

export default Certificate;
