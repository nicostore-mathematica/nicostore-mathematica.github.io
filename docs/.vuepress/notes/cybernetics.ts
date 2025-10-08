import { defineNoteConfig } from "vuepress-theme-plume";

export default defineNoteConfig({
	dir: "cybernetics",
	link: "/cybernetics/",
	sidebar: [
		{
			text: "控制理论",
			collapsed: false,
			link: "/cybernetics/",
			items: [
				"cybernetics-1",
				"cybernetics-2",
			],
		},
	],
});