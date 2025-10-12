---
title: Chapter 3 函数连续性
createTime: 2025/01/11 00:01:01
permalink: /integral/integral-3/
---

## Chapter 3 函数连续

### · 定义

> /Define/
>
> 定义1：若 $\lim_{x \to x_{0}}f(x)=f(x_{0})$，称 $y = f(x)$ 在 $x = x_{0}$ 处连续。
>
> 定义2：设 $f(x)$ 在 $U(x_{0},\delta)$ 内有定义，$\forall\varepsilon > 0$，$\exists\delta > 0$，当 $|x - x_{0}|<\delta$ 时，都有 $|f(x)-f(x_{0})|<\varepsilon$，称 $y = f(x)$ 在 $x = x_{0}$ 处连续
>
> $\lim_{x \to x_{0}}f(x)=A$ 定义：
>
> 设 $f(x)$ 在 $\mathring{U}(x_{0},\delta_{0})$ 内有定义，$A$ 是一个确定的常数，$\forall\varepsilon > 0$，$\exists\delta > 0$，（$\delta\leq\delta_{0}$），
>
> 当 $0 < |x - x_{0}| < \delta$ 时，都有 $|f(x)-A| < \varepsilon$。
>
> 若 $x = x_{0}$，$|x - x_{0}| < \delta$ $\Rightarrow |f(x)-A| < \varepsilon\Rightarrow f(x_{0}) = A$ $\Rightarrow\lim_{x \to x_{0}}f(x)=A$，$f(x)$ 在 $x = x_{0}$ 处连续。
> $$
> \begin{align*}
> &\Leftrightarrow\lim_{x \to x_{0}}f(x)=f(x_{0})\\
> &\Leftrightarrow\lim_{x \to x_{0}}[f(x)-f(x_{0})]=0
> \end{align*}
> $$
>
> 令 $x - x_{0}=\Delta x$ 称为自变量的增量，即 $x = x_{0}+\Delta x$。
>
> $$
> \begin{align*}
> &\Leftrightarrow\lim_{\Delta x \to 0}[f(x_{0}+\Delta x)-f(x_{0})]=0
> \end{align*}
> $$
>
> 令 $f(x_{0}+\Delta x)-f(x_{0})=\Delta y$ 称为因变量的增量。
>
> $$
> \begin{align*}
> &\Leftrightarrow\lim_{\Delta x \to 0}\Delta y = 0
> \end{align*}
> $$
>
> 定义3：若 $\lim_{\Delta x \to 0}\Delta y = 0$，称 $y = f(x)$ 在 $x = x_{0}$ 处连续。
>
> 定义4：若 $\lim_{x \to x_{0}^{+}}f(x)=f(x_{0})$，称 $y = f(x)$ 在 $x = x_{0}$ 处右连续。
>
> 定义5：若 $\lim_{x \to x_{0}^{-}}f(x)=f(x_{0})$，称 $y = f(x)$ 在 $x = x_{0}$ 处左连续。

定理：$f(x)$ 在 $x = x_{0}$ 处连续 $\Leftrightarrow$ $f(x)$ 在 $x = x_{0}$ 处既是左连续又是右连续。

定义+：若 $y = f(x)$ 在 $x = x_{0}$ 处连续，满足下面三个条件：

1. $f(x)$ 在 $x = x_{0}$ 处有定义；

2. $\lim_{x \to x_{0}}f(x)$ 存在；

3. $\lim_{x \to x_{0}}f(x)=f(x_{0})$。

违背了其中一条，称 $x = x_{0}$ 为间断点。

### · 间断点分类

1. 若 $\lim_{x \to x_{0}}f(x)$ 存在，但是 $x = x_{0}$ 为间断点，称 $x = x_{0}$ 为可去间断点。

  > /example/    $f(x)=\begin{cases}\frac{\sin x}{x},&x\neq0\\0,&x = 0\end{cases}$
  >
  > > /solution/
  > > $$
  > > \lim_{x \to 0}f(x)=\lim_{x \to 0}\frac{\sin x}{x}=1\neq f(0)=0
  > > $$
  > > 知 $x = 0$ 为可去间断点。
  >
  > 若 $F(x)=\begin{cases}\frac{\sin x}{x},&x\neq0\\1,&x = 0\end{cases}$
  >
  > $$
  > \lim_{x \to 0}F(x)=\lim_{x \to 0}\frac{\sin x}{x}=1 = F(0)
  > $$
  >
  > 知 $F(x)$ 在 $x = 0$ 处连续。当 $x\neq0$ 时，$F(x)=f(x)$。

2. $\lim_{x \to x_{0}^{+}}f(x)=f(x_{0}^{+})$，$\lim_{x \to x_{0}^{-}}f(x)=f(x_{0}^{-})$，但是 $f(x_{0}^{+})\neq f(x_{0}^{-})$。

​	称 $x = x_{0}$ 为跳跃间断点，称 $|f(x_{0}^{+})-f(x_{0}^{-})|$ 为跳跃度.

> > 1, 2 两类统称为第一类间断点。

3. 左右极限至少有一个不存在，称 $x = x_{0}$ 为第二类间断点。

​	若 $\lim_{x \to x_{0}}f(x)=\infty$，$x = x_{0}$ 是第二类间断点，又称为无穷型间断点。

***

/example/    证明 $f(x)=\sin x$ 在 $\mathbb{R}$ 上连续。

错证：$\forall x_{0}\in\mathbb{R}$，由于 $\lim_{x \to x_{0}}\sin x=\sin x_{0}$，$\therefore\sin x$ 在 $x = x_{0}$ 处连续。

> /proof/
>
> 证：$\forall x_{0}\in\mathbb{R}$，$\forall\varepsilon > 0$，若要 $|\sin x-\sin x_{0}|<\varepsilon$ 成立。
>
> 由 $|\sin x-\sin x_{0}|=\left|2\cos\frac{x + x_{0}}{2}\sin\frac{x - x_{0}}{2}\right|$（和差化积，积化和差）
>
> $\leq2\left|\sin\frac{x - x_{0}}{2}\right|\leq2\left|\frac{x - x_{0}}{2}\right|=|x - x_{0}|$。
>
> 只要 $|x - x_{0}|<\varepsilon$ 成立，取 $\delta=\varepsilon$，当 $|x - x_{0}|<\delta$ 时，
>
> 都有 $|\sin x-\sin x_{0}|\leq|x - x_{0}|<\varepsilon$，$\therefore f(x)=\sin x$ 在 $x_{0}$ 处连续，故 $f(x)=\sin x$ 在 $\mathbb{R}$ 上连续。
>
> 同理可证，$\cos x$ 在 $\mathbb{R}$ 上连续。

### · 连续的性质

- **性质1（局部有界性）**：若 $f(x)$ 在 $x_{0}$ 处连续，$\exists\delta_{0}>0$，当 $x\in U(x_{0},\delta_{0})$ 时，都有 $|f(x)|\leq M$。

- **性质2**：若 $f(x)$，$g(x)$ 在 $x_{0}$ 处连续，且 $f(x_{0})<g(x_{0})$，$\exists\delta_{0}>0$，当 $x\in U(x_{0},\delta_{0})$，都有 $f(x)<g(x)$。

> 推论（保号性）：若 $f(x)$ 在 $x_{0}$ 处连续，且 $f(x_{0})>0$，对任何 $0<\eta<f(x_{0})$（常数），$\exists\delta>0$，当 $x\in U(x_{0},\delta)$ 时，$f(x)>\eta>0$。

- **性质3（连续的四则运算）**：若 $f(x)$，$g(x)$ 在 $x_{0}$ 均连续，则 $f(x)\pm g(x)$，$f(x)\cdot g(x)$，$C\cdot f(x)$（$C$ 常），$f(x)/g(x)$（$g(x_{0})\neq0$）在 $x_{0}$ 处都连续。

> /proof/
>
> $\lim_{x \to x_{0}}\frac{f(x)}{g(x)}=\frac{f(x_{0})}{g(x_{0})}$，知 $\frac{f(x)}{g(x)}$ 在 $x_{0}$ 处连续。

研究初等函数的连续性

1. $y = C$（常数）在 $\mathbb{R}$ 上显然连续。

2. 由 $\cos x$，$\sin x$ 在 $\mathbb{R}$ 上连续，利用四则运算可得：$\tan x,\cot x,\sec x,\csc x$ 在定义域内连续。

3. $y = a^{x}$ 可以证明在 $x = 0$ 处连续。

> /proof/
>
> $x_{0}\in\mathbb{R}$，$\lim_{x \to x_{0}}\Delta y=\lim_{x \to x_{0}}(a^{x}-a^{x_{0}})=a^{x_{0}}\lim_{x \to x_{0}}(a^{x - x_{0}}-1)=0$，
>
> $\therefore y = a^{x}$ 在 $\mathbb{R}$ 上连续。

> 定理（反函数连续性）：若 $y = f(x)$ 连续，且严格单调，则它的反函数 $x = \varphi(y)$ 连续，且严格单调。

4. $y=\log_{a}x$ 在 $(0,+\infty)$ 内连续。
5. 反三角函数在定义域内连续。

> 定理（复合函数连续性定理）：
>
> 若 $u = \varphi(x)$ 在 $x = x_{0}$ 处连续，$y = f(u)$ 在 $u_{0}=\varphi(x_{0})$ 也连续，则复合函数 $y = f(\varphi(x))$ 在 $x = x_{0}$ 处连续。
>
> > /proof/
> >
> > 因 $y = f(u)$ 在 $u = u_{0}=\varphi(x_{0})$ 处连续，$\forall\varepsilon > 0$，$\exists\delta > 0$，当 $|u - u_{0}|<\delta$ 时，都有 $|f(u)-f(u_{0})|<\varepsilon$。
> >
> > 由 $\varphi(x)$ 在 $x_{0}$ 处连续，即 $\lim_{x \to x_{0}}\varphi(x)=\varphi(x_{0})$，对上述 $\delta > 0$，$\exists\delta_{1}>0$，当 $|x - x_{0}|<\delta_{1}$ 时，
> >
> > 都有 $|\varphi(x)-\varphi(x_{0})|<\delta$，$\Rightarrow|\varphi(x)-u_{0}|<\delta$，
> >
> > 都有 $|f(\varphi(x))-f(\varphi(x_{0}))|<\varepsilon$，知 $f(\varphi(x))$ 在 $x = x_{0}$ 处连续，
> >
> > 即 $\lim_{x \to x_{0}}f(\varphi(x))=f(\varphi(x_{0}))$，或者 $\lim_{x \to x_{0}}f(\varphi(x))=f(\lim_{x \to x_{0}}\varphi(x))$。
>
> 推论：若 $\lim_{x \to x_{0}}\varphi(x)=u_{0}$（常），且 $y = f(u)$ 在 $u = u_{0}$ 处连续，则 $\lim_{x \to x_{0}}f(\varphi(x))=f(\lim_{x \to x_{0}}\varphi(x))$。
>
> > /proof/
> >
> > 因 $y = f(u)$ 在 $u = u_{0}=\varphi(x_{0})$ 处连续，$\forall\varepsilon > 0$，$\exists\delta > 0$，当 $|u - u_{0}|<\delta$ 时，都有 $|f(u)-f(u_{0})|<\varepsilon$。
> >
> > 由 $\varphi(x)$ 在 $x_{0}$ 处连续，即 $\lim_{x \to x_{0}}\varphi(x)=\varphi(x_{0})$，对上述 $\delta > 0$，$\exists\delta_{1}>0$，当 $|x - x_{0}|<\delta_{1}$ 时，
> >
> > 都有 $|\varphi(x)-\varphi(x_{0})|<\delta$，$\Rightarrow|\varphi(x)-u_{0}|<\delta$，
> >
> > 都有 $|f(\varphi(x))-f(\varphi(x_{0}))|<\varepsilon$，知 $f(\varphi(x))$ 在 $x = x_{0}$ 处连续，
> >
> > 即 $\lim_{x \to x_{0}}f(\varphi(x))=f(\varphi(x_{0}))$，或者 $\lim_{x \to x_{0}}f(\varphi(x))=f(\lim_{x \to x_{0}}\varphi(x))$

6. $y = x^{\alpha}=e^{\alpha\ln x}=e^{u}$，$u = \alpha\ln x$，

   > 因 $y = e^{u}$，$u = \alpha\ln x$ 复合的，$u = \alpha\ln x$ 在 $x > 0$ 时连续，由复合函数连续性定理。
   >
   > 知 $y = e^{\alpha\ln x}=x^{\alpha}$ 连续。
   >
   > 总之 $y = x^{\alpha}$ 在定义域内每一点处都连续。

定理：六种基本初等函数在定义域内每一点处都连续。

定理：初等函数在定义域区间上的每一点处都连续。

***

/example/    $y = \sqrt{\cos x - 1}$ 

> 由 $y = \sqrt{u}$ 与 $u = \cos x - 1$ 经过一次复合得到，知 $y = \sqrt{\cos x - 1}$ 是初等函数。
>
> 由定义域 $\begin{cases}\cos x - 1\geq0\\\cos x\leq1\end{cases}\Rightarrow\cos x = 1$，$x = 2k\pi$，$k\in\mathbb{Z}$，定义域为 $\{x|x = 2k\pi,k\in\mathbb{Z}\}$。
>
> $y = \sqrt{\cos x - 1}$ 在定义域内每一点都连续。

/example/    求 $\lim_{x \to 0}\frac{1 + e^{x}+\sqrt{1 + x^{2}}}{\sin x+\cos x + 1}$。

> 解：原式 $=\frac{1 + 1+1}{0 + 1+1}=\frac{3}{2}$。

/example/    求 $\lim_{x \to 0}\frac{\tan x-\sin x}{\sin^{3}x}$。

错解：原式 $=\lim_{x \to 0}\frac{x - x}{\sin^{3}x}=\lim_{x \to 0}\frac{0}{\sin^{3}x}=\lim_{x \to 0}0 = 0$（“因式”错误替换）。

> /solution/
>
> 解法一：
> $$
> \text{LHS.}=\lim_{x \to 0}\frac{\tan x(1 - \cos x)}{\sin^{3}x}
> =\lim_{x \to 0}\frac{x\cdot\frac{1}{2}x^{2}}{x^{3}}=\frac{1}{2}
> $$
>
> 解法二：
>
> $$
> \text{LHS.}=\lim_{x \to 0}\frac{\sin x(\frac{1}{\cos x}-1)}{\sin^{3}x}
> =\lim_{x \to 0}\frac{\sin x(1 - \cos x)}{x^{3}\cdot\cos x}
> =\lim_{x \to 0}\frac{x\cdot\frac{1}{2}x^{2}}{x^{3}\cdot1}=\frac{1}{2}
> $$
>
> （$\lim_{x \to 0}\cos x = 1\neq0$，$\cos x\sim1$，$x\to0$）
>
> “等价量替换” 多次求极限。

/example/    求 $\lim_{x \to 0}(1 + x)^{\frac{1}{x}}$。

> /solution/
>
> 正解：
>
> $$
> \text{LHS.}=\lim_{x \to 0}(1 + x)^{\frac{1}{x}}=e
> $$
>
> 

如果 $f(x)$ 在开区间 $(a,b)$ 内每一点处都连续（称双侧连续），称 $f(x)$ 在开区间 $(a,b)$ 内连续。

如果 $f(x)$ 在开区间 $(a,b)$ 内连续，在 $x = a$ 处右连续，在 $x = b$ 处左连续，称 $f(x)$ 在闭区间 $[a,b]$ 上连续。

如果 $f(x)$ 在区间 $I$ 上连续，在 $I$ 上曲线称为连续曲线。

### · 闭区间上连续函数的性质

- **定理（最大值与最小值定理）**：若 $f(x)\in C[a,b]$，则 $f(x)$ 在 $[a,b]$ 上一定能取到最大值 $M$，最小值 $m$。即 $\exists x_1,x_2\in[a,b]$，$f(x_1)=M$，$f(x_2)=m$，$\forall x\in[a,b]$，都有 $m\leq f(x)\leq M$。

  - **推论1**：若 $f(x)\in C[a,b]$，则 $f(x)$ 在 $[a,b]$ 上有最值。

  - **推论2**：若 $f(x)\in C[a,b]$，值域 $R(f)\subseteq[m,M]$。

- **定理（根存在定理或零点定理）**：若 $f(x)\in C[a,b]$，且 $f(a)\cdot f(b)<0$，则至少存在一点 $\xi\in(a,b)$，使 $f(\xi)=0$。

- **定理（介值定理）**：若 $f(x)\in C[a,b]$，且 $f(a)\neq f(b)$，对介于 $f(a)$，$f(b)$ 之间的任何一个常数 $C$，则至少存在一点 $\xi\in(a,b)$，使 $f(\xi)=C$。

  > /proof/
  >
  > 要证原结论成立，只要证 $f(\xi)-C = 0$ 成立，令 $\varphi(x)=f(x)-C$，只要 $\varphi(x)=C$ 有一个根（1）成立。
  >
  > 由 $f(x)\in C[a,b]$，且 $f(a)\neq f(b)$，不妨设 $f(a)<f(b)$，
  >
  > 则 $f(a)<C<f(b)$，$\varphi(a)=f(a)-C<0$，$\varphi(b)=f(b)-C>0$。
  >
  > 由根的存在定理，$\exists\xi\in(a,b)$，使 $\varphi(\xi)=0$，即（1）成立，故原结论成立。

  - **用介值定理证明根的存在定理**：由 $f(x)\in C[a,b]$，且 $f(a)\cdot f(b)<0$，知 $f(a)$，$f(b)$ 异号，$0$ 介于 $f(a)$，$f(b)$ 之间，由介值定理，$\exists\xi\in(a,b)$，使 $f(\xi)=0$。根的存在定理 $\Leftrightarrow$ 介值定理。

***

/example/    证明方程 $x - \frac{2}{3}\sin x = 1$ 有且仅有一个实根（$0 < \xi < 2$ 常）。

> /proof/
>
> 由 $x - \frac{2}{3}\sin x = 1\Leftrightarrow x - \frac{2}{3}\sin x - 1 = 0$。
>
> 设 $f(x)=x - \frac{2}{3}\sin x - 1$，$x\in\mathbb{R}$。
>
> 由 $f(0)=-1$，$f(2)=2 - \frac{2}{3}\sin 2 - 1>0$。
>
> 又 $x\in[0,2]$，由根的存在定理，$\exists\xi\in(0,2)\subset\mathbb{R}$，使 $f(\xi)=0$。
>
> 假设 $\exists x_1,x_2\in\mathbb{R}$，$x_1 < x_2$，有 $x_1 - \frac{2}{3}\sin x_1 = 1$ （1），$x_2 - \frac{2}{3}\sin x_2 = 1$ （2）。
>
> （1） - （2）得：
>
> $$
> \begin{align*}
> x_1 - x_2 - \frac{2}{3}(\sin x_1 - \sin x_2)&=0\\
> |x_1 - x_2|&=\left|\frac{2}{3}(\sin x_1 - \sin x_2)\right|\\
> &=\frac{2}{3}\left|2\cos\frac{x_1 + x_2}{2}\sin\frac{x_1 - x_2}{2}\right|\\
> &\leq 2\cdot\frac{2}{3}\left|\sin\frac{x_1 - x_2}{2}\right|\\
> &< 2\cdot\frac{2}{3}\left|\frac{x_1 - x_2}{2}\right|\\
> &=\frac{2}{3}|x_1 - x_2|
> \end{align*}
> $$
>
> 又 $|x_1 - x_2|>0$，$\frac{2}{3}<1$，矛盾。

### · 重要等价无穷小量

1. $\lim_{x \to 0}\frac{\sin x}{x}=1$

2. $\lim_{x \to 0}(1 + x)^{\frac{1}{x}}=e$

3. $\lim_{x \to 0}\frac{\tan x}{x}=1$

4. $\lim_{x \to 0}\frac{1 - \cos x}{x^{2}}=\frac{1}{2}$

5. 

$$
\lim_{x \to 0}\frac{\ln(1 + x)}{x}=\lim_{x \to 0}\frac{1}{x}\ln(1 + x)
=\lim_{x \to 0}\ln(1 + x)^{\frac{1}{x}}
=\ln e = 1
$$

（复合函数连续性推论）

> 或 $\lim_{x \to 0}\frac{\ln(1 + x)}{x}=\lim_{x \to 0}\ln(1 + x)^{\frac{1}{x}}$，令 $(1 + x)^{\frac{1}{x}} = u$，$\lim_{x \to 0}\ln u=\ln e = 1$。

6. $\lim_{x \to 0}\frac{e^{x}-1}{x}$

   > 令 $e^{x}-1 = u$，$x = \ln(1 + u)$，$\lim_{x \to 0}\frac{u}{\ln(1 + u)}=\lim_{u \to 0}\frac{u}{\ln(1 + u)} = 1$。
   >
   > 若 $x\to x_0$ 有 $f(x)\to0$，$\lim_{x \to x_0}\frac{e^{f(x)}-1}{f(x)} = 1$。
   >
   > $x\to0$，$e^{x}-1\sim x$；$x\to x_0$，有 $f(x)\to0$，$e^{f(x)}-1\sim f(x)$。

7. $\lim_{x \to 0}\frac{a^{x}-1}{x}$（$a>0$，$a\neq1$ 常）

$$
=\lim_{x \to 0}\frac{e^{x\ln a}-1}{x}
=\lim_{x \to 0}\frac{x\ln a}{x}=\ln a
$$

​	$a = 1$，结论也成立。

8. $\lim_{x \to 0}\frac{(1 + x)^{\alpha}-1}{x}$（$\alpha\neq0$ 常）

$$
=\lim_{x \to 0}\frac{e^{\alpha\ln(1 + x)}-1}{x}
=\lim_{x \to 0}\frac{\alpha\ln(1 + x)}{x}=\alpha
$$

​	$\alpha = 0$，结论也成立。

9. $\lim_{x \to x_0}u(x)=a>0$，常，$\lim_{x \to x_0}v(x)=b>0$，常，则 $\lim_{x \to x_0}u(x)^{v(x)}$（幂指函数）$=a^{b}$。

$$
\begin{align*}
\text{LHS.}&=\lim_{x \to x_0}e^{v(x)\ln u(x)}\\
&=e^{\lim_{x \to x_0}v(x)\ln u(x)}\\
&=e^{\lim_{x \to x_0}v(x)\cdot\lim_{x \to x_0}\ln u(x)}\\
&=e^{b\ln a}=a^{b}
\end{align*}
$$

10. $\lim_{x \to 0}\frac{\arcsin x}{x}$

$$
\xlongequal{\arcsin x = t}\lim_{t \to 0}\frac{t}{\sin t}
=\lim_{t \to 0}\frac{t}{\sin t}=1
$$

11. $\lim_{x \to 0}\frac{\arctan x}{x}$

$$
\xlongequal{\arctan x = t}\lim_{t \to 0}\frac{t}{\tan t}
=\lim_{t \to 0}\frac{t}{\tan t}=1
$$

#### · 重要极限的一般形式

若 $x\to x_0$ 时，有 $f(x)\to0$，

$\lim_{x \to x_0}\frac{\sin f(x)}{f(x)} = 1$，$\lim_{x \to x_0}\frac{\ln(1 + f(x))}{f(x)} = 1$，$\lim_{x \to x_0}\frac{e^{f(x)}-1}{f(x)} = 1$，

$\lim_{x \to x_0}\frac{(1 + f(x))^{\alpha}-1}{f(x)}=\alpha$，$\lim_{x \to x_0}\frac{1 - \cos f(x)}{f(x)^{2}}=\frac{1}{2}$，$\lim_{x \to x_0}[1 + f(x)]^{\frac{1}{f(x)}}=e$。

重要的等价无穷小量：当 $x\to0$ 时，有

$\sin x\sim x$，$\ln(1 + x)\sim x$，$1 - \cos x\sim\frac{1}{2}x^{2}$，$\tan x\sim x$，$e^{x}-1\sim x$，$a^{x}-1\sim x\ln a$（$a\neq1$），

$(1 + x)^{\alpha}-1\sim\alpha x$（$\alpha\neq0$），$\arcsin x\sim x$，$\arctan x\sim x$。

重要的等价无穷小量：若 $x\to x_0$ 有 $f(x)\to0$，则

$\sin f(x)\sim f(x)$，$\ln(1 + f(x))\sim f(x)$，$e^{f(x)}-1\sim f(x)$，$a^{f(x)}-1\sim f(x)\ln a$（$a\neq1$），

$[1 + f(x)]^{\alpha}-1\sim\alpha f(x)$（$\alpha\neq0$），$1 - \cos f(x)\sim\frac{1}{2}f(x)^{2}$。

***

/example/  求 $\lim_{x \to 0}(\frac{a^{x}+b^{x}+c^{x}}{3})^{\frac{1}{x}}$（$a,b,c>0$ 常）。

> /solution/
>
> 解法一：
>
> $$
> \begin{align*}
> \text{HLS.}&=\lim_{x \to 0}\left[1 + \left(\frac{a^{x}+b^{x}+c^{x}}{3}-1\right)\right]^{\frac{1}{\frac{a^{x}+b^{x}+c^{x}}{3}-1}\cdot\frac{1}{x}(\frac{a^{x}+b^{x}+c^{x}}{3}-1)}\\
> &=e^{\lim_{x \to 0}\frac{1}{x}(\frac{a^{x}+b^{x}+c^{x}}{3}-1)}\\
> &=e^{\lim_{x \to 0}\frac{1}{3}(\frac{a^{x}-1}{x}+\frac{b^{x}-1}{x}+\frac{c^{x}-1}{x})}\\
> &=e^{\frac{1}{3}(\ln a+\ln b+\ln c)}\\
> &=e^{\frac{1}{3}\ln abc}=(abc)^{\frac{1}{3}}=\sqrt[3]{abc}
> \end{align*}
> $$
>
> 解法二：
>
> $$
> \begin{align*}
> \text{HLS.}&=\lim_{x \to 0}e^{\frac{1}{x}\ln(\frac{a^{x}+b^{x}+c^{x}}{3})}\quad(1^{\infty})\\
> &=e^{\lim_{x \to 0}\frac{1}{x}\ln[1 + (\frac{a^{x}+b^{x}+c^{x}}{3}-1)]}\\
> &=e^{\lim_{x \to 0}\frac{1}{x}(\frac{a^{x}+b^{x}+c^{x}}{3}-1)}\\
> &=e^{\frac{1}{3}(\ln a+\ln b+\ln c)}=\sqrt[3]{abc}
> \end{align*}
> $$
>
> Q.E.D.

例：求 $\lim_{x \to +\infty}\frac{\ln(1 + 3^{x})}{\ln(1 + 2^{x})}$。

> /solution/
>
> $$
> \begin{align*}
> \text{LHS.}&=\lim_{x \to +\infty}\frac{\ln 3^{x}(1 + 3^{-x})}{\ln 2^{x}(1 + 2^{-x})}\\
> &=\lim_{x \to +\infty}\frac{\ln 3^{x}+\ln(1 + 3^{-x})}{\ln 2^{x}+\ln(1 + 2^{-x})}\\
> &=\lim_{x \to +\infty}\frac{x\ln 3+\ln(1 + 3^{-x})}{x\ln 2+\ln(1 + 2^{-x})}\\
> &=\lim_{x \to +\infty}\frac{\ln 3+\frac{1}{x}\ln(1 + 3^{-x})}{\ln 2+\frac{1}{x}\ln(1 + 2^{-x})}=\frac{\ln 3}{\ln 2}
> \end{align*}
> $$
>
> Q.E.D.

### · 证明题训练

/example/   

设 $f(x)$ 在开区间 $(a,b)$ 内连续（$a,b$ 常），$\lim_{x \to a^{+}}f(x)=A>0$ 常，$\lim_{x \to b^{-}}f(x)=B<0$ 常，

证明存在 $\xi\in(a,b)$，使 $f(\xi)=0$。

> 证法一：
>
> 不妨令
> $$
> F(x)=\begin{cases}A, & x = a\\f(x), & x\in(a,b)\\B, & x = b\end{cases}
> $$
> 知 $F(x)$ 在 $[a,b]$ 上连续，且 $F(a)F(b)=AB<0$，
>
> 由根的存在定理，$\exists\xi\in(a,b)$ 使 $F(\xi)=0$，$x\in(a,b)$ 时 $F(x)=f(x)$，故 $f(\xi)=0$。
>
> 证法二：
>
> 由 $\lim_{x \to a^{+}}f(x)=A>0$，由保号性，$\exists\delta_1>0$，当 $a<x<a + \delta_1<b$ 有 $f(x)>0$，取 $a<a_1<a+\delta_1$，有 $f(a_1)>0$。
>
> 由 $\lim_{x \to b^{-}}f(x)=B<0$，由保号性，$\exists\delta_2>0$，当 $a<b - \delta_2<x<b$ 有 $f(x)<0$，取 $b - \delta_2<b_1<b$，有 $f(b_1)<0$。
>
> $f(x)\in C[a_1,b_1]$，$\exists\xi\in(a_1,b_1)\subseteq(a,b)$ 使得 $f(\xi)=0$。

/example/    设 $P_n(x)=a_0x^n + a_1x^{n - 1}+\cdots + a_n$，$a_0,a_1,\cdots,a_n$ 均为实常数，$a_0\neq0$。

证明：当 $n$ 为奇数时，$P_n(x)=0$ 至少有一个实根。

> /proof/
>
> 由 $P_n(x)$ 在 $\mathbb{R}$ 上连续，由 $a_0\neq0$，不妨设 $a_0>0$。
>
> $$
> \begin{align*}
> \lim_{x \to +\infty}P_n(x)&=\lim_{x \to +\infty}x^n\left(a_0+\frac{a_1}{x}+\cdots+\frac{a_{n - 1}}{x^{n - 1}}+\frac{a_n}{x^n}\right)\\
> &=+\infty
> \end{align*}
> $$
>
> 取 $M = 1>0$，$\exists X>0$，当 $x>X$ 时，都有 $P_n(x)>1>0$，取 $b>X$，有 $P_n(b)>1>0$。
>
> $$
> \lim_{x \to -\infty}P_n(x)=-\infty
> $$
>
> 取 $M = 1>0$，$\exists X_1>0$，当 $x<-X_1$ 时，都有 $P_n(x)< - 1<0$，取 $a<-X_1$，$P_n(a)< - 1<0$。
>
> $P_n(x)\in C[a,b]$，存在一点 $\xi\in(a,b)$，使 $P_n(\xi)=0$。

### · 确定函数的间断点及分类

1. 若 $f(x)$ 是初等函数，如果 $f(x)$ 在 $x_0$ 处没有定义，但是要在 $x_0$ 的两侧或一侧要有定义，则 $x_0$ 为间断点，再按间断点的分类讨论。

2. 若 $f(x)$ 是分段函数，则分界点 $x_0$ 是间断点的可疑点。由于分段函数是 $x$ 在不同范围用不同的初等函数表达式表示，该表达式在所属范围内没有定义的点就是间断点。

   ***

/example/    $f(x)=\begin{cases}\frac{1}{x - 2},&x<1\\x^2,&x\geq1\end{cases}$，讨论 $f(x)$ 的间断点类型。

> /solution/
> $$
> \begin{align*}
> \lim_{x \to 1^{-}}f(x)&=\lim_{x \to 1^{-}}\frac{1}{x - 2}=-1\\
> \lim_{x \to 1^{+}}f(x)&=\lim_{x \to 1^{+}}x^2 = 1
> \end{align*}
> $$
>
> 因 $1\neq - 1$，知 $x = 1$ 为跳跃间断点。

/example/    $f(x)=\begin{cases}\frac{1}{x - 1},&x\leq2\\x^2-3,&x>2\end{cases}$，讨论 $f(x)$ 的间断点，指出类型。

> /solution/
> $$
> \begin{align*}
> \lim_{x \to 2^{-}}f(x)&=\lim_{x \to 2^{-}}\frac{1}{x - 1}=1\\
> \lim_{x \to 2^{+}}f(x)&=\lim_{x \to 2^{+}}(x^2 - 3)=1
> \end{align*}
> $$
> $\Rightarrow\lim_{x \to 2}f(x)=1=f(2)=1$，知 $x = 2$ 为连续点。
> $$
> \lim_{x \to 1^{-}}f(x)=\lim_{x \to 1^{-}}\frac{1}{x - 1}=-\infty
> $$
> $\therefore x = 1$ 为第二类间断点。

/example/    $f(x)=\frac{x^2 - 1}{x - 1}$，讨论 $f(x)$ 的间断点，指出类型。

> /solution/
>
> 由 $f(x)$ 在 $x = 1$ 处无定义，$x = 1$ 为间断点。
> $$
> \begin{align*}
> \lim_{x \to 1}f(x)&=\lim_{x \to 1}\frac{x^2 - 1}{x - 1}\\
> &=\lim_{x \to 1}\frac{(x + 1)(x - 1)}{x - 1}\\
> &=\lim_{x \to 1}(x + 1)=2
> \end{align*}
> $$
> 知 $x = 1$ 为可去间断点。

/example/    $f(x)=\tan x$，讨论间断点，指出类型。

> /solution/
>
> 由 $f(x)$ 在 $x = k\pi+\frac{\pi}{2}(k\in\mathbb{Z})$ 处无定义，在左侧有定义。
> $$
> \lim_{x \to k\pi+\frac{\pi}{2}^{-}}f(x)=\lim_{x \to k\pi+\frac{\pi}{2}^{-}}\tan x=+\infty
> $$
>
> $$
> \lim_{x \to k\pi+\frac{\pi}{2}^{+}}f(x)=\lim_{x \to k\pi+\frac{\pi}{2}^{+}}\tan x=-\infty
> $$
>
> 知 $x = k\pi+\frac{\pi}{2}(k\in\mathbb{Z})$ 为第二类间断点（无穷型间断点）。