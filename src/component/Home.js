import React from 'react'
import './Home.css'
import CoffeeImage from '../assets/coffee_Cup1.png'

const Home = () => {
  return (
    <div id='page1'>
    <nav class="navbar sticky-top navbar-expand-lg">
    <div class="container">
    <i class="fa-solid fa-mug-saucer"></i>&nbsp;
      <a class="navbar-brand" href="#">COFFEE CAFE</a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto w-100 justify-content-end">
          <li class="nav-item">
            <a class="nav-link" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
              </li>
              <li class="nav-item" >
                <a class="nav-link" href="#">Services</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Other</a>
                </li>
        </ul>
      </div>
      </div>
    </nav>
    <div class="container mt-5">
  <div class="row " >
    <div class="col-6 mt-5" >
      <div class="mt-5" style={{color:"#fff"}}>
          <p class="display-4">Enjoy Your Day With Coffee</p>
          <p class="lead">Like everyone else who makes the mistake of getting
          older, <br/>I begin each day with coffee with obituaries</p>
          <button type='button' className='btn'>Order Coffee</button>
        </div>
    </div>
    <div class="col-6">
      <img class="w-100 mt-5" src={CoffeeImage} height={500}/>
    </div>
</div>

</div>
    </div>
  )
}
export default Home