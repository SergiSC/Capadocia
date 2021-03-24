import React from 'react';

type CardProps = {
    title: string,
    price: number,
    description: string,
    id: string
}

const ProductCard = ({title, price, description, id}: CardProps) => {
    return (
        <div className="card" id={id}>
            <header>
                <img src="" alt=""/>
            </header>
            <div className="card-body">
                <div className="title-price">
                    <h3 className="title"></h3>
                    <h4 className="price"></h4>
                </div>
                <p className="description"></p>
            </div>
        </div>
    )
}

export default ProductCard;