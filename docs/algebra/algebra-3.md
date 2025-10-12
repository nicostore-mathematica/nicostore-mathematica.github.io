---
title: Chapter 3 线性空间
createTime: 2025/09/17 23:22:15
permalink: /algebra/algebra-3/
---

"algebra-3" 和 "algebre-4" 的内容在绿皮书中是交叉的，这里受限于 typora 的运行以及在参考了北师大《代数学基础》和本校的教材等教科书后改变了部分顺序.

## Part 1 线性空间

### · 数域

$$
\mathbb{Z} \subseteq \mathbb{Q} \subseteq \mathbb{R} \subseteq \mathbb{C}
$$

**定义1**:

> 设 $K$ 为 $\mathbb{C}$ 的子集，且至少包含两个不同元素。
>
> 若 $K$ 中任意两个元素的加、减、乘、除（除数不为 0）仍然属于 $K$，则称 $K$ 为**数域**。  
>
> 若 $K$ 中任意两个元素的加、减、乘仍属于 $ K $，则称为**数环**。
>
> - $\mathbb{Z}$：整数环  
> - $\mathbb{Q}$：有理数域  
> - $\mathbb{R}$：实数域  
> - $\mathbb{C}$：复数域  

例1  $\mathbb{Q}(\sqrt{2}) = \{ a + b\sqrt{2} \mid a, b \in \mathbb{Q} \}$  是数域。

> /proof/
>
> 先证明  $a + b\sqrt{2} = 0 \Rightarrow a = b = 0$ 
>
>
> $$
> (a + b\sqrt{2}) \pm (c + d\sqrt{2}) = (a \pm c) \pm (b \pm d)\sqrt{2} \in \mathbb{Q}(\sqrt{2}) \\
> $$
>
> $$
> (a + b\sqrt{2}) \cdot (c + d\sqrt{2}) = (ac + 2bd) + (ad + bc)\sqrt{2} \in \mathbb{Q}(\sqrt{2}) \\
> $$
>
> $$
> c + d\sqrt{2} \neq 0 \Rightarrow c \neq 0 \text{ or } d \neq 0 \Rightarrow c - d\sqrt{2} \neq 0 \\
> $$
>
> $$
> \frac{a + b\sqrt{2}}{c + d\sqrt{2}} = \frac{(a + b\sqrt{2})(c - d\sqrt{2})}{(c + d\sqrt{2})(c - d\sqrt{2})} = \frac{ac - 2bd}{c^2 - 2d^2} + \frac{bc - ad}{c^2 - 2d^2}\sqrt{2} \in \mathbb{Q}(\sqrt{2})
> $$

例2  $\mathbb{Q}(\sqrt{3}) = \{ a + b\sqrt{3} + c\sqrt{4} \mid a, b, c \in \mathbb{Q} \}$  是数域。

> 先证明  $a + b\sqrt{3} + c\sqrt{4} = 0 \Rightarrow a^2 + 2b^2 + 4c^2 - 2abc = 0$  
>
>
> $$
> \Rightarrow a = b = c = 0
> $$

- 推广1：  $\mathbb{Q}(\sqrt{2}) = \{ a_0 + a_1\sqrt{2} + \cdots + a_n\sqrt{2^n} \mid a_i \in \mathbb{Q}, 0 \leq i \leq n \}$  是数域。

- 推广2：  $P$  为素数，则  $\mathbb{Q}(\sqrt{p}) = \{ a + b\sqrt{p} \mid a, b \in \mathbb{Q} \}$  是数域。

例3  $\left\{ a_0 + a_1\pi + \cdots + a_n\pi^n \mid a_i \in \mathbb{Q} \right\}$  是数域。

> $\pi$  是超越数 $\overset{def}\iff$ 若  $b_0\pi^m + b_1\pi^{m+1} + \cdots + b_m = 0$   $b_j \in \mathbb{Q}$ 
>
> 则  $b_0 = b_1 = \cdots = b_m = 0$  （否则不为 0 加减乘除仍封闭）
>
> $\alpha \in \mathbb{C}$  称  $\alpha$  为代数数
> $$
> \overset{def}\iff \exist f(x) = a_nx^n + a_{n-1}x^{n-1} + \cdots + a_1x + a_0
> $$
> $st. f(\alpha) = 0$  即 $\alpha$ 是 $f(x)$ 的根。

例4   $S = \{ a + b\sqrt{2} \mid a, b \in \mathbb{Z} \}$  不是数域。

> 用反证法。设  $S$  是数域， $\mathbb{Z} \subseteq S$ 。
>
> $1 \in S \Rightarrow 2 \in S \Rightarrow \frac{1}{2} \in S$ ，即  $\frac{1}{2} = a + b\sqrt{2}$   $a, b \in \mathbb{Z}$ 
>
> 若  $b \neq 0$ ，则  $\sqrt{2} = \frac{a - \frac{1}{2}}{b} \in \mathbb{Q}$  矛盾！

例5  $S = \{ a\sqrt{2} \mid a \in \mathbb{R} \}$  不是数环。

> 反证法。设  $S$  为数环， $\sqrt{2} \in S \Rightarrow 2 = \sqrt{2} \cdot \sqrt{2} \in S$ 
>
> 即  $2 = a\sqrt{2}\quad a \in \mathbb{Q} \Rightarrow a = \sqrt{2} \notin \mathbb{Q}$  矛盾。

**定理2**：任一数域  $K$  必包含有理数域  $\mathbb{Q}$  即  $\mathbb{Q}$  是最小数域。

> $\forall a \in K \Rightarrow 0 = a - a \in K$ 
>
> 由定义（数域至少有2个不同元素）再取  $K$  的非零元素  $b$ ， $1 = \frac{b}{b} \in K$ 
>
> $$
> \left\{ \forall m \in \mathbb{Z}^+ ,\quad m = (1 + \cdots + 1) \in K,\quad
> -m = 0 - m \in K \right\} \Rightarrow \mathbb{Z} \subseteq K\\
> $$
> 任取  $\frac{m}{n} \in \mathbb{Q}$   $n \in \mathbb{Z}^+$   $m \in \mathbb{Z}^+$   $n \in K$   $m \in K \Rightarrow \frac{m}{n} \in K$  即  $\mathbb{Q} \subseteq K$ 

### · 线性空间

**定义1**：

> 设 $K$ 为数域，$a_1, a_2, \ldots, a_n \in K$
>
> $1 \times n$ 矩阵 $[a_1, a_2, \ldots, a_n]$ 称为 $K$ 上的 $n$ 维行向量， $n \times 1$ 矩阵 $\begin{bmatrix} a_1 \\ \vdots \\ a_n \end{bmatrix}$ 称为 $K$ 上的 $n$ 维列向量
>
> 记 $K_n = \{ (a_1, \ldots, a_n) \mid a_i = k, i \in \mathbb{N} \}$，$K$ 上的 $n$ 维行向量空间
>
> $K^n = \{ \begin{bmatrix} a_1 \\ \vdots \\ a_n \end{bmatrix} \mid a_i \in K, i \in \mathbb{N} \}$，$K$ 上的 $n$ 维列向量空间

$$
\alpha = \begin{pmatrix} a_1 \\ a_2 \\ \vdots \\ a_n \end{pmatrix}, \quad \beta = \begin{pmatrix} b_1 \\ b_2 \\ \vdots \\ b_n \end{pmatrix} \in K^n, \quad c \in K
$$


$$
\alpha - \beta \overset{\text{def}}{=} \begin{pmatrix} a_1 - b_1 \\ \vdots \\ a_i - b_i \end{pmatrix}, \quad \forall i \in \mathbb{N} \quad \quad
\alpha + \beta \overset{\text{def}}{=} \begin{pmatrix} a_1 + b_1 \\ \vdots \\ a_n + b_n \end{pmatrix}\quad \quad
c \cdot \alpha \overset{\text{def}}{=} \begin{pmatrix} ca_1 \\ \vdots \\ ca_n \end{pmatrix}
$$

> 行向量运算规则：$\alpha, \beta, \gamma \in K^n (K_n), k \in K$
>
> 1. 加法交换律：$\alpha + \beta = \beta + \alpha$
> 2. 加法结合律：$\alpha + (\beta + \gamma) = (\alpha + \beta) + \gamma$
> 3. 零向量：$\alpha + 0 = \alpha$
> 4. 负向量：$\alpha + (-\alpha) = 0$
> 5. 乘法单位元：$1 \cdot \alpha = \alpha$
> 6. 数乘分配律（左）：$(k + l) \alpha = k\alpha + l\alpha$
> 7. 数乘分配律（右）：$k(\alpha + \beta) = k\alpha + k\beta$
> 8. 数乘结合律：$(kl)\alpha = k(l\alpha)$

然后我们可以给出代数学中的一个核心定义：

**定义2**：

> 设 $K$ 为数域，$V$ 为非空集合。$V$ 上有一个加法运算 $+ : V \times V \rightarrow V$ ，即 $( \alpha, \beta ) \mapsto \alpha + \beta$
>
> $K$ 关于 $V$ 有一个数乘运算 $K \times V \rightarrow V$ ，即 $(k, \alpha) \mapsto k\alpha$
>
> 若加法运算和数乘运算满足八条性质，则称 $V$ 为数域 $K$ 上的线性空间或向量空间。

请注意，线性空间中的加法和数乘已经不再局限于数的加法和乘法的概念中了。也就是说，1+1等于几是由你自己定义的，只要你所定义的满足八条运算法则。

正是因为这个，对于零元，单位元，负元也是要根据八条法则确定。比如零元并不一定就是0.我们可以根据线性空间的性质得出。

此处本喵给出一个想法：
$$
f(\alpha+\beta)=f(\alpha)+f(\beta)\quad \quad f(k\alpha)=kf(\alpha)
$$

> /question/  我们是否可以说集合 $V$ 中元素 $\alpha$ 和 $\beta$ 直须满足上述条件 ( $k\in K$ ) 即可称之为线性空间？

例1： $K^n$ 和 $K_n$ 是 $K$ 上的线性空间

例2： $K[x] = \{ a_0x^n + \cdots + a_n \mid x$ 是未定元$, a_i \in K, i \in \mathbb{N} \}$ 

> 加法：
> $$
> f(x) = a_0x^n + \cdots + a_n\quad \quad
> g(x) = b_0x^m + \cdots + b_m \quad n \geq m\\
> f(x) + g(x) \overset{\text{def}}{=} a_0x^n + \cdots + (a_m + b_m)x^m + \cdots + (a_0 + b_0)
> $$
> 数乘：$k \cdot f(x) \overset{\text{def}}{=} ka_0x^n + \cdots + ka_nx + ka_n$
>
> $K[x]$ 是 $K$ 上的线性空间。

例3： $C[0,1]$：[0,1] 上连续函数全体，$\mathbb{R}$

> 加法：$(f+g)(x) \overset{\text{def}}{=} f(x) + g(x)$  	数乘：$(kf)(x) \overset{\text{def}}{=} kf(x)$
>
> → 成立八条性质 → $C[0,1]$ 是 $\mathbb{R}$ 上的线性空间。

例4： $M_{mn}(K)$ 是数域 $K$ 上 $m \times n$ 阶矩阵全体

> 加法：$A + B$ ← 矩阵加法  	数乘：$k \cdot A$ ← 矩阵数乘
>
> → 成立八条性质 → $M_{mn}(K)$ 是 $K$ 上的线性空间。

例5 设 $k_1 \leq k_2$ ( eg. $\mathbb{Q} \subseteq \mathbb{R} \subseteq \mathbb{C}$ )

> 加法：$a, b \in k_2$，$a + b$ ← 数加法，数乘： $k_1 \in k_2$，$a \in k_2$，$k_1 \cdot a$ ← 数乘法
>
> → 成立 → $k_2$ 是 $k_1$ 上的线性空间。
>
> 特别：$k$ 是 $k$ 的线性空间。

**命题3**：设 $V_k$ 是线性空间。

> 1. 零向量唯一
>    - 设 $0_1, 0_2$ 是零向量，则 $0_1 = 0_1 + 0_2 = 0_2$
> 2. 负向量唯一
>    - 设 $\beta$ 为都是 $\alpha$ 的负向量，即 $\alpha + \beta = 0$，$\alpha + \gamma = 0$，$\beta = \beta + 0 = \beta + (\alpha + \gamma) = (\beta + \alpha) + \gamma = 0 + \gamma = \gamma$
> 3. 加法消去律：$\alpha + \beta = \alpha + \gamma \Rightarrow \beta = \gamma$
>    - $\alpha - \alpha + \alpha + \beta = \alpha + \alpha + \gamma \Rightarrow \beta = \gamma$
> 4. $0\cdot \alpha = 0$
>    - $\alpha + 0 \cdot \alpha = (0 + 0) \alpha = 0 \cdot \alpha + 0 \cdot \alpha = 0$
> 5. $k \cdot 0 = 0$
>    - $k(0 + 0) = k \cdot 0 + k \cdot 0 = 0$
> 6. $-\alpha = (-1) \alpha$
>    - $\alpha + (-1) \alpha = (1 - 1) \alpha = 0 \cdot \alpha = 0$
> 7. 若 $k \alpha = 0$，则 $k = 0$ 或 $\alpha = 0$
>    - $k = 0$ 或 $\alpha \neq 0$，则 $k = 0$

> [!caution]
>
> 注意：
>
> (1) 加法消去律 ⇒ 可移项  
> $$
> \alpha = \beta + \gamma \Rightarrow 
> \begin{cases}
> \alpha - \beta = \gamma\\
> \alpha - \beta - \gamma = 0
> \end{cases}
> $$
> (2) $\alpha + \cdots + 0$ 不必加括号。

## Part 2 向量

### · 线性关系

考虑如下线性方程组：

$$
(*)\quad
\begin{cases}
a_{11}x_1 + a_{12}x_2 + \cdots + a_{1n}x_n = b_1 \\
a_{21}x_1 + a_{22}x_2 + \cdots + a_{2n}x_n = b_2 \\
\cdots \\
a_{m1}x_1 + a_{m2}x_2 + \cdots + a_{mn}x_n = b_m
\end{cases}
$$

不妨令：
$$
A = 
\begin{bmatrix}
a_{11} & a_{12} & \cdots & a_{1n} \\
a_{21} & a_{22} & \cdots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{m1} & a_{m2} & \cdots & a_{mn}
\end{bmatrix},\quad
\mathbf{x} = 
\begin{bmatrix}
x_1 \\ x_2 \\ \vdots \\ x_n
\end{bmatrix},\quad
\mathbf{b} = 
\begin{bmatrix}
b_1 \\ b_2 \\ \vdots \\ b_m
\end{bmatrix}
$$

则方程组 $(*)$ 等价于：
$$
A\mathbf{x} = \mathbf{b}
$$

设 $A = (\alpha_1, \alpha_2, \ldots, \alpha_n)$ 为列分块，其中  
$$
\alpha_j = 
\begin{bmatrix}
a_{1j} \\ a_{2j} \\ \vdots \\ a_{mj}
\end{bmatrix} \in K^m
$$

$$
A\mathbf{x} = (\alpha_1, \alpha_2, \ldots, \alpha_n)
\begin{pmatrix}
x_1 \\
x_2 \\
\vdots \\
x_n
\end{pmatrix}
= x_1\alpha_1 + x_2\alpha_2 + \cdots + x_n\alpha_n
$$

$$
(*) \iff A\mathbf{x} = \beta \iff x_1\alpha_1 + x_2\alpha_2 + \cdots + x_n\alpha_n = \beta
$$

**定义1**： 

> 设 $V$ 为数域 $K$ 上的线性空间，$\alpha_1, \alpha_2, \ldots, \alpha_n, \beta \in V$。  若存在 $k_1, k_2, \ldots, k_n \in K$，使得  
> $$
> \beta = k_1\alpha_1 + k_2\alpha_2 + \cdots + k_n\alpha_n
> $$
> 则称 $\beta$ 是 $\alpha_1, \ldots, \alpha_n$ 的**线性组合**，或称 $\beta$ 可由 $\alpha_1, \ldots, \alpha_n$ **线性表示**。
>
> > 注：方程组 $(*)$ 有解 $\iff \beta$ 是 $\alpha_1, \alpha_2, \ldots, \alpha_n$ 的线性组合。
>
> ***
>
> 设 $K^n$，定义标准单位行向量：
> $$
> e_i = (0, \ldots, 1, \ldots, 0),\quad 1 \le i \le n
> $$
> 其中第 $i$ 个位置为 1，其余为 0。
>
> 集合 $\{e_1, e_2, \ldots, e_n\}$ 称为 $K^n$ 的**标准单位行向量**。
>
> ***
>
> 任一行向量是标准单位行向量的线性组合。
>
> > **证明：**  
> >
> > 任取 $\alpha \in K^n$，设 $\alpha = (a_1, a_2, \ldots, a_n)$，其中 $a_i \in K$。 
> >
> > 则：
> > $$
> > \alpha = a_1e_1 + a_2e_2 + \cdots + a_ne_n \quad \text{（*）}
> > $$

考虑如下齐次线性方程组：

$$
(**)\quad
\begin{cases}
a_{11}x_1 + a_{12}x_2 + \cdots + a_{1n}x_n = 0 \\
a_{21}x_1 + a_{22}x_2 + \cdots + a_{2n}x_n = 0 \\
\cdots \\
a_{m1}x_1 + a_{m2}x_2 + \cdots + a_{mn}x_n = 0
\end{cases}
$$

等价于：
$$
(**) \iff A\mathbf{x} = 0 \iff x_1\alpha_1 + x_2\alpha_2 + \cdots + x_n\alpha_n = 0
$$
**定义2**：

> 设 $V_K$ 是线性空间，$\alpha_1, \alpha_2, \ldots, \alpha_n \in V$。  若在 $K$ 中存在**不全为零**的 $n$ 个数 $k_1, \ldots, k_n$，使得  
> $$
> k_1\alpha_1 + k_2\alpha_2 + \cdots + k_n\alpha_n = 0
> $$
> 则称 $\alpha_1, \alpha_2, \ldots, \alpha_n$ **线性相关**。
>
> 若不存在 $K$ 中不全为零的 $k_1, \ldots, k_n$ 使得上式成立，  
>
> 则称 $\alpha_1, \alpha_2, \ldots, \alpha_n$ **线性无关** 或 **线性独立**。

> [!important]
>
> (1) 线性无关的等价定义：
>
> 若 $k_1, \ldots, k_n \in K$，使得  
> $$
> k_1\alpha_1 + k_2\alpha_2 + \cdots + k_n\alpha_n = 0
> $$
> 则必有 $k_1 = k_2 = \cdots = k_n = 0$。
>
> (2) 线性相关和线性无关依赖于基域 $K$ 的选取（即 $k_1, \ldots, k_n \in K$）
>
> > **实例**：
> >
> > $\mathbb{R} \subseteq \mathbb{C} \Rightarrow \mathbb{C}$ 是 $\mathbb{R}$ 上的线性空间。
> >
> > **断言：** $\{i, i^2, i^3, i^4\}$ 在 $\mathbb{R}$ 上线性无关。

**向量组：** 有限个向量构成的集合。

/example/ 包含零向量的向量组必线性相关。

> **证明：**  
>
> 设 $\alpha_1 = 0$，$\alpha_2, \ldots, \alpha_n \in V$ ，取：
> $$
> 1 \cdot \alpha_1 + 0 \cdot \alpha_2 + \cdots + 0 \cdot \alpha_n = 0
> $$
>
> 系数不全为零（第一个系数为 1），故：
> $$
> \alpha_1, \alpha_2, \ldots, \alpha_n
> $$
> 线性无关

 /example/ $n$ 维标准单位行向量 $e_1, e_2, \ldots, e_n$ 必线性无关。

> **证明：**  
>
> 设：
> $$
> k_1e_1 + k_2e_2 + \cdots + k_ne_n = 0,\quad k_i \in K
> $$
>
> 即：
> $$
> 0 = (k_1, k_2, \ldots, k_n)
> \Rightarrow k_1 = k_2 = \cdots = k_n = 0
> $$
>
> 所以 $\{e_1, e_2, \ldots, e_n\}$ 线性无关

> [!important]
>
> 齐次线性方程组有非零解 ⇔ 向量组线性相关

**定理3**：

> 设 $1 \le m \le n$
>
> (1) 若 $\{\alpha_1, \alpha_2, \ldots, \alpha_m\}$ 线性相关，则  
> $$
> \{\alpha_1, \ldots, \alpha_m, \alpha_{m+1}, \ldots, \alpha_n\}
> $$
>
> 也线性相关
>
> (2) 若 $\{\alpha_1, \alpha_2, \ldots, \alpha_n\}$ 线性无关，则  
> $$
> \{\alpha_1, \alpha_2, \ldots, \alpha_m\}
> $$
>
> 也线性相关.
>
> > **(1)** 由定义，存在 $K$ 中**不全为零**的数 $k_1, \ldots, k_m$，使得  
> > $$
> > k_1\alpha_1 + k_2\alpha_2 + \cdots + k_m\alpha_m = 0
> > $$
> >
> > 令其余系数为 0：
> > $$
> > k_1\alpha_1 + k_2\alpha_2 + \cdots + k_m\alpha_m + 0\cdot\alpha_{m+1} + \cdots + 0\cdot\alpha_n = 0
> > $$
> >
> > 这些系数不全为零 $\Rightarrow$ 整个向量组线性相关。
> >
> > **(2)** 是 (1) 的逆否命题.

**定理4**：设 $V_K$ 是线性空间，$\alpha_1, \ldots, \alpha_n \in V$. 则：$\alpha_1, \ldots, \alpha_n$ 线性相关 $\iff \exists\ 1 \le i \le n$ ，使得 $\alpha_i$ 是  $\alpha_1, \ldots, \alpha_{i-1}, \alpha_{i+1}, \ldots, \alpha_n$ 的线性组合.

> **证明：**
>
> 充分性（$\Leftarrow$）：
>
> 不妨设 $\alpha_1$ 是 $\alpha_2, \ldots, \alpha_n$ 的线性组合，即  
> $$
> \exists\ k_2, \ldots, k_n \in K,\quad \alpha_1 = k_2\alpha_2 + \cdots + k_n\alpha_n
> $$
>
> 移项得：
> $$
> (-1)\alpha_1 + k_2\alpha_2 + \cdots + k_n\alpha_n = 0
> $$
>
> 系数不全为零 $\Rightarrow \alpha_1, \ldots, \alpha_n$ 线性相关。
>
> 必要性 $\Rightarrow$  
>
> \设 $\alpha_1, \ldots, \alpha_n$ 线性相关，即存在不全为零的数 $k_1, \ldots, k_n \in K$，使得  
> $$
> k_1\alpha_1 + k_2\alpha_2 + \cdots + k_n\alpha_n = 0
> $$
>
> 不妨设 $k_1 \ne 0$，则有：
> $$
> \alpha_1 = -\frac{k_2}{k_1}\alpha_2 - \cdots - \frac{k_n}{k_1}\alpha_n \quad \text{（*）}
> $$

**定理5** ：

> 设 $V_K$ 为线性空间，$\alpha_1, \ldots, \alpha_n, \beta \in V$ ，若 $\alpha_1, \ldots, \alpha_n$ 线性无关，则  
>
> - 要么 $\alpha_1, \ldots, \alpha_n, \beta$ 线性无关；  
> - 要么 $\beta$ 是 $\alpha_1, \ldots, \alpha_n$ 的线性组合。

**定理6**：

> 设 $\alpha_1, \ldots, \alpha_n, \beta \in V_K$，且 $\beta$ 是 $\alpha_1, \ldots, \alpha_n$ 的线性组合，即  
> $$
> \beta = k_1\alpha_1 + \cdots + k_n\alpha_n,\quad k_i \in K
> $$
>
> 则线性表示唯一（即系数 $k_1, \ldots, k_n$ 唯一）  
> $$
> \iff \alpha_1, \alpha_2, \ldots, \alpha_n
> $$
>
> 线性无关

**定理7**（线性组合的传递性）

> 不妨设：
> $$
> A = \{\alpha_1, \alpha_2, \ldots, \alpha_n\},\quad
> B = \{\beta_1, \ldots, \beta_j\},\quad
> C = \{\gamma_1, \gamma_2, \ldots, \gamma_s\}
> $$
> 若 $A$ 中任一向量都是 $B$ 中向量的线性组合；$B$ 中任一向量都是 $C$ 中向量的线性组合；
>
> 则 $C$ 中任一向量都是 $A$ 中向量的线性组合。
>
> > 注：此定理体现线性组合关系的“传递性”。

/example/ 设 $A = \{\alpha\}$，则  $A$ 线性无关 $\iff \alpha \ne 0$.

> **证明：**
>
> - 若 $\alpha \ne 0$，设 $k\alpha = 0$，$k \in K$，则 $k = 0$，故线性无关。
> - 若 $\alpha = 0$，则 $1 \cdot \alpha = 0$，系数不为零 ⇒ 线性相关。

/example/ 设 $\alpha = (a_1, a_2, \ldots, a_n)$，$\beta = (b_1, b_2, \ldots, b_n) \in K^n$ 则： $\alpha$ 与 $\beta$ 线性相关 $\iff a_i$ 与 $b_i$ 成比例

> 充分性：  
>
> 设 $a_i = k b_i$，$1 \le i \le n$，即 $\alpha = k\beta$ ，则 $\alpha - k\beta = 0$ ⇒ $\alpha, \beta$ 线性相关。
>
> 必要性：  
>
> 由 $\alpha, \beta$ 线性相关，不妨设 $\alpha$ 是 $\beta$ 的线性组合，即  
> $$
> \alpha = k\beta,\quad k \in K \Rightarrow a_i = k b_i,\quad 1 \le i \le n
> $$
>
> 即 $a_1$ 与 $b_i$ 成比例

/example/

设 $V = \mathbb{R}^2$，  
$$
\overrightarrow{OA} = (a_1, a_2),\quad \overrightarrow{OB} = (b_1, b_2)
$$

则：

- $\overrightarrow{OA}, \overrightarrow{OB}$ 线性相关 $\iff O, A, B$ 三点共线
- $\overrightarrow{OA}, \overrightarrow{OB}$ 线性无关 $\iff \triangle OAB$ 不退化
  $$
  \iff \begin{vmatrix} a_1 & a_2 \\ b_1 & b_2 \end{vmatrix} \ne 0
  $$

设 $V = \mathbb{R}^3$，  
$$
\overrightarrow{OA} = (a_1, a_2, a_3),\quad
\overrightarrow{OB} = (b_1, b_2, b_3),\quad
\overrightarrow{OC} = (c_1, c_2, c_3)
$$

则：

- $\overrightarrow{OA}, \overrightarrow{OB}, \overrightarrow{OC}$ 线性相关 $\iff O, A, B, C$ 四点共面
- $\overrightarrow{OA}, \overrightarrow{OB}, \overrightarrow{OC}$ 线性无关 $\iff OABC$ 是非退化四面体  
  $$
  \iff \begin{vmatrix}
  a_1 & a_2 & a_3 \\
  b_1 & b_2 & b_3 \\
  c_1 & c_2 & c_3
  \end{vmatrix} \ne 0
  $$

**推广**:
$$
\alpha_1 = (\alpha_{11}, \alpha_{12}, \ldots, \alpha_{1n}) \\
\alpha_2 = (\alpha_{21}, \alpha_{22}, \ldots, \alpha_{2n}) \\
\cdots \\
\alpha_n = (\alpha_{n1}, \alpha_{n2}, \ldots, \alpha_{nn}) \in K^n
$$

则：$\alpha_1, \alpha_2, \ldots, \alpha_n$ 线性无关
$$
\iff 
\begin{vmatrix}
\alpha_{11} & \alpha_{12} & \cdots & \alpha_{1n} \\
\alpha_{21} & \alpha_{22} & \cdots & \alpha_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
\alpha_{n1} & \alpha_{n2} & \cdots & \alpha_{nn}
\end{vmatrix} \ne 0
$$

### · 向量组的秩

$V$ 为 $K$ 上的线性空间，向量族为 $V$ 中向量的集合；向量组为 $V$ 中有限向量的集合.

**定义1**：

> 设 $S$ 是 $V$ 的向量族，若存在 $S$ 中的向量组 $\{\alpha_1, \alpha_2, \cdots, \alpha_r\}$，使得：
>
> 1. $\alpha_1, \alpha_2, \cdots, \alpha_r$ 线性无关；  
> 2. $S$ 中任一向量都是 $\alpha_1, \alpha_2, \cdots, \alpha_r$ 的线性组合，
>
> 则称 $\{\alpha_1, \alpha_2, \cdots, \alpha_r\}$ 为 $S$ 的**极大线性无关组**或**极大无关组**。

> [!important]
>
> - $\{\alpha_1, \alpha_2, \cdots, \alpha_r\}$ 线性无关。  
> - $\forall \alpha \in S$ ，$\{\alpha_1, \alpha_2, \cdots, \alpha_r, \alpha\}$ 线性相关。

**命题2**：包含非零向量的向量组 $S$ 必存在极大无关组。

> 对 $S$ 的向量个数 $\#S$ 进行归纳。
>
> - 若 $\#S = 1$，$S = \{\alpha\}$，$\alpha \neq 0$，极大无关组为 $\{\alpha\}$。✅
>
> - 下设 $\#S < k$ 时结论成立，下证 $\#S = k$ 的情形。
>
> (1). 若 $S$ 中 $k$ 个向量线性无关，则此时 $S$ 即为自己的极大无关组。  
>
> (2). 若 $S$ 中 $k$ 个向量线性相关，由定理，$\exists \alpha \in S$，使得 $\alpha$ 是 $S \setminus \{\alpha\}$ 中向量的线性组合。
>
> $\#(S \setminus \{\alpha\}) = k - 1$，断言 $S \setminus \{\alpha\}$ 包含非零向量。
>
> 用反证法：若 $S \setminus \{\alpha\}$ 都是零向量，由假设 $\alpha = 0$。这与 $S$ 包含非零向量矛盾！
>
> 由归纳假设，$S \setminus \{\alpha\}$ 存在极大无关组 $\{\alpha_1, \alpha_2, \cdots, \alpha_r\}$。
>
> 由假设 $\alpha$ 能线性表示 $S \setminus \{\alpha\}$ 能线性表示 $\{\alpha_1, \alpha_2, \cdots, \alpha_r\}$，  
>    （线性表示）
>
> $$
>    \Rightarrow \{\alpha_1, \alpha_2, \cdots, \alpha_r\}
> $$
>
> 是 $S$ 的极大无关组.

**引理3**：设 $A, B$ 为向量组，且 $A$ 中任一向量都是 $B$ 中向量的线性组合。若 $A$ 中向量线性无关，则 $\#A \leq \#B$。

> 证明：
>
> 设  
> $$
> A = \{\alpha_1, \alpha_2, \cdots, \alpha_r\}, \quad \#A = r \\
> B = \{\beta_1, \beta_2, \cdots, \beta_s\}, \quad \#B = s
> $$
>
> 用反证法，设 $r > s$，我们来推出矛盾！
>
> 由假设：  
> $$
> \alpha_i = \lambda_{i1}\beta_1 + \lambda_{i2}\beta_2 + \cdots + \lambda_{is}\beta_s, \quad \lambda_{ij} \in K
> $$
>
> 由 $A$ 线性无关，则 $\alpha_1 \neq 0$，从而 $\lambda_1, \cdots, \lambda_s$ 不全为 0。
>
> 不妨设 $\lambda_1 \neq 0$，则  
> $$
> \beta_1 = \frac{1}{\lambda_1}\alpha_1 - \frac{\lambda_2}{\lambda_1}\beta_2 - \cdots - \frac{\lambda_s}{\lambda_1}\beta_s
> $$
>
> $$
> \{\alpha_1, \cdots, \alpha_r\} \overset{\text{linear}}\rightarrow \{\beta_1, \beta_2, \cdots, \beta_s\} \overset{\text{linear}}\rightarrow \{\alpha_1, \beta_2, \cdots, \beta_s\}
> $$
>
> 证明了：$\forall i \leq r$，$\alpha_i$ 是 $\{\alpha_1, \cdots, \beta_s\}$ 的线性组合。
>
> **假设**：$\forall k < i \leq r$，$\alpha_i$ 是 $\{\alpha_1, \cdots, \alpha_k, \alpha_{k+1}, \cdots, \beta_s\}$ 的线性组合。
>
> 令  
> $$
> \alpha_{k+1} = \mu_1\alpha_1 + \cdots + \mu_k\alpha_k + \mu_{k+1}\beta_{k+1} + \cdots + \mu_s\beta_s
> $$
>
> 若 $\mu_{k+1} = \cdots = \mu_s = 0$，则 $\alpha_{k+1}$ 是 $\alpha_1, \cdots, \alpha_k$ 的线性组合，这与 $A$ 线性无关矛盾！
>
> 故不妨设 $\mu_{k+1} \neq 0$，从而  
> $$
> \beta_{k+1} = -\frac{\mu_1}{\mu_{k+1}}\alpha_1 - \cdots - \frac{\mu_k}{\mu_{k+1}}\alpha_k + \frac{1}{\mu_{k+1}}\alpha_{k+1} - \frac{\mu_{k+2}}{\mu_{k+1}}\beta_{k+2} - \cdots - \frac{\mu_s}{\mu_{k+1}}\beta_s
> $$
>
> $$
> \{\alpha_{k+2}, \cdots, \alpha_r\} \overset{\text{linear}}\rightarrow \{\alpha_1, \cdots, \alpha_k, \alpha_{k+1}, \cdots, \beta_s\} \overset{\text{linear}}\rightarrow \{\alpha_1, \cdots, \alpha_k, \alpha_{k+1}, \beta_{k+2}, \cdots, \beta_s\}
> $$
>
> 证明了：$\forall k+1 < i \leq r$，$\alpha_i$ 都是 $\{\alpha_1, \cdots, \alpha_k, \alpha_{k+1}, \beta_{k+2}, \cdots, \beta_s\}$ 的线性组合。
>
> 最后，$\forall s < i \leq r$，$\alpha_i$ 是 $\{\alpha_1, \cdots, \alpha_s\}$ 的线性组合。
>
> $\Rightarrow \alpha_r$ 是 $\alpha_1, \cdots, \alpha_s$ 的线性组合，这与 $A$ 线性无关矛盾！

**推广4**：若多的向量组可用少的向量组线性表示，则多的向量必线性相关。

**引理5**：设 $A, B$ 为两个线性无关的向量组，$A$ 的任一向量都是 $B$ 中向量的线性组合，且 $B$ 的任一向量都是 $A$ 中向量的线性组合，则 $\#A = \#B$。

**推论6**：设 $A, B$ 是向量族 $S$ 的极大无关组，则 $\#A = \#B$。

> **证明**：
>
> - $A, B$ 线性无关  
>
> - $$
>   A \subseteq S \overset{\text{linear}}\rightarrow B
>   $$
>
> - $$
>   B \subseteq S \overset{\text{linear}}\rightarrow A
>   $$
>
> 由引理5  $\Rightarrow\#A = \#B$.

**定义7**：向量族 $S$ 中极大线性无关组的向量个数称为 $S$ 的秩，记为 $\text{rank}(S)$ 或 $r(S)$。由推论6知，秩的定义不依赖于极大无关组的选择。约定由零向量构成的向量组秩为 0.

**定义8**：设 $A, B$ 是两个向量组，若 $A$ 中的每个向量都可以用 $B$ 中的向量线性表示，且 $B$ 中的每个向量也可以用 $A$ 中的向量线性表示，则称 $A, B$ 为等价的向量组。

**推论9**：等价的向量组有相同的秩。

> 1. 若 $A$ 或 $B$ 是由零向量构成，则另一个也必是由零向量构成，从而 $r(A) = r(B) = 0$.
>
> 2. 若 $A, B$ 至少有一个非零向量，则：
>
>    设 $A_1$ 是 $A$ 的一个极大线性无关组，$B_1$ 是 $B$ 的一个极大线性无关组。
>
>    由命题2，有 $r(A) = \#A_1$，$r(B) = \#B_1$。
>
>    因为 $A_1 , B_1$ 线性无关，所以
>    $$
>    A_1 \subseteq A \overset{\text{linear}}\rightarrow B \overset{\text{linear}}\rightarrow B_1\\
>    B_1 \subseteq B \overset{\text{linear}}\rightarrow A \overset{\text{linear}}\rightarrow A_1
>    $$
>    所以 $A_1 = B_1$，于是 $\#A_1 = \#B_1$，即 $r(A) = r(B)$.
>
> > **结论**：等价向量组的秩相等.

若 $S = V_k$，则：极大线性无关组 $\rightarrow$ 基；秩 $\rightarrow$ 维数

**定义10**：设 $V_k$ 为线性空间，若存在 $V$ 中线性无关的向量组 $\{e_1, e_2, \dots, e_n\}$，使得 $V$ 中任一向量都是 $\{e_1, e_2, \dots, e_n\}$ 的线性组合，则称 $\{e_1, e_2, \dots, e_n\}$ 为 $V$ 的一组基，$V$ 的维数为 $n$（记为 $\dim_k V = n$），$V$ 称为 $k$ 上的 $n$ 维线性空间。若不存在有限个向量构成 $V$ 的一组基，则称 $V$ 为无限维线性空间。

> 修正线性表示与线性无关的定义  $\Rightarrow V_k$ 上都存在基
>
> 选择公理或 Zorn 引理  $\Rightarrow V_k$ 上都存在基

**推论11**：在 $n$ 维线性空间 $V$ 中，超过 $n$ 个向量的向量组必线性相关。

> 📌 **注**：这是线性代数中非常重要的结论，常用于判断向量组的线性相关性。

**定理12**：

> 若下列条件之一成立：
>
> 1. $e_1, e_2, \dots, e_n$ 线性无关；  
> 2. $V$ 中任一向量都是 $e_1, e_2, \dots, e_n$ 的线性组合，
>
> 则 $\{e_1, \dots, e_n\}$ 是 $V$ 的一组基。
>
> > /proof/
> >
> > 情况1：设 (1) 成立，即 $e_1, \dots, e_n$ 线性无关。
> >
> > 因为 $\dim V = n$，所以对任意 $\alpha \in V$，由 **推论11** 可知：$e_1, \dots, e_n, \alpha$ 必线性相关。
> >
> > 由前一定理可知，$\alpha$ 是 $e_1, \dots, e_n$ 的线性组合。 ✅
> >
> > 因此，(2) 也成立。
> >
> > 情况2：设 (2) 成立，即 $V$ 中任一向量是 $\{e_1, \dots, e_n\}$ 的线性组合。
> >
> > 可设 $\{e_1, \dots, e_r\}$ 是 $\{e_1, \dots, e_n\}$ 的极大线性无关组。
> >
> > 由于
> > $$
> > V \overset{\text{linear}}\rightarrow \text{span}\{e_1, \dots, e_n\} \Rightarrow \text{span}\{e_1, \dots, e_r\} \overset{\text{linear}}\rightarrow V
> > $$
> > 又因 $\{e_1, \dots, e_r\}$ 是极大无关组，且生成 $V$，故它是 $V$ 的一组基。$\Rightarrow\dim V = r = n$ ✅

**命题13**：设 $V$ 为 $n$ 维线性空间，$\{v_1, \dots, v_m\}$（$m < n$）为线性无关的向量，$\{e_1, \dots, e_n\}$ 为 $V$ 的一组基. 则存在 $n - m$ 个向量（不妨设为 $e_1, \dots, e_{n-m}$ ），使得 
$$
\{v_1, \dots, v_m, e_1, \dots, e_{n-m}\}
$$
是 $V$ 的一组基.

> 先证：存在 $1 \leq i \leq m$，使得 $v_1, \dots, v_m, e_i$ 线性无关。
>
> 用**反证法**：假设对所有 $1 \leq i \leq m$，都有 $v_1, \dots, v_m, e_i$ 线性相关。
>
> 由前一定理可知，$e_i$ 是 $v_1, \dots, v_m$ 的线性组合（对每个 $i$）。
>
> 于是：
> $$
> \{e_1, \dots, e_n\} \overset{\text{linear}}\rightarrow \text{span}\{v_1, \dots, v_m\}
> $$
>
> 但 $\{e_1, \dots, e_n\}$ 线性无关 ⇒ $n \leq m$，这与 $m < n$ 矛盾！
>
> 因此，必存在某个 $i$，使得 $v_1, \dots, v_m, e_i$ 线性无关。
>
> 不妨设 $v_1, \dots, v_m, e_1$ 线性无关。
>
> 继续添加其他 $e_j$：
>
> - 若 $m+1 = n$，则 $\{v_1, \dots, v_m, e_1\}$ 就是 $V$ 的一组基；
> - 若 $m+1 < n$，同理可找到下一个 $e_j$，使得新向量组仍线性无关。
>
> 最终得到 $n$ 个线性无关向量，构成 $V$ 的一组基。
>
> 由 **定理12**，该组为基。 ✅

**定理14**（基扩张定理）：设 $V$ 为 $n$ 维线性空间，则：

1. $V$ 中任一线性无关的向量组可以扩充为 $V$ 的一组基；  
2. 子空间 $U$ 的基可以扩张为全空间 $V$ 的一组基。

## Part 3 坐标向量

**引理1**：设 $V_k$ 是 $n$ 维线性空间，$\{e_1, e_2, \dots, e_n\}$ 是一组基。

若 $\alpha \in V$ 满足：
$$
\alpha = a_1 e_1 + a_2 e_2 + \cdots + a_n e_n = b_1 e_1 + b_2 e_2 + \cdots + b_n e_n
$$

则 $a_i = b_i$，对所有 $i \leq n$.

> 证明：  
> $$
> (a_1 - b_1)e_1 + (a_2 - b_2)e_2 + \cdots + (a_n - b_n)e_n = 0
> $$
>
> 由于 $\{e_1, \dots, e_n\}$ 线性无关 ⇒ 所有系数为零：
>
> $$
> a_1 - b_1 = a_2 - b_2 = \cdots = a_n - b_n = 0 \Rightarrow a_i = b_i \quad \forall i \leq n
> $$
> $V_K$ 是，线性空间，固定一组基 $\{e_1, \dots, e_n\}$ 及其顺序.
>
> 定义映射 $\varphi: V \to K^n$，(双射或一一对应) 其中
> $$
> \alpha = \sum_{i=1}^n \alpha_i e_i \longmapsto 
> \begin{pmatrix}
> \alpha_1 \\
> \alpha_2 \\
> \vdots \\
> \alpha_n
> \end{pmatrix}
> $$
> 称为 $\alpha$ 在给定基 $\{e_1, \dots, e_n\}$ 下的 **坐标向量**。
>
> - **单射**：  
>
>   若 $\alpha \ne \beta$ ，则 $\varphi(\alpha) \ne \varphi(\beta)$  
>
>   反之，若 $\varphi(\alpha) = \varphi(\beta)$，则 $\alpha = \beta$
>
>   证明：设 $\varphi(\alpha) = \varphi(\beta) = \begin{pmatrix} \alpha_1 \\ \vdots \\ \alpha_n \end{pmatrix}$，由定义：
>   $$
>   \alpha = \alpha_1 e_1 + \cdots + \alpha_n e_n, \quad \beta = \alpha_1 e_1 + \cdots + \alpha_n e_n \Rightarrow \alpha = \beta
>   $$
>
> - **满射**：  
>   对任意 $x = \begin{pmatrix} x_1 \\ \vdots \\ x_n \end{pmatrix} \in K^n$，取 $\alpha = x_1 e_1 + \cdots + x_n e_n \in V$，则  
>   $$
>     \varphi(\alpha) = \begin{pmatrix} x_1 \\ \vdots \\ x_n \end{pmatrix} = x
>   $$
>
>    $\Rightarrow\varphi$ 是双射（一一对应）

**定义2**：线性同构

设 $V, U$ 是数域 $K$ 上的线性空间，$\varphi: V \to U$ 为双射。若对任意 $\alpha, \beta \in V$，$k \in K$，满足：

1. $\varphi(\alpha + \beta) = \varphi(\alpha) + \varphi(\beta)$ —— **保持加法**
2. $\varphi(k\alpha) = k\varphi(\alpha)$ —— **保持数乘**

则称 $\varphi: V \to U$ 为 **线性同构**，简称 $V$ 同构于 $U$，记作 $V \cong U$

**定理3**：前面定义的 $\varphi: V \to K^n$ 是线性同构

> **证明**：设 $\alpha, \beta \in V$，令  
> $$
> \alpha = \sum_{i=1}^n a_i e_i, \quad \beta = \sum_{i=1}^n b_i e_i
> $$
> 则  
> $$
> \varphi(\alpha) = \begin{pmatrix} a_1 \\ \vdots \\ a_n \end{pmatrix}, \quad \varphi(\beta) = \begin{pmatrix} b_1 \\ \vdots \\ b_n \end{pmatrix}
> $$
>
> 计算：
> $$
> \alpha + \beta = \sum_{i=1}^n (a_i + b_i)e_i \Rightarrow \varphi(\alpha + \beta) = \begin{pmatrix} a_1 + b_1 \\ \vdots \\ a_n + b_n \end{pmatrix} = \begin{pmatrix} a_1 \\ \vdots \\ a_n \end{pmatrix} + \begin{pmatrix} b_1 \\ \vdots \\ b_n \end{pmatrix} = \varphi(\alpha) + \varphi(\beta)
> $$
>
> 又对任意 $k \in K$，有
> $$
> k\alpha = \sum_{i=1}^n k a_i e_i \Rightarrow \varphi(k\alpha) = \begin{pmatrix} k a_1 \\ \vdots \\ k a_n \end{pmatrix} = k \begin{pmatrix} a_1 \\ \vdots \\ a_n \end{pmatrix} = k \varphi(\alpha)
> $$
>
> $\Rightarrow \varphi$ 是线性映射，且是双射 $\Rightarrow \varphi$ 是线性同构 

> [!important]
>
> 结论：线性同构保持向量组的线性关系，即：
>
> - 将向量的线性组合映为对应向量的线性组合；
> - 将线性相关向量映为线性相关的向量；
> - 将线性无关向量映为线性无关的向量。

**定理4**：

(1) 设 $\varphi: V \to U$ 是线性同构，则 $\varphi$ 保持向量组的线性关系：

- 将向量的线性组合映为对应向量的线性组合
- 将线性相关向量映为线性相关的向量
- 将线性无关向量映为线性无关的向量

(2) 由定理3知 $\varphi: V \to K^n$ 是线性同构。设 $\{\alpha_1, \dots, \alpha_m\}$ 是 $V$ 中向量组，令 $\widetilde{\alpha}_i = \varphi(\alpha_i)$，则  
$$
\{\alpha_1, \dots, \alpha_m\} \text{ and } \{\widetilde{\alpha}_1, \dots, \widetilde{\alpha}_m\}
$$
具有相同的秩，即：**向量组的秩在坐标变换下不变**

> 证明：
>
> (1) 先证 $\varphi(0) = 0$
>
> $$
> \varphi(0 + 0) = \varphi(0) + \varphi(0) \Rightarrow \varphi(0) = \varphi(0) + \varphi(0)
> \Rightarrow \varphi(0) = 0
> $$
>
> 进一步定义核空间：
> $$
> \varphi^{-1}(0) = \left\{ \alpha \in V \mid \varphi(\alpha) = 0 \right\} = \{0\}
> $$
>
> 即：$\varphi$ 的核为零 $\Rightarrow \varphi$ 是单射。
>
> > (i) 设 $\rho = \lambda_1 \alpha_1 + \cdots + \lambda_m \alpha_m$
> >
> > 则：
> > $$
> > \varphi(\rho) = \varphi(\lambda_1 \alpha_1 + \cdots + \lambda_m \alpha_m) = \lambda_1 \varphi(\alpha_1) + \cdots + \lambda_m \varphi(\alpha_m)
> > $$
> >
> > $\Rightarrow \varphi$ **保持线性组合**，即满足 **定义2** (1) 和 (2)
> >
> > (ii) 设 $\lambda_1 \alpha_1 + \cdots + \lambda_m \alpha_m = 0$，且 $\lambda_i$ 不全为 0
> >
> > 则：
> > $$
> > 0 = \varphi(0) = \varphi(\lambda_1 \alpha_1 + \cdots + \lambda_m \alpha_m) = \lambda_1 \varphi(\alpha_1) + \cdots + \lambda_m \varphi(\alpha_m)
> > $$
> >
> > 说明 $\varphi(\alpha_1), \dots, \varphi(\alpha_m)$ 线性相关。
> >
> > (iii) 设 $\alpha_1, \dots, \alpha_m$ 线性无关，证 $\varphi(\alpha_1), \dots, \varphi(\alpha_m)$ 线性无关
> >
> > 设：
> > $$
> > \lambda_1 \varphi(\alpha_1) + \cdots + \lambda_m \varphi(\alpha_m) = 0
> > $$
> >
> > 由 (i) 得：(因 $\varphi$ 单射)
> > $$
> > \varphi(\lambda_1 \alpha_1 + \cdots + \lambda_m \alpha_m) = 0
> > \Rightarrow \lambda_1 \alpha_1 + \cdots + \lambda_m \alpha_m = 0
> > $$
> >
> > 又因 $\alpha_1, \dots, \alpha_m$ 线性无关  $\Rightarrow \lambda_1 = \cdots = \lambda_m = 0$
> >
> > $\Rightarrow \varphi(\alpha_1), \dots, \varphi(\alpha_m)$ 线性无关
>
> (2) 设 $\{\alpha_1, \dots, \alpha_r\}$ 是 $\{\alpha_1, \dots, \alpha_m\}$ 的极大无关组
>
> 断言：$\{\varphi(\alpha_1), \dots, \varphi(\alpha_r)\}$ 是 $\{\varphi(\alpha_1), \dots, \varphi(\alpha_m)\}$ 的极大无关组
>
> **理由**：  
>
> - 由 (iii) 知：线性无关组映为线性无关组
> - 由 (ii) 知：线性相关组映为线性相关组
> - 故秩不变，极大无关组的个数相同
>
>  $\Rightarrow$ 秩相同，且极大无关组指标相同

## Part 4 基变换 过渡矩阵

**定义1**：基变换与过渡矩阵

设 $V_k$ 是线性空间，$\{e_1, e_2, \dots, e_n\}$ 和 $\{f_1, f_2, \dots, f_n\}$ 是两组基，则有：

$$
\begin{cases}
f_1 = a_{11}e_1 + a_{12}e_2 + \cdots + a_{1n}e_n \\
f_2 = a_{21}e_1 + a_{22}e_2 + \cdots + a_{2n}e_n \\
\vdots \\
f_n = a_{n1}e_1 + a_{n2}e_2 + \cdots + a_{nn}e_n
\end{cases}
$$

记前面的系数构成的 $n \times n$ 方阵为：
$$
A = (a_{ij})_{n\times n}
$$

称为 **从基** $\mathcal{E}$ **到基** $\mathcal{F}$ **的过渡矩阵**

**注意**：$A$ 可逆，因为新基可由旧基线性表示，且线性无关

> 形式行向量 $(\alpha_1, \alpha_2, \cdots, \alpha_n)$，其中 $\alpha_i \in V$
>
> 相等
> $$
> (\alpha_1, \alpha_2, \cdots, \alpha_n) = (\beta_1, \beta_2, \cdots, \beta_n) \stackrel{\text{def}}{\Longleftrightarrow} \alpha_i = \beta_i,\ \forall 1 \leq i \leq n
> $$
> 加法
> $$
> (\alpha_1, \alpha_2, \cdots, \alpha_n) + (\beta_1, \beta_2, \cdots, \beta_n) \stackrel{\text{def}}{=} (\alpha_1 + \beta_1, \alpha_2 + \beta_2, \cdots, \alpha_n + \beta_n)
> $$
> 数乘
> $$
> k \in K,\quad
> k \cdot (\alpha_1, \alpha_2, \cdots, \alpha_n) \stackrel{\text{def}}{=} (k\alpha_1, k\alpha_2, \cdots, k\alpha_n)
> $$
> 矩阵乘法
> $$
> (\alpha_1, \alpha_2, \cdots, \alpha_n) A_{m \times n} = \left( \sum_{i=1}^n \alpha_i a_{i1}, \cdots, \sum_{i=1}^n \alpha_i a_{im} \right)
> $$

设 $A = (a_{ij})_{m \times n}$ 列分块
$$
A = (\alpha_1, \alpha_2, \cdots, \alpha_n),\quad \alpha_i \in K^m
$$

$$
(f_1, f_2, \cdots, f_m) = (e_1, e_2, \cdots, e_m) A\cdots\cdots(*)
$$

 $A$ 即为**过渡矩阵**

**引理2**：设 $\{e_1, e_2, \cdots, e_n\}$ 为 $V$ 的基，$A = (a_{ij})_{m \times n}$，令 $B = (b_{ij})_{m \times n}$，使得  
$$
(e_1, e_2, \cdots, e_n) A = (e_1, e_2, \cdots, e_n) B
\Rightarrow A = B
$$

> **证明**：
> $$
> (e_1, e_2, \cdots, e_n) A = \left( \sum_{i=1}^n a_{i1} e_i, \cdots, \sum_{i=1}^n a_{im} e_i \right)
> $$
>
> $$
> (e_1, e_2, \cdots, e_n) B = \left( \sum_{i=1}^n b_{i1} e_i, \cdots, \sum_{i=1}^n b_{im} e_i \right)
> $$
>
> $$
> \Rightarrow \sum_{i=1}^n a_{i1} e_i = \sum_{i=1}^n b_{i1} e_i,\ \cdots,\ \sum_{i=1}^n a_{im} e_i = \sum_{i=1}^n b_{im} e_i
> $$
>
> $$
> \Rightarrow a_{ij} = b_{ij},\quad \forall 1 \leq i \leq n,\ 1 \leq j \leq m.
> $$
>
> 在线性空间中，$\{e_1, e_2, \cdots, e_n\}$ 为旧基，$\{f_1, f_2, \cdots, f_n\}$ 新基
>
> 对任意 $\alpha \in V$，
> $$
> \alpha = \lambda_1 e_1 + \lambda_2 e_2 + \cdots + \lambda_n e_n \longrightarrow 
> \begin{pmatrix}
> \lambda_1 \\ \lambda_2 \\ \vdots \\ \lambda_n
> \end{pmatrix}_{\text{old}}
> $$
>
> $$
> \alpha = \mu_1 f_1 + \mu_2 f_2 + \cdots + \mu_n f_n \longrightarrow 
> \begin{pmatrix}
> \mu_1 \\ \mu_2 \\ \vdots \\ \mu_n
> \end{pmatrix}_{\text{new}}
> $$
>
> 设 $(f_1, f_2, \cdots, f_n) = (e_1, e_2, \cdots, e_n) A$ ，则：
> $$
> \alpha = (e_1, e_2, \cdots, e_n)
> \begin{pmatrix}
> \lambda_1 \\ \lambda_2 \\ \vdots \\ \lambda_n
> \end{pmatrix}
> =
> (f_1, f_2, \cdots, f_n)
> \begin{pmatrix}
> \mu_1 \\ \mu_2 \\ \vdots \\ \mu_n
> \end{pmatrix}
> = (e_1, e_2, \cdots, e_n) A
> \begin{pmatrix}
> \mu_1 \\ \mu_2 \\ \vdots \\ \mu_n
> \end{pmatrix}
> $$
>
> 易推出引理2：
> $$
> \begin{pmatrix}
> \lambda_1 \\ \lambda_2 \\ \vdots \\ \lambda_n
> \end{pmatrix}
> = A
> \begin{pmatrix}
> \mu_1 \\ \mu_2 \\ \vdots \\ \mu_n
> \end{pmatrix}
> \quad \cdots\cdots\ \text{(**) }
> $$
> $(*) \Rightarrow (**)$  ✓  
>
> $(**) \Rightarrow (*)$: $f_i$ 的新坐标向量为 $\begin{pmatrix} 0 \\ \vdots \\ 1 \\ \vdots \\ 0 \end{pmatrix}$，第 $i$ 个位置为 1。
>
> 由 $(**)$ 可得 $f_i$ 的旧坐标向量为
> $$
> A \begin{pmatrix} 0 \\ \vdots \\ 1 \\ \vdots \\ 0 \end{pmatrix}_i = \begin{pmatrix} a_{i1} \\ a_{i2} \\ \vdots \\ a_{in} \end{pmatrix}
> \Rightarrow f_i = a_{i1}e_1 + a_{i2}e_2 + \cdots + a_{in}e_n, \quad \forall 1 \leq i \leq n,\quad A=(a_{ij})_{n\times n}
> $$
>
> $\Rightarrow(*)$ 成立，即 $A$ 为过渡矩阵。

**命题3**：设 $V_k$ 为线性空间，$\{e_1, e_2, \cdots, e_n\}$、$\{f_1, f_2, \cdots, f_n\}$、$\{g_1, g_2, \cdots, g_n\}$ 为三组基。  从基 $e$ 到基 $f$ 的过渡阵为 $A$，从基 $f$ 到基 $g$ 的过渡阵为 $B$，则：

1. $A$ 为可逆阵；
2. 从基 $e$ 到基 $g$ 的过渡阵为 $AB$ .

> 证明：
>
> **(1)** 设从基 $f$ 到基 $e$ 的过渡阵为 $P$，  
> $$
> (f_1, f_2, \cdots, f_n) = (e_1, e_2, \cdots, e_n) A \\
> (e_1, e_2, \cdots, e_n) = (f_1, f_2, \cdots, f_n) P
> $$
>
> $$
> \Rightarrow  (e_1, e_2, \cdots, e_n) I_n = (e_1, e_2, \cdots, e_n) AP
> $$
>
> 由 **引理2** $\Rightarrow AP = I_n$，从而 $A$ 可逆。
>
> **(2)** 设从基 $e$ 到基 $g$ 的过渡阵为 $C$，  
> $$
> (f_1, f_2, \cdots, f_n) = (e_1, e_2, \cdots, e_n) A \\
> (g_1, g_2, \cdots, g_n) = (f_1, f_2, \cdots, f_n) B \\
> (g_1, g_2, \cdots, g_n) = (e_1, e_2, \cdots, e_n) C
> $$
>
> 又因为
> $$
> (g_1, g_2, \cdots, g_n) = (e_1, e_2, \cdots, e_n) AB
> $$
>
> 从而有：  
> $$
> C = AB
> $$

注：若用行向量 $(\lambda_1, \lambda_2, \cdots, \lambda_n)$ 来表示坐标向量

设 $\{e_1, e_2, \cdots, e_n\}$、$\{f_1, \cdots, f_n\}$ 为两组基，  

形式列向量：
$$
\begin{pmatrix}
e_1 \\
e_2 \\
\vdots \\
e_n
\end{pmatrix}
$$

则有：
$$
(*)'\cdots\cdots \begin{pmatrix}
f_1 \\
f_2 \\
\vdots \\
f_n
\end{pmatrix}
= X
\begin{pmatrix}
e_1 \\
e_2 \\
\vdots \\
e_n
\end{pmatrix}
$$

$X$ 为过渡矩阵

$$
(**)'\Rightarrow(\lambda_1, \lambda_2, \cdots, \lambda_n) = (\mu_1, \mu_2, \cdots, \mu_n) A
$$
