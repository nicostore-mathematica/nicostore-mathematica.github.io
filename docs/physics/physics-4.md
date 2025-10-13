---
title: Chapter 4 角动量
createTime: 2025/09/18 18:19:38
permalink: /physics/physics-4/
---

## Part 1 角动量定理

### · 定理

在前两章中，从牛顿定律出发，我们导出了封闭力学体系所满足的动量守恒定理以及保守系所满足的机械能守恒定理。在这一章中，我们学习质点系中力矩和角动量的概念。

在高中物理的学习中，我们曾经讨论多天平达到平衡状态时所需满足的条件。它可以被写作


$$
 f_1 l_1 = f_2 l_2. \tag{1} 
$$

这里， $M_1 = f_1 l_1$  和  $M_2 = f_2 l_2$  分别为外力  $f_1$  和  $f_2$  相对于天平支撑点 O 的力矩。值得强调一点的是，此时的  $f_1$  和  $f_2$  是分别垂直于线段  $l_1$  和  $l_2$  的。若  $M_1 \neq M_2$ ，则此系统会绕着 O 点旋转起来。

当外力  $f_1$  和  $f_2$  与  $l_1$  和  $l_2$  不垂直时，力矩由它们在垂直于线段方向的分量来决定，即我们有


$$
 M_1 = |f_1| |l_1| \sin \theta_1, \quad M_2 = |f_2| |l_2| \sin \theta_2. \tag{2} 
$$

此时，天平的平衡条件应当被改写作


$$
 M_1 = |f_1| |l_1| \sin \theta_1 = |f_2| |l_2| \sin \theta_2 = M_2. \tag{3} 
$$

利用矢量积的定义，我们可以将力矩写成一个矢量，即我们有


$$
 \mathbf{M}_i = \mathbf{r}_i \times \mathbf{f}_i. \tag{4} 
$$

下面，我们利用这个定义来研究角动量与力矩的关系。我们从牛顿方程


$$
 m_i \frac{d\mathbf{v}_i}{dt} = \mathbf{f}_i^{\text{out}} + \sum_{j \neq i} \mathbf{f}_{ij}, \quad i = 1, 2, \ldots, N \tag{5} 
$$

出发，将此式的两边与  $mathbf{r}_i$  做点积后，我们得到


$$
m_i \mathbf{r}_i \times \frac{d\mathbf{v}_i}{dt} = \mathbf{r}_i \times \mathbf{f}_i^{\text{out}} + \sum_{j \neq i} \mathbf{r}_i \times \mathbf{f}_{ij}. \tag{6}
$$
现在将公式的两边同时对于  $i$  求和，我们有


$$
\sum_{i=1}^{N} m_i \mathbf{r}_i \times \frac{d\mathbf{v}_i}{dt} = \sum_{i=1}^{N} \mathbf{r}_i \times \mathbf{f}_i^{\text{out}} + \sum_{i=1}^{N} \sum_{j \neq i} \mathbf{r}_i \times \mathbf{f}_{ij}. \tag{7}
$$

先看公式右边的最后一项。由于


$$
\mathbf{f}_{ij} = -\mathbf{f}_{ji}, \tag{8}
$$

故我们有


$$
\sum_{i=1}^{N} \sum_{j \neq i} \mathbf{r}_i \times \mathbf{f}_{ij} = \frac{1}{2} \sum_{i=1}^{N} \sum_{j \neq i} (\mathbf{r}_i - \mathbf{r}_j) \times \mathbf{f}_{ij}. \tag{9}
$$

根据牛顿第三定律，矢量差  $\mathbf{r}_i - \mathbf{r}_j$  是与  $\mathbf{f}_{ij}$  在同一方向上的。因此，它们的直积为零，整个求和项消失了。

现在，我们在回过头来研究方程左边的求和表达式。可以将其改写为


$$
\sum_{i=1}^{N} m_i \mathbf{r}_i \times \frac{d\mathbf{v}_i}{dt} = \sum_{i=1}^{N} m_i \frac{d}{dt} (\mathbf{r}_i \times \mathbf{v}_i) - \sum_{i=1}^{N} m_i \frac{d\mathbf{r}_i}{dt} \times \mathbf{v}_i \tag{10}
$$


$$
= \sum_{i=1}^{N} m_i \frac{d}{dt} (\mathbf{r}_i \times \mathbf{v}_i) - \sum_{i=1}^{N} m_i \mathbf{v}_i \times \mathbf{v}_i.
$$

由于  $\mathbf{v}_i \times \mathbf{v}_i = 0$ ，上式最后变成


$$
\sum_{i=1}^{N} m_i \frac{d}{dt} (\mathbf{r}_i \times \mathbf{v}_i) = \frac{d}{dt} \left( \sum_{i=1}^{N} \mathbf{r}_i \times (m_i \mathbf{v}_i) \right) = \frac{d}{dt} \left( \sum_{i=1}^{N} \mathbf{r}_i \times \mathbf{p}_i \right). \tag{11}
$$

将这些结果代入公式 (7) 后，我们最后得到


$$
\frac{d}{dt} \left( \sum_{i=1}^{N} \mathbf{r}_i \times \mathbf{p}_i \right) = \sum_{i=1}^{N} \mathbf{r}_i \times \mathbf{f}_i^{\text{out}} = \mathbf{M}_{\text{out}}. \tag{12}
$$

这里，


$$
\mathbf{L} \equiv \sum_{i=1}^{N} \mathbf{r}_i \times \mathbf{p}_i, \quad \mathbf{M}_{\text{out}} \equiv \sum_{i=1}^{N} \mathbf{r}_i \times \mathbf{f}_i^{\text{out}} \tag{13}
$$

被分别称为质点系的总角动量和所受外力的合力矩。因此，上面的方程可以被最后写作


$$
\frac{d}{dt} \mathbf{L} = \mathbf{M}_{\text{out}}. \tag{14}
$$

这一结果被称为质点系的角动量定理。特别是当  $\mathbf{M}_{\text{out}} = 0$  时，我们有


$$
\frac{d}{dt} \mathbf{L} = 0,\tag{15}
$$

即体系的总角动量是一个不随时间改变的守恒矢量。

### · 例题

/example/ 试利用角动量守恒定理，证明开普勒第二定律：任一行星和太阳之间的连线，在相等的时间内扫过的面积相等。

![pVbUgbj.png](https://s21.ax1x.com/2025/10/13/pVbUgbj.png)

> 由于行星和太阳之间的相互作用力为向心力，角动量应该是一个守恒量。故我们有
>
>
> $$
> \mathbf{L} = |\mathbf{r} \times \mathbf{p}| = r(mv)\sin\theta = \text{C}.
> $$
>
> 用轨迹弧长对于时间的导数  $ds/dt$  表示速度  $v$ ，我们得到
>
>
> $$
> L = rmv\sin\theta = rm \frac{ds}{dt}\sin\theta 
> $$
>
>
> $$
> = \lim_{\Delta t \to 0} rm \frac{\Delta s}{\Delta t}\sin\theta = \lim_{\Delta t \to 0} m \frac{\Delta s r_{\perp}}{\Delta t} 
> $$
>
>
> $$
> = \lim_{\Delta t \to 0} m \frac{2\Delta S}{\Delta t} = 2m \frac{dS}{dt}.
> $$
>
> 这里，如下图所示， $\Delta S$  为行星和太阳之间的连线，在  $\Delta t$  时间内扫过的面积。因此，我们得到
>
>
> $$
> \frac{dS}{dt} = \frac{L}{2m}.
> $$
>
> 这就是开普勒第二定律。

/example/  质量相同的两个质点置于光滑的桌面上。二者相互距离为  $2a$ 。设在  $t = 0$  时刻，二者分别获得于它们中心的联线方向垂直且互相反向的速度  $v$ 。试求  $t > 0$  时，两个质点之间的距离  $d$ ，对于初始时二者的质心  $O$  点的角速度  $\omega (t)$  和角加速度  $\beta (t)$ 。

> 由于在  $t > 0$  时，两个质点受力均为零，它们在水平面上各自作匀速直线运动。也就是说，它们相对于  $O$  点的坐标为  $(a, vt)$  和  $(-a, -vt)$ 。二者之间的距离为
>
> $$
> d = \sqrt{(2a)^2 + (2vt)^2} = 2\sqrt{a^2 + v^2t^2}.
> $$
> 其中质点 1 相对于  $O$  点的角速度可以通过条件
>
> $$
> \omega r = v \cos \theta = v \frac{a}{r} = v \frac{a}{d/2} = v \frac{a}{\sqrt{a^2 + v^2t^2}}
> $$
> 来决定。由此，我们得到
> $$
> \omega (t) = \frac{v}{r^2} = \frac{av}{a^2 + v^2t^2}.
> $$
> 将其对于时间  $t$  求导后，我们得到
>
> $$
> \beta (t) = \dot{\omega} (t) = \frac{av \cdot (2v^2t)}{(a^2 + v^2t^2)^2} = -\frac{2av^3t}{(a^2 + v^2t^2)^2}.
> $$

## Part 2 质点在有心力场中的运动

### · 数学推导

现在，让我们系统地研究一下质点在有心力场中的运动。

首先，我们知道，此时质点的角动量应是一个守恒量。因此，质点只能在一个固定的平面内运动。因此，我们可以在这个平面内取一个极坐标系。从牛顿第二定律出发，我们有如下的微分方程

$$
 m \left( \frac{d^2r}{dt^2} - r\dot{\theta}^2 \right) = f(r), \quad m \left( 2\dot{r}\dot{\theta} + r \frac{d\theta}{dt^2} \right) = 0. 
$$


第二个公式又可以被改写作

$$
 m \frac{1}{r} \frac{d}{dt} \left( r^2\dot{\theta} \right) = 0. 
$$

因此，我们有

$$
 r^2\dot{\theta} = r(r\dot{\theta}) = rv\theta = \text{const} = \frac{mrv\theta}{m} = \frac{L}{m}.
$$

这只不过是又一次验证了角动量守恒定理而已。

现在，我们再来看第一个方程的推论。它可以被改写作

$$
 f(r) = m \frac{d^2r}{dt^2} - mr\dot{\theta}^2 = m \frac{dr}{dt} - \frac{m^2r^4\dot{\theta}^2}{mr^3}
$$

$$
 = m \frac{dr}{dt} - \frac{L^2}{mr^3} = m\dot{r} - \frac{L^2}{mr^3} = \frac{L^2}{2} \frac{md\dot{r}^2 - L^2}{2dr - mr^3} 
$$

积分后，我们最后得到

$$
\frac{1}{2}mr^2 + \frac{1}{2} \frac{L^2}{mr^2} + U(r) = \text{const}.
$$

注意到  $\dot{r} = v_r$  以及

$$
 \frac{L^2}{mr^2} = \frac{m^2r^4\dot{\theta}^2}{mr^2} = m(r\dot{\theta})^2 = mv\dot{\theta}^2, 
$$
上式又可以被改写为

$$
 \frac{1}{2}m(v_r^2 + v\dot{\theta}^2) + U(r) = \frac{1}{2}mv^2 + U(r) = \text{const}.
$$

这是极坐标系中能量守恒定理的表达式。

从上面的推导，我们可以看到，无论是能量守恒定理还是角动量守恒定理实际上都是牛顿第二定律的一次积分。若定理的条件被满足，则我们可以直接从这些定理出发，而不必再诉诸牛顿第二定律去解决一个具体的问题。

$$
\frac{L^2}{2mr^2}
$$

常被称为离心势能。对于不同的角动量值  $L_1 < L_2 < L_3$ ，我们有如图所示的离心势能曲线。在实际计算中，离心势能  $\frac{L^2}{2mr^2}$  及引力势能  $U(r)$  常被合写在一起，定义成一个有效势能函数

$$
 \tilde{U}(r) = \frac{L^2}{2mr^2} + U(r).
$$

其图形在图 2 中给出。这样做，在研究质点在径向运动时很方便。例如，从图中我们可以看到，当质点的总机械能  $E > 0$  时，水平线  $E$  与  $\tilde{U}(r)$  的曲线仅有一个交点，称为拱点。从公式

$$
\frac{1}{2}mv_r^2 = E - \tilde{U}(r)
$$

> 离心势能和引力势能示意图：
>
> ![pVbUcrQ.png](https://s21.ax1x.com/2025/10/13/pVbUcrQ.png)
>
> 有效适能函数示意图：
>
> ![pVbUWan.png](https://s21.ax1x.com/2025/10/13/pVbUWan.png)
>
> 非稳定平衡点有效势能函数：
>
> ![pVbURVs.png](https://s21.ax1x.com/2025/10/13/pVbURVs.png)

出发，我们看到这一点对应于  $v_r = 0$ 。因此，质点的运动轨迹为一无界开放的曲线。而当  $E < 0$  时，水平线  $E = \text{const}$  与  $\tilde{U}(r)$  的曲线有两个交点。它表示质点做一有界运动。

但是，假若  $\tilde{U}(r)$  的形状是图 4 所示，有一个极大值。那么即使是对于某一个能量  $E$ ，水平线  $E = \text{常数}$  与  $\tilde{U}(r)$  的曲线有两个交点，运动也不会是有界的。这是由于在交点  $r_1$  处，我们有

$$
 \frac{\partial \tilde{U}(r_1)}{\partial r} > 0.
$$

因此，质点的受力为  $f(r_1) = - \tilde{U}'(r_1) < 0$ ，是一个指向左边的力。因此，质点将向原点的方向运动。同理，在  $r_2$  点处，我们有

$$
 f(r_2) = - \tilde{U}(r_2) > 0.
$$

这是一个排斥力。因此，质点将会向无穷远的方向运动。显然，质点的运动不是有界的。

在教科书上讨论了在形为

$$
U(r) = Ar^\alpha
$$
的势场中的质点的运动。特别是对于引力势
$$
U(r) = - \frac{GMm}{r},
$$
我们看到，当其总机械能  $E < 0$  时，质点的运动是有界的。现在，我们要证明，其运动轨迹是一个椭圆。

首先，我们有能量守恒公式

$$
 \frac{1}{2}mv_r^2 = E - \frac{L^2}{2mr^2} + \frac{GMm}{r}. 
$$

由此，我们解出

$$
 v_r = \dot{t} = \sqrt{\frac{2E}{m} + 2G \frac{M}{r} - \frac{L^2}{m^2r^2}}. 
$$

同时

$$
 v_\theta = r\dot{\theta} = \frac{L}{mr} 
$$

成立。因此，我们有

$$
 \frac{dr}{dt} = \frac{dr}{d\theta} \frac{1}{r} \frac{dr}{d\theta} = \frac{L}{mr^2} \frac{dr}{d\theta} = \sqrt{\frac{2E}{m} + 2G \frac{M}{r} - \frac{L^2}{m^2r^2}}.
$$

也就是说

$$
 \frac{dr}{d\theta} = \frac{mr^2}{L} \sqrt{\frac{2E}{m} + 2G \frac{M}{r} - \frac{L^2}{m^2r^2}} 
$$

$$
 = r^2 \sqrt{\left(\frac{GMm^2}{L^2}\right)^2 \left(1 + \frac{2EL^2}{G^2M^2m^3}\right) - \left(\frac{1}{r} - \frac{GMm^2}{L^2}\right)^2}.
$$

令

$$
 \frac{1}{p} = \frac{GMm^2}{L^2}, \quad e^2 = 1 + \frac{2EL^2}{G^2M^2m^3},
$$

则上式可以改写作

$$
 \frac{dr}{d\theta} = r^2 \sqrt{\left(\frac{e}{p}\right)^2 - \left(\frac{1}{r} - \frac{1}{p}\right)^2},
$$


或是

$$
\frac{1}{r^2} \frac{dr}{d\theta} = -\frac{d}{d\theta} = \frac{1}{r} = \sqrt{\left(\frac{e}{p}\right)^2 - \left(\frac{1}{r} - \frac{1}{p}\right)^2}.
$$
又令  $\frac{1}{r} = t$ ，我们可以进一步将上面的公式写作

$$
 -\frac{dt}{d\theta} = \sqrt{\left(\frac{e}{p}\right)^2 - \left(t - \frac{1}{p}\right)^2}. 
$$

求积分后，我们得到

$$
 \int -\frac{d\left(t - \frac{1}{p}\right)}{\sqrt{\left(\frac{e}{p}\right)^2 - \left(t - \frac{1}{p}\right)^2}} = \int d\theta + C_1 = 
$$

或是

$$
\arccos \frac{t - \frac{1}{p}}{\frac{e}{p}}= \theta + C.
$$

因此，我们解得
$$
\frac{1}{r} - \frac{1}{p} = \frac{e}{p} \cos(\theta + C) ,
$$

或是

$$
\frac{1}{r} = \frac{1 + e \cos(\theta + C)}{p}.
$$

取倒数后，我们得到

$$
r = \frac{p}{1 + e \cos(\theta + C) }.
$$

这是一个二次曲线方程。为了确定起见，我们可以令  $C = 0$ 。这样，当  $\theta = 0$  时， $r = r$  近。因此，我们最后有

$$
r = \frac{p}{1 + e \cos \theta}.
$$
这里有几种情况需要分别加以考虑

> (1) 当  $E > 0$  时，我们有
>
> $$
>  e = \sqrt{1 + \frac{2EL^2}{G^2M^2m^3}} > 1. 
> $$
>
> 因此，曲线代表一个双曲线的分支。 $M$  位于内焦点上。
>
> (2) 当  $E = 0$  时，我们有  $e = 1$ 。曲线为抛物线。
>
> (3) 当  $E = 0$  时，我们有  $e < 1$ 。曲线为椭圆。
>
> 我们首先考虑  $E < 0$  的情况。此时，天体的轨道为一椭圆。参量
>
> $$
>  e = \frac{C}{A} = e
> $$
>
> 定义为椭圆的偏心率。并且，我们有
>
> $$
>  C^2 = A^2 - B^2. 
> $$
>
> 顺便一提的是，若用电荷代替质量，并用  $kQq$  代替  $-GMm$ ，则我们上面得到的结论对于静电荷系统同样成立。

### · 例题

/example/ 将太阳的质量记作  $M$ 。试求行星在两长轴端点和短轴端点处的速度  $v_1, v_2$  和  $v_3$ ，继而导出开普勒第三定律。

> 首先，我们有能量守恒关系
>
> $$
> \frac{1}{2}mv_1^2 - \frac{GMm}{A - C} = \frac{1}{2}mv_2^2 - \frac{GMm}{A + C}.
> $$
>
> 以及角动量守恒关系
>
> $$
>  L_1 = L_2. 
> $$
>
> 由于  $L = r \times p$ ，在长轴的两端我们有
>
> $$
>  L_1 = mr_1v_1 = m(A - C)v_1 = L_2 = mr_2v_2 = m(A + C)v_2. 
> $$
>
> 由此，我们解得
>
> $$
>  v_1 = \frac{A + C}{B} \sqrt{\frac{GM}{A}}, \quad v_2 = \frac{A - C}{B} \sqrt{\frac{GM}{A}}. 
> $$
>
> 而在短轴的顶点处，我们有
>
> $$
>  L_3 = r(mv_3) \sin \phi = mv_3(A \sin \phi) = mv_3B.
> $$
>
> 因此，我们有
>
> $$
>  L_3 = mv_3B = L_1 = m(A - C)v_1. 
> $$
>
> 由此我们解得
>
> $$
>  v_3 = \frac{A - C}{B}v_1 = \frac{A^2 - C^2}{B^2} \sqrt{\frac{GM}{A}} = \frac{\sqrt{GM}}{A}. 
> $$
>
> 为了推导开普勒第三定律，我们可以从开普勒第二定律
>
> $$
>  \frac{dS}{dt} = \frac{L}{2m} 
> $$
>
> 出发。积分后，我们得到
>
> $$
> \int dS = S = S = \int \frac{L}{2m} dt + C_1 = \frac{L}{2m} t + C_1.
> $$
>
> 由于  $S(t = 0) = 0$  ，我们有  $C_1 = 0$ 。因此，我们最后得到
>
> $$
>  S = \frac{L}{2m} t.
> $$
>
> 当  $t = T$  时， $S = \pi AB$ 。代入后，我们得到
>
> $$
>  T = \frac{2mS}{L} = \frac{2m \pi AB}{L_3} = \frac{2m \pi AB}{mv_3B}
> $$
>
> $$
>  = \frac{2 \pi A}{v_3} = 2 \pi A \sqrt{\frac{GM}{A}} = \frac{2 \pi}{\sqrt{GM}} A^{3/2}.
> $$
>
> 两边取平方后，我们得到
>
> $$
>  T^2 = \frac{4 \pi^2}{GM} A^3.
> $$
>
> 此即开普勒第三定律
>
> $$
>  \frac{A^3}{T^2} = \frac{GM}{4 \pi^2} = \text{const}. 
> $$
>
> 这是一个今后我们在学习“量子力学”时要用到的公式

结束.

