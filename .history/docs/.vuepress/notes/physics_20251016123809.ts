import { defineCollection } from "vuepress-theme-plume";

export default defineCollection({
	dir: "physics",
	sidebar: [
		{
			text: "基础物理",
			collapsed: false,
			items: [
				"physics-0",
				"physics-1",
				"physics-2",
				"physics-3",
				"physics-4",
				"physics-5",
				"physics-6",
				"physics-7",
				"physics-8",
				"physics-9",
			],
		},
	],
	type: "doc",
	title: "基础物理"
});