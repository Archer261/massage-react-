import React from 'react'
import { images } from "../../constants"

import '../SubHeading/SubHeading.css'

const SubHeading = ({ title, dark }) => {
    if (dark) {
        return (
            <div style={{ marginBottom: '1rem' }}>
                <p className='title_dark'>{title}</p>
                <img src={images.massage} alt='massage' className='massage__image' />
            </div>
        )
    } else {
        return (
            <div style={{ marginBottom: '1rem' }}>
                <p className='title'>{title}</p>
                <img src={images.massage} alt='massage' className='massage__image' />
            </div>
        )
    }
}

export default SubHeading