import React from 'react'
import './App.css'
import Header from './Componets/Header/Header'
import Home from './Componets/Home/Home'
import Menu from './Componets/Menu/Menu'
import About from './Componets/About/About'
import Products from './Componets/Products/Products'
import Review from './Componets/Reviews/Review'
import Footer from './Componets/Footer/Footer'

function App() {


  return (
    <>
      <Header />
      <main>
        <div id="home">
          <Home />
        </div>

        <div id="menu">
          <Menu/>
        </div>

        <div id="about">
          <About/>
        </div>

        <div id="products">
          <Products/>
        </div>

        <div id="reviews">
          <Review/>
        </div>
      </main>
      <Footer/>
    </>
  )
}

export default App
