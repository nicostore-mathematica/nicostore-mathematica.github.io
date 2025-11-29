import { defineCollection } from "vuepress-theme-plume";

export default defineCollection({
	dir: "cybernetics",
	sidebar: [
		{
			text: "控制理论",
			collapsed: false,
			link: "/cybernetics/",
			items: [
				"cybernetics-1",
				"cybernetics-2",
			],
		},
	],
	type: "doc",
	title: "控制理论"
});