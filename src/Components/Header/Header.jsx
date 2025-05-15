import React from 'react';
import headerCSS from './Header.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules'; // Enables click-and-drag sliding
import 'swiper/css'; // Core Swiper CSS
import { Autoplay ,Parallax} from 'swiper/modules';

const Header = () => {
  return (
    <div className={headerCSS.header_wrapper}>
      <Swiper
        className={headerCSS.swiper}
        // Only 1 slide visible
        mousewheel={{
          releaseOnEdges: true, // Allows scrolling to continue past edges
          forceToAxis: true,    // Only vertical scrolling
          invert: false,        // Normal scroll direction
          sensitivity: 1,       // Scroll sensitivity
          eventsTarget: 'container' // Only capture events on Swiper container
        }} // Allows click-and-drag sliding
        speed={1500}
        modules={[Mousewheel,Autoplay,Parallax]} // Load only Mousewheel module
        loop={true}
        parallax={true}
        autoplay={{
          delay: 1800,
          disableOnInteraction: false,
        }}
        
      >
        <SwiperSlide>
          <div className={`${headerCSS.header_slide} ${headerCSS.slide1}`}>
            <div className={headerCSS.content}>
              <small data-swiper-parallax="-200">Welcome to <span>SPACE</span>Z</small>
              <h2 data-swiper-parallax="-400">
                Experience the universe like never before with<br />
                <span>Luxury</span> Experience
              </h2>
              <p data-swiper-parallax="-600">Call Now:<span>9876543210</span></p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${headerCSS.header_slide} ${headerCSS.slide2}`}>
            <div className={headerCSS.content}>
              <small data-swiper-parallax="-200">Welcome to <span>SPACE</span>Z</small>
              <h2 data-swiper-parallax="-400">
                Experience the universe like never before with<br />
                <span>Luxury</span> Experience
              </h2>
              <p data-swiper-parallax="-600">Call Now:<span>9876543210</span></p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${headerCSS.header_slide} ${headerCSS.slide3}`}>
            <div className={headerCSS.content}>
              <small data-swiper-parallax="-200">Welcome to <span>SPACE</span>Z</small>
              <h2 data-swiper-parallax="-400">
                Experience the universe like never before with<br />
                <span>Luxury</span>Experience
              </h2>
              <p data-swiper-parallax="-600">Call Now:<span>9876543210</span></p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Header;