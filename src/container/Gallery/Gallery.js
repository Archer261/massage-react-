import React, { useState } from 'react'
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'

import { SubHeading, ImageModal } from '../../components'
import { images } from '../../constants'

import './Gallery.css'

const galleryImages = [images.gallery1, images.gallery2, images.gallery3, images.gallery4];

const Gallery = () => {

  const [isModalOpen, setIsModalOpen] = useState({
    isOpen: false,
    src: "",
    alt: ""
  });


  const openModal = (e) => {
    e.preventDefault();
    setIsModalOpen({ isOpen: true, src: e.target.src, alt: e.target.alt });
    console.log(isModalOpen);

  };

  const scrollRef = React.useRef(null)

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300
    } else {
      current.scrollLeft += 300;
    }
  }

  return (
    <>
      <div className='app__gallery flex__center' id='gallery'>
        <div className='app__gallery-content'>
          <SubHeading title="Instagram" />
          <h1 className='headtext__cormorant'>Photo Gallery</h1>
          <p className='p__opensans' style={{ color: '#AAA', marginTop: '2rem' }}> Meet Our Clients!</p>
          {/* <button type="button" className='custom__button'>View More</button> */}
        </div>

        <div className='app__gallery-images'>
          <div className='app__gallery-images_container' ref={scrollRef}>
            {galleryImages.map((image, index) => (
              <div className='app__gallery-images_card flex__center' key={`gallery_image-${index + 1}`}>
                <img src={image} alt='gallery image' onClick={(e) => openModal(e)} />
                {/* <p className='gallery__image-icon'>VIEW</p> */}
              </div>
            ))}
          </div>
          <div className='app__gallery-images_arrows'>
            <BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scroll('left')} />
            <BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll('right')} />
          </div>
        </div>
      </div>

      {isModalOpen.isOpen && (<ImageModal imageSrc={isModalOpen.src} imageAlt={isModalOpen.alt} closeFunction={setIsModalOpen} />)}
    </>
  )
}

export default Gallery