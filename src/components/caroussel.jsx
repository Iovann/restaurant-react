import React, { useState, useEffect, useRef } from 'react';
import { Carousel } from 'primereact/carousel';
import Food from './food.jsx';

export default function ResponsiveDemo() {
    const [products, setProducts] = useState([]);
    const carouselRef = useRef(null);

    const responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 3,
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
            { image: './assets/Fattoush salad.svg', name: 'Fattoush salad', price: "24.00", star:"4.9" },
            { image: './assets/Vegetable salad.svg', name: 'Vegetable salad', price: "26.00", star:"4.6" },
            { image: './assets/Egg salad.svg', name: 'Vegetable salad', price: "23.00" , star:"4.5"},
            { image: './assets/Fattoush salad.svg', name: 'Fattoush salad', price: "24.00", star:"4.9" },
            { image: './assets/Vegetable salad.svg', name: 'Vegetable salad', price: "26.00" , star:"4.6"},
            { image: './assets/Egg salad.svg', name: 'Vegetable salad', price: "23.00", star:"4.5" },
            { image: './assets/Fattoush salad.svg', name: 'Fattoush salad', price: "24.00", star:"4.9" },
            { image: './assets/Vegetable salad.svg', name: 'Vegetable salad', price: "26.00", star:"4.6" },
            { image: './assets/Egg salad.svg', name: 'Vegetable salad', price: "23.00", star:"4.5" },
        ];
        setProducts(mockData.slice(0, 9));
    }, []);

    const productTemplate = (product) => {
        return (
            <div className="m-2 text-center py-3 px-3">
                <Food image={product.image} name={product.name} price={product.price} star={product.star} />
            </div>
        );
    };

    return (
        <div className="py-5">
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