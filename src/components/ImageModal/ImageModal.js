import { useState } from "react";
import { GrClose } from 'react-icons/gr'

import './ImageModal.css'

const ImageModal = (props) => {

    const handleClose = (e) => {
        e.preventDefault()
        props.closeFunction({ isOpen: false, src: '', alt: '' })
    };


    return (
        <div>
            <div className="image-modal">
                <div className="image-close-btn" onClick={(e) => handleClose(e)} >
                    <GrClose />
                </div>
                <img src={props.imageSrc} alt={props.imageAlt} />
            </div>

        </div>
    );
};

export default ImageModal;