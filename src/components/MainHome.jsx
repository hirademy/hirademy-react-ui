import React from 'react'
import '../App.css';
import Footer from './Footer';
import Home from './Home';
import Header from './Header';


const MainHome = () => {
  return (
    
    <div className="App">
    <Header/>
    <Home/>
    <Footer/>
  </div>
  )
}

export default MainHome