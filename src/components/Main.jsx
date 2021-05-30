import About from "./About";
import Header from "./Header";
import Home from "./Home";
import AddPosting from "./AddPosting";
import React, { Component } from "react";
import { Switch, Route } from "react-router";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCategories, fetchDirectory } from "../redux/ActionCreators";

const mapStateToProps = (state) => {
	return {
		directory: state.directory,
		categories: state.categories,
	};
};

const mapDispatchToProps = {
	fetchCategories: () => fetchCategories(),
	fetchDirectory: () => fetchDirectory(),
};

class Main extends Component {
	componentDidMount() {
		this.props.fetchCategories();
		this.props.fetchDirectory();
	}
	render() {
		const HomePage = () => {
			return (
				<>
					<Home
						directory={this.props.directory}
						categories={this.props.categories}
					/>
				</>
			);
		};

		return (
			<div className="centerContent">
				<Header />
				<Switch>
					<Route path="/about" component={About} />
					<Route path="/addposting" component={AddPosting} />
					<Route path="/:filter" component={HomePage} />
					<Route path="/" component={HomePage} />
				</Switch>
			</div>
		);
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
