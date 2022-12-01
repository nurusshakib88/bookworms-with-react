import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import { NavLink } from 'react-router-dom'

const Contact = () => {
  return (
    <>
    <Header/>
    <div class="page">
      <div class="container">
        <div class="row">
          <span><NavLink to="/"><i class="fa-solid fa-house"></i></NavLink> / Contact</span>
        </div>
      </div>
    </div>


    <Footer/>
    </>
  )
}

export default Contact