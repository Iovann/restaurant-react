import Navbar from './components/navbar'
import Hero from './components/hero'
import Card_vert from './components/card_vert'
import Card_green from './components/card_green'
import ResponsiveDemo from './components/caroussel'
import './style.css'
import { Avatar } from 'primereact/avatar';
import { AvatarGroup } from 'primereact/avatargroup';
import Bouton from "./components/bouton"
import Footer from './components/footer'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <p className='text-center text-danger text-uppercase fw-bold pt-5'>Customer Favorites</p>
      <p className='text-center display-4 fw-bolder'>Popular Catagories</p>
      <div className="container">
        <div className="row justify-content-center  justify-content-sm-between py-5">
          <div className="col-lg-3 col-md-6 col-sm-8 col-10 mt-3"><Card_vert image='./assets/dish.svg' text='Main Dish' precision='(86 dishes)' /></div>
          <div className="col-lg-3 col-md-6 col-sm-8 col-10 mt-3"><Card_vert image='./assets/breakfast.svg' text='Break Fast' precision='(12 break fast)' /></div>
          <div className="col-lg-3 col-md-6 col-sm-8 col-10 mt-3"><Card_vert image='./assets/dessert.svg' text='Dessert' precision='(48 dessert)' /></div>
          <div className="col-lg-3 col-md-6 col-sm-8 col-10 mt-3"><Card_vert image='./assets/browse.svg' text='Browse All' precision='(255 Items)' /></div>
        </div>
        <p className='text-danger text-uppercase fw-bold pt-5'>Special Dishes</p>

        <div className="row justify-content-lg-between justify-content-center">
          <div className="col-lg-5 justify-content-center  justify-lg-content-between ">
            <p className='display-4 fw-bold'>Standout Dishes From Our Menu</p>
          </div>

          <div className="col-lg-2  justify-content-between">
            {/* <img src="./assets/left-arrow.svg" className='p-4 mx-3 rounded-circle bg-secondary-subtle' alt="" />
            <img src="./assets/right_arrow.svg" className='p-4 mx-3  rounded-circle' style={{ backgroundColor: "#32CD32" }} alt="" /> */}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <ResponsiveDemo />
        </div>
      </div>

      <div className="container py-5">
        <div className="row justify-content-between ">
          <div className="col-lg-4 position-relative ">
            <span className='position-absolute scale' style={{ top: "60%" }}>😋</span>
            <span className='position-absolute scale' style={{ top: "60%", left: "90%" }}>🍕</span>
            <img src="./assets/group2.svg" className='img-fluid' alt="" />
          </div>

          <div className="col-lg-6 text-center text-lg-start ">
            <p className='text-danger text-uppercase fw-bold pt-5'>Testimonials</p>
            <p className='display-4 fw-bolder'>What Our Customers Say About Us</p>

            <p className='text-secondary fs-5'>“I had the pleasure of dining at Foodi last night, and I'm still raving about the experience! The attention to detail in presentation and service was impeccable”</p>

            <div className="row">
              <div className="col-lg-3">
                <div className="row mb-4">
                  <AvatarGroup>
                    <Avatar image="./assets/avatar1.svg" size="xlarge" shape="circle" />
                    <Avatar image="./assets/avatar2.svg" size="xlarge" shape="circle" />
                    <Avatar image="./assets/avatar3.svg" size="xlarge" shape="circle" />
                  </AvatarGroup>
                </div>
              </div>

              <div className="col-lg-6 fs-5 mb-3 ">
                <div className="row justify-content-center">
                  <p className='fw-bold mb-2'>Customer Feedback</p>
                  <p><img src="./assets/star.svg" alt="" className='me-2' /> <span className='fw-bold'>4.9</span> <span className='text-secondary'>(18.6k Reviews)</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row justify-content-between">

          <div className="col-lg-6 text-center text-lg-start ">
            <p className='text-danger text-uppercase fw-bold pt-2 pt-lg-5'>Our Story & Services</p>
            <p className='display-4 fw-bolder'>Our Culinary Journey And Services</p>
            <p className='text-secondary fs-5'>Rooted in passion, we curate unforgettable dining experiences and offer exceptional services, blending culinary artistry with warm hospitality.</p>
            <Bouton text='Explore' bg="#32CD32" color="#fff" />
          </div>

          <div className="col-lg-6">
            <div className="row justify-content-evenly">
              <Card_green img='./assets/gatering.svg' title={'Catering'} description={'Delight your guests with our flavors and  presentation'} />
              <Card_green img='./assets/delevery.svg' title={'Fast delivery'} description={'We deliver your order promptly to your door'} />
              <Card_green img='./assets/online_shop.svg' title={'Online Ordering'} description={'Explore menu & order with ease using our Online Ordering '} />
              <Card_green img='./assets/gift.svg' title={'Gift Cards'} description={'Give the gift of exceptional dining with Foodi Gift Cards'} />
            </div>
          </div>

        </div>
      </div>


      <Footer />
    </>
  )
}

export default App
