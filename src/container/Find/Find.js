import React from 'react'

import { SubHeading, GoogleMap } from '../../components'
import { images } from '../../constants'

import './Find.css'

const Find = () => {
  return (
    <div className='app__bg app__wrapper section__padding' id='contact'>
      <div className='find__wrapper_info'>
        <SubHeading title="Contact" dark={true} />
        <h1 className='headtext__cormorant_dark' style={{ marginBotton: '3rem' }}>How to Find Us</h1>
        <div className='app__wrapper-content'>
          <p className='p__opensans_dark'>Van Dyke Ave Shelby Business Center,
            <br />Suite 27
            51424 Van Dyke Ave Suite 27
            <br />
            Shelby Twp, MI 48316</p>
          <p className='p__cormorant' style={{ color: "#412566", margin: "2rem 2rem" }}>Hours</p>
          <p className='p__opensans_dark'>Mon 9:30 am - 6:00 pm</p>
          <p className='p__opensans_dark'>Tues 9:30 am - 6:00 pm</p>
          <p className='p__opensans_dark'>Wed 9:30 am - 6:00 pm</p>
          <p className='p__opensans_dark'>Thurs 9:00 am - 6:00 pm</p>
          <p className='p__opensans_dark'>Fri 9:30 am - 6:00 pm</p>
          <p className='p__opensans_dark'>Sat 9:30 am - 3:00 pm</p>
        </div>
        <button className='custom__button' style={{ marginTop: '2rem' }}>Visit Us</button>
      </div>
      <div className='app__wrapper_img'>
        <GoogleMap />

      </div>
    </div>
  )
}

export default Find