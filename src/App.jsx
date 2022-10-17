import './App.css';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Greeting from './Components/Greeting/Greeting';
import MedicalService from './Components/MedicalService/MedicalService';
import About from './Components/About/About';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Cart from './Components/Cart/Cart';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import React from 'react';
import CartProvider from './Context/CartContext/CartContext';
import Footer from './Components/Footer/Footer';


AOS.init();

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Greeting greeting="" />
            <Routes>
              <Route 
                path="/" 
                element={
                  <>
                    <About />
                    <MedicalService />
                    <ItemListContainer />
                    <Footer />
                  </>
                } 
              />
              <Route 
                path="/services" 
                element={
                  <>
                    <ItemListContainer />
                  </>
                } 
              />
              <Route 
                path="/category/:categoryId" 
                element={
                  <>
                    <ItemListContainer />
                  </>
                } 
              />
              <Route 
                path="/services/:detailId" 
                element={
                  <>
                    <ItemDetailContainer />
                    <Footer />
                  </>
                }
              />
              <Route 
                path="/cart"
                element={
                  <>
                    <Cart />
                    <Footer />
                  </>
                } 
              />
              <Route path="/contact" element={<Footer />} />
            </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
