/** @format */

import React from "react";

function UnArchiveButton({ id, onUnArchive }) {
	return (
		<>
			<button
				className="archive-notes-button relative z-[2] flex items-center px-6 py-2.5"
				type="submit"
				placeholder="ARCHIVE"
				id="button-addon1"
				onClick={() => onUnArchive(id)}
			>
				UNARCHIVE
			</button>
		</>
	);
}

export default UnArchiveButton;
