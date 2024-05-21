import Navbar from './components/navbar'
import Hero from './components/hero'
import Card_vert from './components/card_vert'
import Food from './components/food'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <p className='text-center text-danger text-uppercase fw-bold pt-5'>Customer Favorites</p>
      <p className='text-center display-4 fw-bolder'>Popular Catagories</p>
      <div className="container">
        <div className="row justify-content-between py-5">
          <Card_vert image='./assets/dish.svg' text='Main Dish' precision='(86 dishes)' />
          <Card_vert image='./assets/breakfast.svg' text='Break Fast' precision='(12 break fast)' />
          <Card_vert image='./assets/dessert.svg' text='Dessert' precision='(48 dessert)' />
          <Card_vert image='./assets/browse.svg' text='Browse All' precision='(255 Items)' />
        </div>
        <p className='text-danger text-uppercase fw-bold pt-5'>Special Dishes</p>

        <div className="row justify-content-between">
          <div className="col-lg-5 justify-content-between ">
            <p className='display-4 fw-bold'>Standout Dishes From Our Menu</p>
          </div>

          <div className="col-lg-2  justify-content-between">
            <img src="./assets/left-arrow.svg" className='p-4 mx-3 rounded-circle bg-secondary-subtle' alt="" />
            <img src="./assets/right_arrow.svg" className='p-4 mx-3  rounded-circle' style={{ backgroundColor: "#32CD32" }} alt="" />
          </div>
        </div>

        <Food/>
      </div>
    </>
  )
}

export default App
