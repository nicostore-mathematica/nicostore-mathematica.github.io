import { defineNoteConfig } from "vuepress-theme-plume";

export default defineNoteConfig({
	dir: "integral",
	link: "/integral/",
	sidebar: [
		{
			text: "微积分",
			collapsed: false,
			link: "/integral/",
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
			],
		},
	],
});