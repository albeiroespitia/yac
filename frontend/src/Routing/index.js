import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from '../Pages/Login'

const App = () => {
  return (
    <Router>
      <Route exact path="/login" component={Login}/>
    </Router>
  );
}

export default App
