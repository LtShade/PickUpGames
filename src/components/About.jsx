import React, { Component } from "react";

class About extends Component {
	render() {
		return (
			<>
				<div className="row pY">
					<div className="col">
						<h2>What the heck am I looking at?</h2>
						<div className="row">
							<div className="col-3 col-left">
								Pick-Up Games is a lightweight, personal, project for HTML, CSS,
								and JavaScript experimentation. The premise for this application
								is to be a one-stop-shop for finding a game or players
								regardless of sport or genre. Pick-Up Games will cover UI/UX
								functionality, CRUD operations to the core database, and API
								calls to external resources.
							</div>
						</div>
					</div>
				</div>

				<div className="row pY">
					<div className="col">
						<h2>What's Included?</h2>
						<div className="row">
							Pick-Up Games utilizes a few frameworks and libraries, including:
							<div className="col-4 col-left">
								<ul>
									<li>React</li>
									<li>React Router Dom</li>
									<li>Redux</li>
									<li>React-Redux-Form</li>
									<li>Redux-Thunk</li>
									<li>Redux-Logger</li>
									<li>react-datez</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default About;
