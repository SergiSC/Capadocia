import React from 'react';
import './contact.css';

type contactProps = {
    sectionId: string,
    deviceWidth: number
}

const Contact = (props: contactProps) => {

    let iMapClass = 'fa fa-map-marker-alt';
    let iPhoneClass = 'fas fa-phone-alt';
    if (props.deviceWidth > 800) {
        iMapClass += ' fa-2x';
        iPhoneClass += ' fa-2x';
    }

    return (
        <section id={props.sectionId}>
            <div className="section-container">
                <header className="contact"></header>
                <div className="container-grid-desktop">
                    <div className="contact-body">
                        <div className="grid-desktop">
                            <div className="ubi-telf">
                                <h3>nuestro</h3>
                                <h1>contacto</h1>
                                <div className="content">
                                    <a target='_blank' href="https://www.google.com/maps/place/Capadocia/@41.4499147,2.2467816,19.75z/data=!4m12!1m6!3m5!1s0x12a4bb0f848f7dd5:0x282d0024e1f62b04!2sROMAN+PIZZA+BADALONA!8m2!3d41.4514504!4d2.2528372!3m4!1s0x12a4bb0ded7876f7:0x9fda5e15a2ce818!8m2!3d41.4500592!4d2.2471929">
                                        <span><i className={iMapClass}></i></span>
                                        <h2>Carrer de Francesc Layret, 79,<br />08911 Badalona, Barcelona</h2>
                                    </a>
                                    <a href="tel:+3493384820">
                                        <span><i className={iPhoneClass}></i></span>
                                        <h2>+34 933 84 82 02</h2>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border">
                        <div></div>
                    </div>
                    <div className="schedule-body">
                        <div className="dismiss"></div>
                        <h1>horario</h1>
                        <div className="schedule">
                            <h3>abrimos todos los días de</h3>
                            <h2>Lunes a Domingo<br />13:00h a 01:00h</h2>
                        </div>
                    </div>
                </div>
                <a href="#reservation" className="ref-reservation">
                    <h1>reservas</h1>
                </a>
            </div>
        </section>
    )
}


export default Contact;