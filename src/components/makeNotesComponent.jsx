/** @format */

import React from "react";

class MakeNotes extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			title: "",
			body: "",
			isMaxLengthReached: false,
		};

		this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
		this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
		this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
	}

	onTitleChangeEventHandler(event) {
		const title = event.target.value;

		const isMaxLengthReached = title.length > 50
		this.setState(() => {
			return {
				title: event.target.value,
				isMaxLengthReached,
			};
		});
	}

	onBodyChangeEventHandler(event) {
		this.setState(() => {
			return {
				body: event.target.value,
			};
		});
	}

	onSubmitEventHandler(event) {
		event.preventDefault();
		this.props.addNotes(this.state);
		console.log(`onSubmitEventHandler_berjalan`);
	}

	render() {
		return (
			<form className="notes-input" onSubmit={this.onSubmitEventHandler}>
				<h1 className="font-bold text-main-header">Make Note's</h1>
				<div className="py-4">
					<div className="custom-search-bar" id="Notes-Title">
						<div className="relative flex flex-wrap items-stretch w-full mb-4">
							<input
								type="text"
								className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto border border-solid border-main-header bg-custom-grey-color bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-main-header focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
								placeholder="Title"
								aria-label="Title"
								aria-describedby="button-addon1"
								value={this.state.title}
								maxLength={50}
								onChange={this.onTitleChangeEventHandler}
							/>
							{this.state.isMaxLengthReached && (
								<div className="popup p-2"><p className="font-bold text-red">Max Length Reached</p></div>
							)}
						</div>
					</div>
				</div>
				<div className="py-4">
					<div className="notes-bar" id="Notes-Title">
						<div className="relative w-full mb-4">
							<textarea
								className="block w-full border border-solid border-main-header bg-custom-grey-color bg-clip-padding px-3 py-4 text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-main-header focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
								placeholder="What's in your mind"
								aria-label="What's in your mind"
								aria-describedby="button-addon1"
								rows="10"
								value={this.state.body}
								onChange={this.onBodyChangeEventHandler}
							></textarea>
						</div>
					</div>
				</div>
				<div className="flex justify-end py-4">
					<button
						className="create-button relative z-[2] flex items-center bg-primary px-6 py-2.5"
						type="submit"
						placeholder="create"
						id="button-addon1"
					>
						CREATE
					</button>
				</div>
			</form>
		);
	}
}
export default MakeNotes;
