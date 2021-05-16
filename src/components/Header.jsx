import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false,
    };
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  render() {
    return (
      <>
        <div className="row siteHeader centerContent rnd">
          <div classsName="col-1"></div>
          <div className="col-10">
            <h1>Pick-Up Games</h1>
            <div className="tagline pY">Looking for Group</div>
          </div>
          <div className="col-1 col-right navBar">
            <Link className="navLink " to="/">
              <FontAwesomeIcon icon={faHome} size="lg" />
            </Link>
            {" | "}
            <Link className="navLink " to="/about">
              <FontAwesomeIcon icon={faQuestionCircle} size="lg" />
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default Header;
