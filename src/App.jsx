import React, { useState } from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import SingleProduct from './pages/SingleProduct'
import Header from './components/Header'
import Footer from './components/Footer'
import Cart from './pages/Cart'

export default function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product/:id' element={<SingleProduct/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      <Footer/>
    </>
  )
}
