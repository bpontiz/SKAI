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
        <ItemListContainer />
        <Routes>
          {/* <Route path="/" element={<ItemListContainer />} />
          <Route path="/services/:id" element={<ItemListContainer />} /> */}
          <Route path="/detail/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
