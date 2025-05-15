import React from 'react'
import testCSS from './Testimonials.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import img1 from '../../assets/testi-01.jpg'
import img2 from '../../assets/testi-03.jpg'
import img3 from '../../assets/testi-04.jpg'
const Testimonials = () => {
  return (
    <div id="test"className={`${testCSS.test_wrapper} section`}>
        <h2 className='section_Title'>What Our Clients <span>Says</span></h2>
    <Swiper
    slidesPerView={1}
            spaceBetween={30}
            loop={true}
            speed={1500}
            modules={[Autoplay]}
            autoplay={{
                delay:1000,
            }}
            breakpoints={
                {
                    0:{slidesPerView:1},
                    1200:{slidesPerView:2 }
                }
            }
        className={testCSS.swiper}
    >
        <SwiperSlide>
            <div className={testCSS.testimonial}>
                <img src={img1} alt="" />
                <div className={testCSS.content}>
                    <h3>Kalpana <span>Travel Blogger</span></h3>
                    <p>"From the cozy rooms to the delicious dining, every detail exceeded our expectations. Truly a home away from home!"</p>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className={testCSS.testimonial}>
                <img src={img2} alt="" />
                <div className={testCSS.content}>
                    <h3>Arjun Sarkar <span>Guest</span></h3>
                    <p>An unforgettable experience! The elegant ambiance, attentive staff, and world-class dining made our stay exceptional. Highly recommend!"</p>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className={testCSS.testimonial}>
                <img src={img3} alt="" />
                <div className={testCSS.content}>
                    <h3>Namritha <span>manager</span></h3>
                    <p>"Pure relaxation from check-in to checkout. The spa was heavenly, and the rooftop bar offered breathtaking sunset views. Perfection!"</p>
                </div>
            </div>
        </SwiperSlide>
    </Swiper>

    </div>
  )
}

export default Testimonials