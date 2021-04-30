import React from 'react';
import Logo from '../../assets/icons/logo.png';
import './footer.css';

const Footer = () => {
    return (
        <footer>
            <img src={Logo} alt="" />
            <span><a target="_blank" href="https://www.facebook.com/capadociakebap/"><i className="fab fa-facebook-f fa-2x"></i></a></span>
        </footer>
    )
}

export default Footer;