import { defineCollection } from "vuepress-theme-plume";

export default defineCollection({
	dir: "numerical",
	type: "doc",
	title: "数值分析",
	sidebar: [
		{
			text: "数值分析",
			collapsed: false,
			items: [
				"numerical-1",
				"numerical-2",
			],
		},
	],
});