import { defineNoteConfig } from "vuepress-theme-plume";

export default defineNoteConfig({
	dir: "cybernetics",
	link: "/cybernetics/",
	sidebar: [
		{
			text: "工程控制论",
			collapsed: false,
			link: "/cybernetics/",
			items: [
				"cybernetics-1",
				"cybernetics-2",
			],
		},
	],
});