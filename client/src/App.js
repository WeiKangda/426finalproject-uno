import './App.css'
import { Route } from 'react-router-dom'
import Homepage from './components/Homepage'
import Game from './components/Game'
import History from './components/History'
import Startpage from './components/Startpage'
import Signup from './components/Signup'
import ForgotPassword from './components/ForgotPassword'
import Contact from './components/Contact'
import { AuthProvider } from './contexts/AuthContext'
import Gamepage from './components/Gamepage'

const App = () => {
  return (
    <div className="App">
      <AuthProvider>
        <Route exact path='/' exact component={Startpage} />
        <Route exact path='/home' exact component={Homepage} />
        <Route path='/play' exact component={Game} />
        <Route path='/gamepage' exact component={Gamepage} />
        <Route path="/signup" component={Signup} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route exact path="/history" component = {History}/>
        <Route exact path="/game" component = {Game}/>
        <Route exact path="/contact" component = {Contact}/>
      </AuthProvider>
      
    </div>
  )
}

export default App
