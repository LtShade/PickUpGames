import React, { Component } from "react";
import { Control, Form, Errors, LocalForm } from "react-redux-form";

class AddPosting extends Component {
	handleSubmit(values) {
		console.log(values);
	}

	render() {
		return (
			<>
				<div className="row centerContent  pY">
					<div className="col-8 border-black rnd-hvy">
						<Form
							model="addPostingForm"
							onSubmit={(values) => this.handleSubmit(values)}
						>
							<div className="row">
								<div className="col-1 col-left">Title</div>
								<div className="col-10 col-left">
									<Control.text
										model="addPostingForm.title"
										id="title"
										name="Title"
										placeholder="Title"
										className="border-black rnd"
									></Control.text>
								</div>
							</div>
							<div className="row">
								<div className="col-1 col-left">Details</div>
								<div className="col-10 col-left">
									<Control.textarea
										model="addPostingForm.briefDesc"
										id="briefDesc"
										name="Details"
										placeholder="Enter the basic information for your request for a game or players."
										className="border-black rnd"
									></Control.textarea>
								</div>
							</div>
							<div className="row">
								<div className="col-1 col-left input-label">Start Date</div>
								<div className="col-10 col-left">
									<Control
										model="addPostingForm.date"
										id="date"
										name="Start Date"
										placeholder="Select the Starting Date."
										type="date"
										className="border-black rnd"
									></Control>
								</div>
							</div>
							<div className="row">
								<button className="btn btnPUGS" type="submit">
									Submit
								</button>
							</div>
						</Form>
					</div>
				</div>
			</>
		);
	}
}

export default AddPosting;
