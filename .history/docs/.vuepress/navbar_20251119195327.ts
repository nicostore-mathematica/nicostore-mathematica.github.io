/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 

import { defineNavbarConfig } from 'vuepress-theme-plume'

export default defineNavbarConfig([
  { text: '首页', link: '/' },
  { text: '博客', link: '/blog/' },
  { text: '标签', link: '/blog/tags/' },
  { text: '归档', link: '/blog/archives/' },
  {
    text: '笔记',
    items: [{ text: '示例', link: '/notes/demo/README.md' }]
  },
])
  */
import { defineNavbarConfig } from "vuepress-theme-plume";

export const navbar = defineNavbarConfig([
	{ text: "首页", link: "/" },
	{ text: "博客", link: "/blog/" },
	{
		text: "笔记",
		items: [
			{ text: "微积分", link: "/integral/README.md" },
			{ text: "代数", link: "/algebra/README.md" },
			{ text: "数理统计", link: "/statistics/README.md" },
			{ text: "基础物理", link: "/physics/README.md" },
      		{ text: "电路系统", link: "/circuit/README.md" },
			{ text: "光学", link: "/optics/README.md" },
			{ text: "数学物理方法", link: "/complex/README.md" },
			{ text: "工程力学", link: "/applied-mechanics/README.md" },
			{ text: "数值分析", link: "/numerical/README.md" },
			{ text: "控制理论", link: "/cybernetics/README.md" },
			{ text: "电动力学", link: "/electrodynamics/README.md" },

		],
	},
	{
		text: "关于",
		items: [
			{ text: "关于我", link: "/about/" },
			{ text: "时间线", link: "/timeline/" },
			/*{ text: "动态", link: "/talks/" },
			{ text: "Bangumi", link: "/bangumi/" },*/
		],
	},
	{ text: "友链", link: "/links/" },
]);
