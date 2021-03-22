import React from 'react';
import './contact.css'

type contactProps = {
    sectionId: string,
}

const Contact = ({ sectionId }: contactProps) => {
    return (
        <section id={sectionId}>
            <div className="section-container">

            </div>
        </section>
    )
}


export default Contact;