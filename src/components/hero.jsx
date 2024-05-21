import Bouton from "./bouton"
import '../style.css'
import Card_horiz from "./card_horiz"
const Hero = () => {
    return (
        <>
            <div className="container py-2 py-lg-5 mt-lg-5 mt-3">
                <div className="row justify-content-between align-items-center">
                    <div className="col-lg-6 align-content-between text-lg-start text-center order-last order-lg-first">
                        <p className="display-4 fw-bolder py-4">Dive into Delights Of Delectable <span style={{ color: "#32CD32" }}>Food</span></p>
                        <p className="fs-5 py-3">Where Each Plate Weaves a Story of Culinary <br /> Mastery and Passionate Craftsmanship</p>
                        <Bouton text='Order Now' bg="#32CD32" color="#fff" />
                        <span className="mx-2"></span>
                        <Bouton text='Watch' bg="#FFF" color="#000" />
                        <span className="mx-sm-3 mx-2"></span>
                        <button className="btn shadow-lg px-4 py-4 border-0 rounded-circle"><img src="./assets/video.svg" alt="" className="img-fluid" /> </button>
                    </div>
                    <div className="col-lg-6">
                        <div className=" d-none d-md-block arrow-box w-25 bg-white shadow-lg text-danger px-2 py-2 rounded-start-4 rounded-top-4 position-relative z-3" style={{marginBottom : '-28%'}}>Hot spicy Food 🌶</div>
                        <div className="position-relative z-0">
                            <img src="./assets/dame.svg" alt="" className="img-fluid"/>
                        </div>
                        <div className="d-flex justify-content-lg-between justify-content-center" style={{marginTop: "-7%"}}>
                            <div className="rounded-3 position-relative z-3 d-none d-lg-block">
                                <Card_horiz lien="./assets/spicy.svg" count={3} text="Spicy noodles" price=' 18.00' />
                            </div>
                            <div className="second rounded-3 position-relative z-3">
                                <Card_horiz lien="./assets/vegetarian.svg" count={4} text="Vegetarian salad" price=' 23.00' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero