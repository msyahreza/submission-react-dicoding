/** @format */

import React from "react";
import "../styles/style.css";
import Header from "./header";
import { getInitialData, showFormattedDate } from "../utils";
import NotesList from "./NotesList";
import MakeNotes from "./makeNotesComponent";
class NotesApps extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			notes: getInitialData(),
		};

		this.onDeleteHandler = this.onDeleteHandler.bind(this);
		this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
		this.onArchiveHandler = this.onArchiveHandler.bind(this);
		this.onUnArchiveHandler = this.onUnArchiveHandler.bind(this);
	}

	onDeleteHandler(id) {
		const notes = this.state.notes.filter((notes) => notes.id !== id);
		this.setState({ notes });
	}

	onArchiveHandler(id) {
		this.setState((prevState) => {
			const updatedNotes = prevState.notes.map((note) => {
				if (note.id === id) {
					return { ...note, archived: true };
				}
				return note;
			});

			console.log("Updated Notes:", updatedNotes);

			return {
				notes: updatedNotes,
			};
		});
		//window.location.href = "/archive";
	}

	onUnArchiveHandler(id) {
		this.setState((prevState) => {
			const updatedNotes = prevState.notes.map((note) => {
				if (note.id === id) {
					return { ...note, archived: false };
				}
				return note;
			});

			console.log("Updated Notes:", updatedNotes);

			return {
				notes: updatedNotes,
			};
		});
	}

	onAddNoteHandler({ title, body }) {
		const createdAt = showFormattedDate(new Date());
		const noteListSection = document.getElementById("NoteList");
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
			setTimeout(() => {
				const lastNoteElement = document.getElementById(`notes-${newNote.id}`);
				if (lastNoteElement) {
					lastNoteElement.scrollIntoView({ behavior: "smooth" });
				}
			}, 0);

			console.log("Updated Notes:", updatedNotes); // Log the updated notes data

			return {
				notes: updatedNotes,
			};
		});
	}

	render() {
		const unArchiveNotes = this.state.notes.filter((note) => !note.archived);
		const archivedNotes = this.state.notes.filter((note) => note.archived);

		return (
			<>
				<Header />
				<section id="MakeNotes">
					<MakeNotes addNotes={this.onAddNoteHandler} />
				</section>
				<section id="NoteList" className="note-list">
					<h1 className="font-bold text-main-header">Your Note's</h1>
					<div className="flex-wrap gap-4 my-5 flex-grow-2 lg:flex">
						<NotesList
							notes={unArchiveNotes}
							onDelete={this.onDeleteHandler}
							onArchive={this.onArchiveHandler}
						/>
					</div>
				</section>
				<br />
				<section id="ArchivedNotes">
					<h1 className="font-bold text-main-header">Archived Note's</h1>
					<div className="flex-wrap gap-4 my-5 flex-grow-2 lg:flex">
						<NotesList
							notes={archivedNotes}
							onDelete={this.onDeleteHandler}
							onUnArchive={this.onUnArchiveHandler}
						/>
					</div>
				</section>
			</>
		);
	}
}

export default NotesApps;
