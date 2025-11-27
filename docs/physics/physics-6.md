---
title: Chapter 6 机械振动
createTime: 2025/10/13 16:19:38
permalink: /physics/physics-6/
---

## Part 1 机械振动

### · 简谐振动

让我们考虑一个与弹簧连在一起的质点在光滑桌面上的运动。假设弹簧的另外一端固定在墙壁上，而其质量可以忽略不计。若我们将弹簧未变形时质点的坐标取作  $x = 0$ ，根据 Hooke 定律，当质点运动到  $x$  处时质点所受到的力为

$$
\mathbf{F} = -kx\mathbf{i}.
$$
其运动方程为

$$
m \frac{d^2 x}{dt^2} = -kx,
$$
或是

$$
\frac{d^2 x}{dt^2} + \frac{k}{m} x = \frac{d^2 x}{dt^2} + \omega_0^2 x = 0.
$$
这里， $\omega = \sqrt{\frac{k}{m}}$  称为弹簧振子的本征频率。

下面，我们再来考虑一个单摆的运动方程。我们看到，栓在长度为  $l$  的摆线下端的小物体所受到的外力有二：一是重力  $-mg\mathbf{j}$ ，二是摆线对其的拉力  $\mathbf{T}$ 。显然，小物体做的是一个以  $O$  点为圆心， $l$  为半径的圆周运动。因此，它的切向加速度为

$$
a_\tau = \frac{dv}{dt} = \frac{d^2 s}{dt^2} = l \frac{d^2 \theta}{dt^2}.
$$
而合外力在切向的分量则为  $-mg \sin \theta$ 。因此，我们有牛顿方程

$$
ml \frac{d^2 \theta}{dt^2} = -mg \sin \theta.
$$
当小物体在其平衡点附近做微小振动时，我们近似地有  $\sin \theta \approx \theta$ 。因此，上式可以近似地写作

$$
ml \frac{d^2 \theta}{dt^2} + mg \sin \theta \approx ml \frac{d^2 \theta}{dt^2} + mg \theta = 0,
$$
或是

$$
\frac{d^2 \theta}{dt^2} + \tilde{\omega}^2 \theta = 0.
$$
这里， $\tilde{\omega} = \sqrt{\frac{g}{l}}$  称为单摆的振动频率。

综合上面的两个例子，我们看到，有许多振动体系的运动可以由下面的微分方程

$$
\frac{d^2 y(t)}{dt^2} + \Omega^2 y(t) = 0
$$
来描述，这一方程称为简谐振动方程，它的通解可以写作

$$
y(t) = A \cos(\Omega t + \varphi_0).
$$
而相对应的运动被称之为简谐振动。依照惯例， $\Omega$  被称为该体系的固有振动频率。它代表振子的相位在单位时间内的改变量，相应地，振子的振动周期定义作

$$
T = \frac{2\pi}{\Omega}.
$$
而  $A$  和  $\varphi_0$  则是两个需要通过振动的初始条件来确定的量，被分别称为振子的振幅和初相位。 $A$  一般取作一个正数，而  $\varphi_0$  的取值范围则为  $0 \leq \varphi_0 \leq 2\pi$ 。

这里，我们给出通解一个不太直接的推导。首先，我们有

$$
\frac{d^2 y}{dt^2} = \dot{y} \frac{d\dot{y}}{dy} = \frac{1}{2} \frac{d\dot{y}^2}{dy}.
$$
因此，方程可以改写作

$$
\frac{1}{2} \frac{d\dot{y}^2}{dy} = -\Omega^2 y.
$$
将此式两边积分后，我们有

$$
\dot{y}^2 = -\Omega^2 y^2 + C.
$$
不难看出， $C$  是一个大于零的常数。因此，我们从上式得到

$$
\dot{y} = \frac{dy}{dt} = \sqrt{(\sqrt{C})^2 - \Omega^2 y^2},
$$
或是

$$
\int \frac{dy}{\sqrt{(\sqrt{C})^2 - \Omega^2 y^2}} = \int dt + D = t + D.
$$
为了确定起见，我们先取“+”号。利用积分公式

$$
\int \frac{dx}{\sqrt{a^2 - x^2}} = \arcsin \frac{x}{a},
$$
我们立刻可得

$$
\int \frac{dy}{\sqrt{(\sqrt{C})^2 - \Omega^2 y^2}} = \frac{1}{\Omega} \int \frac{dy}{\sqrt{\left(\frac{\sqrt{C}}{\Omega}\right)^2 - y^2}} = \frac{1}{\Omega} \arcsin \frac{\Omega y}{\sqrt{C}} = t + D.
$$
由此方程，我们解得

$$
y(t) = \frac{\sqrt{C}}{\Omega} \sin(\Omega t + \Omega D) = \frac{\sqrt{C}}{\Omega} \cos\left[\frac{\pi}{2} - (\Omega t + \Omega D)\right]
$$

$$
= \frac{\sqrt{C}}{\Omega} \cos\left[-\left(\frac{\pi}{2} - (\Omega t + \Omega D)\right)\right] = \frac{\sqrt{C}}{\Omega} \cos\left[\Omega t + (\Omega D - \frac{\pi}{2})\right].
$$

现在，我们令  $A = \frac{\sqrt{C}}{\Omega}$  及  $\varphi_0 = \Omega D - \frac{\pi}{2}$ ，则上式写成了与上面相同的形式。

至于方程中“-”号的情况，可以仿照上面的方法处理。这里不再重复。

下面，让我们看一看谐振子的机械能是如何同其振幅和频率联系在一起的。我们以弹簧振子为例。

$$
\begin{align*}
E &= E_K + E_P = \frac{1}{2} m \dot{x}^2 + \frac{1}{2} k x^2\\
&= \frac{1}{2} m \left(A \frac{d}{dt} \cos(\Omega t + \varphi_0)\right)^2 + \frac{1}{2} k A^2 \cos^2(\Omega t + \varphi_0)\\
&= \frac{1}{2} m A^2 \Omega^2 \sin^2(\Omega t + \varphi_0) + \frac{1}{2} k A^2 \cos^2(\Omega t + \varphi_0)\\
&= \frac{1}{2} m A^2 \frac{k}{m} \sin^2(\Omega t + \varphi_0) + \frac{1}{2} k A^2 \cos^2(\Omega t + \varphi_0)\\
&= \frac{1}{2} k A^2 \sin^2(\Omega t + \varphi_0) + \frac{1}{2} k A^2 \cos^2(\Omega t + \varphi_0)\\
&= \frac{1}{2} k A^2.\\
\end{align*}
$$
这一关系是普适的，但仅限于经典体系。今后，我们会看到，在量子体系中， $E \sim \Omega$ 。

### · 简谐振动的合成

对于单个简谐振子而言，其初始相位  $\varphi_0$  如何选取并不重要。为了简单起见，我们总可以令它为零。但是，当体系内有多于两个以上的简谐振子共同运动时，彼此之间初始相位的差就会带来影响。让我们来看几个具体的例子。

/example/  沿彼此垂直方向作同一频率的两个简谐振动的合成

> 考虑二维平面内一个质点在力  $\mathbf{F} = -GMm\mathbf{r} = -kr \mathbf{r}$  作用下的运动。在第五章中，我们已经讨论过这一问题。在直角坐标系中，质点的运动方程可以写作
>
> $$
> \frac{d^2 x}{dt^2} + \frac{k}{m} x = \frac{d^2 x}{dt^2} + \Omega^2 x = 0,
> $$
>
> $$
> \frac{d^2 y}{dt^2} + \frac{k}{m} y = \frac{d^2 y}{dt^2} + \Omega^2 y = 0.
> $$
>
> 这一方程组的通解为
>
> $$
> x(t) = A_1 \cos(\Omega t + \varphi_1),
> $$
>
> $$
> y(t) = A_2 \cos(\Omega t + \varphi_2).
> $$
>
> 为了求得质点的运动轨迹，我们需要从这两个方程中消去时间参数  $t$ 。为此，我们先将这两个方程改写作
>
> $$
> \frac{x}{A_1} = \cos(\Omega t + \varphi_1) = \cos \Omega t \cos \varphi_1 - \sin \Omega t \sin \varphi_1,
> $$
>
> $$
> \frac{y}{A_2} = \cos(\Omega t + \varphi_2) = \cos \Omega t \cos \varphi_2 - \sin \Omega t \sin \varphi_2.
> $$
>
> 我们要从这一联立方程组中解出  $\cos \Omega t$  和  $\sin \Omega t$ ，利用行列式解法，我们先计算
>
> $$
> \Delta = \begin{vmatrix} \cos \varphi_1 & -\sin \varphi_1 \\ \cos \varphi_2 & -\sin \varphi_2 \end{vmatrix} = -\cos \varphi_1 \sin \varphi_2 + \sin \varphi_1 \cos \varphi_2 = \sin(\varphi_1 - \varphi_2),
> $$
>
> $$
> \Delta_1 = \begin{vmatrix} \frac{x}{A_1} & -\sin \varphi_1 \\ \frac{y}{A_2} & -\sin \varphi_2 \end{vmatrix} = -\frac{x}{A_1} \sin \varphi_2 + \frac{y}{A_2} \sin \varphi_1,
> $$
>
> $$
> \Delta_2 = \begin{vmatrix} \cos \varphi_1 & \frac{x}{A_1} \\ \cos \varphi_2 & \frac{y}{A_2} \end{vmatrix} = \frac{y}{A_2} \cos \varphi_1 - \frac{x}{A_1} \cos \varphi_2.
> $$
>
> 因此，我们得到
>
> $$
> \cos \Omega t = \frac{\Delta_1}{\Delta} = \frac{1}{\sin(\varphi_1 - \varphi_2)} \left(-\frac{x}{A_1} \sin \varphi_2 + \frac{y}{A_2} \sin \varphi_1\right),
> $$
>
> $$
> \sin \Omega t = \frac{\Delta_2}{\Delta} = \frac{1}{\sin(\varphi_1 - \varphi_2)} \left(-\frac{x}{A_1} \cos \varphi_2 + \frac{y}{A_2} \cos \varphi_1\right).
> $$
>
> 两式平方后相给出
>
> $$
> 1 = \frac{1}{\sin^2(\varphi_1 - \varphi_2)} \left(\frac{x^2}{A_1^2} + \frac{y^2}{A_2^2} - \frac{2xy}{A_1 A_2} (\sin \varphi_1 \sin \varphi_2 + \cos \varphi_1 \cos \varphi_2)\right),
> $$
> 或是
>
> $$
> \sin^2(\varphi_1 - \varphi_2) = \frac{x^2}{A_1^2} + \frac{y^2}{A_2^2} - \frac{2xy}{A_1 A_2} \cos(\varphi_1 - \varphi_2).
> $$
> 这是一个椭圆方程。显然，其具体形状要由初始相位之差  $\Delta \varphi = \varphi_1 - \varphi_2$  来决定。我们有下面几种情况。
>
> > (1)  $\Delta \varphi = 0$ 。此时，我们称两个振动同相位，并且有  $\sin \Delta \varphi = 0, \cos \Delta \varphi = 1$ 。而上面的质点运动方程则退化为
> >
> > $$
> > \left(\frac{x}{A_1} - \frac{y}{A_2}\right) = 0.
> > $$
> > 或是
> >
> > $$
> > \frac{x}{A_1} = \frac{y}{A_2}.
> > $$
> > 换句话说，质点的运动轨迹为一直线，其斜率为  $A_1/A_2$ 。
> >
> > (2) 若  $\Delta \varphi = \varphi_1 - \varphi_2 = \pi$ ，我们称两个振动是反相位，并且有  $\sin \Delta \varphi = 0, \cos \Delta \varphi = -1$ 。此时，上面的质点运动方程退化为
> >
> > $$
> > \left(\frac{x}{A_1} + \frac{y}{A_2}\right) = 0,
> > $$
> > 或是
> >
> > $$
> > \frac{x}{A_1} = -\frac{y}{A_2},
> > $$
> > 质点的运动轨迹亦为一直线，但其斜率为  $-A_1/A_2$ 。
> >
> > (3) 一般而言，若  $\pi > \varphi_1 - \varphi_2 > 0$ ，我们称相位  $\varphi_1$  超前于相位  $\varphi_2$ 。而若  $-\pi < \varphi_1 - \varphi_2 < 0$  成立，则称相位  $\varphi_1$  落后于相位  $\varphi_2$ 。自然，若  $|\varphi_1 - \varphi_2| > \pi$ ，我们可以先减去  $2\pi$  的一个适当的整数倍，以使得上式之一成立。
> >
> > 无论如何，此时质点的运动轨迹总是一个椭圆。只不过当  $\varphi_1$  超前于相位  $\varphi_2$  时，质点是逆时针运动；而当  $\varphi_1$  落后于相位  $\varphi_2$  时，质点做顺时针运动。
>
> 从这个例子，我们可以看到，两个简谐振子初始相位之差会带来明显的物理后果。为了加深印象，我们再来看另外两个例子。

(1) 质点同时参与两个同方向，同频率，但是不同振幅的简谐振动。这两个振动分别由下式给出。

$$
x_1(t) = A_1 \cos(\omega t + \varphi_{10}), \quad x_2(t) = A_2 \cos(\omega t + \varphi_{20}).
$$

> 此时，该质点的合成运动为
>
> $$
> \begin{align*}
> x(t) &= x_1(t) + x_2(t) = A_1 \cos(\omega t + \varphi_{10}) + A_2 \cos(\omega t + \varphi_{20}) \\
> &= A_1 \cos \omega t \cos \varphi_{10} - A_1 \sin \omega t \sin \varphi_{10} + A_2 \cos \omega t \cos \varphi_{20} - A_2 \sin \omega t \sin \varphi_{20} \\
> &= (A_1 \cos \varphi_{10} + A_2 \cos \varphi_{20}) \cos \omega t - (A_1 \sin \varphi_{10} + A_2 \sin \varphi_{20}) \sin \omega t. 
> \end{align*}
> $$
> 若令
>
> $$
> A_1 \cos \varphi_{10} + A_2 \cos \varphi_{20} = A \cos \varphi_0, \quad A_1 \sin \varphi_{10} + A_2 \sin \varphi_{20} = A \sin \varphi_0,
> $$
> 则上式可以重新改写为
>
> $$
> x(t) = A \cos \varphi_0 \cos \omega t - A \sin \varphi_0 \sin \omega t = A \cos(\omega t + \varphi_0).
> $$
> 为了明确地写出  $A$  和  $\varphi_0$ ，我们可以把两个公式的两边平方后相加后得到
>
> $$
> \begin{align*}
> A^2 \cos^2 \varphi_0 + A^2 \sin^2 \varphi_0 &= A^2 \\
> &= (A_1 \cos \varphi_{10} + A_2 \cos \varphi_{20})^2 + (A_1 \sin \varphi_{10} + A_2 \sin \varphi_{20})^2 \\
> &= A_1^2 + A_2^2 + 2A_1A_2 (\cos \varphi_{10} \cos \varphi_{20} + \sin \varphi_{10} \sin \varphi_{20})\\
> &= A_1^2 + A_2^2 + 2A_1A_2 \cos(\varphi_{10} - \varphi_{20}).
> \end{align*}
> $$
> 因此，我们有
>
> $$
> A = \sqrt{A_1^2 + A_2^2 + 2A_1A_2 \cos(\varphi_{10} - \varphi_{20})},
> $$
> 以及
>
> $$
> \tan \varphi_0 = \frac{A_1 \sin \varphi_{10} + A_2 \sin \varphi_{20}}{A_1 \cos \varphi_{10} + A_2 \cos \varphi_{20}}.
> $$
> 由此可见，在同一方向上以同一振动频率运动的两个简谐振子的合成运动仍为一简谐振动，只不过改变了振幅和初始相位。这一结果在研究声波和电磁波的干涉现象时非常有用。下面，让我们考虑几个特殊相位差的选取。
>
> > (i) 当  $\varphi_{20} - \varphi_{10} = 2n\pi$  时， $\cos(\varphi_{20} - \varphi_{10}) = 1$ 。此时，我们有
> >
> > $$
> > A = A_2 + A_1.
> > $$
> > 既合成振动的振幅取极大值。
> >
> > (ii) 当  $\varphi_{20} - \varphi_{10} = (2n + 1)\pi$  时， $\cos(\varphi_{20} - \varphi_{10}) = -1$ 。此时，我们有
> >
> > $$
> > A = |A_2 - A_1|.
> > $$
> > 既合成振动的振幅取极小值。
> >
> > (iii) 在一般情况下，我们有
> >
> > $$
> > |A_2 - A_1| < A < A_1 + A_2.
> > $$

(2) 两个同方向运动，但是振动频率不同的简谐振动的合成。

> 假设同一个质点同时参与了两个同方向，但是不同频率（分别为  $\omega_1$  和  $\omega_2$ ）的简谐振动。我们考虑质点的合成振动形式。
>
> 为了突出这一合成运动的特点，我们仅考虑最简单的情况，即假设
>
> $$
> A_1 = A_2 = A, \quad \varphi_1 = \varphi_2 = 0.
> $$
> 也就是说，两个简谐振动可以写成
>
> $$
> x_1(t) = A \cos \omega_1 t, \quad x_2(t) = A \cos \omega_2 t
> $$
> 的形式。因此，合成振动随时间的改变为
>
> $$
> x(t) = x_1(t) + x_2(t) = A \cos \omega_1 t + A \cos \omega_2 t
> $$
>
> $$
> = 2A \cos \left(\frac{\omega_1 - \omega_2}{2} t\right) \cos \left(\frac{\omega_1 + \omega_2}{2} t\right).
> $$
>
> 显然，这已经不再是一个简谐振动的表达式了。
>
> 一个极为重要的特例是，两个分振动的频率  $\omega_1$  和  $\omega_2$  都很大，但是二者之差却很小，即
>
> $$
> |\omega_2 - \omega_1| \ll \omega_1 + \omega_2
> $$
> 的情况。此时，因子  $2A \cos \left(\frac{\omega_1 - \omega_2}{2} t\right)$  随时间的改变要比因子  $\cos \left(\frac{\omega_1 + \omega_2}{2} t\right)$  缓慢许多。因此，可以将合成运动近似地看作振幅按照
>
> $$
> \tilde{A} \equiv 2A \cos \left(\frac{\omega_1 - \omega_2}{2} t\right)
> $$
> 规律做缓慢变化，而角频率为  $\frac{\omega_1 + \omega_2}{2}$  的“准简谐振动”。合成运动的这种合振幅时而加强，时而减弱的现象，称为“拍”。

为了研究更为一般的振动体系的运动，我们需要做一点数学准备。

> (1) 简谐振动的复数表达方式
>
> 我们知道，一个复数可以被写成
>
> $$
> z = re^{i\theta} = r \cos \theta + ir \sin \theta
> $$
> 的形式，特别其实部为  $r \cos \theta$ ，记作
>
> $$
> \text{Re } z = r \cos \theta.
> $$
> 因此，一个简谐振动的表达式
>
> $$
> x(t) = A \cos(\omega t + \varphi_0),
> $$
> 可以被重新写作
>
> $$
> x(t) = \text{Re} \left(A e^{i\omega t + i\varphi_0}\right).
> $$
> 应用这一表达式，我们可以大大简化上面所做过的各种运算。
>
> 例如，为了计算两个简谐振动
>
> $$
> x_1(t) = A_1 \cos(\omega t + \varphi_1) = \text{Re} \left(A_1 e^{i\omega t + i\varphi_1}\right),
> $$
>
> $$
> x_2(t) = A_2 \cos(\omega t + \varphi_2) = \text{Re} \left(A_2 e^{i\omega t + i\varphi_2}\right)
> $$
>
> 的合成运动，我们可以先计算
>
> $$
> \begin{align*}
> \tilde{z}(t) &= A_1 e^{i\omega t + i\varphi_1} + A_2 e^{i\omega t + i\varphi_2} = A_1 e^{i\omega t} e^{i\varphi_1} + A_2 e^{i\omega t} e^{i\varphi_2}\\ 
> &= \left(A_1 e^{i\varphi_1} + A_2 e^{i\varphi_2}\right) e^{i\omega t}\\
> & \equiv A e^{i\omega t + i\varphi}. 
> \end{align*}
> $$
> 其中， $A$  和  $\varphi$  可以通过平行四边形法则来决定。我们有
>
> $$
> A = \sqrt{A_1^2 + A_2^2 - 2A_1A_2 \cos[\pi - (\varphi_2 - \varphi_2)]} = \sqrt{A_1^2 + A_2^2 + 2A_1A_2 \cos(\varphi_2 - \varphi_2)},
> $$
> 而  $\varphi$  则由下式
>
> $$
> A e^{i\varphi} = A \cos \varphi + i A \sin \varphi = (A_1 \cos \varphi_1 + A_2 \cos \varphi_2) + i (A_1 \sin \varphi_1 + A_2 \sin \varphi_2)
> $$
> 来决定。比较公式两边的实部和虚部后，我们有
>
> $$
> A \cos \varphi = A_1 \cos \varphi_1 + A_2 \cos \varphi_2,
> $$
>
> $$
> A \sin \varphi = A_1 \sin \varphi_1 + A_2 \sin \varphi_2.
> $$
>
> 由此，我们得到
>
> $$
> \tan \varphi = \frac{A_1 \sin \varphi_1 + A_2 \sin \varphi_2}{A_1 \cos \varphi_1 + A_2 \cos \varphi_2}.
> $$
> 最后，我们取  $\tilde{z}$  的实部，从而得到合成振动的表达式。既我们有
>
> $$
> x(t) = \text{Re} \, \tilde{z}(t) = A \cos(\omega t + \varphi).
> $$
> 这与我们前面得到的公式是完全一样的。
>
> (2) 振动的傅立叶 (Fourier) 分解
>
> 上面，我们研究了简谐振动。这是一种最基本的振动形式。在实际的物理世界中，我们所遇到的周期运动往往要复杂得多。人们不禁要问，这些振动可否被分解成不同简谐振动的叠加。答案是肯定的。
>
> 法国数学家傅立叶证明了，任何一个周期函数  $f(t)$ ，若其运动周期为  $T$ ，则它可以被写作
>
> $$
> f(t) = A_0 + \sum_{k=1}^{\infty} \left(A_k \cos k\omega_0 t + B_k \sin k\omega_0 t\right) = A_0 + \sum_{k=1}^{\infty} \tilde{A}_k \cos(k\omega_0 t + \varphi_k),
> $$
> 这里， $\omega_0 = \frac{2\pi}{T}$ ，而  $A_0$ 、 $A_k$  和  $B_k$  则是一些常数，称为傅立叶系数。 $\tilde{A}_k$  和  $\varphi_k$  则可通过关系
>
> $$
> \tilde{A}_k = \sqrt{A_k^2 + B_k^2}, \quad \tan \varphi_k = -\frac{B_k}{A_k}
> $$
> 来决定。
>
> 我们不准备在这里给出这一定理的证明，而仅限于说明一下证明的思路。可以很容易地验证，三角函数系
>
> $$
> 1, \cos \theta, \sin \theta, \cos 2\theta, \sin 2\theta, \cdots, \cos n\theta, \sin n\theta, \cdots
> $$
> 在区间  $[- \pi, \pi]$  上的积分分满足关系
>
> $$
> \int_{-\pi}^{\pi} 1 \cdot \cos \theta d\theta = \int_{-\pi}^{\pi} 1 \cdot \sin \theta d\theta = 0,
> $$
>
> $$
> \int_{-\pi}^{\pi} \cos m\theta \cos n\theta d\theta = \int_{-\pi}^{\pi} \sin m\theta \sin n\theta d\theta = 0,
> $$
>
> 若  $m \neq n$  成立。而当  $m = n$  时，我们有
>
> $$
> \int_{-\pi}^{\pi} \cos^2 n\theta \, d\theta = \int_{-\pi}^{\pi} \sin^2 n\theta \, d\theta = \pi.
> $$
> 最后，对于任何  $m$  和  $n$ ，我们都有
>
> $$
> \int_{-\pi}^{\pi} \cos m\theta \sin n\theta \, d\theta = 0.
> $$
> 利用这些恒等式，我们就可以唯一地定出  $f(t)$  展开式中的傅立叶系数。它们由下式给出
>
> $$
> A_0 = \frac{1}{T} \int_{-\frac{T}{2}}^{\frac{T}{2}} f(t) dt, \quad A_k = \frac{2}{T} \int_{-\frac{T}{2}}^{\frac{T}{2}} f(t) \cos(k\omega_0 t) dt, \quad B_k = \frac{2}{T} \int_{-\frac{T}{2}}^{\frac{T}{2}} f(t) \sin(k\omega_0 t) dt.
> $$
> 利用欧拉 (Euler) 公式
>
> $$
> \cos \theta = \frac{e^{i\theta} + e^{-i\theta}}{2}, \quad \sin \theta = \frac{e^{i\theta} - e^{-i\theta}}{2i}
> $$
> 我们可以将上式改写为
>
> $$
> f(t) = \sum_{k=-\infty}^{\infty} C_k \exp(ik\omega_0 t).
> $$
> 此式中的展开系数  $C_k$  可以由下式
>
> $$
> C_k = \frac{1}{T} \int_{-\frac{T}{2}}^{\frac{T}{2}} f(t) \exp(-ik\omega_0 t) dt
> $$
> 来决定。
>
> 总之，任何一个复杂的周期性运动都可以分解成无穷多个简谐振动的叠加。其中， $k = 1$  的简谐振动称为基频振动。而  $k = 2, 3 \cdots$  的简谐振动，则被称为基频振动的谐波。人们常常以这些振动的频率
>
> $$
> \nu_k = \frac{k}{T}
> $$
> 为横坐标，以相应的展开系数  $C_k$  绝对值的平方为纵坐标做图。所得到的图称为振动  $f(t)$  的频谱分析图。这一图形在实际应用中往往比振动  $f(t)$  本身的图形还有用。

### · 谐振子的阻尼振动

我们上面研究的是简谐振子的理想运动情况。在实际的物理运动中，摩擦力和黏滞阻力的影响总是不可避免地存在的。在这些耗散力作用下的简谐振子的运动称为阻尼振动。

当物体的运动速度不大时，阻尼力可以被写作

$$
\mathbf{f}_\nu = -\gamma \mathbf{v}.
$$
考虑了阻尼力的影响之后，弹簧振子的运动方程可以被重新写作

$$
m \frac{d^2 x}{dt^2} = -kx - \gamma \frac{dx}{dt},
$$
或是

$$
m \frac{d^2 x}{dt^2} + kx + \gamma \frac{dx}{dt} = 0.
$$
令  $\omega_0^2 = \frac{k}{m}, 2\beta = \frac{\gamma}{m}$ ，我们有

$$
\frac{d^2 x}{dt^2} + 2\beta \frac{dx}{dt} + \omega_0^2 x = 0.
$$
我们取这个方程如下形式的解

$$
\tilde{x}(t) = e^{\lambda t}
$$
的解。将其代入后，我们得到代数方程

$$
\lambda^2 + 2\beta\lambda + \omega_0^2 = 0.
$$
这个方程有两个根

$$
\lambda = -\beta \pm \sqrt{\beta^2 - \omega_0^2}.
$$
因此，这个微分方程的通解为

$$
\tilde{x}(t) = A_1 e^{-(\beta + \sqrt{\beta^2 - \omega_0^2})t} + A_2 e^{-(\beta - \sqrt{\beta^2 - \omega_0^2})t}
$$

$$
= e^{-\beta t} \left(A_1 e^{-\sqrt{\beta^2 - \omega_0^2}t} + A_2 e^{\sqrt{\beta^2 - \omega_0^2}t}\right).
$$

根据阻尼系数  $\beta = \frac{\gamma}{2m}$  的大小，存在着三种情况。

> (1) 阻尼振荡。当  $\beta$  较小，即  $\beta^2 < \omega_0^2$  时， $\sqrt{\beta^2 - \omega_0^2}$  为一个虚数。此时，我们有
>
> $$
> \tilde{x}(t) = e^{-\beta t} \left(A_1 e^{i\sqrt{\omega_0^2 - \beta^2}t} + A_2 e^{-i\sqrt{\omega_0^2 - \beta^2}t}\right).
> $$
> 取其实部，我们得到  $x(t) = \text{Re} \tilde{x}(t) = A e^{-\beta t} \cos(\omega t + \varphi_0)$ 。这里， $\omega = \sqrt{\omega_0^2 - \beta^2}$  称为表观角频率。这是一种准简谐振动模式，即振幅  $A_0 e^{-\beta t}$  随时间增大不断减小。
>
> (2) 过阻尼振荡。当阻尼较大，即  $\beta^2 > \omega_0^2$  时， $\sqrt{\beta^2 - \omega_0^2}$  为一个实数。此时，我们有
>
> $$
> \tilde{x}(t) = C_1 e^{-\beta t - \sqrt{\beta^2 - \omega_0^2}t} + C_2 e^{-\beta t + \sqrt{\beta^2 - \omega_0^2}t}.
> $$
> 这是一个实函数，故我们有  $x(t) = \text{Re} \tilde{x}(t) = \tilde{x}(t)$ 。这种运动没有振荡。随着时间  $t$  的增大， $x(t) \to 0$ ，即质点很快趋于平衡位置。
>
> (3) 临界阻尼运动。当  $\beta^2 = \omega_0^2$  时，方程的解为
>
> $$
> \tilde{x}(t) = (C_1 + C_2 t) e^{-\beta t}.
> $$
> 这是一个衰减过程。

在实际问题中，若希望物体在一段时间内做近似简谐振动，应该是阻尼充分小。若希望物体很快回到平衡状态，则应该是体系处于临界阻尼状态。此时，我们称  $\beta$  为衰减常数，而将  $\tau = \frac{1}{\beta}$  称为弛豫时间。

### · 受迫振动和共振

仅受弹性力和阻力作用的振动系统，其振幅总是随着时间衰减的。为使振动持续下去，必须用外力作为系统补充能量。这种的振动称为受迫振动。

为简单起见，让我们考虑存在一个简谐驱动力

$$
f_d = F_d \cos \omega_d t
$$
的情况。此时，质点的运动方程为

$$
m \frac{d^2 x}{dt^2} = -kx - \gamma \frac{dx}{dt} + F_d \cos \omega_d t,
$$
或是

$$
\frac{d^2 x}{dt^2} + 2\beta \frac{dx}{dt} + \omega_0^2 x = \frac{F_d}{m} \cos \omega_d t = \alpha \cos \omega_d t = \frac{\alpha}{2} (e^{i\omega_d t} + e^{-i\omega_d t}).
$$
令

$$
x(t) = ae^{i\omega_d t} + be^{-i\omega_d t}.
$$
代入微分方程后，我们得到

$$
a(i\omega_d)^2 e^{i\omega_d t} + b(-i\omega_d)^2 e^{-i\omega_d t} + 2\beta a(i\omega_d)e^{i\omega_d t} + 2\beta b(-i\omega_d)e^{-i\omega_d t}
$$

$$
+ ae^{i\omega_d t}\omega_0^2 + be^{-i\omega_d t}\omega_0^2 = \frac{\alpha}{2} e^{i\omega_d t} + \frac{\alpha}{2} e^{-i\omega_d t}.
$$

比较方程两边  $e^{i\omega_d t}$  和  $e^{-i\omega_d t}$  项的系数，我们得到

$$
-a\omega_d^2 + 2\beta i\omega_d a + a\omega_0^2 = \frac{\alpha}{2},
$$

$$
-b\omega_d^2 - 2\beta i\omega_d b + b\omega_0^2 = \frac{\alpha}{2}.
$$

解此方程后，我们得到

$$
a = \frac{\alpha}{2} \frac{1}{(\omega_0^2 - \omega_d^2) + 2\beta i\omega_d}, \quad b = \frac{\alpha}{2} \frac{1}{(\omega_0^2 - \omega_d^2) - 2\beta i\omega_d}.
$$
将之代入  $x(t)$  的表达式后，我们得到方程的一个特解

$$
x^{\text{*}}(t) = \frac{\alpha}{2} \left(\frac{e^{i\omega_d t}}{(\omega_0^2 - \omega_d^2) + 2\beta i\omega_d} + \frac{e^{-i\omega_d t}}{(\omega_0^2 - \omega_d^2) - 2\beta i\omega_d}\right)
$$

$$
= \frac{\alpha}{2} \frac{2(\omega_0^2 - \omega_d^2)\cos \omega_d t + 4\beta \omega_d \sin \omega_d t}{(\omega_0^2 - \omega_d^2)^2 + 4\beta^2 \omega_d^2}
$$

$$
= A \cos(\omega_d t + \varphi_d).
$$

这里，

$$
A = \frac{\alpha}{\sqrt{(\omega_0^2 - \omega_d^2)^2 + 4\beta^2 \omega_d^2}}, \quad \varphi_d = \arctan \left(-\frac{2\beta \omega_d}{\omega_0^2 - \omega_d^2}\right).
$$
另一方面，我们知道，一个非齐次线性微分方程的解可以写成一个特解和相应的齐次线性微分方程的通解之和。即我们有

$$
x(t) = A \cos(\omega_d t + \varphi_d) + Be^{-\beta t} \cos(\omega t + \varphi_0).
$$
由于第二项是随着时间的增长而衰减的，故当时刻  $t$  很大时，可以将其忽略不计。因此，我们得到

$$
x(t) \approx A \cos(\omega_d t + \varphi_d).
$$
这是一个以  $A$  为振幅，但以  $\omega_d$  为角频率的简谐振动。

当  $\omega_d \ll \omega_0$  时，我们有

$$
A = \frac{\alpha}{\sqrt{(\omega_0^2 - \omega_d^2)^2 + 4\beta^2 \omega_d^2}} \approx \frac{\alpha}{\omega_0^2} \left(\frac{F_d}{k}\right) = \frac{F_d}{k},
$$
即振幅与  $\omega_d$  的数值无关。另一方面，当  $\omega_d \gg \omega_0$  时，我们有

$$
A \approx \frac{\alpha}{\omega_d^2 + 4\beta^2 \omega_d^2}.
$$

当  $\omega_d$  趋向于无穷时，它趋向于零。因此， $A$  有一个极大值，而极值点的位置由方程

$$
\frac{dA}{d\omega_d} = -\frac{\alpha}{2[(\omega_0^2 - \omega_d^2)^2 + 4\beta^2 \omega_d^2]^{3/2}} [2(\omega_0^2 - \omega_d^2)(-2\omega_d) + 4\beta^2(2\omega_d)] = 0
$$
的解来决定。解此方程，我们得到

$$
\omega_{\text{max}} = \sqrt{\omega_0^2 - 2\beta^2}.
$$
而相应的振幅极大值则为

$$
A_{\text{max}} = \frac{\alpha}{2\beta \sqrt{\omega_0^2 - \beta^2}}.
$$
当  $\beta \to 0$  时，我们看到  $\omega_{\text{max}} \to \omega_0$ 。同时， $A_{\text{max}} \to \infty$ 。这种在受迫振动中，振幅趋向于无穷大的现象称为共振。当共振发生时，相位  $\varphi_d$  为

$$
\varphi_d = \arctan \frac{-2\beta \omega_d}{\omega_0^2 - \omega_d^2} = \arctan \frac{-2\beta \sqrt{\omega_0^2 - 2\beta^2}}{\omega_0^2 - \omega_0^2 + 2\beta^2}
$$

$$
= -\arctan \frac{\sqrt{\omega_0^2 - 2\beta^2}}{\beta} \approx -\arctan \infty = -\frac{\pi}{2}.
$$

也就是说，此时受迫振动的相位比驱动力的相位落后了  $\frac{\pi}{2}$ 。换句话说，驱动力与振子的运动速度

$$
\dot{x} = A\omega_d(-1)\sin\left(\omega_d t - \frac{\pi}{2}\right) = A\omega_d \cos \omega_d t
$$
是同相位的。因此，驱动力可以随时随刻对于振子作正功。这正是共振时振幅急剧增大的原因。当然，随着振幅的增大，阻力也会逐步增大，从而振幅最后被稳定在一个较大的值上。

### · 保守系的振动

弹簧振子以及复摆所受的力都是保守力。因此，机械能守恒定律在这些运动中是成立的。它们可能做简谐振动，也可能做更为复杂的运动。但是这些运动必是往复运动。

为了更好地说明这一点，让我们考虑一个具有教科书 250 页上图 7-32 中给出的势能函数的质点的运动。根据定义，质点在每一点处的受力为

$$
F = -\frac{dU}{d\xi} = -\frac{\partial E_P}{\partial \xi}.
$$
因此，在势能曲线的极值点  $P_1, P_2, P_3, P_4$  和  $P_5$  处，质点的受力皆为零。但只有极小点  $P_2$  和  $P_4$  为稳定平衡点。当质点的总机械能较小时，它会在  $P_2$  或  $P_4$  的两侧做往返运动。但若它的总机械能较大时，这个质点有可能跑到别的区域去。

下面，我们仅讨论质点的总机械能较小的情况。此时，它将在  $P_2$  或  $P_4$  的附近做微小振动。为了确定起见，我们假设质点在  $P_2$  附近运动。也就是说，质点的坐标满足条件

$$
\xi_0 - A_{\text{left}} \leq \xi \leq \xi_0 + A_{\text{right}}.
$$
这里， $\xi_0$  为  $P_2$  点的坐标。并且一般而言， $A_{\text{左}} \neq A_{\text{右}}$ 。由于质点的动能为

$$
E_k = \frac{1}{2} m \left(\frac{d\xi}{dt}\right)^2 = \frac{1}{2} m v_\xi^2,
$$
其总机械能应为

$$
E = E_k + E_P = \frac{1}{2} m v_\xi^2 + E_P(\xi).
$$
由此，我们得到

$$
\frac{d\xi}{dt} = \sqrt{\frac{2(E - E_P(\xi))}{m}},
$$
而振动的周期则为

$$
T = 2 \int_{\xi_0 - A_{\text{左}}}^{\xi_0 + A_{\text{右}}} \frac{d\xi}{\sqrt{\frac{2(E - E_P(\xi))}{m}}}.
$$
根据以上所述，我们可以总结出，一个保守系在  $\xi_0$  点附近形成振荡的条件是

$$
F(\xi) = -\frac{dE_P(\xi)}{d\xi} \begin{cases} 
< 0, & \text{ } \xi > \xi_0  \\
= 0, & \text{ } \xi = \xi_0  \\
> 0, & \text{ } \xi < \xi_0 
\end{cases}
$$

## Part 2 机械波

我们上面讨论了振子的简谐振动。根据我们的日常经验，当一个物体在气体或是液体之中做振动时，它一定会在媒质中形成扰动，引起波动现象。同时，振动的能量也会随着波的传动被传递出去。这种机械振动能量在连续介质内的传播，被称为机械波或弹性波。换句话说，它的出现依赖于弹性介质的存在。这一点是与电磁波非常不同的。后者可以在真空中传播。

波动可以被分为两大类。一类被称为横波，它的振动方向与其传播方向垂直。另外一类则被称为纵波，其振动方向与传播方向平行。要想让机械振动能量以横波形式传递出去，就要该连续介质具有切向弹性恢复力。由于空气不具有这种恢复力，故在空气中传播的声波只能是纵波。

### · 平面简谐波

由一个简谐振动引起的波动同样具有时间周期。因此，我们可以定义其频率  $\nu$  和角频率  $\omega$  为

$$
\nu = \frac{1}{T}, \quad \omega = 2\pi \nu = \frac{2\pi}{T}.
$$
除此之外，波动在空间分布上也是周期的。两个波峰（或波谷）之间的距离  $\lambda$  被称为波长。它表示在一个周期  $T$  内波动所传播的距离。因此，我们将

$$
u = \frac{\lambda}{T}
$$
定义作平面简谐波的相位速度，简称相速度。

为了形象地描述波在空间中的传播，通常将某一给定时刻波动在空间中位相同的点连接起来，构成一个曲面，称为波面。并且将该时刻处在传播方向最前面的波面，称为波前。

若波前为一平面，则波动被称为平面波。同理，若波前为一球面，则波动被称为球面波。同时，若空间中的一条曲线，其切线方向总是与波动的传播方向一致，则被称为波线。在各向同性的连续媒介质中，波线总是与波面相互垂直的。

由于波动是一种在时间和空间上都具有周期性变化的介质的运动，与该介质有关的各种物理量，例如压强，温度和介质的形变等等也必然是具有相同周期的变化量。也就是说，这些量都可以被写作

$$
\xi = \xi(r, t)
$$
的形式。这里， $\xi$  代表该物理量，而  $\xi(r, t)$  则表示一个时间和空间都具有相应的周期性函数。即我们有

$$
\xi(r + \lambda k_0, t) = \xi(r, t), \quad \xi(r, t + T) = \xi(r, t).
$$
这里， $k_0$  为沿波线方向的单位向量。

我们以一个一维简谐振动为例。设在坐标原点  $O$  处有一个简谐振子，即我们有

$$
y = \xi(0, t) = A \cos(\omega t + \varphi_0).
$$
而在同一时刻  $t$ ， $x$  点处的振动相位总要落后于  $O$  点处振动的相位。这是由于振动传播到  $x$  点处，需要一个时间间隔  $\tau = \frac{x}{u}$ 。因此， $x$  点处的相位应当为  $\omega(t - \tau) + \varphi_0$ 。因此，我们有

$$
y(x) = \xi(x, t) = A \cos\left[\omega\left(t - \frac{x}{u}\right) + \varphi_0\right] = A \cos\left[\omega\left(t - \frac{x}{\lambda T^{-1}}\right) + \varphi_0\right]
$$

$$
= A \cos\left(\omega t - \frac{2\pi}{\lambda} x + \varphi_0\right) = A \cos\left(\omega t - \frac{2\pi}{\lambda} x + \varphi_0\right).
$$

若我们定义波数为  $k = \frac{2\pi}{\lambda}$ ，则上式可以改写为

$$
y(x) = \xi(x, t) = A \cos(\omega t - kx + \varphi_0).
$$
因此， $\omega t - kx + \varphi_0$  为波动在时刻  $t$ ，位置  $x$  处的相位。当  $t$  增大时， $x$  也必须随之增大，才能保持相位不变。也就是说，这是一个等相位面的位置随着时间的增长逐渐向  $x$  轴的正方向移动的波动。同理，

$$
y(x) = \xi(x, t) = B \cos(\omega t + kx + \varphi_0)
$$
代表一个向  $x$  轴的负方向移动的波动。在文献中，人们将这种等相面位置随时间变化而移动的波称为行波。为了更加形象地描述行波，我们可以令  $k = k k_0 = \frac{2\pi}{\lambda} k_0$ ，因此，公式所表达的行波又可以被写作

$$
y = \xi(x, t) = A \cos(\omega t - k \cdot r + \varphi_0).
$$

### · 球面波

在各向同性介质中，一个对着圆心在缩涨振动的点波源引起的是以原点为中心的球面波。此时， $k$  为一个与向外传播的球面相垂直的向量。因此，我们有

$$
\xi(r, t) = \frac{A}{r} \cos(\omega t - k \cdot r + \varphi_0) = \frac{A}{r} \cos(\omega t - kr + \varphi_0).
$$
其中，“+”号表示波面是向原点传播的，即这是一个会聚球面波。同理，“-”号表示波面是向远离原点的方向传播的，这是一个发散球面波。

### · 声波

在连续介质中传播的弹性波，若其频率  $\nu$  在  $20 \sim 2 \times 10^4$  赫兹之间，可以被人耳听到，称为声波。若频率低于 20 赫兹，则称为次声波。而若频率在  $2 \times 10^4 \sim 5 \times 10^8$  赫兹之间，则称为超声波。

在空气中传播的声波只能是纵波。而在固体和液体中传播的声波则可以是纵波，也可以是横波。

### · 驻波

频率相同，振动方向相同，有固定的相位差的两束波称为相干波。当相干波相遇时，可以产生干涉现象。

为了简单起见，让我们考虑如下的两束分别沿着  $x$  轴正方向和反方向传播的波

$$
\xi_1(x, t) = A \cos(\omega t - kx + \varphi_1), \quad \xi_2(x, t) = A \cos(\omega t + kx + \varphi_2)
$$
在两束波相遇处，质元的合成位移应为

$$
\xi(x, t) = \xi_1(x, t) + \xi_2(x, t) = A [\cos(\omega t - kx + \varphi_1) + \cos(\omega t + kx + \varphi_2)]
$$

$$
= 2A \cos\left(\frac{(\omega t - kx + \varphi_1) - (\omega t + kx + \varphi_2)}{2}\right) \times \cos\left(\frac{(\omega t - kx + \varphi_1) + (\omega t + kx + \varphi_2)}{2}\right)
$$

$$
= 2A \cos(kx + \frac{\varphi_2 - \varphi_1}{2}) \cos(\omega t + \frac{\varphi_1 + \varphi_2}{2})
$$

这我们看到，与时间有关的因子是一个简谐振动函数。而相应的“振幅”则是位置的函数。也就是说，各点处的质元都是以相同的频率振动的，但其振幅则是随着位置的改变做周期性变化的。

形象地讲，波动不再向外传播了。这种合成波称为驻波。它是两个相干行波彼此干涉的结果。

特别是，当  $x$  取值为

$$
x = \frac{n\pi - \varphi}{k} = \frac{\lambda}{2\pi}(n\pi - \varphi), \quad n = 0, \ 1, \ 2, \cdots
$$
时，振幅因子  $2A \cos(kx + \varphi)$  为最大。这些位置被称为驻波的波腹。可以很容易地看到，两个相邻波腹之间的距离为  $\frac{\lambda}{2}$ 。而当

$$
x = \frac{n\pi + \frac{\pi}{2} - \varphi}{k} = \frac{\lambda}{2\pi}(n\pi + \frac{\pi}{2} - \varphi), \quad n = 0, \ 1, \ 2, \cdots
$$
时，振幅因子为零。这些位置被称为驻波的波节。显然，按照此定义，两个相邻波节之间的距离也为  $\frac{\lambda}{2}$ 。换句话说，它们之间的相位差为  $\pi$ 。

在一个驻波中，波节点处的质元始终是不动的。因此，没有能量从波节点处通过。这样，两个波节点之间的振动能量始终一个常数（或恒量）。

另外一种与驻波有关的现象是波的反射引起的。当一束波从一种连续介质入射到另外一种连续介质的表面时，会发生反射现象。这里，有两种情况需要加以区别对待。

> (1) 当波被从波密介质反射后，会在反射面处形成驻波的波腹。此时我们有  $\varphi = 0$ ，即  $\varphi_1 = \varphi_2$  成立。
>
> (2) 当波被从波密介质反射后，会在反射面处形成驻波的波节。此时我们有  $\varphi = \frac{\pi}{2}$ ，即  $\varphi_2 = \varphi_1 + \pi$  成立。文献中称为半波损失。

### · 多普勒效应

由于波源或观测者的运动，造成的观测频率与波源频率不同的现象，称为多普勒效应。

由于弹性波是在连续介质中传播的，故在研究其多普勒效应，我们必须要强调，波源相对于观测者的运动，应该以连续介质为参照系。以后我们还会学到，电磁波的传播是在真空中进行的，并不依赖于任何连续介质的存在。

因此，为了将问题简化起见，我们先考虑波源与观测者之间的相对速度远小于它们之间连心线的情况。并且假设相对于连续介质，波的相速度为  $u$ 。即使是这样，我们仍然需要分别考虑以下三种情况。

> (1) 波源相对于连续介质是静止的，而观测者运动。
>
> 先假设观测者以速率  $v_0$  朝向波源运动。此时，观测者看到波面是以速率  $u + v_0$  通过观测位置的。因此，单位时间内通过观测位置的完整的波的数目为
>
> $$
> n = \frac{u + v_0}{\lambda} = \frac{u}{\lambda} + \frac{v_0}{\lambda} = \nu + \frac{v_0}{u} \frac{u}{\lambda} = \left(1 + \frac{v_0}{u}\right) \nu.
> $$
> 显然，我们可以将此式中的波数  $n$  解释作观测者测量到的波的频率  $\nu'$ 。因此，我们可以将上式改写作
>
> $$
> \nu' = \left(1 + \frac{v_0}{u}\right) \nu > \nu.
> $$
> 这种现象在物理中被称为紫移。
>
> 同理，当观测者背离波源运动时，我们有
>
> $$
> \nu' = \frac{u - v_0}{\lambda} = \left(1 - \frac{v_0}{u}\right) \nu < \nu.
> $$
> 此时的多普勒频移被称为红移。
>
> (2) 观测者静止，波源做运动
>
> 当波源相对于连续介质静止时，波动的波长为  $\lambda = uT$ 。然而，当波源在介质内向观测者运动时，从相对于介质坐标系静止的观测者来看，在一个周期内，波源走了  $v_s T$  的距离。因此，波前相对于波源仅仅移动了
>
> $$
> \lambda' = \lambda - v_s T = uT - v_s T
> $$
>
> 的距离。根据定义，这一距离也就是观测者看到的波动的波长。因此，相对于观测者而言，波动的频率为
>
> $$
> \nu' = \frac{u}{\lambda'} = \frac{u}{(u - v_s)T} = \frac{u}{u - v_s} \nu > \nu.
> $$
> 也就是说，产生了紫移现象。同理，当波源远离观测者而去时，我们得到的频率为红移。
>
> 即我们有
>
> $$
> \nu' = \frac{u}{\lambda'} = \frac{u}{(u + v_s)T} = \frac{u}{u + v_s} \nu < \nu.
> $$
> (3) 观测者和波源做相向运动
>
> 此时，波源以速度  $v_s$  相对于介质运动，会使得相对于介质而言，其波长变为  $\lambda' = \lambda - v_s T$ 。而观测者也以速度  $v_0$  相对于介质运动，又会使得相对于观测者而言，波动的相速变为  $u + v_0$ 。因此，当波源和观测者同时相对于连续介质运动时，观测者所测得的频率为
>
> $$
> \nu' = \frac{u + v_0}{\lambda - v_s T} = \frac{u + v_0}{u - v_s} \frac{1}{T} = \frac{u + v_0}{u - v_s} \nu.
> $$
> 从上式中我们看到，对于弹性波来说，当波源与观测者的相对运动速度垂直于二者的联心线时，多普勒效应并不存在。因此，当波源与观测者的运动不是沿着它们之间的联线方向时，上述中的  $v_s$  和  $v_0$  应该取它们各自在联线方向上的投影。
>
> 特别要强调一点的是，上面的结论仅仅对于弹性波是成立的。而电磁波的传播是不依赖于弹性介质的存在的。因此，电磁波的多普勒效应不完全等同于弹性波的多普勒效应。相对性原理中的所谓时间延迟效应对它也有影响。这一点在下一章的学习中，我们会进一步给出说明。

### · 衍射 反射 折射

波在连续介质中传播时，遇到障碍物时会绕行，称为波的衍射现象。另一方面，波从一种介质进入另一种介质时，会有一部分被反射回来，分别形成透射波和反射波。

历史上，为了解释光的衍射，反射和折射现象，惠更斯提出，在时刻  $t$  时，一个波的波前的每一点都可以看作进一步发射球面波（称为子波）的新波源。这些子波在时刻  $t + \Delta t$  的包络面就是这个波在该时刻的新的波前。这一说法被称为惠更斯原理。

利用这一原理，可以证明，对于反射波，我们有
$$
\theta_\_\lambda = \theta_\text{out};
$$
而对于折射波，我们有

$$
\frac{\sin \theta_1}{\sin \theta_2} = \frac{u_1}{u_2}.
$$
对于光波，这一关系又可以被写作

$$
n_1 \sin \theta_1 = n_2 \sin \theta_2,
$$
这里， $n_1 = \frac{c}{u_1}$  和  $n_2 = \frac{c}{u_2}$  分别称为介质 1 和介质 2 的折射系数。

### · 冲击波

如果波源在连续介质中的运动速率  $v$  大于波的传播速率  $u$  时，会形成所谓冲击波。利用惠更斯原理，我们看到，此时的波前是一个锥面。而锥角由下式

$$
\sin \theta = \frac{u}{v}
$$
决定。这一角度  $\theta$  被称为马赫角。

### · 波动方程

我们已经看到，一个行波具有如下形式的表达式

$$
\xi(r, t) = A \cos(\omega t - k \cdot r + \varphi\_0).
$$
另一方面，可以很容易的验证，它满足如下的偏微分方程

$$
\frac{\partial^2 \xi(r, t)}{\partial t^2} - \frac{\omega^2}{k^2} \nabla^2 \xi(r, t) = 0.
$$
我们将  $u = \frac{\omega}{k}$  定义为波的相位速度并将上式重新改写为

$$
\frac{\partial^2 \xi(r, t)}{\partial t^2} - u^2 \nabla^2 \xi(r, t) = 0.
$$
不难验证，驻波也满足这一方程。

让我们来看一个具体的例子，即在一根绷紧的钢丝上传播的横波。此时， $\xi(x, t)$  可以理解为钢丝上  $x$  处的横向位移。任取一小段位于  $(x, x + \Delta x)$  处的钢丝，则其运动满足牛顿方程

$$
(\rho \Delta x) \frac{\partial^2 \xi(x, t)}{\partial t^2} = T \sin(\theta + \Delta \theta) - T \sin \theta.
$$
又由于在  $x$  轴方向上，这一段弦没有移动，故我们有

$$
T \cos(\theta + \Delta \theta) - T \cos \theta \approx 0.
$$
当钢丝做微小振动时，角度  $\theta$  很小，可以近似地取作  $\theta \approx 0$ 。因此公式 (246) 可以近似地写作

$$
(\rho \Delta x) \frac{\partial^2 \xi(x, t)}{\partial t^2} \approx T \left(\frac{\partial \xi(x, t)}{\partial x}\bigg|_{x + \Delta x} - \frac{\partial \xi(x, t)}{\partial x}\bigg|_x\right)
$$

$$
\approx T \frac{\partial^2 \xi(x, t)}{\partial x^2} \Delta x.
$$

将上式两边同时除以  $\Delta x$  后，再令它趋向于零，我们得到

$$
\frac{\partial^2 \xi(x, t)}{\partial t^2} = T \frac{\partial^2 \xi(x, t)}{\partial x^2},
$$
或是

$$
\frac{\partial^2 \xi(x, t)}{\partial t^2} - T \frac{\partial^2 \xi(x, t)}{\partial x^2} = 0.
$$
从上面的推导，我们也得到波速的表达式为

$$
u^2 = \frac{T}{\rho}.
$$

### · 波的能量密度

仍以弦振动为例，我们计算横波
$$
\xi(x, t) = A \cos(\omega t - kx + \varphi_0)
$$

的能量密度。

还是取位于  $(x, x + \Delta x)$  的一小段弦。其动能可以写作

$$
dE_K = \frac{1}{2} (\rho \Delta x) \left( \frac{\partial \xi(x, t)}{\partial t} \right)^2 = \frac{1}{2} \rho \omega^2 A^2 \sin^2(\omega t - kx + \varphi_0) \Delta x.
$$

为了计算这段弦的弹性势能，我们先看一下在  $x + \Delta x$  处弦切线方向上的受力情况，并引入切向弹性系数  $k_{\text{tangent}}$  的定义


$$
F_{\text{tangent}} = k_{\text{tangent}} (\xi(x + \Delta x, t) - \xi(x, t)) \equiv k_{\text{tangent}} \Delta \xi.
$$
这里， $F_{\text{tangent}}$  为造成这段弦横向形变的切向力，也就是在  $x + \Delta x$  处的拉力的垂直分量。因此，我们又有


$$
F_{\text{tangent}} = T \sin(\theta + \Delta \theta) \approx T (\theta + \Delta \theta) \approx T \tan(\theta + \Delta \theta) \approx T \frac{\Delta \xi}{\Delta x}.
$$

比较两式后，我们得到


$$
k_{\text{tangent}} \Delta \xi \approx T \frac{\Delta \xi}{\Delta x},
$$

或是


$$
k_{\text{tangent}} \approx \frac{T}{\Delta x}.
$$

在求得弹性系数  $k_{\text{tangent}}$  之后，我们可以立刻写出弦的弹性势能来。首先，我们有


$$
\Delta E_P = \frac{1}{2} k_{\text{tangent}} (\xi(x + \Delta x, t) - \xi(x, t))^2
$$

$$
= \frac{1}{2} k_{\text{tangent}} \left( \frac{\partial \xi}{\partial x} \Delta x \right)^2 = \frac{1}{2} \frac{T}{\Delta x} \left( \frac{\partial \xi}{\partial x} \right)^2 (\Delta x)^2
$$


$$
= \frac{1}{2} T \frac{\partial \xi}{\partial x} \left( \frac{\partial \xi}{\partial x} \right) = \frac{1}{2} T \frac{\partial \xi}{\partial x} A^2 k^2 \sin^2(\omega t - kx + \varphi_0)
$$


$$
= \frac{1}{2} T \frac{\partial \xi}{\partial x} A^2 \left( \frac{\omega}{u} \right)^2 \sin^2(\omega t - kx + \varphi_0) = \frac{1}{2} \frac{T}{u^2} \omega^2 \frac{\partial \xi}{\partial x} A^2 \sin^2(\omega t - kx + \varphi_0).
$$

也就是说，在任何一个时刻  $t$ ，在弦上同一点  $x$  处，波动的动能和势能是相等的。因此，位于  $(x, x + \Delta x)$  段的弦的总机械能为


$$
dE = dE_K + dE_P = \left[ \rho \omega^2 A^2 \sin^2(\omega t - kx + \varphi_0) \right] dx.
$$

而波动的能量密度则定义为


$$
\epsilon \equiv \frac{dE}{dx} = \rho \omega^2 A^2 \sin^2(\omega t - kx + \varphi_0).
$$

类似地，我们定义
$$
i \equiv \epsilon u = u \frac{dE}{dx} = \rho u \omega^2 A^2 \sin^2(\omega t - kx + \varphi_0)
$$

为波动的能量流密度.


