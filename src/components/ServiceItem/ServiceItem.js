import React from 'react'

import './ServiceItem.css'
import '../ServicePack/ServicePack'
import ServicePack from '../ServicePack/ServicePack'

const ServiceItem = ({ title, price, packs }) => {
  if (!price) {
    return (
      <div className='app__menuitem'>
        <div className='app__menuitem-head'>
          <div className='app__menuitem-name'>
            <p className='p__cormorant' style={{ color: '#9245ca' }}>
              {title}
            </p>
            {packs.map((pack, index) => (
              <ServicePack key={pack.time + pack.price + index} time={pack.time} price={pack.price} />
            ))}
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className='app__menuitem'>
        <div className='app__menuitem-head'>
          <div className='app__menuitem-name'>
            <p className='p__cormorant' style={{ color: '#9245ca' }}>
              {title}
            </p>

          </div>

          <div className='app__menuitem-dash' />

          <div className='app__menuitem-price'>
            <p className='p__cormorant'>
              ${price}
            </p>

          </div>
        </div>
      </div>
    )
  }
}

export default ServiceItem