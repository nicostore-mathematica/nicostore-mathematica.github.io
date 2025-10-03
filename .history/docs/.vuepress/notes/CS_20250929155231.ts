import { defineNoteConfig } from "vuepress-theme-plume";

export default defineNoteConfig({
	dir: "CS",
	link: "/CS/",
	sidebar: [
		{
			text: "C语言",
			collapsed: false,
			link: "/CS/",
			items: [
				"C-class",
				"C-mooc",
			],
		},
				{
			text: "python",
			collapsed: false,
			link: "/CS/",
			items: [
                "python-0",
			],
		},
	],
});