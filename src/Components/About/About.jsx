import React from 'react'
import aboutCSS from './About.module.css'
import aboutImg from '../../assets/about-one.png'
const About = () => {
  return (
    
    <div id="about" className={`${aboutCSS.about_wrapper} section`}>
        <div className={aboutCSS.about_img}>
            <img src={aboutImg} alt="about-img"/>
        </div>
        <div className={aboutCSS.about_content}>
        <small className='section_Heading'>The Royal Hotel</small>
        <h2 className='section_Title'>Where Elegance Meets <span>Excellence</span></h2>
        <p>SpaceZ Hotels offers luxurious, futuristic accommodations blending cutting-edge design with premium comfort. Each location features smart rooms, zero-gravity lounges, and interstellar-inspired aesthetics. Experience next-level hospitality where technology meets tranquility. </p>
        <div className={aboutCSS.Cards}>
            <p>260+ <span>Awards Wins</span></p>
            <p>250K+ <span>Visitor Vists</span></p>
            <p>150K+ <span>Events</span></p>
        </div>
        </div>
      </div>
      
  )
}

export default About