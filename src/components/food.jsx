import React from 'react'

const Food = ( {image, name, price}) => {
    return (
        <>
            <div className=" bg-white card rounded-5 border-0  p-4 shadow-lg">
                <div className="row justify-content-center ">
                    <span className="col-8">
                        <img src={image} alt="" className='img-fluid rounded-circle px-2 py-3'/>
                    </span>
                    <p className='fw-bold fs-4 mb-1 mt-3'>{name}</p>
                    <p className='fs-4 text-secondary'>Description of the item</p>
                    <div className='d-flex justify-content-between fs-5 fw-bold '>
                        <p> <span className='text-danger fw-bold '>$ </span> {price}</p>
                        <p> <img src="./assets/star.svg" className='mx-2' alt="" /> 4.9</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Food
