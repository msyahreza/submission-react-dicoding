/** @format */

import React from "react";

function DeleteButton({ id, onDelete }) {
	return (
		<>
			<button
				className="delete-notes-button relative z-[2] flex items-center bg-red px-6 py-2.5"
				type="submit"
				placeholder="DELETE"
				id="button-addon1"
				onClick={() => onDelete(id)}
			>
				DELETE
			</button>
		</>
	);
}

export default DeleteButton;
