import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import './global.css'

const App = () => {
  return (
    <Router>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/signup" component={Signup}/>
    </Router>
  );
}

export default App
