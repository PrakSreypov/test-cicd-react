import React from 'react';
import './App.css'; // Import CSS file
import logo from './logo.svg'; // Import logo

function App() {
  return (
    <div className="App"> {/* Add class to center content */}
      <header>
        <h1>Test deployment</h1>
      </header>
      <main>
        <img src={logo} className="App-logo" alt="logo" /> {/* Use imported logo */}
      </main>
      <footer>
        <p>&copy; 2024</p>
      </footer>
    </div>
  );
}

export default App;
