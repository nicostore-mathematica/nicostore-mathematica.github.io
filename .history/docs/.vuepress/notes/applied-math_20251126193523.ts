import { defineCollection } from "vuepress-theme-plume";

export default defineCollection({
	dir: "applied-mechanics",
	sidebar: [
		{
			text: "数理统计",
			collapsed: false,
			items: [
				"Theoretical-1",
				"Theoretical-2",
			],
		},
		{
			text: "数值分析",
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