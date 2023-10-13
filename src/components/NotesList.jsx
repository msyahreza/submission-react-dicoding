/** @format */

/** @format */

import React from "react";
import "../styles/style.css";
import NoteItem from "./NoteItem";
// import NotesListComponent from "./notesComponent";

function NotesList({ notes, onDelete, onArchive, onUnArchive }) {
	console.log(notes);
	return (
		<>
			{notes.map((notes) => (
				<NoteItem
					key={notes.id}
					id={notes.id}
					onDelete={onDelete}
					{...notes}
					onArchive={onArchive}
					onUnArchive={onUnArchive}
				/>
			))}
		</>
	);
}

export default NotesList;
