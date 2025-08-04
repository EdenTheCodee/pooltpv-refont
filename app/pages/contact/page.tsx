import React from 'react';
import Contact from '../../../components/Contact';
import routes from '../../routes'; 

const ContactPage = () => {
    return (
        <div>
            <h1>Contact Page</h1>
            {/* <Contact /> */}
            <p>Visit our homepage: <a href={routes.home}>Home</a></p>
        </div>
    );
};

export default ContactPage;