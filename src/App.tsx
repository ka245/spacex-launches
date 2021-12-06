import React from 'react';
import './App.css';
import LaunchesList from './components/LaunchesList';
import { Container } from '@mui/material';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">SpaceX rocket launches</h1>
      </header>
      <Container>
        <LaunchesList />
      </Container>
    </div>
  );
}

export default App;
