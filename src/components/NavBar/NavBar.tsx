import React, { useState, useEffect, useCallback } from 'react';
import Logo from '../../assets/icons/logo.png';
import './navbar.css';

const NavBar = () => {

    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [transparent, setTransparent] = useState(true);
    const [active, setActive] = useState("");


    const handleHash = () => {
        const sectionList = document.querySelectorAll('section');
        let bottom: number;
        let top: number;
        sectionList.forEach((section) => {
            top = section.getBoundingClientRect().top;
            bottom = section.getBoundingClientRect().bottom;
            if (top <= 0 && bottom >= 0) {
                if (section.id === 'home') {
                    setActive('');
                    setTransparent(true);
                } else {
                    setTransparent(false);
                    setActive(section.id);
                };
            }
        })
    }

    const handleNavClick = () => {
        const navToggleCheckbox = document.getElementById('nav-toggle');
        const anchorList = document.querySelectorAll('a');
        anchorList.forEach((anchor) => {
            anchor.onclick = () => {
                if (navToggleCheckbox) navToggleCheckbox.click();
            }
        })

    }

    const handleScroll = useCallback(() => {
        const currentScrollPos = window.pageYOffset;
        const heightViewport = window.innerHeight;

        setVisible(prevScrollPos > currentScrollPos || (Math.abs(prevScrollPos - currentScrollPos) > heightViewport / 10) || currentScrollPos < 10);

        setPrevScrollPos(currentScrollPos);
    }, [prevScrollPos]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        handleHash();
        handleNavClick();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos, visible, active, handleScroll]);



    return (
        <header id="header-nav" style={{ top: visible ? '0' : '-90px', backgroundColor: transparent ? 'transparent' : '' }}>
            <a className={"logo"} href="#home">
                <img src={Logo} alt="" height="50px" width="auto" className="img-logo" />
            </a>
            <input type={"checkbox"} id={'nav-toggle'} className={'nav-toggle'}></input>
            <nav style={{ backgroundColor: transparent ? 'transparent' : '' }}>
                <ul>
                    <li><a className={`${active === '' ? "activeItem" : ""}`} href="#home">Home</a></li>
                    <li><a className={`${active === 'about' ? "activeItem" : ""}`} href="#about">Nosotros</a></li>
                    <li><a className={`${active === 'carta' ? "activeItem" : ""}`} href="#carta">Carta</a></li>
                    <li><a className={`${active === 'contact' ? "activeItem" : ""}`} href="#contact">Contacto</a></li>
                </ul>
            </nav>
            <label htmlFor={'nav-toggle'} className={'nav-toggle-label'}>
                <span></span>
            </label>
        </header >
    )
}

export default NavBar;
