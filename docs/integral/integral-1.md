---
title: Chapter 1 函数
permalink: /integral/integral-1/
createTime: 2025/09/16 20:57:28
---

## Part 1 集合

### · 基本运算

集合是数学家对于各种客观事物进行抽象化以后所形成的一个本原概念。

例如，整数的全体是一个集合，通常记为 $\mathbb{Z}$，它可以表示为
$$
\mathbb{Z} = \{0, -1, 1, -2, 2, \ldots, -n, n, \ldots\}.
$$
如同这个例子一样，集合可以通过列举其所元素来表示.

设 $A, B$ 均为集合。如果 $A$ 中的元素也都是 $B$ 中的元素，则称 $A$ 为 $B$ 的子集，记为 $A \subseteq B$。子集 $A$ 有可能和 $B$ 相同，如果 $B$ 中存在某元素 $x$，但不在 $A$ 中（记为 $x \notin A$），则称 $A$ 为 $B$ 的真子集，记为 $A \subsetneq B$ .

非负整数的全体记为 $\mathbb{Z}^+$，正整数的全体记为 $\mathbb{N}$，它们都是 $\mathbb{Z}$ 的子集。

设 $A$ 为集合。显然，空集 $\varnothing$ 和 $A$ 本身都是 $A$ 的子集。如果 $A$ 是 $B$ 的子集，$B$ 也是 $A$ 的子集，则 $A = B$。

满足特定条件的一些子集仍然能构成新的集合，这就出现了所谓集合的集合的概念。

设 $A$ 为集合，$A$ 的所有子集也构成了一个集合，记为 $2^A$。
$$
2^A = \{B \mid B \subseteq A\}.
$$
不难证明，如果 $A$ 有 $n$ 个元素，则 $2^A$ 有 $2^n$ 个元素。即 $A$ 一共有 $2^n$ 个子集。

> 在上例中，一个集合的所有子集构成了一个新的集合，那么下面的问题看来是自然的：“所有”的集合合放在一起是否也构成了一个集合？如果说这是一个集合，比如记为 $X$，则由于 $X$ 本身也是一个集合，按定义应该有 $X \in X$，即 $X$ 是它自己的一个元素。
>
> 这一现象在集合的范畴内无法解释，我们在本课程中也不需要讨论它（在范畴论中，集合的集合是一个所谓的“大”）。

下面我们讨论集合之间的基本运算。

**定义1**：

>设 $A, B$ 为集合，由 $A$ 中所有元素和 $B$ 中所有元素所组成的集合称为 $A$ 和 $B$ 的并集，记为 $A \cup B$，即
>
>$$
>A \cup B = \{x \mid x \in A \text{ or } x \in B\}.
>$$
>由 $A$ 和 $B$ 中公共元素组成的集合称为 $A$ 和 $B$ 的交集，记为 $A \cap B$，即
>
>$$
>A \cap B = \{x \mid x \in A \text{ and } x \in B\}.
>$$
>集合之间的并和交运算具有下面的性质，这些性质的证明是直接的，我们省略。

**命题1**：

> 设 $A, B, C$ 为集合，则
>
> (1) 交换律
> $$
> A \cup B = B \cup A, A \cap B = B \cap A
> $$
> (2) 结合律
> $$
> A \cup (B \cup C) = (A \cup B) \cup C, A \cap (B \cap C) = (A \cap B) \cap C
> $$
> (3) 分配律
> $$
> A \cap (B \cup C) = (A \cap B) \cup (A \cap C), A \cup (B \cap C) = (A \cup B) \cap (A \cup C)
> $$

**定义2**：

> 设集合 $A$ 是集合 $X$ 的子集，由 $X$ 中不属于 $A$ 的所有元素组成的集合称为 $A$ 在 $X$ 中的补集或余集，记为 $A^c$，即
>
> $$
> A^c = \{x \in X \mid x \notin A\}.
> $$
> 设 $A, B$ 均为 $X$ 的子集，由属于 $A$ 但不属于 $B$ 的所有元素组成的集合称为 $A$ 与 $B$ 的差集，记为 $A - B$ 或 $A \setminus B$。因此，$A$ 的补集也可写为 $A^c = X - A$。

**命题2**：

> 设 $A, B$ 为 $X$ 的子集，则
>
> (1)
> $$
> (A^c)^c = A, A^c \cup A = X, A^c \cap A = \varnothing;
> $$
> (2)
> $$
> A - B = A \cap B^c, (A - B) \cup (B - A) = A \cup B - A \cap B;
> $$
> (3) De Morgan 公式
> $$
> (A \cup B)^c = A^c \cap B^c, (A \cap B)^c = A^c \cup B^c.
> $$
>
> > /proof/
> >
> > 这些性质可以根据定义直接得到，我们以 De Morgan 公式的第一部分为例。
> >
> > 设 $x \in (A \cup B)^c$，则 $x \notin A \cup B$，因此 $x \notin A, x \notin B$。即 $x \in A^c, x \in B^c$，从而 $x \in A^c \cap B^c$。这说明 $(A \cup B)^c \subseteq A^c \cap B^c$。
> >
> > 设 $x \in A^c \cap B^c$，则 $x \in A^c, x \in B^c$，即 $x \notin A, x \notin B$，因此 $x \notin A \cup B$，$x \in (A \cup B)^c$。这说明 $A^c \cap B^c \subseteq (A \cup B)^c$。
> >
> > 将两个包含关系结合起来就得到了等式 $(A \cup B)^c = A^c \cap B^c$。De Morgan 公式的第二部分可类似证明，也可对第一个公式两边取补得到。
> >
> > 如果集合 $A$ 只有有限个元素，则称 $A$ 是有限集。有限集之外的集合称为无限集。如果无限集 $A$ 中的元素可以按一定规律排成一列，即
> >
> > $$
> > A = \{x_1, x_2, x_3, \ldots\},
> > $$
> > 则称 $A$ 是可数集或可列集。如果 $A$ 是有限集或可数集，则称 $A$ 为至多可数集；至多可数集之外的集合称为不可数集。

**命题3**：设 $A, B$ 为可数集，则 $A \times B$ 也是可数集。

> 因为 $A, B$ 均为可数集，故可分别表示为
>
> $$
> A = \{a_1, a_2, \ldots, a_i, \ldots\}, \quad B = \{b_1, b_2, \ldots, b_j, \ldots\}.
> $$
> 于是 $A \times B$ 可表示为
>
> $$
> A \times B = \{(a_i, b_j) \mid i, j = 1, 2, \ldots\}.
> $$
> 我们可以按照“字典法则”将 $A \times B$ 中的元素排成一列：
>
> $$
> A \times B : (a_1, b_1), (a_1, b_2), (a_2, b_1), (a_2, b_2), (a_3, b_2), (a_3, b_1), \ldots
> $$
> 所谓“字典法则”就是当  $i + j < k + l$  或  $i + j = k + l$  但  $i < k$  时，要求  $(a_i, b_j)$  排在  $(a_k, b_l)$  前面。按照可数集的定义， $A \times B$  是可数集。

/example/  设 $n > 1$ 为正整数，如果 $n$ 除了 1 和自身外无其它因子，则称 $n$ 为素数。素数的全体是可数集。

> (反证法) 假设只有有限个素数，记为
>
> $$
> p_1 = 2, p_2, p_3, \cdots, p_k.
> $$
> 考虑正整数 $n = 1 + p_1 p_2 \cdots p_k$。因为 $n > p_i (1 \leqslant i \leqslant k)$，故 $n$ 不是素数。因此其因子分解中必含有某个素因子 $p_i$，即 $p_i$ 整除 $n$。根据 $n$ 的定义，这是不可能的
>
> 最后，我们介绍乘积集合的概念。设 $A, B$ 为集合。我们考虑有序对 $(x, y)$，其中 $x$ 是 $A$ 中任意一个元素，$y$ 是 $B$ 中任意一个元素。所有的这些有序对组成了一个集合，称为 $A$ 和 $B$ 的乘积，记为 $A \times B$，即
>
> $$
> A \times B = \{(x, y) \mid x \in A, y \in B\}.
> $$
> 我们约定当 $A$ 或 $B$ 为空集时，$A \times B$ 也是空集。

### · 数集

**命题1**：设 $n$ 为正整数，如果 $n$ 不是完全平方数，则 $\sqrt{n}$ 不是有理数。

> 因为 $n$ 不是完全平方数，因此它介于两个相邻的完全平方数之间，比如说 $k^2 < n < (k + 1)^2$，此时 $\sqrt{n} = k + \frac{p}{q}$，其中 $k, p, q$ 为正整数，$p/q$ 是 $\sqrt{n}$ 的小数部分，$0 < p/q < 1$。上式两边平方以后得
>
> $$
> n = k^2 + 2k\frac{p}{q} + \frac{p^2}{q^2}.
> $$
> 整理后得
>
> $$
> p^2 = q(nq - k^2 - 2kp) = ql, \quad l = nq - k^2 - 2kp.
> $$
> 这说明 $l$ 也是正整数，且
>
> $$
> p = \frac{l}{q}, \quad \sqrt{n} = k + \frac{p}{q} = k + \frac{l}{p}.
> $$
> 从 $p/q$ 得到 $l/p$ 的过程可以重复下去，且每次分母都变成了更小的正整数。但这就得出了矛盾，因为比 $q$ 小的正整数只有有限个（只有 $q - 1$ 个）。
>
> 我们把象 $1 - \sqrt{2}$ 这样不能用有理点表示的数称为无理数。
>
> 无理数的另一自然的例子是圆周率 $\pi$，几何上看圆周率就是圆周的周长和其直径之比，$\pi$ 的无理性的证明就没那么初等了

有理数和无理数统称实数。实数的理论直到 19 世纪才被严格建立起来，主要的贡献者是 Dedekind 等。

Dedekind 使用了现在被称为 Dedekind 分割的一种方法从有理数出发构造实数系，并且构造出来的数系是完备的，它们仍然满足有理数的运算法则，直线 $L$ 上的点和实数系之间有着一一对应。

除了 Dedekind 分割理论以外，Cantor 的实数模型也值得一提，这也是大家所熟悉的实数的小数表示理论，在这种理论中，有限小数或无限循环小数表示有理数，而无限不循环小数表示无理数。

实数的全体组成的集合用 $\mathbb{R}$ 表示。设 $a < b$ 为实数，记
$$
[a, b] = \{x \in \mathbb{R} \mid a \leqslant x \leqslant b\},
$$
称为以 $a, b$ 为端点的闭区间；记

$$
(a, b) = \{x \in \mathbb{R} \mid a < x < b\},
$$
称为以 $a, b$ 为端点的开区间；可以类似地定义 $[a, b)$，$(a, b]$（半开半闭区间），和无限区间

$$
[a, +\infty) = \{x \in \mathbb{R} \mid x \geqslant a\}, \quad (a, +\infty) = \{x \in \mathbb{R} \mid x > a\},
$$
以及

$$
(-\infty, b] = \{x \in \mathbb{R} \mid x \leqslant b\}, \quad (-\infty, b) = \{x \in \mathbb{R} \mid x < b\},
$$
等，统称为区间。$\mathbb{R}$ 自身也常写为区间 $(-\infty, \infty)$。区间可以这样刻画：$I$ 为区间当且仅当任取 $a < b \in I$，必有 $[a, b] \subseteq I$。一般用 $|I|$ 表示区间 $I$ 的长度。

### · 确界原理

设 $A$ 为 $\mathbb{R}$ 的子集（称为数集），如果存在 $M \in A$，使得对任意的 $x \in A$，均有 $x \leqslant M$，则称 $M$ 为 $A$ 的最大数，记为 $M = \max A$；如果存在 $m \in A$，使得对任意的 $x \in A$，均有 $x \geqslant m$，则称 $m$ 为 $A$ 的最小数，记为 $m = \min A$。

当 $A$ 为非空有限数集时，$A$ 的最大数和最小数都存在且分别为 $A$ 的有限个元素中的最大者和最小者。如果 $A$ 为无限集，则其最大数或最小数可能不存在。如 $A = (0, 1)$ 就是这样的例子。

为此我们引入极为重要新概念：上确界和下确界，他们将分别代替最大数和最小数的概念。

/Definition/

> 设 $A$ 为一个非空数集。如果存在 $M \in \mathbb{R}$，使得对任意的 $x \in A$，均有 $x \leqslant M$，则称 $A$ 有上界，$M$ 是 $A$ 的一个上界；
>
> 如果存在 $m \in \mathbb{R}$，使得对任意的 $x \in A$，均有 $x \geqslant m$，则称 $A$ 有下界，$m$ 是 $A$ 的一个下界；
>
> 如果 $A$ 既有上界又有下界，则称为有界集。显然，$A$ 是有界集当且仅当存在 $M$，使得对任何 $x \in A$，均有 $|x| \leqslant M$。

**定理**：(确界原理) 如果非空数集 $A$ 有上界，则它有一个最小上界，称为 $A$ 的上确界，记为 $\sup A$；如果 $A$ 有下界，则它有一个最大下界，称为 $A$ 的下确界，记为 $\inf A$。

确界原理是实数系的基本性质，在后面我们会证明确界原理和另外几条实数基本定理的等价性。

> 下面讨论一下上确界和下确界的简单性质。
>
> 我们约定，如果数集 $A$ 没有上界，则记 $\sup A = +\infty$；如果 $A$ 没有下界，则记 $\inf A = -\infty$ 。显然，如果 $A$ 有最大数，则最大数就是它的上确界；如果 $A$ 有最小数，则最小数就是它的下确界。按照定义，我们还有：
>
> > (1) 设 $A$ 有上确界 $M$，则对任意的 $x \in A$，均有 $x \leqslant M$；任给正数 $\varepsilon$，由于 $M - \varepsilon$ 不是 $A$ 的上界，因此存在 $x' \in A$，使得 $x' > M - \varepsilon$。
> >
> > (2) 设 $A$ 有下确界 $m$，则对任意的 $x \in A$，均有 $x \geqslant m$；任给正数 $\varepsilon$，由于 $m + \varepsilon$ 不是 $A$ 的下界，因此存在 $x' \in A$，使得 $x' < m + \varepsilon$。
> >
> > (3) 设 $A$ 有上确界，则 $-A = \{-x \mid x \in A\}$ 有下确界，且 $\inf(-A) = -\sup A$；设 $A$ 有下确界，则 $-A = \{-x \mid x \in A\}$ 有上确界，且 $\sup(-A) = -\inf A$。

对于有界数集，我们还有

**命题3**：设 $A, B$ 为非空有界数集，则
$$
\inf(A + B) = \inf A + \inf B; \quad \sup(A + B) = \sup A + \sup B.
$$
其中
$$
A + B = \{x + y \mid x \in A, y \in B\}
$$

> /proof/
>
> 以上确界为例。任取 $x \in A, y \in B$，则 $x \leqslant \sup A, y \leqslant \sup B$，于是
>
> $$
> x + y \leqslant \sup A + \sup B.
> $$
> 因此 $\sup A + \sup B$ 是数集 $A + B$ 的一个上界。另一方面，任给 $\varepsilon > 0$，存在 $x' \in A, y' \in B$，使得
>
> $$
> x' > \sup A - \varepsilon, \quad y' > \sup B - \varepsilon,
> $$
> 即
>
> $$
> x' + y' > \sup A + \sup B - 2\varepsilon.
> $$
> 设 $M$ 是 $A + B$ 的一个上界，则 $M \geqslant x' + y'$，上式表明
>
> $$
> M > \sup A + \sup B - 2\varepsilon.
> $$
> 根据 $\varepsilon$ 的任意性即知 $M \geqslant \sup A + \sup B$，因此 $\sup A + \sup B$ 是 $A + B$ 的最小上界。
>
> 我们知道，如果 $A, B$ 是有限数集，且 $A \subseteq B$，则 $\min A \geqslant \min B, \max A \leqslant \max B$。这个结果也可以推广到上确界和下确界。

**命题4**： 设 $A \subseteq B$，则当 $B$ 有下界时 $\inf A \geqslant \inf B$；当 $B$ 有上界时 $\sup A \leqslant \sup B$。

> /proof/
>
> 以上确界为例。任取 $x \in A$，则 $x \in B$，于是 $x \leqslant \sup B$。
>
> 这说明 $\sup B$ 也是 $A$ 的一个上界，因而 $A$ 有上确界，且 $\sup A \leqslant \sup B$

最后提一下常用的初等等式和不等式。下面的 Newton 二项式展开在下文中常常用到（$n$ 为正整数）：

$$
(a + b)^n = \sum_{k=0}^{n} C_n^k a^k b^{n-k}, \quad \forall a, b \in \mathbb{R}.
$$
常用不等式中，一个是三角不等式，即

> /Theorem/
>
> $$
> |a + b| \leqslant |a| + |b|, \quad \forall a, b \in \mathbb{R},
> $$
> 或
> $$
> |x - y| \leqslant |x - z| + |z - y|, \quad \forall x, y, z \in \mathbb{R}
> $$
> 

另一个是 Cauchy 不等式，即

> /Theorem/
> $$
> ab \leqslant \frac{a^2 + b^2}{2}, \quad \forall a, b \in \mathbb{R},
> $$
> 或
> $$
> ab \leqslant \left(\frac{a + b}{2}\right)^2, \quad \forall a, b \in \mathbb{R}
> $$

## Part 2 函数

### · 映射

在前面两节我们介绍了集合和数的集合。集合是人们对研究对象的一种抽象化。当我们研究不同性质的对象之间的关系时，集合到集合之间的对应就必须加以考虑。

**定义1**：映射

> 设 $X, Y$ 为集合。如果对于每一个元素 $x \in X$，都有 $Y$ 中唯一元素 $y$ 与之对应，则称这种对应关系为从 $X$ 到 $Y$ 的一个映射，记为
> $$
> f: X \rightarrow Y, \quad y = f(x),
> $$
> 或
>
> $$
> f: X \rightarrow Y, \quad x \mapsto f(x),
> $$
> 我们将 $y = f(x)$ 称为 $x$ 在 $f$ 下的象，而将 $x$ 称为 $y$ 的一个原象或逆象。集合 $X$ 称为映射 $f$ 的定义域，$f$ 的象的全体组成的集合 $f(X)$ 是 $Y$ 的子集，称为 $f$ 的值域，即
>
> $$
> f(X) = \{f(x) \mid x \in X\}.
> $$
>
> > 映射有时也称为函数，特别是当 $Y \subseteq \mathbb{R}$ 是数集时更是如此。通常也把映射写为 $y = f(x)$ 或 $f(x)$，这时 $x$ 也称为变量或自变量，$y$ 也称为因变量。如果 $X, Y \subseteq \mathbb{R}$ 均为数集，映射 $f: X \rightarrow Y$ 也称为一元函数或一元实值函数或一元实变函数。
> >
> > 函数通常有三种基本的表示方法：一是列表法，即将自变量 $x$ 和因变量 $y$ 之间的关系一一罗列出来；二是图形法，以一元函数为例，函数 $f$ 可以表示为平面上的点集 $\{(x, f(x))\}$；三是解析法，即用解析表达式来表示函数。

下面是几个例子。

/example/

> 特征函数 $\chi_A$ ：设 $A$ 为集合 $X$ 的子集，定义函数 $\chi_A: X \rightarrow \mathbb{R}$ 为
> $$
> \chi_A(x) = \begin{cases} 
> 1, & x \in A, \\
> 0, & x \in X - A.
> \end{cases}
> $$
> 这个函数称为 $A$ 的特征函数。容易看出，$A \neq B$ 当且仅当 $\chi_A \neq \chi_B$。

/example/

> 符号函数。
>
> 定义函数 $\text{sgn}: \mathbb{R} \rightarrow \mathbb{R}$ 如下
>
> $$
> \text{sgn}(x) = \begin{cases} 
> -1, & x < 0, \\
> 0, & x = 0, \\
> 1, & x > 0.
> \end{cases}
> $$

/example/

> 设 $a, b$ 为固定的实数（常数），如下定义映射
> $$
> f: \mathbb{R} \rightarrow \mathbb{R}, \quad f(x) = ax + b,
> $$
> 这是熟知的线性函数。

**定义2**：单射和满射

> 设 $f: X \rightarrow Y$ 为映射，如果对任意 $x_1 \neq x_2 \in X$，均有 $f(x_1) \neq f(x_2)$，则称 $f$ 为单射；如果 $f(X) = Y$，即对任意 $y \in Y$，均存在 $x \in X$，使得 $y = f(x)$，则称 $f$ 为满射。
>
> 注意，如果 $f: X \rightarrow Y$ 既是单射，又是满射，则称 $f$ 为一一映射或一一满射。在有的书上一一映射是指我们这儿的单射。

/example/ 在集合 $\mathbb{Z}^+$ 和 $\mathbb{N}$ 之间建立一一映射。

> 定义映射 $f: \mathbb{Z}^+ \rightarrow \mathbb{N}$ 如下：
>
> $$
> f(n) = n + 1, \quad \forall n \in \mathbb{Z}^+,
> $$
> 则易见 $f$ 是一一映射。
>
> > 上例告诉我们，一个集合有时可以和其真子集之间建立一一映射。不过，这样的集合必定是无限集。

/example/ 设 $n$ 为正奇数，如下定义映射

$$
f: \mathbb{R} \rightarrow \mathbb{R}, \quad f(x) = x^n,
$$
则 $f$ 是一一映射。

> 我们熟知当 $x < y$ 时 $x^n < y^n$，因此 $f$ 是单射。下面说明 $f$ 为满射。不妨设 $y_0 > 0$，我们要找到 $x_0 \in \mathbb{R}$，使得 $y_0 = x_0^n$。考虑数集
>
> $$
> A = \{r \in \mathbb{R} \mid r^n \leqslant y_0\},
> $$
> 因为 $0^n = 0 < y_0$，故 $0 \in A$，这说明 $A$ 不是空集。另一方面，$(y_0 + 1)^n > y_0 + 1 > y_0$，因此 $y_0 + 1$ 是 $A$ 的上界。由确界原理，$A$ 有上确界，记为 $x_0$。
>
> 按照确界的定义，任给 $\varepsilon > 0$，存在 $r' \in A$，使得
>
> $$
> r' > x_0 - \varepsilon,
> $$
> 这说明
>
> $$
> (x_0 - \varepsilon)^n < (r')^n \leqslant y_0.
> $$
> 根据二项式展开，当 $0 < \varepsilon < 1$ 时，有
>
> $$
> (x_0 - \varepsilon)^n = x_0^n + \sum_{k=0}^{n-1} C_n^k (x_0)^k (-\varepsilon)^{n-k} \geqslant x_0^n - \varepsilon \sum_{k=0}^{n-1} C_n^k |x_0|^k,
> $$
> 这说明，对任意 $0 < \varepsilon < 1$，有
>
> $$
> x_0^n - \varepsilon \sum_{k=0}^{n-1} C_n^k |x_0|^k \leqslant (x_0 - \varepsilon)^n < y_0,
> $$
> 由 $\varepsilon$ 的任意性得
>
> $$
> x_0^n \leqslant y_0.
> $$
> 如果 $x_0^n < y_0$，则对充分小的 $\varepsilon > 0$，也有
>
> $$
> (x_0 + \varepsilon)^n \leqslant x_0^n + \varepsilon \sum_{k=0}^{n-1} C_n^k |x_0|^k < y_0,
> $$
> 但这与 $x_0$ 是 $A$ 的上确界相矛盾。因此只能有 $x_0^n = y_0$。

**定义3**：逆映射

> 设 $f: X \rightarrow Y$ 为一一映射，因此对任意 $y \in Y$，存在唯一的 $x \in X$，使得 $y = f(x)$，定义映射
> $$
> f^{-1}: Y \rightarrow X, \quad f^{-1}(y) = x,
> $$
> 称为 $f$ 的逆映射。
>
> 根据这个定义，一一映射也称为可逆映射。逆映射有时也称为反函数。根据上面的例子，当 $n$ 为正奇数时，$f(x) = x^n$ 可逆，其反函数记为 $f^{-1}(x) = x^{\frac{1}{n}}$；当 $n$ 为一般正整数时，$f^{-1}(x) = x^{\frac{1}{n}}$ 对 $x \geqslant 0$ 也有定义。

**定义4**：复合映射

> 设 $f: Y \rightarrow Z, g: X \rightarrow Y$ 均为映射，我们定义映射
> $$
> f \circ g: X \rightarrow Z, \quad f \circ g(x) = f(g(x)), \quad x \in X,
> $$
> 称为 $f$ 和 $g$ 的复合映射。
>
> > 根据这个定义，一一映射也称为可逆映射。逆映射有时也称为反函数。根据上面的例子，当 $n$ 为正奇数时，$f(x) = x^n$ 可逆，其反函数记为 $f^{-1}(x) = x^{\frac{1}{n}}$；当 $n$ 为一般正整数时，$f^{-1}(x) = x^{\frac{1}{n}}$ 对 $x \geqslant 0$ 也有定义。
> >
> > 用复合映射的语言来描述，则映射 $f: X \rightarrow Y$ 可逆当且仅当存在映射 $g: Y \rightarrow X$，
> >
> > 使得
> > $$
> > f \circ g = \text{id}_Y, g \circ f = \text{id}_X
> > $$
> > 其中
> > $$
> > \text{id}_X: X \rightarrow X, \quad \text{id}_X(x) = x; \quad \text{id}_Y: Y \rightarrow Y, \quad \text{id}_Y(y) = y
> > $$
> > 分别表示 $X$ 到自身和 $Y$ 到自身的恒同映射。

/example/

> 当 $n$ 为正整数时，函数 $h(x) = x^{-n}$ ($x \neq 0$) 可以看成是两个函数 $f(x) = x^n$ 和 $g(x) = \frac{1}{x}$ ($x \neq 0$) 的复合。
>
> 进一步，对于有理数 $\frac{p}{q}$ ($p, q$ 为无公共因子的整数，$q$ 为正奇数)，我们定义
>
> $$
> x^{\frac{p}{q}} = (-1)^{\frac{p}{q}}(|x|^p)^{\frac{1}{q}},
> $$
> 其中，当 $p$ 为偶数时 $(-1)^{\frac{p}{q}} = 1$，当 $p$ 为奇数时 $(-1)^{\frac{p}{q}} = -1$。当 $q$ 为偶数时，上式对 $x < 0$ 无定义。

### · 函数

映射的复合可以看成是从已知映射出发构造新映射的一种方法。对于实函数而言，由于其值域是数集，而实数有四则运算，因此对函数也可以定义四则运算，这样就得到了构造函数的更多手段。

**定义5**：函数的四则运算

> 设 $f, g: X \rightarrow \mathbb{R}$ 为函数。
>
> (1) 如果 $\alpha, \beta$ 为实数，函数
>
> $$
> \alpha f + \beta g: X \rightarrow \mathbb{R}, \quad x \mapsto \alpha f(x) + \beta g(x)
> $$
> 称为 $f$ 和 $g$ 的线性组合；
>
> (2) 函数
>
> $$
> fg: X \rightarrow \mathbb{R}, \quad x \mapsto f(x)g(x)
> $$
> 称为 $f$ 和 $g$ 的乘积；
>
> (3) 如果 $g(x) \neq 0, \forall x \in X$，则函数
>
> $$
> \frac{f}{g}: X \rightarrow \mathbb{R}, \quad x \mapsto \frac{f(x)}{g(x)}
> $$
> 称为 $f$ 和 $g$ 的商。
>
> 注。如果两个函数的定义域不同，则我们也可以在它们的公共定义域上定义四则运算。

**定义6**：初等函数 

> 下列五类函数称为基本初等函数：
>
> (1) 常值函数 $f(x) = C$ 和幂函数 $f(x) = x^\alpha$ ($\alpha \in \mathbb{R}$);
>
> (2) 指数函数 $f(x) = a^x$ ($a > 0, a \neq 1$);
>
> (3) 对数函数 $f(x) = \log_a x$ ($a > 0, a \neq 1$);
>
> (4) 三角函数 $f(x) = \sin x, \cos x, \tan x$ 等；
>
> (5) 反三角函数 $f(x) = \arcsin x, \arccos x, \arctan x$ 等。
>
> 由基本初等函数经过有限次四则运算和复合运算所生成的函数称为初等函数。

初等函数的定义域是其自变量的最大取值范围。这些函数的完整定义通常要借助确界原理。以指数函数为例，设 $a > 0$，我们要对任意实数 $x$ 定义 $a^x$ 的值。

当 $a = 1$ 时，我们定义 $a^x = 1$。设 $a > 1$，我们规定 $a^0 = 1$。如果 $x > 0$，当 $x = \frac{p}{q}$ ($p, q$ 为正整数) 为有理数时，我们定义 $a^x$ 为这样一个正数，它的 $q$ 次方为 $a^p$；当 $x$ 为正无理数时，定义
$$
a^x = \sup\{a^r \mid r > 0, r \in \mathbb{Q}\};
$$
当 $x < 0$ 时，定义

$$
a^x = \frac{1}{a^{-x}};
$$
如果 $a < 1$，定义

$$
a^x = \left(\frac{1}{a}\right)^{-x}.
$$
这样就定义了所有的指数函数。类似的，还可以定义当 $a$ 为无理数时的幂函数 $x^\alpha$ ($x > 0$)，我们留给读者完成。在后面的章节中我们将通过指数函数和对数函数的复合来重新考虑幂函数的定义。

一元函数也可用其平面图像来直观表示。函数 $f$ 的图像是指由 $(x, f(x))$ ($x$ 属于 $f$ 的定义域) 组成的集合，它是平面 $\mathbb{R}^2 = \mathbb{R} \times \mathbb{R}$ 的子集。通过观察函数图像可以了解函数的简单特性。函数的简单特性包括：

> (1) 有界性。如果 $f$ 的值域有上界，则称函数 $f$ 有上界；如果 $f$ 的值域有下界，则称 $f$ 有下界；既有下界又有上界的函数称为有界函数。
>
> (2) 单调性。如果对于定义域中任意的 $x_1 < x_2$，均有 $f(x_1)(<) \leqslant f(x_2)$，则称 $f$ 是 (严格) 单调递增函数；如果对于定义域中任意的 $x_1 < x_2$，均有 $f(x_1)(>) \geqslant f(x_2)$，则称 $f$ 是 (严格) 单调递减函数；它们统称为单调函数。
>
> (3) 奇偶性。如果 $f(x) = -f(-x)$，则称 $f$ 是奇函数；如果 $f(x) = f(-x)$，则称 $f$ 是偶函数。
>
> (4) 周期性。如果存在常数 $T \neq 0$，使得 $f(x) = f(x + T)$，则称 $f$ 是周期函数，$T$ 为其周期。周期函数的典型例子是三角函数。