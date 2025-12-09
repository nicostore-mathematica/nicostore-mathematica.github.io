---
title: Chapter 2 数列极限
permalink: /integral/integral-2/
createTime: 2025/09/16 20:57:28
---

## Part 1 数列极限

按顺序排列的一列数

$$
a_1, a_2, \cdots, a_n, \cdots
$$
称为一个数列，记为  $\{a_n\}$ 。 $a_n$  称为该数列的第  $n$  项，有时也称为一般项或通项。作为集合，如果

$$
\{a_n \mid n = 1, 2, \cdots\}
$$
是有界的，则称数列  $\{a_n\}$  是有界的，此时存在  $M$ ，使得

$$
|a_n| \leqslant M, \quad \forall n \geqslant 1.
$$
通过考察当  $n$  变大时数列一般项  $a_n$  的变化趋势，我们就得到了数列极限的概念。

### · 定义

**定义1**：数列极限

> 设  $\{a_n\}$  为数列， $A \in \mathbb{R}$ 。如果任给  $\varepsilon > 0$ ，都存在正整数  $N = N(\varepsilon)$ ，使得当  $n > N$  时，有
> $$
> |a_n - A| < \varepsilon,
> $$
> 则称  $\{a_n\}$  以  $A$  为极限，或称  $\{a_n\}$  收敛于  $A$ ，记为
>
> $$
> \lim_{n \to \infty} a_n = A \text{ or } a_n \to A (n \to \infty).
> $$
>
> > 从直观上看，如果将数列看成实数轴上的一列点，则极限就是这样一个点，当  $n$  越来越大时， $a_n$  越来越靠近这个点。
> >
> > 为了用准确的数学语言来代替“越来越靠近”和“当  $n$  越来越大”这样的描述性语言，我们要用到定义中的  $\varepsilon$  和  $N$ ，这里的  $N$  一般是依赖于给定的  $\varepsilon$  的。这种定义极限的方法也称为  $\varepsilon - N$  语言法。
> >
> > 按照定义，我们也可以这样来描述极限： $\lim_{n \to \infty} a_n = A$  当且仅当对于任意  $\varepsilon > 0$ ，数列  $\{a_n\}$  只有至多有限项位于区间  $(A - \varepsilon, A + \varepsilon)$  之外。
> >
> > 因此，如果存在  $\varepsilon_0 > 0$ ，使得  $\{a_n\}$  中有无限项位于区间  $(A - \varepsilon_0, A + \varepsilon_0)$  之外，则数列  $\{a_n\}$  不以  $A$  为极限（这时该数列的极限可能不存在，如果存在则极限也不等于  $A$ ）。
> >
> > 当然，我们也可以用  $\varepsilon - N$  语言给出数列  $\{a_n\}$  不以  $A$  为极限的定义：如果存在  $\varepsilon_0 > 0$ ，使得任给正数  $N$ ，均存在  $n_0 > N$  满足不等式  $|a_{n_0} - A| \geqslant \varepsilon_0$ ，则  $\{a_n\}$  不以  $A$  为极限。

**定义理解**：

> (1). $\varepsilon$ 的任意性：
>
> > 定义中 $\forall\varepsilon > 0$ ，指的是一切正数。限制 $0 < \varepsilon < 1$ ，但是，不能限制 $\varepsilon$ 大于某个正数。
>
> (2). $N$ 的相应性：
>
> > 先有 $\varepsilon$ ，再确定 $N$ ，使 $n > N$ 时，都有 $|a_{n}-a|<\varepsilon$ 成立。找到一个 $N$ ，就能找到无数个 $N$ ，$n > N$ 可以改成 $n \geq N$ 。$\varepsilon$ 可以换成 $\varepsilon^{2}$ ，$\sqrt{\varepsilon}$ ，不能换成 $\varepsilon + 1$ ，$|a_{n}-a|<\varepsilon$ 可以改成 $|a_{n}-a|\leq\varepsilon$ 。
>
> (3). 几何意义：
>
> > $\lim_{n \to \infty}a_{n}=a$ ，即 $\forall\varepsilon > 0$ ，$\exists N$ ，当 $n > N$ 时，都有 $|a_{n}-a|<\varepsilon$ 。
> >
> > $$
> > \begin{align*}
> > |a_{n}-a|<\varepsilon&\Leftrightarrow -\varepsilon < a_{n}-a < \varepsilon\\
> > &\Leftrightarrow a - \varepsilon < a_{n}< a + \varepsilon\\
> > &\Leftrightarrow a_{n}\in(a - \varepsilon,a + \varepsilon)\triangleq U(a,\varepsilon)
> > \end{align*}
> > $$
> >
> > 对于 $a$ 的任何 $\varepsilon$ 邻域 $U(a,\varepsilon)$ ，在外部仅有数列的有限项，其余项统统在邻域内。

**命题1**. 如果数列  $\{a_n\}$  有极限，则其极限是惟一的。

> /proof/
>
> 如果数列  $\{a_n\}$  既以  $A$  为极限，又以  $B$  为极限，则任给  $\varepsilon > 0$ ，存在  $N_1, N_2$ ，使得当  $n > N_1$  时
>
> $$
> |a_n - A| < \varepsilon,
> $$
> 当  $n > N_2$  时
>
> $$
> |a_n - B| < \varepsilon.
> $$
> 因此，当  $n > \max\{N_1, N_2\}$  时，有
>
> $$
> 2\varepsilon > |a_n - A| + |a_n - B| \geqslant |A - B|.
> $$
> 如果  $A \neq B$ ，则对于  $\varepsilon = \frac{|A - B|}{2}$ ，上式不可能成立，因此只能  $A = B$ 

如果数列没有极限，则称它是发散的。讨论数列的收敛与发散的问题简称为数列的敛散性问题。从定义不难看出，改变数列的有限项的值不改变其敛散性，如果收敛的话也不改变极限的值。

下面给出几个例题来论述如何证明极限存在性：

/example/ 设 $|q| < 1$，则
$$
\lim_{n \to \infty} q^n = 0
$$

> /proof/
>
> $q = 0$ 时结论显然成立。设 $0 < |q| < 1$，任给定 $\varepsilon > 0$，取正整数 $N > \log_{|q|} \varepsilon$，则当 $n > N$ 时，
> $$
> |q^n - 0| = |q|^n < |q|^N < \varepsilon,
> $$
> 因此 $\lim_{n \to \infty} q^n = 0$。
>
> 上面的这个证明用到了对数函数的性质。下面我们还可以用更初等的不等式估计的办法另给一个证明如下：当 $0 < |q| < 1$ 时，$\frac{1}{|q|} > 1$。记 $\alpha = \frac{1}{|q|} - 1 > 0$。任给 $\varepsilon > 0$，取正整数 $N > \frac{1}{\alpha \varepsilon}$，当 $n > N$ 时，
>
> $$
> |q^n - 0| = |q|^n = \frac{1}{(1 + \alpha)^n} < \frac{1}{n\alpha} < \varepsilon,
> $$
> 其中，我们用到不等式
>
> $$
> (1 + \alpha)^n = 1 + n\alpha + \frac{1}{2}n(n - 1)\alpha^2 + \cdots + \alpha^n > n\alpha.
> $$
> 这说明 $\lim_{n \to \infty} q^n = 0$ .

/example/ 设 $\alpha > 0$，则 $\lim_{n \to \infty} \frac{1}{n^\alpha} = 0$。

> /proof/
>
> 任给定 $\varepsilon > 0$，取 $N > \frac{1}{\varepsilon^\alpha}$，当 $n > N$ 时
>
> $$
> \left|\frac{1}{n^\alpha} - 0\right| = \frac{1}{n^\alpha} < \frac{1}{N^\alpha} < \varepsilon,
> $$
> 由定义
> $$
> \lim_{n \to \infty} \frac{1}{n^\alpha} = 0
> $$

/example/. 设 $q > 0, \ q \neq 1$。则
$$
\lim_{n \to \infty} \frac{1}{\log_q n} = 0
$$

> /proof/
>
> 不妨设 $q > 1$。任给定 $\varepsilon > 0$，取 $N > q^{\frac{1}{\varepsilon}}$，则当 $n > N$ 时
>
> $$
> \left|\frac{1}{\log_q n} - 0\right| = \frac{1}{\log_q n} < \frac{1}{\log_q N} < \varepsilon,
> $$

因此 $\lim_{n \to \infty} \frac{1}{\log_q n} = 0$。

/example/ 设 $C$ 为常数，如果 $\lim_{n \to \infty} a_n = 0$，则 $\lim_{n \to \infty} C a_n = 0$。

> /proof/
>
> 任给定 $\varepsilon > 0$，记 $\varepsilon_0 = \frac{\varepsilon}{|C| + 1}$。因为 $\lim_{n \to \infty} a_n = 0$，故存在 $N$，当 $n > N$ 时
>
> $$
> |a_n| < \varepsilon_0,
> $$
> 从而当 $n > N$ 时，有
>
> $$
> |Ca_n| = |C||a_n| \leqslant |C|\varepsilon_0 < \varepsilon,
> $$
> 因此 $\lim_{n \to \infty} Ca_n = 0$。

### · 夹逼定理

/Theorem/ 设  $\{a_n\} , \{b_n\}, \{c_n\}$  均为数列，且

$$
a_n \leqslant b_n \leqslant c_n, \quad \forall n \geqslant N_0,
$$
其中  $N_0$  为一正整数。如果

$$
\lim_{n \to \infty} a_n = A = \lim_{n \to \infty} c_n,
$$
则  $\lim_{n \to \infty} b_n = A$ 。

> /proof/
>
> 任给  $\varepsilon > 0$ ，因为  $\{a_n\}$  和  $\{c_n\}$  均收敛到  $A$ ，故存在  $N_1, N_2$ ，当  $n > N_1$  时
> $$
> A - \varepsilon < a_n < A + \varepsilon,
> $$
> 当  $n > N_2$  时
>
> $$
> A - \varepsilon < c_n < A + \varepsilon.
> $$
> 取  $N = \max\{N_0, N_1, N_2\}$ ，则当  $n > N$  时，由于  $a_n \leqslant b_n \leqslant c_n$ ，我们就有
>
> $$
> A - \varepsilon < a_n \leqslant b_n \leqslant c_n < A + \varepsilon,
> $$
> 这说明  $\lim_{n \to \infty} b_n = A$ 。
>
> > 如果  $|a_n| \leqslant b_n$ ，则  $\lim_{n \to \infty} b_n = 0$  时  $\lim_{n \to \infty} a_n = 0$ 。这只要注意到夹逼不等式  $-b_n \leqslant a_n \leqslant b_n$  即可。

/example/ 考虑无限循环小数  $A = 0.999999$ ，问：$A$  是否小于 1？

> 要比较大小，必须先说清楚  $A$  是一个什么样的实数。作为小数， $A$  有无限位非零，一个合理的看法就是， $A$  应被视为一列有限小数  $\{a_n\}$  的极限，其中
>
> $$
> a_n = 0.99\cdots 9
> $$
>  由于
> $$
> |a_n - 1| = 10^{-n},
> $$
> 根据夹逼进原理， $\{a_n\}$  收敛到 1。因为极限具有惟一性，这说明  $A = 1$ 。
>
> 直观上看，似乎  $A$  总应该比 1 小才对。
>
> 然而，这种直观上得来的经验只对有限小数有效，对于无限的情形往往要用极限来处理才行。

/example/ 设  $0 < \alpha < 1$ ，证明  $\lim_{n \to \infty} [(n + 1)^\alpha - n^\alpha] = 0$ 。

> 当  $n \geq 1$  时，有
>
> $$
> 0 < (n + 1)^\alpha - n^\alpha = n^\alpha [(1 + \frac{1}{n})^\alpha - 1] \leqslant n^\alpha [(1 + \frac{1}{n})^\alpha - 1] = \frac{1}{n^{1 - \alpha}}.
> $$
> 根据前面的例子和夹进原理即知
> $$
> \lim_{n \to \infty} [(n + 1)^\alpha - n^\alpha] = 0
> $$

/example/. 设  $\alpha > 0, a > 1$ ，则  $\lim_{n \to \infty} \frac{n^\alpha}{a^n} = 0$ 。

> /proof/
>
> 记  $a^{\frac{1}{\alpha}} = 1 + \beta, \beta > 0$ 。由于  $n > 1$  时，有
>
> $$
> (1 + \beta)^n = 1 + n\beta + \frac{1}{2}n(n - 1)\beta^2 + \cdots + \beta^n > \frac{1}{2}n(n - 1)\beta^2,
> $$
> 故
>
> $$
> 0 < \frac{n^\alpha}{a^n} = [(1 + \beta)^n]^\alpha < [(\frac{2}{(n - 1)\beta^2}]^\alpha,
> $$
> 由夹进原理和前面的例子即知
> $$
> \lim_{n \to \infty} \frac{n^\alpha}{a^n} = 0
> $$

/example/. 设  $a > 0$ ，则
$$
\lim_{n \to \infty} \frac{a^n}{n!} = 0
$$

> /proof/
>
> 取正整数  $N_0 > |a|$ ，则当  $n > N_0$  时，有
>
> $$
> \left|\frac{a^n}{n!}\right| = \frac{|a|^{N_0}}{N_0!} \frac{|a|}{N_0 + 1} \cdots \frac{|a|}{n} \leqslant \frac{|a|^{N_0}}{N_0!} \frac{|a|}{n},
> $$
> 由夹进原理即知
> $$
> \lim_{n \to \infty} \frac{a^n}{n!} = 0
> $$

/example/ 任何实数都是某个有理数列的极限。

> 设  $A$  为实数。如果  $A$  为有理数，则令  $a_n = A (n \geqslant 1)$  即可。如果  $A$  为无理数，令
>
> $$
> a_n = \frac{[nA]}{n}, \quad \forall n \geqslant 1.
> $$
> 其中  $[x]$  表示不超过  $x$  的最大整数，因此  $a_n$  都是有理数。因为  $A$  不是有理数，故
>
> $$
> nA - 1 < [nA] < nA, \quad \forall n \geqslant 1.
> $$
> 即
>
> $$
> A - \frac{1}{n} < a_n = \frac{[nA]}{n} < A, \quad \forall n \geqslant 1.
> $$
> 由夹进原理知
> $$
> \lim_{n \to \infty} a_n = A
> $$

### · 基本性质

为了更好地判断数列极限的存在性和计算数列极限, 我们来研究数列极限的基本性质

**命题3** (有界性)：设数列  $\{a_n\}$  收敛，则  $\{a_n\}$  有界。

> /proof/
>
> 设  $\{a_n\}$  收敛到  $A$ 。取  $\varepsilon = 1$ ，则由极限定义，存在  $N$ ，当  $n > N$  时
> $$
> |a_n - A| \leqslant 1,
> $$
> 即
>
> $$
> |a_n| \leqslant |A| + 1, \quad \forall n > N.
> $$
> 令
>
> $$
>  M = \max\{ |a_i| (1 \leqslant i \leqslant N), |A| + 1\},
> $$
> 则
> $$
> |a_n| \leqslant M, \forall n \geqslant 1
> $$
>
> > 由此命题立知，无界数列必定发散。对于无界数列，我们有时也可以考察其变化趋势。为此，设  $\{a_n\}$  为数列，如果任给  $A > 0$ ，均存在  $N$  使得当  $n > N$  时， $a_n > A$ ，则称  $\{a_n\}$  发散到  $+\infty$ ，或称  $\{a_n\}$  的极限为  $+\infty$ ，记为
> >
> > $$
> > \lim_{n \to \infty} a_n = +\infty, \text{ or } a_n \to +\infty (n \to \infty).
> > $$
> > 类似地，如果任给  $A < 0$ ，均存在  $N$  使得当  $n > N$  时， $a_n < A$ ，则称  $\{a_n\}$  发散到  $-\infty$ ，或称  $\{a_n\}$ 的极限为  $-\infty$ ，记为
> >
> > $$
> > \lim_{n \to \infty} a_n = -\infty, \text{ or } a_n \to -\infty (n \to \infty).
> > $$
> > 如果  $\{a_n\}$  发散到  $+\infty$ ，则称  $\{a_n\}$ 发散到  $\infty$ ，记为
> >
> > $$
> > \lim_{n \to \infty} a_n = \infty, \text{ or } a_n \to \infty (n \to \infty).
> > $$

**命题4**：(绝对值性质) 设数列  $\{a_n\}$  收敛到  $A$ ，则  $\{|a_n|\}$  收敛到  $|A|$ 。

> /proof/
>
> 设  $\lim_{n \to \infty} a_n = A$ ，则任给  $\varepsilon > 0$ ，存在  $N$ ，当  $n > N$  时
> $$
> |a_n - A| < \varepsilon,
> $$
> 从而
>
> $$
> ||a_n| - |A|| \leq |a_n - A| < \varepsilon, \quad \forall n > N.
> $$
> 即  $\lim_{n \to \infty} |a_n| = |A|$ 。

**推论5**. 数列  $\{a_n\}$  收敛到 0 当且仅当  $|a_n|$  收敛到 0；数列  $\{a_n\}$  收敛到  $A$  当且仅当  $|a_n - A|$  收敛到 0。

**命题6**：(保序性质)

设数列  $\{a_n\}$  收敛到  $A$ ，$\{b_n\}$  收敛到  $B$ ，则有

(1) 如果存在  $N_0$ ，当  $n > N_0$  时  $a_n \geqslant b_n$ ，则  $A \geqslant B$ ;

(2) 反之，如果  $A > B$ ，则存在  $N$ ，使得当  $n > N$  时  $a_n > b_n$ 。

> /proof/
>
> (1) 任给  $\varepsilon > 0$ ，存在  $N_1, N_2$ ，使得
>
> $$
> |a_n - A| < \varepsilon, \forall n > N_1; \quad |b_n - B| < \varepsilon, \forall n > N_2.
> $$
> 令  $N = \max\{N_0, N_1, N_2\}$ ，则  $n > N$  时，有
>
> $$
> A - B = (A - a_n) + (a_n - b_n) + (b_n - B) \geqslant (A - a_n) + (b_n - B) \geqslant (A - a_n) + (b_n - B) \geqslant -2\varepsilon,
> $$
> 因为  $\varepsilon$  是任意取的，上式表明  $A - B \geqslant 0$ ，即  $A \geqslant B$ 。
>
> (2) 如果  $A > B$ ，取  $\varepsilon = \frac{A - B}{2} > 0$ ，则存在  $N_1, N_2$ ，使得
>
> $$
> |a_n - A| < \varepsilon, \forall n > N_1; \quad |b_n - B| < \varepsilon, \forall n > N_2.
> $$
> 令  $N = \max\{N_1, N_2\}$ ，则  $n > N$  时，有
>
> $$
> a_n - b_n = (a_n - A) + (A - B) + (B - b_n) > -\varepsilon + (A - B) - \varepsilon = 0,
> $$
> 即  $a_n > b_n, \forall n > N$ 

**推论7**. 设  $\lim_{n \to \infty} a_n = A$ ，如果  $A \neq 0$ ，则存在  $N$ ，使得当  $n > N$  时，有

$$
\frac{1}{2}|A| < |a_n| < \frac{3}{2}|A|.
$$

> /proof/
>
> 由极限的绝对值性质，有
>
>
> $$
> \frac{1}{2}|A| < \lim_{n \to \infty} |a_n| = |A| < \frac{3}{2}|A|,
> $$
>
> 再由极限的保序性质即得欲证结论。

**命题8** (四则运算)：设数列  $\{a_n\}$  收敛到  $A$ ， $\{b_n\}$  收敛到  $B$ ，则有

(1).  $\{ \alpha a_n + \beta b_n \}$  收敛到  $\alpha A + \beta B$ ，其中  $\alpha, \beta$  为常数；

(2).  $\{ a_n b_n \}$  收敛到  $AB$ ；

(3).  当  $B \neq 0$  时， $\{ a_n / b_n \}$  收敛到  $A / B$ 。

> /proof/
>
> (1). 任给  $\varepsilon > 0$ ，存在  $N_1, N_2$ ，使得
> $$
> |a_n - A| < \frac{\varepsilon}{2|\alpha| + 1}, \quad \forall n > N_1; \quad |b_n - B| < \frac{\varepsilon}{2|\beta| + 1}, \quad \forall n > N_2.
> $$
> 令  $N = \max\{N_1, N_2\}$ ，则  $n > N$  时，有
>
> $$
> |(\alpha a_n + \beta b_n) - (\alpha A + \beta B)| \leq |\alpha||a_n - A| + |\beta||b_n - B|
> $$
>
> $$
> \leq |\alpha| \frac{\varepsilon}{2|\alpha| + 1} + |\beta| \frac{\varepsilon}{2|\beta| + 1}
> $$
>
> $$
> < \frac{1}{2} \varepsilon + \frac{1}{2} \varepsilon = \varepsilon.
> $$
>
> 这说明  $\lim_{n \to \infty} (\alpha a_n + \beta b_n) = \alpha A + \beta B$ 。
>
> (2). 利用极限的有界性质，存在  $M$ ，使得
> $$
> |b_n| \leq M, \quad \forall n \geq 1.
> $$
> 因此有
>
> $$
> 0 \leq |a_n b_n - AB| = |(a_n - A)b_n + A(b_n - B)| \leq M|a_n - A| + |A||b_n - B|,
> $$
> 利用 (1) 和夹逼原理即知  $\lim_{n \to \infty} a_n b_n = AB$ 。
>
> (3). 根据 (2)，我们只要证明  $\lim_{n \to \infty} \frac{1}{b_n} = \frac{1}{B}$  即可。根据极限保序性质的推论，存在  $N$ ，当  $n > N$  时， $|b_n| > \frac{|B|}{2}$ 。因此
> $$
> 0 \leq \left|\frac{1}{b_n} - \frac{1}{B}\right| = \frac{|b_n - B|}{|b_n||B|} \leq \frac{2}{|B|^2}|b_n - B|, \quad \forall n > N.
> $$
> 由夹逼原理即知  $\lim_{n \to \infty} \frac{1}{b_n} = \frac{1}{B}$ 。

下面我们引入数列的子列的概念，并研究数列的极限和其子列的极限之间的关系。设


$$
a_1, a_2, \cdots, a_n, \cdots
$$

是数列，如果


$$
1 \leq n_1 < n_2 < \cdots < n_k < \cdots
$$

是一列严格递增的正整数，则称数列


$$
a_{n_1}, a_{n_2}, \cdots, a_{n_k}, \cdots
$$

为原数列  $\{a_n\}$  的子列，记为  $\{a_{n_k}\}$ 。两个特殊的子列  $\{a_{2k}\}$  和  $\{a_{2k-1}\}$  分别称为偶子列与奇子列。

**命题9**.

1. 设  $\{a_n\}$  收敛到  $A$ ，则它的任何子列  $\{a_{n_k}\}$  也收敛到  $A$ .
2. 如果  $\{a_n\}$  的偶子列与奇子列均收敛到  $A$ ，则  $\{a_n\}$  也收敛到  $A$ .

## Part 2 单调数列极限

在一般情况下，数列极限无法确切地计算出来，并且有时我们也不需要知道极限的准确值，只需判断极限是否存在以及了解极限的一个基本性质即可。

现在我们就给出一种特殊情况下数列极限存在性的判别法，它依赖于实数的一个基本性质，即在第一章中我们已经提到过的**确界原理**：非空的数集如果有上界则必有上确界，如果有下界则必有下确界。

设 $\{a_n\}$ 为实数列，如果
$$
a_1 \leq a_2 \leq \cdots \leq a_n \leq \cdots,
$$
则称 $\{a_n\}$ 是单调递增数列，当上式中的“$\leq$”号换成“$<$”号时称 $\{a_n\}$ 是严格单调递增的；如果
$$
a_1 \geq a_2 \geq \cdots \geq a_n \geq \cdots,
$$
则称 $\{a_n\}$ 是单调递减数列，当上式中的“$\geq$”号换成“$>$”号时称 $\{a_n\}$ 是严格单调递减的；单调递增数列和单调递减数列统称为单调数列。

### · 单调数列的极限

**定理1**：设 $\{a_n\}$ 为单调数列。

(1) 如果 $\{a_n\}$ 为单调递增数列，则
$$
\lim_{n \to \infty} a_n = \sup\{a_k \mid k \geq 1\};
$$

(2) 如果 $\{a_n\}$ 为单调递减数列，则
$$
\lim_{n \to \infty} a_n = \inf\{a_k \mid k \geq 1\}.
$$

> (1) 记 $M = \sup\{a_k \mid k \geq 1\}$，先考虑 $M$ 有限的情形。任给 $\varepsilon > 0$，由上确界的定义，存在 $a_N$，使得
> $$
> M - \varepsilon < a_N \leq M.
> $$
> 因为 $\{a_n\}$ 是单调递增数列，故当 $n > N$ 时
> $$
> M - \varepsilon < a_N \leq a_n \leq M < M + \varepsilon,
> $$
> 由数列极限的定义即知
> $$
> \lim_{n \to \infty} a_n = M = \sup\{a_k \mid k \geq 1\}.
> $$
>
> 如果 $M = +\infty$，则任给 $A > 0$，由上确界的定义，存在 $a_N$，使得 $a_N > A$。由于 $\{a_n\}$ 是单调递增数列，故当 $n > N$ 时有 $a_n \geq a_N > A$，从而
> $$
> \lim_{n \to \infty} a_n = +\infty = \sup\{a_k \mid k \geq 1\}.
> $$
>
> (2) 可同 (1) 一样类似证明，也可考虑 $\{-a_n\}$ 然后直接利用 (1)。

### · 单调有界定理

从定理立即得到下面的推论：

**推论2**：单调有界数列必有（有限）极限。

/example/  任何收敛数列都有单调的收敛子列。

> 设 $\{a_n\}$ 收敛到 $A$。如果 $\{a_n\}$ 中有无限项等于 $A$，则它们构成了所需单调子列。
>
> 否则，考虑 $\{a_n\}$ 中下面两类项：一类满足条件 $a_n < A$，另一类满足条件 $a_n > A$。这两类中至少有一类含有无限项，不妨设含有无限项 $\{a_n\}$ 满足条件 $a_n < A$，他们构成了一个收敛子列。
>
> 为了简单起见，下面我们假设 $a_n < A,\ \forall\ n \geq 1$。我们要从 $\{a_n\}$ 中找一个单调递增的子列出来。
>
> 这个子列可以这样构造：取 $n_1 = 1$。由于 $\lim_{n \to \infty} a_n = A$，故存在 $n_2 > n_1 = 1$，使得 $a_{n_2} \in (a_1, A)$。同理，存在 $n_3 > n_2$，使得 $a_{n_3} \in (a_{n_2}, A)$。如此继续，我们就找到了（严格）单调递增的子列 $\{a_{n_k}\}$。

/example/  设 $a_1 = 1$, $a_{n+1} = \dfrac{1}{1 + a_n},\ n \geq 1$。研究数列 $\{a_n\}$ 的极限。

> 利用数学归纳法易见 $\dfrac{1}{2} \leq a_n \leq 1$，并且 $\{a_{2k-1}\}$ 单调递减，$\{a_{2k}\}$ 单调递增，因此它们都是收敛的，极限分别记为 $A, B$，则
> $$
> B = \lim_{k \to \infty} a_{2k} = \lim_{k \to \infty} \frac{1}{1 + a_{2k-1}} = \frac{1}{1 + A},
> $$
>
> $$
> A = \lim_{k \to \infty} a_{2k+1} = \lim_{k \to \infty} \frac{1}{1 + a_{2k}} = \frac{1}{1 + B}.
> $$
>
> 从上式解出唯一的正解 $A = B = \dfrac{\sqrt{5} - 1}{2}$，因此 $\{a_n\}$ 的极限为 $\dfrac{\sqrt{5} - 1}{2}$。
>
> 下面我们讨论本课程中的一个重要极限。考虑
> $$
> a_n = \left(1 + \frac{1}{n}\right)^n,\quad b_n = \left(1 + \frac{1}{n}\right)^{n+1},\quad n \geq 1.
> $$
> 我们来说明 $\{a_n\}$ 是严格单调递增的，$\{b_n\}$ 是严格单调递减的。事实上，
> $$
> \begin{aligned}
> a_n &= \left(1 + \frac{1}{n}\right)^n = \sum_{k=0}^{n} \binom{n}{k} \frac{1}{n^k} \\
> &= 1 + \sum_{k=1}^{n} \frac{n(n-1)\cdots(n-k+1)}{k!} \cdot \frac{1}{n^k} \\
> &= 1 + 1 + \frac{1}{2!}\left(1 - \frac{1}{n}\right) + \cdots + \frac{1}{n!}\left(1 - \frac{1}{n}\right)\cdots\left(1 - \frac{n-1}{n}\right) \\
> &< 1 + 1 + \frac{1}{2!}\left(1 - \frac{1}{n+1}\right) + \cdots + \frac{1}{n!}\left(1 - \frac{1}{n+1}\right)\cdots\left(1 - \frac{n-1}{n+1}\right) \\
> &\quad + \frac{1}{(n+1)!}\left(1 - \frac{1}{n+1}\right)\cdots\left(1 - \frac{n}{n+1}\right) \\
> &= a_{n+1}.
> \end{aligned}
> $$
> 这说明 $\{a_n\}$ 严格递增。另一方面，当 $n > 1$ 时，有
> $$
> \begin{aligned}
> 0 < a_n &< 1 + 1 + \sum_{k=2}^{n} \frac{1}{k!} \\
> &\leq 2 + \sum_{k=2}^{n} \frac{1}{(k-1)k} \\
> &= 2 + \sum_{k=2}^{n} \left(\frac{1}{k-1} - \frac{1}{k}\right) = 3 - \frac{1}{n} < 3.
> \end{aligned}
> $$
> 因此 $\{a_n\}$ 收敛，其极限记为 $e$，称为自然对数的基底。我们在第五章第七节中将证明这是一个无理数，计算表明（关于近似计算，请参考本书第五章第八节以及第九章第四节）：
>
> $$
> e = 2.7182818284590\cdots.
> $$
>
> 另一方面，由
> $$
> \left(1 + \frac{1}{n-1}\right)^n = \left(1 + \frac{1}{n^2 - 1}\right)^n > 1 + \frac{n}{n^2 - 1} > 1 + \frac{1}{n}
> $$
> 得
> $$
> b_{n-1} = \left(1 + \frac{1}{n-1}\right)^n > \left(1 + \frac{1}{n}\right)^{n+1} = b_n,
> $$
> 即 $\{b_n\}$ 严格单调递减，且
> $$
> \lim_{n \to \infty} b_n = \lim_{n \to \infty} a_n \left(1 + \frac{1}{n}\right) = \lim_{n \to \infty} a_n = e.
> $$
>
> 因此有下面的不等式：
> $$
> \left(1 + \frac{1}{n}\right)^n < \left(1 + \frac{1}{n+1}\right)^{n+1} < e < \left(1 + \frac{1}{n+1}\right)^{n+2} < \left(1 + \frac{1}{n}\right)^{n+1},\quad \forall\, n \geq 1.
> $$
>

下面，我们利用单调数列来研究一般的有界数列。设 $\{a_n\}$ 为有界数列，我们要研究它的收敛性。我们不知道 $a_n$ 是否逐渐趋于某个数，一个好的想法就是去考虑 $n$ 很大时 $\{a_n\}$ 中“最大”的项和“最小”的项，看看它们是否相近。当然，“最大”和“最小”项不一定存在，但我们可以用“上确界”和“下确界”来分别代替它们。为此，令
$$
\underline{a}_n = \inf\{a_k \mid k \geq n\},\quad \overline{a}_n = \sup\{a_k \mid k \geq n\}.
$$

 $\{\underline{a}_n\}$ 和 $\{\overline{a}_n\}$ 分别是单调递增和单调递减的数列，且
$$
\underline{a}_n \leq a_n \leq \overline{a}_n.
$$

单调数列 $\{\underline{a}_n\}$ 和 $\{\overline{a}_n\}$ 的极限分别称为 $\{a_n\}$ 的**下极限**和**上极限**，记为
$$
\liminf_{n \to \infty} a_n = \lim_{n \to \infty} \underline{a}_n,\quad \limsup_{n \to \infty} a_n = \lim_{n \to \infty} \overline{a}_n.
$$

**命题4**：设 $\{a_n\}, \{b_n\}$ 为有界数列。

(1) 如果存在 $N_0$，当 $n > N_0$ 时 $a_n \geq b_n$，则
$$
\lim_{n \to \infty} a_n \geq \liminf_{n \to \infty} b_n,\quad \limsup_{n \to \infty} a_n \geq \limsup_{n \to \infty} b_n;
$$

(2)
$$
\limsup_{n \to \infty} (a_n + b_n) \leq \limsup_{n \to \infty} a_n + \limsup_{n \to \infty} b_n.
$$

> (1) 当 $n > N_0$ 时，
> $$
> b_n \leq b_k \leq a_k,\quad \forall\, k \geq n.
> $$
> 关于 $k$ 取下确界，得
> $$
> b_n \leq \underline{a}_n,\quad \forall\, n > N_0.
> $$
> 由极限的保序性即得
> $$
> \liminf_{n \to \infty} b_n \leq \liminf_{n \to \infty} a_n.
> $$
> 上极限的情形可类似证明。
>
> (2) 利用不等式 $a_n + b_n \leq \overline{a}_n + \overline{b}_n$ 以及极限的保序性即可

## Part 3 Cauchy 准则

在前一节我们对于单调数列给出了极限存在性的判别方法。现在我们对一般的数列给出极限存在与否的一个判别方法，基本的想法与考虑上下极限时是类似的：如果 $a_n$ 逐渐趋于某个数，则 $n$ 很大时 $a_n$ 之间的差别应该很小。为此我们引入下面的定义。

### · Cauchy 数列

**定义1**：设 $\{a_n\}$ 为数列，如果任给 $\varepsilon > 0$，均存在 $N = N(\varepsilon)$，当 $m, n > N$ 时，有
$$
|a_m - a_n| < \varepsilon,
$$
则称 $\{a_n\}$ 为 **Cauchy 数列** 或 **基本列**。

/example/  对于 $n \geq 1$，定义
$$
a_n = 1 + \frac{1}{2\sqrt{2}} + \cdots + \frac{1}{n\sqrt{n}},
$$
则 $\{a_n\}$ 是 Cauchy 列。

> /proof/
>
> 首先我们注意到不等式
> $$
> \frac{1}{\sqrt{n}} - \frac{1}{\sqrt{n+1}} = \frac{\sqrt{n+1} - \sqrt{n}}{\sqrt{n(n+1)}} = \frac{1}{\sqrt{n(n+1)}\,(\sqrt{n+1} + \sqrt{n})} > \frac{1}{2(n+1)\sqrt{n+1}},
> $$
> 因此，当 $m > n$ 时，
> $$
> \begin{aligned}
> a_m - a_n &= \frac{1}{(n+1)\sqrt{n+1}} + \cdots + \frac{1}{m\sqrt{m}} \\
> &< 2\left(\frac{1}{\sqrt{n}} - \frac{1}{\sqrt{n+1}}\right) + 2\left(\frac{1}{\sqrt{n+1}} - \frac{1}{\sqrt{n+2}}\right) + \cdots \\
> &= \frac{2}{\sqrt{n}} - \frac{2}{\sqrt{m}} < \frac{2}{\sqrt{n}}.
> \end{aligned}
> $$
>
> 由此可以看出 $\{a_n\}$ 是 Cauchy 列。

**命题2**：Cauchy 数列必定是有界数列。

> /proof/
>
> 按定义，取 $\varepsilon = 1$，则存在 $N$，当 $m, n > N$ 时，有
> $$
> |a_m - a_n| < 1.
> $$
>
> 令
> $$
> M = \max\left\{|a_k| + 1 \,\middle|\, 1 \leq k \leq N + 1\right\},
> $$
> 则当 $n \leq N$ 时显然 $|a_n| \leq M$；而当 $n > N$ 时，有
> $$
> |a_n| \leq |a_n - a_{N+1}| + |a_{N+1}| < 1 + |a_{N+1}| \leq M,
> $$
> 这说明 $\{a_n\}$ 是有界数列

下面的定理是本节主要结果，它反映了实数系的完备性质。

### · Cauchy 准则

**定理3**：（Cauchy 准则）

$\{a_n\}$ 为 Cauchy 数列当且仅当它是收敛的。

> /proof/
>
> **充分性**：设 $\{a_n\}$ 收敛到 $A$。则任给 $\varepsilon > 0$，存在 $N$，当 $n > N$ 时，有
> $$
> |a_n - A| < \frac{1}{2}\varepsilon,
> $$
> 因此，当 $m, n > N$ 时，有
> $$
> |a_m - a_n| \leq |a_m - A| + |A - a_n| < \frac{1}{2}\varepsilon + \frac{1}{2}\varepsilon = \varepsilon,
> $$
> 这说明 $\{a_n\}$ 为 Cauchy 数列。
>
> **必要性**：设 $\{a_n\}$ 为 Cauchy 数列，由命题 2.3.1，$\{a_n\}$ 是有界数列，记 $A$ 为其上极限。我们来说明 $\{a_n\}$ 收敛到 $A$。
>
> 事实上，由于 $\{a_n\}$ 为 Cauchy 数列，任给 $\varepsilon > 0$，存在 $N$，当 $m, n > N$ 时，有
> $$
> |a_m - a_n| < \frac{1}{2}\varepsilon,
> $$
> 即
> $$
> -\frac{1}{2}\varepsilon < a_m - a_n < \frac{1}{2}\varepsilon,\quad \forall\, m, n > N.
> $$
>
> 在上式中令 $m \to \infty$，利用上极限的保序性，得
> $$
> -\frac{1}{2}\varepsilon \leq \varlimsup_{m \to \infty} a_m - a_n \leq \frac{1}{2}\varepsilon,\quad \forall\, n > N,
> $$
> 即
> $$
> |A - a_n| \leq \frac{1}{2}\varepsilon < \varepsilon,\quad \forall\, n > N,
> $$
> 这说明 $\{a_n\}$ 收敛到 $A$。

(1) Cauchy 列未必是单调数列，例如数列 $\left\{a_n = \dfrac{(-1)^n}{n}\right\}$ 就是这样的例子。

(2) Cauchy 准则的重要性在于，在不了解数列的单调性或极限的具体形式时往往也能判断极限的存在性。以后凡是涉及极限的场合都有相应的 Cauchy 准则。

## Part 4 Stolz 公式

这个定理实际上是 L'Hospital 法则的离散版本，它可以用來处理满足特定条件的两个数列的商的极限

**引理1**：设 $b_k > 0$（$1 \leq k \leq n$），且  
$$
m \leq \frac{a_k}{b_k} \leq M, \quad \forall\, 1 \leq k \leq n,
$$
则有  
$$
m \leq \frac{a_1 + a_2 + \cdots + a_n}{b_1 + b_2 + \cdots + b_n} \leq M.
$$

> /proof/
>
> 由已知条件，得  
> $$
> m b_k \leq a_k \leq M b_k, \quad \forall\, 1 \leq k \leq n.
> $$
>
> 将这些不等式从 $k = 1$ 到 $n$ 加起来，即得  
> $$
> m(b_1 + b_2 + \cdots + b_n) \leq (a_1 + a_2 + \cdots + a_n) \leq M(b_1 + b_2 + \cdots + b_n),
> $$
>
> 由此易得欲证不等式。

**定理2**（Stolz 公式之一）

设 $\{x_n\}, \{y_n\}$ 为数列，且 $\{y_n\}$ 严格单调地趋于 $+\infty$。如果  
$$
\lim_{n \to \infty} \frac{x_n - x_{n-1}}{y_n - y_{n-1}} = A,
$$
则  
$$
\lim_{n \to \infty} \frac{x_n}{y_n} = A.
$$

> /proof/
>
> 分情况讨论
>
> **(1)** $A$ 为有限实数。任给 $\varepsilon > 0$，由已知条件，存在 $N$，当 $n > N$ 时，有  
> $$
> A - \varepsilon < \frac{x_n - x_{n-1}}{y_n - y_{n-1}} < A + \varepsilon.
> $$
>
> 利用上面的引理，当 $n > N$ 时，有  
> $$
> A - \varepsilon < \frac{x_n - x_N}{y_n - y_N} = \frac{(x_n - x_{n-1}) + \cdots + (x_{N+1} - x_N)}{(y_n - y_{n-1}) + \cdots + (y_{N+1} - y_N)} < A + \varepsilon,
> $$
>
> 从而有  
> $$
> \left| \frac{x_n}{y_n} - A \right| = \left| \left( \frac{x_n - x_N}{y_n - y_N} - A \right) \frac{y_n - y_N}{y_n} + \frac{x_N - A y_N}{y_n} \right| \leq \varepsilon + \frac{|x_N - A y_N|}{|y_n|}.
> $$
>
> 在上式中令 $n \to \infty$，利用 $y_n \to +\infty$，得  
> $$
> \varlimsup_{n \to \infty} \left| \frac{x_n}{y_n} - A \right| \leq \varepsilon,
> $$
>
> 因为 $\varepsilon$ 是任意取的，故有  
> $$
> \lim_{n \to \infty} \left| \frac{x_n}{y_n} - A \right| \leq \lim_{n \to \infty} \left| \frac{x_n}{y_n} - A \right| = 0,
> $$
>
> 这说明  
> $$
> \lim_{n \to \infty} \frac{x_n}{y_n} = A.
> $$
>
> **(2)** $A = +\infty$。此时，存在 $N$，当 $n > N$ 时  
> $$
> \frac{x_n - x_{n-1}}{y_n - y_{n-1}} > 1,
> $$
>
> 即  
> $$
> x_n - x_{n-1} > (y_n - y_{n-1}) > 0, \quad \forall\, n > N.
> $$
>
> 特别地，$n > N$ 时 $\{x_n\}$ 也是严格单调递增的，且  
> $$
> \begin{aligned}
> x_n - x_N &= (x_n - x_{n-1}) + \cdots + (x_{N+1} - x_N) \\
> &> (y_n - y_{n-1}) + \cdots + (y_{N+1} - y_N) = y_n - y_N,
> \end{aligned}
> $$
>
> 由 $y_n \to +\infty$ 得 $x_n \to +\infty$。将 (1) 中 $x_n$ 和 $y_n$ 的位置互换，得  
> $$
> \lim_{n \to \infty} \frac{y_n}{x_n} = \lim_{n \to \infty} \frac{y_n - y_{n-1}}{x_n - x_{n-1}} = \lim_{n \to \infty} \left( \frac{x_n - x_{n-1}}{y_n - y_{n-1}} \right)^{-1} = 0,
> $$
>
> 于是有  
> $$
> \lim_{n \to \infty} \frac{x_n}{y_n} = \lim_{n \to \infty} \left( \frac{y_n}{x_n} \right)^{-1} = +\infty.
> $$
>
> **(3)** $A = -\infty$。这时只要将 $x_n$ 换成 $-x_n$，然后利用 (2) 即可。

**定理3**（Stolz 公式之二）

设数列 $\{y_n\}$ 严格单调递减趋于 $0$，数列 $\{x_n\}$ 也收敛到 $0$。如果  
$$
\lim_{n \to \infty} \frac{x_n - x_{n+1}}{y_n - y_{n+1}} = A,
$$
则  
$$
\lim_{n \to \infty} \frac{x_n}{y_n} = A.
$$

> /proof/
>
> **(1)** $A$ 为有限实数。我们将极限的条件改写为  
> $$
> \lim_{n \to \infty} \frac{x_n - x_{n+1}}{y_n - y_{n+1}} = A.
> $$
>
> 任给 $\varepsilon > 0$，存在 $N$，当 $n > N$ 时，有  
> $$
> A - \varepsilon < \frac{x_n - x_{n+1}}{y_n - y_{n+1}} < A + \varepsilon.
> $$
>
> 和上面定理中 (1) 的证明一样，当 $m > n > N$ 时，有  
> $$
> (A - \varepsilon)(y_n - y_m) \leq (x_n - x_m) \leq (A + \varepsilon)(y_n - y_m).
> $$
>
> 令 $m \to \infty$，得  
> $$
> (A - \varepsilon)y_n \leq x_n \leq (A + \varepsilon)y_n, \quad \forall\, n > N,
> $$
>
> 即  
> $$
> A - \varepsilon \leq \frac{x_n}{y_n} \leq A + \varepsilon, \quad \forall\, n > N,
> $$
>
> 这说明 $x_n / y_n \to A$（$n \to \infty$）。
>
> **(2)** $A = +\infty$。任给 $M > 0$，存在 $N$，当 $n > N$ 时，有  
> $$
> \frac{x_n - x_{n+1}}{y_n - y_{n+1}} > M.
> $$
>
> 类似上面的证明，当 $m > n > N$ 时，有  
> $$
> x_n - x_m > M(y_n - y_m).
> $$
>
> 令 $m \to \infty$，得  
> $$
> x_n > M y_n, \quad \forall\, n > N,
> $$
>
> 即  
> $$
> \frac{x_n}{y_n} > M, \quad \forall\, n > N,
> $$
>
> 这说明 $x_n / y_n \to +\infty$（$n \to \infty$）。
>
> **(3)** $A = -\infty$。将 (2) 中 $x_n$ 换成 $-x_n$ 即可

结束.