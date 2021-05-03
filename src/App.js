import React from 'react'
import './App.css'
import Home from './components/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App = () => {
    return (
        <Router className='App'>
            <Switch>
                <Route path='/' component={Home} exact/>
            </Switch>
        </Router>
    )
}

export default App
