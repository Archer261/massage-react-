import React from 'react'
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'

import { FooterOverlay } from '../../components'
import './Footer.css'

import { images } from '../../constants'

const Footer = () => {
    return (
        <div className='app__footer section__padding'>
            {/* <FooterOverlay /> */}
            <div className='app__footer-links'>
                <div className='app__footer-links_contact'>
                    <h1 className='app__footer-headtext'>Contact Us</h1>
                    <p className='p__opensans'>Van Dyke Ave Shelby Business Center,Suite 27</p>
                    <p className='p__opensans'>Phone: (586)258-6841</p>
                    <p className='p__opensans'>Email: rias.touch.massage@gmail.com</p>
                </div>
                <div className='app__footer-links_logo'>
                    <img src={images.ria} alt="footer logo" />
                    <p className='p__opensans'></p>
                    <img src={images.massage} alt="underline" className="underline_img" style={{ marginTop: 15, width: '50%' }} />
                    <div className="app__footer-links_icons">
                        <a href='https://www.facebook.com/riastouchmassage'><FiFacebook /></a>
                        <FiTwitter />
                        <a href='https://www.instagram.com/riastouchmassage/'><FiInstagram /></a>
                    </div>
                </div>
                <div className='app__footer-links_work'>
                    <h1 className='app__footer-headtext'>Working Hours</h1>
                    <p className='p__opensans'>Monday-Wednesday:</p>
                    <p className='p__opensans'> 9:30 am - 6:00 pm</p>
                    <p className='p__opensans'>Thursday:</p>
                    <p className='p__opensans'> 9:00 am - 6:00 pm</p>
                    <p className='p__opensans'>Saturday:</p>
                    <p className='p__opensans'>9:30 am - 3:00 pm</p>
                </div>
            </div>
            <div className='footer__copyright'>
                <p className='p__opensans'>
                    © Ria's Touch 2023
                </p>
            </div>
        </div>
    )
}

export default Footer