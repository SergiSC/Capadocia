import React from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import './carta.css'

type cartaProps = {
    sectionId: string,
}

const tmpProducts = [
    {
        title: 'prod1',
        price: 8.90,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nihil similique provident iure reprehenderit cumque voluptatem, exercitationem pariatur debitis suscipit! Facere, quia atque fugiat doloremque cupiditate necessitatibus quidem molestias eligendi assumenda odit, animi dolore ab praesentium ex, eveniet in exercitationem?"
    },{
        title: 'prod2',
        price: 6.10,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nihil similique provident iure reprehenderit cumque voluptatem, exercitationem pariatur debitis suscipit! Facere, quia atque fugiat doloremque cupiditate necessitatibus quidem molestias eligendi assumenda odit, animi dolore ab praesentium ex, eveniet in exercitationem?"
    }, {
        title: 'prod3',
        price: 12.50,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nihil similique provident iure reprehenderit cumque voluptatem, exercitationem pariatur debitis suscipit! Facere, quia atque fugiat doloremque cupiditate necessitatibus quidem molestias eligendi assumenda odit, animi dolore ab praesentium ex, eveniet in exercitationem?"
    }
]

const renderCardProduct = (title: string, price: number, description: string, id: string) => {
    return (
        <ProductCard 
            title={title} 
            price={price}
            description={description}
            id={id}
        />
    )
}

const Carta = ({ sectionId }: cartaProps) => {
    return (
        <section id={sectionId}>
            <div className="section-container">
                <h1>Carta</h1>
                <div className="cards-container">
                    {tmpProducts.map((value, index) => {
                        return renderCardProduct(value.title, value.price, value.description, `card-${index}`)
                    })}
                </div>
            </div>
        </section>
    )
}

export default Carta;