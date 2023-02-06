import React from 'react'
// import "./Contact.css"
const Contact = () => {
 
  return (
    
    <div>
      <div class="container my-5">
    <div class="row justify-content-center">
      <div class="col-lg-9">
        <h1 class="mb-3">ENQUIRY WITH US</h1>
        <p>Leave us a message</p>
        <form>
          <div class="row g-3">
            <div class="col-md-6">
              <label for="your-name" class="form-label">Name</label>
              <input type="text" class="form-control" id="your-name"  placeholder="Your-Name"required/>
            </div>
            <div class="col-md-6">
              <label for="your-email" class="form-label">Email</label>
              <input type="email" class="form-control"  placeholder="Your-email" required/>
            </div>
            <div class="col-md-6">
              <label for="your-surname" class="form-label">Contact No.</label>
              <input type="number" class="form-control"  placeholder="Your-Contact" required/>
            </div>
            <div class="col-md-6">
              <label for="your-surname" class="form-label">What is this about</label>
              <input type="text" class="form-control"  placeholder="What is this about ?" required/>
            </div>
            <div class="col-md-6">
<label>In Rreference To</label>
                  &nbsp; &nbsp; &nbsp; <input type="radio"  value="order" /> Order
                  &nbsp; &nbsp; <input type="radio"  value="Product" /> Product
                  &nbsp; &nbsp; <input type="radio"  value="other" /> Other<br />
            </div>
            
            <div class="col-12">
              <label for="your-message" class="form-label">Message</label>
              <textarea class="form-control"  rows="5" required placeholder='Your Message here'></textarea>
            </div>
            <div class="col-12">
              <div class="row">
                <div class="col-md-6">
                  <button type="submit" class="btn btn-dark w-100 fw-bold" style={{letterSpacing:"2px"}}>Submit</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>   
  </div>
 
    </div>
  )
}

export default Contact