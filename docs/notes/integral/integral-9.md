---
title: Chapter 9 多元函数微分
createTime: 2025/02/06 10:54:16
permalink: /integral/integral-9/
---

$$
\int^{death}_{birth}study\ \text{d}\ time=life
$$

## Fragment 1 多元函数极限

### · 平面点集

平面上的点  $P$  可以用一有序实数对  $(x, y)$  唯一表示

设  $P_1(x_1, y_1)$ ， $P_2(x_2, y_2)$  的距离  $d(P_1, P_2) = \sqrt{(x_1 - x_2)^2 + (y_1 - y_2)^2}$ 

这样的定义满足如下的极限性质

1. 正性： $d(P_1, P_2) \geq 0$ ，且仅当  $ P_1 = P_2$  等号成立
2. 三角不等式： $d(P_1, P_2) \leq d(P_1, P_3) + d(P_3, P_2)$ 

平面上满足某条件的点的集合称为平面点集。记作  $E = \{ P \mid P$  满足某条件  $\}$ 

平面点列  $\{ P_n \}$   是特殊的平面点集：

(1). 邻域

设  $P_n$  与  $\delta$  圆的交为  $\{ P \mid d(P, P_n) < \delta \}$ ，记作  $N(P_n, \delta)$ 

定义  $P_0$  为平面点  $\alpha$  的极限为  $\{ P \mid 0 < d(P, P_n) < \delta \}$ ，记作  $N_\alpha(P_n, \delta)$ 

还有一种极限称为无穷极限，即以  $P_0$  为中心，以  $\delta$  为边长的方形区域，表示为平面极限

由于任一平面极限都可以包含于某一方形极限，反之亦然，所以极限与方形极限等价不加以区分

(2). 平面点集  $E$  中的点  $P_0$  的分类

第一种分类方式：

- 内点： $\exists \delta > 0$ ， $N(P_0, \delta) \cap E = \varnothing$ 
- 边界点： $\exists \delta > 0$ ， $N(P_0, \delta) \cap E \neq \varnothing$  且  $N(P_0, \delta) \cap E \neq \varnothing$ 

第二种分类方式：

- 聚点：定义同上
- 孤立点： $\exists \delta > 0 $ ， $ N(P_0, \delta) \cap E = \{ P_0 \}$ 

> 1. 内点是极限点，边界点是极限点或孤立点；孤立点是极限点，聚点是内点或边界点
> 2. 内点和聚点称为  $E$ ：聚点全体记作  $F$  又称为闭包，边界点全体记作  $\partial E$ 

命题1：以下三个结论为  $P_0$  为极限点的等价描述：

1.  $\forall \delta > 0$ ， $N(P_0, \delta) \cap E \neq \varnothing$ 
2.  $\forall \delta > 0$ ， $N(P_0, \delta) \cap E$  是无穷集
3.  $\forall \delta > 0$ ， $N(P_0, \delta) \cap E$  至少有一个极限点

> PS：内点和聚点是极限点，但极限点不一定是内点或聚点，例如分外的极限点

(3) 平面点集   $E$  的分类

第一种分类方式：

- 开集： $E \subset E^*$ 
- 闭集： $E^* \subset E$ 
- 边界： $F \subset E$ 

非开闭性： $ E $  成开集或闭集但不同时是

第二种分类方式：

- 有界集： $\exists M > 0$ ， $E \subset N(O, M)$ ，其中  $O(0, 0)$  为坐标原点
- 无界集： $\forall M > 0$ ， $\exists P_0 \in E$ ， $P_0 \notin N(O, M)$ 

> 1. 定义极限的值域为  $d(P_1, P_2) = \sup_{P_1, P_2 \in E} d(P_1, P_2)$  则  $E$  有界当且仅当  $d(E)$  为有限值
> 2. 平面点集  $\{ P_1(x_1, y_1) \}$  有界当且仅当  $\{ x_n \}$ ， $\{ y_n \}$  均有限

> 命题2：设 $F$ 是闭集， $G$ 是开集，则 $F∖G$ 是闭集， $G∖F$ 是开集.

(4) 区域与闭区域

若  $ E $  中的点可以用有限条折线相互联结为区域集

连续的开集称为区域（开区域），开区域和闭集的边界点组成的区域

> PS：闭区域是闭集的补集，但闭集的补集不一定是闭区域，例如分外的闭区域

### · 二元函数极限

从 $\mathbb{R}^2$ 到 $\mathbb{R}$ 的映射是二元函数

> /Define/
>
> 设平面点集 $D \subset \mathbb{R}^2$，若按照某种对应法则 $f$，$D$ 中每一点 $P(x, y)$ 都有唯一确定的 $z \in \mathbb{R}$ 与之对应，则称 $f$ 为定义在 $D$ 上的二元函数，称 $D$ 为 $f$ 的定义域，$P \in D$ 所对应的 $z$ 为 $f$ 在点 $P$ 的函数值，记作 $z = f(P)$ 或 $z = f(x, y)$，全体函数值的集合为 $f$ 的值域，记作 $f(D) \subset \mathbb{R}$。

在三维欧式空间中 $S = \{(x, y, z) | (x, y) \in D, z = f(x, y)\}$ 称为二元函数 $f$ 的图像。

> /Define/
>
> **定义**：设 $f$ 为定义在 $D \subset \mathbb{R}^2$ 上的二元函数，$P_0$ 为 $D$ 的一个聚点，$A$ 是一个确定的实数，若 $\forall \varepsilon > 0$，$\exists \delta > 0$，$\forall p \in (P_0, \delta) \cap D$ 有 $|f(P) - A| < \varepsilon$，则称 $A$ 为 $f$ 在 $D$ 上当 $P \to P_0$ 时的极限，记作 
> $$
> \lim_{(x, y) \to (x_0, y_0)} f(P) = A\quad \quad \lim_{\substack{x \to x_0 \\ y \to y_0}} f(x, y) = A\quad \quad\lim_{(x, y) \to (x_0, y_0)} f(x, y)
> $$
> **等价描述**：$\forall \varepsilon > 0$，$\exists \delta > 0$，$\forall |x - x_0| < \delta$，$|y - y_0| < \delta$ 且 $(x, y) \neq (x_0, y_0)$ 有 $|f(x, y) - A| < \varepsilon$。

**定理（海涅定理）**：设 $f$ 为定义在 $D \subset \mathbb{R}^2$ 上的二元函数，$P_0$ 为 $D$ 的一个聚点，则 $\lim_{P \to P_0} f(P) = A$ 的充分必要条件是对 $D$ 中任意满足 $P_n \neq P_0$ 且 $P_n \to P_0$，$n \to \infty$ 的点列 $\{P_n\}$ 都有 $\lim_{n \to \infty} f(P_n) = A$。

**PS**：用于证明极限不存在

1. 若存在 $\{P_n\} : P_n \to P_0$ 但 $\lim_{n \to \infty} f(P_n)$ 不存在
2. 若存在 $\{P_n\} : P_n \to P_1$，$\{P_n'\} : P_n' \to P_2$ 但 $\lim_{n \to \infty} f(P_n) \neq \lim_{n \to \infty} f(P_n')$ ，则 $\lim_{P \to P_0} f(P)$ 不存在

**注意**：逆命题不成立，即即使 $\lim_{x \to 0} f(x, kx) \equiv A$ 也不能说明 $\lim_{(x, y) \to (0, 0)} f(x, y) = A$

前面讨论的 $\lim_{(x, y) \to (x_0, y_0)} f(x, y)$ 是两个自变量以任何路径靠近 $(x_0, y_0)$，称为重极限

> **定义**：设 $f$ 为定义在 $D \subset \mathbb{R}^2$ 上的二元函数，$D$ 在 $x$ 轴 $y$ 轴上的投影分别为 $X, Y$，设 $x_0, y_0$ 分别是 $X, Y$ 的聚点。若对任意固定 $y \to y_0$ $y \to Y$ 存在极限 $\lim_{x \to x_0} f(x, y)$（一般与 $y$ 有关，是 $y$ 的函数），若进一步还存在极限 $\lim_{y \to y_0} \lim_{x \to x_0} f(x, y) = A$，称为 $f(x, y)$ 先对 $x$ 后对 $y$ 的累次极限，记作 $A_{21} = \lim_{x \to x_0} \lim_{y \to y_0} f(x, y)$，类似地还有 $f(x, y)$ 先对 $y \to y_0$ 的累次极限 $A_{12} = \lim_{y \to y_0} \lim_{x \to x_0} f(x, y)$，重极限记作 $A = \lim_{(x, y) \to (x_0, y_0)} f(x, y)$。

**注意**：累次极限与重极限的存在性没有必然的蕴含关系

**定理**：若重极限 $\lim_{(x, y) \to (x_0, y_0)} f(x, y) = A$（有限或无限），且当 $y \neq y_0$ 时 $\lim_{x \to x_0} f(x, y) = \varphi(y)$ 存在，则有
$$
\lim_{y \to y_0} \lim_{x \to x_0} f(x, y) = \lim_{x \to x_0} \varphi(y) = A
$$

> /proof/
>
> 当 $A$ 有限时，$\forall \varepsilon > 0$，$\exists \delta > 0$，$\forall |x - x_0| < \delta$，$|y - y_0| < \delta$ 且 $(x, y) \neq (x_0, y_0)$ 时，有 $|f(x, y) - A| < \varepsilon$
>
> 对固定的 $y \neq y_0$，由于 $\lim_{x \to x_0} f(x, y) = \varphi(y)$，则上式取极限 $x \to x_0$
>
> 知当 $|y - y_0| < \delta$ 时，有 $|\varphi(y) - A| < \varepsilon$，$A$ 无限的情况同理

**注意**：

1. 若重极限与两个累次极限都存在，则三者必相等
2. 若两个累次极限存在但不相等，则重极限不存在

### · 二元函数连续性

> /Define/
>
> 设 $f$ 为定义在 $D \subset \mathbb{R}^2$ 上的二元函数，$P_0 \in D$（聚点或孤立点）若 $\forall \varepsilon > 0$，$\exists \delta > 0$，$\forall P \in N(P_0, \delta) \cap D$ 有 $|f(P) - f(P_0)| < \varepsilon$，则称 $f$ 关于 $D$ 在 $P_0$ 连续，等价描述为 $\lim_{P \to P_0} f(P) = f(P_0)$。若 $P$ 上下任何点都连续，称 $f$ 为 $D$ 上的连续函数。

1. 若 $P_0$ 是 $D$ 的孤立点，则 $P_0$ 必是 $f$ 关于 $D$ 的连续点
2. 若 $\lim_{P \to P_0} f(P)$ 存在但不等于 $f(P_0)$，称 $P_0$ 为 $f$ 的可去间断点

**定理（复合函数的连续性）**：设 $f(x, y)$ 在 $(x_0, y_0)$ 连续，而 $x = \varphi(s, t)$，$y = \psi(s, t)$ 在 $(s_0, t_0)$ 连续，$x_0 = \varphi(s_0, t_0)$，$y_0 = \psi(s_0, t_0)$，则复合函数 $g(s, t) = f(\varphi(s, t), \psi(s, t))$ 在 $(s_0, t_0)$ 连续。

## Fragment 2 偏导数 全微分

### · 基础概念

若将二元函数中的一个变量固定，则二元函数就退化为了一元函数，此时我们可以考虑微分。

> /Define/
>
> 设  $z = f(x, y)$  在  $(x_0, y_0)$  的某邻域上有定义，若极限
>
> $$
> \lim_{\Delta x \to 0} \frac{f(x_0 + \Delta x, y_0) - f(x_0, y_0)}{\Delta x}
> $$
> 存在，称为  $z$  在  $(x_0, y_0)$  关于  $x$  的偏导数，记为
>
> $$
> z_x(x_0, y_0) \text{ or } f_x(x_0, y_0) \text{ or } \frac{\partial z}{\partial x} \bigg|_{(x_0, y_0)} \text{ or } \frac{\partial f}{\partial x} \bigg|_{(x_0, y_0)}
> $$
> 若  $z$  在  $E$  上每一点都可导，则称  $z$  在  $E$  上可导， $f_x(x, y)$  与  $f_y(x, y)$  称为偏导函数。

若  $z = f(x, y)$  在  $(x_0, y_0)$  可导，是否一定连续？

反例： $f(x, y) = \begin{cases} 
1 & xy \neq 0 \\
0 & xy = 0 
\end{cases}$  在  $(0, 0)$  处可导但不连续，可导不一定连续。

***

我们已经在二元函数定义了偏导数概念

回顾一元微分：如果  $y = f(x)$  在  $x_0$  点某邻域上有定义，且

$$
 \Delta y = f(x_0 + \Delta x) - f(x_0)
$$
 能写成  $A(x) \Delta x + o(\Delta x) (\Delta x \to 0)$  的形式，则称  $y = f(x)$  在  $x_0$  点可微， $A \Delta x$  称为  $y$  在  $x_0$  点的微分，记为  $dy = A dx$ 。

我们可以将其推广到二元函数上

> /Define/
>
> 设  $z = f(x, y)$  在  $ (x_0, y_0) $  点某邻域上有定义，且
>
> $$
> \Delta z = f(x_0 + \Delta x, y_0 + \Delta y) - f(x_0, y_0) 
> $$
> 可以表示成  $A \Delta x + B \Delta y + o(\rho)$ ，
>
> $$
> \rho = \sqrt{\Delta x^2 + \Delta y^2} 
> $$
> 的形式则称  $z = f(x, y)$  在  $(x_0, y_0)$  点可微。 $A \Delta x + B \Delta y$  称为  $z$  在  $(x_0, y_0)$  点的微分，记为  $dz|_{(x_0, y_0)} = A dx + B dy$ 

不同于偏导数，全微分蕴含了函数某点处所有方向的信息，因此可微的条件比可导更强。

定理1：若  $z = f(x, y)$  在  $(x_0, y_0)$  可微，则  $z$  在  $(x_0, y_0)$  点连续

> /proof/
> $$
> \begin{align*}
> \lim_{(x, y) \to (x_0, y_0)} f(x, y) &= \lim_{\Delta x \to 0} f(x_0 + \Delta x, y_0 + \Delta y)\\
> &= \lim_{\Delta x \to 0} f(x_0, y_0) + A \Delta x + B \Delta y + o(\rho) \\
> &= f(x_0, y_0) 
> \quad(\Delta y \to 0)
> \end{align*}
> $$

下面的定理说明了全微分与偏导数的关系。

定理2：若  $z = f(x, y)$  在  $(x, y)$  可微  $dz(x, y) = A dx + B dy$ ，则  $A = f_x(x, y)$ ， $B = f_y(x, y)$ 。

> /proof/
>
> 固定  $y$ ，即  $\Delta y = 0$ ，则  $\rho = |\Delta x|$ 
>
>
> $$
> f(x + \Delta x, y) - f(x, y) = A \Delta x + o(|\Delta x|)
> $$
>
> $$
> \Rightarrow \frac{f(x + \Delta x, y) - f(x, y)}{\Delta x} = A + \frac{o(|\Delta x|)}{\Delta x}
> $$
>
> 上式取极限  $\Delta x \to 0$ ，则得到  $f_x(x, y) = A$ 

注意：

1. 二元  $dz = f_x dx + f_y dy$ ，三元  $du = f_x dx + f_y dy + f_z dz$ 
2. 可微一定连续，可微一定可导

二元函数全微分与一元函数微分一样具有几何意义

> (1). 一元函数  $y = f(x)$ 
>
> 在  $(x_0, y_0)$  处的微分  $dy = f'(x_0) dx$ 
>
> 在  $(x_0, y_0)$  处的切线  $y - y_0 = f'(x_0)(x - x_0)$ 
>
> (2). 二元函数  $z = f(x, y)$ 
>
> 在  $(x_0, y_0, z_0)$  处的微分  $dz = f_x(x_0, y_0) dx + f_y(x_0, y_0) dy$ 
>
> 在  $(x_0, y_0, z_0)$  处的切面  $z - z_0 = f_x(x_0, y_0)(x - x_0) + f_y(x_0, y_0)(y - y_0)$ 

### · 可微性验证

根据定义，验证多元函数的可微性只需验证下式是否成立

$$
\Delta z - f_x \Delta x - f_y \Delta y = o(\rho) \Leftrightarrow \lim_{\rho \to 0^+} \frac{\Delta z - f_x \Delta x - f_y \Delta y}{\rho} = 0
$$
/example/ $z = \sqrt{|xy|}$，$z$ 在 $(0, 0)$处是否可微？

> /solution/
>
> $f_x(0, 0) = \lim_{\Delta x \to 0} \frac{\sqrt{\Delta x \cdot 0} - 0}{\Delta x} = 0$，$f_y(0, 0) = 0$
>
> $$
> \lim_{\rho \to 0^+} \frac{(\sqrt{\Delta x \Delta y} - 0) - 0 \Delta x - 0 \Delta y}{\rho} = \lim_{\rho \to 0^+} \sqrt{|\sin \theta \cos \theta|}
> $$
>
> 不存在，故不可微

定理3：若 $z = f(x, y)$在 $(x, y)$的某邻域可导，且偏导函数 $f_x(x, y)$，$f_y(x, y)$在 $(x, y)$点连续，则 $f(x, y)$在 $(x, y)$点可微。

> /proof/
> $$
> \begin{align*}
> \Delta z &= f(x + \Delta x, y + \Delta y) - f(x, y)\\
> &= f(x + \Delta x, y + \Delta y) - f(x + \Delta x, y) + f(x + \Delta x, y) - f(x, y)
> \end{align*}
> $$
>
> 由条件知当 $\Delta x$与 $\Delta y$充分小时 $f(x, y)$可导
>
> 把 $f(x + \Delta x, y)$看作是 $y$的一元函数，根据拉格朗日中值定理，存在 $\theta_1 \in (0, 1)$使得
>
> $$
> f(x + \Delta x, y + \Delta y) - f(x + \Delta x, y) = f_y(x + \Delta x, y + \theta_1 \Delta y) \Delta y
> $$
>
> 同理存在 $\theta_2 \in (0, 1)$使得 $f(x + \Delta x, y) - f(x, y) = f_x(x + \theta_2 \Delta x, y) \Delta x$
>
> 从而
>
> $$
> \Delta z - f_x(x, y) \Delta x - f_y(x, y) \Delta y
> $$
>
> $$
> = [f_y(x + \Delta x, y + \theta_1 \Delta y) - f_y(x, y)] \Delta y + [f_x(x + \theta_2 \Delta x, y) - f_x(x, y)] \Delta x
> $$
>
> 由于 $f_x(x, y)$，$f_y(x, y)$在 $(x, y)$点连续
>
> $f_y(x + \Delta x, y + \theta_1 \Delta y) - f_y(x, y) \rightarrow 0 \, (\rho \rightarrow 0^+)$ ，记为  $o(1)$ 
>
> 同理   $f_x(x + \theta_2 \Delta x, y) - f_x(x, y) = o(1)$ ，所以
>
>
> $$
> \lim_{\rho \to 0^+} \frac{\Delta z - f_x(x, y) \Delta x - f_y(x, y) \Delta y}{\rho} = \lim_{\rho \to 0^+} \left( o(1) \frac{\Delta x}{\rho} + o(1) \frac{\Delta y}{\rho} \right)
> $$
>
> 又因为  $\left| \frac{\Delta x}{\rho} \right|, \left| \frac{\Delta y}{\rho} \right| \leq 1$ ，所以上面的极限为零，故  $f(x, y)$  在  $(x, y)$  点可微

***

(1). 若将条件增强，假设 $f_x$，$f_y$在 $(x, y)$的某邻域连续，可利用微积分基本定理

$$
\begin{align*}
f(x + \Delta x, y + \Delta y) - f(x + \Delta x, y) = \int_y^{y+\Delta y} f_y(x + \Delta x, s) ds\\
= \int_y^{y+\Delta y} [f_y(x, y) + o(1)] ds = f_y(x, y) \Delta y + o(1) \Delta y
\end{align*}
$$
后续步骤省略

(2). 逆命题不成立，即偏导函数连续不是可微的必要条件

> 反例：$f(x, y) = \begin{cases} 
> (x^2 + y^2) \sin \frac{1}{x^2 + y^2} & x^2 + y^2 \neq 0 \\
> 0 & x^2 + y^2 = 0 
> \end{cases}$

(3). 由证明可以看出，可微性只需验证 $\Delta z = f_x \Delta x + f_y \Delta y + o(1) \Delta x + o(1) \Delta y$

将上面的叙述严格的语言写出来，就是如下的引理

引理1：$\Delta z = f_x \Delta x + f_y \Delta y + o(1) \Delta x + o(1) \Delta y$等价于

$$
\Delta z = f_x \Delta x + f_y \Delta y + o(\rho)，\rho \to 0^+
$$

> /proof/
>
> 必要性在证明过程中已经体现，下证充分性
>
> 事实上，我们只需证明 $o(\rho)$可以分解成 $o(1) \Delta x + o(1) \Delta y$即可
>
> 任取 $f(x, y) = o(\rho)$，有 $\lim_{\rho \to 0^+} \frac{f(x, y)}{\rho} = 0$，从而 $\frac{f(x, y)}{\rho} = o(1)$
>
> 令 $f_1(x, y) = \frac{f(x, y)}{\rho} |\Delta x| = o(1) \Delta x$
>
> $$
> f_2(x, y) = f(x, y) - f_1(x, y) = \frac{f(x, y)}{\rho} (\rho - |\Delta x|) \Delta y
> $$
> 从而 $f(x, y) = f_1(x, y) + f_2(x, y)$

(4). 证明过程中利用到中值定理，可以归结为如下二元函数的中值定理

> 引理2：若  $z = f(x, y)$  在  $(x, y)$  的某邻域可导，则当  $\Delta x$  与  $\Delta y$  充分小时，全增量
>
> $$
> \Delta z = f_x(x + \theta_1 \Delta x, y + \Delta y) \Delta x + f_y(x, y + \theta_2 \Delta y) \Delta y
> $$
> 其中  $\theta_1, \theta_2 \in (0, 1)$ 。

***

### · 高阶偏导

> /Define/
>
> 二元函数  $z = f(x, y)$  的偏导数  $f_x(x, y)$  仍是二元函数，若其仍然可导，其对  $x$  的偏导数记为  $f_{xx}$  或  $\frac{\partial^2 f}{\partial x^2}$ ；对  $y$  的偏导数记为  $f_{xy}$  或  $\frac{\partial^2 f}{\partial x \partial y}$ ，类似地还有  $f_{yx}$  和  $f_{yy}$ 。其中  $f_{xy}$  与  $f_{yx}$  称为二阶混合偏导数

事实上，二阶混合偏导数  $ f_{xy} $  与  $f_{yx}$  并不一定相等。

> 反例： $f(x, y) = \begin{cases} 
> \frac{x^2 y^2 - y^2}{x^2 + y^2} & x^2 + y^2 \neq 0 \\
> 0 & x^2 + y^2 = 0 
> \end{cases}$ 

我们将  $f_{xy}(x, y)$  表示成极限，即  $f_x(x, y) = \lim_{\Delta x \to 0} \frac{f(x + \Delta x, y) - f(x, y)}{\Delta x}$ ，从而

$$
\begin{align*}
f_{xy}(x, y) &= \lim_{\Delta y \to 0} \frac{f_x(x, y + \Delta y) - f_x(x, y)}{\Delta y}\\
&= \lim_{\Delta y \to 0} \lim_{\Delta x \to 0} \frac{f(x + \Delta x, y + \Delta y) - f(x, y + \Delta y) - f(x + \Delta x, y) + f(x, y)}{\Delta x \Delta y}
\end{align*}
$$
同理

$$
f_{yx}(x, y) = \lim_{\Delta y \to 0} \lim_{\Delta x \to 0} \frac{f(x + \Delta x, y + \Delta y) - f(x + \Delta x, y) - f(x, y + \Delta y) + f(x, y)}{\Delta x \Delta y}
$$
于是  $f_{xy}$  与  $f_{yx}$  是否相等归结于上面两个累次极限能否换序的问题

> 定理4：若  $f_{xy}(x, y)$  与  $f_{yx}(x, y)$  在  $(x, y)$  连续，则二者相等。

证明过程略（饶了我吧）

***

1. 推广到  $n$  阶偏导，若  $f$  具有直到  $n$  阶的连续偏导数，则混合偏导数与求导顺序无关
2. 在数学分析中，今后都默认多元函数的偏导数连续，从而混合偏导数与求导顺序无关。为了叙述方便，我们引入记号  $ C^k(E) $ ，其中  $ E \subset \mathbb{R}^2, k \geq +\infty $  表示全体不超过  $k$  阶的所有偏导数都在  $ E $  连续的函数的集合

由于我们默认高阶偏导的求导顺序可以交换，我们可以定义**微分算子**的记号

$$
\left( a \frac{\partial}{\partial x} + b \frac{\partial}{\partial y} \right)^n \frac{\partial^n f}{\partial x^i \partial y^j} = \sum_{i=0}^n C_n^i \left( a \frac{\partial}{\partial x} \right)^i \left( b \frac{\partial}{\partial y} \right)^{n-i} = \sum_{i=0}^n C_n^i a^i b^{n-i} \frac{\partial^n}{\partial x^i \partial y^{n-i}}
$$

$$
\left( a \frac{\partial}{\partial x} + b \frac{\partial}{\partial y} \right)^n f = \sum_{i=0}^n C_n^i a^i b^{n-i} \frac{\partial^n f}{\partial x^i \partial y^{n-i}}
$$


注意，此记号只是形式上写成幂次形式，不能把 $\left( a \frac{\partial}{\partial x} + b \frac{\partial}{\partial y} \right)^n$ 理解为 $n$ 个 $\left( a \frac{\partial}{\partial x} + b \frac{\partial}{\partial y} \right)$ 的复合

## Fragment 3 复合函数微分法

### · 复合函数的偏导数

在一元函数微分学中，复合函数  $z = f(y)$ ， $y = g(x)$ ，有链式法则  $\frac{dz}{dx} = \frac{dz}{dy} \frac{dy}{dx}$ 。

而二元复合函数  $z = f(x, y)$ ， $z = \varphi(s, t)$ ， $y = \psi(s, t)$  能否求导？如何求导？

**定理（链式法则）**：对上述二元复合函数，若  $x_s, x_t, y_s, y_t$  在  $(s, t)$  存在，且  $f$  在  $(s, t)$  对应的  $(x, y)$  可微，则复合函数在  $(s, t)$  的偏导数存在，且
$$
\frac{\partial z}{\partial s} = \frac{\partial f}{\partial x} \frac{\partial x}{\partial s} + \frac{\partial f}{\partial y} \frac{\partial y}{\partial s} \\
\frac{\partial z}{\partial t} = \frac{\partial f}{\partial x} \frac{\partial x}{\partial t} + \frac{\partial f}{\partial y} \frac{\partial y}{\partial t}
$$

> (1). 定理中可微的条件不可以省略
>
> (2). 其中  $\frac{\partial f}{\partial x}, \frac{\partial f}{\partial y}$  是关于  $ x, y $  的二元函数， $\frac{\partial x}{\partial s}, \frac{\partial x}{\partial t}, \frac{\partial y}{\partial s}, \frac{\partial y}{\partial t}$  是关于  $s, t$  的二元函数
>
> (3). 上式可以写成矩阵形式
>
> $$
> \begin{bmatrix}
> \frac{\partial z}{\partial s} \\
> \frac{\partial z}{\partial t}
> \end{bmatrix}
> =\begin{bmatrix}
> \frac{\partial x}{\partial s} & \frac{\partial y}{\partial s} \\
> \frac{\partial x}{\partial t} & \frac{\partial y}{\partial t}
> \end{bmatrix}
> \begin{bmatrix}
> \frac{\partial f}{\partial x} \\
> \frac{\partial f}{\partial y}
> \end{bmatrix}
> $$
> 其中
>
> $$
> \begin{bmatrix}
> \frac{\partial x}{\partial s} & \frac{\partial y}{\partial s} \\
> \frac{\partial x}{\partial t} & \frac{\partial y}{\partial t}
> \end{bmatrix}
> $$
> 称为雅可比矩阵
>
> (4). 从微分的角度（一阶全微分形式的不变性）
>
> 将  $\begin{cases} dx = \varphi_s ds + \varphi_t dt \\ dy = \psi_s ds + \psi_t dt \end{cases}$  代入  $dz = f_x dx + f_y dy$ ，得到
> $$
> dz = (f_x \varphi_s + f_y \psi_s) ds + (f_x \varphi_t + f_y \psi_t) dt
> $$
>
> 根据全微分表示式可写成：
>
> $$
> \begin{cases}
> z_s = f_x \varphi_s + f_y \psi_s \\
> z_t = f_x \varphi_t + f_y \psi_t
> \end{cases}
> $$

/example/ $z = f(x, y, t)$，$x = \varphi(s, t)$，$y = \psi(s, t)$，求 $z_s$ 和 $z_t$

> /solution/ $z_s = f_x x_s + f_y y_s$，$z_t = f_x x_t + f_y y_t + f_t$

注意第二个式子左边的 $z_s$ 和右边的 $f_t$ 表达的含义是不同的

其中 $x_t$ 是指将自变量 $z = f(x, y, t)$ 看成关于 $s, t$ 的复合函数

（也就是 $z = f(\varphi(s, t), \psi(s, t), t)$）再对 $t$ 求偏导，所以 $z_t$ 也是关于 $s, t$ 的函数

而 $f_t$ 则是指将 $f$ 看作三元函数再对第三个分量求偏导，$f_t$ 是关于 $x, y, t$ 的函数

进一步解释，就是将 $f$ 看成 $\mathbb{R}^3$ 到 $\mathbb{R}$ 的映射，即 $f: (a, b, c) \longrightarrow f(a, b, c)$

这里的 $a, b, c$ 是什么字母并不重要，重要的只是它们的顺序

为了避免歧义，我们今后将这里的 $f_x, f_y, f_t$ 记作 $f_1, f_2, f_3$，表示对分量求偏导

所以本题也可以写作 $z_s = f_1 x_s + f_2 y_s$，$z_t = f_1 x_t + f_2 y_t + f_3$

### · 隐函数偏导数

在此部分，我们总是假设隐函数（组）是存在的，且性质足够好，是可导的. （至于在什么条件下此假设成立，那是数学分析和高等微积分要干的事情，我们直接跳过不做过多讨论）

对于单个方程来说：设 $F(x, y) = 0$ 定义了一个函数 $y = y(x)$，如何求 $y'(x)$ ？

> **求导法**：$F(x, y) = 0$，$y = y(x)$ 为二元复合函数
>
> 对 $x$ 求导 $F_x + F_y y'(x) = 0$，故 $y'(x) = -\frac{F_x}{F_y}$
>
> **微分法**：对 $F(x, y) = 0$ 微分 $F_x dx + F_y dy = 0$，故 $\frac{dy}{dx} = -\frac{F_x}{F_y}$

**PS**：默认 $F_y \neq 0$，上述方法可以推广到多元的情况

**Q**：设 $F(x, y, z) = 0$ 定义了一个函数 $z = z(x, y)$，如何求 $\frac{\partial z}{\partial x}$ 和 $\frac{\partial z}{\partial y}$？

> **法一（求导法）**：$F(x, y, z) = 0$，$z = z(x, y)$ 为三元复合函数
>
> 对 $x$ 求偏导 $F_x + F_z \frac{\partial z}{\partial x} = 0$，故 $\frac{\partial z}{\partial x} = -\frac{F_x}{F_z}$，同理对 $y$ 求偏导得 $\frac{\partial z}{\partial y} = -\frac{F_y}{F_z}$
>
> **法二（微分法）**：对 $F(x, y, z) = 0$ 微分 $F_x dx + F_y dy + F_z dz = 0$，移项得
> $$
> dz = -\frac{F_x}{F_z} dx - \frac{F_y}{F_z} dy,\quad \frac{\partial z}{\partial x} = -\frac{F_x}{F_z},\quad \frac{\partial z}{\partial y} = -\frac{F_y}{F_z}
> $$

**PS**：同时算多个偏导数时，用微分法比较简单。

***

考虑方程组
$$
\begin{cases} 
F(x, y, z) = 0 \\ 
G(x, y, z) = 0 
\end{cases}
$$
在定义域内任取 $x$（固定），则方程组退化为关于 $y, z$ 的二元线性方程组

若方程组性质足够好，可以解出唯一解 $y, z$，则我们说其定义了隐函数组

$$
\begin{cases} 
y = y(x) \\ 
z = z(x) 
\end{cases}
$$

进一步，若这两个隐函数可导，如何求 $y'(x)$ 和 $z'(x)$？

**求导法**：将 $y = y(x), z = z(x)$ 带入方程组，即
$$
\begin{cases} 
F(x, y(x), z(x)) = 0 \\ 
G(x, y(x), z(x)) = 0 
\end{cases}
$$
此时左边是关于 $x$ 的复合函数，求导得

$$
\begin{cases} 
F_x + F_y y'(x) + F_z z'(x) = 0 \\ 
G_x + G_y y'(x) + G_z z'(x) = 0 
\end{cases}
$$
写成矩阵的形式就是

$$
\begin{pmatrix} 
F_y & F_z \\ 
G_y & G_z 
\end{pmatrix}
\begin{pmatrix} 
y' \\ 
z' 
\end{pmatrix}
=
\begin{pmatrix} 
-F_x \\ 
-G_x 
\end{pmatrix}
$$

左边第一矩阵称为雅可比矩阵，引入记号 $\frac{\partial (F, G)}{\partial (y, z)} = \begin{vmatrix} F_y & F_z \\ G_y & G_z \end{vmatrix}$ 表示其行列式

若 $\frac{\partial (F, G)}{\partial (y, z)} = \begin{vmatrix} F_y & F_z \\ G_y & G_z \end{vmatrix} \neq 0$，则雅可比矩阵可逆

从而可以解得

$$
\begin{pmatrix} 
y' \\ 
z' 
\end{pmatrix}
=
\begin{pmatrix} 
F_y & F_z \\ 
G_y & G_z 
\end{pmatrix}^{-1}
\begin{pmatrix} 
-F_x \\ 
-G_x 
\end{pmatrix}
$$

**微分法**：对方程组求微分得
$$
\begin{cases} 
F_x dx + F_y dy + F_z dz = 0 \\ 
G_x dx + G_y dy + G_z dz = 0 
\end{cases}
$$
写成矩阵的形式

$$
\begin{pmatrix} 
F_y & F_z \\ 
G_y & G_z 
\end{pmatrix}
\begin{pmatrix} 
dy \\ 
dz 
\end{pmatrix}
=
\begin{pmatrix} 
-F_x \\ 
-G_x 
\end{pmatrix} dx
$$
后续步骤同理

## Fragment 4 方向导数 梯度

前面我们定义了二元函数 $f(x, y)$ 的偏导数 $f_x(x_0, y_0)$ 和 $f_y(x_0, y_0)$

它们分别是沿两个坐标轴方向求导，现在我们来定义任意方向上的导数

> /Define/
>
> 设 $f(x, y)$ 在 $P_0(x_0, y_0)$ 的某邻域内有定义，记单位方向向量 $\vec{l} = (\alpha, \beta)$ 满足 $\alpha^2 + \beta^2 = 1$，若极限 
> $$
> \lim_{t \to 0^+} \frac{f(x_0 + t\alpha, y_0 + t\beta) - f(x_0, y_0)}{t}
> $$
> 存在，则称为 $f$ 在 $P_0$ 沿方向 $l$ 的方向导数，记为 $\frac{\partial f}{\partial l}\bigg|_{P_0}$ 或 $f_l(P_0)$ 

**注意**：若 $\vec{l} = (1, 0)$，则 $f_l(P_0) = \lim_{t \to 0^+} \frac{f(x_0 + t, y_0) - f(x_0, y_0)}{t} = f_x(P_0)$；若 $\vec{l} = (-1, 0)$，则 $f_l(P_0) = -f_x(P_0)$（区分正负）。

方向导数的定义可以推广到 $n$ 元函数

> /Define/
>
> 设 $f(x_1, \ldots, x_n)$ 在 $P_0(x_1^{(0)}, \ldots, x_n^{(0)})$ 的某邻域内有定义，
>
> 记单位方向向量 $\vec{l} = (\cos \alpha_1, \ldots, \cos \alpha_n)$ 满足 $\cos^2 \alpha_1 + \cdots + \cos^2 \alpha_n = 1$，若极限
> $$
> \lim_{t \to 0^+} \frac{f(x_1^{(0)} + t\cos \alpha_1, \ldots, x_n^{(0)} + t\cos \alpha_n) - f(x_1^{(0)}, \ldots, x_n^{(0)})}{t}
> $$
> 存在，则称为 $f$ 在 $P_0$ 沿方向 $\vec{l}$ 的方向导数，记为 $\frac{\partial f}{\partial \vec{l}}\bigg|_{P_0}$ 或 $f_{\vec{l}}(P_0)$，其中 $\alpha_i$ 称为方向角。

下面的定理说明了方向导数与偏导数的关系，我们记二元函数为例

/Theorem/：若 $f$ 在 $P_0$ 点可微，则 $f$ 在 $P_0$ 沿任意方向 $\vec{l} = (\cos \alpha, \cos \beta, \cos \gamma)$（单位向量 $\cos^2 \alpha + \cos^2 \beta + \cos^2 \gamma = 1$）的方向导数均存在，且
$$
\frac{\partial f}{\partial \vec{l}}\bigg|_{P_0} = f_x(P_0) \cos \alpha + f_y(P_0) \cos \beta + f_z(P_0) \cos \gamma
$$

> /proof/
>
> 由可微，$f(x_0 + \Delta x, y_0 + \Delta y, z_0 + \Delta z) - f(x_0, y_0, z_0) = f_x(P_0) \Delta x + f_y(P_0) \Delta y + f_z(P_0) \Delta z + o(\rho)$
>
> 其中 $\rho = \sqrt{\Delta x^2 + \Delta y^2 + \Delta z^2}$
>
> 令 $(\Delta x, \Delta y, \Delta z) = t(\cos \alpha, \cos \beta, \cos \gamma) = t \vec{l}$，则 $\rho = t$
>
> 等式两边除以 $t$ 并取极限 $t \to 0^+$，即可得到结论

紧接着给出梯度定义：

> /Define/
>
> 若 $f(x, y, z)$ 在 $P_0(x_0, y_0, z_0)$ 沿任意方向的方向导数均存在，则称向量 $(f_x(P_0), f_y(P_0), f_z(P_0))$ 为 $f$ 在 $P_0$ 的梯度，记作 $\nabla f(P_0)$ 或 $\nabla f(P_0)$。

**注意**：定理（方向导数与偏导数关系）可以写成 $\frac{\partial f}{\partial \vec{l}} = \nabla f(P_0) \cdot \vec{l} = |\nabla f(P_0)| |\vec{l}| \cos \theta$ ，从而 $-|\nabla f(P_0)| \leq \frac{\partial f}{\partial \vec{l}} \leq |\nabla f(P_0)|$

当 $\vec{l}$ 与 $\nabla f(P_0)$ 的方向一致时，方向导数 $\frac{\partial f}{\partial \vec{l}}$ 可以取到上界，方向相反时可以取到下界

**Q.**：若 $f$ 在 $P_0$ 沿任意方向的方向导数都存在，能否推出 $f$ 在 $P_0$ 连续？

**反例**：$f(x, y) = \begin{cases} 
0 & |y| = x^2, (x, y) \neq (0, 0) \\
1 & \text{else}
\end{cases}$ 在 $(0, 0)$ 显然不连续，而 $f$ 在 $(0, 0)$ 沿任意方向的方向导数都存在且为零

## Fragment 5 几何应用

### · 曲线的切线和法平面

**(1). 平面曲线**

**Q.**：平面曲线 $F(x, y) = 0$，求 $(x_0, y_0)$ 处的切线

> 直接微分 $F_x(x_0, y_0) dx + F_y(x_0, y_0) dy = 0$
>
> 1. 若 $F_y(x_0, y_0) \neq 0$，则 $y'(x_0) = -\frac{F_x(P_0)}{F_y(P_0)}$
>
> ​	故切线为 $y - y_0 = -\frac{F_x(P_0)}{F_y(P_0)}(x - x_0)$
>
> 2. 若 $F_x(x_0, y_0) \neq 0$，则 $x'(y_0) = -\frac{F_y(P_0)}{F_x(P_0)}$
>
> ​	故切线为 $x - x_0 = -\frac{F_y(P_0)}{F_x(P_0)}(y - y_0)$

将上面两种情况结合，切线方程为 $F_x(P_0)(x - x_0) + F_y(P_0)(y - y_0) = 0$

**注意**：微分 $F_x(x_0, y_0) dx + F_y(x_0, y_0) dy = 0$ 的本质是在局部用线性函数逼近原函数。因此去掉高阶项，即将 $dx$ 换为 $x - x_0$ 后，微分式就成为了切线方程。

**(2). 空间曲线**

**Q**：当空间曲线由参数方程 $L: x = x(t), y = y(t), z = z(t), \alpha \leq t \leq \beta$ 给出，求 $P_0(x(t_0), y(t_0), z(t_0))$ 处切线和法平面

> 在曲线上取一点 $Q(x(t), y(t), z(t))$
>
> 则割线 $P_0Q$ 的方向为 $\vec{P_0Q} = \left( \frac{x(t) - x(t_0)}{t - t_0}, \frac{y(t) - y(t_0)}{t - t_0}, \frac{z(t) - z(t_0)}{t - t_0} \right)$
>
> 取极限 $t \to t_0$，则割线 $P_0Q$ 的方向趋向于 $(x'(t_0), y'(t_0), z'(t_0))$，即切线方向
>
> 从而切线方程为 $\frac{x - x_0}{x'(t_0)} = \frac{y - y_0}{y'(t_0)} = \frac{z - z_0}{z'(t_0)}$
>
> **法平面**：由 $x'(t_0)(x - x_0) + y'(t_0)(y - y_0) + z'(t_0)(z - z_0) = 0$

**注意**：微分 $dx = x'(t_0) dt$，去掉高阶项 $\begin{cases} x - x_0 = x'(t_0)(t - t_0) \\ y - y_0 = y'(t_0)(t - t_0) \\ z - z_0 = z'(t_0)(t - t_0) \end{cases}$ 即为切线

**Q.**：当空间曲线由方程 $L: \begin{cases} F(x, y, z) = 0 \\ G(x, y, z) = 0 \end{cases}$ 给出，求 $P_0(x_0, y_0, z_0)$ 处切线

> 微分 $\begin{cases} F_x dx + F_y dy + F_z dz = 0 \\ G_x dx + G_y dy + G_z dz = 0 \end{cases}$，去掉高阶项
> $$
> \begin{cases} F_x(P_0)(x - x_0) + F_y(P_0)(y - y_0) + F_z(P_0)(z - z_0) = 0 \\ G_x(P_0)(x - x_0) + G_y(P_0)(y - y_0) + G_z(P_0)(z - z_0) = 0 \end{cases}
> $$
> 即为切线方程

### · 曲面的切平面与法线

**问**：空间曲面 $\pi: F(x, y, z) = 0$，求 $P_0(x_0, y_0, z_0)$ 处切平面与法线

> 微分 $F_x dx + F_y dy + F_z dz = 0$，去掉高阶项
>
> $F_x(P_0)(x - x_0) + F_y(P_0)(y - y_0) + F_z(P_0)(z - z_0) = 0$ 即为切平面方程
>
> 切平面的法向量为 $\vec{r} = (F_x(P_0), F_y(P_0), F_z(P_0))$

**定理**：设空间曲面 $\pi: F(x, y, z) = 0$ 中任意一条过 $P_0(x_0, y_0, z_0)$ 的曲线为

$L: x = x(t), y = y(t), z = z(t)$，则 $L$ 在 $P_0$ 的切线包含于 $\pi$ 在 $P_0$ 的切平面中。

> /proof/
>
> 设 $t = t_0$ 对应 $P_0(x_0, y_0, z_0)$，由于 $L$ 包含于 $\pi$ 中，$F(x(t), y(t), z(t)) = 0$
>
> 求导得 $F_x(P_0) \cdot x'(t_0) + F_y(P_0) \cdot y'(t_0) + F_z(P_0) \cdot z'(t_0) = 0$
>
> 记 $\vec{r} = (F_x(P_0), F_y(P_0), F_z(P_0))$ 为 $\pi$ 在 $P_0$ 的切平面法向量
>
> $\vec{l} = (x'(t_0), y'(t_0), z'(t_0))$ 为 $L$ 在 $P_0$ 的切线方向向量
>
> 有 $\vec{l} \cdot \vec{r} = 0$，即 $L$ 在 $P_0$ 的切线与 $\pi$ 在 $P_0$ 的切平面法向量垂直，从而定理成立

## Fragment 6 极值

先讲讲水管（我一个朋友）的故事

> 教授：“一元函数驻点的定义是什么”
>
> 水管：“导数等于零”
>
> 教授：“那二元函数和一元函数的区别是什么（鼓励的语气）”
>
> 水管：“有两个未知数”
>
> （最后水管劳斯想出了答案是偏导数存在且都等于 $0$ ，对面明显松了口气）

当然也说句实在话，让文科生学工科数学分析本身就是个很离谱的事情。

### · 泰勒公式

"多元 Taylor 公式本质上没有给出新的内容，就是将多元的函数限制在一个直线上，然后给出一元的 Taylor 公式"

这部分的特点是复杂，但是没有什么新的东西

> /Theorem/
>
> 设  $D$  是  $\mathbb{R}^n$  的开集， $\vec{x}, \vec{y} \in D$ ，且线段  $\vec{x}\vec{y} \subseteq D$ ，则对于  $f \in C^m(D)$  有：
> $$
> \begin{align*}
> f(\vec{y}) &= f(\vec{x}) + \frac{1}{1!} \sum_{i=1}^{m} \partial_i f(\vec{x})(y_i - x_i) + \cdots\\
> &+ \frac{1}{(m-1)!} \sum_{i_1} \cdots \sum_{i_{m-1}} \partial_{i_{m-1}} \cdots \partial_{i_1} f(\vec{x})(y_{i_1} - x_{i_1}) \cdots (y_{i_{m-1}} - x_{i_{m-1}})\\
> &+ \frac{1}{m!} \sum_{i_1} \cdots \sum_{i_m} \partial_{i_m} \cdots \partial_{i_1} f(\vec{x} + \theta(\vec{y} - \vec{x}))(y_{i_1} - x_{i_1}) \cdots (y_{i_m} - x_{i_m})
> \end{align*}
> $$

实际使用中，我们用到的版本可能是 $m=1$ 时的公式，也就是多元微分中值定理

(感觉我们应该考不到这么离谱的地步吧)

### · 无条件极值

以二元函数为例，若 $P_0(x_0, y_0)$ 为 $f(x, y)$ 的极值点

则 $x_0$ 是一元函数 $f(x, y_0)$ 的极值点，$y_0$ 是一元函数 $f(x_0, y)$ 的极值点，从而有定理

> **定理1（极值必要条件）**：若 $f$ 在 $P_0$ 处存在对各变元的偏导数，且 $P_0$ 是极值点，则 $f$ 在 $P_0$ 处对各变元的偏导数均为零，这样的点称为稳定点。

**注意**：不是充分条件，例如 $z = \sqrt{x^2 + y^2}$ 在 $(0, 0)$ 取极小值，但偏导不存在。

**Q.**：设 $y = f(x, y)$，$P_0(x_0, y_0)$ 是稳定点，怎么判断 $P_0(x_0, y_0)$ 是否是极值点？

考虑 $f$ 的二阶泰勒公式（稳定点，线性项为零）


$$
f(x, y) = f(x_0, y_0) + \frac{1}{2} (\Delta x, \Delta y) H_f(x_0, y_0) \begin{pmatrix} \Delta x \\ \Delta y \end{pmatrix} + o(\rho^2)
$$

直观上，若黑塞矩阵 $H_f = \begin{bmatrix} f_{xx} & f_{xy} \\ f_{xy} & f_{yy} \end{bmatrix}$ 在 $(x_0, y_0)$ 处正定时

则 $f$ 在 $(x_0, y_0)$ 局部有 $\frac{1}{2} (\Delta x, \Delta y) H_f(x_0, y_0) \begin{bmatrix} \Delta x \\ \Delta y \end{bmatrix} + o(\rho^2) \geq 0$

从而 $f(x, y) \geq f(x_0, y_0)$，$P_0(x_0, y_0)$ 为极小值点

> **定理2**：设 $f(x_1, \ldots, x_n)$ 在 $P_0(x_1^{(0)}, \ldots, x_n^{(0)})$ 的某邻域 $U(P_0)$ 上具有二阶连续偏导数，且 $P_0$ 是稳定点，则
>
> 1. 若 $H_f(P_0)$ 正定，则 $P_0$ 是极小值点；
> 2. 若 $H_f(P_0)$ 负定，则 $P_0$ 是极大值点；
> 3. 若 $H_f(P_0)$ 不定，则 $P_0$ 不是极值点；
> 4. 若 $H_f(P_0)$ 半正定或半负定，则不能确定 $P_0$ 是否为极值点。

鉴于线代还没讲到正定矩阵，先主要讨论二元函数的情况

> 当 $n = 2$ 时，即 $f(x, y)$ 为二元函数时，有如下判别法：
> $$
> A=f_{xx}(P_0)\quad \quad B=f_{xy}(P_0)\quad \quad C=f_{yy}(P_0)
> $$
>
> 1. 若 $A > 0$ 且 $(AC - B^2)(P_0) > 0$，则 $P_0$ 是极小值点；
> 2. 若 $A < 0$ 且 $(AC - B^2)(P_0) > 0$，则 $P_0$ 是极大值点；
> 3. 若 $(AC - B^2)(P_0) < 0$，则 $P_0$ 不是极值点；
> 4. 若 $(AC - B^2)(P_0) = 0$，则不能确定 $P_0$ 是否为极值点。

### · 最值

由有界闭集上连续函数的性质，若 $f$ 在有界闭区域 $D$ 上连续，则 $f$ 在 $D$ 取到最值

若最值点是 $D$ 的内点则必是极值点，因此 $f$ 的可能最值点是 $f$ 的极值点和 $D$ 的边界点

**步骤一**：研究边界 $\partial D$ 上 $f$ 的取值，求出 $M_{\partial D}$ 和 $m_{\partial D}$

**步骤二**：求出所有稳定点和不可导点（通常有限个）$P_1, \ldots, P_n$

**步骤三**：$M = \max\{M_{\partial D}, f(P_1), \ldots, f(P_n)\}$

若 $D$ 为无界区域，用有界闭区域逼近无界区域

**命题**：若 $f(x, y)$ 在 $\mathbb{R}^2$ 连续，且 $\lim_{\rho \to +\infty} f(x, y) = +\infty$，$R = \sqrt{x^2 + y^2}$，则 $f(x, y)$ 必有最小值。

> 取 $M = f(0, 0)$，则 $\exists R_0 > 0$，使得 $\forall R \geq R_0$
>
> 有 $f(x, y) \geq f(0, 0)$，$x^2 + y^2 > R^2$，特别地，在 $x^2 + y^2 > R_0^2$ 成立
>
> 又 $f$ 在有界闭区域 $D_{R_0} = \{x^2 + y^2 \leq R_0\}$ 上连续，故必有最小值 $m$
>
> 而 $(0, 0) \in D_{R_0}$，因此 $m \leq f(0, 0)$，从而 $m$ 是 $f$ 在 $\mathbb{R}^2$ 上的最小值

下面我们列举一些二元函数与一元函数不同的性质

> **问题1**：是否存在二元连续函数 $f(x, y)$ 有无穷个极小值点，但无极大值点
>
> **E.G.**：考虑 $f(x, y) = x^2$，则 $(0, y)$ 都是极小值点
>
> **问题2**：若二元连续函数 $f(x, y)$ 有唯一的极小值点，是否一定是最小值点？
>
> **反例**：$f(x, y) = x^2 + y^2(1 + x)^2$ 在全平面连续
>
> 稳定点 $f_x = 2x + 3y^2(1 + x)^2 = 0, f_y = 2y(1 + x)^3 = 0$，则 $(x, y) = (0, 0)$
>
> 用黑塞矩阵容易判别 $(0, 0)$ 为极小值点，然而
>
>
> $$
> \lim_{y \to \infty} f(-2, y) = \lim_{y \to \infty} 4 - y^2 = -\infty
> $$
>
> 从而 $(0, 0)$ 不是最小值点
>
> **问题3**：任给方向 $\vec{l} = (\alpha, \beta)$，$f(\alpha, \beta)$ 作为 $f$ 的一元函数有极小值点 $\alpha = 0$，是否 $(0, 0)$ 为 $f(x, y)$ 的极小值点？
>
> **反例**：$f(x, y) = (y - x^2)(y - 2x^2)$

### · 条件极值

前面我们考虑了函数 $f$ 在某区域 $D$ 上的极值问题

但实际问题中，函数 $f$ 的自变量往往受到其他条件的约束，称为条件极值问题

满足约束条件的极值点称为条件极值点

条件极值问题的一般形式为，求目标函数 $f = (x_1, x_2 \ldots, x_n)$

在约束条件 $g_i(x_1, x_2 \ldots, x_n) = 0, i = 1, 2, \ldots, m (m < n)$ 下的条件极值

当 $m = 3$，$n = 2$ 时，目标函数 $f(x, y, z)$，约束条件

$$
\begin{cases} 
g_1(x, y, z) = 0 \\ 
g_2(x, y, z) = 0 
\end{cases}
$$

设 $(x_0, y_0, z_0)$ 是条件极值点，则首先要满足约束条件，即

$$
\begin{cases} 
g_1(x_0, y_0, z_0) = 0 \\ 
g_2(x_0, y_0, z_0) = 0 
\end{cases}
$$
这时候我们可以用 Language 乘数法（证明过程交给正在学习数学分析或高等微积分的同学）

上面的讨论说明：若 $(x_0, y_0, z_0)$ 是条件极值点，且满足一定条件

则存在唯一的 $\lambda_1, \lambda_2$ 使得方程组


$$
\begin{cases} 
f_x(x_0, y_0, z_0) + \lambda_1 g_{1x}(x_0, y_0, z_0) + \lambda_2 g_{2x}(x_0, y_0, z_0) = 0 \\ 
f_y(x_0, y_0, z_0) + \lambda_1 g_{1y}(x_0, y_0, z_0) + \lambda_2 g_{2y}(x_0, y_0, z_0) = 0 \\ 
f_z(x_0, y_0, z_0) + \lambda_1 g_{1z}(x_0, y_0, z_0) + \lambda_2 g_{2z}(x_0, y_0, z_0) = 0 \\
g_1(x_0, y_0, z_0) = 0 \\ 
g_2(x_0, y_0, z_0) = 0 
\end{cases}
$$

引入 Lagrange 函数 $L(x, y, z) = f(x, y, z) + \lambda_1 g_1(x, y, z) + \lambda_2 g_2(x, y, z)$

容易验证，方程组转化为


$$
\begin{cases} 
L_x = L_y = L_z = 0 \\ 
g_1(x_0, y_0, z_0) = 0 \\ 
g_2(x_0, y_0, z_0) = 0 
\end{cases}
$$

以上讨论可以推广到任意的 $m < n$ 的情形

## Total 总结

偏导数连续 $\Rightarrow$ 可微分 $\Rightarrow$ 偏导数存在+函数连续

由于多元函数方向导数不同书目定义不同，这里暂不讨论