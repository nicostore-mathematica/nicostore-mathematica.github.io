import { defineNoteConfig } from "vuepress-theme-plume";

export default defineNoteConfig({
	dir: "circuit",
	link: "/circuit/",
	sidebar: [
		{
			text: "微积分",
			collapsed: false,
			link: "/integral/",
			items: [
				"integral-1",
				"integral-2",
			],
		},
	],
});