function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary mt-3">
          <div className="container">
            <span className="navbar-brand" href="#"><img src="./assets/logo.svg" alt="" /></span>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-lg-around" id="navbarNavDropdown">
              <ul className="navbar-nav fw-bold d-flex  justify-content-center">
                <li className="nav-item dropdown mx-3">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: '#32CD32', }} >Home</a>
                </li>
                <li className="nav-item dropdown mx-3">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Menu</a>
                </li>
                <li className="nav-item dropdown mx-3">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Services</a>
                </li>
                <li className="nav-item mx-3">
                  <a className="nav-link" href="#">Offers</a>
                </li>
              </ul>
  
              <div className='d-flex justify-content-evenly d-none d-lg-block'>
                <img src="./assets/search.svg" className='img-fluid mx-3 ' alt="" />
                <button type="button" className="btn position-relative mx-3 rounded-circle">
                  <img src="./assets/service.svg" className='img-fluid' alt="" />
                  <span className="position-absolute top-0 start-100 translate-middle py-1 px-2 text-white border border-light rounded-circle" style={{ backgroundColor: '#32CD32' }}>8</span>
                </button>
                <span className='btn px-4 py-2 rounded-pill  mx-3 ' style={{ backgroundColor: '#32CD32' }}>
                  <img src="./assets/phone.svg" className='img-fluid' alt=""/>
                  <span className='text-white fs-4 mx-3 fw-bolder'>Contact</span>
                </span>
              </div>
            </div>
          </div>
        </nav>
    )
  }
  
  export default Navbar
  