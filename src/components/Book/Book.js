import React, { useState, useEffect } from 'react'

import './Book.css'

const Book = () => {

    const [showComponent, setShowComponent] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setShowComponent(true);
            } else {
                setShowComponent(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='book-btn-wrapper'>
            <a href="https://riastouchmassage.fullslate.com/">
                <button className={`book-btn ${showComponent ? 'visible' : 'hidden'} `}>
                    Book Now
                </button>
            </a>
        </div>
    )
}

export default Book