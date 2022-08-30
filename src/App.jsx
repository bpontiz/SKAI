import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Greeting from './Components/Greeting/Greeting';
import CardModel from './Components/CardModel/CardModel';
import About from './Components/About/About';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Greeting greeting="" />
      <About />
      <CardModel />
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
