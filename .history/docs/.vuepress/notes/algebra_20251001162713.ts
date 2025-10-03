import { defineNoteConfig } from "vuepress-theme-plume";

export default defineNoteConfig({
	dir: "algebra",
	link: "/algebra/",
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
});