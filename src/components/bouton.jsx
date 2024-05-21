const Bouton = ({text, bg, color}) => {
    return (
        <>
            <span className='btn px-3 py-2 rounded-pill shadow-lg' style={{ backgroundColor: bg}}>
                <span className='fs-4 fw-bolder' style={{ color: color }}>{text}</span>
            </span>
        </>
    )
}

export default Bouton
