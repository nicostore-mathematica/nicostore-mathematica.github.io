import { defineNoteConfig } from "vuepress-theme-plume";

export default defineNoteConfig({
	dir: "physics",
	link: "/physics/",
	sidebar: [
		{
			text: "普通物理",
			collapsed: false,
			link: "/physics/",
			items: [
				"physics-0",
				"physics-1",
				"physics-2",
				"physics-3",
				"physics-4",
			],
		},
	],
});