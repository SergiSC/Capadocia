import React from 'react';
import './about.css'

type aboutProps = {
    sectionId: string,
}

const About = ({ sectionId }: aboutProps) => {
    return (
        <section id={sectionId}>
            <div className="section-container">
                
            </div>
        </section>
    )
}

export default About;