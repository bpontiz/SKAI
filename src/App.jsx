import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Greeting from './Components/Greeting/Greeting';
import MedicalService from './Components/MedicalService/MedicalService';
import About from './Components/About/About';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes , Route } from 'react-router-dom';

AOS.init();
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Greeting greeting="" />
        <About />
        <MedicalService />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/services" element={<ItemListContainer />} />
          <Route path="/services/:detailId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
