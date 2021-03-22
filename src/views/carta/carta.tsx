import React from 'react';
import './carta.css'

type cartaProps = {
    sectionId: string,
}

const Carta = ({ sectionId }: cartaProps) => {
    return (
        <section id={sectionId}>
            <div className="section-container">

            </div>
        </section>
    )
}

export default Carta;