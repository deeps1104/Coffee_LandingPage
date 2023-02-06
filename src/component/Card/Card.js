import React from 'react'
import './Card.css'
const Card = () => {
  return (
    <div class="container mt-3" >
      <div class="card card-block mb-3">
        <a href="#" class="btn"style={{fontSize:"40px", wordSpacing:"1px"  }}>TESTIMONIALS</a>
      </div>
      <div class="container mt-3">
       <div className="row">
       <div class="col-md-3 col-sm-6 item">
          <div class="card item-card card-block">
            <img id='cardsimage' src="https://www.coffeereview.com/wp-content/uploads/2019/09/espresso-reviews-394x296.jpg" />
            <h5 class="card-title mt-3 mb-3 px-3">Client1</h5>
            <p class="card-text px-3">There are many ways for roasters, industry professionals, and the specialty coffee trade to engage with Coffee Review and our readers.Coffee roasters may be interested in submitting samples.</p>
          </div>
        </div>
        <div class="col-md-3 col-sm-6 item">
          <div class="card item-card card-block">
            <img id='cardsimage' src="https://www.coffeereview.com/wp-content/uploads/2019/09/taiwan-394x296.jpg" />
            <h5 class="card-title  mt-3 mb-3 px-3">Client2</h5>
            <p class="card-text px-3">We offer numerous ways to learn about coffee. You can browse our Coffee Reference section, where you’ll find hundreds of pages of interesting and informative coffee content . </p>
          </div>
        </div>
        <div class="col-md-3 col-sm-6 item">
          <div class="card item-card card-block">
            <img id='cardsimage' src="https://www.coffeereview.com/wp-content/uploads/2019/09/espresso-reviews-394x296.jpg" alt="Photo of sunset" />
            <h5 class="card-title  mt-3 mb-3 px-3">Client3</h5>
            <p class="card-text px-3">Floral-toned, mult-layered, balanced. Narcissus, dark chocolate, pomegranate, frankincense, in aroma and small cup. Very syrupy-smooth mouthfeel; rich, harmonious, elongated finish.</p>
          </div>
        </div>
        <div class="col-md-3 col-sm-6 item">
          <div class="card item-card card-block">
            <img id='cardsimage' src="https://img.freepik.com/free-vector/coffee-advertisement-realistic-composition_1284-25843.jpg?size=626&ext=jpg&ga=GA1.2.1367230450.1675322982&semt=sph" alt="Photo of sunset" />
            <h5 class="card-title  mt-3 mb-3 px-3 ">Client4</h5>
            <p class="card-text px-3" >
              The coffees and espressos that appear below demonstrate exceptional value relative to other coffees of similar quality and distinctiveness as reflected in their as espresso overall score.</p>
          </div>
        </div>
       </div>
      </div>

    </div>

  )
}

export default Card