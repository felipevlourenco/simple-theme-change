import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components'
import { GlobalStyles, darkTheme, lightTheme } from './theme'
import './App.css';

function App() {
  const [theme, setTheme] = useState('light')

  const handleThemeChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className="App">
        <header className="App-header">
          <h1>App Header</h1>
        </header>
        <div className="App-Body">
          <p>App Body</p>
          <button onClick={handleThemeChange}>Change theme</button>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
