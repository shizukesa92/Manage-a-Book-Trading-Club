import React, {
	Component
} from 'react'
import {
	connect
} from 'react-redux'
import Paper from 'material-ui/Paper'
import Star from 'material-ui/svg-icons/toggle/star';

import {} from '../User/UserActions'
class Home extends Component {
	constructor() {
		super()

	}

	render() {

		return (
			<div>
				<h1>Welcome to the book trading App!</h1>
            </div>
		)
	}




}

const mapStateToProps = (state) => {
	return {

	}
}
const mapDispatchToProps = (dispatch) => {
	return {

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
