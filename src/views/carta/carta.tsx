import React, { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import { menu, TypeProduct } from '../../data';
import './carta.css'

type cartaProps = {
    sectionId: string,
    deviceWidth: number
}

const Carta = ({ sectionId, deviceWidth }: cartaProps) => {

    const [activeItem, setActiveItem] = useState(menu[0].type);
    const [cardSize, setCardSize] = useState(deviceWidth > 800 ? 2 : 1);

    const [cardHeight, setCardHeight] = useState((deviceWidth * .8 - 30) / 4);

    const getIndexCategory = (): number => {
        let indexCategory = 1;
        menu.forEach((product, index) => {
            if (product.type === activeItem) {
                indexCategory = index;
            }
        });
        return indexCategory;
    }

    const productContainerClass = () => {
        let className: string;
        switch (cardSize) {
            case 1:
                className = "products-container-med"
                break;
            case 2:
                className = "products-container-big"
                break;
            default:
                className = "products-container-med"
                break;
        }
        return className;
    }

    const setCardSizes = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCardSize(parseInt(e.target.value));
        let div = 0;
        if (parseInt(e.target.value) === 1) div = 3;
        else div = 1;
        setCardHeight((deviceWidth * .8 - ((div - 1) * 10)) / div);
    }

    const handleResize = () => {
        let div = 0;
        if (cardSize === 1) div = 3;
        else div = 1;
        setCardHeight((deviceWidth * .8 - ((div - 1) * 10)) / div);

        if (deviceWidth > 800) setCardSize(2);
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    })

    return (
        <section id={sectionId}>
            <div id="carta-container" className="section-container">
                <div className="carta-container">
                    <h3>La</h3>
                    <h1>Carta</h1>
                    <div id='nav-carta'>
                        {menu.map((value, index) => {
                            return <button key={`navCarta-btn${index}`} className={activeItem === value.type ? 'active' : ''} onClick={function () { setActiveItem(value.type); }} id={`itemNavProd-${index}`}>{TypeProduct.get(value.type)}</button>
                        })}
                    </div>
                    {
                        (cardSize === 2 && deviceWidth > 800) ? <div></div> : <input type="range" id="size" name="cardSize" min="1" max="2" value={cardSize} onChange={(e) => { setCardSizes(e); }} />
                    }

                </div>
                {
                    deviceWidth > 800 ?
                        <div className="desktop-scroll">
                            <div id="prod-container" className={productContainerClass()}>
                                {
                                    menu[getIndexCategory()].products.map((value, index) => {
                                        return <ProductCard key={`product-${index}`} product={value} cardSize={cardSize} cardHeight={cardHeight} deviceWidth={deviceWidth} />;
                                    })
                                }
                            </div>
                        </div> :
                        <div id="prod-container" className={productContainerClass()}>
                            {
                                menu[getIndexCategory()].products.map((value, index) => {
                                    return <ProductCard key={`product-${index}`} product={value} cardSize={cardSize} cardHeight={cardHeight} deviceWidth={deviceWidth} />;
                                })
                            }
                        </div>
                }
            </div>
        </section >
    )
}

export default Carta;
