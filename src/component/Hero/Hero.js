import React from 'react'
import './Hero.css'
const Hero = () => {
  return (
    <div style={{backgroundColor:"#967259"}}>

    <div className='container text-center py-5'>
      <div className="row py-5">
<div className="col-md-10 col-lg-8 col-xl-7 mx-auto text-center" style={{color:"#fff"}}>
      <h1 className="display-2 fw-bolder mb-4" >How would you like your <br /> coffee</h1>
      <p className=" mb-5" id='find1'>Need a hand ? Lets find your coffee match together</p>
<a className="btn btn-lg" id='btn2'>FIND YOUR MATCH</a>
</div>
      </div>
    </div>
    </div>
  )
}

export default Hero