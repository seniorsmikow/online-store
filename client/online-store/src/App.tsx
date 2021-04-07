import React, {useEffect} from 'react'
import './App.scss'
import {connect} from 'react-redux'
import {checkUserAuth} from './Redux/users' 
import {AppStateType} from './Redux/store'
import {Route, HashRouter} from 'react-router-dom'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar';
import Smartphones from './Pages/Products/Smartphones'
import Watches from './Pages/Products/Watches'
import VideoGames from './Pages/Products/Videogames'
import Main from './Pages/Main/Main'
import AdminPanel from './Pages/AdminPanel/AdminPanel'

type PropsType = {
  checkUserAuth: () => void,
  isAuth: boolean
}


const App: React.FC<PropsType> = props => {

  const check = props.checkUserAuth

  useEffect(() => {
    check()
  })

  return (
    <div className="App">
      <HashRouter>
          <Header />
          <Sidebar />

          <Route path='/smartphones' render={() => <Smartphones /> } />
          <Route path='/watches' render={() => <Watches /> } />
          <Route path='/videogames' render={() => <VideoGames /> } />
          <Route exact path='/' render={() => <Main />} />
          <Route path='/adminPanel' render={() => <AdminPanel />} />
      </HashRouter>
    </div>
  );
}

const mapStateToProps = (state: AppStateType) => {
  return {
    isAuth: state.user.isAuth
  }
}

export default connect(mapStateToProps, {checkUserAuth})(App)