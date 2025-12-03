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
						"/algebra/introduction/introduction-1",
						"/algebra/introduction/introduction-2",
					],
				},
				{
					text: "高等代数",
					link: "/algebra/advanced-algebra/linlin",
					collapsed: false,
					items: [
						"/algebra/advanced-algebra/algebra-0",
						"/algebra/advanced-algebra/algebra-1",
						"/algebra/advanced-algebra/algebra-2",
						"/algebra/advanced-algebra/algebra-3",
						"/algebra/advanced-algebra/algebra-4",
						"/algebra/advanced-algebra/algebra-5",
					],
				},
				{
					text: "矩阵分析",
					link: "/algebra/matrix/",
					collapsed: false,
					items: [
						"/algebra/matrix/matrix-1",
					],
				},
			]
		}
	],
	type: "doc",
	title: "代数基础"
});