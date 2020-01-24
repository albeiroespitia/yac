import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import './global.css'
import store from '../Redux/store'
import { Provider } from 'react-redux'
import SnackBar from '../Helpers/SnackBar'

const App = () => {
  return (
		<Provider store={store}>
			<SnackBar/>
    	<Router>
      	<Route exact path="/login" component={Login}/>
      	<Route exact path="/signup" component={Signup}/>
    	</Router>
		</Provider>
	);
}

export default App
