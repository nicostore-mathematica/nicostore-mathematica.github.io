---
title: Chapter 8 不定积分
permalink: /integral/integral-8/
createTime: 2025/09/16 20:57:28
---

## Part 1 连续函数积分

### · 定义

许多实际的应用问题都涉及到积分, 积分的内容占据了本课程的半壁江山.

设 $f$ 为闭区间 $[a, b]$ 上的连续函数，我们考虑由 $f$ 的图像、直线 $x = a$、$x = b$ 以及 $y = 0$（$x$ 轴）在平面上所围成的曲边梯形的面积，我们用记号 $\int_a^b f(x)\,dx$ 表示这个面积的值，称为 $f$ 在 $[a, b]$ 上的积分. 

> (1) 设 $f(x) \equiv c$ 为常值函数，则所求面积是矩形的面积，因此自然地定义
> $$
> \int_a^b f(x)\,dx = c(b - a).
> $$
>
> (2) 设 $f(x)$ 为 $[a, b]$ 上的线性函数，则所求面积是一个梯形的面积，因此定义
> $$
> \int_a^b f(x)\,dx = \frac{1}{2}[f(a) + f(b)](b - a).
> $$
>
> 当 $f$ 为常值函数时，这个定义和 (1) 是一致的. 并且，从定义可得
>
> - 如果 $f$, $g$ 均为线性函数，则
> $$
> \int_a^b [f(x) + g(x)]\,dx = \int_a^b f(x)\,dx + \int_a^b g(x)\,dx,
> $$
> $$
> \int_a^b [f(x) - g(x)]\,dx = \int_a^b f(x)\,dx - \int_a^b g(x)\,dx,
> $$
> 这可从定义直接得到. 
>
> - 如果 $f$ 为线性函数，且存在常数 $M$，使得 $|f(x)| \le M$，$\forall x \in [a, b]$，则
> $$
> \left|\int_a^b f(x)\,dx\right| \le M(b - a).
> $$
> 事实上，由定义，有
> $$
> \left|\int_a^b f(x)\,dx\right| = \left|\frac{1}{2}[f(a) + f(b)](b - a)\right| \le \frac{1}{2}[|f(a)| + |f(b)|](b - a) \le M(b - a).
> $$
>
> - 如果 $f$ 为线性函数，$c \in (a, b)$，则
> $$
> \int_a^b f(x)\,dx = \int_a^c f(x)\,dx + \int_c^b f(x)\,dx.
> $$
> 这是因为，$[a, b]$ 上的线性函数 $f(x)$ 可以写为
> $$
> f(x) = f(a) + \frac{f(b) - f(a)}{b - a}(x - a)\quad\text{or}\quad f(x) = f(b) + \frac{f(b) - f(a)}{b - a}(x - b),
> $$
> 因此有
> $$
> \int_a^c f(x)\,dx + \int_c^b f(x)\,dx = \frac{1}{2}[f(a) + f(c)](c - a) + \frac{1}{2}[f(c) + f(b)](b - c)
> $$
> $$
> = \frac{1}{2}[f(a) + f(b) + \frac{f(b) - f(a)}{b - a}(c - b)](c - a)
> + \frac{1}{2}[f(a) + f(b) + \frac{f(b) - f(a)}{b - a}(c - a)](b - c)
> $$
> $$
> = \frac{1}{2}[f(a) + f(b)](c - a) + \frac{1}{2}[f(a) + f(b)](b - c)
> $$
> $$
> = \frac{1}{2}[f(a) + f(b)](b - a)
> = \int_a^b f(x)\,dx.
> $$
>
> (3) 设 $f(x)$ 为 $[a, b]$ 上连续的分段线性函数，即存在区间 $[a, b]$ 中的分点
> $$
> a = x_0 < x_1 < \cdots < x_n = b
> $$
> 使得 $f(x)$ 在每一个小区间 $[x_{i-1}, x_i]$ 上均为线性函数，则定义
> $$
> \int_a^b f(x)\,dx = \sum_{i=1}^n \int_{x_{i-1}}^{x_i} f(x)\,dx,
> $$
> 这个定义是恰当的：如果存在 $[a, b]$ 的另外一些分点
> $$
> a = x'_0 < x'_1 < \cdots < x'_m = b
> $$
> 使得 $f(x)$ 在每一个小区间 $[x'_{i-1}, x'_i]$ 上均为线性函数，则所有这些分点 $\{x_i, x'_i\}$ 按从小到大的顺序排列后依然将 $[a, b]$ 分割为一些小区间，在每个小区间上 $f$ 仍为线性函数，且根据 (2) 中线性函数积分性质的第三条可知，$f$ 在这些新的小区间上的积分之和与分点 $\{x_i\}$ 或 $\{x'_i\}$ 分割后形成的小区间上 $f$ 的积分之和是一致的. 
>
> 以上说明了分段线性函数的积分与区间中分点的选取无关. 利用这一点不难看出，(2) 中线性函数积分的三条性质对于分段线性函数也完全成立. 
>
> (4) 现在假设 $f$ 是 $[a, b]$ 上的连续函数，不一定是分段线性的，我们要定义 $f$ 在 $[a, b]$ 上的积分. 一个自然的想法是用分段线性的函数去逼近 $f$. 事实上，任给正整数 $n$，将 $[a, b]$ 作 $n$ 等分，分点为 $x_i = a + \frac{i}{n}(b - a)$，$i = 0, 1, \cdots, n$. 在每一个小区间 $[x_{i-1}, x_i]$ 上定义 $l_i(x)$ 为满足条件 $l_i(x_{i-1}) = f(x_{i-1})$，$l_i(x_i) = f(x_i)$ 的线性函数，$l_i(x)$ 的表达式为
> $$
> l_i(x) = f(x_{i-1}) + \frac{f(x_i) - f(x_{i-1})}{x_i - x_{i-1}}(x - x_{i-1}).
> $$
> 在 $[a, b]$ 上定义连续分段线性函数 $f_n(x)$ 为
> $$
> f_n(x) = l_i(x),\quad x \in [x_{i-1}, x_i],\quad i = 1, \cdots, n.
> $$

**命题1.** 设 $f$, $f_n$ 如上，则任给 $\varepsilon > 0$，存在 $N = N(\varepsilon)$，当 $n > N$ 时
$$
|f(x) - f_n(x)| < \varepsilon,\quad \forall x \in [a, b].
$$

> 这需要用到闭区间上连续函数的一致连续性. 任给 $\varepsilon > 0$，存在 $\delta > 0$，使得
> $$
> |f(x') - f(x'')| \le \varepsilon,\quad \forall |x' - x''| < \delta.
> $$
> 取正整数 $N > (b - a)/\delta$，则当 $n > N$ 时 $\frac{1}{n}(b - a) < \delta$. 此时，设 $x \in [x_{i-1}, x_i]$ ($1 \le i \le n$)，则有
> $$
> |f(x) - f_n(x)| = |f(x) - l_i(x)|
> = \left|f(x) - f(x_{i-1}) - \frac{f(x_i) - f(x_{i-1})}{x_i - x_{i-1}}(x - x_{i-1})\right|
> $$
> $$
> = \left|(f(x) - f(x_{i-1}))\frac{x_i - x}{x_i - x_{i-1}} + (f(x) - f(x_i))\frac{x - x_{i-1}}{x_i - x_{i-1}}\right|
> \le \varepsilon \frac{x_i - x}{x_i - x_{i-1}} + \varepsilon \frac{x - x_{i-1}}{x_i - x_{i-1}}
> = \varepsilon.
> $$
> 这就证明了命题

利用这个命题，当 $m, n > N$ 时，就有
$$
|f_m(x) - f_n(x)| \le |f_m(x) - f(x)| + |f(x) - f_n(x)| \le 2\varepsilon,
$$
因为 $f_m(x) - f_n(x)$ 也是分段线性函数，故有
$$
\left|\int_a^b f_m(x)\,dx - \int_a^b f_n(x)\,dx\right| = \left|\int_a^b (f_m(x) - f_n(x))\,dx\right| \le 2\varepsilon(b - a),
$$
这说明，数列 $\left\{\int_a^b f_n(x)\,dx\right\}$ 是 Cauchy 列，因此其极限存在，我们现在就定义
$$
\int_a^b f(x)\,dx = \lim_{n \to \infty} \int_a^b f_n(x)\,dx.
$$

如果 $f(x)$ 本来就是 $[a, b]$ 上的连续分段线性函数，则这个定义与 (3) 中的积分定义是一致的，我们把这个一致性证明留给读者思考. 根据分段线性函数积分的定义，$f$ 的积分可以表示为
$$
\int_a^b f(x)\,dx = \lim_{n \to \infty} \sum_{i=1}^n \frac{1}{2}[f(a + \frac{i-1}{n}(b - a)) + f(a + \frac{i}{n}(b - a))]\frac{1}{n}(b - a)
$$
$$
= \lim_{n \to \infty} \frac{1}{n} \sum_{i=1}^n f(a + \frac{i}{n}(b - a))(b - a),
$$

**注意.** 和式 $\frac{1}{n} \sum_{i=1}^n f(a + \frac{i}{n}(b - a))$ 是一个平均数，其极限可以认为是 $f(x)$ 在区间 $[a, b]$ 上的平均值. 在这个意义上，$f(x)$ 在 $[a, b]$ 上的积分就等于 $f(x)$ 的平均值乘以区间长度，这是连续函数积分的几何含义.

下面我们按照积分的定义计算. 

/example/ 求函数 $f(x) = a^x$ 在区间 $[0, 1]$ 上的积分，其中 $a > 0$, $a \ne 1$.

> 将 $[0, 1]$ 作 $n$ 等分，利用定义得
> $$
> \int_0^1 a^x\,dx = \lim_{n \to \infty} \frac{1}{n} \sum_{i=1}^n a^{\frac{i}{n}}
> = \lim_{n \to \infty} \frac{1}{n} \cdot \frac{a - 1}{a^{\frac{1}{n}} - 1}
> = \lim_{t \to 0^+} (a - 1) \frac{t a^t}{a^t - 1}
> = \frac{a - 1}{\ln a}.
> $$

利用连续函数的一致连续性，我们可以改写定义式. 事实上，沿用前面的记号如 $\varepsilon$, $N$ 等，当 $n > N$ 时，在等分小区间 $[x_{i-1}, x_i]$ 中任取一点 $\xi_i$，则有
$$
|f(x_i) - f(\xi_i)| \le \varepsilon,\quad i = 1, 2, \cdots, n.
$$
因此
$$
\left|\frac{1}{n} \sum_{i=1}^n f(x_i)(b - a) - \frac{1}{n} \sum_{i=1}^n f(\xi_i)(b - a)\right| \le \frac{1}{n} \sum_{i=1}^n |f(x_i) - f(\xi_i)|(b - a) \le \varepsilon(b - a),
$$
这说明
$$
\int_a^b f(x)\,dx = \lim_{n \to \infty} \frac{1}{n} \sum_{i=1}^n f(\xi_i)(b - a),\quad \forall\ \xi_i \in [a + \frac{i-1}{n}(b - a),\ a + \frac{i}{n}(b - a)].
$$
这个极限等式也可以作为积分的定义，它的好处是无须总在小区间的端点取 $f(x)$ 的值，而极限仍然不变.

### · 积分性质

前一小节定义了连续函数 $f$ 在闭区间 $[a, b]$ 上的积分，现在我们做如下约定：
$$
\int_a^a f(x)\,dx = 0;\quad \int_b^a f(x)\,dx = -\int_a^b f(x)\,dx.
$$

从积分定义的讨论，我们可以得到积分的如下简单性质：

线性性： 

> 如果 $f, g$ 为 $[a, b]$ 上的连续函数，$\alpha, \beta \in \mathbb{R}$，则
> $$
> \int_a^b (\alpha f(x) + \beta g(x))\,dx = \alpha \int_a^b f(x)\,dx + \beta \int_a^b g(x)\,dx;
> $$
>
> 如果 $|f(x)| \le M$，$\forall x \in [a, b]$，则
> $$
> \left|\int_a^b f(x)\,dx\right| \le M(b - a);
> $$
>
> 

保序性： 

> 如果 $f \ge g$ 为 $[a, b]$ 上的连续函数，则
> $$
> \int_a^b f(x)\,dx \ge \int_a^b g(x)\,dx;
> $$
> 特别地，由 $-|f| \le f \le |f|$ 可得
> $$
> \left|\int_a^b f(x)\,dx\right| \le \int_a^b |f(x)|\,dx;
> $$
>

关于区间的可加性： 

> 设 $f$ 为连续函数，$a, b, c$ 为定义域中三点，则
> $$
> \int_a^c f(x)\,dx = \int_a^b f(x)\,dx + \int_b^c f(x)\,dx;
> $$
> 事实上，不妨设 $a < b < c$。任给 $\varepsilon > 0$，分别在区间 $[a, b]$、$[b, c]$ 上取连续的分段线性函数 $\varphi$ 和 $\psi$，使得 $\varphi(b) = \psi(b)$，且
> $$
> |f(x) - \varphi(x)| \le \varepsilon,\quad \forall x \in [a, b];\quad |f(x) - \psi(x)| \le \varepsilon,\quad \forall x \in [b, c].
> $$
> 在 $[a, c]$ 上定义分段线性函数 $g(x)$，使得在 $[a, b]$ 上 $g = \varphi$，在 $[b, c]$ 上 $g = \psi$，于是
> $$
> |f(x) - g(x)| \le \varepsilon,\quad \forall x \in [a, c].
> $$
> 根据积分的保序性以及分段线性函数的积分关于区间的可加性，得
> $$
> \left|\int_a^c f(x)\,dx - \int_a^b f(x)\,dx - \int_b^c f(x)\,dx\right|
> \le \left|\int_a^c g(x)\,dx - \int_a^b f(x)\,dx - \int_b^c f(x)\,dx\right| + \varepsilon(c - a)
> $$
>
> $$
> = \left|\int_a^b [g(x) - f(x)]\,dx + \int_b^c [g(x) - f(x)]\,dx\right| + \varepsilon(c - a)
> \le \varepsilon(b - a) + \varepsilon(c - b) + \varepsilon(c - a) = 2\varepsilon(c - a),
> $$
>
> 由于 $\varepsilon$ 是任取的，故积分关于区间的可加性成立

如果 $f(x)$ 为 $[a, b]$ 上的非负连续函数，则
$$
\int_a^b f(x)\,dx \ge 0,
$$
且等号成立当且仅当 $f = 0$。这条性质的前半部分从积分的保序性得到。至于后半部分，如果 $f(x_0) > 0$，则由 $f$ 的连续性可知，存在区间 $[c, d] \subset [a, b]$，使得
$$
f(x) \ge \frac{1}{2}f(x_0),\quad \forall x \in [c, d].
$$
此时由积分关于区间的可加性以及保序性可得
$$
\int_a^b f(x)\,dx = \int_a^c f(x)\,dx + \int_c^d f(x)\,dx + \int_d^b f(x)\,dx
\ge \int_c^d f(x)\,dx \ge \frac{f(x_0)}{2}(d - c) > 0,
$$
即此时 $f(x)$ 在 $[a, b]$ 上的积分为正

在定义积分时，我们使用的是将区间作等分然后求极限的方法。我们要说明的是，作区间划分时不必取等分分点。事实上，在 $[a, b]$ 中任取分点 $a = x_0 < x_1 < \cdots < x_n = b$，称
$$
\pi: a = x_0 < x_1 < \cdots < x_n = b
$$
为 $[a, b]$ 的一个分划（或分割）。记 $\|\pi\| = \max\limits_{1 \le i \le n} |x_i - x_{i-1}|$。任给 $\varepsilon > 0$，由连续函数的一致连续性，存在 $\delta > 0$，当 $\|\pi\| < \delta$ 时
$$
|f(x) - f(x_i)| < \varepsilon,\quad \forall x \in [x_{i-1}, x_i],\quad i = 1, 2, \cdots, n.
$$
由
$$
\int_a^b f(x)\,dx = \sum_{i=1}^n \int_{x_{i-1}}^{x_i} f(x)\,dx
= \sum_{i=1}^n f(x_{i-1})(x_i - x_{i-1}) + \sum_{i=1}^n \int_{x_{i-1}}^{x_i} (f(x) - f(x_{i-1}))\,dx
$$
得
$$
\left|\int_a^b f(x)\,dx - \sum_{i=1}^n f(x_{i-1})(x_i - x_{i-1})\right|
\le \sum_{i=1}^n \varepsilon(x_i - x_{i-1}) = \varepsilon(b - a),
$$
这说明
$$
\int_a^b f(x)\,dx = \lim_{\|\pi\| \to 0} \sum_{i=1}^n f(x_{i-1})(x_i - x_{i-1}),
$$
同理，如果任取 $\xi_i \in [x_{i-1}, x_i]$，则仍有
$$
\int_a^b f(x)\,dx = \lim_{\|\pi\| \to 0} \sum_{i=1}^n f(\xi_i)(x_i - x_{i-1}),\quad \forall\ \xi_i \in [x_{i-1}, x_i].
$$
**命题2** (积分中值定理). 设 $f, g$ 为 $[a, b]$ 上的连续函数。如果 $g$ 不变号，则存在 $\xi \in [a, b]$，使得
$$
\int_a^b f(x)g(x)\,dx = f(\xi) \int_a^b g(x)\,dx.
$$

> 不妨设 $g \ge 0$。$f$ 在 $[a, b]$ 上的最小值和最大值分别记为 $m, M$，则
> $$
> mg(x) \le f(x)g(x) \le Mg(x),\quad \forall x \in [a, b].
> $$
> 根据积分的保序性和线性性，有
> $$
> m \int_a^b g(x)\,dx \le \int_a^b f(x)g(x)\,dx \le M \int_a^b g(x)\,dx.
> $$
> 如果 $\int_a^b g(x)\,dx = 0$，则任取 $\xi \in [a, b]$ 即可。如果 $\int_a^b g(x)\,dx > 0$，则
> $$
> m \le \frac{\int_a^b f(x)g(x)\,dx}{\int_a^b g(x)\,dx} \le M,
> $$
> 由连续函数的介值定理知存在 $\xi \in [a, b]$，使得
> $$
> f(\xi) = \frac{\int_a^b f(x)g(x)\,dx}{\int_a^b g(x)\,dx},
> $$
> 此 $\xi$ 即为所求的点

在此命题中取 $g = 1$，则得到简单推论：存在 $\xi \in [a, b]$，使得
$$
f(\xi) = \frac{\int_a^b f(x)\,dx}{b - a},\quad \text{or}\quad \int_a^b f(x)\,dx = f(\xi)(b - a).
$$
这里 $f(\xi)$ 也就是 $f(x)$ 在 $[a, b]$ 上的平均值

## Part 2 不定积分

### · 定义

现在我们考虑这样的问题，即一个给定的函数是另一个可导函数的导数吗？如果函数 $f$ 给定，问题就是考虑方程  
$$
F'(x) = f(x)
$$
的解. 我们要问，方程的解存在吗？如果存在的话，有多少个解？如果 $F$ 是一个解，则显然 $F + C$ ($C$ 为常数) 也是一个解，我们来说明这也是所有可能的其它解. 

**命题1**. 设 $f$ 为区间上的可微函数，则 $f' = 0$ 当且仅当 $f = C$ 为常值函数.

> 只要证明必要性即可. 设 $f' = 0$，在定义域中任取两点 $a < b$，我们证明必有 $f(a) = f(b)$. 设 $\varepsilon > 0$ 是任意取定的正数. 考虑集合  
> $$
> A = \{y \in [a,b] \mid |f(x) - f(a)| \le \varepsilon|x - a|,\ \forall\ x \in [a,y]\} \subset [a,b].
> $$
> 因为 $a \in A$，因此 $A$ 不是空集. 设 $y_0$ 为 $A$ 的上确界. 由 $f$ 的连续性知 $y_0 \in A$. 我们断言 $y_0 = b$. 事实上，如果 $y_0 < b$，则因为 $f'(y_0) = 0$，由导数的定义知存在 $\delta > 0$，使得 $y_0 + \delta \le b$，且  
> $$
> \left|\frac{f(x) - f(y_0)}{x - y_0}\right| = \left|\frac{f(x) - f(y_0)}{x - y_0} - f'(y_0)\right| \le \varepsilon,\quad \forall\ x \in (y_0, y_0 + \delta].
> $$
> 因此，当 $x \in [y_0, y_0 + \delta]$ 时  
> $$
> \begin{aligned}
> |f(x) - f(a)| &\le |f(x) - f(y_0)| + |f(y_0) - f(a)| \\
> &\le \varepsilon|x - y_0| + \varepsilon|y_0 - a| = \varepsilon|x - a|.
> \end{aligned}
> $$
> 这说明 $[y_0, y_0 + \delta] \subset A$，这和 $y_0$ 的选取相矛盾，因此只能有 $y_0 = b$. 即  
> $$
> |f(a) - f(b)| \le \varepsilon|a - b|.
> $$
> 因为 $\varepsilon$ 是任取的，令 $\varepsilon \to 0$，上式表明 $f(a) = f(b)$.
>
> > (1) 如果将导数解释为速度，则命题说的就是速度为零时，质点位移不变. 从直观看这是显然的，但从数学上来讲就必须严格证明. 
> >
> > (2) 如果存在常数 $M$ 使得 $|f'| \le M$，则把命题证明过程中的 $\varepsilon$ 换成 $M + \varepsilon$ 后可以得出下面的估计  
> > $$
> > |f(a) - f(b)| \le M|a - b|,
> > $$
> > 即 $f$ 为 Lipschitz 函数. 
> >
> > 现在，如果 $F_1$, $F_2$ 都是方程的解，则 $(F_1 - F_2)' = 0$，从而 $F_1 - F_2 = C$ 为常数. 

**定义1**（原函数）. 方程的一个可微解 $F$ 称为函数 $f$ 的一个原函数. 根据上面的讨论，任何两个原函数之间只相差一个常数. 对于一般的原函数我们给出下面的定义：

**定义2**（不定积分）. 设函数 $f$ 在区间 $I$ 上有原函数，则我们用记号  
$$
\int f(x)\,dx
$$
表示 $f$ 的原函数的一般表达式，即如果 $F$ 为 $f$ 的一个原函数，则  
$$
\int f(x)\,dx = F(x) + C,\quad x \in I,
$$
其中 $C$ 为常数. 

根据定义，如果 $F$ 是 $f$ 的原函数，则 $dF = f(x)\,dx$，因此  
$$
d\left(\int f(x)\,dx\right) = f(x)\,dx,
$$
因此求原函数的过程是求微分过程之逆. 

我们可以给出如下计算结果：

> (1). 
> $$
> \displaystyle \int 0\,dx = C
> $$
> (2). 
> $$
> \displaystyle \int x^\alpha\,dx = \frac{x^{\alpha+1}}{\alpha+1} + C\ (\alpha \ne -1)
> $$
> (3). 
> $$
> \displaystyle \int e^x\,dx = e^x + C
> $$
> (4). 
> $$
> \displaystyle \int a^x\,dx = \frac{a^x}{\ln a} + C\ (a > 0, a \ne 1)
> $$
> (5). 
> $$
> \displaystyle \int \frac{1}{x}\,dx = \ln|x| + C
> $$
> (6). 
> $$
> \displaystyle \int \frac{1}{\sqrt{1+x^2}}\,dx = \ln(x + \sqrt{1+x^2}) + C
> $$
> (7). 
> $$
> \displaystyle \int \cos x\,dx = \sin x + C
> $$
> (8). 
> $$
> \displaystyle \int \frac{1}{\sqrt{1-x^2}}\,dx = \arcsin x + C
> $$
> (9). 
> $$
> \displaystyle \int \sin x\,dx = -\cos x + C
> $$
> (10). 
> $$
> \displaystyle \int \frac{1}{\sqrt{1-x^2}}\,dx = -\arccos x + C
> $$
> (11). 
> $$
> \displaystyle \int \sec^2 x\,dx = \tan x + C
> $$
> (12). 
> $$
> \displaystyle \int \frac{1}{1+x^2}\,dx = \arctan x + C
> $$
> (13). 
> $$
> \displaystyle \int \csc^2 x\,dx = -\cot x + C
> $$
> (14). 
> $$
> \displaystyle \int \frac{1}{1+x^2}\,dx = -\operatorname{arccot} x + C
> $$
> (15). 
> $$
> \displaystyle \int \cosh x\,dx = \sinh x + C
> $$
> (16). 
> $$
> \displaystyle \int \sinh x\,dx = \cosh x + C
> $$
> (17). 
> $$
> \displaystyle \int \tanh^2 x\,dx = x - \tanh x + C
> $$
> (18). 
> $$
> \displaystyle \int \coth^2 x\,dx = x - \coth x + C
> $$

我们当然要问，除了上面列出的函数之外，还有哪些函数有原函数？

### · Newton-Leibniz

**定理2**（Newton-Leibniz）. 区间 $I$ 中的连续函数都有原函数. 具体来说，设 $f$ 连续，$a \in I$，则函数  
$$
F(x) = \int_a^x f(t)\,dt,\quad x \in I
$$
是 $f$ 的一个原函数.

> 设 $x_0 \in I$. 因为 $f$ 连续，任给 $\varepsilon > 0$，存在 $\delta > 0$，使得  
> $$
> |f(x) - f(x_0)| < \varepsilon,\quad \forall\ x \in (x_0 - \delta, x_0 + \delta) \cap I.
> $$
> 此时
> $$
> \begin{aligned}
> \left|\frac{F(x) - F(x_0)}{x - x_0} - f(x_0)\right|& = \left|\frac{\int_{x_0}^x f(t)\,dt}{x - x_0} - f(x_0)\right|\\
> &= \left|\frac{\int_{x_0}^x (f(t) - f(x_0))\,dt}{x - x_0}\right|\\
> &\le \frac{\int_{x_0}^x |f(t) - f(x_0)|\,dt}{|x - x_0|} \le \varepsilon,
> \end{aligned}
> $$
> 这就推出 $F$ 在 $x_0$ 处可导，且  
> $$
> F'(x_0) = f(x_0).
> $$
> 由 $x_0$ 的任意性即知 $F$ 为 $f$ 的原函数.
>
> > (1) 这个定理又称为微积分基本定理，它将微分和积分联系在了一起.
> >
> > (2) 在后面我们会稍稍降低定理中对 $f$ 的连续性要求，得到一样的结论.

我们现在将 Newton-Leibniz 的这个重要定理改写一下. 设 $f$ 在区间 $I$ 中连续，$G$ 为 $f$ 的任一原函数，则存在常数 $C$，使得  
$$
G(x) = \int_a^x f(t)\,dt + C,
$$
因此  
$$
\int_a^b f(x)\,dx = G(b) - G(a) = G\big|_a^b.
$$
因为 $f$ 的不定积分为原函数，因此上式也可写为
$$
\int_a^b f(x)\,dx = \left(\int f(x)\,dx\right)\bigg|_a^b,
$$
从这个等式来看，连续函数在区间上的积分就好象是在它的不定积分中代入上下积分限一样.

Newton-Leibniz 公式还可写为（当 $G$ 连续可微时）  
$$
\int_a^b G'(x)\,dx = G(b) - G(a) = G\big|_a^b\quad \text{(Newton-Leibniz)}.
$$
这是一个很常用的形式，它有一个物理的解释：如果 $G$ 是随时间 $x$ 变化的物理量，$G'$ 就表示物理量的变化率. $G'$ 的积分表示无穷小变化量在某一段时间内的积累，最终就等于总的变化量（右式差值）.

有了这些 Newton-Leibniz 公式，某些情形下连续函数积分的计算就变得很简单了.

**命题3**（不定积分的线性性质）. 设 $f$, $g$ 在区间 $I$ 中均有原函数，则  
$$
\int [\alpha f(x) + \beta g(x)]\,dx = \alpha \int f(x)\,dx + \beta \int g(x)\,dx,
$$
其中 $\alpha$, $\beta$ 为常数.

**命题4**. 设 $f$ 的原函数为 $F$. 如果 $f$ 可逆，且其逆函数 $g$ 可微，则  
$$
\int g(x)\,dx = xg(x) - F(g(x)) + C.
$$

> 记 $G(x) = xg(x) - F(g(x))$，由 $f(g(x)) = x$ 以及复合求导，有  
> $$
> \begin{aligned}
> G'(x) &= g(x) + xg'(x) - F'(g(x))g'(x)\\
> &= g(x) + xg'(x) - f(g(x))g'(x)\\
> &= g(x) + xg'(x) - xg'(x) = g(x).
> \end{aligned}
> $$
> 因此 $G(x)$ 为 $g$ 的原函数.

/example/ 求不定积分 $\displaystyle \int \frac{1}{\sin^2 x \cos^2 x}\,dx$.

> 由不定积分的线性性质，有  
> $$
> \begin{aligned}
> \int \frac{1}{\sin^2 x \cos^2 x}\,dx &= \int \frac{\sin^2 x + \cos^2 x}{\sin^2 x \cos^2 x}\,dx\\
> &= \int \frac{1}{\sin^2 x}\,dx + \int \frac{1}{\cos^2 x}\,dx\\
> &= \tan x - \cot x + C.
> \end{aligned}
> $$

/example/ 设 $a \ne 0$，求不定积分 $\displaystyle \int \frac{1}{x^2 - a^2}\,dx$.

> 由不定积分的线性性质，有  
> $$
> \begin{aligned}
> \int \frac{1}{x^2 - a^2}\,dx &= \frac{1}{2a}\left[\int \frac{1}{x - a}\,dx - \int \frac{1}{x + a}\,dx\right]\\
> &= \frac{1}{2a}\left[\ln|x - a| - \ln|x + a|\right] + C\\
> &= \frac{1}{2a} \ln\left|\frac{x - a}{x + a}\right| + C.
> \end{aligned}
> $$

## Part 3 积分计算

不定积分是微分的逆运算. 微分运算满足线性性、导性和形式不变性，对应到不定积分就有相应的积分方法.

不定积分的各种计算方法实际上是为了计算定积分而作的预备.

### · 换元法

**命题1**（换元积分法）. 设 $f(u)$ 是在区间 $J$ 中有定义的函数，$u = \phi(x)$ 是区间 $I$ 中的可微函数，且 $\phi(I) \subset J$. 

(1) 如果 $f$ 在 $J$ 中存在原函数 $F$，则 $F(\phi)$ 是 $f(\phi)\phi'$ 在区间 $I$ 中的原函数，即
$$
\int f(\phi(x))\phi'(x)dx = \int f(u)du + C = F(\phi(x)) + C;
$$

(2) 设 $\phi$ 可逆，且其逆可微，$\phi(I) = J$. 如果 $f(\phi(x))\phi'(x)$ 有原函数 $G$，则 $f$ 有原函数 $G(\phi^{-1}(u))$，即
$$
\int f(u)du = G(\phi^{-1}(u)) + C.
$$

> /proof/
>
> (1) 如果 $F' = f$，则由复合求导，有
> $$
> [F(\phi)]' = f(\phi)\phi',
> $$
> 所以 $F(\phi)$ 是 $f(\phi)\phi'$ 的原函数. 
>
> (2) 当 $\phi^{-1}$ 可微时，对 $\phi(\phi^{-1}(u)) = u$ 求导，得
> $$
> [\phi^{-1}(u)]' = \frac{1}{\phi'(x)},\quad x = \phi^{-1}(u).
> $$
> 因此
> $$
> [G(\phi^{-1}(u))]' = G'(\phi^{-1}(u))[\phi^{-1}(u)]' = f(u)\phi'(\phi^{-1}(u))\frac{1}{\phi'(x)} = f(u),
> $$
> 所以 $G(\phi^{-1}(u))$ 是 $f(u)$ 的原函数.

(1) 换元积分法又称变量替换法，其要点是将变量 $u$ 通过 $u = \phi(x)$ 换成 $x$（或反之）. 

(2) 在下一章中我们将知道，如果 $\phi'(x) \ne 0,\ \forall\ x \in I$，则 $\phi$ 可逆，因此逆函数 $\phi^{-1}$ 也可微. 

(3) 由 Newton-Leibniz 公式，如果 $f$ 连续，$\phi$ 连续可微，则相应地有关于连续函数定积分的换元公式. 

> 实际上我们学习的时候经常强调“第一换元法”和“第二换元法”，
>
> 第一换元法
> $$
> \int f(x) \, \mathrm{d} x
> \stackrel{\text{discover}}{\Longrightarrow}
> \int g\big(\alpha(x)\big) \, \mathrm{d}\!\big(\alpha(x)\big)
> \stackrel{t=\alpha(x)}{\Longrightarrow}
> \int g(t) \, \mathrm{d}t
> $$
> 第二换元法
> $$
> \int f(x)\text{d}x\overset{\text{find }\beta(\alpha(x))=x}{\underset{t=\alpha(x),x=\beta(t)}{\iff}}\int f(\beta(t))\beta'(t)\text{d}t
> $$
> 第一换元法事~~注意到~~，基于强大的注意力（Attention is all you need！）
>
> 第二换元法一般有很明确的需求，比如：
> $$
> \sqrt{a^{2}-x^{2}},\quad x = a\sin t,\quad t\in[-\frac{\pi}{2},\frac{\pi}{2}]
> $$
>
> $$
> \sqrt{a^{2}+x^{2}},\quad x = a\tan t,\quad t\in[-\frac{\pi}{2},\frac{\pi}{2}]
> $$
>
> $$
> \sqrt{x^{2}-a^{2}},\quad x = a\sec t,\quad t\in[0,\frac{\pi}{2})\cup(\frac{\pi}{2},\pi]
> $$

### · 分部积分

**命题2**（分部积分法）. 设 $u(x), v(x)$ 在区间 $I$ 中可微，如果 $u'(x)v(x)$ 有原函数，则 $u(x)v'(x)$ 也有原函数，且
$$
\int u(x)v'(x)dx = u(x)v(x) - \int u'(x)v(x)dx.
$$

> 设 $u'(x)v(x)$ 有原函数，则由
> $$
> [u(x)v(x)]' = u'(x)v(x) + u(x)v'(x)
> $$
> 得
> $$
> \left[u(x)v(x) - \int u'(x)v(x)dx\right]' = u(x)v'(x).
> $$
> 这说明 $u(x)v(x) - \int u'(x)v(x)dx$ 是 $u(x)v'(x)$ 的原函数.

(1) 分部积分法也可改写为
$$
\int u(x)dv(x) = u(x)v(x) - \int v(x)du(x).
$$

(2) 如果 $u, v$ 均连续可微，则分部积分法条件满足. 特别地，对于定积分有
$$
\int_a^b u(x)v'(x)dx = u(x)v(x)\Big|_a^b - \int_a^b u'(x)v(x)dx.
$$
/example/ 求不定积分 $\int x^2\ln x\,dx$. 

>  取 $u(x) = \ln x$, $v(x) = \frac{1}{3}x^3$，则
> $$
> \begin{aligned}
> \int x^2\ln x\,dx &= \int \ln x\,d\left(\frac{1}{3}x^3\right)\\
> &= \frac{1}{3}x^3\ln x - \int \frac{1}{3}x^3\,d(\ln x)\\
> &= \frac{1}{3}x^3\ln x - \int \frac{1}{3}x^3\cdot\frac{1}{x}\,dx\\
> &= \frac{1}{3}x^3\ln x - \frac{1}{9}x^3 + C.
> \end{aligned}
> $$

 /example/ 设 $a \ne 0$，求不定积分 $I = \int e^{ax}\cos bx\,dx$ 和 $J = \int e^{ax}\sin bx\,dx$. 

> 利用分部积分，有
> $$
> \begin{aligned}
> I &= \int e^{ax}\cos bx\,dx = \frac{1}{a}\int \cos bx\,d(e^{ax})\\
> &= \frac{1}{a}\left[e^{ax}\cos bx + b\int e^{ax}\sin bx\,dx\right]\\
> &= \frac{1}{a}e^{ax}\cos bx + \frac{b}{a}J.
> \end{aligned}
> $$
> 同理，有
> $$
> \begin{aligned}
> J &= \int e^{ax}\sin bx\,dx = \frac{1}{a}\int \sin bx\,d(e^{ax})\\
> &= \frac{1}{a}\left[e^{ax}\sin bx - b\int e^{ax}\cos bx\,dx\right]\\
> &= \frac{1}{a}e^{ax}\sin bx - \frac{b}{a}I.
> \end{aligned}
> $$
> 因此解出 $I, J$ 为
> $$
> I = \frac{b\sin bx + a\cos bx}{a^2 + b^2}e^{ax} + C_1,\quad\\
> J = \frac{a\sin bx - b\cos bx}{a^2 + b^2}e^{ax} + C_2.
> $$

/example/ 求积分 $\int_0^{\frac{\pi}{4}} \tan^4 x\,dx$. 

> 记 $I_n = \int_0^{\frac{\pi}{4}} \tan^n x\,dx$，则 $I_0 = \frac{\pi}{4}$. 一般地，有
> $$
> \begin{aligned}
> I_n &= \int_0^{\frac{\pi}{4}} \tan^n x\,dx = \int_0^{\frac{\pi}{4}} \tan^{n-2} x(\sec^2 x - 1)\,dx\\
> &= \int_0^{\frac{\pi}{4}} \tan^{n-2} x\,d(\tan x) - I_{n-2}\\
> &= \frac{\tan^{n-1} x}{n-1}\Big|_0^{\frac{\pi}{4}} - I_{n-2}\\
> &= \frac{1}{n-1} - I_{n-2}.
> \end{aligned}
> $$
> 特别地，$I_2 = 1 - I_0 = 1 - \frac{\pi}{4}$，$I_4 = \frac{1}{3} - I_2 = \frac{\pi}{4} - \frac{2}{3}$.

/example/ 求不定积分
$$
I_n = \int \frac{dx}{(x^2 + a^2)^n}
$$
其中 $a > 0$，$n$ 为非负整数.

> 显然 $I_0 = x + C$，$I_1 = \frac{1}{a}\arctan\frac{x}{a} + C$. 当 $n \ge 1$ 时，
> $$
> \begin{aligned}
> I_n &= \int \frac{dx}{(x^2 + a^2)^n}\\
> &= \frac{x}{(x^2 + a^2)^n} + 2n\int \frac{x^2}{(x^2 + a^2)^{n+1}}\,dx\\
> &= \frac{x}{(x^2 + a^2)^n} + 2n\left[\int \frac{x^2 + a^2}{(x^2 + a^2)^{n+1}}\,dx - a^2\int \frac{1}{(x^2 + a^2)^{n+1}}\,dx\right]\\
> &= \frac{x}{(x^2 + a^2)^n} + 2nI_n - 2na^2I_{n+1}.
> \end{aligned}
> $$
> 这样就得到了递推公式
> $$
> I_{n+1} = \frac{2n - 1}{2na^2}I_n + \frac{1}{2na^2}\frac{x}{(x^2 + a^2)^n},
> $$
> 由此可以求出所有的 $I_n$.

### · 有理函数积分

有理函数是指形如
$$
R(x) = \frac{P(x)}{Q(x)}
$$
的函数，其中 $P, Q$ 均为关于变量 $x$ 的多项式. 如果 $P$ 的次数小于 $Q$，则称 $R$ 为真分式. 

显然，任何有理函数都可以写成一个多项式和一个真分式之和. 因此，有理函数的积分就只要考虑真分式的情形就可以了. 根据实系数多项式的因式分解可以证明，真分式可以进一步分解为下面两种简单真分式之和：
$$
\frac{A}{(x - a)^k},\ k \ge 1;\quad
\frac{Ax + B}{(x^2 + px + q)^k},\ k \ge 1,\ p^2 - 4q < 0.
$$
它们的不定积分可以计算如下：

**(1)**. $k = 1$:
$$
\int \frac{A}{x - a}\,dx = A\ln|x - a| + C;
$$

**(2)**. $k > 1$:
$$
\int \frac{A}{(x - a)^k}\,dx = A\frac{(x - a)^{1-k}}{1 - k} + C;
$$

**(3)**. $k = 1$:
$$
\begin{aligned}
\int \frac{Ax + B}{x^2 + px + q}\,dx
&= \int \frac{\frac{A}{2}(2x + p) + (B - \frac{Ap}{2})}{x^2 + px + q}\,dx\\
&= \frac{A}{2}\int \frac{2x + p}{x^2 + px + q}\,dx + (B - \frac{Ap}{2})\int \frac{dx}{x^2 + px + q}\\
&= \frac{A}{2}\int \frac{d(x^2 + px + q)}{x^2 + px + q} + (B - \frac{Ap}{2})\int \frac{dx}{(x + \frac{p}{2})^2 + (q - \frac{p^2}{4})}\\
&= \frac{A}{2}\ln|x^2 + px + q| + \frac{2B - Ap}{\sqrt{4q - p^2}}\arctan\frac{2x + p}{\sqrt{4q - p^2}} + C;
\end{aligned}
$$

**(4)**. $k > 1$ 时，和 (3) 类似，有
$$
\int \frac{Ax + B}{(x^2 + px + q)^k}\,dx
= \frac{A}{2}\frac{(x^2 + px + q)^{1-k}}{1 - k} + (B - \frac{Ap}{2})\int \frac{dt}{(t^2 + a^2)^k},
$$
其中 $t = x + \frac{p}{2}$，$a = \frac{1}{2}\sqrt{4q - p^2}$. 上式右端的不定积分我们在前一小节中已经用递推的办法算过. 

总之，有理函数的不定积分可以用初等函数表示. 在具体的分解计算过程中我们通常可以用待定系数法. 

### · 有理三角函数积分

如果我们对三角函数和常数做有限次的四则运算，则得到的函数称为有理三角函数. 因为 $\tan x, \cot x, \sec x$ 和 $\csc x$ 可以看成由 $\sin x$ 和 $\cos x$ 生成的有理三角函数，故一般的有理三角函数可记为 $R(\sin x, \cos x)$. 

对有理三角函数的积分有一个通用的处理方法，称为万能变换：令
$$
t = \tan\frac{x}{2},
$$
则
$$
x = 2\arctan t,\quad dx = \frac{2}{1 + t^2}dt,
$$
且有
$$
\sin x = \frac{2\sin\frac{x}{2}\cos\frac{x}{2}}{\sin^2\frac{x}{2} + \cos^2\frac{x}{2}}
= \frac{2\tan\frac{x}{2}}{\tan^2\frac{x}{2} + 1}
= \frac{2t}{1 + t^2},
$$
以及
$$
\cos x = \frac{\cos^2\frac{x}{2} - \sin^2\frac{x}{2}}{\cos^2\frac{x}{2} + \sin^2\frac{x}{2}}
= \frac{1 - \tan^2\frac{x}{2}}{1 + \tan^2\frac{x}{2}}
= \frac{1 - t^2}{1 + t^2},
$$
这说明有理三角函数的积分可以通过万能变换成有理函数的积分，因此是可以计算出来的. 在实际计算过程中，有时也可以视情形采用变换 $t = \sin x$, $t = \cos x$ 或 $t = \tan x$ 等.

### · 某些无理积分

以下讨论几种可以转化为有理积分的某些无理函数的不定积分. 我们用记号 $R(x_1, x_2, \cdots, x_n)$ 表示关于 $x_1, x_2, \cdots, x_n$ 的有理函数. 

**(1)**. 形如
$$
R\left(x, \sqrt[n]{\frac{ax + b}{cx + d}}, \cdots, \sqrt[m]{\frac{ax + b}{cx + d}}\right)
$$
的无理函数的积分，其中 $ad - bc \ne 0$，而 $n, \cdots, m$ 是大于 1 的整数. 设 $k$ 为这些整数的最小公倍数，令
$$
t = \left(\frac{ax + b}{cx + d}\right)^{\frac{1}{k}},
$$
则
$$
x = \frac{dt^k - b}{a - ct^k},\quad dx = \frac{ad - bc}{(a - ct^k)^2}kt^{k-1}dt,
$$
从而 $R$ 的积分可以转化为关于 $t$ 的有理积分. 

**(2)**. 形如 $R(x, \sqrt{ax^2 + bx + c})$ 的函数积分，其中 $R(x, y)$ 为关于 $x, y$ 的有理函数，$a > 0$ 时 $b^2 - 4ac \ne 0$，或 $a \ne 0$, $b^2 - 4ac > 0$. 由于
$$
ax^2 + bx + c = a\left[\left(x + \frac{b}{2a}\right)^2 + \frac{4ac - b^2}{4a^2}\right],
$$
故当 $a > 0$ 时，令
$$
u = x + \frac{b}{2a},\quad k^2 = \left|\frac{4ac - b^2}{4a^2}\right|,
$$
原积分化为如下形式的积分：
$$
\int R(u, \sqrt{u^2 - k^2}),\quad \text{or}\quad \int R(u, \sqrt{u^2 + k^2}),
$$
分别进一步令 $u = k\sec t$, $u = k\tan t$ 就把不定积分变成了有理三角函数的积分，从而可以计算出来. 

当 $a \ne 0$, $b^2 - 4ac > 0$ 时，令
$$
u = x + \frac{b}{2a},\quad k = \sqrt{\frac{b^2 - 4ac}{4a^2}},
$$
则原积分化为如下形式积分：
$$
\int R(u, \sqrt{u^2 - k^2}),\quad \text{或}\quad \int R(u, \sqrt{k^2 - u^2}),
$$
分别进一步令 $u = k\sec t$, $u = k\sin t$ 就把不定积分变成了有理三角函数的积分，从而可以计算出来. 

还有一些别的办法来计算这些积分. 

> 例如，如果 $a > 0$，令
> $$
> \sqrt{ax^2 + bx + c} = \sqrt{a}x + t\quad (\text{or } t - \sqrt{a}x),
> $$
> 则 $x$ 为 $t$ 的有理函数：
> $$
> x = \frac{t^2 - c}{b - 2\sqrt{a}t},
> $$
> 从而可以把原积分化为关于 $t$ 的有理积分；如果 $c > 0$，令
> $$
> \sqrt{ax^2 + bx + c} = tx + \sqrt{c}\quad (\text{或 } tx - \sqrt{c}),
> $$
> 则 $x$ 为 $t$ 的有理函数：
> $$
> x = \frac{2\sqrt{c}t - b}{a - t^2},
> $$
> 从而也可以把原积分化为关于 $t$ 的有理积分；如果 $b^2 - 4ac > 0$，则 $ax^2 + bx + c = 0$ 有两个实根：
> $$
> ax^2 + bx + c = a(x - \alpha)(x - \beta),
> $$
> 令
> $$
> \sqrt{ax^2 + bx + c} = t(x - \alpha),
> $$
> 则 $x$ 为 $t$ 的有理函数：
> $$
> x = \frac{a\beta - \alpha t^2}{a - t^2},
> $$
> 从而也可以把原积分化为关于 $t$ 的有理积分；这里用到的变量替换统称为 Euler 替换，在实际的计算过程中当然也可灵活选择其它的变量替换方法. 

并非所有的不定积分都可以用初等函数表示，例如下面函数的不定积分都不能用初等函数表示：
$$
e^{\pm x^2},\ \sin(x^2),\ \cos(x^2),\ \frac{\sin x}{x},\ \frac{\cos x}{x},\ \sqrt{1 - k^2\sin^2 x},\ \frac{1}{\sqrt{1 - k^2\sin^2 x}}\quad (0 < k < 1).
$$

