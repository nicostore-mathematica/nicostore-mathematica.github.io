import { defineNoteConfig } from "vuepress-theme-plume";

export default defineNoteConfig({
	dir: "statistics",
	link: "/statistics/",
	sidebar: [
		{
			text: "普通物理",
			collapsed: false,
			link: "/statistics/",
			items: [
				"statistics-1",
				"statistics-2",
			],
		},
	],
});