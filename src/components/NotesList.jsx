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
				<div className="notes" key={notes.id} id={`notes-${notes.id}`}>
					<NoteItem
						key={notes.id}
						id={notes.id}
						onDelete={onDelete}
						{...notes}
						onArchive={onArchive}
						onUnArchive={onUnArchive}
					/>
				</div>
			))}
		</>
	);
}

export default NotesList;
