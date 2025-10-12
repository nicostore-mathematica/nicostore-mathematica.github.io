---
title: Chapter 6 积分
createTime: 2025/02/06 10:48:41
permalink: /integral/integral-6/
---

## Fragment 1 不定积分

在实际中，经常要解决：已知 $F^\prime(x)=f(x)$，$\Leftrightarrow f(x)dx = F^\prime(x)dx = dF(x)$，求$F(x)$。

> /Define/
>
> 设$f(x)$在区间$I$上有定义，若存在一个$F(x)$，对每一个$x\in I$，都有$F^\prime(x)=f(x)$，称$F(x)$是$f(x)$的一个原函数。
>
> 若$F(x)$是$f(x)$在区间$I$上的一个原函数，则$F(x)+C$也是$f(x)$在区间$I$上的原函数（$C$为常数，$C\in\mathbb{R}$）。

$\forall G(x)$是$f(x)$在区间$I$上的任意一个原函数，即$\forall x\in I$，$G^\prime(x)=f(x)$，

由$[G(x)-F(x)]^\prime = G^\prime(x)-F^\prime(x)=f(x)-f(x)=0$，

知$G(x)-F(x)=C$（常数），即$G(x)=F(x)+C$。

> 定理：若$F(x)$是$f(x)$在区间$I$上的一个原函数，则$F(x)+C$（$C\in\mathbb{R}$，$C$为常数）是$f(x)$在区间$I$上的全体原函数，
>
> 称为$f(x)$在区间$I$上的不定积分，记作$\int f(x)dx$，即$\int f(x)dx = F(x)+C$（$x\in I$，$C$为常数，$C\in\mathbb{R}$）。
>
> $f(x)$称为被积函数，$f(x)dx$称为被积表达式，$x$称为积分变量，$\int$称为不定积分号。

**性质：**

1. $$
   (\int f(x)dx)^\prime=\frac{d}{dx}\int f(x)dx = f(x)
   $$

2. $$
   d\int f(x)dx = f (x)dx
   $$

3. $$
   \int f^\prime(x)dx=\int\frac{d}{dx}f(x)dx = f(x)+C
   $$

4. $$
   \int df(x)=\int f^\prime(x)dx = f(x)+C,\quad\int g^\prime(u)du=\int dg(u)=G(u)+C
   $$

   

> 不定积分的几何意义：
>
> 设$F(x)$是$f(x)$的原函数，则$\int f(x)dx = F(x)+C$，如$(\int f(x)dx)^\prime=(F(x)+C)^\prime = f(x)$。

基本的不定积分公式：

> /Formula/
>
> 1. $$
>    \int 0dx = C
>    $$
>
>
> 2. $$
>    \int 1dx=\int dx = x + C
>    $$
>
>
> 3. $$
>    \int x^a dx=\frac{1}{a + 1}x^{a + 1}+C(a\neq -1),\quad(\frac{1}{a + 1}x^{a + 1})^\prime=x^a
>    $$
>
>
> 4. $$
>    \int x^{-1}dx=\int\frac{1}{x}dx=\ln|x|+C
>    $$
>
> 
>
> 5. $$
>    \int a^x dx = \frac{a^x}{\ln a}+C
>    $$
>
>
> 6. $$
>    \int e^x dx = e^x + C
>    $$
>
>
> 7. $$
>    \int \cos x dx = \sin x + C
>    $$
>
>
> 8. $$
>    \int \sin x dx = -\cos x + C
>    $$
>
>
> 9. $$
>    \int \sec^2 x dx = \tan x + C
>    $$
>
>
> 10. $$
>     \int \csc^2 x dx = -\cot x + C
>     $$
>
>
> 11. $$
>     \int \sec x \tan x dx = \sec x + C
>     $$
>
>
> 12. $$
>     \int \csc x \cot x dx = -\csc x + C
>     $$
>
>
> 13. $$
>     \int \frac{1}{1 + x^2} dx = \arctan x + C = -\text{arccot}x + C_1
>     $$
>
>
> 14. $$
>     \int \frac{1}{\sqrt{1 - x^2}} dx = \arcsin x + C = -\arccos x + C
>     $$
>
> 
>
> > 双曲余弦：$\text{ch}x = \frac{e^x + e^{-x}}{2}$	双曲正弦：$\text{sh}x = \frac{e^x - e^{-x}}{2}$
> >
> > $\text{ch}^2x - \text{sh}^2x = 1$，$\text{sh}x^\prime = \text{ch}x$，$\text{ch}x^\prime = \text{sh}x$
>
> 15. $$
>     \int \text{sh}x dx = \text{ch}x + C
>     $$
>
>
> 16. $$
>     \int \text{ch}x dx = \text{sh}x + C
>     $$
>
> 

### · 线性运算法则

> /Theorem/
>
> 若$\int f(x)dx$，$\int g(x)dx$均存在，$\forall$常数$\alpha,\beta$（$\alpha,\beta$不同时为$0$），则$\int [\alpha f(x) + \beta g(x)]dx$存在，且
> $$
> \int [\alpha f(x) + \beta g(x)]dx = \alpha \int f(x)dx + \beta \int g(x)dx
> $$

给出证明过程：

> /proof/
> $$
> [\alpha \int f(x)dx + \beta \int g(x)dx]^\prime = \alpha [\int f(x)dx]^\prime + \beta [\int g(x)dx]^\prime = \alpha f(x) + \beta g(x)
> $$
> $\alpha \int f(x)dx + \beta \int g(x)dx$ 是 $\alpha f(x) + \beta g(x)$的原函数，且含有加$C$，故成立。

/example/
$$
\int \sqrt{x\sqrt{x\sqrt{x}}}dx = \int x^{\frac{1}{2}}x^{\frac{1}{4}}x^{\frac{1}{8}}dx = \int x^{\frac{7}{8}}dx = \frac{8}{15}x^{\frac{15}{8}} + C
$$
/example/  $\int \tan^2 xdx$

> /solution/
> $$
> =\int (\sec^2 x - 1)dx = \int \sec^2 xdx - \int 1dx = (\tan x + C_1) - (x + C_2) = \tan x - x + C
> $$

/example/  $\int \frac{1}{\sin^2 x \cos^2 x}dx$

> /solution/
> $$
> =\int \frac{\sin^2 x + \cos^2 x}{\sin^2 x \cos^2 x}dx = \int (\sec^2 x + \csc^2 x)dx = \tan x - \cot x + C
> $$

/example/  $\int \frac{x^2}{x^2 + 1}dx$

> /solution/
> $$
> =\int \frac{x^2 - 1 + 1}{x^2 + 1}dx = \int (1 - \frac{1}{x^2 + 1})dx = x - \arctan x + C
> $$

### · 换元法

#### · 凑微分 (第一换元法)

首先抛出一个问题：
$$
\int \tan xdx = \int \frac{\sin x}{\cos x}dx =?
$$

若$F^\prime(u) = f(u)$，则$[F(\varphi(x))]^\prime = F^\prime(\varphi(x))\cdot\varphi^\prime(x) = f(\varphi(x))\cdot\varphi^\prime(x)$。

求$\int g(x)dx$，如果$g(x)dx = d(?) $，则$\int g(x)dx =? + C$。

> /Claim/
>
> 如果$g(x)dx = f(\varphi(x))\cdot\varphi^\prime(x)dx$，令$u = \varphi(x)$，
> $$
> f(\varphi(x))d\varphi(x)\stackrel{u = \varphi(x)}{\longrightarrow}f(u)du = dF(u)
> $$
> 则$\int g(x)dx = F(\varphi(x)) + C$，或
> $$
> \int g(x)dx = \int f(\varphi(x))\cdot\varphi^\prime(x)dx = \int f(\varphi(x))d\varphi(x)\stackrel{u = \varphi(x)}{\longrightarrow}\int f(u)du\stackrel{F^\prime(u)=f(u)}{=}F(u) + C = F(\varphi(x)) + C
> $$

/example/  $\int e^{2x}dx$ （$\varphi(x) = 2x$，$f(u) = e^u$，$f(\varphi(x)) = e^{2x}$）

> /solution/
> $$
> =\int e^{2x}\cdot(2x)^\prime\frac{1}{2}dx = \frac{1}{2}\int e^{2x}\cdot(2x)dx = \frac{1}{2}\int e^{2x}d(2x)\stackrel{u = 2x}{=}\frac{1}{2}\int e^udu = \frac{1}{2}e^u + C = \frac{1}{2}e^{2x} + C
> $$

我们可以在积分组中加入两个新的公式：

> /Formula/
>
> 17. $$
>     \int \tan xdx = \int \frac{\sin x}{\cos x}dx = -\int \frac{1}{\cos x}d\cos x = -\ln|\cos x| + C
>     $$
>
> 18. $$
>     \int \cot xdx = \int \frac{\cos x}{\sin x}dx = \int \frac{1}{\sin x}d\sin x = \ln|\sin x| + C
>     $$
>
> 

记住一些微分关系式：
$$
dx = 1\cdot dx = \frac{1}{a}d(ax + b)\quad(a\neq 0),\quad dx = \frac{1}{a}d(ax + b)\\
xdx = \frac{1}{2}d(x^2\pm a^2),\quad xdx = -\frac{1}{2}d(a^2 - x^2)\\
\cos xdx = d\sin x,\quad\sin xdx = -d\cos x\\
\frac{1}{x}dx = d\ln|x|\stackrel{x>0}{=}d\ln x\\
e^xdx = de^x\\
$$
  如果$F^\prime(u) = f(u)$，
$$
  \int f(ax + b)dx = \frac{1}{a}\int f(ax + b)d(ax + b) = \frac{1}{a}F(ax + b) + C\\
  \int f(a^2 - x^2)xdx = -\frac{1}{2}\int f(a^2 - x^2)d(a^2 - x^2) = -\frac{1}{2}F(a^2 - x^2) + C
$$

> /example/
>
> $\int \frac{1}{a^2 + x^2}dx$（$a\neq 0$）
> $$
> \begin{align*}
> &=\frac{1}{a^2}\int \frac{1}{1 + (\frac{x}{a})^2}dx\\
> &=\frac{1}{a}\int \frac{1}{1 + (\frac{x}{a})^2}d(\frac{x}{a})\\
> &=\frac{1}{a}\arctan\frac{x}{a}+C
> \end{align*}
> $$
> $\int \frac{1}{\sqrt{a^2 - x^2}}dx$（$a > 0$）
> $$
> \begin{align*}
> &=\int \frac{1}{\sqrt{1 - (\frac{x}{a})^2}}d(\frac{x}{a})\\
> &=\arcsin\frac{x}{a}+C
> \end{align*}
> $$
> $\int \frac{1}{a^2 - x^2}dx$（$a\neq 0$）
> $$
> \begin{align*}
> &=\int \frac{1}{(a - x)(a + x)}dx\\
> &=\frac{1}{2a}\int (\frac{1}{a - x}+\frac{1}{a + x})dx\\
> &=\frac{1}{2a}[\int \frac{1}{a - x}d(a - x)+\int \frac{1}{a + x}d(a + x)]\\
> &=\frac{1}{2a}[-\ln|a - x|+\ln|a + x|]+C\\
> &=\frac{1}{2a}\ln|\frac{a + x}{a - x}|+C
> \end{align*}
> $$
> $\int \sec xdx=\int \frac{1}{\cos x}dx$ 
> $$
> \begin{align*}
> &=\int \frac{\cos x}{\cos^2 x}dx\\
> &=\int \frac{1}{1 - \sin^2 x}d\sin x\\
> &=\frac{1}{2}\ln|\frac{1 + \sin x}{1 - \sin x}|+C\\
> &=\frac{1}{2}\ln|\frac{(1 + \sin x)^2}{\cos^2 x}|+C\\
> &=\ln|\sec x+\tan x|+C
> \end{align*}
> $$
>
> > 解法二：
> > $$
> > =\int \frac{\sec x(\sec x + \tan x)}{\sec x + \tan x}dx=\int \frac{1}{\sec x + \tan x}d(\sec x + \tan x)=\ln|\sec x+\tan x|+C
> > $$
> > （$(\tan x)^\prime=\sec^2 x$，$(\sec x)^\prime=\sec x\tan x$）

这些是积分表中的公式

> /Formula/
>
> 19. $$
>     \int \frac{1}{a^2 + x^2}dx=\frac{1}{a}\arctan\frac{x}{a}+C
>     $$
>
> 20. $$
>     \int \frac{1}{\sqrt{a^2 - x^2}}dx=\arcsin\frac{x}{a}+C
>     $$
>
> 21. $$
>     \int \frac{1}{a^2 - x^2}dx=\frac{1}{2a}\ln|\frac{a + x}{a - x}|+C
>     $$
>
> 22. $$
>     \int \sec xdx=\int \frac{1}{\cos x}dx=\ln|\sec x+\tan x|+C
>     $$
>
> 23. $$
>     \int \csc xdx=\ln|\csc x - \cot x|+C
>     $$
>
> 24. $$
>     \int e^{ax}dx(a\neq 0)=\frac{1}{a}e^{ax}+C
>     $$
>
> 25. $$
>     \int \cos axdx=\frac{1}{a}\sin ax + C
>     $$
>
> 26. $$
>     \int \sin axdx=-\frac{1}{a}\cos ax + C
>     $$
>
> 

#### · 变量代换 (第二换元法)

> /Claim/
>
> 主要用来去根式（$\varphi(t)$可导） 
> $$
> f(x)dx\stackrel{x = \varphi(t)}{\longrightarrow}f(\varphi(t))d\varphi(t)
> =f(\varphi(t))\cdot\varphi^\prime(t)dt\quad
> \stackrel{F^\prime(t)=f(\varphi(t))\cdot\varphi^\prime(t)}{=} dF(t)=dF(\varphi^{-1}(x))
> $$
> 如果$x = \varphi(t)$严格单调，$t = \varphi^{-1}(x)$，
> $$
> \therefore \int f(x)dx = F(\varphi^{-1}(x))+C\\
> \int f(u)dx \xlongequal{x = \varphi(t)} \int f(\varphi(t))\varphi'(t)dt
> $$
> 设$H'(t)=f(\varphi(t))\varphi'(t)$，则
> $$
> \int f(\varphi(t))\varphi'(t)dt = H(t)+C = H(\varphi^{-1}(t)) + C
> $$

如果被积函数中有下列根式，不能用前面方法，此时，用变量代换：

> /Claim/
>
> 
>
> $$
> \sqrt{a^{2}-x^{2}},\quad x = a\sin t,\quad t\in[-\frac{\pi}{2},\frac{\pi}{2}]\\
> \sqrt{a^{2}+x^{2}},\quad x = a\tan t,\quad t\in[-\frac{\pi}{2},\frac{\pi}{2}]\\
> \sqrt{x^{2}-a^{2}},\quad x = a\sec t,\quad t\in[0,\frac{\pi}{2})\cup(\frac{\pi}{2},\pi]
> $$
> $\sqrt[n]{\frac{ax + b}{cx + d}}$，令$\sqrt[n]{\frac{ax + b}{cx + d}}=t$，解出$x=\varphi(t)$（有理式）
>
> $\sqrt[n]{ax + b}$，令其为 $t$

/example/  $\int\sqrt{a^{2}-x^{2}}dx\ (a > 0)$

> /solution/
> $$
> \begin{align*}
> \text{L.H.S.}&=\int\sqrt{a^{2}-a^{2}\sin^{2}t}\cdot a\cos tdt \\
> &=a^{2}\int|\cos t|\cos tdt \\
> &=a^{2}\int\cos^{2}tdt \\
> &=\frac{a^{2}}{2}\int(1 + \cos 2t)dt \\
> &=\frac{a^{2}}{2}t+\frac{a^{2}}{4}\sin 2t + C \\
> &=\frac{a^{2}}{2}\arcsin\frac{x}{a}+\frac{a^{2}}{2}\sin t\cos t + C \\
> &=\frac{a^{2}}{2}\arcsin\frac{x}{a}+\frac{a^{2}}{2}\cdot\frac{x}{a}\cdot\frac{\sqrt{a^{2}-x^{2}}}{a}+C \\
> &=\frac{a^{2}}{2}\arcsin\frac{x}{a}+\frac{1}{2}x\sqrt{a^{2}-x^{2}}+C\\ 
> \end{align*}
> $$
> Q.E.D.

/example/  $\int\frac{1}{\sqrt{x^{2}+a^{2}}}dx\ (a > 0)$

> /solution/
>
> 令 $x = a\tan t$
> $$
> \begin{align*}
> &=\int\frac{a\sec^{2}t}{\sqrt{a^{2}\tan^{2}t + a^{2}}}dt\\
> &=\int\sec tdt\\
> &=\ln|\sec t+\tan t|+C\\
> &=\ln|\frac{\sqrt{a^{2}+x^{2}}}{a}+\frac{x}{a}|+C\\
> &=\ln|\sqrt{a^{2}+x^{2}}+x|-\ln a + C_{1}\\
> &=\ln|x + \sqrt{a^{2}+x^{2}}|+C_{1}\\
> \end{align*}
> $$

这也是积分表的公式之一

> /Formula/
>
> 27. $$
>     \int\frac{1}{\sqrt{x^{2}+a^{2}}}dx=\ln|x+\sqrt{x^{2}+a^{2}}|+C\\
>     $$
>
> 
>
> 28. $$
>     \int\frac{1}{\sqrt{x^{2}-a^{2}}}dx=\ln|x+\sqrt{x^{2}-a^{2}}|+C\\
>     $$
>
> 
>
> 

一般来说，被积函数是初等函数，则原函数也为初等函数，只有一个表达式。有正有负，不妨设为正。

/example/  $\int\frac{1}{\sqrt[3]{x}+\sqrt[2]{x}}dx$

> /solution/
>
> $\sqrt[6]{x}=t，x = t^{6}$
> $$
> \begin{align*}
> \text{L.H.S.}&=\int\frac{6t^{5}}{t^{2}+t^{3}}dt\\
> &=6\int\frac{t^{3}}{t + 1}dt\\
> &=6\int\frac{t^{3}+1 - 1}{t + 1}dt\\
> &=6\int(t^{2}-t + 1-\frac{1}{t + 1})dt\\
> &=6(\frac{1}{3}t^{3}-\frac{1}{2}t^{2}+t-\ln(t + 1))+C\\
> \end{align*}
> $$
> 最终换回 $t=\sqrt[6]{x}$

### · 分部积分

> 如果你会分部积分，就能开始进行研究了.
>
> ——于品

有人在不同场合分别问著名的分析学家 Peter Lax 和几何学家 Nirenberg，问分析学中最重要的是什么，他们在不同场合没有沟通过的情况下均回答是分部积分.

> /Theorem/
>
> 若  $u(x), v(x)$  可导，则
>
> $$
> \int u \, dv = uv - \int v \, du + C
> $$

下面我们给出证明：

> /proof/
>
> 证明1：由  $(uv)' = u'v + uv'$ 
>
> $$
> \Rightarrow uv' = (uv)' - uv\\
> \Rightarrow \int uv' \, dx = \int [(uv)' - uv] \, dx\\
> \Rightarrow \int uv' \, dx = (uv)x - \int uv \, dx\\
> \Rightarrow \int u \, dv = uv - \int v \, du
> $$
>
> 证明2：
>
> $$
> d(uv) = v \, du + u \, dv\\
> \Rightarrow v \, du = d(uv) - u \, dv\\
> \Rightarrow \int v \, du = \int (d(uv) - u \, dv)\\
> \Rightarrow \int v \, du = uv - \int u \, dv
> $$

公式也可以以如下形式展开：

$$
\int f(x) \, dx = \int u(x)v'(x) \, dx = \int u \, dv = uv - \int v \, du = u(x)v(x) - \int v(x) \, du(x)
$$
这里我们给出一个最经典的例题：

/example/  $\int xe^x \, dx$ 

> /solution/
>
> 令  $u = x, v' = e^x$ 
>
> $$
> \Rightarrow v = e^x
> \Rightarrow \int xe^x \, dx = \int x \, de^x = xe^x - \int e^x \, dx = xe^x - e^x + C
> $$

下面我们再给出一些特别的模型：

> /Claim/
>
> 设  $P(x)$  是  $x$  的  $k$  次多项式， $\alpha \neq 0$  常数
>
> 1. $$
>    \int {P(x)}{e^{\alpha x}} \, dx = \int{P(x)} d \left( \frac{1}{\alpha} e^{\alpha x} \right)
>    $$
>
>    需要  $k$  次不定积分
>
> 2. $$
>    \int P(x) \cos \alpha x \, dx = \int P(x){d} \left( \frac{1}{\alpha} \sin \alpha x \right)\\
>    \int P(x) \sin \alpha x \, dx = \int P(x)  d \left( -\frac{1}{\alpha} \cos \alpha x \right)
>    $$
>
>     设  $P(x)$  为  $x$  的函数
>
> 3. $$
>    \int P(x) f\left( \arcsin x \right) \, dx
>    $$
>
> ​	能凑则凑，若不能凑，令  $f(\arcsin x) = u, P(x)$  为  $v$ ，求出  $v$ 
>
> 5. $$
>        \int P(x)f(\ln x) \, dx
>    $$
>
>    能凑则凑，若不能凑，令  $f(\ln x) = u, P(x) = v$ ，求出  $v$ 

/example/  $\int (1+x^2) \cos 2x \, dx$

> /solution/
> $$
> \begin{align*}
> \text{H.L.S.} &= \int (1+x^2) \, d\left(\frac{1}{2} \sin 2x\right)\\
> &= \frac{1}{2} (1+x^2) \sin 2x - \frac{1}{2} \int \sin 2x \, d(1+x^2)\\
> &= \frac{1}{2} (1+x^2) \sin 2x + \frac{1}{2} x \cos 2x - \frac{1}{4} \sin 2x + C
> \end{align*}
> $$
> Q.E.D.

/example/ $\int \frac{\arctan x}{x} \, dx$ 

> /solution/
> $$
> \begin{align*}
> \text{H.L.S.} &= \arctan x \cdot \ln x - \int \frac{\ln x}{1+x^2} \, dx\\
> &= x \arctan x - \frac{1}{2} \ln (1+x^2)
> \end{align*}
> $$

/example/
$$
\int \frac{\ln^2 x}{x} \, dx
= \int \ln^2 x \, d(\ln x)
= \frac{1}{3} \ln^3 x + C
$$
/example/  $\int x \ln x \, dx$ 

> /solution/
> $$
> \begin{align*}
> \text{H.L.S.}&= \int \ln x \, d\left(\frac{x^2}{2}\right)\\
> &= \frac{2}{3} x^{\frac{3}{2}} \ln x - \frac{2}{3} \int x^{\frac{3}{2}} \frac{1}{x} \, dx\\
> &= \frac{2}{3} x^{\frac{3}{2}} \ln x - \frac{4}{9} x^{\frac{3}{2}} + C
> \end{align*}
> $$

/example/  $\int \frac{\arctan x}{x^2(1+x^2)} \, dx$

> /solution/
> $$
> \begin{align*}
> \text{H.L.S.}
> &= \int \left(\frac{1}{x^2} - \frac{1}{1+x^2}\right) \arctan x \, dx\\
> &= -\frac{1}{2} (\arctan x)^2 + \int \frac{\arctan x}{1+x^2} \, d\left(-\frac{1}{x}\right)\\
> &= -\frac{1}{2} (\arctan x)^2 - \frac{1}{x} \arctan x + \int \frac{1}{x} \cdot \frac{1}{1+x^2} \, dx
> \end{align*}
> $$
>
> $$
> \int \frac{1}{x} \cdot \frac{1}{1+x^2} \, dx
> = \int \left(\frac{1}{x} - \frac{x}{1+x^2}\right) \, dx
> = \ln |x| - \frac{1}{2} \ln (1+x^2) + C
> $$
>
> 原式 =  $-\frac{1}{2} (\arctan x)^2 - \frac{1}{x} \arctan x + \ln |x| - \frac{1}{2} \ln (1+x^2) + C$ 
>
> Q.E.D.

### · 有理函数积分

$$
\int \frac{P(x)}{Q(x)}\,dx
$$

这一类积分的积分方法是将被积函数写成最简单的有理式的代数和

而笔者也要很恶趣味的在此给出**代数学基本定理**：

> /Theorem/
>
> 任何复系数一元 $n$ 次多项式（ $n$ 至少为 1）方程在复数域上至少有一根。
>
> 由此推出，$n$ 次复系数多项式方程在复数域内有且只有 $n$ 个根，重根按重数计算。
>
> 有时这个定理也表述为：
>
> 任何一个非零的一元 $n$ 次复系数多项式，都正好有 $n$ 个复数根。
>
> 代数基本定理的证明，一般会用到复变函数或者近世代数，因此往往作为一个熟知结论直接应用。
>
> 根据代数基本定理，一个复系数多项式 $f(x) = a_n x^n + a_{n-1} x^{n-1} + \ldots + a_0$ 一定可以唯一地分解为：
>
>
> $$
> f(x) = a_n (x - x_1)^{k_1} (x - x_2)^{k_2} \ldots (x - x_t)^{k_t} 
> $$
>
>
> 其中各个根均为复数，$k_1 + k_2 + \ldots + k_t = n$。

而我们主要需要解决的是两类最简分式的处理：
$$
\int \frac{A}{(x-a)^n} dx\quad \quad \int \frac{Bx + C}{(x^2 + px + q)^n} dx
$$
**第一类最简分式**（左侧）：

> 当 $n = 1$ 时，
>
> $$
> \begin{aligned}
> \int \frac{A}{x-a} dx &= A \int \frac{1}{x-a} d(x-a) \\
> &= A \ln |x-a| + C
> \end{aligned}
> $$
>
> 当 $n > 1$ 时，
>
> $$
> \begin{aligned}
> \int \frac{A}{(x-a)^n} dx &= A \int (x-a)^{-n} d(x-a) \\
> &= A \left( \frac{1}{-n+1} (x-a)^{-n+1} \right) + C
> \end{aligned}
> $$

**第二类最简分式**（右侧）：

引例：求 $I_n = \int \frac{1}{(x^2 + a^2)^n} dx$ （$n \in \mathbb{N}$，$a \neq 0$）

> 
>
> $$
> I_n = \frac{1}{a^2} \int \frac{a^2 + x^2 - x^2}{(x^2 + a^2)^n} dx
> $$
> 当 $n > 1$ 时，
>
> $$
> = \frac{1}{a^2} I_{n-1} - \frac{1}{a^2} \int x \cdot \frac{x}{(x^2 + a^2)^n} dx
> $$
>
> 不妨假设
> $$
> V' = \frac{x}{(x^2 + a^2)^n}
> $$
>
> $$
> V = \int \frac{x}{(x^2 + a^2)^n} dx = \frac{1}{2} \int (x^2 + a^2)^{-n} d(x^2 + a^2)= \frac{1}{2(-n+1)} (x^2 + a^2)^{-n+1}
> $$
>
> $$
> \begin{align*}
> I_n &= \frac{1}{a^2} I_{n-1} + \frac{1}{2 a^2 (n-1)} \int x \cdot d(x^2 + a^2)^{-n+1}\\
> &= \frac{1}{a^2} I_{n-1} + \frac{1}{2 a^2 (n-1)} \left[ x (x^2 + a^2)^{-n+1} - \int (x^2 + a^2)^{-n+1} dx \right]\\
> &= \frac{1}{a^2} I_{n-1} + \frac{1}{2 a^2 (n-1)} \left[ x (x^2 + a^2)^{-n+1} - I_{n-1} \right]
> \end{align*}
> $$
>
> 得到如下递推式：
> $$
> I_n = \frac{1}{a^2} \cdot \frac{2n-3}{2n-2} I_{n-1} + \frac{1}{2 a^2 (n-1)} \cdot x (x^2 + a^2)^{-n+1}
> $$
> 其中
> $$
> I_1 = \int \frac{1}{x^2 + a^2} dx
> = \frac{1}{a} \arctan \frac{x}{a} + C
> $$

引例结束，开始正是求解：

> $$
> \int \frac{Bx + C}{(x^2 + px + q)^n} dx = \int \frac{\frac{B}{2}(2x + p) + C - \frac{B}{2}p}{(x^2 + px + q)^n} dx
> $$
>
> $$
> = \frac{B}{2} \int \frac{d(x^2 + px + q)}{(x^2 + px + q)^n} + (C - \frac{B}{2}p) \int \frac{dx}{(x^2 + px + q)^n}
> $$
>
> $$
> = \frac{B}{2} \frac{(x^2 + px + q)^{-n+1}}{-n+1} + (C - \frac{B}{2}p) \int \frac{dx}{(x^2 + px + q)^n}
> $$
>
> 剩下的部分做分母配方，得到
>
> $$
> \int \frac{dx}{(x^2 + px + q)^n} = \int \frac{d(x + \frac{p}{2})}{((x + \frac{p}{2})^2 + a^2)^n} = \int \frac{du}{(u^2 + a^2)^n}=I_n
> $$
>
> 根据引例，易知递推关系为：
> $$
> I_{n+1} \cdot 2na^2 = (2n-1)I_n + \frac{u}{(u^2 + a^2)^n}
> $$

### · 三角函数积分

实际上我们在去掉根号的过程中会大量遇到三角函数，考虑这样形式的积分：

$$
\int R(\cos x, \sin x) dx
$$

其中 $R(a, b)$ 是一个二元函数。用所谓的万能代换，即 $\tan \frac{x}{2} = t$。

具体来说，回忆三角函数的一些计算，知道

$$
\cos^2 \frac{x}{2} = \frac{1}{1 + t^2}, \quad \cos x = 2 \cos^2 \frac{x}{2} - 1 = \frac{1 - t^2}{1 + t^2}
$$

$$
\sin x = 2 \sin \frac{x}{2} \cos \frac{x}{2} = \frac{2t}{1 + t^2}
$$

所以代换为

$$
\int R\left( \frac{1 - t^2}{1 + t^2}, \frac{2t}{1 + t^2} \right) \frac{2}{1 + t^2} dt
$$

变为 $t$ 的有理式的积分。

## Fragment 2 定积分

我决定从这里开始改变一下笔记的结构，这个模块不应该有那么多的习题性质的东西

### · Riemann 积分

Archimedes，想要求一个不规则图形的面积. 当时他计算的是抛物线 $y=x^2$ 下方、 $x=a$ 左侧的面积. 他想到的办法是竖直剖分这个图形，每一个细长条近似为一个矩形，那么这个图形的不规则性就得到了缓解.

Archimedes 求一个曲线下的面积，要剖分区间 $I = [a, b]$，小区间 $I_i = [x_{i-1}, x_i]$，其长度记为 $|I_i| = x_i - x_{i-1} = \Delta x_i$。

则 $\text{area}(D_i) \approx f(\xi_i) |I_i| = f(\xi_i) \Delta x_i$. 则总面积是所谓的 Riemann 和，

$$
\text{area}(D) \approx \sum_{i=1}^{n} f(\xi_i) \Delta x_i
$$

Archimedes 相信，当剖分越来越细时，上述 Riemann 和趋于真正的面积。

> /Definition/
>
> 设函数$f(x)$在区间$[a, b]$上有定义，用分点
>
>
> $$
> a = x_0 < x_1 < x_2 < \cdots < x_n = b 
> $$
>
>
> 将区间任意分成$n$个小区间，小区间的长度为
>
>
> $$
> \Delta x_i = x_i - x_{i-1}, \quad i = 1, 2, \cdots, n. 
> $$
>
>
> 记$\lambda = \max_{1 \leq i \leq n} \{ \Delta x_i \}$，在每个小区间上任取一点$\xi_i \in [x_{i-1}, x_i]$，作和式
>
>
> $$
> \sigma = \sum_{i=1}^{n} f(\xi_i) \Delta x_i. 
> $$
>
>
> 若当$\lambda \to 0$时，和式$\sigma$的极限存在（设为$I$），则称$f(x)$在$[a, b]$是可积的，极限值 $I$ 称为$f(x)$在 $[a, b]$ 的定积分 (Riemann积分) ，记作
>
>
> $$
> \int_{a}^{b} f(x) \, dx. 
> $$
>
>
> 概括起来，也就是
>
>
> $$
> I = \lim_{\lambda \to 0} \sum_{i=1}^{n} f(\xi_i) \Delta x_i = \int_{a}^{b} f(x) \, dx, 
> $$
>
>
> 这里的$a$ ，$b$分别称为定积分的下限和上限，$[a, b]$称为积分区间，$f(x)$称为被积函数

值得指出的是，这里的$\sigma$是由$[a, b]$的分法（$a = x_0 < x_1 < \cdots < x_n = b$）和$\xi_i$的取法决定的，通常称它为$f(x)$的一个黎曼和。

一般说来，它并不是$\lambda$的函数，也就是说，当$\lambda = \max_{1 \leq i \leq n} |\Delta x_i|$决定后，它并不唯一决定（对应于$[a, b]$的不同分法与$\xi_i$的不同取法，$\sigma$可以取不同的值）。

因此当$\lambda \to 0$时$\sigma$的极限为$I$，严格地说，只能用下面的$\varepsilon - \delta$语言给出：

> /Definition/
>
> 设$f(x)$在$[a, b]$有定义，$I$是常数。若对任意给定的$\varepsilon > 0$，存在$\delta > 0$，使得对于$[a, b]$的任意分法与$\xi_i$（$x_{i-1} \leq \xi_i \leq x_i$）的任意取法，只要$\lambda = \max_{1 \leq i \leq n} |\Delta x_i| < \delta$，就有
>
>
> $$
> | \sigma - I | = \left| \sum_{i=1}^{n} f(\xi_i) \Delta x_i - I \right| < \varepsilon,
> $$
>
>
> 则称$\sum_{i=1}^{n} f(\xi_i) \Delta x_i$的极限为$I$，即
>
>
> $$
> I = \lim_{\lambda \to 0} \sum_{i=1}^{n} f(\xi_i) \Delta x_i.
> $$

### · Darboux 中值定理

我们这里有必要提一下 Darboux 中值定理，一般来说，不定积分可以视作求原函数运算（导数逆运算）

那么如何确定一个函数 $f$ 有原函数或者可以积分？

> /Theorem/   (Darboux 中值定理)
>
> 如果函数 $f$ 在开区间 $I$ 上有定义并且可微，$[a, b] \subset I$，则 $f'(x)$ 在 $[a, b]$ 上取遍 $f'(a)$ 与 $f'(b)$ 之间的一切值。

由这个定理，我们就已经知道导子$D$ 不是满射，因为我们肯定可以在区间 $I$ 上构造一个取不到自己介值的函数，它一定不是某个函数的导函数.

如果要问什么样的函数有原函数，这是很难回答的，但是我们能讲出一个 partial answer，就是连续的函数一定有原函数，因为一个变上限的积分 $\int_a^xf(x)dx$ ，其导数就会是这个函数.

那我们可以试着回答第二个问题：如何判断 $f$ 可积？

/Claim/

> 可积必要条件：若函数 $f(x)$ 在 $[a, b]$ 上可积，则 $f(x)$ 在 $[a, b]$ 上必有界。

/proof/

> 反证，假设 $f(x)$ 无界。任取 $[a, b]$ 的一个分割 $\Delta$，对于任意给定的 $N > 0$：
>
> $f(x)$ 至少在一个子区间 $[x_{j-1}, x_j]$ 上无界。先在其他子区间 $[x_{i-1}, x_i] (i \neq j)$ 任意选定 $\xi_i$，然后在区间 $[x_{j-1}, x_j]$ 上适当选择 $\xi_j$，使得：
>
>
> $$
> |f(\xi_j) \Delta x_j| > N + \left| \sum_{i \neq j} f(\xi_i) \Delta x_i \right|
> $$
>
> 从而，对任意的分割 $\Delta$ 和任意的 $N > 0$，只有适当地选取 $\xi_i$，就有：
>
>
> $$
> \left| \sum_{i=1}^{n} f(\xi_i) \Delta x_i \right| \geq |f(\xi_j) \Delta x_j| - \left| \sum_{i \neq j} f(\xi_i) \Delta x_i \right| > N 
> $$
>
> 由 $N$ 的任意性知，当 $\lambda \to 0$ 时积分和不可能有极限，故 $f(x)$ 在 $[a, b]$ 上不可积，矛盾。

设 $f(x)$ 在 $[a, b]$ 上有界，对于 $[a, b]$ 的任意给定分割 $\Delta$：


$$
 a = x_0 < x_1 < x_2 < \cdots < x_n = b 
$$


不妨令：


$$
M_i = \sup_{x \in [x_{i-1}, x_i]} f(x) \quad \quad
 m_i = \inf_{x \in [x_{i-1}, x_i]} f(x)
$$


以下两个和式：


$$
S_\Delta = \sum_{i=1}^{n} M_i \Delta x_i \quad \quad
 s_\Delta = \sum_{i=1}^{n} m_i \Delta x_i
$$


分别称为 $f(x)$ 关于分割 $\Delta$ 的达布大和与达布小和。

> /Theorem/
>
> 若$f$ 在 $[a,b]$ 有界， $f$ 在 $[a, b]$ 上可积的充要条件是：对于任意的 $\varepsilon > 0$，存在 $\delta > 0$，当 $\lambda < \delta$ 时，总有 $S_\Delta - s_\Delta < \varepsilon$。

### · 积分性质

1. $$
   \int_{a}^{b} 1 \, dx = b - a
   $$

   

2. $$
   \int_{a}^{b} k f(x) \, dx = k \int_{a}^{b} f(x) \, dx \\
   \int_{a}^{b} [f(x) \pm g(x)] \, dx = \int_{a}^{b} f(x) \, dx \pm \int_{a}^{b} g(x) \, dx
   $$

   > /proof/
   > $$
   > \text{LHS}= \lim_{\lambda \to 0} \sum_{i=1}^{n} [f(\xi_i) \pm g(\xi_i)] \Delta x_i= \lim_{\lambda \to 0} \sum_{i=1}^{n} f(\xi_i) \Delta x_i \pm \lim_{\lambda \to 0} \sum_{i=1}^{n} g(\xi_i) \Delta x_i = \text{RHS}
   > $$

3. 若在 $[a, b]$ 上可积，且 $f(x) \geq 0$，则 $\int_{a}^{b} f(x) \, dx \geq 0$ 

   > /proof/
   > $$
   > \because \sum_{i=1}^{n} f(\xi_i) \Delta x_i \geq 0 \quad \therefore \int_{a}^{b} f(x) \, dx = \lim_{\lambda \to 0} \sum_{i=1}^{n} f(\xi_i) \Delta x_i \geq 0
   > $$

4. 若在 $[a, b]$ 上 $f(x) \leq g(x)$，则 $\int_{a}^{b} f(x) \, dx \leq \int_{a}^{b} g(x) \, dx$

5. 设 $M = \max_{[a, b]} f(x)$, $m = \min_{[a, b]} f(x)$，则

$$
m(b - a) \leq \int_{a}^{b} f(x) \, dx \leq M(b - a)
$$

6. $f(x)$ 在 $[a, b]$ 上可积，则 $ |f(x)| $ 在 $[a, b]$ 上可积，且
   $$
   \left| \int_{a}^{b} f(x) \, dx \right| \leq \int_{a}^{b} |f(x)| \, dx \quad (a < b)
   $$

   > /proof/
   > $$
   > \because -|f(x)| \leq f(x) \leq |f(x)|\\
   > \therefore -\int_{a}^{b} |f(x)| \, dx \leq \int_{a}^{b} f(x) \, dx \leq \int_{a}^{b} |f(x)| \, dx
   > $$
   > 能推出
   > $$
   > \left| \int_{a}^{b} f(x) \, dx \right| \leq \int_{a}^{b} |f(x)| \, dx
   > $$

7. 区间可加性

   $$
   \int_{a}^{b} f(x) \, dx = \int_{a}^{c} f(x) \, dx + \int_{c}^{b} f(x) \, dx
   $$

   > /proof/
   >
   > 当 $a < c < b$ 时，因 $f(x)$ 在 $[a, b]$ 上可积，
   >
   > 所以在分割区间时，可以永远取 $c$ 为分点，于是
   >
   > $$
   > \sum_{[a, b]} f(\xi_i) \Delta x_i = \sum_{[a, c]} f(\xi_i) \Delta x_i + \sum_{[c, b]} f(\xi_i) \Delta x_i
   > $$
   >
   > 令 $\lambda \to 0$
   >
   > $$
   > \int_{a}^{b} f(x) \, dx = \int_{a}^{c} f(x) \, dx + \int_{c}^{b} f(x) \, dx
   > $$
   > 当 $a, b, c$ 的相对位置任意时，例如 $a < b < c$,
   >
   > 则有 $\int_{a}^{c} f(x) \, dx = \int_{a}^{b} f(x) \, dx + \int_{b}^{c} f(x) \, dx$
   >
   > $$
   > \therefore \quad \int_{a}^{b} f(x) \, dx = \int_{a}^{c} f(x) \, dx - \int_{b}^{c} f(x) \, dx
   > $$
   >
   > $$
   > = \int_{a}^{c} f(x) \, dx + \int_{c}^{b} f(x) \, dx
   > $$

8. $f(x)$ 和 $g(x)$ 在 $[a, b]$ 上可积，则 $f(x)g(x)$ 在 $[a, b]$ 上也可积。

9. 积分中值定理 若 $f(x) \in C[a, b]$，则至少存在一点 $\xi \in [a, b]$，使得
   $$
   \int_{a}^{b} f(x) \, dx = f(\xi)(b - a)
   $$

   > /proof/
   >
   > 设 $f(x)$ 在 $[a, b]$ 上的最小值与最大值分别为 $m, M$，则由性质5可得
   >
   > $$
   > m \leq \frac{1}{b - a} \int_{a}^{b} f(x) \, dx \leq M
   > $$
   >
   > 根据闭区间上连续函数介值定理，在 $[a, b]$ 上至少存在一点 $\xi \in [a, b]$，使
   >
   > $$
   > f(\xi) = \frac{1}{b - a} \int_{a}^{b} f(x) \, dx
   > $$
   >
   > 因此定理成立。

   积分中值定理对 $a < b$ 或 $a > b$ 都成立。
   可把 $\frac{\int_{a}^{b} f(x) \, dx}{b - a} = f(\xi)$ 理解为 $f(x)$ 在 $[a, b]$ 上的平均值。

   $$
   \frac{\int_{a}^{b} f(x) \, dx}{b - a} = \frac{1}{b - a} \lim_{n \to \infty} \sum_{i=1}^{n} f(\xi_i) \cdot \frac{b - a}{n} = \lim_{n \to \infty} \frac{1}{n} \sum_{i=1}^{n} f(\xi_i)
   $$

   故它是有限个数的平均值概念的推广.

### · 微积分基本定理

现在你可能会发现一点，你还是不会求定积分。我们只会求不定积分，那不定积分和定积分的关系是什么？

重点在于微积分基本定理：变限积分求导定理和 Newton-Leibnitz 定理

/Theorem/

> 若 $f(x)$ 在 $[a, b]$ 连续，则函数 $G(x) = \int_{a}^{x} f(t) \, dt$ 在 $[a, b]$ 可导，且
>
>
> $$
> G'(x) = f(x), \quad \forall x \in [a, b].
> $$

/proof/

> 显然
>
>
> $$
> G(x + \Delta x) = \int_{a}^{x + \Delta x} f(t) \, dt, 
> $$
>
>
> 因此
>
> $$
> \frac{G(x + \Delta x) - G(x)}{\Delta x} = \frac{1}{\Delta x} \left[ \int_{a}^{x + \Delta x} f(t) \, dt - \int_{a}^{x} f(t) \, dt \right]
> $$
>
> $$
> = \frac{1}{\Delta x} \int_{x}^{x + \Delta x} f(t) \, dt,
> $$
>
> 由积分中值定理知道，在 $x$ 与 $x + \Delta x$ 之间必存在一点 $\xi$，使得
>
>
> $$
> \int_{x}^{x + \Delta x} f(t) \, dt = f(\xi) \Delta x, 
> $$
>
>
> 于是
>
>
> $$
> \frac{G(x + \Delta x) - G(x)}{\Delta x} = f(\xi), 
> $$
>
>
> 令 $\Delta x \to 0$，则 $x + \Delta x \to x$，从而 $\xi \to x$，由 $f(x)$ 连续性便有
>
>
> $$
> \lim_{\Delta x \to 0} \frac{G(x + \Delta x) - G(x)}{\Delta x} = \lim_{\Delta x \to 0} f(\xi) = f(x).
> $$

此时我们证明了在 "Darboux 中值定理" 处叙述的结论： **连续函数的变上限积分是其原函数，连续函数皆有原函数**

如果上下限均变化，如何求导？

> /Claim/
>
> 设 $f$ 连续，$\alpha(x)$、$\beta(x)$ 可导，则
>
>
> $$
> \frac{d}{dx} \int_{\alpha(x)}^{\beta(x)} f(t) \, dt = f(\beta(x)) \beta'(x) - f(\alpha(x)) \alpha'(x)
> $$

第二部分的Newton-Leibnitz法则有两种形式：

> /Theorem/
>
> 设 $f(x)$ 在 $[a, b]$ 上连续，$F(x)$ 是 $f(x)$ 在 $[a, b]$ 的任意一个原函数，即 $F'(x) = f(x)$，则
>
> $$
> \int_{a}^{b} f(x) \, dx = F(b) - F(a).
> $$
> 若 $f(x)$ 在 $[a, b]$ 可积，$F(x)$ 是 $f(x)$ 在 $[a, b]$ 的任意一个原函数，即 $F'(x) = f(x)$，则
>
> $$
> \int_{a}^{b} f(x) \, dx = F(b) - F(a).
> $$

接下来分别给出两个定理的证明，其中定理第二种表述的条件更弱一些

> /proof/
>
> 已知 $G(x) = \int_{a}^{x} f(t) \, dt$ 是 $f(x)$ 的一个原函数。由于同一函数的两个原函数只能差一个常数，因此
>
> $$
> G(x) = F(x) + c,
> $$
>
> 也可写成
>
> $$
> \int_{a}^{x} f(t) \, dt = F(x) + c,
> $$
>
> 其中 $c$ 是一个常数。在等式两边令 $x = a$，由于 $G(a) = \int_{a}^{a} f(t) \, dt = 0$，便知
>
> $$
> F(a) + c = 0,
> $$
>
> 代回去便得
>
> $$
> \int_{a}^{x} f(t) \, dt = F(x) - F(a).
> $$
>
> 取 $x = b$，便得
>
> $$
> \int_{a}^{b} f(t) \, dt = F(b) - F(a).
> $$
>
> ***
>
> 给 $[a, b]$ 任意分法：
>
> $$
> a = x_0 < x_1 < x_2 < \cdots < x_n = b,
> $$
>
> 则由微分中值定理知在 $(x_{i-1}, x_i)$ 中，存在 $\xi_i$，使得
>
> $$
> \begin{aligned}
> F(b) - F(a) &= F(x_n) - F(x_0) \\
> &= \sum_{i=1}^{n} (F(x_i) - F(x_{i-1})) \\
> &= \sum_{i=1}^{n} F'(\xi_i) \Delta x_i \\
> &= \sum_{i=1}^{n} f(\xi_i) \Delta x_i,
> \end{aligned}
> $$
>
> 令 $\lambda = \max_{1 \leq i \leq n} |\Delta x_i| \to 0$，由 $f(x)$ 在 $[a, b]$ 可积知道，右边的极限存在，且等于 $f(x)$ 在 $[a, b]$ 的定积分，故
>
> $$
> F(b) - F(a) = \lim_{\lambda \to 0} \sum_{i=1}^{n} f(\xi_i) \Delta x_i = \int_{a}^{b} f(x) \, dx.
> $$

### · 定积分计算

定积分的计算也能使用换元和分部积分

> /Theorem/
>
> **换元公式**： $f \in C[a, b]$，$x = \varphi(t)$ 且满足 ① $a = \varphi(\alpha)$，$b = \varphi(\beta)$ ② $[α, β]$ 或 $[\beta, \alpha] \rightarrow [a, b]$ 有连续导数，则  
> $$
> \int_{a}^{b} f(x) dx = \int_{\alpha}^{\beta} f(\varphi(t)) \varphi'(t) dt.
> $$
> **分部积分**： $u, v \in C^1[a, b]$ 则  
> $$
> \int_{a}^{b} u dv = uv \bigg|_{a}^{b} - \int_{a}^{b} v du.
> $$

实际上只需要简化后使用适当的方式找到不定积分的算法，然后运用微积分基本定理即可。

这里必须提到知名的 **Wallis 公式**：

> /Theorem/
> $$
> \int_{0}^{\frac{\pi}{2}} \cos^n x \, dx = \int_{0}^{\frac{\pi}{2}} \sin^n x \, dx
> \left\{
> \begin{matrix}
> \frac{(n-1)!!}{(n)!} \cdot \frac{\pi}{2}, & \text{n=2k} \\
> \frac{(n-1)!!}{(n)!}, & \text{n=2k+1}
> \end{matrix}
> \right.
> $$

定积分部分的主干内容到此告一段落。