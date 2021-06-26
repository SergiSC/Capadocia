import React, { useEffect, useState } from 'react';
import './productCard.css';

type CardProps = {
    title: string,
    price: number,
    description: string,
    id: string,
    image: string,
    cardSize: number,
    cardHeight: number,
    deviceWidth: number
}

const frases = [
    "Que PITA tiene",
    "Esto no me lo esperaba..."
]

const ProductCard = ({ title, price, description, id, image, cardSize, cardHeight, deviceWidth }: CardProps) => {

    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        let modal = document.getElementById(`modal${id}`);
        showModal ? modal?.classList.add('modal-card-open') : modal?.classList.remove('modal-card-open');

        return () => { }
    }, [id, showModal])

    const RenderModal = () => {
        return (
            <div className="modal-card" id={`modal${id}`}>
                <div className="modal-card-dialog">
                    <div className="modal-card-content">
                        <header>
                            <img src={image} alt="" />
                        </header>
                        <div className="modal-card-body">
                            <div className="modal-title-price">
                                <h3 className="title">{title}</h3>
                                <h4 className="price">{price}€</h4>
                            </div>
                            <p className="description">{description}</p>
                            <div className="frase">
                                <p>"{frases[Math.floor(Math.random() * frases.length)]}"</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    let classNameCard = 'card';
    if (cardSize === 2) classNameCard += ' bg';

    return (
        <div style={{
            minWidth: (cardSize === 2 && deviceWidth < 801) ? '200px' : '',
            height: cardSize === 0 ? `${cardHeight}px` : '',
        }}
            className={classNameCard}
            id={id}
            onClick={() => setShowModal(!showModal)}
        >
            <header style={{ height: cardSize === 0 ? '100%' : (cardSize === 1 ? `${cardHeight}px` : '') }} className="card-header">
                <img style={{ height: cardSize === 2 ? '200px' : '100%' }} src={image} alt="" />
            </header>
            {
                cardSize === 2 ?
                    (
                        <div className="card-body">
                            <div className="title-price">
                                <h3 className="title">{title}</h3>
                                <h4 className="price">{price}€</h4>
                            </div>
                            <p className="description">{description}</p>
                        </div>
                    ) : (cardSize === 1 ? (
                        <div className="card-body">
                            <div className="title-price-med">
                                <h3 className="title">{title}</h3>
                            </div>
                        </div>
                    ) : (<div></div>))
            }
            <RenderModal />
        </div>
    )
}

export default ProductCard;