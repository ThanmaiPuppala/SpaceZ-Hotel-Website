import React, { useRef } from 'react'
import navCSS from './Nav.module.css'
const Nav = () => {
  const menu=useRef(null);
  const menuHandler = () => {
    if (menu.current) {
      menu.current.classList.toggle(navCSS.showNav);
    }
  }

  
  return (
    <div className={navCSS.nav_wrapper}>
        <div className={navCSS.logo}>
            <a href='#'><span>SPACE</span>Z</a>
        </div>
        <ul ref={menu}>
            <li><a href='#'>Home</a></li>
            <li><a href='#about'>About Us</a></li>
            <li><a href='#services'>Category</a></li>
            <li><a href='#rooms'>Rooms</a></li>
            <li><a href='#blog'>Blog</a></li>
            <li><a href='#test'>Testimonials</a></li>
            
            
        </ul>
        <div className={navCSS.nav_btns}>
            <button><a href='#contact'>Book Now</a></button>
            <i className='ri-menu-4-line' id={navCSS.bars} onClick={menuHandler}></i>
        </div>
    </div>
  )
}

export default Nav