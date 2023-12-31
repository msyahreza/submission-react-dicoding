/** @format */

import React from "react";

function ArchiveButton({ id, onArchive }) {
	return (
		<>
			<button
				className="archive-notes-button relative z-[2] flex items-center px-6 py-2.5"
				type="submit"
				placeholder="ARCHIVE"
				id="button-addon1"
				onClick={() => onArchive(id)}
			>
				ARCHIVE
			</button>
		</>
	);
}
export default ArchiveButton;
