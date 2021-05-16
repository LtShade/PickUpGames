import About from "./About";
import Header from "./Header";
import Home from "./Home";
import React, { Component } from "react";
import { Switch, Route } from "react-router";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    staticresults: state.staticresults,
    categories: state.categories,
  };
};

class Main extends Component {
  render() {
    const HomePage = () => {
      return (
        <>
          <Home
            staticresults={this.props.staticresults}
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
          <Route path="/:filter" component={HomePage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));
