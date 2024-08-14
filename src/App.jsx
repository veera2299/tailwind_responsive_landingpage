import React, { useEffect, useState } from 'react'
import NavBar from './components/Navbar/NavBar'
import Hero from './components/Hero/Hero'
import Products from './components/Products/Products';
import AOS from 'aos';
import "aos/dist/aos.css"
import TopProducts from './components/top_products/TopProducts';
import Banner from './components/Banner/Banner';
import Subscribe from './components/subscribe/Subscribe';
import Testinomial from './components/Testinomial/Testinomial';
import Footer from './components/footer/Footer';
import Popup from './components/popup/Popup';

const App = () => {
  const [showPopup,setShowPopup] =useState(false);

  const popupHandler = ()=>{
    setShowPopup(true);
  }

  useEffect(()=>{
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay:100,
    });
    AOS.refresh();
  },[]);

  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200'>
      <NavBar popupHandler={popupHandler} />
      <Hero popupHandler={popupHandler} />
      <Products/>
      <TopProducts popupHandler={popupHandler} />
      <Banner/>
      <Subscribe />
      <Products />
      <Testinomial/>
      <Footer/>
      <Popup showPopup={showPopup} setShowPopup={setShowPopup} />
    </div>
  )
}

export default App
