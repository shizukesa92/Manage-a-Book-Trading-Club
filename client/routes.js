import React from "react";
import {
	Route,
	Switch
} from "react-router-dom";
import {
	connect
} from 'react-redux'
import Home from './modules/App/App';

import Signup from './containers/Signup'
import Login from './containers/Login'
import Allbooks from './containers/Allbooks'
import Mybooks from './containers/Mybooks'
import Settings from './containers/Settings'

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
                    <Route exact path='/allbooks' render={() => (

                        this.props.isAuthenticated ? (
                            <Allbooks />
                        ) : (
                            <Redirect to="/"/>
                            
                        )
                        )}/>
                    <Route exact path='/mybooks' render={() => (

                        this.props.isAuthenticated ? (
                            <Mybooks />
                        ) : (
                            <Redirect to="/"/>
                            
                        )
                        )}/>
                    <Route exact path='/settings' render={() => (

                        this.props.isAuthenticated ? (
                            <Settings />
                        ) : (
                            <Redirect to="/"/>
                            
                        )
                        )}/>

                    </Switch>);

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Routes)
