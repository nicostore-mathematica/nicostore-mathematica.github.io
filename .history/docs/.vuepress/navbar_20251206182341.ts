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
			{ text: "数学分析", link: "/integral/README.md" },
			{ text: "代数基础", link: "/algebra/" },
			{ text: "应用数学", link: "/applied-math/README.md" },
			{ text: "基础物理", link: "/physics/README.md" },
      		{ text: "电路理论", link: "/circuit/" },
			{ text: "光学", link: "/optics/README.md" },
			{ text: "数学物理方法", link: "/complex/README.md" },
			{ text: "工程力学", link: "/applied-mechanics/README.md" },
			{ text: "控制理论", link: "/cybernetics/README.md" },
			{ text: "电动力学", link: "/electrodynamics/README.md" },

		],
	},
	{
		text: "关于",
		items: [
			{ text: "关于我", link: "/about/" },
			{ text: "时间线", link: "/timeline/" },
			{ text: "⌈ 开往 ⌋", link: "https://www.travellings.cn/go.html" }
			/*{ text: "动态", link: "/talks/" },
			{ text: "Bangumi", link: "/bangumi/" },*/
		],
	},
	{ text: "友链", link: "/links/" },
]);
