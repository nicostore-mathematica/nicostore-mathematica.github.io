import { defineNotesConfig } from "vuepress-theme-plume";
import circuit from "./circuit.ts";
import statistics from "./statistics.ts";

export const notes = defineNotesConfig({
	dir: "notes",
	link: "/",
	notes: [
		circuit,
		statistics,
	],
});