import React from 'react';
import './App.scss';
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar';
import Smartphone from './pages/Products/Smartphone'
import Brands from './components/brands/brands'


function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      {/* <Smartphone /> */}
      <Brands />
    </div>
  );
}

export default App;