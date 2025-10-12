import { defineCollection } from "vuepress-theme-plume";

export default defineCollection({
	dir: "physics",
	sidebar: [
		{
			text: "微积分",
			collapsed: false,
			items: [
				"integral-1",
				"integral-2",
				"integral-3",
				"integral-4",
				"integral-5",
				"integral-6",
				"integral-7",
				"integral-8",
				"integral-9",
				"integral-10",
			],
		},
	],
	type: "doc",
	title: "高等微积分"
});