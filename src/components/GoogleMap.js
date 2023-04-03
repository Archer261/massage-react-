import React from 'react';

const GoogleMap = () => {
    return (
        <div style={{ display: 'flex', width: '40rem', height: '30rem' }}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11733.912818256518!2d-83.0333368!3d42.6724117!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824e70b26562db5%3A0x25629582bb24ca6f!2sRia&#39;s%20Touch%20Massage!5e0!3m2!1sen!2sus!4v1679934790069!5m2!1sen!2sus"
                width="70%"
                height="70%"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
};

export default GoogleMap;
