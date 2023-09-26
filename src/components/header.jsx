/** @format */

import React from "react";
import { createRoot } from "react-dom/client";
// import style
import "../styles/style.css";
import SearchBar from "./searchHeader";

// const root = createRoot(document.getElementById("Header"));
// root.render(
// 	<div class="border-b-2 border-main-header pb-2">
// 		<h1 class="font-bold text-main-header">Note's</h1>
// 		<h2 class="font-bold text-main-header text-2xl">
// 			Take your time, Take a notes
// 		</h2>
// 		<p></p>
// 	</div>
// );

class Header extends React.Component {
	render() {
		return (
			<div className="border-b-2 border-main-header pb-2 md:flex md:justify-between items-center">
				<div className="md:w-8/12 mb-4 md:mb-0">
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
