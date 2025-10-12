import { defineCollection } from "vuepress-theme-plume";

export default defineCollection({
	dir: "statistics",
	sidebar: [
		{
			text: "数理统计",
			collapsed: false,
			items: [
				"statistics-1",
				"statistics-2",
			],
		},
	],
	type: "doc",
	title: "数理统计"
});