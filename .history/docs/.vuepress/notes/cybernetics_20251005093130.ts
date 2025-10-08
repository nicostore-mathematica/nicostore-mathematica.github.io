import { defineNoteConfig } from "vuepress-theme-plume";

export default defineNoteConfig({
	dir: "cybernetics",
	link: "/cybernetics/",
	sidebar: [
		{
			text: "控制科学基础",
			collapsed: false,
			link: "/cybernetics/",
			items: [
				"cybernetics-1",
				"cybernetics-2",
			],
		},
	],
});