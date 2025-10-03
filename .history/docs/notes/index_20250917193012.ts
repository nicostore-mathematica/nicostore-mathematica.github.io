import { defineNotesConfig, defineNoteConfig } from "vuepress-theme-plume";
import circuit from "./circuit.ts";

export const notes = defineNotesConfig({
	dir: "notes",
	link: "/",
	notes: [
		circuit,

	],
});