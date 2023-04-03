import React from 'react'

import './ServiceCard.css'

const ServiceCard = (props) => {
    return (
        <>
            <div class="card">
                <img src={props.cover} alt="Placeholder Image" />
                <div class="card-content">
                    <h2>{props.head}</h2>
                    <p>{props.desc}</p>
                    {/* <button className='custom__button'>Read More</button> */}
                </div>
            </div>
        </>
    )
}

export default ServiceCard