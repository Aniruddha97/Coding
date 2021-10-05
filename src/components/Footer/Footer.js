import React from 'react';

const Footer = () => {
    const color={color:"white"}
    return (
        <div className="bg-info p-5 text-center">
            <h1 style={color}>Coding-school</h1>
            <p style={color}>© 2021 Udemy, Inc.</p>
        </div>
    );
};

export default Footer;