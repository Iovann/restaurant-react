import React, { useState, useEffect, useRef } from 'react';
import { Carousel } from 'primereact/carousel';
import Food from './food.jsx';

export default function ResponsiveDemo() {
    const [products, setProducts] = useState([]);
    const carouselRef = useRef(null);

    const responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    useEffect(() => {
        const mockData = [
            { image: './assets/Fattoush salad.svg', name: 'Fattoush salad', price: 24.00 },
            { image: './assets/Fattoush salad.svg', name: 'Fattoush salad', price: 24.00 },
            { image: './assets/Fattoush salad.svg', name: 'Fattoush salad', price: 24.00 },
            { image: './assets/Fattoush salad.svg', name: 'Fattoush salad', price: 24.00 },
            { image: './assets/Fattoush salad.svg', name: 'Fattoush salad', price: 24.00 },
            { image: './assets/Fattoush salad.svg', name: 'Fattoush salad', price: 24.00 },
        ];
        setProducts(mockData.slice(0, 9));
    }, []);

    const productTemplate = (product) => {
        return (
            <div className="m-2 text-center py-3 px-3">
                <Food image={product.image} name={product.name} price={product.price} />
            </div>
        );
    };

    return (
        <div className="card">

            <Carousel
                ref={carouselRef}
                value={products}
                numScroll={1}
                numVisible={3}
                responsiveOptions={responsiveOptions}
                itemTemplate={productTemplate}
                circular={true}
            />
        </div>
    );
}