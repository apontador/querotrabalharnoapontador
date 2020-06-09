import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import NewPlace from './components/NewPlace'

function App() {
   return (
    <Router basename={"/"} >      
      <Header />
      <Switch>              
        <Route path="/" exact component={Home} />
      </Switch> 
      <Switch>              
        <Route path="/new-place" component={NewPlace} />
      </Switch>      
    </Router>
  );
}

export default App;
