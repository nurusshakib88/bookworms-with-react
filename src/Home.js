import React from 'react'
import { NavLink } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

const Home = () => {
  return (
    <>

    <Header/>


    <section className="banner">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-md-6 order-md-0 order-1">
            <div className="b_text">
              <h1>Find your desired books for the best price</h1>
              <p>Lorem ipsum dolor, sit amet, consectetur adipisicing elit. Libero, perferendis veritatis ea aliquid est repudiandae quisquam similique assumenda reprehenderit sequi, veniam, dignissimos dolorum minima, earum delectus vero. Rerum, voluptatem, quaerat?</p>

              <from action="" className="search_bar d-md-none d-lg-block">
                <i className="fa fa-search"></i>
                <input type="text" className="form-control form-input" placeholder="Search Books..."/>
                <span className="left-pan"><i className="fa fa-microphone"></i></span>
              </from>


            </div>
          </div>
          <div className="col-xl-7 col-md-6 align-self-end order-md-1 order-0">
            <div className="b_img">
              <img src="images/banner.png" className="img-fluid" alt="bookworms"/>
            </div>
          </div>
        </div>
        <div className="row">
              <from action="" className="search_bar d-lg-none d-md-block d-none">
                <i className="fa fa-search"></i>
                <input type="text" className="form-control form-input" placeholder="Search Books..."/>
                <span className="left-pan"><i className="fa fa-microphone"></i></span>
              </from>
        </div>
      </div>
    </section>




    <section className="products">
      <div className="container">

        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="h_section">
              <h1>best sellers</h1>
            </div>            
          </div>
        </div>
        <div className="row">


          <div className="col-lg-2 col-md-3 col-sm-4 col-6">
            <div className="b_single b_single2 text-center">

              <div className="b_single_item">
                <img src="images/book1.png" className="img-fluid" alt="bookworms"/>

                <div className="b_overlay">
                  <ul className="list-inline text-center">
                    <li className="list-inline-item">
                      <a href="#"><i className="fa-solid fa-eye"></i></a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#"><i className="fa-solid fa-heart"></i></a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#"><i className="fa-solid fa-cart-shopping"></i></a>
                    </li>
                    
                  </ul>
                </div>

                <div className="overlay_bg"></div>
              </div>

              <div className="price text-start">
                <h3>Sherlock Holmes</h3>
                <p>$35.00</p>
              </div>
            </div>
          </div> 
                  

          

        </div>
      </div>
    </section>

    {/* <section className="best_seller" id="best">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="h_section">
              <h1>best sellers</h1>
            </div>            
          </div>
        </div>
       
        <div className="best_slider text-center">

          <div>
            <div className="b_single text-center">

              <div className="b_single_item">
                <img src="images/book1.png" className="img-fluid" alt="bookworms"/>

                <div className="b_overlay">
                  <ul className="list-inline text-center">
                    <li className="list-inline-item">
                      <a href="#"><i className="fa-solid fa-eye"></i></a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#"><i className="fa-solid fa-heart"></i></a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#"><i className="fa-solid fa-cart-shopping"></i></a>
                    </li>
                    
                  </ul>
                </div>

                <div className="overlay_bg"></div>
              </div>

              <div className="price text-start">
                <h3>Sherlock Holmes</h3>
                <p>$35.00</p>
              </div>
            </div>            
          </div>
          <div>
            <div className="b_single text-center">

              <div className="b_single_item">
                <img src="images/book1.png" className="img-fluid" alt="bookworms"/>

                <div className="b_overlay">
                  <ul className="list-inline text-center">
                    <li className="list-inline-item">
                      <a href="#"><i className="fa-solid fa-eye"></i></a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#"><i className="fa-solid fa-heart"></i></a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#"><i className="fa-solid fa-cart-shopping"></i></a>
                    </li>
                    
                  </ul>
                </div>

                <div className="overlay_bg"></div>
              </div>

              <div className="price text-start">
                <h3>Sherlock Holmes</h3>
                <p>$35.00</p>
              </div>
            </div>            
          </div>

          <div>
            <div className="b_single text-center">

              <div className="b_single_item">
                <img src="images/book1.png" className="img-fluid" alt="bookworms"/>

                <div className="b_overlay">
                  <ul className="list-inline text-center">
                    <li className="list-inline-item">
                      <a href="#"><i className="fa-solid fa-eye"></i></a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#"><i className="fa-solid fa-heart"></i></a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#"><i className="fa-solid fa-cart-shopping"></i></a>
                    </li>
                    
                  </ul>
                </div>

                <div className="overlay_bg"></div>
              </div>

              <div className="price text-start">
                <h3>Sherlock Holmes</h3>
                <p>$35.00</p>
              </div>
            </div>            
          </div>

          <div>
            <div className="b_single text-center">

              <div className="b_single_item">
                <img src="images/book1.png" className="img-fluid" alt="bookworms"/>

                <div className="b_overlay">
                  <ul className="list-inline text-center">
                    <li className="list-inline-item">
                      <a href="#"><i className="fa-solid fa-eye"></i></a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#"><i className="fa-solid fa-heart"></i></a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#"><i className="fa-solid fa-cart-shopping"></i></a>
                    </li>
                    
                  </ul>
                </div>

                <div className="overlay_bg"></div>
              </div>

              <div className="price text-start">
                <h3>Sherlock Holmes</h3>
                <p>$35.00</p>
              </div>
            </div>            
          </div>

          <div>
            <div className="b_single text-center">

              <div className="b_single_item">
                <img src="images/book1.png" className="img-fluid" alt="bookworms"/>

                <div className="b_overlay">
                  <ul className="list-inline text-center">
                    <li className="list-inline-item">
                      <a href="#"><i className="fa-solid fa-eye"></i></a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#"><i className="fa-solid fa-heart"></i></a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#"><i className="fa-solid fa-cart-shopping"></i></a>
                    </li>
                    
                  </ul>
                </div>

                <div className="overlay_bg"></div>
              </div>

              <div className="price text-start">
                <h3>Sherlock Holmes</h3>
                <p>$35.00</p>
              </div>
            </div>            
          </div>

          <div>
            <div className="b_single text-center">

              <div className="b_single_item">
                <img src="images/book1.png" className="img-fluid" alt="bookworms"/>

                <div className="b_overlay">
                  <ul className="list-inline text-center">
                    <li className="list-inline-item">
                      <a href="#"><i className="fa-solid fa-eye"></i></a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#"><i className="fa-solid fa-heart"></i></a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#"><i className="fa-solid fa-cart-shopping"></i></a>
                    </li>
                    
                  </ul>
                </div>

                <div className="overlay_bg"></div>
              </div>

              <div className="price text-start">
                <h3>Sherlock Holmes</h3>
                <p>$35.00</p>
              </div>
            </div>            
          </div>


          

        </div>
      </div>
    </section>  */}





    <Footer/>

    </>
  )
}

export default Home