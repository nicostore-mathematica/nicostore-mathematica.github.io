import { defineCollection } from "vuepress-theme-plume";

export default defineCollection({
	dir: "RoboMaster",
	sidebar: [
		{
			text: "RoboMaster",
			collapsed: false,
			items: [
				"RoboMaster-1",
				"RoboMaster-2",
			],
		},
	],
	type: "doc",
	title: "RoboMaster"
});