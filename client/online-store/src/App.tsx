import React from 'react';
import './App.scss';
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar';
import Smartphone from './pages/Products/Smartphone'

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Smartphone />
    </div>
  );
}

export default App;
