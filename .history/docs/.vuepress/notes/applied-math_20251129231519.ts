import { defineCollection } from "vuepress-theme-plume";

export default defineCollection({
	dir: "applied-math",
	sidebar: [
		{
			text: "应用数学",
			collapsed: false,
			link: "/applied-math/",
			items: [
				{
					text: "概率统计",
					collapsed: true,
					link: "/applied-math/statistics/",
					items: [
						"statistics-1",
						"statistics-2",
					],
				},
				{
					text: "矢量分析",
					link: "/applied-math/vector/",
					collapsed: false,
					items: [
						"vector-1",
					],
				},
				{
					text: "数值分析",
					link:"/applied-math/numerical/",
					collapsed: false,
					items: [
						"numerical-1",
						"numerical-2",
					],
				},
			]
		}
	],
	type: "doc",
	title: "应用数学"
});