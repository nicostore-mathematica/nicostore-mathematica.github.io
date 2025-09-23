import { defineNoteConfig } from "vuepress-theme-plume";

export default defineNoteConfig({
	dir: "circuit",
	link: "/circuit/",
	sidebar: [
		{
			text: "电路",
			collapsed: false,
			link: "/circuit/",
			items: [
				"circuit-1",
				"circuit-2",
			],
		},
	],
});