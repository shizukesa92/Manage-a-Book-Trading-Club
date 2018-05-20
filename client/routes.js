import React from "react";
import {
	Route,
	Switch,
	Redirect
} from "react-router-dom";
import {
	connect
} from 'react-redux'
import Home from './modules/App/App';

import Signup from './components/Signup'
import Login from './components/Login'
import Mybooks from './components/Mybooks'

export default class Routes extends React.Component {

	render() {
		return (

			<Switch>


                    <Route exact path='/' component={Home}/>


                    <Route exact path='/signup' render={() => (

                        this.props.isAuthenticated ? (
                            <Redirect to="/"/>
                        ) : (
                            <Signup/>
                        )
                        )}/>
                        <Route exact path='/login' render={() => (

                        this.props.isAuthenticated ? (
							<Redirect to="/"/>
                        ) : (
                            <Login/>
                        )
                        )}/>

/>

                    </Switch>);

	}
}
