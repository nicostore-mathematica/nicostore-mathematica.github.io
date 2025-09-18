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
			{ text: "Feynman III 札记", link: "/notes/Feynman-III/README.md" },
			{ text: "高等微积分", link: "/notes/integral/README.md" },
			{ text: "星系与宇宙", link: "/notes/cosmos/README.md" },
			{ text: "写作与沟通", link: "/notes/writing/README.md" },
			{ text: "复变函数", link: "/notes/complex/README.md" },
			{ text: "量子力学", link: "/notes/quantum-mechanics/README.md" },
			{ text: "电动力学", link: "/notes/electrodynamics/README.md" },
			{ text: "天体物理前沿讲座", link: "/notes/astro-front/README.md" },
			{ text: "生物物理导论", link: "/notes/biophysics/README.md" },
			{ text: "物理学前沿讲座", link: "/notes/physics-front/README.md" },
    
      
			{
				text: "自学笔记",
				items: [{ text: "广义相对论", link: "/notes/self-learn-GR/README.md" }],
			},
		],
	},
	{
		text: "关于",
		items: [
			{ text: "关于我", link: "/about/" },
			{ text: "时间线", link: "/timeline/" },
			{ text: "动态", link: "/talks/" },
			{ text: "Bangumi", link: "/bangumi/" },
		],
	},
	{ text: "友链", link: "/links/" },
]);
