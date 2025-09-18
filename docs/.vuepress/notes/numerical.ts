import { defineNoteConfig } from "vuepress-theme-plume";

export default defineNoteConfig({
	dir: "numerical",
	link: "/numerical/",
	sidebar: [
		{
			text: "数值分析",
			collapsed: false,
			link: "/numerical/",
			items: [
				"numerical-1",
				"numerical-2",
			],
		},
	],
});