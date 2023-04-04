import React, { useState } from "react";

import './ContactForm.css'

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const { name, email, message } = formData;

    const handleChangeInput = (e) => {
        const { name, value } = e.target;

        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = () => {
        setLoading(true);

        const contact = {
            _type: 'contact',
            name: name,
            email: email,
            message: message
        }

    }

    return (
        <>

            <div className='app__footer-cards'>
                <div className='app__footer-card'>
                    <a href="Rias.Touch.Massage@Gmail.Com" className='headtext__cormorant_dark'>Email Me</a>
                </div>
            </div>

            {!isFormSubmitted ?
                <div className='app__footer-form app__flex'>
                    <div className='app__flex'>
                        <input className='p-text' type="text" placeholder='Your Name' name='name' value={name} onChange={handleChangeInput} />
                    </div>
                    <div className='app__flex'>
                        <input className='p-text' type="email" placeholder='Your Email' name='email' value={email} onChange={handleChangeInput} />
                    </div>
                    <div>
                        <textarea
                            className='p-text'
                            placeholder='Your Message'
                            value={message}
                            name='message'
                            onChange={handleChangeInput}
                        />

                    </div>
                    <button type='button' className='custom__button' onClick={handleSubmit}>{loading ? 'Sending' : 'Send Message'}</button>
                </div>
                : <div>
                    <h3 className='head-text'>Thank you for getting in touch</h3>
                </div>}
        </>
    )
}

export default ContactForm;