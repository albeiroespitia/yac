import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import Chat from '../Pages/Chat'
import './global.css'
import SnackBar from '../Helpers/SnackBar'
import Auth from '../Helpers/Auth'

const App = () => {
  return (
		<>
			<SnackBar/>
    	<Router>
				<Auth/>
      	<Route exact path="/login" component={Login}/>
      	<Route exact path="/signup" component={Signup}/>
				<Route exact path="/chat" component={Chat}/>
    	</Router>
		</>
	);
}

export default App
