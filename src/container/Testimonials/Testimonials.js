import React, { useState } from "react";

import { SubHeading } from "../../components";

import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'

import "./Testimonials.css";


const testimonials = [
    {
        name: 'Maria Nikprelevic',
        text: 'I have gotten plenty of massages in the past. By far nobody compares to Ria. Had a wonderful experience. She’s so sweet and makes you feel so comfortable. She concentrates on the areas that need it most and gives great advice. Will def be going back!'
    },
    {
        name: 'Heidi Clay',
        text: 'I’ve been seeing Ria for almost 7 months and I love her. She’s super sweet, welcoming, and always makes sure you’re comfortable. Ria has strong hands and knows what’s she’s doing. She’s helped me a lot with tension headaches. I wouldn’t have survived my pregnancy without her!'
    },
    {
        name: 'Amber Burmeisterk',
        text: 'Ria is amazing!  Very professional, timely and gives the best massages!  She really helps you as a person to feel comfortable and give you ideas to help you in day to day life to manage stress and aches or pains.  Would definitely recommend.'
    },
    {
        name: 'Jerry Khami',
        text: `Ria is truly the best! My neck, shoulders and back had gotten so bad that I couldn't turn my head far enough to see oncoming traffic while driving. After just one visit I had so much relief and was able to turn my head 50% more. Sitting at a desk most of the day has made me really stiff. Ria even emailed me YouTube exercises to get my mobility even higher. 5 stars is not enough.`
    },
    {
        name: 'Rachel Stryker',
        text: `Wow! Love her! She's so sweet and really cares about her clients. She's amazing at what she's does! If you're looking for an amazing massage definitely book with Ria.`
    }
]


const Testimonials = () => {

    const scrollRef = React.useRef(null)

    const scroll = (direction) => {
        const { current } = scrollRef;

        if (direction === 'left') {
            current.scrollLeft -= 300
        } else {
            current.scrollLeft += 300;
        }
    }

    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const handleNextClick = () => {
        setCurrentTestimonial((currentTestimonial + 1) % testimonials.length);
    };

    const handlePrevClick = () => {
        setCurrentTestimonial(
            (currentTestimonial + testimonials.length - 1) % testimonials.length
        );
    };

    return (
        <div className="app__testimonials section__padding testimonial-slider flex__center app__bg">
            {/* <div className="testimonial">
                <p className="testimonial-text">{testimonials[currentTestimonial].text}</p>
                <p className="testimonial-author">
                    {testimonials[currentTestimonial].name}, {testimonials[currentTestimonial].jobTitle}
                </p>
            </div>
            <div className="testimonial-buttons">
                <button className="prev-button" onClick={handlePrevClick}>
                    &#8249;
                </button>
                <button className="next-button" onClick={handleNextClick}>
                    &#8250;
                </button>
            </div> */}

            <div className='app__gallery-images'>

                <div className='app__gallery-images_arrows'>
                    <BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scroll('left')} />
                    <BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll('right')} />
                </div>
            </div>

            <div className='app__gallery-content'>
                <SubHeading title="Testimonials" />
                <h1 className='headtext__cormorant'>Hear what our clients have to say!</h1>
                {/* <p className='p__opensans' style={{ color: '#AAA', marginTop: '2rem' }}> Hear what our clients have to say!</p> */}
                {/* <button type="button" className='custom__button'>View More</button> */}
            </div>
        </div>
    );
};

export default Testimonials