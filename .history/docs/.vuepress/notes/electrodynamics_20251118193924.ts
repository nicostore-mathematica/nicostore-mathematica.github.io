import { defineCollection } from "vuepress-theme-plume";

export default defineCollection({
	dir: "electrodynamics",
	sidebar: [
		{
			text: "电动力学",
			collapsed: false,
			items: [
				"electrodynamics-1",
				"electrodynamics-2",
			],
		},
	],
	type: "doc",
	title: "电动力学"
});