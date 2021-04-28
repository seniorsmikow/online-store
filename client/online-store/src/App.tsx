import React from 'react'
import './App.scss'
import {HashRouter} from 'react-router-dom'
import AppRouter from './components/AppRouter/AppRouter'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'


const App = () => {

  return (
    <div className="App">
      <HashRouter>
          <Header />
          <Sidebar />

          <AppRouter />
      </HashRouter>
    </div>
  );
}

export default App