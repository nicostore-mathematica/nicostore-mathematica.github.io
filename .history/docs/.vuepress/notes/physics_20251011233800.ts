import { defineCollection } from "vuepress-theme-plume";

export default defineCollection({
	dir: "physics",
	sidebar: [
		{
			text: "普通物理",
			collapsed: false,
			items: [
				"physics-0",
				"physics-1",
				"physics-2",
				"physics-3",
				"physics-4",
			],
		},
	],
	type: "doc",
	title: "普通物理"
});