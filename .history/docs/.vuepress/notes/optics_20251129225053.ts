import { defineCollection } from "vuepress-theme-plume";

export default defineCollection({
	dir: "optics",
	type: "doc",
	title: "光学",
	sidebar: [
		{
			text: "光学",
			collapsed: false,
			link: "/optics/",
			items: [
				"optics-1",
				"optics-2",
			],
		},
	],
});