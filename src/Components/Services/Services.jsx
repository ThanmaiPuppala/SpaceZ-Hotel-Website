import React from 'react'
import servicesCSS from './Services.module.css'
const Services = () => {
  return (
    <div id="services" className={`${servicesCSS.service_wrapper} section`}>
        <h2 className='section_Title'>Our Best <span>Services</span></h2>
        <div className={servicesCSS.service_cards}>
                <div className={servicesCSS.service_card}>
                    <i className='ri-hotel-fill'></i>
                    <h3>Basic Facilities</h3>
                    <p>- Reception /Front Desk</p>
                    <p>- Room Services</p>
                    <p>- House Keeping</p>
                    <p>- Wifi & Parking</p>
                </div>
                <div className={servicesCSS.service_card}>
                    <i className='ri-hotel-bed-line'></i>
                    <h3>Room Aminities</h3>
                    <p>- Comfortable Bedding</p>
                    <p>- Beed Room and Pool</p>
                    <p>- Tv and AC</p>
                    <p>- Bar</p>
                </div>
                <div className={servicesCSS.service_card}>
                    <i className='ri-restaurant-line'></i>
                    <h3>Dinning Options</h3>
                    <p>- Restaurant Cafe</p>
                    <p>- Bar and Lounge</p>
                    <p>- Cafe and Canteen</p>
                    <p>- Room Service</p>
                </div>
                <div className={servicesCSS.service_card}>
                    <i className='ri-goblet-line'></i>
                    <h3>Special Features</h3>
                    <p>- Custom Rooms</p>
                    <p>- Cricket Ground</p>
                    <p>- GYM</p>
                    
                </div>
        </div>
    </div>
  )
}

export default Services