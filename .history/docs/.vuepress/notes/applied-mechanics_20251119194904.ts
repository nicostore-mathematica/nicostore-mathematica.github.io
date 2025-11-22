import { defineCollection } from "vuepress-theme-plume";

export default defineCollection({
	dir: "applied-mechanics",
	sidebar: [
		{
			text: "理论力学",
			collapsed: false,
			items: [
				"Theoretical-1",
				"Theoretical-2",
			],
		},
		{
			text: "材料力学",
			collapsed: false,
			items: [
				"Materials-1",
				"Materials-2",
			],
		},
	],
	type: "doc",
	title: "工程力学"
});