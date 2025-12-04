---
title: Chapter 2 解析函数积分
permalink: /complex/complex-2/
createTime: 2025/09/29 13:02:58
---

## Part 1 复变函数积分

### · 定义

复变函数的积分是复平面上的线积分，简称复积分。具体地说，复变函数  $f(z)$  沿着始终点分别为  $A, B$  的曲线  $l$  的积分记为
$$
\int_{A(l)}^{B} f(z) dz,
$$
其定义类似于实变函数积分定义类似。在  $l$  上按照  $A \rightarrow B$  的方向取点  $A_1, A_2, \ldots, A_{n-1}$ ，并记  $B = A_n$ 。设  $A, A_1, A_2, \ldots, A_n$  对应复数  $z_0, z_1, \ldots, z_n$ 。再取
$$
\xi_k \in \overline{A_{k-1} A_k}, k = 1, 2, \ldots, n
$$
（下图只画出了其中一个），计算和式

$$
\sum_{k=1}^{n} f(\xi_k) \Delta z_k,
$$
其中， $\Delta z_k = z_k - z_{k-1}$ 。若极限

$$
\lim_{n \rightarrow \infty} \sum_{k=1}^{n} f(\xi_k) \Delta z_k
$$

$$
\lim_{\substack{n \to \infty \\ \max |\Delta z_k| \to 0}} \sum_{k=1}^n f(\xi_k) \Delta z_k
$$

存在且唯一，则称
$$
\int_{A(l)}^{B} f(z) dz
$$
为  $f(z)$  沿路径  $l$  从  $A$  到  $B$  点的复积分

![](https://pic1.imgdb.cn/item/692a5e93b4e23f08080b81d8.png)

因为  $f(z) = u + i v$ ， $dz = dx + i dy$ ，则有

$$
\int_l f(z) dz = \int_l (u + i v)(dx + i dy) = \int_l (u dx - v dy) + i \int_l (u dy + v dx).
$$

### · 基本性质

(1). 线性性：

$$
\int_l (c_1 f_1(z) + c_2 f_2(z)) dz = c_1 \int_l f_1(z) dz + c_2 \int_l f_2(z) dz.
$$
(2). 改变积分方向，产生一个负号：

$$
\int_{A(l)}^{B} f(z) dz = - \int_{B(l)}^{A} f(z) dz.
$$
(3). 三角不等式  $|a + b| \leq |a| + |b|$  的复积分版本：

$$
\left| \int_l f(z) dz \right| \leq \int_l |f(z)| | dz|.
$$
其中  $|dz| = ds$ ，是曲线  $l$  的弧元。

## Part 2 柯西定理

![](https://pic1.imgdb.cn/item/692a5e93b4e23f08080b81d9.png)

考察复积分  $\int_l \operatorname{Re} z dz$ 。因为  $\operatorname{Re} z$  不满足  $C - R$  条件，所以不是解析函数。分别求复平面上  $\operatorname{Re} z$  沿路径  $O \rightarrow A$  及  $O \rightarrow B \rightarrow A$  从  $O$  到  $A$  点的复积分，如图所示：

记  $O \rightarrow A$  为路径  $l_1$ ， $O \rightarrow B \rightarrow A$  为路径  $l_2$ 。则（注意路径  $l_1$  满足  $x = 2y, y: 0 \rightarrow 1$ ）

$$
\int_{l_1} \operatorname{Re} z dz = \int_{OA} x (dx + i dy) = \int_0^1 2y(2 + i) dy = 2 + i
$$
对于  $l_2$ ，有（分段积分，注意  $OB$  段上  $dy = 0$ ， $BA$  段上  $dx = 0$ ）

$$
\int_{l_2} \operatorname{Re} z dz = \int_{OB} x (dx + i dy) + \int_{BA} x (dx + i dy) = \int_0^2 x dx + i \int_0^1 2 dy = 2 + 2i.
$$
以上说明，一般情况下，复变函数的积分和路径有关。

### · 单连通区域

设  $f(z)$  在单连通区域  $\sigma$  中解析，若  $l$  为  $\sigma$  内一条任意分段光滑的封闭曲线，则

$$
\oint_l f(z) dz = 0.
$$

> 证明
>
> 设  $f(z) = u + i v$ ，我们只证一阶偏导数  $u_x, u_y, v_x, v_y$  连续（即  $f'(z)$  连续）时的情况。当然，一阶偏导连续的条件去掉也能证明（古沙证明法），但是过程较为繁琐，此处省略。则由式 
> $$
> \int_l f(z) dz = \int_l (u + i v)(dx + i dy) = \int_l (u dx - v dy) + i \int_l (u dy + v dx).
> $$
> 有
> $$
> \oint_l f(z) dz = \oint_l (u dx - v dy) + i \oint_l (u dy + v dx),
> $$
> 积分方向为曲线正向。
>
> 因为  $u, v$  有连续的一阶偏导数，且  $u, v$  满足  $C - R$  条件
>
> $$
> \frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}, \quad \frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x},
> $$
> 则根据格林公式
>
> $$
> \oint_l (P dx + Q dy) = \iint_{\sigma} (\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}) dx dy,
> $$
> 在式
> $$
> dv(x, y) = \frac{\partial v}{\partial x} dx + \frac{\partial v}{\partial y} dy = -\frac{\partial u}{\partial y} dx + \frac{\partial u}{\partial x} dy,
> $$
> 中运用，再由  $C - R$  条件，有
> $$
> \oint_l f(z) dz = \iint_{\sigma} (\frac{\partial v}{\partial x} - \frac{\partial u}{\partial y}) dx dy + \iint_{\sigma} (\frac{\partial u}{\partial x} - \frac{\partial v}{\partial y}) dx dy = 0.
> $$
>
> $$ 

**推论1**:

>  解析函数在其解析区域内的线积分与路径无关。即对于区域  $\sigma$  上解析的函数  $f(z)$ ，有
> $$
> \int_{A(l_1)}^B f(z) dz = \int_{A(l_2)}^B f(z) dz.
> $$

**推广**：

> 若  $f(z)$  在单连通区域  $\sigma$  上解析，在  $\sigma = \sigma + l$  上连续，则对边界  $l$ ，也有
> $$
> \oint_l f(z) dz = 0.
> $$
> 原函数和不定积分：在  $f(z)$  的单连通解析区域  $\sigma$  内，积分函数（变上限积分） $\int_{z_0(l)}^z f(z) dz$  与路径无关，但随着  $z$  的变化而变化（即  $\int_{z_0(l)}^z f(z) d$  是关于  $z$  的单值函数），记为
>
> $$
> F(z) = \int_{z_0(l)}^z f(z) dz.
> $$
> 可通过  $\varepsilon - \delta$  语言证明  $F(z)$  在  $\sigma$  内解析，且
>
> $$
> F'(z) = f(z).
> $$

> [!important]
>
> 注意以下两点：
>
> (1). 证明这一结论时，只需用到两个条件：
>
> > i.  $f(z)$  在单连通区域  $\sigma$  上连续；
> >
> > ii.  $\int f(z) dz$  沿区域  $\sigma$  内任意围线的积分为 0。
>
> 只要满足这两个条件， $F'(z) = f(z)$  总成立。这一点后面证明 Morera 定理（摩勒纳定理）时会用到。
>
> (2). 课中说“ $F'(z)$  在  $\sigma$  上连续可导”，这一论断实际上等价于“ $F(z)$  在  $\sigma$  内解析”。
>
> 在上述区域  $\sigma$  内，如果函数  $\Phi(z)$  满足  $\Phi'(z) = f(z)$ ，则称  $\Phi(z)$  为  $f(z)$  的一个原函数。所有原函数的集合称为  $f(z)$  的不定积分。记为
>
> $$
> \int_{z_0}^z f(z) + C,
> $$
>
> $C$ 为任意复数
>
> 显然，上述的  $F(z)$  是  $f(z)$  的一个原函数。

### · 复联通区域

设  $f(z)$  在单连通区域  $\sigma$  中解析，若  $l$  为  $\sigma$  内一条任意分段光滑的封闭曲线，则

$$
\oint_l f(z) dz = 0.
$$
设  $L = l + \sum_{k=1}^{n} l_k$  为复连通区域  $\sigma$  的全部边界曲线，其中 $l_k (k = 1, 2, \ldots, n)$ 为内边界。若  $f(z)$  在  $\sigma$  内解析，在  $\bar{\sigma} = \sigma + L$  上连续，则有

$$
\oint_l f(z) dz = \sum_{k=1}^{n} \oint_{l_k} f(z) dz,
$$
其中，积分方向全为同一方向（可统一为逆时针，如下图所示）。

![](https://pic1.imgdb.cn/item/692a9dd5aae9ff4455b156f0.png)

一般来说，复连通区域是用若干个内边界  $l_k$  去挖掉大边界  $l$  内函数  $f(z)$  的有限个孤立奇点后形成的，每个内边界包围一个奇点。注意外边界和内边界之间的部分才是我们考察的区域。挖去后，复连通区域内无奇点或者剩下我们所需研究的奇点。

> 证明：
>
> 先考虑只有一个内边界的情况。按下图所示在内边界和外边界上各选取一点，记为  $C$  和  $B$ 。连接  $CB$  形成割线。
>
> ![](https://pic1.imgdb.cn/item/692a9dd5aae9ff4455b156ef.png)
>
> 重新定义区域边界。我们从  $A$  点出发，按照箭头所示方向，依次经过  $B, C$ ，再顺时针绕一圈回到  $C$ 。然后沿着割线  $CB$  回到  $B$ 。最后沿着箭头方向回到  $A$ ，得到如下路径：
>
> $$
> A \xrightarrow{\text{Counterclockwise}} B \xrightarrow{\text{Secant}} C \xrightarrow{\text{Clockwise}} C \xrightarrow{\text{Secant}} B \xrightarrow{\text{Clockwise}} A
> $$
> 将该路径作为灰色区域新边界，方才沿路径行走方向作为其正方向。此时灰色区域成为单连通区域。因为对割线段  $BC$ ，有
>
> $$
> \int_{B}^{C} f(z) dz + \int_{C}^{B} f(z) dz = 0,
> $$
> 又由于在新边界下是单连通区域，有（若无特别说明，均默认沿着曲线段  $\overline{XY}$  的积分方向沿逆时针，$\oint_X$ 的积分方向沿逆时针）
>
> $$
> \int_{A(0)}^{B} f(z) dz + \int_{B}^{C} f(z) dz - \oint_{l_1} f(z) dz + \int_{C}^{B} f(z) dz + \int_{B(0)}^{A} f(z) dz = 0.
> $$
> 上式  $\oint_{l_1} f(z) dz$  前面记得加负号，因为沿顺时针积分。并注意
>
> $$
> \int_{A(0)}^{B} f(z) dz + \int_{B(0)}^{A} f(z) dz = \oint_l f(z) dz,
> $$
> 方程整理得
>
> $$
> \oint_l f(z) dz = \sum_{k=1}^{n} \oint_{l_k} f(z) dz.
> $$
> 以上为一条内边界的情况。对于  $n$  条内边界，做法类似。只需要作  $n$  条割线（记为  $B_k C_k$ ，然后定义新边界，将灰色的复连通区域改造为单连通区域：
>
> $$
> A \rightarrow B_1 \rightarrow C_1 \rightarrow C_1 \rightarrow B_1 \rightarrow B_2 \rightarrow \ldots \rightarrow B_k \rightarrow C_k \rightarrow C_k \rightarrow B_k \rightarrow B_{k+1} \rightarrow \ldots \rightarrow B_n \rightarrow A.
> $$
> 其中在外边界上均为逆时针（ $B_k \rightarrow B_{k+1}$ ），在内边界上顺时针转一圈（ $C_k \rightarrow C_k$ ），如图所示：
>
> ![](https://pic1.imgdb.cn/item/692a9dd5aae9ff4455b156ee.png)
>
> 然后沿着该新边界积分，并注意是改造后的区域是单连通区域，因而有
>
> $$
> \oint_l f(z) dz + \sum_{k=1}^{n} \oint_{B_k}^{C_k} f(z) dz - \sum_{k=1}^{n} \oint_{l_k} f(z) dz + \sum_{k=1}^{n} \oint_{C_k}^{B_k} f(z) dz = 0.
> $$
> 利用
>
> $$
> \oint_{B_k}^{C_k} f(z) dz + \oint_{C_k}^{B_k} f(z) dz = 0,
> $$
> 整理得
>
> $$
> \oint_l f(z) dz = \sum_{k=1}^{n} \oint_{l_k} f(z) dz.
> $$
> 此即为复连通区域的柯西定理。

### · 例题

/example/  计算围道积分  $\oint_l \frac{1}{(z - a)^n} dz$ ， $n \in \mathbb{Z}$ ， $l$  为包围  $a$  点的任意围道。

> 当  $n$  为负整数或 0 时，
> $$
> \frac{1}{(z - a)^n} = (z - a)^{-n}
> $$
> 在围道  $l$  内处处解析，在  $\bar{\sigma} = \sigma + l$  上连续，故：
> $$
> \oint_l f(z) dz = 0.
> $$
> 当  $n$  为正整数时， $z = a$  是被积函数的奇点。以  $z = a$  为圆心，作一个在围道  $l$  内部半径足够小（设为  $\varepsilon$ 的)圆轨道  $l_\varepsilon$ ，将奇点  $a$  从  $l$  内挖掉，形成  $f(z) = \frac{1}{(z - a)^n}$  的一个解析的复连通区域，边界为  $L = l + l_\varepsilon$ ，如下图所示：
>
> ![](https://pic1.imgdb.cn/item/692a9e7227638c120a3c5bad.png)
>
> 运用复连通区域的柯西定理，有
>
> $$
> \oint_l \frac{dz}{(z - a)^n} = \oint_{l_\varepsilon} \frac{dz}{(z - a)^n}.
> $$
> 设  $z - a = \varepsilon e^{i\theta}$ ， $0 \leq \theta < 2\pi$ 。则有
> $$
> dz = i \varepsilon e^{i\theta} d\theta
> $$
> 当  $n = 1$  时，
>
> $$
> \oint_{l_\varepsilon} \frac{dz}{z - a} = \int_0^{2\pi} i \varepsilon e^{i\theta} d\theta = i \int_0^{2\pi} d\theta = 2\pi i.
> $$
> 当  $n \neq 1$ ，但  $n \in \mathbb{N}$  时，有
> $$
> \frac{dz}{(z - a)^n} = \frac{i \varepsilon e^{i\theta} d\theta}{\varepsilon^n e^{i n\theta}} = \frac{i}{\varepsilon^{n - 1}} e^{i(1 - n)\theta} d\theta
> $$
> 因而
>
> $$
> \oint_{l_\varepsilon} \frac{dz}{(z - a)^n} = \frac{i}{\varepsilon^{n - 1}} \int_0^{2\pi} e^{i(1 - n)\theta} d\theta = \frac{1}{\varepsilon^{n - 1}(1 - n)} e^{i(1 - n)\theta} \bigg|_0^{2\pi} = 0.
> $$
> 综上所述，
>
> $$
> \oint_l \frac{1}{(z - a)^n} dz = \left\{ \begin{array}{l} 2\pi i, \quad n = 1, \\ 0, \quad n \neq 1, n \in \mathbb{Z}. \end{array} \right.
> $$
> 这是后面推导留数定理的最基本公式。

/example/  试计算围道积分
$$
\oint_l \frac{1}{z^2 - 1} dz
$$
其中  $l$  为以原点  $O$  为圆心，半径为  $a (a > 2)$  的圆轨道，即  $l: |z| = a > 2$ 。

> /proof/ 
>
> $z = 1$  和  $z = - 1$  是
> $$
> f(z) = \frac{1}{z^2 - 1}
> $$
> 的奇点，且均在  $l$  内部。设圆轨道  $l_1, l_2$  分别以  $-1, 1$  为圆心，半径足够小，如下图所示。
>
> ![](https://pic1.imgdb.cn/item/692a9e7227638c120a3c5bae.png)
>
> 那么， $f(z) = \frac{1}{z^2 - 1}$  在  $L = l + l_1 + l_2$  所包围的复连通区域  $\sigma$  内处处解析，在  $\bar{\sigma} = \sigma + L$  处处连续，因此由复连通区域的柯西定理，有
>
> $$
> \oint_l f(z) dz = \oint_{l_1} f(z) dz + \oint_{l_2} f(z) dz.
> $$
> 注意到，
> $$
> \frac{1}{z^2 - 1} = \frac{1}{2} \left( \frac{1}{z - 1} - \frac{1}{z + 1} \right)
> $$
> 那么
>
> $$
> \oint_{l_1} f(z) dz = \frac{1}{2} \oint_{l_1} \frac{1}{z - 1} dz - \frac{1}{2} \oint_{l_1} \frac{1}{z + 1} dz,
> $$
>
> $$
> \oint_{l_2} f(z) dz = \frac{1}{2} \oint_{l_2} \frac{1}{z - 1} dz - \frac{1}{2} \oint_{l_2} \frac{1}{z + 1} dz.
> $$
>
> 由于 1 不是  $l_1$  内的奇点，由单连通区域的柯西定理，知
> $$
> \frac{1}{2} \oint_{l_1} \frac{1}{z - 1} dz = 0
> $$
> 同理
> $$
> \frac{1}{2} \oint_{l_2} \frac{1}{z + 1} dz = 0
> $$
> 故由上一例题的结论可知，
>
> $$
> \oint_{l_1} f(z) dz = -\frac{1}{2} \oint_{l_1} \frac{1}{z + 1} dz = -\frac{1}{2} (2\pi i) = -\pi i.
> $$
>
> $$
> \oint_{l_2} f(z) dz = \frac{1}{2} \oint_{l_2} \frac{1}{z - 1} dz = \frac{1}{2} (2\pi i) = \pi i.
> $$
>
> 所以
>
> $$
> \oint_l f(z) dz = \oint_{l_1} f(z) dz + \oint_{l_2} f(z) dz = 0.
> $$

## Part 3 柯西积分公式

### · 单连通区域

设  $f(z)$  在区域  $\sigma$  内解析，在闭区域  $\bar{\sigma} = \sigma + l$  上连续， $a$  为  $\sigma$  内任意一点，则

$$
f(a) = \frac{1}{2\pi i} \oint_l \frac{f(z)}{z-a} dz.
$$
该公式称为 Cauchy 积分公式（柯西积分公式）。该公式说明，解析函数内部一点的值与其边界上每一点的值存在联系：可用边界上每一点的值计算边界内部任意一点的函数值；边界上每一点函数值共同决定其内部任意一点的函数值。

> /proof/
>
> 取包围  $a$  的足够小的圆形区域， $a$  为圆心， $\varepsilon$  为半径，使其被含于  $l$  围道之内，构成  $\frac{f(z)}{z-a}$  的复连通解析区域，如下图所示。
>
> ![](https://pic1.imgdb.cn/item/692bb215aae9ff4455b3c8e5.png)
>
> 运用复连通区域的柯西定理，有
>
> $$
> \oint_l \frac{f(z)}{z-a} dz = \oint_{l_\varepsilon} \frac{f(z)}{z-a} dz = \oint_{l_\varepsilon} \frac{f(z) - f(a)}{z-a} dz + \oint_{l_\varepsilon} \frac{f(a)}{z-a} dz, 
> $$
> 其中，
>
> $$
> \oint_{l_\varepsilon} \frac{f(a)}{z-a} dz = f(a) \oint_{l_\varepsilon} \frac{1}{z-a} dz = 2\pi i f(a),
> $$
> 因而只需证明
>
> $$
> \oint_{l_\varepsilon} \frac{f(z) - f(a)}{z-a} dz = 0.
> $$
> 由  $f(z)$  的连续性，可知  $\forall \xi > 0$ ， $\exists \delta > 0$ ，当  $|z-a| < \delta$  时，总有  $|f(z) - f(a)| < \xi$ 。因而当  $\varepsilon < \delta$  时， $l_\varepsilon$  上的点满足  $|z-a| = \varepsilon < \delta$ ，则
>
> $$
> \left| \oint_{l_\varepsilon} \frac{f(z) - f(a)}{z-a} dz \right| \leqslant \oint_{l_\varepsilon} \left| \frac{f(z) - f(a)}{z-a} \right| |dz| < \oint_{l_\varepsilon} \frac{\xi}{\varepsilon} ds = \frac{\xi}{\varepsilon} \oint_{l_\varepsilon} ds = \frac{\xi}{\varepsilon} \cdot 2\pi \varepsilon = 2\pi \xi.
> $$
> 由于总可以在  $l_\varepsilon$  内部找到更小的圆轨道  $l_{\varepsilon'}$ ，又由复连通区域的柯西定理，有
>
> $$
> \oint_{l_\varepsilon} \frac{f(z) - f(a)}{z-a} dz = \oint_{l_{\varepsilon'}} \frac{f(z) - f(a)}{z-a} dz,
> $$
> 可知
> $$
> \oint_{l_\varepsilon} \frac{f(z) - f(a)}{z-a} dz
> $$
> 的值与  $\varepsilon$  无关（前提是所考虑的圆轨道都在  $\sigma$  内部），只要  $f(z)$  和  $a$  固定下来，它就是常数。
>
> 只要选取的半径  $\varepsilon$  足够小，
> $$
> \left| \oint_{l_\varepsilon} \frac{f(z) - f(a)}{z-a} dz \right|
> $$
> 可以小于任意正数（注意  $2\pi \xi$  的任意性）。这说明
> $$
> \oint_{l_\varepsilon} \frac{f(z) - f(a)}{z-a} dz
> $$
> 只可能为 0，因而式
> $$
> \oint_{l_\varepsilon} \frac{f(z) - f(a)}{z-a} dz = 0.
> $$
> 必须成立。
>
> 所以
>
> $$
> \oint_l \frac{f(z)}{z-a} dz = \oint_{l_\varepsilon} \frac{f(a)}{z-a} dz = 2\pi i f(a),
> $$
> 整理即得柯西积分公式。

替换字母，我们可以得到
$$
f(z) = \frac{1}{2\pi i} \oint_l \frac{f(\zeta)}{\zeta - z} d\zeta.
$$
该公式成立的前提是， $f(\zeta)$  在围道  $l$  内（ $\sigma$  区域内）解析， $f(\zeta)$  在闭区域  $\bar{\sigma} = \sigma + l$  上连续。上述操作只是替换了字母，并没有本质上的改变和进一步的结论：这个公式也是柯西积分公式。

当  $z$  不在  $l$  内部时
$$
f(z) = \frac{1}{2\pi i} \oint_l \frac{f(\zeta)}{\zeta - z} d\zeta
$$
的被积函数
$$
g(\zeta) = \frac{f(\zeta)}{\zeta - z}
$$
 在  $l$  内没有奇点，处处解析，则有
$$
\oint_l \frac{f(\zeta)}{\zeta - z} d\zeta = 0,
$$
因而  $f(z) = 0$  ( $z \notin \sigma$ )。

以上的讨论暂未涉及  $z \in l$  的情况，因为涉及到反常积分，比较复杂，先不予考虑。

### · 复连通区域

若  $f(z)$  在复连通区域  $\sigma$  上处处解析，在  $\sigma$  及其围道
$$
L = l + \sum_{k=1}^{n} l_k
$$
连续，则

$$
f(z) = \frac{1}{2\pi i} \oint_l \frac{f(\zeta)}{\zeta - z} d\zeta - \frac{1}{2\pi i} \sum_{k=1}^{n} \oint_{l_k} \frac{f(\zeta)}{\zeta - z} d\zeta,
$$
其中  $z \in \sigma$ 。注意内边界  $l_k$  均沿顺时针积分，所以要加负号。

以上公式说明，复连通区域内部任何一点的函数值由内边界和外边界上每一点的函数值共同决定。

### · 推论

如果被积函数不能转化为分子是区域 $\sigma$ 上的解析函数且分母是一次多项式的形式，那么此时该积分公式难以使用. 因而，柯西积分公式的一些推论开始派上用场

**解析函数的导数公式**：

> 若 $f(z)$ 在 $\sigma$ 上解析，在 $\bar{\sigma} = \sigma + l$ 上连续，则对 $\sigma$ 内任意一点 $z$，有
>
>
> $$
> f^{(n)}(z) = \frac{n!}{2\pi i} \oint_l \frac{f(\zeta)}{(\zeta - z)^{n+1}} d\zeta.
> $$
>
> 其中，$n$ 为非负整数。当 $n = 0$ 时即为柯西积分公式。
>
> 容易看出，该公式是柯西积分公式形式地在积分号下对 $z$ 求 $n$ 次导数的结果。因而要证明导数公式，只需要证明在积分号下对 $z$ 求导是合法的。

/example/  计算
$$
\oint_l \frac{e^z}{z^n} dz,\quad l: |z| = 1
$$
其中 $n$ 为非负整数。

> /proof/
>
> 设 $f(z) = e^z$。当 $n = 0$ 时，
> $$
> \oint_l \frac{e^z}{z^0} dz = \oint_l e^z dz = 0
> $$
> 当 $n \geq 1$ 时，
> $$
> \oint_l \frac{e^z}{z^n} dz = \oint_l \frac{f(z)}{(z - 0)^n} dz = \frac{2\pi i}{(n-1)!} f^{(n-1)}(0) = \frac{2\pi i}{(n-1)!}
> $$

**Cauchy 不等式**：设 $l: |\zeta - z| = R$，$f(z)$ 在 $|\zeta - z| = R$ 内解析，在 $|\zeta - z| \leq R$ 上连续，并且对于 $\zeta \in l$，$f(\zeta)$ 在 $l$ 上有上界：$|f(\zeta)| \leq M$。则有
$$
|f^{(n)}(z)| \leq \frac{n!M}{R^n}.
$$

>  /proof/
>
>  由导数公式，有
>  $$
>  |f^{(n)}(z)| = \left| \frac{n!}{2\pi i} \oint_l \frac{f(\zeta)}{(\zeta - z)^{n+1}} d\zeta \right| \leq \frac{n!}{2\pi} \oint_l \frac{|f(\zeta)|}{|(\zeta - z)^{n+1}|} |d\zeta| \leq \frac{n!M}{2\pi R^{n+1}} 2\pi R = \frac{n!M}{R^n}.
>  $$
>

**Liouville 定理**：设 $f(z)$ 在复平面上解析且有界：$|f(z)| \leq M$，$M$ 为常数。则 $f(z)$ 必为常数

> /proof/
>
> 考察复平面任意一点 $z$，作以它为圆心，半径为 $R$ 的圆轨道。
>
> 由于在整个复平面上解析，因此处处连续，所以在上圆所作闭圆区域 $\bar{\sigma}: |\zeta - z| \leq R$ 上连续。另外，由条件可知有上界 $M$。因而满足柯西不等式的使用条件。
>
> 在柯西不等式中，取 $n = 1$。则
>
>
> $$
> |f'(z)| \leq \frac{M}{R} \xrightarrow{R \to \infty} 0.
> $$
>
> 故 $|f'(z)| = 0$，即 $f'(z) = 0$。
>
> 由 $z$ 的任意性，可知 $\forall z \in \mathbb{C}$，$f'(z) = 0$。所以 $f(z)$ 必为常数。

**模数原理**：若 $f(z)$ 在区域 $\sigma$ 内解析，在 $\bar{\sigma} = \sigma + l$ 上连续，若 $f(z)$ 不是闭区域 $\bar{\sigma}$ 上的常函数，则 $|f(z)|$ 只能在边界 $l$ 上取最大值

> /proof/
>
> 对 $|f(z)|^n (n \in \mathbb{Z})$ 使用柯西积分公式（取 $z \in \sigma$）：
> $$
> |f(z)|^n = \frac{1}{2\pi i} \oint_l \frac{|f(\zeta)|^n}{\zeta - z} dz.
> $$
>
> 设 $M = \max_{\zeta \in l} |f(\zeta)|$，$d = \min_{\zeta \in l} |\zeta - z|$。则
>
>
> $$
> \frac{1}{|f(z)|^n} \leq \frac{1}{2\pi} \oint_l \frac{M^n}{|\zeta - z|} |d\zeta| = \frac{M^n s}{2\pi d}.
> $$
>
> 其中 $s$ 为围道 $l$ 的长度。故
>
>
> $$
> |f(z)| \leq M \left( \frac{s}{2\pi d} \right)^{\frac{1}{n}}.
> $$
>
> 接下来利用极限
>
>
> $$
> \lim_{n \to \infty} \left( \frac{s}{2\pi d} \right)^{\frac{1}{n}} = 1,
> $$
>
> 并注意到对任意正整数 $n$ 均成立。令其右边的 $n \to \infty$，得
>
>
> $$
> |f(z)| \leq M, \quad z \in \sigma.
> $$
>
> 至此，只证明了可在边界上取最大值 $M$，且边界内部所有点的函数值不超过 $M$。但没证明不能在区域内部取最大值 $M$。进一步可以证明，只有当 $f(z)$ 在闭区域 $\bar{\sigma}$ 上为常函数时，上式等号才能成立。
>
> 换句话说，当 $f(z)$ 不是常函数时，$|f(z)|$ 只可能在边界上取得最大值。

**中值定理**：若 $f(z)$ 在 $|z - a| < R$ 内解析，在 $|z - a| \leq R$ 上连续，则 $f(z)$ 在区域圆心 $a$ 处的函数值等于其圆周上函数值的平均值，即

$$
f(a) = \frac{1}{2\pi} \int_0^{2\pi} f(a + Re^{i\varphi}) d\varphi.
$$

> /proof/
>
>设 $l: |z - a| = R$。利用柯西积分公式，有
> 
> $$
> f(a) = \frac{1}{2\pi i} \oint_l \frac{f(z)}{z - a} dz.
>$$
> 
>设 $z - a = Re^{i\varphi}$，$\varphi \in [0, 2\pi)$。
>
> 则 $dz = Re^{i\varphi} i d\varphi$，$f(z) = f(a + Re^{i\varphi})$。将这两式代入上式，即得中值定理。

**Morera 定理**：设 $f(z)$ 在 $\sigma$ 上连续，且对 $\sigma$ 内任一围道 $l$ 的积分为 0，即

$$
\oint_l f(z) dz = 0,
$$

则 $f(z)$ 在 $\sigma$ 内解析。

该定理在后面复级数部分有重要应用。

### · 例题

/example/ 计算
$$
\oint_l \frac{e^z}{z(z^2 + 1)} dz
$$
其中 $l: |z - i| = \frac{1}{2}$。

> /proof/
>
> 不妨设
> $$
> f(z) = \frac{e^z}{z(z^2 + 1)}
> $$
> 轨道如下图所示。
>
> ![](https://pic1.imgdb.cn/item/692bb607aae9ff4455b3e843.png)
>
> 由于 $z^2 + 1 = (z + i)(z - i)$，故 $f(z)$ 存在奇点 0, $i$, $-i$。由上图可知，只有奇点 $i$ 包含在轨道 $l$ 内。基于这点发现，可将 $f(z)$ 重新写为
>
>
> $$
> f(z) = \frac{e^z}{z(z + i)(z - i)} = \frac{e^z}{z(z + i)} \cdot \frac{1}{z - i} = g(z)
> $$
>
> 其中
> $$
> g(z) = \frac{e^z}{z(z + i)}
> $$
> 在轨道 $l$ 所包含的区域 $\sigma$ 内处处解析。由柯西积分公式，有
>
> $$
> g(a) = \frac{1}{2\pi i} \oint_l \frac{g(z)}{z - a} dz, \quad a \in \sigma.
> $$
>
> 由于 $i \in \sigma$，可取 $a = i$，得
>
>
> $$
> \oint_l \frac{e^z}{z(z^2 + 1)} dz = \oint_l \frac{g(z)}{z - i} dz = 2\pi i g(i) = -i\pi e^i.
> $$

/example/

(1) 求积分
$$
\oint_l \frac{e^z}{z} dz,\quad l: |z| = 1
$$
从而证明

$$
\int_0^\pi e^{\cos \theta} \cos(\sin \theta) d\theta = \pi.
$$

(2) $n$ 为非负整数，证明


$$
\int_0^{2\pi} e^{\rho \cos \varphi} \cos(\rho \sin \varphi - n\varphi) d\varphi = \frac{2\pi \rho^n}{n!},
$$

> /example/
>
> 由前面例子可知，
> $$
> \oint_l \frac{e^z}{z} dz = 2\pi i
> $$
> (1) 所要证明的式子是 (2) 的特殊情况（取 $n = 0, \rho = 1$），因此我们只需证 (2)。
>
> 由 (1) 题干的提示（求 $\oint_l \frac{e^z}{z} dz$）以及导数公式，我们考虑 
> $$
> \oint_{l_\rho} \frac{e^z}{(z - 0)^{n+1}} dz,\quad l_\rho: |z| = \rho
> $$
> 由于 $f(z) = e^z$ 在 $l_\rho$ 所包围的区域内处处解析，故
>
> $$
> 1 = f^{(n)}(0) = \frac{n!}{2\pi i} \oint_{l_\rho} \frac{e^z}{(z - 0)^{n+1}} dz,
> $$
>
> 整理得
>
>
> $$
> \oint_{l_\rho} \frac{e^z}{z^{n+1}} dz = \frac{2\pi i}{n!}.
> $$
>
> 令 $z = \rho e^{i\varphi}$，$\varphi \in [0, 2\pi)$。故
> $$
> dz = \rho e^{i\varphi} i d\varphi,\quad z = \rho(\cos \varphi + i \sin \varphi),\quad z^{n+1} = \rho^{n+1} e^{i(n+1)\varphi}
> $$
> 代入上式，得
>
> $$
> \frac{2\pi i}{n!} = \int_0^{2\pi} \frac{e^{\rho(\cos \varphi + i \sin \varphi)}}{\rho^{n+1} e^{i(n+1)\varphi}} \rho e^{i\varphi} i d\varphi,
> $$
>
> 整理得
>
>
> $$
> \frac{2\pi \rho^n}{n!} = \int_0^{2\pi} \frac{e^{\rho(\cos \varphi + i \sin \varphi)}}{e^{in\varphi}} d\varphi = \int_0^{2\pi} e^{\rho \cos \varphi} e^{i(\rho \sin \varphi - n\varphi)} d\varphi,
> $$
>
> 运用欧拉公式，
>
>
> $$
> \frac{2\pi \rho^n}{n!} = \int_0^{2\pi} e^{\rho \cos \varphi} [\cos(\rho \sin \varphi - n\varphi) + i \sin(\rho \sin \varphi - n\varphi)] d\varphi,
> $$
>
> 由于 $e^{\rho \cos \varphi} \sin(\rho \sin \varphi - n\varphi)$ 是关于 $\varphi$ 的奇函数，且以 $2\pi$ 为周期，故
>
>
> $$
> \int_0^{2\pi} e^{\rho \cos \varphi} i \sin(\rho \sin \varphi - n\varphi) d\varphi = \int_{-\pi}^\pi e^{\rho \cos \varphi} i \sin(\rho \sin \varphi - n\varphi) d\varphi = 0,
> $$
>
> 代入上式，得
>
>
> $$
> \frac{2\pi \rho^n}{n!} = \int_0^{2\pi} e^{\rho \cos \varphi} \cos(\rho \sin \varphi - n\varphi) d\varphi.
> $$

/example/证明

若 $f(z) = u(x, y) + iv(x, y)$ 是上半平面的解析函数，且当 $z \to \infty$ 时，$f(z)$ 一致趋于 0，则在上半平面中有


$$
u(x, y) = \frac{y}{\pi} \int_{-\infty}^{+\infty} \frac{u(\xi, 0)}{(\xi - x)^2 + y^2} d\xi, \\
v(x, y) = \frac{y}{\pi} \int_{-\infty}^{+\infty} \frac{v(\xi, 0)}{(\xi - x)^2 + y^2} d\xi.
$$

> /proof/
>
> 这实际上是一个二维平面静电场边值问题：给定静电场边界的电场强度和电势，求静电场内部每一点的电场强度和电势分布。本例题中，静电场分布在上半平面，以 $u, v$ 为电场强度和电势，边界是实轴和上半平面无穷远处。
>
> ![](https://pic1.imgdb.cn/item/692bb8b227638c120a3d0bd2.png)
>
> 如上图所示，取足够大的半圆周轨道，半径 $R \to \infty$。设半圆轨道（包括实轴）为 $l$，其包围的区域为 $\sigma$。半圆周轨道（不含实轴）为 $l_c$。
>
> 取 $Z(x, y) \in$ 上半平面，$z = x + iy$。则 $\bar{Z}(x, -y) \in$ 下半平面，$\bar{z} = x - iy$。运用柯西积分公式，对 $z \in \sigma$，有
>
>
> $$
> f(z) = u(x, y) + iv(x, y) = \frac{1}{2\pi i} \oint_l \frac{f(\zeta)}{\zeta - z} d\zeta,
> $$
>
> 由于 $\bar{z} \notin \sigma$，在 $l$ 之外，故有 $\frac{f(\zeta)}{\zeta - \bar{z}}$ 在 $\sigma$ 内部处处解析，因此
>
>
> $$
> 0 = \frac{1}{2\pi i} \oint_l \frac{f(\zeta)}{\zeta - \bar{z}} d\zeta.
> $$
>
> 以上两式相减，并把积分分为实轴（$-\infty \to +\infty$）和半圆周两部分，得到
>
>
> $$
> u(x, y) + iv(x, y) = \frac{1}{2\pi i} \int_{-R}^{+R} \left( \frac{1}{\zeta - z} - \frac{1}{\zeta - \bar{z}} \right) f(\zeta) d\zeta + \frac{1}{2\pi i} \int_{l_c} \left( \frac{1}{\zeta - z} - \frac{1}{\zeta - \bar{z}} \right) f(\zeta) d\zeta,
> $$
>
> 当 $R \to \infty$ 时，由于第二项积分在半径为 $R$ 的 $l_c$ 轨道上进行，故由题干，可知被积函数 $f(\zeta) \to 0$，所以第二项积分区域趋于 0。因此，令上式 $R \to \infty$，可得
>
>
> $$
> u(x, y) + iv(x, y) = \frac{1}{2\pi i} \int_{-\infty}^{+\infty} \left( \frac{1}{\zeta - z} - \frac{1}{\zeta - \bar{z}} \right) f(\zeta) d\zeta,
> $$
>
> 取共轭，得
>
>
> $$
> u(x, y) - iv(x, y) = -\frac{1}{2\pi i} \int_{-\infty}^{+\infty} \left( \frac{1}{\zeta - \bar{z}} - \frac{1}{\zeta - z} \right) \overline{f(\zeta)} d\zeta,
> $$
>
> 注意 $\zeta$ 在实轴上，故 $\zeta = \xi + i \cdot 0 = \xi$，$\zeta - \bar{z} = \zeta - \bar{z}$。所以
>
>
> $$
> \frac{1}{\zeta - z} - \frac{1}{\zeta - \bar{z}} = \frac{z - \bar{z}}{(\zeta - z)(\zeta - \bar{z})} = \frac{2yi}{(x - \xi)^2 + y^2},
> $$
>
> 将结果代并将 $f(\zeta) = f(\xi) = u(\xi, 0) + iv(\xi, 0)$ 一并代入，得到
>
>
> $$
> u(x, y) + iv(x, y) = \frac{y}{\pi} \int_{-\infty}^{+\infty} \frac{u(\xi, 0) + iv(\xi, 0)}{(x - \xi)^2 + y^2} f(\xi) d\xi,
> $$
>
>
> $$
> u(x, y) - iv(x, y) = \frac{y}{\pi} \int_{-\infty}^{+\infty} \frac{u(\xi, 0) - iv(\xi, 0)}{(x - \xi)^2 + y^2} f(\xi) d\xi.
> $$
>
> 将以上两式相加减即得所需证明的结果

结束.
