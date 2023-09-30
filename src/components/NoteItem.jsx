/** @format */

import React from "react";
import CardTitle from "./cardTitle";
import CardBody from "./CardBody";
import CardDate from "./CardDate";
import { showFormattedDate } from "../utils";

function NoteItem({ title, body, onDelete, id, createdAt }) {
	const formattedDate = showFormattedDate(createdAt);
	return (
		<div className="max-w-sm gap-3 p-6 notes-card">
			<CardTitle title={title} />
			<CardDate createdAt={formattedDate} />
			<CardBody body={body} />
		</div>
	);
}

export default NoteItem;
