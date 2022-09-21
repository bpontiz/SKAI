import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Greeting from './Components/Greeting/Greeting';
import MedicalService from './Components/MedicalService/MedicalService';
import About from './Components/About/About';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Cart from './Components/Cart/Cart';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import React from 'react';
import CartProvider from './Context/CartContext/CartContext';

AOS.init();

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Greeting greeting="" />
          <About />
          <MedicalService />
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/services" element={<ItemListContainer />} />
              <Route path="/services/:detailId" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
