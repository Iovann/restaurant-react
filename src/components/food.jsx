import React, { useState } from 'react';
import '../style.css';

const Food = ({ image, name, price, star }) => {
    const [like, setLike] = useState(false);

    const changelike = () => {
        setLike(!like);
    };

    return (
        <>
            <div className="bg-white card rounded-5 border-0 px-3 shadow-lg">
                <div className="row justify-content-end">
                    <div className="col-2 vert p-3 coeur" onClick={changelike}>
                        {!like && <img src="./assets/coeur.svg" className='' alt="coeur" />}
                        {like && <img src="./assets/coeurplein.svg" className='' alt="coeur" />}
                    </div>
                </div>
                <div className="row justify-content-center">
                    <span className="col-8">
                        <img src={image} alt={name} className='img-fluid rounded-circle px-2 py-3' />
                    </span>
                    <p className='fw-bold fs-4 mb-1 mt-3'>{name}</p>
                    <p className='fs-4 text-secondary'>Description of the item</p>
                    <div className='d-flex justify-content-between fs-5 fw-bold'>
                        <p><span className='text-danger fw-bold'>$ </span> {price}</p>
                        <p><img src="./assets/star.svg" className='mx-2' alt="star" /> {star}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Food;