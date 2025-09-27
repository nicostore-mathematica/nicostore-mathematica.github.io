import { defineNoteConfig } from "vuepress-theme-plume";

export default defineNoteConfig({
	dir: "circuit",
	link: "/circuit/",
	sidebar: [
		{
			text: "电路分析基础",
			collapsed: false,
			link: "/circuit/",
			items: [
				"circuit-1",
				"circuit-2",
			],
		},
				{
			text: "模拟电子线路",
			collapsed: false,
			items: [
				"electronic-1",
				"electronic-2",
			],
		},
	],
});