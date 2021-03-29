import React from 'react';
import './home.css'

type homeProps = {
    sectionId: string,
}

const Home = ({ sectionId }: homeProps) => {
    return (
        <section id={sectionId} className='home'>
            <div className="section-container">
                <div id='text-home'>
                    <p>Iskender Kebap</p>
                    <h1>Descubre {window.innerWidth < 801 ? <br /> : ''} el verdadero <br /> sabor turco</h1>
                    <button> haz tu reserva aquí</button>
                </div>
                <div id='sn-home' className="row-btn-sn">
                    <a href="tel:+3493384820">
                        <span><i className="fas fa-phone-alt"></i></span>
                    </a>
                    <a target='_blank' href="https://www.google.com/maps/place/Capadocia/@41.4499147,2.2467816,19.75z/data=!4m12!1m6!3m5!1s0x12a4bb0f848f7dd5:0x282d0024e1f62b04!2sROMAN+PIZZA+BADALONA!8m2!3d41.4514504!4d2.2528372!3m4!1s0x12a4bb0ded7876f7:0x9fda5e15a2ce818!8m2!3d41.4500592!4d2.2471929">
                        <span><i className="fas fa-map-marker-alt"></i></span>
                    </a>
                </div>
            </div>
            <a className="next" href="#about">
                <span><i className="fas fa-chevron-down"></i></span>
            </a>
        </section>
    )
}

export default Home;