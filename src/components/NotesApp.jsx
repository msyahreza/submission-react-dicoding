/** @format */

import React from "react";
import "../styles/style.css";
import Header from "./Header";
import { getInitialData, showFormattedDate } from "../utils";
import MakeNotes from "./makeNotesComponent";
import NotesList from "./notesList";

class NotesApps extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			notes: getInitialData(),
		};

		this.onDeleteHandler = this.onDeleteHandler.bind(this);
		this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
	}

	onDeleteHandler(id) {
		const contacts = this.state.contacts.filter((contact) => contact.id !== id);
		this.setState({ contacts });
	}

	onAddNoteHandler({ title, body }) {
		const createdAt = showFormattedDate(new Date());
		this.setState((prevState) => {
			return {
				contacts: [
					...prevState.contacts,
					{
						id: +new Date(),
						title,
						body,
						createdAt,
					},
				],
			};
		});
	}

	render() {
		return (
			<>
				<Header />
				<MakeNotes addNotes={this.onAddNoteHandler} />
				<h1 className="font-bold text-main-header">Your Note's</h1>
				<div className="flex-wrap gap-4 my-5 flex-grow-2 lg:flex">
					<NotesList notes={this.state.notes} />
				</div>
			</>
		);
	}
}

export default NotesApps;
