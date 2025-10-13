---
title: 缝缝补补
createTime: 2025/10/13 10:19:46
permalink: /mark/mark-1/
---

1

我依稀记得自己在博客建立之初遇见过各种奇奇怪怪的问题，依靠着朋友们的帮忙自己也还算处理的不错。只不过在再次遇见问题的时候自然会感觉不太顺手，所以也建立了这样的一个帖子用来讲讲自己遇见的各种bug如何解决

### · 20250929

这个是有一天在 `git push -u origin main` 后遇见的问题。

```bash
Initializing and preparing data - done in 7.36s
Compiling with vite
<-- Last few GCs --->
[2164:0x30630000]   52772 ms: Mark-Compact 3996.6 (4135.1) -> 3981.0 (4135.6) MB, pooled: 0 MB, 1675.78 / 0.00 ms  (average mu = 0.063, current mu = 0.021)
allocation failure; scavenge might not succeed
[2164:0x30630000]   54484 ms: Mark-Compact 3997.2 (4136.1) -> 3981.7 (4136.3) MB, pooled: 0 MB, 1666.09 / 0.00 ms  (average mu = 0.045, current mu = 0.027)
allocation failure; scavenge might not succeed
<--- JS stacktrace --->
FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory
---- Native stack trace ----
1: 0xe1803a node::OOMErrorHandler(char const*, v8::OOMDetails const&) [node]
2: 0x11ec9c0 v8::Utils::ReportOOMFailure(v8::internal::Isolate*, char const*, v8::OOMDetails const&) [node]
3: 0x11ecc97 v8::internal::V8::FatalProcessOutOfMemory(v8::internal::Isolate*, char const*, v8::OOMDetails const&) [node]
4: 0x141a575 [node]
5: 0x141a5a3 [node]
6: 0x143367a [node]
7: 0x1436848 [node]
8: 0x1c9c351 [node]
Aborted (core dumped)

Error: Process completed with exit code 134.
```

作为一段很典型的错误编码，我们不难喂完AI看出来这个是因为这是一个在使用 Vite 编译 VuePress 站点时发生的 **JavaScript 堆内存溢出 (JavaScript heap out of memory)** 错误，

所以解决方法也很简单粗暴——加环境变量（群主直答）

```yaml
      # 运行构建脚本
      - name: Build VuePress site
        env:
          NODE_OPTIONS: --max-old-space-size=50000
        run: pnpm docs:build
```

然后一切就好起来了。

### · 20251012

```bash
Run crazy-max/ghaction-github-pages@v4
Initializing local git repo
Copying /home/runner/work/nicostore-mathematica.github.io/nicostore-mathematica.github.io/docs/.vuepress/dist to /tmp/github-pages-AUueKf
Configuring git committer
Updating index of working tree
Committing changes
Pushing docs/.vuepress/dist directory to gh-pages branch on nicostore-mathematica/nicostore-mathematica.github.io repo
/usr/bin/git push --force **github.com/nicostore-mathematica/nicostore-mathematica.github.io.git gh-pages
To https://github.com/nicostore-mathematica/nicostore-mathematica.github.io.git
! [remote rejected] gh-pages -> gh-pages (cannot lock ref 'refs/heads/gh-pages': is at ada1bee7027d55de5ba1b1ec6d2117248a51c97e but expected e924267bcca7955cb291094491e2a00878cc5b0)
error: failed to push some refs to 'https://github.com/nicostore-mathematica/nicostore-mathematica.github.io.git'
Error: The process '/usr/bin/git' failed with exit code 1
```

为什么会遇到这个问题？

> “就是把 workflow 下面的两个 yml 文件”  
>
> “其实应该是要删一个的。”

这说明项目里 `.github/workflows/` 目录下，存在两个功能重复或冲突的 workflow 配置文件（.yml 文件）。

当他向仓库推送代码时，很可能同时触发了这两个 workflow。这就造成了一个“竞争”的局面（Race Condition）：

1.  Workflow A 开始运行，克隆代码，构建网站。
2.  几乎在同一时间，Workflow B 也开始运行，做着同样的事情。
3.  Workflow A 构建完成，成功将生成的文件推送到了 `gh-pages` 分支。
4.  紧接着，Workflow B 也构建完成了。当它尝试推送时，它发现远程 `gh-pages` 分支的最新提交是来自 Workflow A 的，而这个提交在 Workflow B 的工作环境里是不存在的。
5.  于是，Git 拒绝了 Workflow B 的推送，抛出了上面截图中的错误。

现在 GitHub Actions 有一个专门为解决此类问题设计的标准功能，叫做 **concurrency**（并发控制）。

可以在 `.yml` 文件中加入以下代码：

```yaml
concurrency:
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true
```

这段配置的作用是：

-   `group`: 为同一个工作流（workflow）在同一个分支（ref）上的运行任务创建一个分组。
-   `cancel-in-progress: true`: 如果一个新的任务被触发，它会自动取消掉这个分组里正在运行的旧任务。

这样，即使用户在短时间内连续推送多次代码，GitHub Actions 也只会执行最新的一次部署任务，旧的会被自动取消，从而完美地避免了竞争和冲突。

感谢三玖老师。

