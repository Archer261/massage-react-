import React from 'react'

const ServiceCard = (props) => {
    return (
        <>
            <div className='service-card'>
                <figure><img className='service-img' src={props.cover} alt="" /></figure>
                <h2 className='p__opensans'>{props.head}</h2>
                <p></p>
            </div>
        </>
    )
}

export default ServiceCard