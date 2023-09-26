/** @format */

import React from "react";
import { createRoot } from "react-dom";
import Header from "./components/header";
import MakeNotes from "./components/makeNotes";
import "./styles/style.css";

const headerRoot = createRoot(document.getElementById("Header"));
const makeNotesRoot = createRoot(document.getElementById("MakeNotes"));

headerRoot.render(<Header />);
makeNotesRoot.render(<MakeNotes />);
