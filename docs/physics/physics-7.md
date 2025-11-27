---
title: Chapter 7 狭义相对论
createTime: 2025/10/13 16:19:38
permalink: /physics/physics-7/
---

## Part 1 基本假设和运动学理论

### · 基本假设

狭义相对论是在描述电磁学的 Maxwell 方程组确立之后提出的。其原因在于，通过联立求解 Maxwell 方程组，人们可以得到如下的描写在真空中传播的电磁波动方程

$$
\epsilon_0 \mu_0 \frac{\partial^2 \mathbf{E}}{\partial t^2} - \frac{\partial^2 \mathbf{E}}{\partial x^2} - \frac{\partial^2 \mathbf{E}}{\partial y^2} - \frac{\partial^2 \mathbf{E}}{\partial z^2} = \frac{1}{c^2} \frac{\partial^2 \mathbf{E}}{\partial t^2} - \frac{\partial^2 \mathbf{E}}{\partial x^2} - \frac{\partial^2 \mathbf{E}}{\partial y^2} - \frac{\partial^2 \mathbf{E}}{\partial z^2} = 0,
$$
以及

$$
\epsilon_0 \mu_0 \frac{\partial^2 \mathbf{B}}{\partial t^2} - \frac{\partial^2 \mathbf{B}}{\partial x^2} - \frac{\partial^2 \mathbf{B}}{\partial y^2} - \frac{\partial^2 \mathbf{B}}{\partial z^2} = \frac{1}{c^2} \frac{\partial^2 \mathbf{B}}{\partial t^2} - \frac{\partial^2 \mathbf{B}}{\partial x^2} - \partial^2 \mathbf{B} - \partial^2 \mathbf{B} = 0.
$$
这里， $\mathbf{E}(x, y, z, t)$  和  $\mathbf{B}(x, y, z, t)$  为电磁波的电场和磁场强度。常数

$$
c = \frac{1}{\sqrt{\epsilon_0 \mu_0}} = 299792458 \text{m/s}
$$
具有速度的量纲，被定义作电磁波在真空中的传播速度。注意到它等于当时实验上已知的光在真空中的传播速度，Maxwell 提出了光是电磁波的命题。

由于在推导 Maxwell 方程时，并没有特别指定是在哪一个参照系中进行计算的，一个直接的推论是，光速是一个不依赖于参照系的普适常数。换句话说，在两个彼此做匀速直线运动的惯性参照系中，电磁波是以相同的速度传播的。这是与 Galileo 变换公式的结论相矛盾的。有意思的是，光速是普适的这一结论后来被实验物理学家通过实验加以了证实。这就使得人们要么放弃相对性原理，要么放弃 Galileo 变换公式。爱因斯坦选择了后者。

在 1905 年 9 月发表的一篇文章中，爱因斯坦首先提出了狭义相对论的两个基本假设。

> (1) 相对性原理：物理定律在所有的惯性参照系都是等价的。因此，有关运动方程应该具有相同的形式。
>
> (2) 光速不变原理：在所有的参照系中，光在真空中传播的速率皆为  $c$ 。而任何粒子在惯性参照系中的运动速率皆小于或等于光速。

现在，让我们看一看从这两个假设出发，我们可以导出什么结论。

### · 洛伦兹变换

我们考虑两个惯性参照系  $S$  和  $S'$ 。假设  $S'$  系相对于  $S$  系做匀速直线运动，速度为  $V$ 。设在  $t = t' = 0$  时刻，两个参照系的原点  $O$  和  $O'$  重合，并从该处发射一个光脉冲信号。因此，在时刻  $t$  时，这个脉冲在  $S$  系中走过的距离为

$$
L = \sqrt{x^2 + y^2 + z^2} = ct.
$$
同理，它在  $S'$  系中走过的距离为

$$
L' = \sqrt{x'^2 + y'^2 + z'^2} = c't'.
$$
根据光速不变假设，我们有  $c = c'$ 。因此，联合上面两式，我们得到

$$
x^2 + y^2 + z^2 - c^2 t^2 = 0 = x'^2 + y'^2 + z'^2 - c^2 t'^2.
$$
对于这个恒等式，我们可以给出如下的几何解释。引入一个假想的四维空间。令沿着它的四个互相垂直方向的单位向量为  $\mathbf{e}_x$ 、 $\mathbf{e}_y$ 、 $\mathbf{e}_z$  和  $\mathbf{e}_t$ ，并且，我们将这个四维空间中任何一点的位置向量写作

$$
\mathbf{R} = x \mathbf{e}_x + y \mathbf{e}_y + z \mathbf{e}_z + (ict) \mathbf{e}_t.
$$
注意，这里第四个分量（时间分量）为一个虚数。这是与通常的三维向量不同的。仿照通常三维空间中的解析几何学，我们定义四维向量  $\mathbf{R}$  的长度的平方为

$$
\mathbf{R} \cdot \mathbf{R} = x^2 + y^2 + z^2 + (ict)^2 = x^2 + y^2 + z^2 - c^2 t^2.
$$
这一长度被称为四维长度。我们现在可以说，光脉冲信号在物理空间中的运动可以用四维空间中的一条直线来代表。这条直线上的每一点到原点的四维距离都是零。

相应地，我们可以将两个不同参照系  $S$  和  $S'$  中光脉冲的坐标值  $(x, y, z, ict)$  和  $(x', y', z', ict')$  解释作四维空间中同一点  $\mathbf{R}$  相对两组不同坐标轴  $(\mathbf{e}_x, \mathbf{e}_y, \mathbf{e}_z, \mathbf{e}_t)$  以及  $(\mathbf{e}_x', \mathbf{e}_y', \mathbf{e}_z', \mathbf{e}_t')$  的分量。

这是由于方程告诉我们，在四维空间中，这两组坐标给出的光脉冲点到原点的距离是相同的。而从解析几何中我们得知，它们所对应的坐标系是可以通过空间的旋转联系起来的。这就使得我们有可能找到  $(x, y, z, ict)$  与  $(x', y', z', ict')$  的关系。

为了简单起见，我们假设  $S$  系相对于  $S'$  系的运动速度是沿  $\mathbf{e}_x$  方向的。此时，我们可以取  $y = y'$  和  $z = z'$ 。也就是说，我们假设，四维空间的旋转是发生在  $x - ict$  平面内的。因此，四维空间中任一点  $P$  的坐标变换可以写作

$$
x' = x \cos \theta + (ict) \sin \theta, \quad ict' = - x \sin \theta + (ict) \cos \theta, \quad y = y', \quad z = z'.
$$
这里， $\theta$  是两套坐标系  $(\mathbf{e}_x, \mathbf{e}_y, \mathbf{e}_z, \mathbf{e}_t$ )  和  $(\mathbf{e}_x', \mathbf{e}_y', \mathbf{e}_z', \mathbf{e}_t'$ )  中向量  $\mathbf{e}_x$  及  $\mathbf{e}_x'$  之间的夹角。

不难验证，在这种坐标变换下， $P$  点的四维长度不变。事实上，我们有

$$
\begin{align*}
x'^2 + y'^2 + z'^2 - (ict')^2 &= x^2 + y^2 + z^2 - (ict)^2 \\
&= [x \cos \theta + (ict) \sin \theta]^2 + y^2 + z^2 + [-x \sin \theta + (ict) \cos \theta]^2 \\
&= x^2 \cos^2 \theta + 2x(ict) \cos \theta \sin \theta + (ict)^2 \sin^2 \theta + y^2 + z^2 \\
&+ x^2 \sin^2 \theta - 2x(ict) \cos \theta \sin \theta + (ict)^2 \cos^2 \theta \\
&= x^2 + y^2 + z^2 + (ict)^2 = x^2 + y^2 + z^2 - c^2 t^2. 
\end{align*}
$$
因此，光脉冲的运动方程在此变换下自动被满足。

现在，我们来看如何通过已知条件定出  $\theta$  的值。为此，我们考虑  $S'$  参照系原点  $O'$  在  $S$  系中的运动。首先， $O'$  点在  $S'$  系的坐标为  $x' = y' = z' = 0$ 。而在  $S$  参照系中，在时刻  $t$  时，其空间坐标为

$$
x = Vt, \quad y = 0, \quad z = 0.
$$
因此，对于  $O'$  点而言，我们有如下的坐标变换关系

$$
x' = 0 = x \cos \theta + (ict) \sin \theta = Vt \cos \theta + (ict) \sin \theta,
$$

$$
ict' = -x \sin \theta + (ict) \cos \theta = -Vt \sin \theta + (ict) \cos \theta.
$$

从第一个方程，我们解得

$$
-\frac{x}{ict} = -\frac{V}{ic} \frac{\sin \theta}{\cos \theta} = \tan \theta.
$$
进而，我们有

$$
\cos \theta = \frac{1}{\sec \theta} = \frac{1}{\sqrt{1 + \tan^2 \theta}} = \frac{1}{\sqrt{1 - \frac{V^2}{c^2}}},
$$
将这些函数代入方程中，我们得到

$$
x' = x \cos \theta + (ict) \sin \theta = \frac{x}{\sqrt{1 - \frac{V^2}{c^2}}} + \frac{ict \left(\frac{V}{ic}\right)}{\sqrt{1 - \frac{V^2}{c^2}}} = \frac{x - Vt}{\sqrt{1 - \frac{V^2}{c^2}}}
$$

$$
ict' = -x \sin \theta + (ict) \cos \theta = \frac{-x \left(\frac{V}{ic}\right)}{\sqrt{1 - \frac{V^2}{c^2}}} + ict \frac{1}{\sqrt{1 - \frac{V^2}{c^2}}}.
$$

将第二个方程的两边同时除以  $ic$  后，我们得到

$$
t' = \frac{t - x \frac{V}{c^2}}{\sqrt{1 - \frac{V^2}{c^2}}}.
$$
这些变换公式和  $y' = y, z' = z$  一起，被称为 Lorentz 变换公式。从这些公式中，我们可以看到，若要求光速  $c$  在各个惯性参照系中不变的话，则时间在不同的参照系中是不同的。这一点是与 Galileo 变换非常不一样的。

上面，我们利用光速在各个参照系中不变的假设，导出了 Lorentz 变换公式。对于任何一个四维空间中的点的坐标  $(x, y, z, ict)$  而言，除了满足光信号的运动方程

$$
\mathbf{R} \cdot \mathbf{R} = x^2 + y^2 + z^2 - c^2 t^2 = 0
$$
之外，还可能满足

$$
\mathbf{R} \cdot \mathbf{R} = x^2 + y^2 + z^2 - c^2 t^2 > 0,
$$
或是

$$
\mathbf{R} \cdot \mathbf{R} = x^2 + y^2 + z^2 - c^2 t^2 < 0.
$$
前者表示，质点在时刻  $t = 0$  时从原点出发，在  $t$  时刻到达坐标为  $(x, y, z)$  的三维空间位置。这要求它的速度为

$$
v = \sqrt{\frac{x^2 + y^2 + z^2}{t^2}} > c.
$$
但是按照 Einstein 狭义相对论的第二条假设，这在物理上是不可能的。这样的点被称为类空点。相反，第二种可能性描写在时刻  $t = 2$  时从原点出发，以小于光速的速率  $v$  在

$t$  时刻到达坐标为  $(x, y, z)$  的三维空间位置的粒子的运动。这在物理上是可以实现的。这类点被称为类时点。而类空点集合与类时点集合是由满足方程的全体点的集合（代表光信号的全部可能轨迹，被称为光锥面）隔开。

在讨论 Lorentz 变换所导致的一些结果之前，我们要强调一下，四维时空中任何一点的位置向量  $\mathbf{R}$  的模

$$
\mathbf{R} \cdot \mathbf{R} = x^2 + y^2 + z^2 - c^2 t^2
$$
在 Lorentz 变换下都是不变的。今后我们会看到，在适当引入的动量 - 能量向量以及所谓四维力向量的模也具有这样的性质。它们被统称为四维向量（或四维矢量）。今后，我们会看到，四维矢量的概念是非常有用的。

现在，让我们回过头来看一下 Lorentz 变换带来的结论。首先，我们从公式

$$
t' = \frac{t - x \frac{V}{c^2}}{\sqrt{1 - \frac{V^2}{c^2}}}
$$
出发。将此式的两边对于  $t$  求导后，我们有

$$
\frac{dt'}{dt} = \frac{1 - \frac{xV}{c^2}}{\sqrt{1 - \frac{V^2}{c^2}}} = \frac{1 - \frac{v_x V}{c^2}}{\sqrt{1 - \frac{V^2}{c^2}}}.
$$
由此，我们可以导出同一个运动的质点在  $S$  系和  $S'$  系中速度之间的变换关系。例如，我们有

$$
v'_x = \frac{dx'}{dt'} = \frac{dx'}{dt} \frac{dt}{dt'} = \frac{v_x - V}{\sqrt{1 - \frac{v_x V}{c^2}}} \frac{\sqrt{1 - \frac{V^2}{c^2}}} = \frac{v_x - V}{1 - \frac{v_x V}{c^2}}.
$$
同理，我们可得

$$
v'_y = \frac{dy'}{dt'} = v_y \sqrt{\frac{1 - \frac{V^2}{c^2}}{1 - \frac{v_x V}{c^2}}}, \quad v'_z = \frac{dz'}{dt'} = v_z \sqrt{\frac{1 - \frac{V^2}{c^2}}{1 - \frac{v_x V}{c^2}}}.
$$
从表面上看，这些变换公式与我们已经熟知的 Galileo 变换公式

$$
v'_x = v_x - V; \quad v'_y = v_y, \quad v'_z = v_z
$$
非常不同。但是，在  $\frac{V}{c} \to 0$  的极限下，可以很容易地看到，Lorentz 速度变换公式退化到 Galileo 速度变换公式。

作为一个特例，让我们考虑光在两个参照系中的运动。设在  $S$  系中，光沿  $x$  轴运动。因此，我们有  $v_x = c, v_y = 0$  及  $v_z = 0$ 。将之代入 Lorentz 速度变换公式后，我们立刻可得

$$
v'_y = v'_z = 0
$$
以及

$$
v'_x = \frac{c - V}{1 - \frac{cV}{c^2}} = \frac{c - V}{1 - \frac{V}{c}} = \frac{c - V}{\frac{c - V}{c}} = c.
$$
也就是说，光在  $S'$  系中的速度也是  $c$ 。这就使得 Einstein 的光速不变假设成为自洽。

Lorentz 变换的另一个直接推论是所谓时间延缓效应。假设我们有一个在  $S'$  系中静止的时钟同该系一起相对于  $S$  系运动，并且其在  $S'$  参照系中的坐标为  $x' = x'_0$ 。则时钟在两个参照系的读数满足变换关系

$$
t = \frac{t' + \frac{V x'_0}{c^2}}{\sqrt{1 - \frac{V^2}{c^2}}}.
$$
特别是相对于  $S'$  系的时间间隔  $\Delta t' = t'_2 - t'_1$  对应于  $S$  系中的时间间隔

$$
\Delta t = t_2 - t_1 = \frac{t'_2 + \frac{V x'_0}{c^2}}{\sqrt{1 - \frac{V^2}{c^2}}} - \frac{t'_1 + \frac{V x'_0}{c^2}}{\sqrt{1 - \frac{V^2}{c^2}}} = \frac{\Delta t'}{\sqrt{1 - \frac{V^2}{c^2}}}.
$$
由于

$$
\frac{1}{\sqrt{1 - \frac{V^2}{c^2}}} > 1,
$$
故我们有

$$
\Delta t > \Delta t'.
$$
也就是说，在时钟静止的参照系中，其读数相对于其它惯性系而言总是最小的。这一效应称为时间延缓。它是可以通过实验来检验的。

## Part 2 相对论动力学

### · 质能方程

根据 Einstein 的狭义相对性原理，所有的物理定律或运动方程在等价的惯性系中都应该具有相同的表达形式。另外一方面，我们现在又知道，不同惯性系中的空间和时间坐标是通过 Lorentz 变换联系起来的。

而这一变换不改变相应的四维向量的点乘。因此，一个很自然的想法是，所有的运动方程都应该写成两个四维向量的内积的形式。

为了实现这一想法，首先我们看如何改写动量的定义。在三维空间中，一个质点的动量被定义为

$$
\mathbf{p} = m_{0} \mathbf{v} = m_{0} \frac{d\mathbf{r}}{dt}.
$$
这里， $m_{0}$  应被理解为质点的固有质量，即它在与其一起运动的参照系中的静止质量。由于时间间隔  $dt$  不是一个 Lorentz 变换下的不变量，我们必须找一个具有时间量纲的 Lorentz 变换下的不变量来替换它，以构成一个 Lorentz 协变的四维动量（既其内积在 Lorentz 变换下不变）。实际上，我们可以去如下的量来代替  $\Delta t$ 。

$$
\Delta \tau = \frac{1}{c} \Delta s = \frac{1}{c} \sqrt{c^2(\Delta t)^2 - (\Delta x)^2 - (\Delta y)^2 - (\Delta z)^2}
$$

$$
= \frac{1}{c} \sqrt{c^2(t_2 - t_1)^2 - (x_2 - x_1)^2 - (y_2 - y_1)^2 - (z_2 - z_1)^2}.
$$

显然，这是一个在 Lorentz 变换下不变的量。其次，在空间同一点处  $(x_1 = x_2, y_1 = y_2, z_1 = z_2)$ ，我们有

$$
\Delta \tau = \sqrt{(\Delta t)^2} = \Delta t.
$$
因此，它的确是具有时间量纲的量，被称为质点的固有时间。

现在，我们可以重新引入动量的空间分量为

$$
p_{x} = m_{0} \frac{dx}{d\tau} = m_{0} c \frac{dx}{ds} = \frac{m_{0} c \frac{dx}{dt}}{\sqrt{c^2(dt)^2 - (dx)^2 - (dy)^2 - (dz)^2}}
$$

$$
= \frac{m_{0} c \frac{dx}{dt}}{\sqrt{c^2 - v^2}} = \frac{m_{0} v_{x}}{\sqrt{1 - \frac{v^2}{c^2}}},
$$

以及

$$
p_{y} = \frac{m_{0} v_{y}}{\sqrt{1 - \frac{v^2}{c^2}}}, \quad p_{z} = \frac{m_{0} v_{z}}{\sqrt{1 - \frac{v^2}{c^2}}}.
$$
为了构造四维动量的第四个分量，我们仿照上面的定义。令  $x_1 = x, x_2 = y, x_3 = z$  和  $x_4 = ict$ ，则我们有

$$
p_{4} = m_{0} \frac{dx_{4}}{d\tau} = m_{0} c \frac{d(ict)}{\sqrt{c^2 dt^2 - dr^2}} = m_{0} \frac{ic \frac{dt}{dt}}{\sqrt{1 - \frac{v^2}{c^2}}} = i \frac{m_{0} c}{\sqrt{1 - \frac{v^2}{c^2}}} = i \frac{E}{c}.
$$
这里，物理量

$$
E = \frac{m_{0} c^2}{\sqrt{1 - \frac{v^2}{c^2}}}
$$
具有能量量纲，称为质点的能量。

上面的动量表达式看起来有点怪异，但实际上在低速极限  $\frac{v}{c} \sim 0$  下，我们有

$$
p_{x} \approx m_{0} v_{x}, \quad p_{y} \approx m_{0} v_{y}, \quad p_{z} \approx m_{0} v_{z},
$$
即牛顿力学中的表达式。更为重要的是，我们有

$$
p_1^2 + p_2^2 + p_3^2 + p_4^2 = \frac{m_0^2 c^2}{1 - \frac{v^2}{c^2}} - \frac{m_0^2 c^2}{1 - \frac{v^2}{c^2}} = m_0^2 \frac{v^2 - c^2}{1 - \frac{v^2}{c^2}} = m_0^2 c^2 \frac{v^2 - c^2}{c^2 - v^2} = -m_0^2 c^2.
$$
由于光速不变假设，这显然是一个在 Lorentz 变换下不变的量。因此，我们找到了四维协变动量的正确表达式。

从四维协变动量的表达式出发，我们可以得到如下的结论。

> (1) 如果坚持使用牛顿力学中的动量表达式
>
> $$
> p_x = mv_x, \quad p_y = mv_y, \quad p_z = mv_z,
> $$
> 则质点的质量  $m$  应该被写作
>
> $$
> m = \frac{m_0}{\sqrt{1 - \frac{v^2}{c^2}}} > m_0.
> $$
> 换句话说，一旦质点运动起来，其表观质量  $m$  应该大于其静止质量  $m_0$ 。
>
> (2) 我们看到，质点的能量  $E$  是以形式
>
> $$
> E = \frac{m_0 c^2}{\sqrt{1 - \frac{v^2}{c^2}}}
> $$
> 形式出现的。这与我们过去所熟知的质点能量的表达式非常不一样。在低速运动的极限下，前者是否可以退化为后者呢？
>
> 实际上，当  $v \ll c$  时，我们可以利用 Taylor 展开的表达式
>
> $$
> \frac{1}{\sqrt{1 - \frac{v^2}{c^2}}} \approx 1 + \frac{1}{2} \frac{v^2}{c^2} + O\left(\frac{v^4}{c^4}\right)
> $$
> 近似得到
>
> $$
> E = \frac{m_0 c^2}{\sqrt{1 - \frac{v^2}{c^2}}} \approx m_0 c^2 \left(1 + \frac{1}{2} \frac{v^2}{c^2}\right) = m_0 c^2 + \frac{1}{2} m_0 v^2.
> $$
> 公式的第二项是我们熟知的牛顿力学中质点动能的表达式。而第一项则是牛顿力学中未曾出现过的，称为质点的静止能。因此，在相对论力学中，能量守恒应该被表述为
>
> $$
> E = \sum_{i=1}^{N} \frac{m_i c^2}{\sqrt{1 - \frac{v_i^2}{c^2}}} + \text{Q} = \text{Const}.
> $$
> 在低速度近似下，我们可以将其近似地写作
>
> $$
> E = \sum_{i=1}^{N} m_i c^2 + \frac{1}{2} \sum_{i=1}^{N} m_i v_i^2 + \text{Q} = \text{Const}.
> $$
> 这一公式的一个直接推论是，若在某种物理过程前后，体系中的粒子的总静止能减少了，则粒子的总动能或内能必然增加。这是今天核发电以及核武器的基本原理。

### · 动量关系

当一个质子与一个中子结合成一个氘核时，质量亏损为
$$
\begin{align*}
\Delta M_0 &= M_{\text{proton}} + M_{\text{Neutron}} - M_{\text{tritium;}} \\
&= (1.6726231 + 1.6749286 - 3.3435860) \times 10^{-27}\ \text{kg} \\
&= 3.9657 \times 10^{-30}\ \text{kg}. 
\end{align*}
$$
按照质-能关系，它相当于

$$
\Delta E = \Delta M_0 c^2 = 3.9657 \times 10^{-27} \text{g} \times (3 \times 10^{10})^2 = 3.9657 \times 9 \times 10^{-7} \text{erg}
$$
的能量被释放出来。换算成公斤 - 米 - 秒制，它大致等于  $3.9657 \times 10^{-13}$  焦耳。因此，形成一克分子氘所释放出来的能量大约为

$$
E = 3.9657 \times 10^{-30} \times 6 \times 10^{23} \approx 24 \times 10^{10} \text{J}.
$$
考虑到，一颗爆竹所释放的能量大约为  $10^4$  焦耳。因此，形成 3 克氘过程中释放的能量大约为  $10^7$  颗爆竹的能量。这是一个相当巨大的数字。

从公式

$$
E = \frac{m_0 c^2}{\sqrt{1 - \frac{v^2}{c^2}}}, \quad \mathbf{p} = \frac{m_0 \mathbf{v}}{\sqrt{1 - \frac{v^2}{c^2}}}
$$
出发，我们可以得到如下的质点动量与速度之间的关系

$$
\mathbf{v} = \frac{\mathbf{p} c^2}{E}.
$$
与恒等式

$$
p^2 - \frac{E^2}{c^2} = -m_0^2 c^2,
$$
或是

$$
E^2 = p^2 c^2 + m_0^2 c^4
$$
一起构成了相对论性质点动力学的基础。由此得到的一个直接推论是，自然界可能存在质量为零 ( $m_0 = 0$ ) 的粒子。此时，上面的公式化为

$$
E^2 = p^2 c^2,
$$
或是

$$
E = pc.
$$
因此，我们有

$$
\mathbf{v} = \frac{\mathbf{p} c^2}{E} = \frac{\mathbf{p} c^2}{pc} = c \frac{\mathbf{p}}{p} = c \mathbf{e}_p.
$$
也就是说，这种粒子的速度与光速相同。另一方面，若一个质点的静止质量不为零，则其速率满足方程

$$
|\mathbf{v}| = \frac{|\mathbf{p}| c^2}{E} = \frac{pc^2}{\sqrt{p^2 c^2 + m_0^2 c^4}} < \frac{pc^2}{\sqrt{p^2 c^2}} = \frac{pc^2}{pc} = c.
$$
也就是说，其速率永远小于光速。

今天，我们知道，静止质量为零的粒子有光子、中微子以及引力子。

由于  $(p_x, p_y, p_z, i \frac{E}{c})$  与  $(x, y, z, ict)$  一样构成了一个四维动量向量，故在 Lorentz 变换下，它们具有相同的变换规律。因此，我们可以立刻写出

$$
p'_x = \frac{p_x - \frac{V}{c} E}{\sqrt{1 - \frac{V^2}{c^2}}} = \frac{p_x - \frac{V}{c} E}{\sqrt{1 - \frac{V^2}{c^2}}}, \quad p'_y = p_y, \quad p'_z = p_z,
$$
以及

$$
E' = \frac{E - V p_x}{\sqrt{1 - \frac{V^2}{c^2}}}.
$$
这里， $(p_x, p_y, p_z, i \frac{E}{c})$  和  $(p'_x, p'_y, p'_z, i \frac{E'}{c})$  分别同一个质点的四维动量向量在  $S$  系和  $S'$  系中的分量。而  $S'$  系相对  $S$  系以匀速  $V$  沿  $x$ -轴的方向运动。

现在，我们来看一看，在狭义相对论中，牛顿运动方程应该做怎样的修改。牛顿第二定律告诉我们，质点的运动满足方程

$$
\frac{d\mathbf{p}}{dt} = \mathbf{f}.
$$
这一方程显然在 Lorentz 变换下不是协变的。为了将它改写成协变的形式，我们可以引入所谓四维力  $(\tilde{f}_1, \tilde{f}_2, \tilde{f}_3, \tilde{f}_4)$ 。

在一个给定的惯性参照系中，我们要求  $\tilde{f}_1, \tilde{f}_2$  和  $\tilde{f}_3$  与作用在质点上的外力在与该参照系相连接的坐标系中的投影  $f_x, f_y$  和  $f_z$  分别成正比，而  $\tilde{f}_4$  则由这一四维力的长度在 Lorentz 变换下不变这一条件来决定。相应地，我们应将牛顿方程改写为
$$
\frac{dp_1}{d\tau} = \frac{dp_1}{\frac{1}{c} ds} = \tilde{f}_1
$$
的形式。这样以来，质点的运动方程就成为 Lorentz 变换下协变的了。具体写出来，我们有

$$
\tilde{f}_x = \frac{dp_x}{\frac{1}{c} ds} = \frac{cdp_x}{\sqrt{c^2 dt^2 - (dx)^2 - (dy)^2 - (dz)^2}} = \frac{dp_x}{dt} \frac{dt}{\sqrt{1 - \frac{v^2}{c^2}}} = \frac{f_x}{\sqrt{1 - \frac{v^2}{c^2}}}.
$$
在推导的最后一步，我们利用了在给定惯性系下的牛顿方程

$$
\frac{dp_x}{dt} = f_x.
$$
同理，我们有

$$
\tilde{f}_y = \frac{f_y}{\sqrt{1 - \frac{v^2}{c^2}}}, \quad \tilde{f}_z = \frac{f_z}{\sqrt{1 - \frac{v^2}{c^2}}}.
$$
现在，我们来决定四维力的第四个分量  $\tilde{f}_4$ 。按照定义，我们

$$
\tilde{f}_4 = \frac{dp_4}{\frac{1}{c} ds} = \frac{\frac{1}{c} \frac{dE}{dt}}{\sqrt{1 - \frac{v^2}{c^2}}} = i \frac{\dot{E}}{c} \frac{1}{\sqrt{1 - \frac{v^2}{c^2}}}.
$$
为了检验这样定义的四维力在物理上是否有意义，让我们考察它和四维动量的内积。按照定义，我们有

$$
\sum_{i=1}^{4} p_i \tilde{f}_i = \sum_{i=1}^{4} \frac{dp_i}{\frac{1}{c} ds} = \frac{m_0 f_x v_x + m_0 f_y v_y + m_0 f_z v_z - m_0 c^2 \frac{\dot{E}}{c}}{\left(\sqrt{1 - \frac{v^2}{c^2}}\right)^2} = \frac{m_0 (\mathbf{f} \cdot \mathbf{v} - m_0 \dot{E})}{1 - \frac{v^2}{c^2}}.
$$
另一方面，我们可以很容易地验证，这一公式的左边应该恒等于零。实际上，我们有

$$
\sum_{i=1}^{4} p_i \frac{dp_i}{\frac{1}{c} ds} = \sum_{i=1}^{4} \frac{1}{2} \frac{dp_i^2}{\frac{1}{c} ds} = \sum_{i=1}^{4} \frac{1}{2} \frac{d}{\frac{1}{c} ds} (-m_0^2 c^2) \equiv 0.
$$
也就是说，
$$
 \sum_{i=1}^{4} p_i \tilde{f}_i = \sum_{i=1}^{4} \frac{dp_i}{\frac{1}{c} ds} = \frac{m_0 f_x v_x + m_0 f_y v_y + m_0 f_z v_z - m_0 c^2 \frac{\dot{E}}{c}}{\left(\sqrt{1 - \frac{v^2}{c^2}}\right)^2} = \frac{m_0 (\mathbf{f} \cdot \mathbf{v} - m_0 \dot{E})}{1 - \frac{v^2}{c^2}}. 
$$
右边表达式的分子应该为零。即我们有
$$
m_0 (\mathbf{f} \cdot \mathbf{v} - m_0 \dot{E}) = 0,
$$
或是

$$
\mathbf{f} \cdot \mathbf{v} = \frac{dE}{dt}.
$$
也就是说，外力所做之功的功率，等于质点能量随时间的改变率。这与我们以前的结论是完全一致的。
