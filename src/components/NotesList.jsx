/** @format */

/** @format */

import React from "react";
import "../styles/style.css";
import NoteItem from "./noteItem";
// import NotesListComponent from "./notesComponent";

function NotesList({ notes, onDelete }) {
	return (
		<>
			{notes.map((notes) => (
				<NoteItem key={notes.id} id={notes.id} {...notes} />
			))}
		</>
	);
}

export default NotesList;
