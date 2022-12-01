import React from 'react'
import Header from './components/Header'
import { NavLink } from 'react-router-dom'
import Footer from './components/Footer'

const Blog = () => {
  return (
    <>
    <Header/>
    <div class="page">
      <div class="container">
        <div class="row">
          <span><NavLink to="/"><i class="fa-solid fa-house"></i></NavLink> / Blog</span>
        </div>
      </div>
    </div>


    <Footer/>
    </>
  )
}

export default Blog