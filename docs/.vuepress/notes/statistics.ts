import { defineNoteConfig } from "vuepress-theme-plume";

export default defineNoteConfig({
	dir: "statistics",
	link: "/statistics/",
	sidebar: [
		{
			text: "数理统计",
			collapsed: false,
			link: "/statistics/",
			items: [
				"statistics-1",
				"statistics-2",
			],
		},
	],
});