/** @format */

import React from "react";
import "../styles/style.css";

class searchBar extends React.Component {
	render() {
		return (
			<div className="custom-search-bar">
				<div className="relative flex flex-wrap items-stretch w-full mb-4">
					<input
						type="search"
						className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto border border-solid border-main-header bg-custom-grey-color bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-main-header focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
						placeholder="Search"
						aria-label="Search"
						aria-describedby="button-addon1"
					/>

					{/* <!--Search button--> */}
					<button
						className="custom-search-button relative z-[2] flex items-center bg-primary px-6 py-2.5 "
						type="button"
						id="button-addon1"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							className="w-5 h-5"
						>
							<path
								fill-rule="evenodd"
								d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
								clip-rule="evenodd"
							/>
						</svg>
					</button>
				</div>
			</div>
		);
	}
}
export default searchBar;
