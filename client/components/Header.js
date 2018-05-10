import React, {
	Component
} from 'react';
import {
	connect
} from 'react-redux'
import {
	Link
} from 'react-router-dom'
import {
	Toolbar,
	ToolbarGroup,
	ToolbarSeparator,
	ToolbarTitle
} from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton'

import {
	logout
} from '../modules/User/UserActions'

const style = {
	background: {
		background: '#B71C1C',
		color: '#e5e5e5'
	},
	decoration: {
		padding: '0px 10px',
		textDecoration: 'none',
		color: '#e5e5e5',

	},
	flex: {
		display: 'flex',
	},
	cursor: {
		cursor: 'pointer',
		paddingLeft: '10px',
		paddingRight: '30px',
		textDecoration: 'none',
		color: '#e5e5e5',
	},
	link: {
		textDecoration: 'none'
	}
}


class Header extends Component {
	constructor() {
		super()
	}

	render() {
		return (
			<div id="header">
				                <Toolbar  style={style.background}>
                    <ToolbarGroup firstChild={true}>
                    <Link style={style.decoration} to = '/'><h2  style={style.decoration} >Book Trading Club</h2></Link>
                    </ToolbarGroup>
                    <ToolbarGroup lastChild={true}>
                    {this.props.isAuthenticated?
                    (
                    <div style = {style.flex}>
                    <Link style={style.decoration} to = '/allbooks'><h2  style={style.decoration} >Browse</h2></Link>
                    <Link style={style.decoration} to = '/mybooks'><h2  style={style.decoration} >{this.props.name}</h2></Link>
                     <h2 style={style.cursor} onClick={()=>{this.props.logout()}}>Logout</h2>
                     
                    </div>
                    ):
                    (
                    <div style = {style.flex}>
                        <Link style={style.decoration} to = '/signup'><h2  style={style.decoration} >Sign up</h2></Link>
                        <Link style={style.decoration} to = '/login'><h2  style={style.decoration} >Login</h2></Link>
                    </div>
                    )}
                    </ToolbarGroup>
                </Toolbar>
        </div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isAuthenticated: state.user.isAuthenticated,
		name: state.user.user.name
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		logout: () => {
			dispatch(logout())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
