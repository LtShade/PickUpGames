import React, { Component } from "react";
import { Control, LocalForm, Errors } from "react-redux-form";

import {
	FaChess,
	FaDiceD20,
	FaFootballBall,
	FaFortAwesome,
	FaUserFriends,
} from "react-icons/fa";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;

class AddPosting extends Component {
	constructor(props) {
		super(props);
		this.state = {
			atheleticClass: "icon",
			boardgameClass: "icon",
			roleplayClass: "icon",
			tabletopClass: "icon",
			otherClass: "icon",
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(values) {
		//Concatenate icon checks into an array
		const iconValues = [];
		console.log(values);
		//this.props.postPosting(values);
	}

	handleChange(values) {}

	handleUpdate(form) {
		//Find a better solution for this. I want check boxes but this is annoying and a pain in the butt pending new updates.
		form.iconAtheletic.value
			? this.setState({ atheleticClass: "icon-selected" })
			: this.setState({ atheleticClass: "icon" });
		form.iconBoardgame.value
			? this.setState({ boardgameClass: "icon-selected" })
			: this.setState({ boardgameClass: "icon" });
		form.iconRoleplay.value
			? this.setState({ roleplayClass: "icon-selected" })
			: this.setState({ roleplayClass: "icon" });
		form.iconTabletop.value
			? this.setState({ tabletopClass: "icon-selected" })
			: this.setState({ tabletopClass: "icon" });
		form.iconOther.value
			? this.setState({ otherClass: "icon-selected" })
			: this.setState({ otherClass: "icon" });
	}
	render() {
		return (
			<>
				<div className="row centerContent  pY">
					<div className="col-6 border-black rnd-hvy">
						<LocalForm
							model="addPostingForm"
							onSubmit={(values) => this.handleSubmit(values)}
							onChange={(values) => this.handleChange(values)}
							onUpdate={(form) => this.handleUpdate(form)}
						>
							<div className="row">
								<div className="col-2 col-right">
									<label htmlFor="addPostingForm.title">Title </label>
								</div>
								<div className="col-10 col-left">
									<Control.text
										model="addPostingForm.title"
										id="addPostingForm.title"
										name="title"
										placeholder="Title"
										className="border-black rnd"
										validators={{
											required,
											minLength: minLength(2),
											maxLength: maxLength(30),
										}}
									/>
									<Errors
										className=""
										model=".title"
										show="touched"
										component="div"
										messages={{
											required: "Required",
											minLength: "Must be at least 2 characters",
											maxLength: "Must be 30 characters or less",
										}}
									/>
								</div>
							</div>
							<div className="row">
								<div className="col-2 col-right">
									<label htmlFor="addPostingForm.briefDesc">
										Brief Description
									</label>
								</div>
								<div className="col-10 col-left">
									<Control.textarea
										model="addPostingForm.briefDesc"
										id="addPostingForm.briefDesc"
										name="briefDesc"
										placeholder="Enter a short description of what or who you want to find."
										className="border-black rnd"
										validators={{
											required,
											minLength: minLength(2),
										}}
									/>
									<Errors
										className=""
										model=".briefDesc"
										show="touched"
										component="div"
										messages={{
											required: "Required",
										}}
									/>
								</div>
							</div>

							<div className="row">
								<div className="col-2 col-right input-label">
									<label htmlFor="addPostingForm.date">Starting Date </label>
								</div>
								<div className="col-10 col-left">
									<Control
										model="addPostingForm.date"
										id="addPostingForm.date"
										name="date"
										type="date"
										className="border-black rnd"
									></Control>
								</div>
							</div>

							<div className="row">
								<div className="col-2 col-left input-label"></div>

								<div className="col-10 col-left">
									<div className="row leftContent">
										<div className="col">
											<label
												htmlFor="addPostingForm.iconAtheletic"
												className="icon-label"
											>
												<FaFootballBall
													size="2em"
													className={this.state.atheleticClass}
													title="Atheletics/Sports"
												/>
											</label>
											<Control.checkbox
												model="addPostingForm.iconAtheletic"
												id="addPostingForm.iconAtheletic"
												name="atheletic"
												className="hidden"
												defaultValue={false}
											></Control.checkbox>
										</div>
										<div className="col">
											<label
												htmlFor="addPostingForm.iconBoardgame"
												className="icon-label"
											>
												<FaChess
													size="2em"
													className={this.state.boardgameClass}
													title="Boardgames"
												/>
											</label>
											<Control.checkbox
												model="addPostingForm.iconBoardgame"
												id="addPostingForm.iconBoardgame"
												name="boardgame"
												className="hidden"
												defaultValue={false}
											></Control.checkbox>
										</div>
										<div className="col">
											<label
												htmlFor="addPostingForm.iconRoleplay"
												className="icon-label"
											>
												<FaDiceD20
													size="2em"
													className={this.state.roleplayClass}
													title="Rolyplay Games"
												/>
											</label>
											<Control.checkbox
												model="addPostingForm.iconRoleplay"
												id="addPostingForm.iconRoleplay"
												name="roleplay"
												className="hidden"
												defaultValue={false}
											></Control.checkbox>
										</div>
										<div className="col">
											<label
												htmlFor="addPostingForm.iconTabletop"
												className="icon-label"
											>
												<FaFortAwesome
													size="2em"
													className={this.state.tabletopClass}
													title="Tabletop Game"
												/>
											</label>
											<Control.checkbox
												model="addPostingForm.iconTabletop"
												id="addPostingForm.iconTabletop"
												name="tabletop"
												className="hidden"
												defaultValue={false}
											></Control.checkbox>
										</div>
										<div className="col">
											<label
												htmlFor="addPostingForm.iconOther"
												className="icon-label"
											>
												<FaUserFriends
													size="2em"
													className={this.state.otherClass}
													title="Other"
												/>
											</label>
											<Control.checkbox
												model="addPostingForm.iconOther"
												id="addPostingForm.iconOther"
												name="other"
												className="hidden"
												defaultValue={false}
											></Control.checkbox>
										</div>
									</div>
								</div>
							</div>

							<div className="row">
								<button className="btn btnPUGS" type="submit">
									Submit
								</button>
							</div>
						</LocalForm>
					</div>
				</div>
			</>
		);
	}
}

export default AddPosting;
