import React from 'react';
import './reservation.css'

type reservationProps = {
    sectionId: string,
}

const Reservation = ({ sectionId }: reservationProps) => {
    return (
        <section id={sectionId}>
            <div className="section-container">

            </div>
        </section>
    )
}

export default Reservation;