/** @format */

import React from "react";
import "../styles/style.css";
import SearchBar from "./searchHeader";

// const root = createRoot(document.getElementById("Header"));
// root.render(
// 	<div className="pb-2 border-b-2 border-main-header">
// 		<h1 className="font-bold text-main-header">Note's</h1>
// 		<h2 className="text-2xl font-bold text-main-header">
// 			Take your time, Take a notes
// 		</h2>
// 		<p></p>
// 	</div>
// );

class Header extends React.Component {
	render() {
		return (
			<div className="items-center pb-2 border-b-2 border-main-header md:flex md:justify-between">
				<div className="mb-4 md:w-8/12 md:mb-0">
					<h1 className="font-bold text-main-header">Note's</h1>
					<h2 className="font-bold text-main-header">
						Take your time, Take a notes
					</h2>
					<p></p>
				</div>
				<div className="md:w-4/12">
					<SearchBar />
				</div>
			</div>
		);
	}
}

export default Header;
