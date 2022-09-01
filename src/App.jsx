import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Greeting from './Components/Greeting/Greeting';
import MedicalService from './Components/MedicalService/MedicalService';
import About from './Components/About/About';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();
function App() {
  return (
    <div className="App">
      <NavBar />
      <Greeting greeting="" />
      <About />
      <MedicalService />
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
