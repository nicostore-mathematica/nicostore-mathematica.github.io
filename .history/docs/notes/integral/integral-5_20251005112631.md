---
title: Chapter 5 微分中值定理
createTime: 2025/09/18 18:11:08
permalink: /integral/integral-5/
---

## Part 1 微分中值定理

**定义1**： $\exists \delta > 0, \forall x \in U(x_0, \delta), f(x) \leq f(x_0)$ ，则称 $x_0$ 为极大值点， $f(x_0)$ 为极大值，类似地可以定义极小值点和极小值。极大值和极小值统称为极值。

> **注意**：
>
> 1. 极值点也是局部性质
> 2. 前提是 $f(x)$ 在 $U(x_0, \delta)$ 内有定义
> 3. 函数定义区间的端点不是极值点

**定理1（费马引理）**：设  $f(x)$  在  $x_0$  点附近有定义。若  $x_0$  是  $f(x)$  的极值点，且  $f(x)$  在  $x_0$  点可导，则  $f'(x_0) = 0$ （驻点）。

> **证明**：不妨设  $x_0$  为极大值点，根据定义
> $$
> \exists \delta > 0, \forall x \in U(x_0, \delta), f(x) - f(x_0) \leq 0
> $$
> 所以  $\forall x \in (x_0 - \delta, x_0)$ 
>
> $$
> \frac{f(x) - f(x_0)}{x - x_0} \geq 0 \implies f'(x_0) = \lim_{x \to x_0^-} \frac{f(x) - f(x_0)}{x - x_0} \geq 0
> $$
> 且  $\forall x \in (x_0, x_0 + \delta)$ 
>
> $$
> \frac{f(x) - f(x_0)}{x - x_0} \leq 0 \implies f'(x_0) = \lim_{x \to x_0^+} \frac{f(x) - f(x_0)}{x - x_0} \leq 0
> $$
> 故  $f'(x_0) = 0$ ，若  $x_0$  为极小值点同理可证

> [!important]
>
> 1. 逆否命题：若  $f'(x_0) \neq 0$ ，则  $x_0$  非极值点
> 2. 逆命题：若  $f'(x_0) = 0$ ，则  $x_0$  为极值点（**反例**： $y = x^3$ ， $y'(0) = 0$ ）
> 3. 极值点：不可导点 + 驻点

**定理2（最值定理）**： $f \in C[a, b]$ ，则  $f$  在  $[a, b]$  上可以取到最大值与最小值（从而有界），即  $\exists \xi_1, \xi_2 \in [a, b], \forall x \in [a, b]$  有  $f(\xi_1) \leq f(x) \leq f(\xi_2)$ 。

> [!important]
>
> **注意**：最值定理只对**闭区间**成立。

**定理3（罗尔定理）**： $f \in C[a, b]$  且  $f$  在  $(a, b)$  上可导，若  $f(a) = f(b)$ ，则  $\exists \xi \in (a, b)$  使得  $f'(\xi) = 0$ 。

> **证明**： $f \in C[a, b]$ 
>
> 根据最值定理，存在最大值  $M$ ，最小值  $m$ 
>
> 若  $f$  是常值函数，则定理显然成立
>
> 若  $f$  不是常值函数，则  $M$  与  $m$  至少有一个不等于  $f(a) = f(b)$ 
>
> 不妨设  $M > f(a) = f(b)$ 
>
> 故  $\exists \xi \in (a, b), f(\xi) = M$ ， $\xi$  也是极大值点
>
> 根据费马引理， $f'(\xi) = 0$ 

> [!important]
>
> **注意**：
>
> 1. 几何意义：端点高度相同的光滑曲线存在水平切线
> 2. 物理意义：一段时间内位移不变必有零速度时刻
> 3. 逆否： $f \in C[a, b]$  且  $f$  在  $(a, b)$  上可导，若  $\forall x \in (a, b), f'(x) \neq 0$ ，则  $f(a) \neq f(b)$ 。
>
> > 推广： $f \in C[a, b]$  且  $f$  在  $(a, b)$  上可导，若  $\forall x \in (a, b), f''(x) \neq 0$ ，则  $[a, b]$  上任意两点不同。

/example/： $f \in C[a, b]$  且  $f$  在  $(a, b)$  上二阶可导， $f(a) = f(c) = f(b)$ ，证明  $\exists \xi \in (a, b)$  使得  $f''(\xi) = 0$ 

> **证明**：
> $$
> [a, c]: \exists \xi_1 \in (a, c), f'(\xi_1) = 0
> $$
>
> $$
> [c, b]: \exists \xi_2 \in (c, b), f'(\xi_2) = 0
> $$
>
> 对区间  $[\xi_1, \xi_2] \subset (a, b)$ 
>
>  $f' \in C(\xi_1, \xi_2)$  且  $f'$  在  $(\xi_1, \xi_2)$  上可导， $f'(\xi_1) = f'(\xi_2)$ 
>
> 由罗尔定理， $\exists \xi \in (\xi_1, \xi_2)$  使得  $f''(\xi) = 0$ 

> [!important]
>
> **注意**：逆否命题： $f \in C[a, b]$  且  $f$  在  $(a, b)$  上二阶可导，若  $\forall x \in (a, b), f''(x) \neq 0$ ，则  $[a, b]$  上至多有两点函数值相等。
>
> **推广**： $f \in C[a, b]$  且  $f$  在  $(a, b)$  上  $n$  阶可导， $n+1$  个点函数值相等，则  $\exists \xi \in (a, b)$  使得  $f^{(n)}(\xi) = 0$ 。
>
> **注意**：逆否命题： $f \in C[a, b]$  且  $f$  在  $(a, b)$  上  $n$  阶可导，若  $\forall x \in (a, b), f^{(n)}(\xi) \neq 0$ ，则  $[a, b]$  上至多有  $n$  点函数值相等。

**定理4**（拉格朗日中值定理）: $f \in C[a, b]$  且  $f$  在  $(a, b)$  上可导，则  $\exists \xi \in (a, b)$  使得
$$
f'(\xi) = \frac{f(b) - f(a)}{b - a}.
$$

> **注**：
>
> 1. 罗尔定理经过旋转可以得到拉格朗日中值定理
>
> 2. 几何意义：存在某点的切线平行于弦
>
> 3. 物理意义：存在某时刻瞬时速度等于平均速度
>
> 4. $$
>    f'(\xi) = \frac{f(b) - f(a)}{b - a} \Leftrightarrow f(b) - f(a) = f'(\xi)(b - a)
>    $$
>
> $$
>    \Rightarrow f(b) = f(a) + f'(\xi)(b - a)
> $$
>
> 5. 令  $\theta = \frac{\xi - a}{b - a} \in (0, 1) \Leftrightarrow \exists \theta \in (0, 1)$  使得 
>    $$
>    f'(a + \theta(b - a)) = \frac{f(b) - f(a)}{b - a}
>    $$
>

**定理5（柯西中值定理）**： $f, g$  在  $[a, b]$  上连续，在  $(a, b)$  上可导且  $g'(x) \neq 0$ ，则  $\exists \xi \in (a, b)$  使得
$$
\frac{f'(\xi)}{g'(\xi)} = \frac{f(b) - f(a)}{g(b) - g(a)}.
$$

> **注**：
>
> 1. $g(x) = x$ 则退化为拉格朗日中值定理
>
> 2. $\frac{f'(\xi)}{g'(\xi)}$ 是同一个 $\xi$ 
>
> 3. 命题
>    $$
>    \forall x \in (a, b), g'(x) \neq 0 \Rightarrow g(a) \neq g(b)
>    $$
>
> 4. 几何意义：参数式函数
>    $$
>    \begin{cases} y = f(t) \\ x = g(t) \end{cases}\quad \quad t \in [a, b]
>    $$
>    存在切线平行于弦

### · 中值定理应用

中值定理相关的证明题通常需要构造函数，以下给出两种经典方法。

(1). 常数变易法（不推荐）

常数变易法的核心思想是，将欲证明的结论中的某个常量用变量代替，构造成辅助函数，最后再对辅助函数检验罗尔定理的使用条件。值得一提的是，并不是所有题目都适用本方法，慎用。

(2). 原函数法

> 为了利用罗尔定理，我们需要构造出一个辅助函数，使得其导数为零恰好与欲证的结论等价。
>
> 1. 根据结论凑  $F'(\xi) = 0$ ，即  $F'(x)|_{x=\xi} = 0$ 
> 2. 求出原函数  $F(x)$  即所需辅助函数（有时需要将上式乘以某些乘子，如例4）
> 3. 对  $F(x)$  检验罗尔定理的使用条件

尝试证明**定理4**：拉格朗日中值定理

> **法一（常数变易法）**：
>
> 令
> $$
> k = \frac{f(b) - f(a)}{b - a} \Leftrightarrow f(b) - f(a) - k(b - a) = 0
> $$
> 将此式中的  $b$  用变量  $x$  代替，构成辅助函数
>
> $$
> F(x) = f(x) - f(a) - k(x - a)
> $$
> 则  $F \in C[a, b]$  且  $F$  在  $(a, b)$  上可导， $F(a) = F(b) = 0$ 
>
> 由罗尔定理， $\exists \xi \in (a, b)$  使得  $F'(\xi) = 0 \Rightarrow f'(\xi) = k$ 
>
> **法二（原函数法）**：
>
> 分析：
> $$
> f'(\xi) - \frac{f(b) - f(a)}{b - a} = 0
> $$
> 将 $\xi$ 用 $x$ 替换， $f'(x) - \frac{f(b) - f(a)}{b - a} = 0$ ，即
> $$
> [f(x) - \frac{f(b) - f(a)}{b - a}x]' = 0
> $$
> 构造辅助函数
> $$
> F(x) = f(x) - \frac{f(b) - f(a)}{b - a}x
> $$
> 证明：令
> $$
> F(x) = f(x) - \frac{f(b) - f(a)}{b - a}x
> $$
> 则  $F \in C[a, b]$  且  $F$  在  $(a, b)$  上可导， $F(a) = F(b)$ 
>
> 由罗尔定理， $\exists \xi \in (a, b)$  使得  $F'(\xi) = 0$ 
>
> 即  $f'(\xi) = \frac{f(b) - f(a)}{b - a}$ 

证明**定理5**：柯西中值定理

> **法一（常数变易法）**：
>
> 令
> $$
> k = \frac{f(b) - f(a)}{g(b) - g(a)} \Leftrightarrow f(b) - f(a) - k(g(b) - g(a)) = 0
> $$
> 将此式中的  $b$  用变量  $x$  代替，构成辅助函数
>
>
>  $$F(x) = f(x) - f(a) - k(g(x) - g(a))$$ 
>
> 则  $F \in C[a, b]$  且  $F$  在  $(a, b)$  上可导， $F(a) = F(b) = 0$ 
>
> 由罗尔定理， $\exists \xi \in (a, b)$  使得  $
> $$
> F'(\xi) = 0 \Rightarrow f'(\xi) - kg'(\xi) = 0 \Leftrightarrow \frac{f'(\xi)}{g'(\xi)} = k
> $$
> **法二（原函数法）**：
>
> 分析：
> $$
> \frac{f'(\xi)}{g'(\xi)} = \frac{f(b) - f(a)}{g(b) - g(a)}
> $$
>
> $$
> \Leftrightarrow f'(\xi)[g(b) - g(a)] - g'(\xi)[f(b) - f(a)] = 0
> $$
>
> 将  $\xi$  用  $x$  替换，
> $$
> [f(x)g(b) - g(a) - g(x)f(b) - f(a)]' = 0
> $$
> 证明：构造辅助函数
> $$
> F(x) = f(x)[g(b) - g(a)] - g(x)[f(b) - f(a)]
> $$
> 则  $F \in C[a, b]$  且  $F$  在  $(a, b)$  上可导， $F(a) = F(b)$ 
>
> 由罗尔定理， $\exists \xi \in (a, b)$  使得  $F'(\xi) = 0$ 
>
> 即
> $$
> f'(\xi)[g(b) - g(a)] - g'(\xi)[f(b) - f(a)] = 0
> $$
> 即
> $$
> \frac{f'(\xi)}{g'(\xi)} = \frac{f(b) - f(a)}{g(b) - g(a)}
> $$

/example/： $f \in C[a, b]$  且  $f$  在  $(a, b)$  上可导，证明  $\exists \xi \in (a, b)$  使得
$$
f(\xi) + \xi f'(\xi) = \frac{bf(b) - af(a)}{b - a}
$$

> **证明**：令
> $$
> k = \frac{bf(b) - af(a)}{b - a} \Leftrightarrow bf(b) - af(a) - k(b - a) = 0
> $$
> 令
> $$
> F(x) = xf(x) - af(a) - k(x - a)
> $$
> 则  $F \in C[a, b]$  且  $F$  在  $(a, b)$  上可导， $F(a) = F(b) = 0$ 
>
> 由罗尔定理， $\exists \xi \in (a, b)$  使得  $F'(\xi) = 0$ 
>
> 即
> $$
> f(\xi) + \xi f'(\xi) - k = 0 \Leftrightarrow f(\xi) + \xi f'(\xi) = k
> $$

/example/： $f \in C[a, b]$  且  $f$  在  $(a, b)$  上可导，若  $f(a) = f(b) = 0$ ，证明  $\exists \xi \in (a, b)$  使得  $\lambda f(\xi) + f'(\xi) = 0$ 

> **分析**：将  $\xi$  用  $x$  替换， $\lambda f(x) + f'(x) = 0$ 
> $$
> \Leftrightarrow \lambda e^{\lambda x} f(x) + e^{\lambda x} f'(x) = 0
> $$
>
> $$
> \Leftrightarrow [e^{\lambda x} f(x)]' = 0
> $$
>
> 构造辅助函数  
> $$
> F(x) = e^{\lambda x} f(x)
> $$
> **证明**：令  $F(x) = e^{\lambda x} f(x)$ 
>
> 则  $F \in C[a, b]$  且  $F$  在  $(a, b)$  上可导， $F(a) = F(b) = 0$ 
>
> 由罗尔定理， $\exists \xi \in (a, b)$  使得  $F'(\xi) = 0$ 
>
> 即  $\lambda f(\xi) + f'(\xi) = 0$ 

/example/：$0 < a < b$ ， $f \in C[a, b]$  且 $f$ 在 $(a, b)$ 上可导，证明  $\exists \xi \in (a, b)$  使得

$$
f(\xi) - \xi f'(\xi) = \frac{1}{a-b} \begin{vmatrix} a & b \\ f(a) & f(b) \end{vmatrix}.
$$

> **法一（原函数法）**：
>
> **分析**：将  $\xi$  用  $x$  替换，
> $$
> f(x) - xf'(x) = \frac{1}{a-b} \begin{vmatrix} a & b \\ f(a) & f(b) \end{vmatrix} = k
> $$
>
> $$
> \Leftrightarrow \frac{xf'(x) - xf(x)}{x^2} + \frac{k}{x^2} = 0
> $$
>
> $$
> \Leftrightarrow \left(\frac{f(x)}{x} - k\right)' = 0
> $$
>
> **证明**：令  $F(x) = \frac{f(x) - k}{x}$ 
>
> 则  $F$  在  $[a, b]$  连续，在  $(a, b)$  可导且  $F(a) = F(b)$ 
>
> 故  $\exists \xi \in (a, b)$  使得
> $$
> F'(\xi) = 0 \Leftrightarrow f(\xi) - \xi f'(\xi) = \frac{1}{a-b} \begin{vmatrix} a & b \\ f(a) & f(b) \end{vmatrix}
> $$
> **法二（柯西中值定理）**：
>
> **分析**：
>
> $$
> \frac{af(b) - bf(a)}{a-b} = \frac{\begin{vmatrix} f(b) & f(a) \\ b & a \end{vmatrix}}{\begin{vmatrix} b & 1 \\ a & 1 \end{vmatrix}} = \frac{F(x)}{G(x)} = \frac{F(b) - F(a)}{G(b) - G(a)}
> $$
>
> $$
> f(\xi) - \xi f'(\xi) = \frac{\xi f''(\xi) - \xi' f(\xi)}{\xi^2} = \frac{F'(\xi)}{G'(\xi)}
> $$
>
> **证明**：令  $F(x) = \frac{f(x)}{x}, G(x) = \frac{1}{x}$ 
>
> 则  $F, G$  在  $[a, b]$  上连续，在  $(a, b)$  上可导且
> $$
> G'(x) = -\frac{1}{x^2} \neq 0
> $$
> 故  $\exists \xi \in (a, b)$  使得
> $$
> \frac{F'(\xi)}{G'(\xi)} = \frac{F(b) - F(a)}{G(b) - G(a)}
> $$
>
> $$
> \Leftrightarrow f(\xi) - \xi f'(\xi) = \frac{1}{a-b} \begin{vmatrix} a & b \\ f(a) & f(b) \end{vmatrix}
> $$

(3). 证明显式不等式

/example/：证明  $\forall x > 0, \frac{x}{1+x} < \ln(1+x) < x$ 

> **注**：用拉格朗日中值定理证显式不等式，出发点： $\frac{f(b) - f(a)}{b - a}$ 
>
> **分析**：结论
> $$
> \Leftrightarrow \forall x > 0, \frac{1}{1+x} < \frac{\ln(1+x) - \ln(1+0)}{x - 0} < 1
> $$
> **证明**：令  $f(x) = \ln(1+x)$ 
>
> 则  $f$  在  $[0, x]$  上连续，在 $(0, x)$ 上可导
>
> 故 $\exists\ \xi \in (0, x)$ 使
> $$
> f'(\xi) = \frac{f(x) - f(0)}{x - 0} = \frac{\ln(1+x)}{x}
> $$
> 又
> $$
> \xi \in (0, x) \Rightarrow \frac{1}{1+x} < f'(\xi) = \frac{1}{1+\xi} < 1
> $$
> 故
> $$
> \frac{1}{1+x} < \frac{\ln(1+x)}{x} < 1 \Leftrightarrow \frac{x}{1+x} < \ln(1+x) < x
> $$

**推论1**： $\forall x \in (a, b), f'(x) = 0 \Rightarrow f$  为  $(a, b)$  上的常值函数。

> **证明**： $\forall x_1, x_2 \in (a, b)$ 不妨设 $x_1 < x_2$ 
>
> 因为 $f$ 在 $[x_1, x_2] \subset (a, b)$ 上连续，在 $(x_1, x_2)$ 上可导
>
>  $\exists \xi \in (x_1, x_2)$  使得
> $$
> 0 = f'(\xi) = \frac{f(x_2) - f(x_1)}{x_2 - x_1} \Rightarrow f(x_1) = f(x_2)
> $$

**推论2**： $f \in C[a, b]$  且  $f$  在  $(a, b)$  上可导，若  $\forall x \in (a, b), f'(x) = 0 \Rightarrow f$  为  $[a, b]$  上的常值函数.

> **证明**：由上得  $\forall x \in (a, b), f(x) = c$ 
>
> 根据连续的定义
> $$
> f(a) = \lim_{x \to a^+} f(x) = c = \lim_{x \to b^-} f(x) = f(b)
> $$

### · 洛必达法则

**类型**： $\frac{0}{0}$ 或 $\frac{\infty}{\infty}$ 

**定理6**（ $\frac{0}{0}$ ， $x \to a^+$ ）：设  $f$ ， $g$ 在 $(a, a + \delta)$ 上可导且 $g'(x) \neq 0$ ，
$$
\begin{cases}
(1).\ \lim\limits_{x \to a^+} f(x) = \lim\limits_{x \to a^+} g(x) = 0 \\
(2).\ \lim\limits_{x \to a^+} \frac{f'(x)}{g'(x)} = A(\infty, +\infty, -\infty)
\end{cases}
\Rightarrow \lim\limits_{x \to a^+} \frac{f(x)}{g(x)} = A(\infty, +\infty).
$$

> **证明**：
>
> 令
> $$
> F(x) = \begin{cases} f(x) & x \in (a, a + \delta) \\ 0 & x = a \end{cases}
> $$
>
> $$
> G(x) = \begin{cases} g(x) & x \in (a, a + \delta) \\ 0 & x = a \end{cases}
> $$
>
> 任取  $x \in (a, a + \delta)$ 
>
> 则  $F$ ， $G$  在  $[a, x]$  连续，在  $(a, x)$  上可导且  $G'(x) = g'(x) \neq 0$ 
>
> 由柯西中值定理， $\exists \xi \in (a, x)$  使得
> $$
> \frac{F'(\xi)}{G'(\xi)} = \frac{F(x) - F(a)}{G(x) - G(a)} \Leftrightarrow \frac{f(\xi)}{g(\xi)} = \frac{f(x)}{g(x)}
> $$
> 注意此处的  $\xi$  依赖于  $x$  的选取，且  $a < \xi < x$ 
>
> 由追敛性定理， $x \to a^+ \Rightarrow \xi \to a^+$ ， $\xi$  可视为  $x$  趋近  $a^+$  过程中的一个子列
>
> 故
> $$
> \lim_{x \to a^+} \frac{f(x)}{g(x)} = \lim_{x \to a^+} \frac{f'(\xi)}{g'(\xi)} = \lim_{\xi \to a^+} \frac{f'(\xi)}{g'(\xi)} \overset{Heine}{=} \lim_{x \to a^+} \frac{f'(x)}{g'(x)} = A
> $$

> [!important]
>
> **注意**：
>
> 1. 引入负代换可以证明  $x \to a^-$  的情况，所以  $x \to a^+, a^-, a: A \in \mathbb{R}, \infty, +\infty, -\infty$  时定理成立
>
> 2. $$
>    \lim_{x \to a^+} \frac{f(x)}{g(x)} \overset{\frac{0}{0}}{=} \lim_{x \to a^+} \frac{f'(x)}{g'(x)} \overset{(2)}{=} A
>    $$
>

**定理7**：（ $\frac{0}{0}$ ，$x \to +\infty$ ）：设  $f$ ， $g$  在  $(a, +\infty)$  上可导且  $g'(x) \neq 0$ ，
$$
\begin{cases}
\lim\limits_{x \to +\infty} f(x) = \lim\limits_{x \to +\infty} g(x) = 0 \\
\lim\limits_{x \to +\infty} \frac{f'(x)}{g'(x)} = A(\infty, +\infty, -\infty)
\end{cases}
\Rightarrow \lim\limits_{x \to +\infty} \frac{f(x)}{g(x)} = A(\infty, +\infty).
$$

> **证明**：
>
> $$
> \lim_{x \to +\infty} \frac{f(x)}{g(x)} = \lim_{t \to 0^+} \frac{f\left(\frac{1}{t}\right)}{g\left(\frac{1}{t}\right)} = \lim_{t \to 0^+} \frac{f'\left(\frac{1}{t}\right)}{g'\left(\frac{1}{t}\right)} \left(-\frac{1}{t^2}\right)
> $$
>
> $$
> = \lim_{t \to 0^+} \frac{f'\left(\frac{1}{t}\right)}{g'\left(\frac{1}{t}\right)} = \lim_{x \to +\infty} \frac{f'(x)}{g'(x)} = A
> $$
>

> [!caution]
>
> **注意**：
>
> 1. 引入负代换可以证明  $x \to -\infty$  的情况，所以  $x \to a^+, a^-, a, +\infty, -\infty, \infty; A \in \mathbb{R}, \infty, +\infty, -\infty$  时定理成立
>
> 2. $$
>    \lim_{x \to \square} \frac{f(x)}{g(x)} \overset{0}{=} \lim_{x \to \square} \frac{f'(x)}{g'(x)} \overset{(2)}{=} A
>    $$
>
> 3. 可以连续进行有限次洛必达
>
> 4. 洛必达要与等价无穷小替换、四则运算法则等结合使用

**定理8**：（ $\frac{*}{\infty}$ ， $x \to a^+$ ）：设  $f$ ， $g$  在  $(a, a + \delta)$  上可导且  $g'(x) \neq 0$ ，
$$
\begin{cases}
\lim\limits_{x \to a^+} g(x) = \infty \\
\lim\limits_{x \to a^+} \frac{f'(x)}{g'(x)} = A(\infty, +\infty, -\infty)
\end{cases}
\Rightarrow \lim\limits_{x \to a^+} \frac{f(x)}{g(x)} = A(\infty, +\infty, -\infty).
$$

**注意**：由于柯西中值定理只适用于有限区间，因此本定理的证明不能完全沿用定理6的证明，我们尝试从极限的定义出发证明。

> **证明**： $\lim_{x \to a^+} \frac{f'(x)}{g'(x)} = A$ ，根据定义
> $$
> \forall 2 > \varepsilon > 0, \exists 0 < \delta_1 < \delta, \forall x \in (a, a + \delta_1) \subset (a, a + \delta), \left|\frac{f'(x)}{g'(x)} - A\right| < \frac{\varepsilon}{2}
> $$
> 任取  $x \in (a, a + \delta_1)$ （回避  $a$  点），对  $[x, a + \delta_1]$  使用柯西中值定理
>
>  $\exists \xi \in (x, a + \delta_1)$  使得
> $$
> \frac{f'(\xi)}{g'(\xi)} = \frac{f(x) - f(a + \delta_1)}{g(x) - g(a + \delta_1)}
> $$
> 因为  $\xi \in (x, a + \delta_1)$ ，所以  $\left|\frac{f'(\xi)}{g'(\xi)} - A\right| < \frac{\varepsilon}{2}$ 
>
> 所以  $\left|\frac{f(x) - f(a + \delta_1)}{g(x) - g(a + \delta_1)} - A\right| < \frac{\varepsilon}{2}$ 
>
>
> $$
> \Leftrightarrow \left|\frac{f(x)}{g(x)} - \frac{f(a + \delta_1)}{g(x)} - A\right| = \left|\frac{f(x)}{g(x)} - A + \frac{Ag(a + \delta_1) - f(a + \delta_1)}{g(x)}\right| < \frac{\varepsilon}{2}\left|1 - \frac{g(a + \delta_1)}{g(x)}\right|
> $$
>
>
> $$
> \Rightarrow \left|\frac{f(x)}{g(x)} - A + \frac{Ag(a + \delta_1) - f(a + \delta_1)}{g(x)}\right| < \frac{\varepsilon}{2}\left|1 - \frac{g(a + \delta_1)}{g(x)}\right|
> $$
>
>
> $$
> \leq \frac{\varepsilon}{2} + \frac{\varepsilon}{2}\left|\frac{g(a + \delta_1)}{g(x)}\right| < \frac{\varepsilon}{2} + \left|\frac{g(a + \delta_1)}{g(x)}\right|
> $$
>
> 使用不等式  $|a| = |a + b - b| \leq |a + b| + |b|$ 
>
>
> $$
> \left|\frac{f(x)}{g(x)} - A\right| \leq \left|\frac{f(x)}{g(x)} - A + \frac{Ag(a + \delta_1) - f(a + \delta_1)}{g(x)}\right| + \left|\frac{Ag(a + \delta_1) - f(a + \delta_1)}{g(x)}\right|
> $$
>
>
> $$
> < \frac{\varepsilon}{2} + \left|\frac{g(a + \delta_1)}{g(x)}\right| + \left|\frac{Ag(a + \delta_1) - f(a + \delta_1)}{g(x)}\right| = \frac{\varepsilon}{2} + \frac{B(\delta_1)}{|g(x)|}
> $$
>
> 因为  $\lim_{x \to a^+} \frac{B(\delta_1)}{|g(x)|} = 0$ ，根据定义
>
> 对上述  $\varepsilon$ ，
> $$
> \exists 0 < \delta_2 < \delta_1, \forall x \in (a, a + \delta_2), \frac{B(\delta_1)}{|g(x)|} < \frac{\varepsilon}{2} \Rightarrow \left|\frac{f(x)}{g(x)} - A\right| < \varepsilon
> $$
> 故  $\lim_{x \to a^+} \frac{f(x)}{g(x)} = A$  得证

> [!important]
>
> **注意**：
>
> 1. $f(x)$  在  $(a, a + \delta)$  局部有界： $\frac{f}{g} = \frac{*}{\infty} = * \cdot 0 = 0$  确定型
>
>     $\lim_{x \to a^+} f(x) = \infty: \frac{f}{g} = \frac{\infty}{\infty}$  未定型
>
> 2. 类似于定理6，本定理也可以进行推广 $x \to a^+, a^-, a, +\infty, -\infty, \infty; A \in \mathbb{R}, \infty, +\infty, -\infty$  时定理成立

下面给出几个例子：

/example/

$$
\lim_{x \to +\infty} \frac{\ln x}{x^\alpha} \overset{\alpha > 0}{=} \lim_{x \to +\infty} \frac{1}{x} \frac{1}{\alpha x^{\alpha - 1}} = \lim_{x \to +\infty} \frac{1}{\alpha x^\alpha} = 0
$$


$$
\lim_{x \to +\infty} \frac{x^\alpha}{a^x} \overset{\alpha > 0, a > 1}{=} \lim_{x \to +\infty} \frac{\alpha x^{\alpha - 1}}{a^x \ln a} = \cdots = \lim_{x \to +\infty} \frac{\alpha(\alpha - 1)\cdots(\alpha - [\alpha])x^{\alpha - (\alpha | + 1)}}{a^x (\ln a)^{|\alpha | + 1}} = 0
$$


$$
\lim_{x \to +\infty} \frac{a^x}{x^x} \overset{*/\infty}{=} \lim_{x \to +\infty} e^{x \ln(\frac{a}{x})} \overset{e^{-\infty}}{=} 0
$$

**定理9**（阶指幂对原理）：( $\alpha > 0, a > 1$ ) 从左到右：快 (高阶) --- 慢 (低阶)

$$
x \to +\infty : x^x \quad a^x \quad x^\alpha \quad \ln x
$$

$$
n \to \infty^n : n^n \quad n! \quad a^n \quad n^\alpha \quad \ln n
$$

> **注意**：
>
> 1. 等级差别： $n!, a^n, n^\alpha, \ln n$ （不包括  $n^n$ ）
>
>    有限个低等级的乘在一起也抵不过一个高等级的
>
>    例如  $\lim_{x \to +\infty} \frac{\ln^{100} x}{x} = 0$ ， $\lim_{x \to +\infty} \frac{e^n \cdot n^{10000} \cdot \ln^{100} n}{n!} = 0$ 
>
> 2. $n^n$  只比  $n!$  快一点
>
>    $$
>    (1 + \frac{1}{n})^n < e < (1 + \frac{1}{n})^{n+1} \Rightarrow \frac{n^n}{n! e^n} < 1
>    $$
>    思考： $\sqrt[n]{n} \sim \frac{n}{e}$ ， $\ln n \sim 1 + \frac{1}{2} + \cdots + \frac{1}{n}$ 

/example/

$$
\lim_{x \to +\infty} x^\alpha \ln x \overset{\alpha > 0}{=} \lim_{y \to +\infty} -\frac{\ln y}{y^\alpha} = 0
$$

/example/

> 
>
> $$
> \lim_{x \to +\infty} \frac{x}{x + \sin x} {=} \lim_{x \to +\infty} \frac{1}{1 + \cos x}
> $$
>
> 振荡，洛不达！
> $$
> \lim_{x \to +\infty} \frac{x}{x + \sin x} = \lim_{x \to +\infty} \frac{1}{\sin x} \frac{1}{1 + \frac{1}{x}} = 1
> $$

**其他类型**：

(1). $\infty - \infty$  —— 通分

$$
\lim_{x \to 0} \left( \frac{1}{\sin^2 x} - \frac{1}{x^2} \right) = \lim_{x \to 0} \left( \frac{x^2 - \sin^2 x}{x^2 \sin^2 x} \right)
$$

(2). $0 \cdot \infty$  —— 倒数

$$
\lim_{x \to 0} x \ln x = \lim_{x \to 0} \frac{\ln x}{\frac{1}{x}} = \lim_{x \to 0} \frac{\frac{1}{x}}{-\frac{1}{x^2}} = \lim_{x \to 0} -x = 0
$$

(3). $\infty^0, 0^0, 1^\infty$  —— 对数

$$
\lim_{x \to 0^+} x^x = \exp \left( \lim_{x \to 0^+} x \ln x \right) = 1
$$

> /example/
>
> 
>
> $$
> \lim_{x \to 0} \left( \frac{a_1^x + a_2^x + \cdots + a_n^x}{n} \right)^{\frac{1}{x}} (a_i > 0)
> $$
>
> $$
> = \exp \left( \lim_{x \to 0} \frac{\ln(a_1^x + a_2^x + \cdots + a_n^x) - \ln n}{x} \right)
> $$
>
> $$
> = \exp \left( \lim_{x \to 0} \frac{a_1^x \ln a_1 + a_2^x \ln a_2 + \cdots + a_n^x \ln a_n}{a_1^x + a_2^x + \cdots + a_n^x} \right)
> $$
>
> $$
> = \exp \left( \frac{\ln(a_1 a_2 \cdots a_n)}{n} \right) = \sqrt[n]{a_1 a_2 \cdots a_n}
> $$
>

**注意**：数列极限  $\overset{Heine}{=}$  函数极限

### · 泰勒公式





