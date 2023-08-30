import React from 'react';

import GlobalStyle from './assets/styles/globalStyle';
import Router from './Router';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Router />
    </div>
  );
}

export default App;
