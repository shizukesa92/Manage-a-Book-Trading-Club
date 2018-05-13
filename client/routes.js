import React from "react";
import {
	Route,
	Switch
} from "react-router-dom";
import {
	connect
} from 'react-redux'
import Home from './modules/App/App';

import Signup from './modules/User/Signup'
import Login from './modules/User/Login'
import Mybooks from './modules/Book/Mybooks'

class Routes extends React.Component {

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

                    <Route exact path='/mybooks' render={() => (

                        this.props.isAuthenticated ? (
                            <Mybooks />
                        ) : (
                            <Redirect to="/"/>
                            
                        )
                        )}/>

                    </Switch>);

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Routes)
