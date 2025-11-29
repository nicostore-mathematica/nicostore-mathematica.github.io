import { defineCollection } from "vuepress-theme-plume";

export default defineCollection({
	dir: "circuit",
	sidebar: [
		{
			text: "电路",
			collapsed: false,
			link: "/circuit/",
			items: [
				{
					text: "电路理论",
					collapsed: true,
					link: "/circuit/theory/",
					items: [
						"circuit-1",
						"circuit-2",
						"circuit-3",
						"circuit-4",
					],
				},
				{
					text: "模拟电路",
					collapsed: false,
					link: "/circuit/electronic/",
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
			]
		}
	],
	type: "doc",
	title: "电路"
});