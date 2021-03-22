import React from 'react';
import './home.css'

type homeProps = {
    sectionId: string,
}

const Home = ({ sectionId }: homeProps) => {
    return (
        <section id={sectionId}>
            <div className="section-container">

            </div>

        </section>
    )
}

export default Home;