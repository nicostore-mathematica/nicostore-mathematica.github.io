import { defineCollection } from "vuepress-theme-plume";

export default defineCollection({
	dir: "circuit",
	sidebar: [
		{
			text: "电路分析基础",
			collapsed: false,
			items: [
				"circuit-1",
				"circuit-2",
			],
		},
		{
			text: "模拟电子线路",
			collapsed: false,
			items: [
				"electronic-1",
				"electronic-2",
				"electronic-3",
			],
		},
	],
	type: "doc",
	title: "电路"
});