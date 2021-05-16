import React, { Component } from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
  let page = window.location.pathname.replace("/", "");
  let filteredResults = props.staticresults;
  if (page !== "" && page !== "all") {
    filteredResults = props.staticresults.filter(
      (r) => r.icons.filter((cur) => cur === page)[0]
    );
  }

  return (
    <div className=" centerContent">
      <div className="col-1" />
      <div className="col-3">
        <Listing
          searchResults={filteredResults}
          categories={props.categories}
        />
      </div>
      <div className="col-7 center">
        <Map />
      </div>
      <div className="col-1" />
    </div>
  );
};

const Map = () => {
  return (
    <>
      <img src="img/PlaceholderMap.jpg" className="rnd-hvy lg-remove" />
    </>
  );
};

const Listing = ({ searchResults, categories }) => {
  return (
    <div className="row">
      <RandomButton list={categories} />
      <FilterButton list={categories} />
      <div id="results" className="row">
        <div className="col">
          <ListResults results={searchResults} />
        </div>
      </div>
    </div>
  );
};

const ListResults = ({ results }) => {
  if (results) {
    return (
      <div>
        {results.map((result) => {
          return (
            <div key={result.id} className="result rnd">
              <div className="">
                <h5 className="">{result.title}</h5>
                <div className="genre-tokens">[Placeholder for icons.]</div>
                <p className="">{result.briefDesc}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  } else {
    return <></>;
  }
};

class FilterButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  toggleFilterMenu = () => {
    this.setState({
      expanded: !this.state.expanded,
    });
  };

  render() {
    return (
      <div className="col-6 ">
        <div
          className="btn btnPUGS "
          id="dpdFilter"
          onClick={this.toggleFilterMenu}
        >
          Filter Results
          <FilterDropdown
            expanded={this.state.expanded}
            categories={this.props.list}
          />
        </div>
      </div>
    );
  }
}

class FilterDropdown extends Component {
  render() {
    if (this.props.expanded) {
      return (
        <>
          <div className="drop-menu">
            {this.props.categories.map((category) => {
              return (
                <>
                  <Link
                    className="drop-item"
                    key={category.id}
                    to={"/" + category.id}
                  >
                    {category.name}
                  </Link>
                </>
              );
            })}
          </div>
        </>
      );
    } else {
      return <></>;
    }
  }
}

const RandomButton = (props) => {
  let text = "All";
  if (window.location.pathname !== "/") {
    text = props.list.filter(
      (category) => category.id === window.location.pathname.replace("/", "")
    )[0].name;
  }

  return (
    <div className="col-6">
      <div id="selFilter" className="btn-nohover btnPUGP">
        {text}
      </div>
    </div>
  );
};

export default Home;
