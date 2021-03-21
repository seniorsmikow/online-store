import React from 'react'
import './App.scss'
import {Route, HashRouter} from 'react-router-dom'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar';
import Smartphones from './pages/Products/Smartphones'
import Watches from './pages/Products/Watches'
import VideoGames from './pages/Products/Videogames'



function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <Sidebar />
        
        <Route path='/smartphones' render={ () => <Smartphones /> } />
        <Route path='/watches' render={ () => <Watches /> } />
        <Route path='/videogames' render={ () => <VideoGames /> } />
      </HashRouter>
    </div>
  );
}

export default App