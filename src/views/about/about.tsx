import React, { useState } from 'react';
import Meat from '../../assets/icons/meat.png';
import Kebap from '../../assets/icons/kebap.png';
import Cup from '../../assets/icons/cup.png';
import Leaf from '../../assets/icons/leaf.png';
import './about.css';

const targetList = [
    {
        image: Meat,
        title: "carne fresca",
        description: "Trabajamos con productos frescos y naturales."
    },
    {
        image: Kebap,
        title: "kebab de calidad",
        description: "La carne del kebap es de elaboración propia."
    },
    {
        image: Cup,
        title: "platos tradicionales",
        description: "Sumérgete en la cultura turca."
    },
    {
        image: Leaf,
        title: "opción vegetariana",
        description: "Pensamos en vosotros, tenemos comida vegetariana."
    },
]

type aboutProps = {
    sectionId: string,
    deviceWidth: number
}

type aboutTarget = {
    image: string,
    title: string,
    description: string
}

const TargetAbout = (item: aboutTarget, id: number) => {
    return (
        <div key={id} id={`target-${id}`} className="container-target">
            <img src={item.image} alt="" />
            <div className="content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
            </div>
        </div>
    )
}

const About = (props: aboutProps) => {

    const [aboutToggle, setAboutToggle] = useState(false);
    let toggleClass = "toggle-display ";
    if (aboutToggle) toggleClass += "active";

    if (props.deviceWidth > 1200) {
        return (
            <section id={props.sectionId} className="desktop">
                <div className="desktop-images">
                    <div className="bg"></div>
                    <div className="front"></div>
                </div>
                <div className="desktop-content">
                    <h3>sobre</h3>
                    <h1>nosotros</h1>
                    <p>Somos un restaurante de comida tradicional Turca, nos caracterizamos por el sabor natural y fresco de nuestra carne, que es preparada cada día en nuestra cocina.</p>
                    <div className="desktop-targets">
                        <h1 className="targets">Lorem, ipsum.</h1>
                        <p className="targets">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi asperiores a aliquam quod, hic magnam porro at commodi facere aspernatur voluptatum ullam animi ad! Quidem qui dignissimos consectetur ex eligendi in corrupti suscipit exercitationem vel praesentium. Ab, expedita voluptas veniam vitae perspiciatis delectus porro sunt voluptatum tempore. Nemo, distinctio perferendis.</p>
                        <div className="grid-targets">
                            {
                                targetList.map((value, index) => {
                                    return TargetAbout(value, index)
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        )
    }
    else return (
        <section id={props.sectionId}>
            <div className="section-container">
                <h3>sobre</h3>
                <h1>nosotros</h1>
                <div className="section-content">
                    <div className="about-images">
                        <div className="bg"></div>
                        <div className="front"></div>
                    </div>
                    <p>Somos un restaurant de comida tradicional Turca, nos caracterizamos por el sabor natural y fresco de nuestra carne, que es preparada cada día en nuestra cocina.</p>
                </div>
                <div className="about-content" style={{ backgroundColor: aboutToggle ? 'white' : 'transparent', height: aboutToggle ? 'fit-content' : '20px' }}>

                    <button style={{ opacity: aboutToggle ? '0' : '1' }} onClick={() => { setAboutToggle(true); }}>leer más</button>
                    <div onClick={() => { setAboutToggle(false); }} className={toggleClass}>
                        <div className="circle top"></div>
                        <h1>lorem ipsum</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi provident sapiente eligendi. Magnam rem quae nam hic ad, eaque quis veniam neque facilis pariatur ullam commodi adipisci vel temporibus blanditiis mollitia corporis recusandae distinctio consequatur. Nesciunt nulla corporis, sint inventore, quo voluptate error minima cumque ipsa ut, molestias soluta repellat.</p>
                        {
                            targetList.map((value, index) => {
                                return TargetAbout(value, index)
                            })
                        }
                        <div className="circle bottom"></div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default About;