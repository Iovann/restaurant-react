import React from 'react'
import '../style.css'
const Footer = () => {
    return (
        <div>
            <footer className="text-center text-lg-start container">
                <section className="pt-5">
                    <div className="container text-center text-md-start mt-5 fs-5 ">
                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4"><img src="./assets/logo.svg" alt="" /></h6>
                                <p>Savor the artistry where every dish is a culinary masterpiece</p>
                            </div>
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="fw-bolder mb-4 fs-4 ">Useful links</h6>
                                <p>About us</p>
                                <p>Events</p>
                                <p>Blogs</p>
                                <p>FAQ</p>
                            </div>

                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="fw-bolder mb-4 fs-4 ">Main Menu</h6>
                                <p>Home</p>
                                <p>Offers</p>
                                <p>Menus</p>
                                <p>Reservation</p>
                            </div>

                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="fw-bolder mb-4 fs-4 ">Contact Us</h6>
                                <p>example@email.com</p>
                                <p>+64 958 248 966</p>
                                <p>Social media</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className='justify-content-center d-lg-flex align-items-center justify-content-lg-between fw-bold'>
                    <p>
                        <img src="./assets/facebook.svg" className='py-2 px-3 rounded-circle vert' alt="" />
                        <img src="./assets/instagram.svg" className='py-2 px-3' alt="" />
                        <img src="./assets/twitter.svg" className='py-2 px-3' alt="" />
                        <img src="./assets/youtube.svg" className='py-2 px-3' alt="" />
                    </p>
                    <p className="text-center p-4">Copyright &copy; 2024 vscode | All rights reserved</p>
                    <p>Build By Iovann ATCHO</p>
                </div>
            </footer>

        </div>
    )
}

export default Footer
