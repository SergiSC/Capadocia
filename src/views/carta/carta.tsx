import React, { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import kebab1 from '../../assets/images/products/kebab1.jpg';
import kebab2 from '../../assets/images/products/kebab2.jpg';
import './carta.css'

type cartaProps = {
    sectionId: string,
    deviceWidth: number
}

const tmpProducts = [
    {
        type: "Entrantes",
        products: [
            {
                title: 'Ensalada de berenjena',
                price: 8.90,
                description: "lorem ipdum dolor sit amet"
            }, {
                title: 'prod2',
                price: 6.10,
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, veniam."
            }, {
                title: 'prod3',
                price: 12.50,
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, maxime culpa? Nihil corporis soluta hic excepturi inventore alias optio autem vero magnam adipisci! Odio animi autem corporis vero adipisci et tempora cupiditate? Quos, pariatur vero distinctio deserunt consequatur tempora nemo illo mollitia neque perspiciatis. Sed consequatur perspiciatis eius omnis repellat."
            },
            {
                title: 'prod1',
                price: 8.90,
                description: "lorem ipdum dolor sit amet"
            }, {
                title: 'prod2',
                price: 6.10,
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, veniam."
            }, {
                title: 'prod3',
                price: 12.50,
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, maxime culpa? Nihil corporis soluta hic excepturi inventore alias optio autem vero magnam adipisci! Odio animi autem corporis vero adipisci et tempora cupiditate? Quos, pariatur vero distinctio deserunt consequatur tempora nemo illo mollitia neque perspiciatis. Sed consequatur perspiciatis eius omnis repellat."
            },
            {
                title: 'prod1',
                price: 8.90,
                description: "lorem ipdum dolor sit amet"
            }, {
                title: 'prod2',
                price: 6.10,
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, veniam."
            }, {
                title: 'prod3',
                price: 12.50,
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, maxime culpa? Nihil corporis soluta hic excepturi inventore alias optio autem vero magnam adipisci! Odio animi autem corporis vero adipisci et tempora cupiditate? Quos, pariatur vero distinctio deserunt consequatur tempora nemo illo mollitia neque perspiciatis. Sed consequatur perspiciatis eius omnis repellat."
            }, {
                title: 'prod3',
                price: 12.50,
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, maxime culpa? Nihil corporis soluta hic excepturi inventore alias optio autem vero magnam adipisci! Odio animi autem corporis vero adipisci et tempora cupiditate? Quos, pariatur vero distinctio deserunt consequatur tempora nemo illo mollitia neque perspiciatis. Sed consequatur perspiciatis eius omnis repellat."
            }
        ]
    },
    {
        type: "Ensalada",
        products: [
            {
                title: 'prod4',
                price: 8.90,
                description: "lorem ipdum dolor sit amet"
            }, {
                title: 'prod2',
                price: 6.10,
                description: "lorem ipdum dolor sit amet"
            }, {
                title: 'prod3',
                price: 12.50,
                description: "lorem ipdum dolor sit amet"
            }
        ]
    },
    {
        type: "Doner Kebap",
        products: [
            {
                title: 'prod1',
                price: 8.90,
                description: "lorem ipdum dolor sit amet"
            }, {
                title: 'prod2',
                price: 6.10,
                description: "lorem ipdum dolor sit amet"
            }, {
                title: 'prod3',
                price: 12.50,
                description: "lorem ipdum dolor sit amet"
            }
        ]
    },
    {
        type: "Postres",
        products: [
            {
                title: 'prod1',
                price: 8.90,
                description: "lorem ipdum dolor sit amet"
            }, {
                title: 'prod2',
                price: 6.10,
                description: "lorem ipdum dolor sit amet"
            }, {
                title: 'prod3',
                price: 12.50,
                description: "lorem ipdum dolor sit amet"
            }
        ]
    },
    {
        type: "Llevar",
        products: [
            {
                title: 'prod1',
                price: 8.90,
                description: "lorem ipdum dolor sit amet"
            }, {
                title: 'prod2',
                price: 6.10,
                description: "lorem ipdum dolor sit amet"
            }, {
                title: 'prod3',
                price: 12.50,
                description: "lorem ipdum dolor sit amet"
            }
        ]
    },
    {
        type: "Postres",
        products: [
            {
                title: 'prod1',
                price: 8.90,
                description: "lorem ipdum dolor sit amet"
            }, {
                title: 'prod2',
                price: 6.10,
                description: "lorem ipdum dolor sit amet"
            }, {
                title: 'prod3',
                price: 12.50,
                description: "lorem ipdum dolor sit amet"
            }
        ]
    },
    {
        type: "Postres",
        products: [
            {
                title: 'prod1',
                price: 8.90,
                description: "lorem ipdum dolor sit amet"
            }, {
                title: 'prod2',
                price: 6.10,
                description: "lorem ipdum dolor sit amet"
            }, {
                title: 'prod3',
                price: 12.50,
                description: "lorem ipdum dolor sit amet"
            }
        ]
    },
]

const Carta = ({ sectionId, deviceWidth }: cartaProps) => {

    const [activeItem, setActiveItem] = useState(tmpProducts[0].type);
    const [cardSize, setCardSize] = useState(deviceWidth > 800 ? 2 : 0);

    const [cardHeight, setCardHeight] = useState((deviceWidth * .8 - 30) / 4);

    const renderCardProduct = (title: string, price: number, description: string, index: number, image: string) => {
        return (
            <ProductCard
                key={`productCard-${getIndexCategory()}-${index}`}
                title={title}
                price={price}
                description={description}
                id={`card-${getIndexCategory()}-${index}`}
                image={image}
                cardSize={cardSize}
                cardHeight={cardHeight}
                deviceWidth={deviceWidth}
            />
        )
    }

    const getIndexCategory = (): number => {
        let indexCategory = 1;
        tmpProducts.forEach((product, index) => {
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
                className = "products-container-sm"
                break;
        }
        return className;
    }

    const setCardSizes = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCardSize(parseInt(e.target.value));
        let div = 0;
        if (parseInt(e.target.value) === 0) div = 4;
        else if (parseInt(e.target.value) === 1) div = 3;
        else div = 1;
        setCardHeight((deviceWidth * .8 - ((div - 1) * 10)) / div);
    }

    const handleResize = () => {
        let div = 0;
        if (cardSize === 0) div = 4;
        else if (cardSize === 1) div = 3;
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
                        {tmpProducts.map((value, index) => {
                            return <button key={`navCarta-btn${index}`} className={activeItem === value.type ? 'active' : ''} onClick={function () { setActiveItem(value.type); }} id={`itemNavProd-${index}`}>{value.type}</button>
                        })}
                    </div>
                    {
                        (cardSize === 2 && deviceWidth > 800) ? <div></div> : <input type="range" id="size" name="cardSize" min="0" max="2" value={cardSize} onChange={(e) => { setCardSizes(e); }} />
                    }

                </div>
                <div id="prod-container" className={productContainerClass()}>
                    {
                        tmpProducts[getIndexCategory()].products.map((value, index) => {
                            return renderCardProduct(value.title, value.price, value.description, index, (Math.round(Math.random()) === 1 ? kebab1 : kebab2));
                        })
                    }
                </div>
            </div>
        </section >
    )
}

export default Carta;