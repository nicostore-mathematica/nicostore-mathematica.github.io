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
> 原函数和不定积分：在  $f(z)$  的单连通解析区域  $\sigma$  内，积分函数（变上限积分） $ \int_{z_0(l)}^z f(z) dz$  与路径无关，但随着  $z$  的变化而变化（即  $\int_{z_0(l)}^z f(z) d$  是关于  $z$  的单值函数），记为
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
> 又由于在新边界下是单连通区域，有（若无特别说明，均默认沿着曲线段  $\overline{XY}$  的积分方向沿逆时针， $ \oint_X$  的积分方向沿逆时针）
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
