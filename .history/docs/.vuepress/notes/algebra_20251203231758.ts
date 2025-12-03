import { defineCollection } from "vuepress-theme-plume";

export default defineCollection({
	dir: "algebra",
	sidebar: [
		{
			text: "代数基础",
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
					text: "高等代数",
					link: "/algebra/linear/",
					collapsed: false,
					items: [
						"/advanced-algebra/algebra-0",
						"/advanced-algebra/algebra-1",
						"/advanced-algebra/algebra-2",
						"/advanced-algebra/algebra-3",
						"/advanced-algebra/algebra-4",
						"/advanced-algebra/algebra-5",
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
	title: "代数基础"
});