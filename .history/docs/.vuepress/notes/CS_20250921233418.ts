import { defineNoteConfig } from "vuepress-theme-plume";

export default defineNoteConfig({
	dir: "CS",
	link: "/CS/",
	sidebar: [
		{
			text: "编程",
			collapsed: false,
			link: "/CS/",
			items: [
				"C-class",
				"C-mooc",
                "python-0",
			],
		},
	],
});