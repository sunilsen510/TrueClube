import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Health from './pages/Health';
import Footer from './components/Footer';

function App() {


  return (
    <>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/health' element={<Health />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
