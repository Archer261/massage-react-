import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdKeyboardBackspace } from 'react-icons/md'
import { motion } from 'framer-motion'

import './Navbar.css'

import images from '../../constants/images'

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = React.useState(false);
    return (
        <nav className='app__navbar'>
            <div className='app__navbar-logo'>
                <img src={images.ria} alt="app logo" />
            </div>
            <ul className='app__navbar-links'>
                <motion.div whileHover={{ scale: 0.8 }} ><li className='p__opensans'><a href='#home'>Home</a></li></motion.div>
                <motion.div whileHover={{ scale: 0.8 }} ><li className='p__opensans'><a href='#about'>About</a></li></motion.div>
                <motion.div whileHover={{ scale: 0.8 }} ><li className='p__opensans'><a href='#services'>Services</a></li></motion.div>
                <motion.div whileHover={{ scale: 0.8 }} ><li className='p__opensans'><a href='#gallery'>Gallery</a></li></motion.div>
                <motion.div whileHover={{ scale: 0.8 }} ><li className='p__opensans'><a href='#contact'>Contact</a></li></motion.div>
            </ul>
            <div className='app__navbar-call'>
                <a href="tel:5862586841" className='p__opensans'>(586)258-6841</a>
                <div />
                <a href='https://riastouchmassage.fullslate.com/'>
                    <button className='book_appointment-btn'>
                        Book Appointment
                    </button>
                </a>
            </div>
            <div className='app__navbar-smallscreen'>
                <GiHamburgerMenu color='#a82b7d' fontSize={27} onClick={() => setToggleMenu(true)} />


                {toggleMenu && (

                    <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
                        <MdKeyboardBackspace fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
                        <ul className='app__navbar-smallscreen_links'>
                            <li className='p__opensans'><a href='#home'>Home</a></li>
                            <li className='p__opensans'><a href='#about'>About</a></li>
                            <li className='p__opensans'><a href='#services'>Services</a></li>
                            <li className='p__opensans'><a href='#contact'>Gallery</a></li>
                            <li className='p__opensans'><a href='#contact'>Contact</a></li>

                        </ul>
                    </div>
                )}

            </div>

        </nav>
    )
}

export default Navbar