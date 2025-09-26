import { defineNoteConfig } from "vuepress-theme-plume";

export default defineNoteConfig({
	dir: "complex",
	link: "/complex/",
	sidebar: [
		{
			text: "数值分析",
			collapsed: false,
			link: "/complex/",
			items: [
				"complex-1",
				"complex-2",
			],
		},
	],
});