import { defineCollection } from "vuepress-theme-plume";

export default defineCollection({
	dir: "applied-math",
	sidebar: [
		{
			text: "数理统计",
			collapsed: false,
			items: [
				"statistics-1",
				"statistics-2",
			],
		},
		{
			text: "矢量分析",
			collapsed: false,
			items: [
				"vector-1",
			],
		},
		{
			text: "数值分析",
			collapsed: false,
			items: [
				"numerical-1",
				"numerical-2",
			],
		},
	],
	type: "doc",
	title: "应用数学"
});