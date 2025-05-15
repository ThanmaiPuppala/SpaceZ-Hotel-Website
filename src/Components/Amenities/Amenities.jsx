import React from 'react'
import amenCSS from './Amenities.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import img1 from '../../assets/pool.jpg'
import img2 from '../../assets/gym.jpg'
import img3 from '../../assets/rest.jpg'

const Amenities = () => {
  return (
    <div id="blog" className={`${amenCSS.amen_wrapper} section`}>
        <h2 className='section_Title'>Our Best <span>Amenities</span></h2>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        speed={2000}
        modules={[Autoplay]}
        autoplay={{
            delay:1000,
        }}
        
        className={amenCSS.swiper}
        >
            <SwiperSlide>
                <div className={amenCSS.amen_item}>
                    <img src={img1} alt="amenities-img" />
                    <div className={amenCSS.content}>
                        <h2>Swimming Pool</h2>
                        <p>SpaceZ swimming pools offer a refreshing escape with luxurious designs, from infinity edges to rooftop panoramas. Many feature heated water, swim-up bars, and stunning views for ultimate relaxation. Dive into crystal-clear waters for a perfect blend of leisure and luxury.</p>
                        <button>Explore Now!</button>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className={amenCSS.amen_item}>
                    <img src={img2} alt="amenities-img" />
                    <div className={amenCSS.content}>
                        <h2>GYM and Sports</h2>
                        <p>We offer state-of-the-art fitness equipment, from cardio machines to free weights, in sleek, air-conditioned spaces. Many feature yoga studios, personal trainers, and recovery zones with saunas or ice baths. For sports lovers, resorts often include tennis courts, golf simulators, or even rooftop pickleball with skyline views. </p>
                        <button>Explore Now!</button>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className={amenCSS.amen_item}>
                    <img src={img3} alt="amenities-img" />
                    <div className={amenCSS.content}>
                        <h2>Restro and cafe</h2>
                        <p> we offer gourmet dining with curated menus, from all-day cafés serving artisanal coffee/pastries to fine-dining restaurants helmed by celebrity chefs. Many feature themed bars, 24/7 room service, and locally sourced ingredients for authentic flavors. Rooftop lounges and poolside grills add alfresco elegance to the experience. </p>
                        <button>Explore Now!</button>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Amenities