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
		const notes = this.state.contacts.filter((notes) => notes.id !== id);
		this.setState({ notes });
	}

	onAddNoteHandler({ title, body }) {
		const createdAt = showFormattedDate(new Date());
		this.setState((prevState) => {
			const lastId = prevState.notes.reduce((maxId, note) => {
				return note.id > maxId ? note.id : maxId;
			}, 0);
			const newNote = {
				archived: false,
				id: lastId + 1,
				title,
				body,
				createdAt: new Date().toISOString(),
			};

			const updatedNotes = [...prevState.notes, newNote];

			console.log("Updated Notes:", updatedNotes); // Log the updated notes data

			return {
				notes: updatedNotes,
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
					<NotesList notes={this.state.notes} onDelete={this.onDeleteHandler} />
				</div>
			</>
		);
	}
}

export default NotesApps;
