/** @format */

import React from "react";
import "../styles/style.css";
import NoteItem from "./NoteItem";
// import NotesListComponent from "./notesComponent";

function NotesList({ notes, onDelete, onArchive, onUnArchive }) {
	return (
		<>
			{notes.map((notes) => (
				<div
					className="notesItemList notes"
					key={notes.id}
					id={`notes-${notes.id}`}
				>
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
