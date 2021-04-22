import React from 'react'
import './App.css'
import SectionOne from './components/SectionOne'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {
    return (
        <Router className='App'>
            <Switch>
                <Route path='/portfolio_idea' component={SectionOne} exact/>
            </Switch>
        </Router>
    )
}

export default App
