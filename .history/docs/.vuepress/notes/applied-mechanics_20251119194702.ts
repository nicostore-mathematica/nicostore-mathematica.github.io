import { defineCollection } from "vuepress-theme-plume";

export default defineCollection({
	dir: "applied-mechanics",
	sidebar: [
		{
			text: "理论力学",
			collapsed: false,
			items: [
				"circuit-1",
				"circuit-2",
				"circuit-3",
				"circuit-4",
			],
		},
		{
			text: "材料力学",
			collapsed: false,
			items: [
				"electronic-1",
				"electronic-2",
				"electronic-3",
				"electronic-4",
				"electronic-5",
				"electronic-6",
				"electronic-7",
				"electronic-8",
			],
		},
	],
	type: "doc",
	title: "工程力学"
});