/** @format */

import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/style.css";
import NotesApps from "./components/NotesApp";

// const headerRoot = createRoot(document.getElementById("Header"));
const makeNotesRoot = createRoot(document.getElementById("NotesApp"));
// const notesListRoot = createRoot(document.getElementById("NotesList"));

makeNotesRoot.render(<NotesApps />);
