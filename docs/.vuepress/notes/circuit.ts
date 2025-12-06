import { defineCollection } from "vuepress-theme-plume";

export default defineCollection({
	dir: "circuit",
	sidebar: [
		{
			text: "电路",
			link: "/circuit/",
			items: [
				{
					text: "电路理论",
					collapsed: true,
					link: "/circuit/theory/",
					items: [
						"/circuit/theory/circuit-1",
						"/circuit/theory/circuit-2",
						"/circuit/theory/circuit-3",
						"/circuit/theory/circuit-4",
					],
				},
				{
					text: "模拟电路",
					collapsed: false,
					link: "/circuit/electronic/",
					items: [
						"/circuit/electronic/electronic-1",
						"/circuit/electronic/electronic-2",
						"/circuit/electronic/electronic-3",
						"/circuit/electronic/electronic-4",
						"/circuit/electronic/electronic-5",
						"/circuit/electronic/electronic-6",
						"/circuit/electronic/electronic-7",
						"/circuit/electronic/electronic-8",
					],
				},
			]
		}
	],
	type: "doc",
	title: "电路"
});