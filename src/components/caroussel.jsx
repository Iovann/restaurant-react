import React, { useState, useEffect, useRef } from 'react';
import { Carousel } from 'primereact/carousel';
import Food from './food.jsx';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';

export default function ResponsiveDemo() {
    const [products, setProducts] = useState([]);
    const carouselRef = useRef(1);

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
            <div className="m-2 text-center py-5 px-3">
                <Food image={product.image} name={product.name} price={product.price} />
            </div>
        );
    };

    const scrollNext = () => {
        console.log(carouselRef.value)
        if (carouselRef.current) {
            console.log(carouselRef.value)
            carouselRef.current.scrollNext
        }
    };

    const scrollPrev = () => {
        console.log(carouselRef.value)
        if (carouselRef.current) {
            console.log(carouselRef.value)
            carouselRef.current.scrollPrev
        }
    };

    return (
        <div className="card">
            <div className="custom-carousel-buttons">
                <button onClick={scrollPrev} className="p-link custom-carousel-button">
                    <span className="pi pi-chevron-left"></span>
                </button>
                <button onClick={scrollNext} className="p-link custom-carousel-button">
                    <span className="pi pi-chevron-right"></span>
                </button>
            </div>
            <Carousel
                ref={carouselRef}
                value={products}
                numScroll={1}
                numVisible={3}
                responsiveOptions={responsiveOptions}
                itemTemplate={productTemplate}
            />
        </div>
    );
}
