import { defineCollection } from "vuepress-theme-plume";

export default defineCollection({
	dir: "complex",
	sidebar: [
		{
			text: "数学物理方法",
			collapsed: false,
			link: "/complex/",
			items: [
				"complex-1",
				"complex-2",
				"complex-3",
				"complex-4",
				"complex-5",
			],
		},
	],
	type: "doc",
	title: "数学物理方法"
});