import React from 'react'

import { images } from '../../constants'

import './About.css';

const About = () => {
  return (
    <div className='app__aboutus app__bg flex__center section__padding' id="about">
      {/* <div className='app__aboutus-overlay flex__center'>
        <img src={images.bgRia} alt='bg' />
      </div> */}

      <div className='app__aboutus-content flex__center'>
        <div className='app__aboutus-content_about'>
          <h1 className='headtext__cormorant_dark'>
            About Ria's Touch
          </h1>
          <img src={images.massage} alt="massage" className='massage__img' />
          <p className='p__opensans'>Our competent and friendly team uses the latest techniques to provide you with a holistic, individualized treatment. We offer customized treatments for chronic pain and massage therapy. Whether you'd like to focus on preventative care for your back or abdominal exercises, our excellent services will help you meet your goals with confidence — and enjoy the process.</p>
          {/* <button type="button" className='custom__button'>Know More</button> */}
        </div>

        <div className='app__aboutus-content_rose flex__center'>
          <img src={images.rose} alt='rose' />
        </div>

        <div className='app__aboutus-content_location'>
          <h1 className='headtext__cormorant_dark'>
            Location
          </h1>
          <img src={images.massage} alt="massage" className='massage__img' />
          <p className='p__opensans'>
            We're located in <span className='bold'>Shelby Twp</span>
            <br />
            One block North of <span className='bold'>23 Mile</span>,
            <br />
            off of <span className='bold'>Van Dyke</span> road.
          </p>
          <img style={{ width: '60%', height: 'auto', borderRadius: '15%', alignSelf: 'center' }} src={images.site} />

          {/* <button type="button" className='custom__button'>Know More</button> */}
        </div>

      </div>
    </div>
  )
}

export default About