import React from 'react';
import GlobalStyle from './assets/styles/globalStyle';
import Router from './Router';
import ErrorBoundary from './pages/ErrorBoundary';
// import NotFoundError from './pages/NotFoundError';

export default function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ErrorBoundary>
        <Router />
      </ErrorBoundary>
    </div>
  );
}
