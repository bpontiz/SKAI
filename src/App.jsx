import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from '../src/Components/ItemListContainer/ItemListContainer';
import CardModel from './Components/CardModel/CardModel';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="" />
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
