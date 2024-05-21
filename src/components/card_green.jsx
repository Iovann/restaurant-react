import React from 'react'

const card_green = ({img, title, description}) => {
    return (
        <div className=" col-5 bg-white card rounded-5 border-0 mx-2 px-3 mt-4 shadow-lg color_vert">
            <div className="row justify-content-center ">
                <span className="col-8 text-center">
                    <img src={img} alt="" className='img-fluid px-2 py-3' />
                </span>
                <p className='fw-bold fs-4 mb-1 mt-3 text-center color_vert'>{title}</p>
                <p className='fs-4 text-center color_vert'>{description}</p>
            </div>
        </div>
    )
}

export default card_green
