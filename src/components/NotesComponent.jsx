/** @format */

/** @format */

import React from "react";
import "../styles/style.css";

NotesListComponent.propTypes = {
	name: PropTypes.string.isRequired,
};

class NotesListComponent extends React.Component {
	render() {
		return (
			<div className="max-w-sm p-6 notes-card">
				<h2 className="mb-4 text-2xl font-semibold">Card Title</h2>

				<p className="mb-2 text-gray-500">Date: September 30, 2023</p>

				<p className="mb-4 text-gray-800">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non
					urna id urna convallis cursus. Donec suscipit libero in urna interdum,
					at malesuada justo bibendum.
				</p>

				<div className="flex justify-between">
					<button className="px-4 py-2 text-white bg-red-500 rounded delete-notes-button hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300">
						Delete
					</button>
					<button className="px-4 py-2 text-white rounded archive-notes-button hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
						Archive
					</button>
				</div>
			</div>
		);
	}
}

export default NotesListComponent;
