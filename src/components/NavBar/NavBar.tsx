import React, { useState, useEffect } from 'react';
import './navbar.css';

const NavBar = () => {

    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
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
                } else setActive(section.id);
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

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        const heightViewport = window.innerHeight;
        const navToggleCheckbox = document.getElementById('nav-toggle');

        if (navToggleCheckbox && navToggleCheckbox.checked) {
            navToggleCheckbox.click();
        }

        setVisible(prevScrollPos > currentScrollPos || (Math.abs(prevScrollPos - currentScrollPos) > heightViewport / 2) || currentScrollPos < 10);

        setPrevScrollPos(currentScrollPos);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        handleHash();
        handleNavClick();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos, visible, active, handleScroll]);



    return (
        <header style={{ top: visible ? '0' : '-90px' }}>
            <div className={"logo"}>
                <h1 className={"text-logo"}>Logo</h1>
            </div>
            <input type={"checkbox"} id={'nav-toggle'} className={'nav-toggle'}></input>
            <nav>
                <ul>
                    <li><a className={`${active === '' ? "activeItem" : ""}`} href="#">Home</a></li>
                    <li><a className={`${active === 'about' ? "activeItem" : ""}`} href="#about">Nosotros</a></li>
                    <li><a className={`${active === 'carta' ? "activeItem" : ""}`} href="#carta">Carta</a></li>
                    <li><a className={`${active === 'reservation' ? "activeItem" : ""}`} href="#reservation">Reserva</a></li>
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