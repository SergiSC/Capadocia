import React from 'react';
import './contact.css';

type contactProps = {
    sectionId: string,
}

const Contact = ({ sectionId }: contactProps) => {
    return (
        <section id={sectionId}>
            <div className="section-container">
                <header className="contact"></header>
                <div className="contact-body">
                    <h3>nuestro</h3>
                    <h1>contacto</h1>
                    <div className="content">
                        <a target='_blank' href="https://www.google.com/maps/place/Capadocia/@41.4499147,2.2467816,19.75z/data=!4m12!1m6!3m5!1s0x12a4bb0f848f7dd5:0x282d0024e1f62b04!2sROMAN+PIZZA+BADALONA!8m2!3d41.4514504!4d2.2528372!3m4!1s0x12a4bb0ded7876f7:0x9fda5e15a2ce818!8m2!3d41.4500592!4d2.2471929">
                            <span><i className="fas fa-map-marker-alt fa-2x"></i></span>
                            <h2>Carrer de Francesc Layret, 79,<br />08911 Badalona, Barcelona</h2>
                        </a>
                        <a href="tel:+3493384820">
                            <span><i className="fas fa-phone-alt fa-2x"></i></span>
                            <h2>+34 933 84 82 02</h2>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Contact;