import { defineCollection } from "vuepress-theme-plume";

export default defineCollection({
	dir: "algebra",
	sidebar: [
		{
			text: "代数",
			link: "/algebra/",
			items: [
				{
					text: "代数引论",
					collapsed: false,
					link: "/algebra/introduction/",
					items: [
						"introduction-1",
						"introduction-2",
					],
				},
				{
					text: "线性代数",
					link: "/algebra/linear/",
					collapsed: false,
					items: [
						"algebra-0",
						"algebra-1",
						"algebra-2",
						"algebra-3",
						"algebra-4",
						"algebra-5",
					],
				},
				{
					text: "矩阵分析",
					link: "/algebra/matrix/",
					collapsed: false,
					items: [
						"matrix-1",
					],
				},
			]
		}
	],
	type: "doc",
	title: "代数"
});