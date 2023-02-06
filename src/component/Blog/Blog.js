import React from 'react'
import './Blog.css'
const Blog = () => {
  return (
 
    <div>
    <div class="container text-center text-md-start">
       <div className="row align-item-center mb-4 mt-5 ">
        
        <div className="col-md-6 col-lg-5 px-0 px-md-3 mx-auto">
          <img  class="img-fluid shadow-lg rounded-lg" src="https://sixteengrams.com/media/home-featured-roasters.webp"/>
        </div>
        <div className="col-md-6 col-lg-5 mx-auto align-item-center mt-5">
         <h2 className="display-2 fw-bolder my-4 mt-md-0">Our Partner <br />
         <span id='span1'>Roaster</span></h2>
         <p className='text-md-start mx-auto' id='para1'>We’ve partnered with the most skilled coffee roasters in the country to bring you a coffee experience that’s truly amazing.
         but coffee only holds this magic for a few weeks! You deserve to treat yourself to a fresh brew if you’ve never experienced a perspective-altering cup of fresh flavorful coffee.
         </p>
        </div>
       </div>
        </div>

       <div className="row align-items-center mb-md-0">
         <div className="col-md-6 col-lg-5 px-0 px-md-3 ml-auto order-md-2">
           <div className="ratio ratio-1x1">
            <img className="img-fluid shadow-lg rounded-lg" src="https://sixteengrams.com/media/home-brew-crew.webp"/>
           </div>
        </div>
        <div className="col-md-6 col-lg-5 mx-auto order-md-1">
           <h2 className="display-3 my-4 mt-md-0 fw-bolder mb-3">Meet Your
           <br />
           <span className="pe-3" id='span1'>Brew</span>
           Crew
           </h2>
           <p className='lh-base' id='para1'>Our subscription connects you to the country’s best coffees and a team of passionate coffee experts who’ll personally handpick the beans [or grounds] that you will love!
           but coffee only holds this magic for a few weeks! You deserve to treat yourself to a fresh brew if you’ve never experienced a perspective-altering cup of fresh flavorful coffee.</p>
        </div>
       </div>
        
        {/* <div className="row align-items-center">
<div className="col-md-6 col-lg-5 px-0 px-md-3 mx-auto">
  <div className="ratio ratio-1x1">
  <img  class="img-fluid shadow-lg rounded-lg" src="https://sixteengrams.com/media/home-featured-roasters.webp" height="350" width="350"/>
  </div>
  <div class="col-md-6 col-lg-5 mx-auto">
<h2 class="display-3 fw-bolder my-4 mt-md-0">
It’s not coffee <br />
<span>if it's not fresh</span>
</h2>
<p>
Ever tasted fruits and berries in your coffee? We’re not kidding. Freshly roasted coffee explodes with flavour. Natural oils from fresh beans break down to create a confluence of myriad aromas and flavours, but coffee only holds this magic for a few weeks! You deserve to treat yourself to a fresh brew if you’ve never experienced a perspective-altering cup of fresh flavorful coffee.
</p>
  </div>
</div>




        </div> */}
       <div className="row align-item-center mb-4 mt-5 ">
        <div className="col-md-6 col-lg-5 px-0 px-md-3 mx-auto">
          <img  class="img-fluid shadow-lg rounded-lg" src="https://sixteengrams.com/media/home-fresh-coffee.webp" height="350" width="350"/>
        </div>
        <div className="col-md-6 col-lg-5 mx-auto align-item-center mt-5">
        <h2 class="display-3 fw-bolder my-4 mt-md-0">
It’s not coffee <br />
<span id='span1'>if it's not fresh</span>
</h2>
         <p id='para1'>
Ever tasted fruits and berries in your coffee? We’re not kidding. Freshly roasted coffee explodes with flavour. Natural oils from fresh beans break down to create a confluence of myriad aromas and flavours, but coffee only holds this magic for a few weeks! You deserve to treat yourself to a fresh brew if you’ve never experienced a perspective-altering cup of fresh flavorful coffee.
</p>
        </div>
       </div>








    </div> 
//    
  )
}

export default Blog