import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { NavLink } from 'react-router-dom'

const Shop = () => {
  return (
    <>

    <Header/>
    <div class="page">
      <div class="container">
        <div class="row">
          <span><NavLink to="/"><i class="fa-solid fa-house"></i></NavLink> / Shop</span>
        </div>
      </div>
    </div>
    

    <section class="products mt-5">
      <div class="container">
        <div class="row">

          <div class="col-lg-2 col-md-3 col-sm-4 col-6">
            <div class="b_single b_single2 text-center">

              <div class="b_single_item">
                <img src="images/book1.png" class="img-fluid" alt="bookworms"/>

                <div class="b_overlay">
                  <ul class="list-inline text-center">
                    <li class="list-inline-item">
                      <a href="#"><i class="fa-solid fa-eye"></i></a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#"><i class="fa-solid fa-heart"></i></a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
                    </li>
                    
                  </ul>
                </div>

                <div class="overlay_bg"></div>
              </div>

              <div class="price text-start">
                <h3>Sherlock Holmes</h3>
                <p>$35.00</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <Footer/>

    </>
  )
}

export default Shop