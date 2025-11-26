---
title: Chapter 12 级数
createTime: 2025/10/06 10:48:41
permalink: /integral/integral-12/
---

在 $x = x_0$ 处 n 阶泰勒公式
$$
f(x) = f(x_0) + \frac{f'(x_0)}{1!}(x - x_0) + \frac{f''(x_0)}{2!}(x - x_0)^2 + \cdots\frac{f^{(n)}(x_0)}{n!}(x - x_0)^n + R_n(x)
$$
泰勒公式本质上就是级数的一种

## Part 1 数项级数

> /Define/
>
> 设 $\{a_n\}$ 是一个给定的数列，按照下标的顺序把数列的项依次相加得到一个形式的和，$a_1 + a_2 + a_3 + \cdots + a_n + \cdots$，称为数项级数或简称级数，记作 $\sum a_n$，即
> $$
> \sum a_n = a_1 + a_2 + a_3 + \cdots + a_n + \cdots
> $$
> 称 $a_n$ 为级数的通项或一般项

设 $S_n = a_1 + a_2 + \cdots + a_n+\cdots$

称为级数的第 $n$ 个部分和 $S_n$ 构成了一个数列

$$
\sum_{n=1}^{\infty} a_n = \lim_{n \to \infty} S_n
$$
若 $\lim_{n \to \infty} S_n$ 存在 $= S$ ($\lim_{n \to \infty} a_n = 0$)，称级数 $\sum a_n$ 收敛，且和 $\sum a_n = S$

若 $\lim_{n \to \infty} S_n$ 不存在，称级数 $\sum a_n$ 发散

反之研究 $\{a_n\}$ 的收敛性：令 $a_0 = 0$ ，研究级数 $\{a_n - a_{n-1}\}$ 的收敛性

因为它的前 n 项和
$$
S_n = (a_1 - a_0) + (a_2 - a_1) + \cdots + (a_n - a_{n-1})
= a_n - a_0 = a_n
$$
/example/    讨论 $\sum_{n=1}^{\infty} \frac{1}{n(n+1)}$ 的收敛性，若收敛，求其和

> /solution/
> $$
> S_n = \frac{1}{1 \cdot 2} + \frac{1}{2 \cdot 3} + \cdots + \frac{1}{n(n+1)}
> = 1 - \frac{1}{2} + \frac{1}{2} - \frac{1}{3} + \cdots + \frac{1}{n} - \frac{1}{n+1}
> = 1 - \frac{1}{n+1}
> $$
>
> $$
> \lim_{n \to \infty} S_n = \lim_{n \to \infty} (1 - \frac{1}{n+1}) = 1
> $$
>
> 知该级数收敛且 $\sum_{n=1}^{\infty} \frac{1}{n(n+1)} = 1$

### · 两个重要级数

**P 级数**：

> /Claim/
>
> $\sum_{n=1}^{\infty} \frac{1}{n^p}$ (P 为常数)，当 $p > 1$ 时收敛，当 $p \leq 1$ 时发散

接下来给出证明过程

> /proof/
>
> 当 $p = 1$ 时，$S_n = 1 + \frac{1}{2} + \cdots + \frac{1}{n}$
>
> 设 $f(x) = \frac{1}{x}$，在 $[1, n+1]$ 是递减函数$(n \in N^*), n \leq x \leq n+1 \Rightarrow \frac{1}{n+1} \leq f(x) \leq \frac{1}{n}$
>
> $$
> \int_1^{n+1} \frac{1}{x} dx \leq \sum_{k=1}^n \frac{1}{k} \leq \int_n^{n+1} \frac{1}{x} dx = \frac{1}{n}\\
> \frac{1}{n+1} \leq \lim_{n \to \infty} S_n \leq \frac{1}{n}
> $$
>
> $$
> \begin{align*}
> S_n &= 1 + \frac{1}{2} + \frac{1}{3} + \cdots + \frac{1}{n}\\
> &\geq \int_1^n \frac{1}{x} dx + \int_2^n \frac{1}{x^p} dx + \cdots + \int_n^{n+1} \frac{1}{x} dx\\
> &= \int_1^{n+1} \frac{1}{x} dx= \ln(n+1)
> \end{align*}
> $$
>
> 由 $\lim_{n \to \infty} \ln(n+1) = +\infty$
>
> $\therefore \lim_{n \to \infty} S_n = +\infty$
>
> 当 $p = 1$ 时，$\sum \frac{1}{n^p}$ (调和级数)发散
>
> ***
>
> 当 $p < 1$ 时，$n^p < n \Rightarrow \frac{1}{n^p} > \frac{1}{n}$
> $$
> S_n = \frac{1}{1^p} + \frac{1}{2^p} + \cdots + \frac{1}{n^p}
> > 1 + \frac{1}{2} + \cdots + \frac{1}{n} \to +\infty (n \to \infty)
> $$
> $\Rightarrow \lim_{n \to \infty} S_n = +\infty$
>
> ***
>
> 当 $p > 1$ 时，设 $f(x) = \frac{1}{x^p}$ 在 $[n, n+1]$ 上递减
>
> $$
> n \leq x \leq n+1, \frac{1}{(n+1)^p} \leq f(x) \leq \frac{1}{n^p}\\
> \frac{1}{(n+1)^p} = \int_n^{n+1} \frac{1}{x^p} dx \leq \int_n^n \frac{1}{x^p} dx \leq \int_n^{n+1} \frac{1}{x^p} dx = \frac{1}{n^p}
> $$
> 此时，
> $$
> S_n = \frac{1}{1^p} + \frac{1}{2^p} + \cdots + \frac{1}{n^p}
> $$
> 知 $\{S_n\}$ 是一个递增数列
>
> 又 
> $$
> \begin{align*}
> S_n &\leq 1 + \int_1^n \frac{1}{x^p} dx + \int_2^n \frac{1}{x^p} dx + \cdots + \int_{n-1}^n \frac{1}{x^p} dx\\
> &= 1 + \int_1^n \frac{1}{x^p} dx\\
> &< 1 + \int_1^n \frac{1}{x^p} dx + \int_n^{+\infty} \frac{1}{x^p} dx\\
> &= 1 + \int_1^{+\infty} \frac{1}{x^p} dx = 1 + A \triangleq M
> \end{align*}
> $$
> 其中 $A = \int_1^{+\infty} \frac{1}{x^p} dx (p > 1)$
>
> 知 $\sum \frac{1}{n^p}$ 收敛
>
> 当 $p > 1$ 时，$\sum \frac{1}{n^p}$ 收敛

**几何级数**：
$$
\sum_{n=0}^{\infty} a q^{n-1}
$$

 ($a \neq 0$ 常，$q \neq 0$ 常)

当 $|q| < 1$ 时，收敛，且$\sum_{n=0}^{\infty} a q^{n-1} = \frac{a}{1-q}$

当 $|q| \geq 1$ 时，级数发散

> /proof/
> $$
> S_n = a + aq + aq^2 + aq^3 + \cdots + aq^{n-1}
> = a(1 + q + q^2 + \cdots + q^{n-1})
> = a \frac{1-q^n}{1-q}\quad(q\neq 1)
> $$
> 当 $|q| < 1$，$\lim_{n \to \infty} S_n = \frac{a}{1-q}$知 $\sum_{n=0}^{\infty} a q^{n-1}$ 收敛，且 $\sum_{n=0}^{\infty} a q^{n-1} = \frac{a}{1-q}$
>
> 当 $|q| > 1$，$\lim_{n \to \infty} S_n = \lim_{n \to \infty} \frac{a}{1-q} (-\infty) = \infty$
>
> 当 $q = -1$，$\lim_{n \to \infty} \frac{a}{2}(1 - (-1)^n)$ ， $\sum_{n=0}^{\infty} a q^{n-1}$ 不存在
>
> 若 $q = 1$，$S_n = n a$，$\lim_{n \to \infty} S_n = \infty$，级数发散

### · 收敛级数的性质

性质1（线性运算法则）

若 $\sum_{n=1}^{\infty} m_n$，$\sum_{n=1}^{\infty} v_n$ 均收敛，设 $\alpha$，$\beta$ 为常数，则$\sum_{n=1}^{\infty} (\alpha m_n + \beta v_n)$ 收敛，

$$
\sum_{n=1}^{\infty} (\alpha m_n + \beta v_n)= \alpha \sum_{n=1}^{\infty} m_n + \beta \sum_{n=1}^{\infty} v_n
$$

> /proof/
>
> 设 $\sum_{n=1}^{\infty} m_n$ 的前 n 项和为 $A_n$，由 $\sum_{n=1}^{\infty} m_n$ 收敛，知 $\lim_{n \to \infty} A_n = A$
>
> 设 $\sum_{n=1}^{\infty} v_n$ 的前 n 项和为 $B_n$，知 $\lim_{n \to \infty} B_n = B$
>
> 设 $\sum_{n=1}^{\infty} (\alpha m_n + \beta v_n)$ 的前 n 项和为 $S_n$
>
> $$
> \begin{align*}
> S_n &= (\alpha m_1 + \beta v_1) + (\alpha m_2 + \beta v_2)+ \cdots + (\alpha m_n + \beta v_n)\\
> &= \alpha (m_1 + m_2 + \cdots + m_n) + \beta (v_1 + v_2 + \cdots + v_n)\\
> &= \alpha A_n + \beta B_n
> \end{align*}
> $$
> 于是$\lim_{n \to \infty} S_n = \lim_{n \to \infty} (\alpha A_n + \beta B_n)$$= \alpha A + \beta B$

性质2 一个级数改变它的有限项或者去掉前面有限项，或在前面添加有限项，得到一个新级数，与原级数具有相同的收敛性

性质3 若 $\sum_{n=1}^{\infty} m_n = u_1 + u_2 + \cdots + u_n + \cdots$ 收敛，则在该级数中任意添加括号得到的新级数也收敛，且其和不变，反之不成立

> /proof/
>
> 设 $\sum_{n=1}^{\infty} m_n$ 的前 n 项和为 $S_n$，$\lim_{n \to \infty} S_n = S$
>
> 添加括号得到的新级数为：
>
> $$
> (u_1 + u_2 + \cdots + u_n) + (u_{n+1} + u_{n+2} + \cdots + u_{n+2}) + \cdots + (u_{n_k+1} + u_{n_k+2} + \cdots + u_{n_k}) + \cdots
> $$
> 设它的前 k 项和为 $A_k$，则 $A_k = S_{n_k}$，是 $S_n$ 的子数列
>
> $\lim_{k \to \infty} A_k = \lim_{n \to \infty} S_{n_k} = S$
>
> (无限项相加，收敛，也有结合律)

性质4（收敛的必要条件）若 $\sum_{n=1}^{\infty} m_n$ 收敛，则 $\lim_{n \to \infty} m_n = 0$

> /proof/
>
> 设 $\sum_{n=1}^{\infty} m_n$ 的前 n 项和为 $S_n$ ，有 $\lim_{n \to \infty} S_n$ 存在 $= S$ (常)
>
> $$
> \lim_{n \to \infty} m_n = \lim_{n \to \infty} (S_n - S_{n-1})= S - S = 0
> $$
> 反之不成立.

/example/     $\sum_{n=1}^{\infty} \frac{1}{n}$ ， $\lim_{n \to \infty} \frac{1}{n} = 0$，但 $\sum_{n=1}^{\infty} \frac{1}{n}$ 发散

> 推论：若 $\lim_{n \to \infty} m_n \neq 0$ 或 $\lim_{n \to \infty} m_n$ 不存在，则 $\sum_{n=1}^{\infty} m_n$ 发散

### · 正项级数审敛方法

> /Define/
>
> 若 $m_n \geq 0$，$n = 1, 2, 3 \cdots$ 称 $\sum_{n=1}^{\infty} m_n$ 为正项级数

设前 $n$ 项和为 $S_n$
$$
S_{n+1} = u_1 + u_2 + \cdots + u_n + u_{n+1}
\geq u_1 + u_2 + \cdots + u_n = S_n
$$
知 $S_n$ 为递增数列

如果 $S_n$ 有界，即 $\exists$ 常数 $M > 0$，都有 $S_n \leq M$，由单调有界定理知 $S_n$ 收敛，则 $\sum_{n=1}^{\infty} m_n$ 收敛

反之，若 $\sum_{n=1}^{\infty} m_n$ 收敛，即 $\lim_{n \to \infty} S_n$ 存在 = $S$

$$
S_n = u_1 + u_2 + \cdots + u_n
\leq u_1 + u_2 + \cdots + u_n + u_{n+1} + u_{n+2}
= S + \sum_{n=1}^{\infty} u_n
$$

> 定理：设 $\sum_{n=1}^{\infty} m_n$ 为正项级数，则 $\sum_{n=1}^{\infty} m_n$ 收敛的必要条件是：$\lim_{n \to \infty} m_n = 0$

重点在于比较定理.

**比较定理**：

/Theorem/ (比较定理)

> 设 $0 \leq a_n \leq b_n \ (\forall n\geq N_0)$
>
> 1. 若 $\sum b_n$ 收敛 $\Rightarrow$  $\sum a_n$ 收敛；
> 2. 若 $\sum a_n$ 发散 $\Rightarrow$  $\sum b_n$ 发散.

与几何级数相比较，可以得到几个收敛性的判别法.

 几何级数的两个特性对应两种判别法：

> 1. $b_{n+1}/b_n = q$ ——> ratio test;
> 2. $\sqrt[n]{b_n} = q$ ——> root test.

**d'Alembert 判别法**：

/Theorem/ (ratio test, 或称 d'Alembert 判别法)

> 设 $a_n \geq 0 (\forall n \geq N_0)$，且 $\lim_{n \to \infty} \frac{a_{n+1}}{a_n} = q \in \mathbb{R}_{\geq 0} \cup \{+\infty\}$，则
>
> 1. 若 $q < 1$，则 $\sum_{n=1}^{\infty} a_n$ 收敛；
> 2. 若 $q > 1$，则 $\sum_{n=1}^{\infty} a_n$ 发散；
> 3. 若 $q = 1$，需要进一步的信息。

> /proof/
>
> 若 $\lim_{n \to \infty} \frac{a_{n+1}}{a_n} = q < 1$，取 $q < r < 1$，则 $\exists N$，使得 $\forall n \geq N$ 有 $\frac{a_{n+1}}{a_n} < r$，得到
>
> $$
> \frac{a_m}{a_N} = \prod_{n=N}^{m-1} \frac{a_{n+1}}{a_n} < r^{m-N} (\forall m > N)
> $$
>
> 因此 $a_m \leq a_N r^{m-N} = \left( \frac{a_N}{r^N} \right) r^m = b_m$ 为几何级数，公比 $r < 1$，比较定理知 $\sum_{n=1}^{\infty} a_n$ 收敛.
>
> 当然 2. 的证明是同理的.

**Cauchy 判别法**：

/Theorem/ (root test, 或称 Cauchy 判别法)

> 设 $a_n \geq 0 (\forall n \geq N_0)$，且 $\lim_{n \to \infty} \sqrt[n]{a_n} = q \in \mathbb{R}_{\geq 0} \cup \{+\infty\}$，则
>
> 1. 若 $q < 1$，则 $\sum_{n=1}^{\infty} a_n$ 收敛；
> 2. 若 $q > 1$，则 $\sum_{n=1}^{\infty} a_n$ 发散；
> 3. 若 $q = 1$，需要进一步的信息。

/example/    若 $\sum_{n=1}^{\infty} a_n^2$，$\sum_{n=1}^{\infty} b_n^2$ 均收敛，讨论 $\sum_{n=1}^{\infty} |a_n b_n|$，$\sum_{n=1}^{\infty} (a_n + b_n)$ 收敛性

> /solution/
>
> 
> $$
> 0 \leq |a_n b_n| = |a_n| |b_n|
> \leq \frac{1}{2} (|a_n|^2 + |b_n|^2)\quad
> (ab \leq \frac{1}{2} (a^2 + b^2))
> $$
> 由 $\sum_{n=1}^{\infty} \frac{1}{2} (a_n^2 + b_n^2)$ 收敛
>
> 已知 $|a_n b_n|$ 收敛
> $$
> 0 \leq |a_n + b_n| = |a_n| + |b_n| \leq |a_n| + |b_n|
> \leq a_n^2 + a_n b_n + b_n^2 = 2(a_n^2 + b_n^2)
> $$
> 由 $\sum_{n=1}^{\infty} 2(a_n^2 + b_n^2)$ 收敛，知 $\sum_{n=1}^{\infty} (a_n + b_n)$ 收敛

例 设 $a_n \leq c_n \leq b_n$，且 $\sum_{n=1}^{\infty} a_n$，$\sum_{n=1}^{\infty} b_n$ 均收敛，讨论 $\sum_{n=1}^{\infty} c_n$ 收敛性

> /solution/
> $$
> a_n \leq c_n \leq b_n
> \Rightarrow 0 \leq c_n - a_n \leq b_n - a_n
> $$
> 由 $\sum_{n=1}^{\infty} a_n$，$\sum_{n=1}^{\infty} b_n$ 均收敛，
>
> 知 $\sum_{n=1}^{\infty} (b_n - a_n)$ 收敛，$\Rightarrow \sum_{n=1}^{\infty} [(c_n - a_n) + (a_n)]$ 收敛

**比较定理极限形式**：

推论（比较判别法的极限形式）

> /Theorem/
>
> 设 $\sum_{n=1}^{\infty} m_n$，$\sum_{n=1}^{\infty} v_n$ 均为正项级数，且 $\lim_{n \to \infty} \frac{u_n}{v_n} = \ell$
>
> (1) $0 < \ell < +\infty$，即 $u_n \sim \ell \cdot v_n (n \to \infty)$ ，则 $\sum_{n=1}^{\infty} u_n$ 与 $\sum_{n=1}^{\infty} v_n$ 同收同发
>
> (2) $\ell = 0$，若 $\sum_{n=1}^{\infty} v_n$ 收敛，则 $\sum_{n=1}^{\infty} u_n$ 收敛
>
> (3) $\ell = +\infty$，若 $\sum_{n=1}^{\infty} v_n$ 发散，则 $\sum_{n=1}^{\infty} u_n$ 发散

若 $\lim_{n \to \infty} a_n = a$，$\lim_{n \to \infty} b_n = b$

且 $a < b$，且 $N_0 \in \mathbb{N}$

当 $n \geq N_0$ 时，都有 $a_n < b_n$

> /proof/
>
>  (1) $0 < \ell < +\infty$
>
> 分析：由 $\lim_{n \to \infty} \frac{m_n}{v_n} = \ell$，即 $\forall \epsilon > 0$，
>
> $\exists N$，当 $n > N$ 时，都有
>
> $$
> |\frac{u_n}{v_n} - \ell| < \epsilon \quad\quad
> \ell - \epsilon < \frac{u_n}{v_n} < \ell + \epsilon
> $$
> 取 $\epsilon = \frac{\ell}{2} > 0$，$\exists N_0 \in \mathbb{N}$，
>
> 当 $n \geq N_0$ 时，都有
> $$
> |\frac{m_n}{v_n} - \ell| < \frac{\ell}{2}\quad
> \Rightarrow \quad \ell - \frac{\ell}{2} < \frac{m_n}{v_n} < \ell + \frac{\ell}{2}\quad
> \Rightarrow \quad \frac{\ell}{2} v_n < m_n < \frac{3\ell}{2} v_n
> $$
> $(n = N_0, N_0 + 1, \cdots)$
>
> 若 $\sum_{n=1}^{\infty} v_n$ 收敛，知 $\sum_{n=1}^{\infty} \frac{3\ell}{2} v_n$ 收敛，有 $\sum_{n=1}^{\infty} m_n$ 收敛
>
> 若 $\sum_{n=1}^{\infty} v_n$ 发散，知 $\sum_{n=1}^{\infty} \frac{\ell}{2} v_n$ 发散有 $\sum_{n=1}^{\infty} m_n$ 发散
>
> ***
>
> (2) $\lim_{n \to \infty} \frac{m_n}{v_n} = 0 = \Rightarrow \lim_{n \to \infty} 0 < \frac{m_n}{v_n} < \lim_{n \to \infty} 1$
>
> $\exists N_0$，当 $n \geq N_0$ 时，有
>
> $$
> \frac{m_n}{v_n} < 1 \Rightarrow 0 \leq m_n < v_n
> $$
> $\therefore$ 若 $\sum_{n=1}^{\infty} v_n$ 收敛，则 $\sum_{n=1}^{\infty} m_n$ 收敛
>
> ***
>
> (3) $\lim_{n \to \infty} \frac{m_n}{v_n} = +\infty \Rightarrow \forall M > 0$
>
> $\exists N_0$，当 $n \geq N_0$ 时，有 $\frac{m_n}{v_n} > M$
>
> 令 $M = 1$，有 $m_n > v_n > 0$
>
> $\therefore$ 若 $\sum_{n=1}^{\infty} v_n$ 发散，则 $\sum_{n=1}^{\infty} m_n$ 发散

**Cauchy 积分判别法**：

另外一种比较定理是与无穷积分比较

> /Theorem/
>
> 设当 $x \geq 1$ 时，$f(x) \geq 0$ 且递减，那么无穷级数 $\sum_{n=1}^{\infty} f(n)$ 与无穷积分 $\int_{1}^{+\infty} f(x) \, dx$ 敛散性相同。、

### · 交错级数审敛方法

**Leibniz 判别法**：

形如 $\sum_{n=1}^{\infty} (-1)^{n-1} a_n$ ($a_n \geq 0$, $\forall n$) 的级数，即正负交替的级数。

> /Claim/ (来自 Leibniz)
>
> 设 $\sum_{i=1}^{\infty} (-1)^{i-1} a_i$ 是交错级数，且 $\{a_i\}$ 满足：
> $$
> a_i\geq 0,\quad \lim_{i \to \infty}a_i=0
> $$
> 则 $\sum_{i=1}^{\infty} (-1)^{i-1} a_i$ 收敛。

下面给出证明：

> /proof/
>
> 考虑 $S_{2n}$ 即可，两两配对，得到 $\{S_{2n}\}$ 单调递增；同时
>
> $S_{2n} = a_1 - (a_2 - a_3) - \cdots - (a_{2n-2} - a_{2n-1}) - a_{2n}$
>
> 从而 $S_{2n} < a_1$，有上界。
>
> 根据单调有界定理得到存在 $\lim_{n \to \infty} S_{2n}$，记为 $S$。
>
> 如果从奇数趋于正无穷，则加上一项 $\lim_{n \to \infty} a_{2n+1} = 0$，还是一样。所以得证。

**绝对收敛与条件收敛**：

> /Define/
>
> 称 $\sum_{n=1}^{\infty} a_n$ 绝对收敛，如果 $\sum_{n=1}^{\infty} |a_n|$ 收敛；
>
>  $\sum_{n=1}^{\infty} a_n$ 条件收敛，如果 $\sum_{n=1}^{\infty} a_n$ 收敛且 $\sum_{n=1}^{\infty} |a_n|$ 发散。

判别 $\sum_{n=1}^{\infty} a_n$ 的收敛性时，有以下步骤： 

1. 先看 $\sum_{n=1}^{\infty} |a_n|$ 是否收敛（绝对收敛），这里可以使用正项级数的判别法。 

2. 若 $\sum_{n=1}^{\infty} |a_n|$ 发散，需要采取更加精细的手段，比如交错级数的 Leibniz 判别法，

   以及后面会讲到的 Dirichlet 判别法和 Abel 判别法。

***

这里给出一道例题：

/example/  判断以下级数敛散性：
$$
\sum^{\infty}_{n=1} (-1)^n \int^{n+1}_n \frac{e^{-x}}{x}dx
$$

> /solution/
>
> 分析其绝对值项级数是否收敛：
>
> $$
> \sum_{n=1}^\infty \left| (-1)^n \int_n^{n+1} \frac{e^{-x}}{x} dx \right| = \sum_{n=1}^\infty \int_n^{n+1} \frac{e^{-x}}{x} dx.
> $$
>
> 考虑积分项 $\int_n^{n+1} \frac{e^{-x}}{x} dx$。由于 $x$ 在区间 $[n, n+1]$ 上是单调递增的，我们可以用 $n$ 和 $n+1$ 来估计 $x$ 的范围：
>
> $$
> \frac{1}{n+1} \leq \frac{1}{x} \leq \frac{1}{n}, \quad x \in [n, n+1].
> $$
>
> 因此，
>
> $$
> \frac{1}{n+1} \int_n^{n+1} e^{-x} dx \leq \int_n^{n+1} \frac{e^{-x}}{x} dx \leq \frac{1}{n} \int_n^{n+1} e^{-x} dx.
> $$
>
> 计算 $\int_n^{n+1} e^{-x} dx$：
>
> $$
> \int_n^{n+1} e^{-x} dx = -e^{-x} \Big|_n^{n+1} = e^{-n} - e^{-(n+1)} = e^{-n}(1 - e^{-1}).
> $$
>
> 于是可以得到：
>
> $$
> \frac{1}{n+1} e^{-n}(1 - e^{-1}) \leq \int_n^{n+1} \frac{e^{-x}}{x} dx \leq \frac{1}{n} e^{-n}(1 - e^{-1}).
> $$
>
> 从上式可以看出，$\int_n^{n+1} \frac{e^{-x}}{x} dx$ 的大小与 $\frac{e^{-n}}{n}$ 同阶（渐近等价）。因此，绝对值项级数可以近似为：
>
> $$
> \sum_{n=1}^\infty \int_n^{n+1} \frac{e^{-x}}{x} dx \sim \sum_{n=1}^\infty \frac{e^{-n}}{n}.
> $$
>
> 接下来我们判断 $\sum_{n=1}^\infty \frac{e^{-n}}{n}$ 是否收敛。
>
> 注意到 $\frac{e^{-n}}{n} > 0$ 且随 $n$ 增大而减小。利用比较判别法，将 $\frac{e^{-n}}{n}$ 与几何级数进行比较。
>
> 当 $n$ 较大时，$e^{-n}$ 衰减得非常快，因此 $\frac{e^{-n}}{n}$ 的衰减速率主要由 $e^{-n}$ 决定。实际上，$\sum_{n=1}^\infty e^{-n}$ 是一个几何级数，其公比 $r = e^{-1} < 1$，所以它收敛。
>
> 结合 $\frac{1}{n}$ 的增长速度较慢，可知 $\sum_{n=1}^\infty \frac{e^{-n}}{n}$ 收敛。
>
> 因为 $\sum_{n=1}^\infty \left| (-1)^n \int_n^{n+1} \frac{e^{-x}}{x} dx \right|$ 收敛，所以原级数
>
> $$
> \sum_{n=1}^\infty (-1)^n \int_n^{n+1} \frac{e^{-x}}{x} dx
> $$
>
> 绝对收敛。



### · 一般项级数审敛方法

> (1). 绝对值比值；(2). 绝对值根值；(3). 若  $\sum |m_n|$  收敛，则  $\sum m_n$  绝对收敛
>
> (4). Leibniz 判别法；(5). 若  $\lim_{n \to \infty} u_n \neq 0$ ，则级数发散；(6). 线性运算；(7). 定义

### · Dirichlet & Abel 判别法

A-D判别法全称 *Abel-Dirichlet* 判别法，是判定敛散性的重要方法，分别由Abel和Dirichlet提出，

在反常积分，级数以及函数项级数的敛散性判别中具有非常重要的作用。

数分中的Abel-Dirichlet判别法，总体来说，一个是以积分形式出现，一个是以级数形式出现。在积分中，有反常积分以及含参积分；在级数形式中，有数项级数与函数项级数。

**反常积分**：

> /Theroem/
>
> Abel判别法：
>
> 如果广义积分  $\int_{a}^{+\infty} f(x) dx$  收敛，函数  $g(x)$  在  $[a, +\infty)$  上单调有界，则积分  $\int_{a}^{+\infty} f(x)g(x) dx$  也收敛。
>
> *Dirichlet* 判别法：
>
> 设  $F(A) = \int_{a}^{A} f(x) dx$  在  $[a, +\infty)$  上有界，函数  $g(x)$  在  $[a, +\infty)$  上单调，且  $\lim_{x \to +\infty} g(x) = 0$ ，则积分  $\int_{a}^{+\infty} f(x)g(x) dx$  收敛。

**Abel 变换**：

考虑序列  $\{\alpha_n\}, \{\beta_n\}$ ，有  $S = \sum_{i=1}^{m} \alpha_i \beta_i = \alpha_1 \beta_1 + \alpha_2 \beta_2 + \cdots + \alpha_m \beta_m$ 

令  $B_1 = \beta_1, B_2 = \beta_1 + \beta_2, B_3 = \beta_1 + \beta_2 + \beta_3, \cdots, B_n = \beta_1 + \beta_2 + \cdots + \beta_n$ 

则  $\beta_1 = B_1, \beta_2 = B_2 - B_1, \cdots, \beta_n = B_n - B_{n-1}$ 


 $$S = \sum_{i=1}^{m} \alpha_i \beta_i = \alpha_m B_m - \sum_{i=1}^{m-1} (\alpha_{i+1} - \alpha_i) B_i$$ 

**Abel 引理**：

若因数  $\alpha_i$  都不递增(或都不递减)，而和  $B_i$  的绝对值都以数  $L$  为上界:

$$
|B_i| \leq L (i = 1, 2, \cdots, m) \Rightarrow 
|S| = \left| \sum_{i=1}^{m} \alpha_i \beta_i \right| \leq L \cdot (|\alpha_1| + 2|\alpha_m|)
$$
若因数  $\alpha_i$  都不递增且为正数，那么

$$
|S| = \left| \sum_{i=1}^{m} \alpha_i \beta_i \right| \leq L \cdot \alpha_1
$$

**Abel-Dirichlet 判别法**：

> /Theorem/
>
> Abel判别法：
>
> 若级数  $\sum_{n=1}^{\infty} b_n = b_1 + b_2 + \cdots + b_n$  (B) 收敛，而数列  $\alpha_n$  是单调有界的:
>
> $$
> |\alpha_n| \leq K (n = 1, 2, 3, \cdots)
> $$
> 则级数  $\sum_{n=1}^{\infty} \alpha_n b_n = \alpha_1 b_1 + \alpha_2 b_2 + \cdots + \alpha_n b_n + \cdots$  (W) 收敛。
>
> Dirichlet判别法
>
> 若级数 (B) 的部分和总是有界的:  $|B_n| \leq M (n = 1, 2, 3, \cdots)$ ，而数列  $\{\alpha_n\}$  单调且趋于0:  $\lim_{n \to \infty} \alpha_n = 0$ 
>
> 则级数 (W) 收敛。

## Part 2 函数项级数

学到现在我们容易发现对级数求和并不是一件容易的事情，于是我们先退而求其次判断级数能否收敛.

不妨先给出函数项级数概念：
$$
u_1(x) + u_2(x) + \cdots + u_n(x) + \cdots = \sum_{n=1}^{\infty} u_n(x)
$$
取  $x_0 \in E$ ，若  $\sum_{n=1}^{\infty} u_n(x_0)$  收敛，称  $x_0$  为收敛点；若  $\sum_{n=1}^{\infty} u_n(x_0)$  发散，称  $x_0$  为发散点

全体收敛点组成的集合称为函数的收敛域，记为  $D$ ，有  $D \subseteq E$ 

对每一个  $x \in D$ ，都有唯一的  $\sum_{n=1}^{\infty} u_n(x)$  与之对应，按照函数定义，

 $\sum_{n=1}^{\infty} u_n(x)$  是  $D$  上的函数  $S(x)$ ，称为函数项级数的和函数，即

$$
\sum_{n=1}^{\infty} u_n(x) = S(x)\quad x \in D
$$

### · Abel 定理

> /Theorem/
>
> 设 $\sum_{n=0}^{\infty} a_n x^n$ 在 $x_0$ 处收敛，则 $\sum_{n=0}^{\infty} a_n x^n$ 在 $(-|x_0|, |x_0|)$ 中处处绝对收敛。
>
> > 推论
> >
> > 若 $\sum_{n=0}^{\infty} a_n x^n$ 在 $x_0$ 处发散，则 $\sum_{n=0}^{\infty} a_n x^n$ 在 $(-\infty, -|x_0|) \cup (|x_0|, +\infty)$ 上处处发散。

然后我们有时候需要求收敛半径，这又涉及到收敛半径计算：

> /Theorem/
>
> 在幂级数 $\sum_{n=1}^{\infty} a_nx^n$ 中，若
> $$
> \lim_{n \to  \infty}\left|\frac{a_{n+1}}{a_n}\right| =\rho
> $$
> 则幂级数收敛半径由 $\rho$ 决定：
>
> (1) 当 $\rho \neq 0$ 时，$R=\frac{1}{\rho}$ 
>
> (2) 当 $\rho = 0$ 时，$R=+\infty$ 
>
> (3) 当 $\rho = +\infty$ 时，$R=0$ 

### · 幂级数

$$
a_0 + a_1(x-x_0) + a_2(x-x_0)^2 + \cdots + a_n(x-x_0)^n + \cdots =
\sum_{n=0}^{\infty} a_n(x-x_0)^n \quad \quad (x-x_0)^0 = 1
$$

称为  $(x-x_0)$  的幂级数，或称为在  $x = x_0$  处的泰勒级数

特别地， $x_0 = 0$  时，

$$
a_0 + a_1x + a_2x^2 + \cdots + a_nx^n + \cdots=\sum_{n=0}^{\infty} a_nx^n
$$
称为  $x$  的幂级数或称为  $x = 0$  处的麦克劳林级数。

未了判断幂级数敛散性，我们给出定理：

> /Theorem/ （*Cauchy-Hadamard*）
>
> 设  $\sum_{n=0}^{\infty} a_n(x-x_0)^n$ 
>
> 若  $\lim_{n \to \infty} \left| \frac{a_{n+1}}{a_n} \right| = R$  或  $\lim_{n \to \infty} \frac{1}{\left| a_n \right|} = R$ 
>
> (1). 当  $0 < R < +\infty$  时，幂级数在  $(x_0 - R, x_0 + R)$  内绝对收敛
>
>   $ \left| x-x_0 \right| > R $  时，幂级数发散；$x = x_0 \pm R$  时，本方法失效
>
> (2). 当  $R = 0$  时，在  $x = x_0$  处收敛，$x \neq x_0$  处发散
>
> (3).  $ R = +\infty $  时，幂级数在  $ (-\infty, +\infty) $  绝对收敛

### · 分析学性质

幂级数求导与积分后收敛半径均不变

> /Theorem/
>
> 1. 幂级数在收敛半径内连续；
> 2. 在收敛半径内可逐项积分，$\forall − R < a < b < R$，有
>
> $$
> \int_{a}^{b} \sum_{n=0}^{\infty} a_n x^n \, dx = \sum_{n=0}^{\infty} a_n \frac{b^{n+1} - a^{n+1}}{n + 1}
> $$

积分定理的证明我们直接省略掉，以后有时间会补上

> /Theorem/ (求导定理)
>
> 幂级数在收敛半径内部可逐项求导。设 $\sum_{n=0}^{\infty} a_n x^n$ 半径 $R$，则 $\forall x \in (-R, R)$，有
>
> $$
> S(x)' = \sum_{n=0}^{\infty} a_n n x^{n-1}
> $$

### · 常见级数求和

实际上绝大部分级数求和的提醒用到的都是一下公式

> /formula/
> $$
> \frac{1}{1-x} = 1 + x + x^2 + \cdots = \sum_{n=0}^{\infty} x^n \quad (-1, 1)\\
> $$
>
> $$
> \frac{1}{1+x} = 1 - x + x^2 - x^3 + \cdots = \sum_{n=0}^{\infty} (-1)^n x^n \quad (-1, 1)\\
> $$
>
> $$
> \ln(1+x) = x - \frac{x^2}{2} + \frac{x^3}{3} - \frac{x^4}{4} + \cdots = \sum_{n=1}^{\infty} (-1)^{n-1} \frac{x^n}{n} \quad [-1, 1]\\
> $$
>
> $$
> \ln(1-x) = -x - \frac{x^2}{2} - \frac{x^3}{3} - \frac{x^4}{4} - \cdots = -\sum_{n=1}^{\infty} \frac{x^n}{n} \quad [-1, 1)\\
> $$
>
> $$
> \ln\left(\frac{1+x}{1-x}\right) = 2\left(x + \frac{x^3}{3} + \frac{x^5}{5} + \cdots\right) = 2 \sum_{n=0}^{\infty} \frac{x^{2n+1}}{2n+1} \quad (-1, 1)\\
> $$
>
> $$
> \frac{1}{1+x^2} = 1 - x^2 + x^4 - x^6 + \cdots = \sum_{n=0}^{\infty} (-1)^n x^{2n} \quad (-1, 1)\\
> $$
>
> $$
> \arctan(x) = x - \frac{x^3}{3} + \frac{x^5}{5} - \frac{x^7}{7} + \cdots = \sum_{n=0}^{\infty} (-1)^n \frac{x^{2n+1}}{2n+1} \quad [-1, 1]\\
> $$
>
> $$
> e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \cdots = \sum_{n=0}^{\infty} \frac{x^n}{n!} \quad (-\infty, +\infty)\\
> $$
>
> $$
> \sin(x) = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \frac{x^7}{7!} + \cdots = \sum_{n=0}^{\infty} (-1)^n \frac{x^{2n+1}}{(2n+1)!} \quad (-\infty, +\infty)\\
> $$
>
> $$
> \cos(x) = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \frac{x^6}{6!} + \cdots = \sum_{n=0}^{\infty} (-1)^n \frac{x^{2n}}{(2n)!} \quad (-\infty, +\infty)\\
> $$
>
> $$
> \frac{1}{(1-x)^2} = \sum_{n=0}^{\infty} (n+1)x^n \quad (-1, 1)\\
> $$
>
> $$
> \frac{2}{(1-x)^3} = \sum_{n=0}^{\infty} (n+2)(n+1)x^n \quad (-1, 1)\\
> $$

## Part 3 Fourier 级数



## Exercise

那我们接下来做道题来练练手罢（精神错乱）

> $n$ 为正整数，设数列
> $$
> a_n = \int_{n\pi}^{(n+1)\pi} \frac{\sin x}{x} \, dx
> $$
> 证明：
>
> (1) $|a_{n+1}| < |a_n|$	(2) $\lim_{n \to \infty} a_n = 0$	(3) $\sum_{n=1}^{\infty} a_n$ 收敛	(4) $\sum_{n=1}^{\infty} |a_n|$ 发散

这道题可以说是相当之巧妙，里面用了积分的不等式性质和放缩，可惜本人考场上慌乱间未能做出。

下面给出润(闫)洁(浩)老(老)师(贼)的解题过程

>(1). 
>$$
>a_n = \int_{n\pi}^{(n+1)\pi} \frac{\sin x}{x} \, dx
>$$
>
>$$
>|a_n| = \left| \int_{n\pi}^{(n+1)\pi} \frac{\sin x}{x} \, dx \right|= \int_{n\pi}^{(n+1)\pi}\frac{|\sin x|}{x} \, dx
>$$
>
>$$
>|a_{n+1}| = \int_{(n+1)\pi}^{(n+2)\pi} \left| \frac{\sin x}{x} \right| \, dx \ \overset{t=x - \pi}{=}
>\int_{n\pi}^{(n+1)\pi} \left| \frac{\sin t}{t+\pi} \right|\ dt
>$$
>
>在 $(n\pi, (n+1)\pi)$ 上，$\frac{|\sin x|}{x} > \frac{|\sin x|}{x+\pi}$ 恒成立，由定积分比较不等式， $|a_n| > |a_{n+1}|$
>
>(2).
>$$
>|a_n| \leq \int_{n\pi}^{(n+1)\pi} \frac{1}{x} \, dx = \ln \frac{n+1}{n} \\\lim_{n \to \infty} \ln \frac{n+1}{n} = 0 \Rightarrow \lim_{n \to \infty} |a_n| = 0\Rightarrow \lim_{n \to \infty} a_n = 0
>$$
>(3).
>$$
>a_n = \int_{n\pi}^{(n+1)\pi} \frac{\sin x}{x} \, dx = (-1)^n \int_{n\pi}^{(n+1)\pi} \left| \frac{\sin x}{x} \right| \, dx 
>$$
>
>$$
>b_n = \int_{n\pi}^{(n+1)\pi} \left| \frac{\sin x}{x} \right| \, dx 
>$$
>
>则 $ b_n > 0 $ ，由(1)知 $ b_{n+1} < b_n $，且 $\lim_{n \to \infty} b_n = 0$，所以 $\sum a_n$ 收敛（Leibniz）
>
>(4).
>$$
>|a_n| = \int_{n\pi}^{(n+1)\pi} \left| \frac{\sin x}{x} \right| \, dx \geq \int_{n\pi + \frac{\pi}{6}}^{(n+1)\pi - \frac{\pi}{6}} \left| \frac{\sin x}{x} \right| \, dx \geq \frac{1}{2} \int_{n\pi + \frac{\pi}{6}}^{(n+1)\pi - \frac{\pi}{6}} \frac{1}{x} \, dx \\
>$$
>
>$$
>\geq \frac{1}{2} \int_{n\pi + \frac{\pi}{6}}^{(n+1)\pi - \frac{\pi}{6}} \frac{1}{(n+1)\pi} \, dx
>=\frac{1}{(n+1)\pi}\cdot\frac{1}{2}\cdot \frac{2\pi}{3}
>$$
>
>$\sum \frac{1}{(n+1)\pi} \cdot \frac{\pi}{3}$ 发散，易知 $\sum |a_n|$ 发散

结束.
