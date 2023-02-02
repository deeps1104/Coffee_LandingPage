import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer class="section bg-footer">
    <div class="container">
            <div class="row">
                <div class="col-lg-3">
                    <div class="">
                        <h6 class="footer-heading text-uppercase ">Information</h6>
                        <ul class="list-unstyled footer-link mt-4">
                            <li><a href="">Pages</a></li>
                            <li><a href="">Our Team</a></li>
                            <li><a href="">Coffee Guide</a></li>
                            <li><a href="">Pricing</a></li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-3">
                    <div>
                        <h6 class="footer-heading text-uppercase">Resource</h6>
                        <ul class="list-unstyled footer-link mt-4">
                            <li><a href="">Coffee </a></li>
                            <li><a href="">Equipment</a></li>
                            <li><a href="">Pantry</a></li>
                            <li><a href="">Merchandise</a></li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-2">
                    <div class="">
                        <h6 class="footer-heading text-uppercase">Help</h6>
                        <ul class="list-unstyled footer-link mt-4">
                            <li><a href="">Sign Up </a></li>
                            <li><a href="">Login</a></li>
                            <li><a href="">Terms of Services</a></li>
                            <li><a href="">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="">
                        <h6 class="footer-heading text-uppercase">Contact Us</h6>
                        <p class="contact-info mt-4">Contact us if need help withanything</p>
                        <p class="contact-info">+01 123-456-7890</p>
                        <div class="mt-5">
                            <ul class="list-inline">
                                <li class="list-inline-item"><a href="#"><i class="fab facebook footer-social-icon fa-facebook-f"></i></a></li>
                                <li class="list-inline-item"><a href="#"><i class="fab twitter footer-social-icon fa-twitter"></i></a></li>
                                <li class="list-inline-item"><a href="#"><i class="fab google footer-social-icon fa-google"></i></a></li>
                                <li class="list-inline-item"><a href="#"><i class="fab apple footer-social-icon fa-apple"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div class="text-center mt-5">
          <hr />
            <p class="footer-alt mb-0 f-14" id='reserve1'>2023 © Coffee Cafe, All Rights Reserved</p>
        </div>
        </footer>
    
  )
}

export default Footer