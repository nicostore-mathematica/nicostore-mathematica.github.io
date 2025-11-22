import { defineCollection } from "vuepress-theme-plume";

export default defineCollection({
	dir: "applied-mechanics",
	sidebar: [
		{
			text: "理论力学",
			collapsed: false,
			items: [
				"circuit-1",
				"-2",
			],
		},
		{
			text: "材料力学",
			collapsed: false,
			items: [
				"materials-1",
				"materials-2",
			],
		},
	],
	type: "doc",
	title: "工程力学"
});