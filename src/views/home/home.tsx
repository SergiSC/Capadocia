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
                    <h3>Iskender Kebap</h3>
                    <h1>Descubre {window.innerWidth < 801 ? <br /> : ''} el verdadero <br /> sabor turco</h1>
                    <button onClick={() => { window.location.href = '#reservation'; }}> haz tu reserva aquí</button>
                </div>
                <div id='sn-home' className="row-btn-sn">
                    <a href="tel:+3493384820">
                        <span><i className="fas fa-phone-alt"></i></span>
                    </a>
                    <a target='_blank' href="https://www.google.com/maps/place/Capadocia/@41.4500602,2.246646,19z/data=!3m1!4b1!4m5!3m4!1s0x12a4bb0ded7876f7:0x9fda5e15a2ce818!8m2!3d41.4500592!4d2.2471932">
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