import { defineNoteConfig } from "vuepress-theme-plume";

export default defineNoteConfig({
	dir: "RoboMaster",
	link: "/RoboMaster/",
	sidebar: [
		{
			text: "RoboMaster",
			collapsed: false,
			link: "/RoboMaster/",
			items: [
				"RoboMaster-1",
				"RoboMaster-2",
			],
		},
	],
});