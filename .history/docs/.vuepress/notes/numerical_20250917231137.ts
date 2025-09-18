import { defineNoteConfig } from "vuepress-theme-plume";

export default defineNoteConfig({
	dir: "circuit",
	link: "/circuit/",
	sidebar: [
		{
			text: "数值分析",
			collapsed: false,
			link: "/integral/",
			items: [
				"numerical-1",
				"numerical-2",
			],
		},
	],
});