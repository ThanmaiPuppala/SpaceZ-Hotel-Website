import React from 'react'
import footerCSS from './Footer.module.css'
const Footer = () => {
  return (
    <footer id='contact' className={`${footerCSS.footer_wrapper} section`}>
        <div className={footerCSS.footerLinks}>
            <div className={footerCSS.logo}>
                <h2>SpaceZ</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus ipsam, enim voluptatum itaque consectetur doloribus nemo officiis voluptates animi harum quibusdam architecto, velit cumque autem, quia obcaecati amet magni dolor.</p>
            </div>
        </div>
        <div className={footerCSS.footerLinks}>
            <h3>Quick Links</h3>
            <p>About</p>
            <p>Contact Us</p>
            <p>Rooms</p>
            <p>GYM</p>
            <p>Restaurant</p>
        </div>
        <div className={footerCSS.footerLinks}>
        <h3>City Branches</h3>
            <p>Hyderabad</p>
            <p>Bangalore</p>
            <p>Chennai</p>
            <p>Kochi</p>
            <p>Mumbai</p>
        </div>
        <div className={footerCSS.footerLinks}>
        <h3>Contact</h3>
            <p>Address:<span>360 street-mumbai,India</span></p>
            <p>Email:thanmaipuppala@gmail.com</p>
            <p>Phone:9876543210</p>
        </div>
    </footer>
  )
}

export default Footer