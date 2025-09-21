import { defineNoteConfig } from "vuepress-theme-plume";

export default defineNoteConfig({
	dir: "algebra",
	link: "/algebra/",
	sidebar: [
		{
			text: "代数",
			collapsed: false,
			link: "/algebra/",
			items: [
				"algebra-1",
				"algebra-2",
			],
		},
	],
});