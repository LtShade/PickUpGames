import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
	FaChess,
	FaDiceD20,
	FaFootballBall,
	FaFortAwesome,
	FaUserFriends,
} from "react-icons/fa";
import { Fade, Stagger } from "react-animation-components";
import { Loading } from "./Loading";

class Home extends Component {
	componentDidMount() {}

	//I feel dirty for doing this.
	getTheme() {
		console.log(this.props.theme);
		if (typeof this.props.theme != "object") {
			return {
				name: "fallback",
				color1: "",
				color2: "",
				bkgrnd1: "",
				bkgrnd2: "",
				bkgrnd3: "",
			};
		} else {
			return this.props.theme;
		}
	}

	render() {
		let page = window.location.pathname.replace("/", "");
		let filteredResults = this.props.directory.directory;
		if (page !== "" && page !== "all") {
			filteredResults = this.props.directory.directory.filter(
				(r) => r.icons.filter((cur) => cur === page)[0]
			);
		}

		return (
			<div className=" centerContent">
				<div className="col-1" />
				<div className="col-3">
					<Listing
						searchResults={filteredResults}
						categories={this.props.categories}
						theme={this.getTheme()}
					/>
				</div>
				<div className="col-7 center">
					<Map theme={this.getTheme()} />
				</div>
				<div className="col-1" />
			</div>
		);
	}
}

const Map = () => {
	return (
		<>
			<img
				src="img/PlaceholderMap.jpg"
				className="rnd-hvy lg-remove"
				alt="Pay Google Later"
			/>
		</>
	);
};

const Listing = (props) => {
	if (props.categories.isLoading) {
		return (
			<div className="row">
				<RandomButton list={props.categories.categories} theme={props.theme} />
				<FilterButton list={props.categories.categories} theme={props.theme} />
				<div id="results" className="row">
					<div className="col">
						<Loading />
					</div>
				</div>
			</div>
		);
	} else if (props.categories.errMess) {
		return (
			<div className="row">
				<RandomButton list={props.categories.categories} theme={props.theme} />
				<FilterButton list={props.categories.categories} theme={props.theme} />
				<div id="results" className="row">
					<div className="col">{props.categories.errMess}</div>
				</div>
			</div>
		);
	} else {
		return (
			<div className="row">
				<RandomButton list={props.categories.categories} theme={props.theme} />
				<FilterButton list={props.categories.categories} theme={props.theme} />
				<div id="results" className="row">
					<div className="col">
						{/* List top 5 for demo */}
						<ListResults
							results={props.searchResults.slice(0, 5)}
							theme={props.theme}
						/>
					</div>
				</div>
			</div>
		);
	}
};

const ListResults = ({ results }) => {
	if (results) {
		return (
			<div>
				<Stagger in delay={200}>
					{results.map((result) => {
						return (
							<Fade in key={results.id}>
								<div key={result.id} className="result rnd">
									<div className="">
										<h5 className="">{result.title}</h5>

										<div className="genre-tokens">
											<ResultIcons result={result} />
										</div>

										<p className="">{result.briefDesc}</p>
									</div>
								</div>
							</Fade>
						);
					})}
					<Fade in key="addListing">
						<Link id="addListing" to="/addposting" className="link-btn">
							<div className="btn btnPUGP">Add Your Own Listing</div>
						</Link>
					</Fade>
				</Stagger>
			</div>
		);
	} else {
		return <></>;
	}
};

class ResultIcons extends Component {
	constructor(props) {
		super(props);
		this.state = {
			iconAtheletic: "hidden",
			iconBoardgame: "hidden",
			iconRoleplay: "hidden",
			iconTabletop: "hidden",
			iconOther: "hidden",
		};
	}

	render() {
		return (
			<>
				<FaFootballBall
					className={this.props.result.iconAtheletic ? "" : "hidden"}
				/>
				{"   "}
				<FaChess className={this.props.result.iconBoardgame ? "" : "hidden"} />
				{"   "}
				<FaDiceD20 className={this.props.result.iconRoleplay ? "" : "hidden"} />
				{"   "}
				<FaFortAwesome
					className={this.props.result.iconTabletop ? "" : "hidden"}
				/>
				{"   "}
				<FaUserFriends
					className={this.props.result.iconOther ? "" : "hidden"}
				/>
			</>
		);
	}
}

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

class RandomButton extends Component {
	render() {
		let text = "All";
		const list = this.props.list;
		if (list.length !== 0) {
			if (
				window.location.pathname !== "/" &&
				window.location.pathname !== "/all"
			) {
				text = list.filter(
					(category) =>
						category.id === window.location.pathname.replace("/", "")
				)[0].name;
			}
		}
		console.log(text);
		console.log(this.props.theme);

		return (
			<div className="col-6">
				<div
					id="selFilter"
					className={`btn-nohover btnPUGP ${this.props.theme.color1} ${this.props.theme.bkgrnd4}   `}
				>
					{text}
				</div>
			</div>
		);
	}
}

export default Home;
