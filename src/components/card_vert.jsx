import React from 'react'

const Card_vert = ( {image, text, precision}) => {
    return (
        <>
            <div class=" bg-white card rounded-5 border-0 mx-2 p-3 shadow-lg">
                <div className="row justify-content-center ">
                    <span className="col-8 text-center">
                        <img src={image} alt="" className='img-fluid rounded-circle px-2 py-3' style={{ backgroundColor: "#C1F1C6" }} />
                    </span>
                    <p className='fw-bold fs-4 mb-1 mt-3 text-center '>{text}</p>
                    <p className='fs-4 text-center text-secondary'>{precision}</p>
                </div>
            </div>
        </>
    )
}

export default Card_vert
