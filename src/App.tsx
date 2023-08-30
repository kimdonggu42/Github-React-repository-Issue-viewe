import React from 'react';

import GlobalStyle from './assets/styles/globalStyle';
import IssueList from './pages/IssuesList';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <IssueList />
    </div>
  );
}

export default App;
