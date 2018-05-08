import React, {
	Component
} from "react";
import ReactDOM from "react-dom";
import {
	BrowserRouter
} from "react-router-dom";
import Routes from "./routes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {
	connect
} from 'react-redux'

require("./main.scss");
require("./components/Components.scss");
require("./modules/App/App.scss")

class App extends Component {

	render() {
		return (
			<BrowserRouter>
			<div id = "wrapper">
            <Header />
			<div id ="content">
				<Routes />
			</div>
	<Footer />
</div>
			</BrowserRouter>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isAuthenticated: state.user.isAuthenticated
	}
}
const mapDispatchToProps = (dispatch) => {
	return {

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
