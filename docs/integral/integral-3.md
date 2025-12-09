---
title: Chapter 3 实数
permalink: /integral/integral-3/
createTime: 2025/09/16 20:57:28
---

## Part 1 实数系构造

在本节中给出实数集 $\mathbb{R}$ 的一种构造方法。构造出来的对象除了是一个集合外还具有很多基本性质，所以通常又将它称为实数系。我们从有理数 $\mathbb{Q}$ 出发来构造实数。

需要注意的是，自然数、整数以及有理数的建立也是需要严格的数学基础的，不过这对于学习微积分不是至关重要的，因此我们还是从有理数开始，毕竟有理数比较直观。

下面构造实数的方法是 Dedekind 在 1872 年发明的，这种方法以 **Dedekind 分割** 而著称。

**定义1**：设 $\alpha$ 为 $\mathbb{Q}$ 的子集，如果满足以下三个条件：

(1). $\alpha \neq \varnothing$，$\alpha \neq \mathbb{Q}$；

(2). 当 $p \in \alpha$，$q \in \alpha^c$ 时，$p < q$；

(3). 任给 $p \in \alpha$，存在 $q \in \alpha$，使得 $p < q$；

则称 $\alpha$ 为 $\mathbb{Q}$ 的一个**分割**，分割的全体组成的集合记为 $\mathbb{R}$。

> 定义中的条件 (1) 是说 $\alpha$ 为 $\mathbb{Q}$ 的非空真子集，而 (3) 是说 $\alpha$ 中无最大数。这一条不是本质的：如果 $\alpha$ 满足条件 (1) 和 (2)，且有最大数，将此最大数去掉后 $\alpha$ 就是满足所有三个条件的分割了。

**命题1**：设 $\alpha$ 为 $\mathbb{Q}$ 的一个分割，则：

1. 如果 $p < q$，$q \in \alpha$，则 $p \in \alpha$；
2. 设 $w > 0$，则存在整数 $n$，使得 $nw \in \alpha$，$(n+1)w \in \alpha^c$。

> /proof/
>
> **(1)**（反证法）  如果 $p \in \alpha^c$，则由分割定义的第二条即知 $q < p$，这和假设矛盾。
>
> **(2)**  取 $r \in \alpha$，则当 $m < r/w$，即 $mw < r$ 时，由 (1) 即知 $mw \in \alpha$。再取 $s \in \alpha^c$，当 $m > s/w$ 时 $mw \in \alpha^c$。这说明，下面的整数子集：
> $$
> \{ m \in \mathbb{Z} \mid mw \in \alpha \}
> $$
> 是非空且有上界的集合，因此有最大数 $n$，$n$ 就是满足要求的整数。

设 $r \in \mathbb{Q}$ 为一个有理数，记
$$
r^* = \{ s \in \mathbb{Q} \mid s < r \},
$$
则容易验证 $r^*$ 是一个分割，称为由有理数 $r$ 决定的分割。

考虑 $\mathbb{Q}$ 的子集
$$
\alpha = \{ r \in \mathbb{Q} \mid r^2 < 2 \} \cup \{ r \in \mathbb{Q} \mid r \leq 0 \},
$$
则 $\alpha$ 是一个分割。

事实上，容易看出 $\alpha$ 为非空子集。分割定义的第二条也是容易验证的。我们来看分割定义的第三条，即 $\alpha$ 中没有最大数：

- 如果 $r \leq 0$，则 $r < 1$，而 $1 \in \alpha$；

- 如果 $r > 0$，$r^2 < 2$，则取
  $$
  s = r - \frac{r^2 - 2}{r + 2} = \frac{2r + 2}{r + 2},
  $$
  且
  $$
  s^2 - 2 = \frac{2(r^2 - 2)}{(r + 2)^2} < 0,
  $$
  即 $s \in \alpha$，且 $r < s$。

如果递归地定义有理数列 $\{x_n\}$ 如下：
$$
x_0 = 1, \quad x_{n+1} = \frac{2x_n + 2}{x_n + 2}, \quad n \geq 0,
$$
则根据刚才的讨论，$\{x_n\}$ 为严格单调递增数列（即 $x_n < x_{n+1}$），且
$$
0 < 2 - x_{n+1}^2 = \frac{2(2 - x_n^2)}{(x_n + 2)^2} < \frac{1}{4}(2 - x_n^2),
$$
由此得到下面的估计：
$$
0 < 2 - x_n^2 < \frac{1}{4^n}, \quad n \geq 1.
$$
下面我们把有理数 $\mathbb{Q}$ 所满足的基本性质都推广到 $\mathbb{R}$ 上。首先看次序如何定义。

**次序关系**：

> 设 $\alpha, \beta \in \mathbb{R}$，如果 $\alpha$ 为 $\beta$ 的真子集，则称 $\alpha$ 小于 $\beta$，记为 $\alpha < \beta$。我们也用记号 $\alpha \leq \beta$ 表示 $\alpha$ 为 $\beta$ 的子集。此时 $\alpha = \beta$ 或 $\alpha < \beta$。
>
> 次序关系的性质有：
>
> - 如果 $\alpha < \beta$，$\beta < \gamma$，则 $\alpha < \gamma$。这是因为真子集的真子集还是真子集。
>
> - 任给 $\alpha, \beta \in \mathbb{R}$，下面的三种关系有且仅有一个成立：
>   $$
>   \alpha < \beta,\quad \alpha = \beta,\quad \beta < \alpha.
>   $$
>
> 事实上，设前两个关系不成立，则 $\alpha$ 不是 $\beta$ 的子集，因此存在 $r \in \alpha$，但 $r \notin \beta$。如果 $s \in \beta$，则 $s < r$，从而 $s \in \alpha$，这就说明 $\beta$ 为 $\alpha$ 的子集。由于 $\alpha \neq \beta$，故 $\beta$ 为 $\alpha$ 的真子集。
>
> 如果 $r, s \in \mathbb{Q}$，则当 $r = s$ 时 $r^* = s^*$，当 $r < s$ 时 $r^* < s^*$。因此我们定义的次序关系是自然的。有了次序就可以定义上界。

**上界和上确界**：

> 设 $A \subset \mathbb{R}$ 为 $\mathbb{R}$ 的非空子集，$\beta \in \mathbb{R}$。如果任给 $\alpha \in A$，均有 $\alpha \leq \beta$，则称 $\beta$ 为 $A$ 的一个上界。设 $\gamma$ 为 $A$ 的一个上界，如果任给 $A$ 的另一个上界 $\gamma'$，均有 $\gamma \leq \gamma'$，则称 $\gamma$ 为 $A$ 的最小上界或上确界，记为 $\sup A$。易见，上确界如果存在则必定是惟一的。

**定理2**（确界原理）：$\mathbb{R}$ 的非空子集如果有上界，则必有上确界。

> 设 $A$ 为 $\mathbb{R}$ 的非空子集，$\beta$ 为 $A$ 的一个上界，记
> $$
> \gamma = \bigcup_{\alpha \in A} \alpha \subset \mathbb{Q}.
> $$
>
> 下面先说明 $\gamma$ 为一个分割。$\gamma$ 显然是非空子集，由于 $\beta$ 为 $A$ 的一个上界，故 $\gamma \subset \beta$，这说明 $\gamma \neq \mathbb{Q}$。这验证了分割定义的第一条。
>
> 设 $r \in \gamma$，$s \notin \gamma$。于是存在 $\alpha \in A$，使得 $r \in \alpha$，此时 $s \notin \alpha$，因此 $r < s$。这验证了分割定义的第二条。
>
> 第三条：设 $r \in \gamma$，于是存在 $\alpha \in A$，使得 $r \in \alpha$，此时存在 $s \in \alpha$，使得 $r < s$，由 $\gamma$ 的定义即知 $s \in \gamma$。
>
> 其次我们说明 $\gamma$ 为 $A$ 的最小上界。根据 $\gamma$ 的构造，显然 $\gamma$ 为 $A$ 的一个上界。如果 $\gamma'$ 为另一个上界，则 $\alpha \subset \gamma'$，$\forall\, \alpha \in A$。这说明 $\gamma \subset \gamma'$。

**实数表示为某个非空子集的上确界**：

> 如果 $r \in \mathbb{Q}$ 为有理数，令
> $$
> A = \{ s^* \in \mathbb{R} \mid s < r,\ s \in \mathbb{Q} \} = \{ s^* \mid s \in r^* \},
> $$
> 则 $r^* = \sup A$。事实上，由定义有
> $$
> \sup A = \bigcup_{s < r} s^* = \bigcup_{s < r} \{ t \in \mathbb{Q} \mid t < s \} = \{ t \in \mathbb{Q} \mid t < r \} = r^*.
> $$
>
> 一般地，如果 $\alpha \in \mathbb{R}$ 为一个分割，则
> $$
> \alpha = \sup \{ r^* \mid r \in \alpha \}.
> $$
>

下面我们把 $\mathbb{Q}$ 中的四则运算推广到 $\mathbb{R}$ 中。

**加法运算**：

> 设 $\alpha, \beta \in \mathbb{R}$，定义
> $$
> \alpha + \beta = \{ r + s \mid r \in \alpha,\ s \in \beta \},
> $$
> 显然，$\alpha + \beta$ 是 $\mathbb{Q}$ 的非空子集。取 $r' \in \alpha^c$, $s' \in \beta^c$，则任给 $r \in \alpha$, $s \in \beta$，均有 $r < r'$, $s < s'$，从而有 $r + s < r' + s'$，这说明 $r' + s' \notin \alpha + \beta$，即 $\alpha + \beta \neq \mathbb{Q}$。
>
> 设 $p = r + s \in \alpha + \beta$，其中 $r \in \alpha$, $s \in \beta$。如果 $q \in (\alpha + \beta)^c$，我们要说明 $p < q$。事实上，如果 $q \leq p$，则 $q - s \leq r$，从而 $q - s \in \alpha$，$q = (q - s) + s \in \alpha + \beta$，这就得到矛盾，因此只能有 $p < q$。
>
> $\alpha + \beta$ 中无最大数：设 $p = r + s \in \alpha + \beta$，取 $t \in \alpha$，使得 $r < t$，则 $q = t + s \in \alpha + \beta$，且 $p < q$。总之，$\alpha + \beta$ 是一个分割，称为 $\alpha$ 与 $\beta$ 的和。
>
> > 求和运算具有以下性质：
> >
> > - 如果 $r, s \in \mathbb{Q}$，则 $r^* + s^* = (r + s)^*$。这由定义不难得到。
> >
> > - **(交换律)** $\alpha + \beta = \beta + \alpha$。这可从 $\mathbb{Q}$ 中加法具有交换律以及 $\alpha + \beta$ 和 $\beta + \alpha$ 的定义推出。
> >
> > - **(结合律)** $(\alpha + \beta) + \gamma = \alpha + (\beta + \gamma)$。这可从 $\mathbb{Q}$ 中加法具有结合律推出。
> >
> > - **(零元)** $\alpha + 0^* = \alpha$。如果 $r \in \alpha$, $s \in 0^*$，则 $s < 0$, $r + s < r$，因此 $r + s \in \alpha$，这说明 $\alpha + 0^* \subset \alpha$。反之，设 $r \in \alpha$，取 $r' \in \alpha$，使得 $r < r'$，此时 $r - r' \in 0^*$，从而 $r = r' + (r - r') \in \alpha + 0^*$，这又说明 $\alpha \subset \alpha + 0^*$，因此 $\alpha + 0^* = \alpha$。$0^*$ 称为零元。
> >
> > - **(负元)** 设 $\alpha \in \mathbb{R}$，令
> >   $$
> >   \beta = \{ r \in \mathbb{Q} \mid \text{存在 } s > 0,\ \text{使得 } -r - s \in \alpha^c \}.
> >   $$
> >
> >   我们先来说明 $\beta$ 为一个分割。取 $q \in \alpha^c$, $r = -q - 1$，则 $-r - 1 = q \in \alpha^c$，因此 $r \in \beta$，这说明 $\beta$ 是非空子集。如果 $p \in \alpha$, $r \in \beta$，则存在 $s > 0$，使得 $-r - s \in \alpha^c$，因此 $p < -r - s$, $r < -p - s < -p$，特别地，$-p \in \beta^c$，即 $\beta \neq \mathbb{Q}$。分割定义的其它两条可类似验证。
> >
> >   我们来说明 $\alpha + \beta = 0^*$。如果 $p \in \alpha$, $r \in \beta$，则同上所述，存在 $s > 0$，使得 $-r - s \in \alpha^c$，因此 $p < -r - s$, $p + r < -s < 0$，于是 $p + r \in 0^*$，$\alpha + \beta \subset 0^*$。反之，取 $t \in 0^*$，则 $-t/2 > 0$，取整数 $n$，使得 $-nt/2 \in \alpha$, $-(n+1)t/2 \in \alpha^c$。令 $r = (n+2)t/2$，则 $-r - (-t/2) \in \alpha^c$，因此 $r \in \beta$，且
> >   $$
> >   t - nt/2 + r \in \alpha + \beta,
> >   $$
> >   这说明 $0^* \subset \alpha + \beta$。
> >
> >   我们称 $\beta$ 为 $\alpha$ 的负元，记为 $\beta = -\alpha$。

**乘法运算**：

> 令 $\mathbb{R}^+ = \{ \alpha \in \mathbb{R} \mid 0^* < \alpha \}$，如果 $\alpha, \beta \in \mathbb{R}^+$，令
> $$
> \alpha\beta = \{ p \in \mathbb{Q} \mid \text{存在 } 0 < r \in \alpha,\ 0 < s \in \beta,\ \text{使得 } p < rs \},
> $$
> 可以验证这是一个分割，且 $\alpha\beta \in \mathbb{R}^+$。
>
> > 这样我们对所有的情形都定义了乘法运算。乘法运算具有以下性质：
> >
> > - 如果 $r, s \in \mathbb{Q}$，则 $(rs)^* = r^*s^*$。以 $r, s > 0$ 为例：根据定义可以看出，
> >   $$
> >   \begin{aligned}
> >   r^*s^* &= \{ p \in \mathbb{Q} \mid \text{存在 } r', s' \in \mathbb{Q},\ 0 < r' < r,\ 0 < s' < s,\ \text{使得 } p < r's' \} \\
> >   &= \{ p \in \mathbb{Q} \mid p < rs \} = (rs)^*.
> >   \end{aligned}
> >   $$
> >
> > - **(交换律)** $\alpha\beta = \beta\alpha$。这可从有理数乘法的交换律得到，下面的结合律也一样。
> >
> > - **(结合律)** $(\alpha\beta)\gamma = \alpha(\beta\gamma)$。
> >
> > - **(单位元)** $\alpha 1^* = \alpha$。以 $0^* < \alpha$ 为例：根据定义可以看出，
> >   $$
> >   \begin{aligned}
> >   \alpha 1^* &= \{ p \in \mathbb{Q} \mid p < rs,\ \text{存在 } 0 < r \in \alpha,\ 0 < s < 1 \} \\
> >   &= \{ p \in \mathbb{Q} \mid \text{存在 } 0 < r \in \alpha,\ \text{使得 } p < r \} = \alpha.
> >   \end{aligned}
> >   $$
> >
> > - **(逆元)** 如果 $\alpha \neq 0^*$，则存在 $\beta \in \mathbb{R}$，使得 $\alpha\beta = 1^*$。事实上，不妨设 $0^* < \alpha$，定义 $\beta$ 为
> >   $$
> >   \beta = \{ s \in \mathbb{Q} \mid \text{存在 } r \in \alpha^c,\ \text{使得 } s < r^{-1} \}.
> >   $$
> >
> >   不难验证这是一个分割，且 $\alpha\beta = 1^*$。我们称 $\beta$ 为 $\alpha$ 的逆元，记为 $\beta = \alpha^{-1}$。如果 $r$ 为非零有理数，则 $(r^*)^{-1} = (r^{-1})^*$。
> >
> > - **(分配律)** $\alpha(\beta + \gamma) = \alpha\beta + \alpha\gamma$。

用高等代数的语言来说，我们迄今为止所做的工作表明，配备了加法运算和乘法运算的集合 $\mathbb{R}$ 是一个**域**，称为**实数域**。当然，有理数集合 $\mathbb{Q}$ 也是一个域，并且通过映射
$$
f: \mathbb{Q} \to \mathbb{R},\quad r \mapsto r^*
$$
我们知道 $\mathbb{Q}$ 可以看成 $\mathbb{R}$ 的子域，或实数域 $\mathbb{R}$ 是有理数域 $\mathbb{Q}$ 的一个扩张。扩张以后的域除了具有有理数域的基本性质以外，还具备了重要的**确界原理**，它使得实数填满了有理数在数轴上所留下的空隙，因此实数集合 $\mathbb{R}$ 也称为**实数连续统**或**实数系**。

为了强调实数系的连续性质，我们再看两个结论。

**定理3** (Archimedes 原理)：设 $0 < x \in \mathbb{R}$，则任给 $y \in \mathbb{R}$，存在正整数 $n$，使得 $y < nx$.

> 我们不再区分有理数 $r$ 与分割 $r^*$。考虑 $\mathbb{R}$ 的子集
> $$
> A = \{ nx \mid n \in \mathbb{N} \}.
> $$
>
> 我们说明 $A$ 没有上界。（反证法）如果有上界，则由确界原理知 $A$ 有上确界，记为 $\alpha$。因为 $0 < x$，故 $\alpha - x < \alpha$，从而存在正整数 $m$，使得 $\alpha - x < mx$，此时 $\alpha < (m+1)x \in A$，这和 $\alpha$ 为 $A$ 的上界相矛盾。
>
> 既然 $A$ 没有上界，$y$ 就不是 $A$ 的上界，从而存在正整数 $n$，使得 $y < nx$。

**推论4** (有理数的稠密性)：任给 $a < b \in \mathbb{R}$，存在 $c \in \mathbb{Q}$，使得 $a < c < b$。

> 由 $a < b$ 知 $0 < b - a$，由 Archimedes 原理，存在正整数 $n$，使得 $1 < n(b - a)$。再由 Archimedes 原理，存在正整数 $m_1, m_2$，使得 $na < m_1$, $-na < m_2$。这说明，集合
> $$
> A = \{ m' \in \mathbb{Z} \mid na < m' \} \subset \mathbb{Z}
> $$
> 非空且有下界，因而存在最小整数 $m \in A$，$m$ 满足条件
> $$
> m - 1 \leq na < m.
> $$
>
> 此时就有
> $$
> na < m \leq 1 + na < n(b - a) + na = nb,
> $$
> 即 $c = m/n \in \mathbb{Q}$ 满足条件 $a < c < b$。

以上关于实数系的构造方法源于 Dedekind。实数系还有其它的构造方法，例如 Cantor 用小数表示以及利用 Cauchy 序列也完成了实数系的构造。

如果用抽象的语言来描述，则这些构造出来的对象是所谓的具有确界原理的有序域，这样的域都是互相同构的。

## Part 2 实数系基本性质

数列极限的存在性依赖于实数系的基本性质。例如，我们用确界原理导出了有界单调数列的极限存在性，进而导出了 Cauchy 准则。为了进一步研究的需要，我们再介绍实数的几条基本性质，并说明这些基本性质之间其实是互相等价的。

下面的结果通常称为“**闭区间套原理**”

### · Cantor

**定理1** (Cantor)：设 $\{[a_n, b_n]\}$ 为递降闭区间套序列，即
$$
[a_1, b_1] \supset [a_2, b_2] \supset \cdots \supset [a_n, b_n] \supset \cdots.
$$
如果 $\displaystyle \lim_{n \to \infty} (b_n - a_n) = 0$，则存在唯一的点 $c$，使得 $c \in [a_n, b_n]$，$\forall\, n \geq 1$。

> /proof/
>
> 由已知条件我们知道，数列 $\{a_n\}$ 单调递增且有上界 $b_1$，$\{b_n\}$ 单调递减且有下界 $a_1$。这说明 $\{a_n\}$ 和 $\{b_n\}$ 都收敛，设极限分别为 $a, b$。由极限的保序性，有
> $$
> a_n \leq a \leq b \leq b_n,\quad \forall\, n \geq 1,
> $$
> 即
> $$
> 0 \leq b - a \leq b_n - a_n \to 0\ (n \to \infty),
> $$
> 这说明 $a = b$。于是 $c = a = b \in [a_n, b_n]$，$\forall\, n \geq 1$。如果另有 $c' \in [a_n, b_n]$，$\forall\, n \geq 1$，则由夹逼原理即知 $c' = a = b = c$。
>
> > 把定理中的闭区间套换成开区间套时结论一般不再成立。如
> > $$
> > (0,1) \supset \left(0,\frac{1}{2}\right) \supset \cdots \supset \left(0,\frac{1}{n}\right) \supset \cdots
> > $$
> > 是开区间套，但这些开区间之交为空集。

/example/  实数集 $\mathbb{R}$ 是不可数集。

> 我们来证明 $[0, 1]$ 是不可数的。（反证法）显然，$[0, 1]$ 是无限集。如果它不是不可数的，则一定是无限可数集，因此可以记为
> $$
> [0, 1] = \{x_1, x_2, \ldots, x_n, \ldots\}.
> $$
>
> 将 $[0, 1]$ 三等分，必有一个等分区间不含 $x_1$，记该区间为 $[a_1, b_1]$。再对 $[a_1, b_1]$ 三等分，必有一个等分区间不含 $x_2$，记该区间为 $[a_2, b_2]$。如此继续等分 $[a_2, b_2]$ 等，我们就得到闭区间套
> $$
> [0, 1] \supset [a_1, b_1] \supset [a_2, b_2] \supset \cdots \supset [a_n, b_n] \supset \cdots,
> $$
> 使得 $b_n - a_n = \dfrac{b-a}{3^n} \to 0\ (n \to \infty)$，且 $x_n \notin [a_n, b_n]$。
>
> 根据闭区间套原理，存在 $\xi \in [a_n, b_n]$，$\forall\, n \geq 1$。显然 $\xi \in [0, 1]$，但 $\xi \neq x_n$，$\forall\, n \geq 1$。这就导出了矛盾。

这个例子说明无理数集是不可数的，因此无理数远比有理数多，因为下面的例子表明有理数集是可数的。

/example/  有理数集 $\mathbb{Q}$ 是可数集。

> 我们只要证明正有理数可数就可以了。正有理数均可表示为形如 $p/q$ 的分数，其中 $p, q$ 为正整数，且 $p, q$ 无大于 1 的公因子。按照 $p + q$ 的大小，依据通常的“字典法则”可将正有理数排成一列：
> $$
> 1 = 1/1,\ 1/2,\ 2/1,\ 1/3,\ 3/1,\ 1/4,\ 2/3,\ 3/2,\ 4/1,\ \ldots,
> $$
> 其中，当 $p + q < r + s$，或 $p + q = r + s$ 但 $p < r$ 时，将 $p/q$ 排在 $r/s$ 前面。这样，正有理数不重不漏地出现在这一列中，这说明正有理数集是可数的。

### · Bolzano

**定理2**(Bolzano)：$\mathbb{R}$ 中有界数列必有收敛子列。

> /proof/
>
> 设 $\{a_n\}$ 为有界数列，不妨设 $\{a_1, a_2, \ldots\} \subset [a, b]$。将 $[a, b]$ 二等分，必有一个小区间包含了数列 $\{a_n\}$ 中的无限项，记该小区间为 $[a_1, b_1]$，并取 $a_{n_1} \in [a_1, b_1]$。
>
> 再将 $[a_1, b_1]$ 二等分，仍有一个小区间含有 $\{a_n\}$ 中的无限项，记该小区间为 $[a_2, b_2]$，取 $a_{n_2} \in [a_2, b_2]$，且 $n_2 > n_1$。如此继续，我们得到区间套
> $$
> [a_1, b_1] \supset [a_2, b_2] \supset \cdots \supset [a_k, b_k] \supset \cdots,\quad b_k - a_k = \frac{1}{2^k}(b - a) \to 0,
> $$
> 以及 $\{a_n\}$ 的子列 $\{a_{n_k}\}$，使得 $a_{n_k} \in [a_k, b_k]$，$k = 1,2,\ldots$。
>
> 由闭区间套原理，存在 $c \in [a_k, b_k]$，$k = 1,2,\ldots$。容易看出子列 $\{a_{n_k}\}$ 以 $c$ 为极限。

Bolzano 定理涉及到闭区间的一个重要性质，即**紧致性**。为了描述它，我们先引入几个预备性的概念。

设 $x_0 \in \mathbb{R}$。包含点 $x_0$ 的一个开区间称为 $x_0$ 的一个**开邻域**。如果 $\delta > 0$，则 $(x_0 - \delta, x_0 + \delta)$ 就是 $x_0$ 的一个开邻域。

设 $A$ 为数集，如果对任意的点 $x_0 \in A$，均存在 $\delta > 0$，使得 $(x_0 - \delta, x_0 + \delta) \subset A$，则称 $A$ 为 $\mathbb{R}$ 中的**开集**。$\mathbb{R}$ 本身当然是开集。我们约定空集也是开集。

如果一个数集的补集是开集，则称该数集为**闭集**。按照我们的约定，空集和 $\mathbb{R}$ 既是开集，也是闭集。

设 $\Gamma$ 为一个集合，如果对于每一个元素 $\alpha \in \Gamma$，都对应一个集合 $A_\alpha$，则称 $\{A_\alpha\}$ 为以 $\Gamma$ 为指标集的**集合族**，或称 $\{A_\alpha\}$ 是一族集合。

设 $A$ 为 $\mathbb{R}$ 的子集，$A_\alpha\ (\alpha \in \Gamma)$ 是数集族。如果任给 $a \in A$，均存在某个 $\alpha$，使得 $a \in A_\alpha$，则称 $\{A_\alpha\}$ 是 $A$ 的一个**覆盖**；当覆盖中的每一个 $A_\alpha$ 均为开集时，称 $\{A_\alpha\}$ 是 $A$ 的一个**开覆盖**。

如果 $\{A_\alpha\}$ 是 $A$ 的一个覆盖，$\Gamma' \subset \Gamma$，且 $\{A_\alpha\}\ (\alpha' \in \Gamma')$ 仍为 $A$ 的覆盖，则称 $\{A_\alpha\}$ 是 $\{A_\alpha\}$ 的一个**子覆盖**。如果 $A$ 的任何开覆盖均存在有限子覆盖，则称 $A$ 是**紧致集合**。

下面的结果表明闭区间是紧致集合。

### · Heine-Borel

**定理3** (Heine-Borel)：闭区间 $[a, b]$ 的任何开覆盖都有有限子覆盖。

> 设 $\{A_\alpha\}$ 为 $[a, b]$ 的一个开覆盖。如果 $[a, b]$ 不能被有限个 $A_\alpha$ 所覆盖，则二等分 $[a, b]$ 后必有一个小区间也不能被有限个 $A_\alpha$ 所覆盖，记该区间为 $[a_1, b_1]$。再将 $[a_1, b_1]$ 二等分，又必有一个小区间不能被有限个 $A_\alpha$ 所覆盖，记该区间为 $[a_2, b_2]$。如此继续下去，得闭区间套
> $$
> [a_1, b_1] \supset [a_2, b_2] \supset \cdots \supset [a_n, b_n] \supset \cdots,
> $$
> 使得 $b_n - a_n = \frac{b-a}{2^n} \to 0\ (n \to \infty)$，且每个 $[a_n, b_n]$ 均不能被有限个 $A_\alpha$ 覆盖。
>
> 根据闭区间套原理，存在 $\xi \in [a_n, b_n]$，$\forall\, n \geq 1$。因为 $\{A_\alpha\}$ 为 $[a, b]$ 的开覆盖，故存在 $A_{\alpha_0}$，使得 $\xi \in A_{\alpha_0}$。因为 $A_{\alpha_0}$ 为开集，故存在 $\delta > 0$，使得
> $$
> (\xi - \delta, \xi + \delta) \subset A_{\alpha_0}.
> $$
>
> 因为 $a_n, b_n \to \xi\ (n \to \infty)$，故存在 $N$，当 $n > N$ 时
> $$
> a_n, b_n \in (\xi - \delta, \xi + \delta).
> $$
>
> 这说明 $[a_n, b_n] \subset (\xi - \delta, \xi + \delta) \subset A_{\alpha_0}\ (n > N)$，这与 $[a_n, b_n]$ 不能被有限个 $A_\alpha$ 覆盖相矛盾。

**推论4**：$\mathbb{R}$ 中的有界闭集都是紧致集合。

> /proof/
>
> 设 $A$ 是有界闭集，不妨设 $A \subset [-M, M]$。如果 $\{A_\alpha\}$ 为 $A$ 的一个开覆盖，则
> $$
> \{A^c \cap (-M - 1, M + 1),\ A_\alpha\}
> $$
> 是闭区间 $[-M, M]$ 的一个开覆盖。由 Heine-Borel 定理，它存在有限子覆盖，这个有限子覆盖当然也是 $A$ 的覆盖，从这个子覆盖中去掉 $A^c \cap (-M - 1, M + 1)$ 后仍是 $A$ 的覆盖。

### · 等价命题

Heine-Borel 定理可以用来重新证明 Bolzano 定理。证明如下：

> 设 $\{a_n\}$ 为有界数列，不妨设 $a_n$ 均包含于 $[a, b]$。我们先证明存在 $c \in [a, b]$，使得 $c$ 的任何开邻域中均含有 $\{a_n\}$ 中无限项。
>
> （反证法）假设不然，则对任意 $x \in [a, b]$，存在 $\delta_x > 0$，使得 $(x - \delta_x, x + \delta_x) = I_x$ 只含 $\{a_n\}$ 中有限项。显然，$\{I_x\}_{x \in [a,b]}$ 为闭区间 $[a, b]$ 的一个开覆盖，因此存在有限子覆盖，从而 $[a, b]$ 只含有 $\{a_n\}$ 中有限项，这和 $a_n$ 均含于 $[a, b]$ 相矛盾。
>
> 其次，我们可以如下选取 $\{a_n\}$ 的子列，使之收敛到 $c$。事实上，先取 $a_{n_1} \in (c - 1, c + 1)$。再取 $n_2 > n_1$，使得 $a_{n_2} \in (c - 1/2, c + 1/2)$。
>
> 如此继续，我们得到子列 $\{a_{n_k}\}$，使得 $a_{n_k} \in (c - 1/k, c + 1/k)$，$k = 1,2,\ldots$。显然，$\{a_{n_k}\}$ 收敛到 $c$。

从实数系的确界原理出发，我们得到了单调有界数列的收敛性、Cauchy 准则以及本节的这几个基本结果。我们要说明的是，这几个基本结果其实都是相互等价的。

等价的意思就是在承认其中一个结果的前提之下可以推出另一个结果，即在构造实数系的时候，我们只要验证它满足其中一个基本结果，则其余的结果自然成立。下面的定理将这个等价性补充完整：

**定理5**：我们有下列命题之间的等价：

(1). **(Bolzano 定理 $\Rightarrow$ Cauchy 准则)**：如果 $\mathbb{R}$ 中有界数列均有收敛子列，则 $\mathbb{R}$ 中 Cauchy 数列必收敛；

(2). **(Cauchy 准则 $\Rightarrow$ 确界原理)**：如果 $\mathbb{R}$ 中 Cauchy 数列均收敛，则 $\mathbb{R}$ 中有上（下）界的集合必有上（下）确界。

> /proof/
>
> **(1)** 设 $\{a_n\}$ 为 Cauchy 列，则 $\{a_n\}$ 有界，从而有收敛子列 $\{a_{n_k}\}$，记其极限为 $A$。根据 Cauchy 列和数列极限的定义，任给 $\varepsilon > 0$，存在 $N_0, K$，使得当 $m, n > N_0$, $k > K$ 时，
> $$
> |a_m - a_n| < \frac{1}{2}\varepsilon,\quad |a_{n_k} - A| < \frac{1}{2}\varepsilon.
> $$
>
> 取 $k > \max\{N_0, K\}$，则 $n_k \geq k > \max\{N_0, K\}$。于是当 $n > n_k$ 时，
> $$
> |a_n - A| \leq |a_n - a_{n_k}| + |a_{n_k} - A| < \frac{1}{2}\varepsilon + \frac{1}{2}\varepsilon = \varepsilon.
> $$
>
> 这说明 $\{a_n\}$ 收敛到 $A$。
>
> ---
>
> **(2)** 不妨设集合 $A$ 有上界 $M$。如果 $M \in A$，则 $M$ 就是 $A$ 的上确界。下设 $M \notin A$。取 $m \in A$，则闭区间 $[m, M]$ 含有 $A$ 中的数。将 $[m, M]$ 二等分：如果 $\left[\dfrac{m + M}{2}, M\right]$ 中含有 $A$ 中的数，则记
> $$
> a_1 = \frac{m + M}{2},\quad b_1 = M;
> $$
> 否则就记 $a_1 = m$, $b_1 = \dfrac{m + M}{2}$。
>
> 总之，$[a_1, b_1]$ 中含有 $A$ 中的数，$b_1$ 为 $A$ 的上界，且 $b_1 \notin A$（为什么？）。
>
> 对 $[a_1, b_1]$ 作同样的事情，并如此继续，我们就得到了两个数列 $\{a_n\}$ 与 $\{b_n\}$，满足条件：
>
> > (1).
> > $$
> > [a_n, b_n] \cap A \neq \varnothing,\quad\forall\, n \geq 1
> > $$
> > (2). $b_n$ 均为 $A$ 的上界，且 $b_n \notin A$，$\forall\, n \geq 1$；
> >
> > (3).
> > $$
> > b_n - a_n = \dfrac{M - m}{2^n}
> > $$
> > (4).
> > $$
> > |a_{n+1} - a_n| \leq \dfrac{M - m}{2^{n+1}},\quad |b_n - b_{n+1}| \leq \dfrac{M - m}{2^{n+1}}
> > $$
>
>  $\{a_n\}$ 和 $\{b_n\}$ 均为 Cauchy 数列，它们收敛到同一数 $c$。不难看出 $c$ 为 $A$ 的上确界。

结束.

