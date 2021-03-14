import React, { MouseEvent, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [theme, setTheme] = useState("dark")
const handleSwitchTheme = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setTheme(theme === "dark" ? "light" : "dark")
  } 
  return (
    <div className="App" data-theme={theme}>
      <header className="App-header bg-primary text-secondary">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a 
            className="text-accent bg-secondary rounded mt-2 px-2"
            href="#"
          target="_blank"
          onClick={handleSwitchTheme}
            rel="noopener noreferrer"
          >
            Switch theme
          </a>
      </header>
    </div>
  );
}

export default App;
