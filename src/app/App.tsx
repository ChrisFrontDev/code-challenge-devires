import React from 'react';

import Home from '../pages/Home/Home';

import GlobalStyle from '../styles/global';

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Home />
      </div>
    </>
  );
}

export default App;
