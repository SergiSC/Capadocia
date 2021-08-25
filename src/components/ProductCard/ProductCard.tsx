import React, { useEffect, useState } from 'react';
import { Kebap, Product } from '../../data';
import './productCard.css';
import noFoto from '../../assets/images/products/noFoto.png';


type CardProps = {
    product: Product | Kebap
    cardSize: number,
    cardHeight: number,
    deviceWidth: number
}

// const frases = [
//     "Que PITA tiene",
//     "Esto no me lo esperaba..."
// ]

const ProductCard = ({ product, cardSize, cardHeight, deviceWidth }: CardProps) => {

    const { id, titleEsp, price, descriptionEsp, allergens } = product;
    const [showModal, setShowModal] = useState(false);
    const image = product.image ? `/assets/dishes/${id}.png` : noFoto;

    useEffect(() => {
        let modal = document.getElementById(`modal${id}`);
        showModal ? modal?.classList.add('modal-card-open') : modal?.classList.remove('modal-card-open');

        return () => { }
    }, [showModal, id])

    const RenderModal = () => {
        return (
            <div className="modal-card" id={`modal${id}`}>
                <div className="modal-card-dialog">
                    <div className="modal-card-content">
                        <header className="card-header">
                            <img src={image} alt="" />
                        </header>
                        <div className="modal-card-body">
                            <div className="modal-title-price">
                                <h3 className="title">{titleEsp}</h3>
                                <h4 className="price">{price}{price % 1 === 0 ? ".00" : (price * 10 % 1 === 0 ? "0" : "")}€</h4>
                            </div>

                            {product.titleCat && <h3 className="title-cat">{product.titleCat}</h3>}
                            <p className="description-esp">{descriptionEsp}</p>
                            {product.descriptionCat && <p className="description-cat">{product.descriptionCat}</p>}
                            {(allergens.length > 0 || product.vegetarian) &&
                                <div className="allergens">
                                    {
                                        product.vegetarian &&
                                        <div key={`allergen-veggie`}>
                                            <img src={`/assets/allergens/veggie.png`} alt="error" />
                                        </div>
                                    }
                                    {
                                        allergens.map((a) => {
                                            const allergenImage = `/assets/allergens/${a}.png`;
                                            return (
                                                <div key={`allergen-${a}`}>
                                                    <img src={allergenImage} alt="error" />
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            }

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
                                <h3 className="title">{titleEsp}</h3>
                                <h4 className="price">{price}{price % 1 === 0 ? ".00" : (price * 10 % 1 === 0 ? "0" : "")}€</h4>
                            </div>
                            <p className="description">{descriptionEsp}</p>
                        </div>
                    ) : (cardSize === 1 ? (
                        <div className="card-body">
                            <div className="title-price-med">
                                <h3 className="title">{titleEsp}</h3>
                            </div>
                        </div>
                    ) : (<div></div>))
            }
            <RenderModal />
        </div>
    )
}

export default ProductCard;
