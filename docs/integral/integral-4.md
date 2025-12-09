---
title: Chapter 4 函数极限
permalink: /integral/integral-4/
createTime: 2025/09/16 20:57:28
---

## Part 1 定义

同数列的极限那样，我们用 $\varepsilon-\delta$ 语言来讨论当变量趋于某一点（或无穷远）时函数取值的变化趋势。

设 $x_0 \in \mathbb{R}$，$\delta > 0$。我们将开区间 $(x_0 - \delta, x_0 + \delta)$ 称为 $x_0$ 的一个**开邻域**；两个开区间之并 $(x_0 - \delta, x_0) \cup (x_0, x_0 + \delta)$ 称为 $x_0$ 的一个**去心开邻域**或**空心开邻域**。

**定义1**：

> 设函数 $f(x)$ 在点 $x_0$ 的一个空心开邻域 $(x_0 - \delta_0, x_0) \cup (x_0, x_0 + \delta_0)$ 中有定义。如果存在 $A \in \mathbb{R}$，使得对任意给定的 $\varepsilon > 0$，都存在 $0 < \delta < \delta_0$，当 $0 < |x - x_0| < \delta$ 时，有
> $$
> |f(x) - A| < \varepsilon,
> $$
> 则称函数 $f(x)$ 在 $x_0$ 处（当 $x$ 趋于 $x_0$ 时）有极限 $A$，记为
> $$
> \lim_{x \to x_0} f(x) = A \quad \text{或} \quad f(x) \to A \quad (x \to x_0).
> $$
>
> 需要注意的是，$f$ 在 $x_0$ 处的极限与 $f$ 在 $x_0$ 处的值没有直接关系，$f$ 甚至可以在 $x_0$ 处没有定义。
>
> 完全类似地，我们也可以定义 $x_0$ 处的单侧极限：
>
> - 如果存在 $A \in \mathbb{R}$，使得对任意给定的 $\varepsilon > 0$，都存在 $0 < \delta < \delta_0$，当 $-\delta < x - x_0 < 0$ 时，有
>   $$
>   |f(x) - A| < \varepsilon,
>   $$
>   则称函数 $f(x)$ 在 $x_0$ 处（当 $x$ 趋于 $x_0^-$ 时）有**左极限** $A$，记为
>   $$
>   \lim_{x \to x_0^-} f(x) = A \quad \text{或} \quad f(x) \to A \quad (x \to x_0^-).
>   $$
>   $f(x)$ 在 $x_0$ 处的左极限也记为 $f(x_0^-)$ 或 $f(x_0 - 0)$。
>
> - 如果存在 $A \in \mathbb{R}$，使得对任意给定的 $\varepsilon > 0$，都存在 $0 < \delta < \delta_0$，当 $0 < x - x_0 < \delta$ 时，有
>   $$
>   |f(x) - A| < \varepsilon,
>   $$
>   则称函数 $f(x)$ 在 $x_0$ 处（当 $x$ 趋于 $x_0^+$ 时）有**右极限** $A$，记为
>   $$
>   \lim_{x \to x_0^+} f(x) = A \quad \text{或} \quad f(x) \to A \quad (x \to x_0^+).
>   $$
>   $f(x)$ 在 $x_0$ 处的右极限也记为 $f(x_0^+)$ 或 $f(x_0 + 0)$。
>
> 显然，如果 $f$ 在 $x_0$ 处极限存在，则其左右极限也存在且等于此极限。

**命题1**：$f$ 在 $x_0$ 处有极限的充分必要条件是 $f$ 在 $x_0$ 的左极限和右极限都存在且相等

> 只要证明充分性即可。设 $f$ 在 $x_0$ 处的左极限和右极限均为 $A$。由定义，任给 $\varepsilon > 0$，存在 $\delta_1 > 0$, $\delta_2 > 0$，使得
> $$
> |f(x) - A| < \varepsilon,\quad x \in (x_0 - \delta_1, x_0),
> $$
> $$
> |f(x) - A| < \varepsilon,\quad x \in (x_0, x_0 + \delta_2).
> $$
>
> 记 $\delta = \min\{\delta_1, \delta_2\}$，则
> $$
> |f(x) - A| < \varepsilon,\quad 0 < |x - x_0| < \delta.
> $$
>
> 因此 $f$ 在 $x_0$ 处的极限为 $A$。

/example/ 研究函数 $\dfrac{x^2 - 1}{2x^2 - 3x + 1}$ 在 $x_0 = 1$ 处的极限。

> 当 $x \ne 1$ 时，
> $$
> \frac{x^2 - 1}{2x^2 - 3x + 1} = \frac{(x+1)(x-1)}{(x-1)(2x-1)} = \frac{x+1}{2x-1},
> $$
> 因此，任给 $\varepsilon > 0$，取 $\delta = \min\left\{\frac{1}{4}, \frac{\varepsilon}{6}\right\}$，当 $0 < |x - 1| < \delta$ 时，
> $$
> \left|\frac{x^2 - 1}{2x^2 - 3x + 1} - 2\right| = \left|\frac{x+1}{2x-1} - 2\right| = \left|\frac{3(x-1)}{2x-1}\right| < 6|x - 1| < \varepsilon.
> $$
>
> 这说明该函数在 $x_0 = 1$ 处的极限为 $2$。

/example/ 研究函数 $f(x) = [x]$ 的极限。

> 当 $k \le x < k+1$（$k$ 为整数）时，$f(x) = k$。这说明：
>
> - 当 $x_0$ 不是整数时，$f$ 在 $x = x_0$ 处的极限等于 $f(x_0) = [x_0]$；
> - 当 $x_0$ 为整数时，$f$ 在 $x = x_0$ 处的左极限为 $x_0 - 1$，右极限为 $x_0$。

数列极限的许多结果都可以推广到函数极限的情形, 如下面的夹逼原理和极限的惟一性

**命题2**（夹逼原理）：设在 $x_0$ 的一个空心开邻域内有
$$
f_1(x) \le f(x) \le f_2(x).
$$
如果 $f_1, f_2$ 在 $x_0$ 处的极限存在且等于 $A$，则 $f$ 在 $x_0$ 处的极限也等于 $A$。

> /proof/ 证明过程参考数列极限.

**命题3**（极限的唯一性）：设 $A, B$ 均为 $f$ 在 $x_0$ 处的极限，则 $A = B$。

> /proof/
>
> 利用不等式
> $$
> 0 \le |A - B| \le |f(x) - A| + |f(x) - B|
> $$
> 和夹逼原理即可

**命题4**（绝对值的极限）：设 $f$ 在 $x_0$ 处的极限为 $A$，则 $|f|$ 在 $x_0$ 处的极限为 $|A|$。

> /proof/
>
> 利用不等式
> $$
> 0 \le ||f(x)| - |A|| \le |f(x) - A|
> $$
> 和夹逼原理即可

/example/ 证明
$$
\lim_{x \to x_0} \sin x = \sin x_0, \quad \lim_{x \to x_0} \cos x = \cos x_0, \quad \forall\, x_0 \in \mathbb{R}.
$$

> **(1)** 任给 $\varepsilon > 0$，取 $\delta = \varepsilon$，当 $0 < |x - x_0| < \delta$ 时，有
> $$
> |\sin x - \sin x_0| = 2\left|\cos\frac{x + x_0}{2}\right|\left|\sin\frac{x - x_0}{2}\right| \leqslant 2\left|\frac{x - x_0}{2}\right| = |x - x_0| < \delta = \varepsilon.
> $$
>
> **(2)** 关于 $\cos x$ 的极限可象 (1) 一样证明，也可这样做：
> $$
> \lim_{x \to x_0} \cos x = \lim_{x \to x_0} \sin\left(\frac{\pi}{2} - x\right) = \sin\left(\frac{\pi}{2} - x_0\right) = \cos x_0.
> $$

我们再来看看个关于函数极限的例子

/example/ 设 $x_0 \geqslant 0$。研究函数 $f(x) = \sqrt{x}$ 在 $x_0$ 处的极限。

> /proof/
>
> 当 $x_0 = 0$ 时，任给 $\varepsilon > 0$，取 $\delta = \varepsilon^2$，当 $0 < x < \delta$ 时，
> $$
> |\sqrt{x} - 0| = \sqrt{x} < \sqrt{\delta} = \varepsilon,
> $$
> 因此
> $$
> \lim_{x \to 0^+} \sqrt{x} = 0.
> $$
>
> 当 $x_0 > 0$ 时，任给 $\varepsilon > 0$，取 $\delta = \varepsilon\sqrt{x_0}$，当 $0 < |x - x_0| < \delta$ 时，
> $$
> |\sqrt{x} - \sqrt{x_0}| = \frac{|x - x_0|}{\sqrt{x} + \sqrt{x_0}} \leqslant \frac{|x - x_0|}{\sqrt{x_0}} < \frac{\delta}{\sqrt{x_0}} = \varepsilon,
> $$
> 因此
> $$
> \lim_{x \to x_0} \sqrt{x} = \sqrt{x_0}.
> $$

### · 无穷远处极限

**定义2**

设 $f$ 在 $x_0$ 的一个空心开邻域中有定义。如果任给 $A > 0$，均存在 $\delta > 0$，当 $0 < |x - x_0| < \delta$ 时，有 $f(x) > A$，则称 $f$ 在 $x_0$ 处的极限为 $+\infty$，记为
$$
\lim_{x \to x_0} f(x) = +\infty \quad \text{or} \quad f(x) \to +\infty \quad (x \to x_0).
$$

如果任给 $A < 0$，均存在 $\delta > 0$，当 $0 < |x - x_0| < \delta$ 时，有 $f(x) < A$，则称 $f$ 在 $x_0$ 处的极限为 $-\infty$，记为
$$
\lim_{x \to x_0} f(x) = -\infty \quad \text{or} \quad f(x) \to -\infty \quad (x \to x_0).
$$

对于这种极限，夹逼原理和唯一性仍然成立。我们也可以完全类似地给出 $f$ 在 $x_0$ 处的左极限或右极限为无穷大的定义，这里不再赘述。有时，当我们说 $f$ 在 $x_0$ 处的极限为无穷大是指 $|f|$ 在 $x_0$ 处的极限为 $+\infty$。

**定义3**

> 设 $f$ 在 $+\infty$ 的一个开邻域 $(a, +\infty)$ 中有定义。如果存在 $A \in \mathbb{R}$，使得对于任给的 $\varepsilon > 0$，存在 $M > a$，当 $x > M$ 时，有
> $$
> |f(x) - A| < \varepsilon,
> $$
> 则称 $f$ 在 $+\infty$ 处有极限 $A$，记为
> $$
> \lim_{x \to +\infty} f(x) = A \quad \text{or} \quad f(x) \to A \quad (x \to +\infty).
> $$
>
> 类似地，设 $f$ 在 $-\infty$ 的一个开邻域 $(-\infty, a)$ 中有定义。如果存在 $A \in \mathbb{R}$，使得对于任给的 $\varepsilon > 0$，存在 $m < a$，当 $x < m$ 时，有
> $$
> |f(x) - A| < \varepsilon,
> $$
> 则称 $f$ 在 $-\infty$ 处有极限 $A$，记为
> $$
> \lim_{x \to -\infty} f(x) = A \quad \text{or} \quad f(x) \to A \quad (x \to -\infty).
> $$
>
> 如果 $f$ 在 $-\infty$ 以及 $+\infty$ 处的极限均为 $A$，则称 $f$ 在 $\infty$（无穷远）处有极限 $A$，记为
> $$
> \lim_{x \to \infty} f(x) = A \quad \text{or} \quad f(x) \to A \quad (x \to \infty).
> $$
>
> 我们可以类似地给出 $f$ 在无穷远处极限为无穷大的定义，这里也不再赘述。

### · 重要极限

(1). 研究函数 $\dfrac{\sin x}{x}$ 在 $x_0 = 0$ 处的极限

> /proof/
>
> 先考虑 $0 < x < \dfrac{\pi}{2}$ 的情形。  
>
> 作半径为 1 的圆（单位圆），$O$ 为圆心，$A, D$ 为圆周上的点，角 $\angle AOD$ 大小为 $x$，$DC, BA$ 均与 $OA$ 垂直，$B$ 在 $OD$ 的延长线上。比较三角形 $\triangle OAD$、扇形 $OAD$ 以及三角形 $\triangle OAB$ 的面积大小，得：
> $$
> \frac{1}{2} \sin x < \frac{1}{2} x < \frac{1}{2} \tan x,
> $$
> 即
> $$
> \cos x < \frac{\sin x}{x} < 1, \quad \forall\, x \in \left(0, \frac{\pi}{2}\right).
> $$
>
> 由于 $\cos x$ 和 $\dfrac{\sin x}{x}$ 为偶函数，故上式对 $x \in \left(-\frac{\pi}{2}, 0\right)$ 也成立。因此当 $0 < |x| < \dfrac{\pi}{2}$ 时，有
> $$
> \left|\frac{\sin x}{x} - 1\right| < 1 - \cos x = 2\sin^2\frac{x}{2} \leqslant 2\left(\frac{x}{2}\right)^2 = \frac{x^2}{2}.
> $$
>
> 由夹逼原理得
> $$
> \lim_{x \to 0} \frac{\sin x}{x} = 1.
> $$
>
> > **注意**：当 $|x| \geqslant \dfrac{\pi}{2}$ 时，
> > $$
> > |\sin x| \leqslant 1 < \frac{\pi}{2} \leqslant |x|,
> > $$
> > 因此我们得到下面的不等式：
> > $$
> > |\sin x| \leqslant |x|, \quad \forall\, x \in \mathbb{R},
> > $$
> > 等号仅在 $x = 0$ 处成立。

(2). 研究函数 $\left(1 + \dfrac{1}{x}\right)^x$ 在无穷远处的极限。

> /proof/
>
> 当 $x \geqslant 1$ 时，
> $$
> \left(1 + \frac{1}{[x]+1}\right)^{[x]+1} \leqslant \left(1 + \frac{1}{x}\right)^x \leqslant \left(1 + \frac{1}{[x]}\right)^{[x]+1},
> $$
> 其中 $[x]$ 是不超过 $x$ 的最大整数。因此
> $$
> \left(1 + \frac{1}{[x]+1}\right)^{[x]+1} \left(1 + \frac{1}{[x]+1}\right)^{-1} \leqslant \left(1 + \frac{1}{x}\right)^x \leqslant \left(1 + \frac{1}{[x]}\right)^{[x]} \left(1 + \frac{1}{[x]}\right).
> $$
>
> 利用数列极限
> $$
> \lim_{n \to \infty} \left(1 + \frac{1}{n}\right)^n = e,
> $$
> 以及夹逼原理得
> $$
> \lim_{x \to +\infty} \left(1 + \frac{1}{x}\right)^x = e.
> $$
>
> 类似可证
> $$
> \lim_{x \to -\infty} \left(1 + \frac{1}{x}\right)^x = e.
> $$

## Part 2 性质

我们来讨论函数极限存在与否的判别方法和计算方法，主要以有限极限为例。

### · Heine 定理

**定理5** (Heine 定理)：设函数 $f$ 在 $x_0$ 的一个空心开邻域内有定义，则 $f$ 在 $x_0$ 处的极限为 $A$ 当且仅当对任何收敛点列 $x_n \to x_0$（$n \to \infty$）且 $x_n \ne x_0$（$\forall\, n$），均有
$$
\lim_{n \to \infty} f(x_n) = A.
$$

> 先证必要性。由定义，任给 $\varepsilon > 0$，存在 $\delta > 0$，使得当 $0 < |x - x_0| < \delta$ 时，有
> $$
> |f(x) - A| < \varepsilon.
> $$
>
> 现在设 $x_n \to x_0,\ x_n \ne x_0$。仍由极限定义，对于上述 $\delta$，存在 $N$，使得当 $n > N$ 时，
> $$
> 0 < |x_n - x_0| < \delta.
> $$
> 因此当 $n > N$ 时，有
> $$
> |f(x_n) - A| < \varepsilon,
> $$
> 这说明
> $$
> \lim_{n \to \infty} f(x_n) = A.
> $$
>
> 我们用反证法来证明充分性。如果 $f$ 在 $x_0$ 处极限不为 $A$（极限可能不存在），则存在 $\varepsilon_0 > 0$，使得对任何 $\delta > 0$，都存在 $x_\delta$，使得
> $$
> 0 < |x_\delta - x_0| < \delta,\quad |f(x_\delta) - A| \geqslant \varepsilon_0.
> $$
>
> 特别地，对 $\forall\, n \geqslant 1$，均存在 $x_n$，使得
> $$
> 0 < |x_n - x_0| < \frac{1}{n},\quad |f(x_n) - A| \geqslant \varepsilon_0.
> $$
>
> 这说明 $x_n \to x_0$，$x_n \ne x_0$，但 $f(x_n)$ 不收敛到 $A$。
>
> > (1) Heine 定理可以改述成下面应用起来较为方便的形式：
> > $$
> > \lim_{x \to x_0} f(x) = A \iff \forall\, x_n \to x_0\ (x_n \ne x_0),\ \lim_{n \to \infty} f(x_n)\ \text{存在}.
> > $$
> >
> > 这时充分性的证明是这样的：只要说明如果 $f(x_n)$ 均收敛，则它们的极限必定都相同。
> >
> > （反证法）如果存在 $x'_n \to x_0,\ x'_n \ne x_0,\ f(x'_n) \to A$ 以及 $x''_n \to x_0$，$x''_n \ne x_0$，$f(x''_n) \to B$。
> >
> > 当 $B \ne A$ 时，考虑新的点列 $x_n$，使得 $x_{2k} = x'_{2k}$，$x_{2k-1} = x''_{2k-1}$（$k\geqslant 1$），则 $x_n \to x_0$，$x_n \ne x_0$ 但 $f(x_n)$ 不收敛，这就得到矛盾。
> >
> > (2) 对于单侧极限、无穷远处的极限以及极限为无穷大的情形，有完全类似的 Heine 定理。

/example/ 研究函数 $f(x) = \sin \dfrac{1}{x}$ 在 $x_0 = 0$ 处的极限。

> 我们选取点列 $x_n = \dfrac{1}{n\pi}$ 以及 $y_n = \dfrac{1}{2n\pi + \frac{\pi}{2}}$，则 $x_n, y_n \to 0$，$x_n, y_n \ne 0$，且
> $$
> f(x_n) = \sin(n\pi) = 0,\quad f(y_n) = \sin\left(2n\pi + \frac{\pi}{2}\right) = 1.
> $$
>
> 根据刚才的注记就知道 $f$ 在 $x_0 = 0$ 的极限不存在。

### · Cauchy 准则

**定理6** (Cauchy 准则)：设 $f$ 在 $x_0$ 的一个空心开邻域中有定义，则 $f$ 在 $x_0$ 处存在有限极限当且仅当任给 $\varepsilon > 0$，存在 $\delta > 0$，使得当 $0 < |x' - x_0| < \delta$，$0 < |x'' - x_0| < \delta$ 时，有
$$
|f(x') - f(x'')| < \varepsilon.
$$

> **必要性**：设 $f$ 在 $x_0$ 处的极限为 $A$，则任给 $\varepsilon > 0$，存在 $\delta > 0$，使得当 $0 < |x - x_0| < \delta$ 时，$|f(x) - A| < \dfrac{\varepsilon}{2}$。因此，当 $0 < |x' - x_0| < \delta$，$0 < |x'' - x_0| < \delta$ 时，有
> $$
> |f(x') - f(x'')| \leqslant |f(x') - A| + |f(x'') - A| < \frac{\varepsilon}{2} + \frac{\varepsilon}{2} = \varepsilon.
> $$
>
> **充分性**：我们用 Heine 定理来证。设 $x_n \to x_0$，$x_n \ne x_0$，则已知条件告诉我们 $\{f(x_n)\}$ 是一个 Cauchy 列，根据数列极限的 Cauchy 准则，$\{f(x_n)\}$ 收敛。于是由 Heine 定理知 $f$ 在 $x_0$ 处的极限存在（且有限）。
>
> > (1) 对于无穷远处极限为有限的情形，Cauchy 准则仍然成立。
> >
> > (2) 从证明过程可以看出，$f$ 在 $x_0$ 处不存在有限极限当且仅当存在 $\varepsilon_0 > 0$，使得对任意 $\delta > 0$，总有 $x', x''$，使得
> > $$
> > 0 < |x' - x_0| < \delta,\ 0 < |x'' - x_0| < \delta,\quad |f(x') - f(x'')| \geqslant \varepsilon_0.
> > $$

/example/研究 Dirichlet 函数的极限。
$$
D(x) =
\begin{cases}
1, & x \in \mathbb{Q}, \\
0, & x \in \mathbb{R} \setminus \mathbb{Q},
\end{cases}
$$
> 在任何一点 $x_0$ 附近都有点取值为 0 或 1，取 $\varepsilon = 1$，由刚才的注记 (2) 即知 $D$ 在 $x_0$ 处极限不存在。

### · 单调有界原理

**定理7** (单调有界原理)：设函数在 $(x_0 - \delta, x_0)$ 中有定义，如果 $f$ 单调递增且有上界，或单调递减且有下界，则 $f$ 在 $x_0$ 的左极限存在（且有限）。

>利用数列的单调性原理以及 Heine 定理即可。
>
>
>>如果$f$单调递增又无上界，则 $f$ 在 $x_0$ 处的左极限为 $+\infty$；如果 $f$ 单调递减又无下界，则 $f$ 在 $x_0$ 处的左极限为 $-\infty$；对于函数的右极限有完全类似的结论。

### · 基本性质

下面我们叙述函数极限的一些基本性质，它们和数列极限相应的性质十分类似，因此我们省略其证明

**定理8**

> (1) （局部有界性）如果$f$在$x_0$处有有限极限，则$f$在$x_0$的一个空心开邻域内有界。
>
> (2) （保序性）设$f, g$在$x_0$处的极限分别为$A, B$。如果$f(x) \geqslant g(x)$在$x_0$的一个空心开邻域内成立，则$A \geqslant B$；反之，如果$A > B$，则在$x_0$内一个空心开邻域内$f(x) > g(x)$；特别地，如果$A > 0$，则在$x_0$的一个空心开邻域内$f(x) > 0$。
>
> (3) （四则运算）设$f, g$在$x_0$处有有限极限，则
>
> - $\displaystyle \lim_{x \to x_0} [\alpha f(x) + \beta g(x)] = \alpha \lim_{x \to x_0} f(x) + \beta \lim_{x \to x_0} g(x)$，其中$\alpha, \beta$为常数；
>
> - $\displaystyle \lim_{x \to x_0} f(x)g(x) = \lim_{x \to x_0} f(x) \cdot \lim_{x \to x_0} g(x)$；
>
> - $\displaystyle \lim_{x \to x_0} \frac{f(x)}{g(x)} = \frac{\lim_{x \to x_0} f(x)}{\lim_{x \to x_0} g(x)}$，其中$\lim_{x \to x_0} g(x) \ne 0$。
>
> > **注**：对于无穷远处的极限有完全类似的结论成立。

下面关于复合函数的极限也很有用

**定理9** (复合函数的极限)：设$f(y)$在$y_0$处的极限为$A$，$g(x)$在$x_0$处的极限为$y_0$，且存在$x_0$的一个空心开邻域，在此开邻域内$g(x) \ne y_0$，则复合函数$f(g(x))$在$x_0$处的极限为$A$。

> 任给 $\varepsilon > 0$，由 $\displaystyle \lim_{y \to y_0} f(y) = A$ 知，存在 $\delta > 0$，当 $0 < |y - y_0| < \delta$ 时，有
> $$
> |f(y) - A| < \varepsilon.
> $$
>
> 又因为 $g(x) \to y_0$（$x \to x_0$），对于这个 $\delta$，存在 $\eta > 0$，使得当 $0 < |x - x_0| < \eta$时，有
> $$
> 0 < |g(x) - y_0| < \delta,
> $$
> 此时有
> $$
> |f(g(x)) - A| < \varepsilon,
> $$
> 这说明 $f(g(x))$ 在 $x_0$ 处的极限为 $A$。
>
> > (1) 定理中的条件 $g(x) \ne y_0$ 一般不能去掉，下面的函数就是例子：令
> > $$
> > f(y) =
> > \begin{cases}
> > 1, & y \ne 0, \\
> > 0, & y = 0,
> > \end{cases}
> > $$
> > 以及 $g(x) \equiv 0$，则 $\displaystyle \lim_{y \to 0} f(y) = 1$，但 $f(g(x)) = 0$。不过，当 $f(y_0) = A$ 时这个条件是可以去掉的
> >
> > (2) 对于无穷远处的极限以及极限为无穷大的情形也有完全类似的结果。

### · 例题

我们再来计算一些函数极限的例子，有些例子在后面可能会用到

/example/ 研究函数 $(1 + x)^{\frac{1}{x}}$ 在 $x_0 = 0$ 处的极限。

> 作变量替换 $y = \dfrac{1}{x}$，则
> $$
> (1 + x)^{\frac{1}{x}} = \left(1 + \frac{1}{y}\right)^y.
> $$
>
> 当 $x \to 0$ 时 $y \to \infty$，由复合函数的极限有
> $$
> \lim_{x \to 0} (1 + x)^{\frac{1}{x}} = \lim_{y \to \infty} \left(1 + \frac{1}{y}\right)^y = e.
> $$

/example/ 设 $P(x), Q(x)$ 是次数相同的多项式，求极限 $\displaystyle \lim_{x \to \infty} \frac{P(x)}{Q(x)}$。

> 设 $P(x), Q(x)$ 次数为 $n$。记
> $$
> P(x) = a_0 x^n + a_1 x^{n-1} + \cdots + a_n,\quad Q(x) = b_0 x^n + b_1 x^{n-1} + \cdots + b_n,
> $$
> 其中$a_0, b_0 \ne 0$。由
> $$
> \frac{P(x)}{Q(x)} = \frac{a_0 + a_1 x^{-1} + \cdots + a_n x^{-n}}{b_0 + b_1 x^{-1} + \cdots + b_n x^{-n}},
> $$
> 以及极限的四则运算性质可得
> $$
> \lim_{x \to \infty} \frac{P(x)}{Q(x)} = \frac{a_0}{b_0}.
> $$

## Part 3 量级关系

在对两个变量进行比较时，我们有时不需要知道它们的确切大小，而只需了解它们之间的量级关系。我们现在可以用极限来刻画这些量级关系。

**定义1**（无穷小量与无穷大量）：如果函数 $f$ 在 $x_0$ 处的极限为 $0$，则称 $f$ 在 $x \to x_0$ 时为无穷小量，记为 $f(x) = o(1)$ $(x \to x_0)$；如果 $x \to x_0$ 时 $|f| \to +\infty$，则称 $f$ 在 $x \to x_0$ 时为无穷大量。

> （1）无穷小（大）量不是一个数，而是在某点邻域内有特定性质的函数。在无穷远处也可以类似定义无穷小量与无穷大量；
>
> （2）对于数列也可以定义无穷小量与无穷大量：设 $\{a_n\}$ 和 $\{b_n\}$ 为两个数列，如果 $a_n / b_n \to 0$ $(n \to \infty)$，则称 $\{a_n\}$ 关于 $\{b_n\}$ 是无穷小量，记为 $a_n = o(b_n)$；无穷大量可类似定义。

/example/ 说明 $\sqrt{x+1} - 1 = o(1)$ $(x \to 0)$。

> 因为
> $$
> \sqrt{x+1} - 1 = \frac{x}{\sqrt{x+1} + 1} \to 0 \quad (x \to 0),
> $$
> 故由定义知 $\sqrt{x+1} - 1$ 在 $x \to 0$ 时为无穷小量

我们可以利用无穷小量和无穷大量来比较函数。例如，设 $f, g$ 在 $x \to x_0$ 时均为无穷小（大）量，则

> (1). 如果 $f/g$ 在 $x \to x_0$ 时是无穷小量，则称当 $x \to x_0$ 时 $f$ 是 $g$ 的高（低）阶无穷小（大）量，记为
> $$
> f(x) = o(g(x)) \quad (x \to x_0);
> $$
>
> (2). 如果 $f/g$ 在 $x_0$ 的一个空心邻域中有界，则记
> $$
> f(x) = O(g(x)) \quad (x \to x_0);
> $$
>
> (3). 如果 $f/g$ 在 $x_0$ 处的极限为 $A \ne 0$，则称当 $x \to x_0$ 时 $f$ 和 $g$ 是同阶无穷小（大）量，记为
> $$
> f(x) = O^*(g(x)) \quad (x \to x_0);
> $$
>
> 特别地，如果 $A = 1$，则称当 $x \to x_0$ 时 $f$ 和 $g$ 是等价无穷小（大）量，记为
> $$
> f \sim g \quad (x \to x_0).
> $$
>
> (4). 设 $k > 0$。如果
> $$
> |f(x)| = O^*(|x - x_0|^k) \quad (x \to x_0),
> $$
> 则称当 $x \to x_0$ 时 $f$ 是 $k$ 阶无穷小量；如果
> $$
> |f(x)| = O^*(|x - x_0|^{-k}) \quad (x \to x_0),
> $$
> 则称当 $x \to x_0$ 时 $f$ 是 $k$ 阶无穷大量。$k$ 为正整数时也可将定义中的绝对值去掉。
>
> > 这些量级的比较也可在无穷远处进行。

/example/ 证明 $1 - \cos x \sim \frac{1}{2}x^2$ $(x \to 0)$

> 根据前面的结果，有
> $$
> \lim_{x \to 0} \frac{1 - \cos x}{x^2} = \lim_{x \to 0} \frac{2\sin^2 \frac{1}{2}x}{x^2} = 2\left(\frac{1}{2}\right)^2 = \frac{1}{2}.
> $$

下面的定理在计算极限的时候十分有用。

**定理**（等价代换）。设 $x \to x_0$ 时，$f \sim f_1$，$g \sim g_1$。如果 $f_1/g_1$ 在 $x_0$ 处有极限，则 $f/g$ 在 $x_0$ 处有极限，且极限相等；反之亦然。

> 只要注意到
> $$
> f/g = (f/f_1)(f_1/g_1)(g_1/g),
> $$
> 以及当 $x \to x_0$ 时 $f/f_1 \to 1$，$g/g_1 \to 1$ 即可
>
> 等价代换在无穷远处也可进行

/example/ 求极限 $\lim_{x \to 0} \frac{\sin \alpha x}{\sin \beta x}$

> 因为当 $x \to 0$ 时 $\sin \alpha x \sim \alpha x$，$\sin \beta x \sim \beta x$，故
> $$
> \lim_{x \to 0} \frac{\sin \alpha x}{\sin \beta x} = \lim_{x \to 0} \frac{\alpha x}{\beta x} = \frac{\alpha}{\beta}.
> $$

/example/ 求极限 $\lim_{x \to 0} \frac{\tan x - \sin x}{x^3}$。

> 当 $x \to 0$ 时，
> $$
> \tan x - \sin x = \frac{\sin x}{\cos x}(1 - \cos x) \sim x\left(\frac{1}{2}x^2\right) = \frac{1}{2}x^3,
> $$
> 故
> $$
> \lim_{x \to 0} \frac{\tan x - \sin x}{x^3} = \frac{1}{2}.
> $$
> 需要注意的是，等价代换不能用于加法和减法运算。例如在上面的例子中，当 $x \to 0$ 时，有
> $$
> \tan x \sim \sin x \sim x,
> $$
> 但 $\tan x - \sin x$ 不能替换为零

/example/ 求极限 $\lim_{x \to 0} \frac{\ln \cos x}{\tan^2 x}$

> 先来说明
> $$
> \ln(1 + x) \sim x \quad (x \to 0).
> $$
>
> 事实上有
> $$
> \frac{\ln(1 + x)}{x} = \ln[(1 + x)^{1/x}] \to \ln e = 1 \quad (x \to 0).
> $$
>
> 于是，当 $x \to 0$ 时，有
> $$
> \ln \cos x = \ln[1 - (1 - \cos x)] \sim -(1 - \cos x) \sim -\frac{1}{2}x^2.
> $$
>
> 另一方面
> $$
> \tan^2 x = \frac{\sin^2 x}{\cos^2 x} \sim x^2 \quad (x \to 0),
> $$
>
> 利用等价代换得
> $$
> \lim_{x \to 0} \frac{\ln \cos x}{\tan^2 x} = -\frac{1}{2}.
> $$

结束.

