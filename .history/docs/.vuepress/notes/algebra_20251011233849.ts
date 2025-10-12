import { defineCollection } from "vuepress-theme-plume";

export default defineCollection({
	dir: "algebra",
	sidebar: [
		{
			text: "线性代数",
			collapsed: false,
			items: [
				"algebra-0",
				"algebra-1",
				"algebra-2",
				"algebra-3",
				"algebra-4",
			],
		},
		{
			text: "矩阵分析",
			collapsed: false,
			items: [
				"matrix-1",
			],
		},
	],
	type: "doc",
	title: "代数"
});