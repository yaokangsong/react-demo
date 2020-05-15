import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/list'
import List from './components/list';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="blank"
          rel="noopener noreferrer"
        >
          Learn React
  <List a={222}> ddddd <div>div</div></List>
        </a>
      </header>
    </div>
  )
}

export default App;
