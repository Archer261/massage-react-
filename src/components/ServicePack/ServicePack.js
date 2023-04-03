import React from 'react'

import './ServicePack.css'

const ServicePack = ({ time, price }) => {
    if (time && price) {
        return (
            <div className='app__menuitem-head'>
                <div className='app__menuitem-name'>
                    <p className="p__cormorant">
                        {time} mins
                    </p>
                </div>

                <div className='app__menuitem-dash' />

                <div className='app__menuitem-price'>
                    <p className="p__cormorant">
                        ${price}
                    </p>
                </div>

            </div>
        )
    } else {
        return (
            <></>
        )
    }
}

export default ServicePack