import { defineCollection } from "vuepress-theme-plume";

export default defineCollection({
	dir: "applied-mechanics",
	sidebar: [
		{
			text: "工程力学",
			collapsed: false,
			link: "/applied-mechanics/",
			items: [
				{
					text: "理论力学",
					collapsed: false,
					link: "/applied-mechanics/Theoretical/",
					items: [
						"Theoretical-1",
						"Theoretical-2",
					],
				},
				{
					text: "材料力学",
					link: "/applied-mechanics/Materials/",
					collapsed: false,
					items: [
						"Materials-1",
						"Materials-2",
					],
				},
			]
		}
	],
	type: "doc",
	title: "工程力学"
});