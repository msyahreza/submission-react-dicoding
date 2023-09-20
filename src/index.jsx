/** @format */

import React from "react";
import { createRoot } from "react-dom/client";

// import style
import "./styles/style.css";

const root = createRoot(document.getElementById("root"));
root.render(
	<div class="border-b-2 border-main-header pb-2">
		<h1 class="font-bold text-main-header">Notes</h1>
		<p class="font-bold text-main-header text-2xl">
			Take your time, Take a notes
		</p>
		<p></p>
	</div>
);
