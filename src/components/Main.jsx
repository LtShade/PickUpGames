import About from "./About";
import Header from "./Header";
import Home from "./Home";
import AddPosting from "./AddPosting";
import React, { Component } from "react";
import { Switch, Route } from "react-router";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { actions } from "react-redux-form";
import {
	fetchCategories,
	fetchDirectory,
	postPosting,
} from "../redux/ActionCreators";

const mapStateToProps = (state) => {
	return {
		directory: state.directory,
		categories: state.categories,
		posting: state.posting,
	};
};

const mapDispatchToProps = {
	fetchCategories: () => fetchCategories(),
	fetchDirectory: () => fetchDirectory(),
	postPosting: (posting) => postPosting(posting),
	resetPostingForm: () => actions.reset("addPostingForm"),
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
					<Route
						exact
						path="/addposting"
						render={() => (
							<AddPosting
								resetPostingForm={this.props.resetPostingForm}
								postPosting={this.props.postPosting}
							/>
						)}
					/>
					<Route path="/:filter" component={HomePage} />
					<Route path="/" component={HomePage} />
				</Switch>
			</div>
		);
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
