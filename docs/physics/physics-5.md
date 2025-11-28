---
title: Chapter 5 刚体
createTime: 2025/10/13 16:19:38
permalink: /physics/physics-5/
---

## Part 1 质心参考系

### · 推导

在第三章中，我们已经介绍了有关多质点体系的质心的定义以及质心运动定理。按照定义，在实验室系中，质心的位置和速度由关系式

$$
\mathbf{R}_C = \frac{\sum_i m_i \mathbf{r}_i}{\sum_i m_i}, \quad \mathbf{V}_C = \frac{\sum_i m_i \mathbf{F}_i}{\sum_i m_i} = \frac{\sum_i m_i \mathbf{v}_i}{\sum_i m_i} = \frac{\mathbf{P}}{M}
$$
给出。而质心运动则由下式

$$
\mathbf{F}_{\text{all}} = M \mathbf{a}_C = M \frac{d^2 \mathbf{R}_C}{dt^2}
$$
决定。除此之外，我们还证明了 König 定理

$$
E_k = E_{kC} + E'_k = \frac{1}{2} M V_C^2 + \frac{1}{2} \sum_i m_i v_i'^2.
$$
现在，我们再对角动量证明类似的关系

$$
\mathbf{L} = \mathbf{L}_C + \mathbf{L}' = M \mathbf{R}_C \times \mathbf{V}_C + \sum_i m_i \mathbf{r}'_i \times \mathbf{v}'_i
$$
成立。

> /proof/
>
> 按照角动量的定义，我们有
> $$
> \mathbf{L} = \sum_{i=1}^{N} m_i \mathbf{r}_i \times \mathbf{v}_i = \sum_{i=1}^{N} m_i (\mathbf{r}'_i + \mathbf{R}_C) \times (\mathbf{v}'_i + \mathbf{V}_C)
> $$
>
> $$
> = \sum_{i=1}^{N} m_i \mathbf{r}'_i \times \mathbf{v}'_i + \sum_{i=1}^{N} m_i \mathbf{r}'_i \times \mathbf{V}_C + \sum_{i=1}^{N} m_i \mathbf{R}_C \times \mathbf{v}'_i + \sum_{i=1}^{N} m_i \mathbf{R}_C \times \mathbf{V}_C.
> $$
>
> 又由于
>
> $$
> \sum_{i=1}^{N} m_i \mathbf{r}'_i = \sum_{i=1}^{N} m_i \mathbf{r}_i - \sum_{i=1}^{N} m_i \mathbf{R}_C = M \mathbf{R}_C - M \mathbf{R}_C = 0,
> $$
>
> $$
> \sum_{i=1}^{N} m_i \mathbf{v}'_i = \sum_{i=1}^{N} m_i \mathbf{v}_i - \sum_{i=1}^{N} m_i \mathbf{V}_C = M \mathbf{V}_C - M \mathbf{V}_C = 0,
> $$
>
> 我们最后得到
>
> $$
> \mathbf{L} = \sum_{i=1}^{N} m_i \mathbf{r}'_i \times \mathbf{v}'_i + \sum_{i=1}^{N} m_i \mathbf{R}_C \times \mathbf{V}_C = \mathbf{L}' + M \mathbf{R}_C \times \mathbf{V}_C = \mathbf{L}' + \mathbf{L}_C.
> $$
> 我们引入质心的概念，主要是为了建立质心参照系做准备。所谓质心系，就是质心在其中静止的参照系。显然，在没有外力的情况下，这是一个惯性系。而在有外力存在的情况下，它是一个非惯性系。
>
> 又由于质心是一个点，没有内部结构，故在实验室系中不呈现自身的转动。因此，质心参照系必定是相对于实验室系作平动的参照系。特别要强调一点的是，质心参照系的原点并不一定非要取在质心上。
>
> 无论是有无外力，下面的命题都成立。
>
> (1) 在质心系中，体系动能的改变满足方程
>
> $$
> dE_k = dw_{\text{in}} + dw_{\text{out}}.
> $$
> 当质心系为一惯性系，这一命题是显然成立的。而当质心系为非惯性系时，我们有
>
> $$
> dE_k = dw_{\text{in}} + dw_{\text{out}} + dw_{\text{inertia}}.
> $$
> 这里， $dw_{\text{inertia}}$  代表惯性力作功的贡献。但是由于
>
> $$
> dw_{\text{inertia}} = \sum_{i=1}^{N} m_i (-\mathbf{a}_C) \cdot d\mathbf{r}'_i = -\mathbf{a}_C \cdot d \left( \sum_{i=1}^{N} m_i \mathbf{r}'_i \right) = -\mathbf{a}_C \cdot d(M \mathbf{R}'_C),
> $$
> 而在质心系中， $\mathbf{R}'_C$  又是一个不变的向量，即  $d\mathbf{R}'_C = 0$ ，故  $dw_{\text{inertia}} = 0$ 
>
> (2) 在质心系中，若取  $\mathbf{R}'_C = 0$ ，则体系角动量的改变满足方程
>
> $$
> \frac{d\mathbf{L}'}{dt} = \mathbf{M}'_{\text{out}}.
> $$
> 这里， $\mathbf{M}'_{\text{out}}$  为相对于质心的合外力矩。
>
> 事实上，按照定义，我们有
>
> $$
> \frac{d\mathbf{L}'}{dt} = \mathbf{M}'_{\text{out}} + \mathbf{M}'_{\text{inertia}},
> $$
> 而
>
> $$
> \mathbf{M}'_{\text{inertia}} = \sum_i \mathbf{r}'_i \times m_i (-\mathbf{a}_C) = \sum_i m_i \mathbf{r}'_i \times (-\mathbf{a}_C) = \vec{0} \times (-\mathbf{a}_C) = \vec{0}.
> $$
> 因此，命题成立。

### · 例题

考虑一个具有  $N$  个质点的封闭体系。假设质点之间的万有引力是线性的，即
$$
\mathbf{F} = -G m_1 m_2 \mathbf{r}.
$$
不考虑质点间相互碰撞的可能性。试求在质点系中各个质点的运动轨道和周期。

> 由于没有外力，质心系是一个惯性系。将质心取作原点。对于第  $i$  个质点，我们有牛顿方程
> $$
> m_i \frac{d^2 \mathbf{r}'_i}{dt^2} = \sum_{j \neq i} (-G m_i m_j (\mathbf{r}'_i - \mathbf{r}'_j)) = \sum_{j \neq i} G m_i m_j \mathbf{r}'_j - \sum_{j \neq i} G m_i m_j \mathbf{r}'_i
> $$
>
> $$
> = \left( \sum_{j=1}^{N} G m_i m_j \mathbf{r}'_j - G m_i^2 \mathbf{r}'_i \right) - \left( \sum_{j=1}^{N} G m_i m_j \mathbf{r}'_i - G m_i^2 \mathbf{r}'_i \right)
> $$
>
> $$
> = G m_i \sum_{j=1}^{N} m_j \mathbf{r}'_j - G m_i \mathbf{r}'_i \sum_{j=1}^{N} m_j + G m_i^2 \mathbf{r}'_i
> $$
>
> $$
> = G m_i M \mathbf{R}'_C - G m_i M \mathbf{r}'_i.
> $$
>
> 由于  $\mathbf{R}'_C = 0$ ，我们最后得到
>
> $$
> m_i \frac{d^2 \mathbf{r}'_i}{dt^2} = -G m_i M \mathbf{r}'_i.
> $$
> 上面的结果表明，在质心系中，第  $i$  个质点所受到的合力可以等效于系统质心对其的引力。因此，它对于质心的角动量是守恒的。也就是说，它是在包含质心的一个平面中运动的。我们可以在这个平面中建立一个直角坐标系。在这个坐标系下，可以写成如下的分量形式
>
> $$
> m_i \frac{d^2 x'_i}{dt^2} = -G m_i M x'_i, \quad m_i \frac{d^2 y'_i}{dt^2} = -G m_i M y'_i.
> $$
> 这些方程具有形式
>
> $$
> \frac{d^2 \xi}{dt^2} + \omega^2 \xi = 0.
> $$
> 在文献中，这一方程被称为简谐振子方程。其通解可以被写作
>
> $$
> \xi(t) = \xi_0 \cos(\omega t + \phi_0).
> $$
> 这里， $\xi_0 > 0$  和  $\omega > 0$  是正的实常数，分别被称为简谐振子的振幅和角频率。而角度  $-\pi \leq \phi_0 \leq \pi$  为简谐振子的初始相位。由此我们得到
>
> $$
> x'_i(t) = A_1 \cos(\omega t + \phi_1), \quad y'_i(t) = A_2 \cos(\omega t + \phi_2).
> $$
> 为了求得质点  $i$  的运动轨迹，我们需要从这两个方程中消去时间参数  $t$ 。为此，我们先将这两个方程改写作
>
> $$
> \frac{x'_i(t)}{A_1} = \cos(\omega t + \phi_1) = \cos \omega t \cos \phi_1 - \sin \omega t \sin \phi_1,
> $$
>
> $$
> \frac{y'_i(t)}{A_2} = \cos(\omega t + \phi_2) = \cos \omega t \cos \phi_2 - \sin \omega t \sin \phi_2.
> $$
>
> 我们要从这一联立方程组中解出  $\cos \omega t$  和  $\sin \omega t$ 。利用行列式解法，我们先计算
>
>
> $$
> \Delta = \begin{vmatrix}
> \cos \phi_1 & -\sin \phi_1 \\
> \cos \phi_2 & -\sin \phi_2
> \end{vmatrix}
> = -\cos \phi_1 \sin \phi_2 + \sin \phi_1 \cos \phi_2 = \sin(\phi_1 - \phi_2),
> $$
>
>
> $$
> \Delta_1 = \begin{vmatrix}
> x'_i(t) & -\sin \phi_1 \\
> y'_i(t) & -\sin \phi_2
> \end{vmatrix}
> = -\frac{x'_i(t)}{A_1} \sin \phi_2 + \frac{y'_i(t)}{A_2} \sin \phi_1,
> $$
>
> $$
> \Delta_2 = \begin{vmatrix}
> \cos \phi_1 & x'_i(t) \\
> \cos \phi_2 & y'_i(t)
> \end{vmatrix}
> = \frac{y'_i(t)}{A_2} \cos \phi_1 - \frac{x'_i(t)}{A_1} \cos \phi_2.
> $$
>
> 因此，我们得到
> $$
> \cos \omega t = \frac{\Delta_1}{\Delta} = \frac{1}{\sin(\phi_1 - \phi_2)} \left( -\frac{x'_i(t)}{A_1} \sin \phi_2 + \frac{y'_i(t)}{A_2} \sin \phi_1 \right),
> $$
>
>
> $$
> \sin \omega t = \frac{\Delta_2}{\Delta} = \frac{1}{\sin(\phi_1 - \phi_2)} \left( -\frac{x'_i(t)}{A_1} \cos \phi_2 + \frac{y'_i(t)}{A_2} \cos \phi_1 \right).
> $$
>
> 两式平方后再相加给出
>
>
> $$
> 1 = \frac{1}{\sin^2(\phi_1 - \phi_2)} \left( \frac{x'^2_i}{A_1^2} + \frac{y'^2_i}{A_2^2} + \frac{2 x'_i y'_i}{A_1 A_2} (\sin \phi_1 \sin \phi_2 + \cos \phi_1 \cos \phi_2) \right),
> $$
>
> 或是
>
>
> $$
> \sin^2(\phi_1 - \phi_2) = \frac{x'^2_i}{A_1^2} + \frac{y'^2_i}{A_2^2} - \frac{2 x'_i y'_i}{A_1 A_2} \cos(\phi_1 - \phi_2).
> $$
>
> 这是一个椭圆方程。而第  $i$  个质点的运动周期则由公式
>
>
> $$
> T = \frac{2\pi}{\omega} = \frac{2\pi}{\sqrt{GM}}
> $$
>
> 给出。

## Part 2 定轴转动

### · 转动惯量

刚体的运动可以分为平动和转动。我们先来研究转动。

刚体最简单的转动形式是绕着空间中某一根固定轴的转动。此时，刚体上任一点  $\mathbf{r}_i$  处的速度可以写作

$$
\mathbf{v}_i = \boldsymbol{\omega} \times \mathbf{r}_i = \omega R_i \mathbf{e}_r.
$$
这里， $R_i$  为该点到转动轴的距离，而  $\mathbf{e}_r$  则为切线方向，由右手螺旋法则来定。因此，整个刚体的动能可以写作

$$
E_k = \sum_i \frac{1}{2} m_i v_i^2 = \frac{1}{2} \sum_i m_i \omega^2 R_i^2 = \frac{1}{2} \omega^2 \sum_i m_i R_i^2 \equiv \frac{1}{2} \omega^2 I.
$$
这里， $I = \sum_i m_i R_i^2$  被称为刚体相对于该转动轴的转动惯量。

同理，对于体系的总角动量，我们有

$$
\mathbf{L} = \sum_i \mathbf{r}_i \times (m_i \mathbf{v}_i) = \sum_i \mathbf{R}_i \times (m_i \mathbf{v}_i) + \sum_i z_i \mathbf{k} \times (m_i \mathbf{v}_i).
$$
这里，我们用到了向量分解关系  $\mathbf{r}_i = \mathbf{R}_i + z_i \mathbf{k}$ 。上式的第一项求和结果是一个平行于转动轴的向量，记作

$$
L_z = \sum_i \mathbf{R}_i \times (m_i \mathbf{v}_i) = \sum_i R_i m_i \omega R_i = \sum_i R_i^2 m_i \omega = \omega I.
$$
而第二项则是垂直于转动轴的向量。

我们看到，对于刚体的定轴转动而言，转动惯量  $I$  是一个重要的物理量。下面，让我们分别计算几种常见的刚体的转动惯量。

/example/  考虑一质量为  $m$ ，长度为  $l$  的匀质细杆，旋转轴垂直于杆穿过质心

> 则其转动惯量
> $$
> I_C = \int_{-\frac{l}{2}}^{\frac{l}{2}} (\rho dx) x^2 = \int_{-\frac{l}{2}}^{\frac{l}{2}} \frac{m}{l} x^2 dx = \frac{m}{l} \int_{-\frac{l}{2}}^{\frac{l}{2}} x^2 dx
> $$
>
> $$
> = \frac{m}{l} \frac{1}{3} x^3 \bigg|_{-\frac{l}{2}}^{\frac{l}{2}} = \frac{m}{l} \left[ \left(\frac{l}{2}\right)^3 - \left(-\frac{l}{2}\right)^3 \right] = \frac{2m l^3}{3l} = \frac{1}{12} m l^2.
> $$
>
> 同理，我们可以得到，对于垂直于杆但穿过杆的一端  $A$  的转动轴而言，杆的转动惯量为
>
> $$
> I_A = \int_0^l (\rho dx) x^2 = \int_0^l \frac{m}{l} x^2 dx = \frac{m}{l} \int_0^l x^2 dx = \frac{m}{l} \frac{1}{3} x^3 \bigg|_0^l = \frac{m}{l} \frac{1}{3} l^3 = \frac{1}{3} m l^2.
> $$

/example/  考虑一质量为  $m$ ，半径为  $R$  的匀质圆盘，旋转轴垂直于圆盘并穿过圆心，

> 其转动惯量为
> $$
> I_C = \int_0^R (\rho 2\pi r dr) r^2 = 2\pi \rho \int_0^R r^3 dr = 2\pi \frac{m}{\pi R^2} \int_0^R r^3 dr
> $$
>
> $$
> = \frac{2m}{R^2} \frac{1}{4} r^4 \bigg|_0^R = \frac{m}{2R^2} R^4 = \frac{1}{2} m R^2.
> $$
>
> 刚体是一种特殊的多粒子体系。因此，它的运动仍然满足质心运动定理
>
> $$
> \mathbf{F}_{\text{all}} = M \mathbf{a}_C = M \frac{d^2 \mathbf{R}_C}{dt^2},
> $$
> 动能定理
>
> $$
> W_{\text{out}} = E_{k2} - E_{k1} = \frac{1}{2} I \omega_2^2 - \frac{1}{2} I \omega_1^2,
> $$
> 以及角动量定理
>
> $$
> \frac{dL_z}{dt} = I \frac{d\omega}{dt} = I \beta = M \mathbf{r}_{\text{out}}^z.
> $$

这里，我们就不一一赘述了。

### · 平行轴定理

利用刚体动能在实验室系和质心系中所满足的关系

$$
E_k = E_{kC} + E'_k,
$$
证明所谓平行轴定理：设  $\overline{MN}$  为刚体的一条转动轴，而  $\overline{PQ}$  为穿过刚体质心且与  $\overline{MN}$  平行的另外一条轴。则相对于这两条轴的刚体的转动惯量  $I_{MN}$  和  $I_{PQ}$  满足恒等式

$$
I_{MN} = I_{PQ} + M d^2.
$$
这里， $M$  为刚体的总质量。而  $d$  则为两轴之间的距离。

> 设刚体绕固定轴  $\overline{MN}$  转动的角速度为  $\omega$ ，则刚体在实验室系的动能为
>
> $$
> E_k = \frac{1}{2} I_{MN} \omega^2.
> $$
> 而质心的速度和动能则为
>
> $$
> V_C = \omega d, \quad E_{kC} = \frac{1}{2} M V_C^2 = \frac{1}{2} M d^2 \omega^2.
> $$
> 至于刚体在质心系中的动能则为其在该系中绕轴  $PQ$  的转动能。考虑到在质心系中刚体的转动角速度仍为  $\omega$ ，我们有
>
> $$
> E'_k = \frac{1}{2} I_{PQ} \omega^2.
> $$
> 将这些表达式代入方程，我们即可得到
>
> $$
> \frac{1}{2} I_{MN} \omega^2 = \frac{1}{2} M d^2 \omega^2 + \frac{1}{2} I_{PQ} \omega^2.
> $$
> 将方程两边同时除以  $\omega^2/2$  后，我们得到方程
> $$
>  I_{MN} = I_{PQ} + M d^2. 
> $$
> 对于质量为  $m$ ，长度为  $l$  的匀质细杆，我们有
>
> $$
> I_{PQ} = I_C = \frac{1}{12} m l^2.
> $$
> 而对于垂直于杆并穿过杆的一端  $A$  的转动轴，我们有
>
> $$
> I_A = I_{PQ} = \frac{1}{3} m l^2.
> $$
> 二者之差为
>
> $$
> I_A - I_C = \frac{1}{3} m l^2 - \frac{1}{12} m l^2 = \frac{l^2}{4} m = \left(\frac{l}{2}\right)^2 m.
> $$
> 而质心  $C$  到端  $A$  的距离正好是  $\frac{l}{2} l$ 。

## Part 3 平面运动

### · 刚体运动学描述

任取刚体上的两点  $A$  和  $B$ 。我们有

$$
\mathbf{V}_B = \mathbf{V}_A + \vec{\omega}_A \times \mathbf{R}_{BA}, \quad \mathbf{V}_A = \mathbf{V}_B + \vec{\omega}_B \times \mathbf{R}_{AB} = \mathbf{V}_B - \vec{\omega}_B \times \mathbf{R}_{BA}.
$$
比较两式，我们得到

$$
\vec{\omega}_A \times \mathbf{R}_{BA} = \vec{\omega}_B \times \mathbf{R}_{BA}.
$$
由于  $A$  和  $B$  两点是任意的，故我们进一步有

$$
\vec{\omega}_A = \vec{\omega}_B.
$$
既相对于任何转动轴，刚体运动的角速度是一样的。

现在，我们取定刚体中一点  $A$ 。则在实验室参照系中，总会存在一点  $M$ ，其在时刻  $t$  的速度

$$
\mathbf{V}_M = \mathbf{V}_A + \vec{\omega} \times \mathbf{R}_{MA} = 0.
$$
这一点，称为  $t$  时刻的刚体瞬时转动中心。为了确定其位置，我们可以将上式两边同时与  $t$  时刻的刚体角速度  $\vec{\omega}(t)$  做直乘。由此我们得到

$$
0 = \vec{\omega}(t) \times \mathbf{V}_A(t) + \vec{\omega}(t) \times (\vec{\omega}(t) \times \mathbf{R}_{MA})
$$

$$
= \vec{\omega}(t) \times \mathbf{V}_A(t) + \vec{\omega}^2(t) (\vec{\omega}(t) \cdot \mathbf{R}_{MA}) - (\vec{\omega}(t) \cdot \vec{\omega}(t)) \mathbf{R}_{MA}(t)
$$

$$
= \vec{\omega}(t) \times \mathbf{V}_A(t) - \omega^2(t) \mathbf{R}_{MA}(t).
$$

从这一方程，我们解得

$$
\mathbf{R}_{MA}(t) = \frac{1}{\omega^2(t)} \vec{\omega}(t) \times \mathbf{V}_A(t).
$$
从上面我们可以看到， $\mathbf{R}_{MA}$  总是与  $\mathbf{V}_A$  垂直的。因此，若我们能找到刚体上的两点  $A$  和  $B$ ，它们在  $t$  时刻具有不共线的速度  $\mathbf{V}_A$  和  $\mathbf{V}_B$ ，则我们可以利用作图法决定瞬时转动中心的位置  $M$ 。在瞬时转动中心确定以后，刚体上任一点  $P$  在时刻  $t$  的速度可以写作

$$
\mathbf{V}_P = \mathbf{V}_M + \vec{\omega}(t) \times \mathbf{R}_{PM} = \vec{\omega}(t) \times \mathbf{R}_{PM}.
$$
而过  $M$  的转动轴也称为瞬时转动轴。

需要强调一点的是，瞬时转动中心在时刻  $t$  的速度按照定义为零，但其加速度并不一定为零。

### · 瞬时转动轴定理

刚体在做平面运动时，其瞬心位置是随时间改变的。因此，刚体相对于瞬时轴的转动惯量也会随时间改变。将  $t$  时刻外力对于瞬时转动轴的力矩之和记作  $\mathbf{M}_{\text{out},M}$ 。则我们有

$$
\mathbf{M}_{\text{out},M} = I_M \beta + \frac{1}{2} \omega \frac{dI_M}{dt}
$$
成立。

**证**: 首先，任取与刚体一起运动的参照系上的固定一点  $\bar{M}$ (不一定是瞬时转动中心)。在随  $\bar{M}$  点运动的参照系中，我们有
$$
I_{\bar{M}} \ddot{\vec{\omega}} = \mathbf{M}_{\text{out},\bar{M}} + \sum_{i=1}^{N} \mathbf{r}_i \times m_i (-\mathbf{a}_{\bar{M}}).
$$
这里， $\mathbf{a}_{\bar{M}}$  为  $\bar{M}$  点在实验室系中的加速度。相对于  $\bar{M}$  点而言，质心的速度为

$$
\mathbf{V}_C = \vec{\omega} \times \mathbf{r}_C.
$$
因此，反过来，在质心系中， $\bar{M}$  点的速度为

$$
\mathbf{v}'_{\bar{M}} = \vec{\omega} \times (-\mathbf{r}_C).
$$
而它相对于实验室系的速度为

$$
\mathbf{v}_{\bar{M}} = \mathbf{v}'_{\bar{M}} + \mathbf{V}_C = \vec{\omega} \times (-\mathbf{r}_C) + \mathbf{V}_C.
$$
将之对于时间求导后，我们得到

$$
\begin{align*}
\mathbf{a}_{\bar{M}} &= \dot{\mathbf{v}}_{\bar{M}} = \frac{d}{dt} [\vec{\omega} \times (-\mathbf{r}_C)] + \frac{d}{dt} \mathbf{V}_C\\
&= \dot{\vec{\omega}} \times (-\mathbf{r}_C) + \vec{\omega} \times (-\dot{\mathbf{r}}_C) + \dot{\mathbf{V}}_C\\
&= \dot{\vec{\omega}} \times (-\mathbf{r}_C) + \vec{\omega} \times (-\vec{\omega} \times \mathbf{r}_C) + \mathbf{V}_C\\
&= \dot{\vec{\omega}} \times (-\mathbf{r}_C) + \vec{\omega} \times [-(\vec{\omega} \times \mathbf{r}_C)] + \mathbf{V}_C\\
&= -\dot{\vec{\omega}} \times \mathbf{r}_C - \vec{\omega} (\vec{\omega} \cdot \mathbf{r}_C) + \omega^2 \mathbf{r}_C + \mathbf{V}_C.
\end{align*}
$$
将  $\mathbf{a}_{\bar{M}}$  代入方程
$$
I_{\bar{M}} \ddot{\vec{\omega}} = \mathbf{M}_{\text{out},\bar{M}} + \sum_{i=1}^{N} \mathbf{r}_i \times m_i (-\mathbf{a}_{\bar{M}}).
$$
后，我们有
$$
\begin{align*}
I_{\bar{M}} \ddot{\vec{\omega}} &= \mathbf{M}_{\text{out},\bar{M}} + m \mathbf{r}_C \times (-\mathbf{a}_{\bar{M}})\\
&= \mathbf{M}_{\text{out},\bar{M}} + m \mathbf{r}_C \times (-\dot{\vec{\omega}} \times \mathbf{r}_C - \vec{\omega}^2 \mathbf{r}_C + \mathbf{V}_C)\\
&= \mathbf{M}_{\text{out},\bar{M}} - m \mathbf{r}_C \times (\dot{\vec{\omega}} \times \mathbf{r}_C) - m \mathbf{r}_C \times \vec{\omega}^2 \mathbf{r}_C + \mathbf{M}_{\text{out},\bar{M}} \\
&= \mathbf{M}_{\text{out},\bar{M}} + m r_C^2 \dot{\vec{\omega}} - m (\mathbf{r}_C \cdot \dot{\vec{\omega}}) \mathbf{r}_C - m r_C \times \mathbf{V}_C\\
&= \mathbf{M}_{\text{out},\bar{M}} + m r_C^2 \dot{\vec{\omega}} - m r_C \times \mathbf{V}_C. 
\end{align*}
$$
为了求得最后一项，我们现在取  $\bar{M}$  点为  $t$  时刻的瞬时转动中心  $M$  点，并利用过  $M$  点的垂直轴为瞬时转动轴这一事实。也就是说，我们有

$$
\mathbf{v}_M = \mathbf{v}'_M + \mathbf{v}_C = \vec{\omega} \times (-\mathbf{r}_C) + \mathbf{v}_C = 0.
$$
由此，我们解得

$$
\mathbf{v}_C = \vec{\omega} \times \mathbf{r}_C.
$$
对于时间求导后，我们有

$$
\dot{\mathbf{v}}_C = \dot{\vec{\omega}} \times \mathbf{r}_C + \vec{\omega} \times \dot{\mathbf{r}}_C.
$$
将它代入后，我们得到

$$
\begin{align*}
I_M \ddot{\vec{\omega}} &= \mathbf{M}_{\text{外},M} + m r_C^2 \ddot{\vec{\omega}} - m r_C \times (\dot{\vec{\omega}} \times \dot{\mathbf{r}}_C) - m r_C \times (\vec{\omega} \times \dot{\mathbf{r}}_C)\\
&= \mathbf{M}_{\text{out},M} + m r_C^2 \ddot{\vec{\omega}} + m (\mathbf{r}_C \cdot \ddot{\vec{\omega}}) \mathbf{r}_C - m \vec{\omega} (\mathbf{r}_C \cdot \dot{\mathbf{r}}_C) + m (\mathbf{r}_C \cdot \vec{\omega}) \dot{\mathbf{r}}_C \\
&= \mathbf{M}_{\text{out},M} - m \vec{\omega} (\mathbf{r}_C \cdot \dot{\mathbf{r}}_C) = \mathbf{M}_{\text{out},M} - \frac{1}{2} m \vec{\omega} \frac{d r_C^2}{dt}\\
&= \mathbf{M}_{\text{out},M} - \frac{1}{2} \vec{\omega} \frac{d}{dt} (m r_C^2) = \mathbf{M}_{\text{out},M} - \frac{1}{2} \vec{\omega} \frac{d I_M}{dt}\\
&= \mathbf{M}_{\text{out},M} - \frac{1}{2} \vec{\omega} \frac{d I_M}{dt}.
 \end{align*}
$$
将此式右边的第二项移到左边之后，我们即可得到瞬时转动轴定理。

## Part 4 刚体的定点转动

### · 转动惯量张量

上面，我们讨论了刚体在平面，也就是二维空间中的运动。在三维空间中，刚体所能做的最简单的转动为定点转动。此时，我们可以将刚体的运动视作绕原点的转动。而刚体上每一点的速度都可以写作

$$
\mathbf{v}_i(t) = \vec{\omega}_i(t) \times \mathbf{r}_i(t).
$$
下面，我们要论证，角速度  $\vec{\omega}_i(t)$  实际上是一个不依赖于位置的向量。既我们有

$$
\vec{\omega}_i(t) = \vec{\omega}(t)
$$
成立。

任取两个点  $\mathbf{r}_i$  和  $\mathbf{r}_j$ 。先假设它们是共线的。既  $\mathbf{r}_i(t) = \alpha \mathbf{r}_j(t)$ 。这里， $\alpha$  是一个实常数。取对于时间的导数后，我们有

$$
\mathbf{v}_i = \dot{\mathbf{r}}_i(t) = \alpha \dot{\mathbf{r}}_j(t) = \alpha \mathbf{v}_j(t).
$$
由此我们得到

$$
\mathbf{v}_i = \vec{\omega}_i(t) \times \mathbf{r}_i(t) = \alpha [\vec{\omega}_j(t) \times \mathbf{r}_j(t)] = \vec{\omega}_j(t) \times (\alpha \mathbf{r}_j(t)) = \vec{\omega}_j(t) \times \mathbf{r}_i(t).
$$
因此，我们有

$$
\vec{\omega}_i(t) = \vec{\omega}_j(t).
$$
若  $\mathbf{r}_i$  与  $\mathbf{r}_j$  不共线，则我们必须将刚体的约束条件考虑进来。此时，速度  $\mathbf{v}_i$  和  $\mathbf{v}_j$  在两点的连线方向上的投影应该是一样的。即我们有

$$
\mathbf{v}_j \cdot (\mathbf{r}_j - \mathbf{r}_i) = \mathbf{v}_i \cdot (\mathbf{r}_j - \mathbf{r}_i),
$$
或是

$$
\mathbf{v}_j \cdot \mathbf{r}_j - \mathbf{v}_j \cdot \mathbf{r}_i = \mathbf{v}_i \cdot \mathbf{r}_j - \mathbf{v}_i \cdot \mathbf{r}_i.
$$
由于  $\mathbf{v}_i \perp \mathbf{r}_i$ ,  $\mathbf{v}_j \perp \mathbf{r}_j$ ，我们得到

$$
\mathbf{v}_j \cdot \mathbf{r}_i + \mathbf{v}_i \cdot \mathbf{r}_j = 0,
$$
或是

$$
(\vec{\omega}_j \times \mathbf{r}_j) \cdot \mathbf{r}_i + (\vec{\omega}_i \times \mathbf{r}_i) \cdot \mathbf{r}_j = \vec{\omega}_j \cdot (\mathbf{r}_j \times \mathbf{r}_i) + \vec{\omega}_i \cdot (\mathbf{r}_i \times \mathbf{r}_j)
$$

$$
= \vec{\omega}_j \cdot (\mathbf{r}_j \times \mathbf{r}_i) - \vec{\omega}_i \cdot (\mathbf{r}_j \times \mathbf{r}_i) = (\vec{\omega}_j - \vec{\omega}_i) \cdot (\mathbf{r}_j \times \mathbf{r}_i) = 0.
$$

由于  $\mathbf{r}_j \times \mathbf{r}_i$  的任意性，我们得出结论

$$
\vec{\omega}_j = \vec{\omega}_i.
$$
显然，在定点转动的情况下，通过原点  $O$  并与  $\vec{\omega}(t)$  平行的直线既是瞬时转动轴。在此轴的各点处，速度皆为零。但是加速度不一定为零。

由于定点转动时的角速度是向量。它们的加法满足熟知的平行四边形法则。因此，在实验室系中取好直角坐标系后，做定点转动的刚体的角动量可以被写作

$$
\begin{align*}
\mathbf{L} &= \sum_i \mathbf{r}_i \times (m_i \mathbf{v}_i) = \sum_i m_i \mathbf{r}_i \times (\vec{\omega}(t) \times \mathbf{r}_i) = \sum_i m_i \left[ (\vec{\omega}(t) \cdot \mathbf{r}_i) \mathbf{r}_i - \mathbf{r}_i \vec{\omega}(t) \cdot \mathbf{r}_i \right]\\
&= \sum_i m_i \left[ (\omega_x \mathbf{i} + \omega_y \mathbf{j} + \omega_z \mathbf{k}) (x_i^2 + y_i^2 + z_i^2) \right. 
\left. - (x_i \mathbf{i} + y_i \mathbf{j} + z_i \mathbf{k}) (\omega_x x_i + \omega_y y_i + \omega_z z_i) \right]
\end{align*}
$$
比较两边的分量后，我们有

$$
L_x = I_{xx} \omega_x + I_{xy} \omega_y + I_{xz} \omega_z, \quad L_y = I_{yx} \omega_x + I_{yy} \omega_y + I_{yz} \omega_z,
$$

$$
L_z = I_{zx} \omega_x + I_{zy} \omega_y + I_{zz} \omega_z.
$$

这里，
$$
I_{xx} = \sum_i m_i (r_i^2 - x_i^2) = \sum_i m_i (y_i^2 + z_i^2) = \iiint \rho(x,y,z)(y^2 + z^2)  dxdydz, \\
I_{yy} = \sum_i m_i (r_i^2 - y_i^2) = \sum_i m_i (x_i^2 + z_i^2) = \iiint \rho(x,y,z)(x^2 + z^2)  dxdydz, \\
I_{zz} = \sum_i m_i (r_i^2 - z_i^2) = \sum_i m_i (x_i^2 + y_i^2) = \iiint \rho(x,y,z)(x^2 + y^2)  dxdydz, \\
I_{xy} = -\sum_i m_i x_i y_i = -\iiint \rho(x,y,z) xy  dxdydz, \\
I_{xz} = -\sum_i m_i x_i z_i = -\iiint \rho(x,y,z) xz  dxdydz, \\
I_{yx} = -\sum_i m_i y_i x_i = -\iiint \rho(x,y,z) yx  dxdydz, \\
I_{yz} = -\sum_i m_i y_i z_i = -\iiint \rho(x,y,z) yz  dxdydz, \\
I_{zx} = -\sum_i m_i z_i x_i = -\iiint \rho(x,y,z) zx  dxdydz, \\
I_{zy} = -\sum_i m_i z_i y_i = -\iiint \rho(x,y,z) zy  dxdydz.
$$
利用矩阵的记号，我们现在可以将上述方程改写作
$$
\begin{pmatrix} L_x \\ L_y \\ L_z \end{pmatrix} = \begin{pmatrix} I_{xx} & I_{xy} & I_{xz} \\ I_{yx} & I_{yy} & I_{yz} \\ I_{zx} & I_{zy} & I_{zz} \end{pmatrix} \begin{pmatrix} \omega_x \\ \omega_y \\ \omega_z \end{pmatrix}.
$$
其中的  $3 \times 3$  的矩阵，在文献中被称为转动惯量张量。它是实对称矩阵。当刚体的质量分布具有某些对称性的时候，它的形式可以被简化。

### · 例题

对于均匀分布的球体，我们有
$$
I_{xx} = I_{yy} = I_{zz} = I,
$$
和

$$
I_{xy} = I_{xz} = \cdots = I_{zx} = I_{zy} = 0.
$$
而对于一个对称陀螺，我们则有

$$
I_{xx} = I_{yy} = I_1, \quad I_{zz} = I_2,
$$
和

$$
I_{xy} = I_{xz} = \cdots = I_{zx} = I_{zy} = 0.
$$
以对称陀螺为例。当陀螺的旋转轴与  $z$  轴重合时，我们有

$$
\vec{\omega} = \omega_z \mathbf{k}.
$$
因此，其角动量为

$$
\begin{pmatrix} L_x \\ L_y \\ L_z \end{pmatrix} = \begin{pmatrix} I_1 & 0 & 0 \\ 0 & I_1 & 0 \\ 0 & 0 & I_3 \end{pmatrix} \begin{pmatrix} 0 \\ 0 \\ \omega \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ I_3 \omega \end{pmatrix},
$$
或是

$$
\mathbf{L} = I_3 \vec{\omega}.
$$
由于刚体的总角速度是一个向量，通常它可以被分解成几个分角速度之和。即我们有

$$
\vec{\omega} = \sum_j^K \vec{\omega}_j,
$$
相应地，刚体的总角动量可以被写作

$$
\begin{align*}
\mathbf{L} &= \sum_{i=1}^{N} m_i \mathbf{r}_i \times \mathbf{v}_i = \sum_{i=1}^{N} m_i \mathbf{r}_i \times (\vec{\omega} \times \mathbf{r}_i) \\
&= \sum_{i=1}^{N} m_i \mathbf{r}_i \times \left( \sum_{j=1}^{K} \vec{\omega}_j \times \mathbf{r}_i \right) = \sum_{j=1}^{K} \left[ \sum_{i=1}^{N} m_i \mathbf{r}_i \times (\vec{\omega}_j \times \mathbf{r}_i) \right] \\
&= \sum_{j=1}^{K} \mathbf{L}_j. 
\end{align*}
$$
这里，

$$
\mathbf{L}_j = \sum_{i=1}^{N} m_i \mathbf{r}_i \times (\vec{\omega}_j \times \mathbf{r}_i)
$$
是刚体由于角速度分量  $\vec{\omega}_j$  所导致的角动量。

例如，陀螺的定点转动角速度可以分解为自转角速度，进动角速度和章动角速度。我们先考察自转轴为水平方向，进动方向竖直向上。

为了方便，我们取 y-轴与自转轴重合，并设其转动惯量为  $I_c$ 。因此，由自转角速度  $\vec{\omega}_s$  引起的角动量为
$$
\mathbf{L}_s = I_s \vec{\omega}_s = I_s \mathbf{j}.
$$
而进动角速度则为

$$
\vec{\Omega} = \Omega \mathbf{k},
$$
方向沿 z- 轴。由它引起的角动量  $\mathbf{L}_\Omega$  由下式

$$
\begin{pmatrix} L_x \\ L_y \\ L_z \end{pmatrix} = \begin{pmatrix} \bar{I}_{xx} & \bar{I}_{xy} & \bar{I}_{xz} \\ \bar{I}_{yx} & \bar{I}_{yy} & \bar{I}_{yz} \\ \bar{I}_{zx} & \bar{I}_{zy} & \bar{I}_{zz} \end{pmatrix} \begin{pmatrix} 0 \\ 0 \\ \Omega \end{pmatrix} = \begin{pmatrix} \bar{I}_{xz} \Omega \\ \bar{I}_{yz} \Omega \\ \bar{I}_{zz} \Omega \end{pmatrix},
$$
或是

$$
\mathbf{L}_\Omega = \bar{I}_{zz} \Omega \mathbf{i} + \bar{I}_{yz} \Omega \mathbf{j} + \bar{I}_{zz} \Omega \mathbf{k}.
$$
另外一方面，利用陀螺的对称性，我们可以很容易地看到

$$
\bar{I}_{xz} = \bar{I}_{yz} = 0.
$$
因此，我们最后有

$$
\mathbf{L}_\Omega = \bar{I}_{zz} \Omega \mathbf{k}.
$$
在稳定转动的情况下， $\mathbf{L}_\Omega$  是恒定的，而  $\mathbf{L}_s$  则绕着 z- 轴做进动。这一进动所需要的外力矩是由过陀螺质心的重力矩提供的。

既我们有
$$
\frac{d\mathbf{L}_s}{dt} = \mathbf{M}_{\text{gravity}} = -mgl_c \mathbf{i}.
$$
另一方面，我们从图中看出

$$
\frac{d\mathbf{L}_s}{dt} = -L_s \Omega \mathbf{i}.
$$
比较两式后，我们得到

$$
L_s \Omega = mgl_c,
$$
或是

$$
\Omega = \frac{mgl_c}{L_s} = \frac{mgl_c}{I_s \omega_s}.
$$
而陀螺在固定点处所受外力的竖直分量为  $N_\perp = mg$ ，其水平分量则提供刚体质心的向心加速度。因此，我们有

$$
\mathbf{N}_\parallel = -m l_c \Omega^2 \mathbf{j} = -\frac{m^3 g^2 l_c^3}{I_s^2 \omega_s^2} \mathbf{j}.
$$
它是一个其方向随陀螺一起转动的水平力。

若陀螺的自转轴倾斜向上，我们可以将其自转轴取作 y'- 轴，建立一个相对于地面系的新的坐标系。此时，我们有

$$
\vec{\omega}_s = \omega_s \mathbf{j}', \quad \vec{\Omega} = \Omega \mathbf{k} = \Omega \sin \phi \mathbf{i}' + \Omega \cos \phi \mathbf{k}',
$$
而总角速度  $\vec{\Omega} = \vec{\omega}_s + \vec{\Omega}$  则可以写作

$$
\vec{\Omega} = (\omega_s + \Omega \sin \phi) \mathbf{j}' + \Omega \cos \phi \mathbf{k}' = \vec{\omega}' + \vec{\Omega}'.
$$
相应的角动量则为

$$
\mathbf{L}_{\text{总}} = \mathbf{L}' + \mathbf{L}_\Omega = I_s (\omega_s + \Omega \sin \phi) \mathbf{j}' + \bar{I}_{zz} \Omega \cos \phi \mathbf{k}'.
$$
$\mathbf{L}_{\text{all}}$  对于地面坐标系中  $y$ -轴的分量为

$$
L^y_{\text{总}} = L' \cos \phi - L'_{\Omega} \sin \phi = I_s \omega_s \cos \phi + (I_s - \bar{I}_{zz}) \Omega \cos \phi \sin \phi.
$$
其变化是由通过陀螺质心的重力矩引起的。如同上面的计算所示，我们有

$$
\frac{d L^y_{\text{all}}}{dt} = -L^y_{\text{all}} \Omega = -(I_s \omega_s \cos \phi + (I_s - \bar{I}_{zz}) \Omega \cos \phi \sin \phi) \Omega = -mgl_c \cos \phi,
$$
或是

$$
(I_s \omega_s + (I_s - \bar{I}_{zz}) \Omega \sin \phi) \Omega = mgl_c.
$$
这是没有章动时，稳定状态下进动角速度所满足的代数方程。

如果开始时刚体的进动角速度  $\Omega$  较小，在  $\Delta t$  时间间隔内， $L_y$  由  $\Delta t$  引起的变化量  $\Delta L_y$  小于  $\Delta t$  时间内重力提供的力矩  $M \Delta t$ ，换句话说，除了使得  $L_y$  增长外，剩余的重力矩还可以引起沿 $x$ -轴负方向逐渐增大的角动量 $-L_x$ 。

当  $L_y$  或是  $\Omega$  增大到一定程度后， $\Delta L_y$  将大于  $M \Delta t$ 。此时，陀螺的向下转动将被遏止，改为反向朝上转动。既它获得一个沿  $x$ -轴的角动量  $L_x$ 。这样的过程往复进行，形成所谓章动。
