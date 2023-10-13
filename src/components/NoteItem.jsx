/** @format */

import React from "react";
import CardTitle from "./cardTitle";
import CardBody from "./CardBody";
import CardDate from "./CardDate";
import { showFormattedDate } from "../utils";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton.JSX";
import UnArchiveButton from "./UnArchiveButton.JSX";

function NoteItem({
	title,
	body,
	onDelete,
	id,
	createdAt,
	onArchive,
	onUnArchive,
	archive,
}) {
	const formattedDate = showFormattedDate(createdAt);
	console.log(archive);
	return (
		<div className="max-w-sm gap-3 p-6 notes-card" id="notes-card-list">
			<CardTitle title={title} />
			<CardDate createdAt={formattedDate} />
			<CardBody body={body} />
			<div className="relative left-0 gap-12 columns-2 ">
				<DeleteButton id={id} onDelete={onDelete} />
				{onUnArchive ? (
					<UnArchiveButton id={id} onUnArchive={onUnArchive} />
				) : (
					<ArchiveButton id={id} onArchive={onArchive} />
				)}
			</div>
		</div>
	);
}

export default NoteItem;
