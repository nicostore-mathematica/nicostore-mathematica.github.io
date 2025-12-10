---
title: Chapter 10 广义积分
permalink: /integral/integral-10/
createTime: 2025/09/16 20:57:28
---

## Part 1 积分应用

### · 曲线的长度

设 $I = [\alpha, \beta]$ 为区间，映射 $\sigma: I \to \mathbb{R}^2$ 用分量表示为

$$
\sigma(t) = (x(t), y(t)), \quad t \in I.
$$

如果 $x(t), y(t)$ 均为连续函数，则称 $\sigma$ 为 $\mathbb{R}^2$ 上的连续曲线.如果 $x(t), y(t)$ 均可微（连续可微），则称 $\sigma$ 为可微（连续可微）曲线.

设 $\sigma$ 为连续可微曲线，通过分割曲线并用直线段长度之和作逼近，我们可以定义 $\sigma$ 的长度为

$$
L(\sigma) = \int_\alpha^\beta \left[(x'(t))^2 + (y'(t))^2\right]^{\frac{1}{2}} dt.
$$

这个公式可以如下推导.首先注意到下面的简单不等式：

$$
|\sqrt{a^2 + b^2} - \sqrt{a^2 + c^2}| \leq |b - c|, \quad \forall a,b,c \in \mathbb{R}.
$$

我们将 $[\alpha, \beta]$ 分割为 $\alpha = t_0 < t_1 < \cdots < t_n = \beta$，点 $(x(t_i), y(t_i))$ 把曲线分成若干段，每一段的长度可以近似地用直线段的长度表示，即

$$
L(\sigma) \approx \sum_{i=1}^{n} \sqrt{(x(t_i) - x(t_{i-1}))^2 + (y(t_i) - y(t_{i-1}))^2},
$$

由微分中值定理，存在 $\xi_i, \eta_i \in (t_{i-1}, t_i)$，使得

$$
x(t_i) - x(t_{i-1}) = x'(\xi_i)(t_i - t_{i-1}), \quad y(t_i) - y(t_{i-1}) = y'(\eta_i)(t_i - t_{i-1}),
$$

从而有

$$
\sqrt{(x(t_i) - x(t_{i-1}))^2 + (y(t_i) - y(t_{i-1}))^2} = \sqrt{(x'(\xi_i))^2 + (y'(\eta_i))^2} \Delta t_i.
$$

因为

$$
\left|\sqrt{(x'(\xi_i))^2 + (y'(\eta_i))^2} \Delta t_i - \sqrt{(x'(\xi_i))^2 + (y'(\xi_i))^2} \Delta t_i\right| \leq |y'(\eta_i) - y'(\xi_i)| \Delta t_i,
$$

而

$$
\sum_{i=1}^{n} |y'(\eta_i) - y'(\xi_i)| \Delta t_i \leq \sum_{i=1}^{n} \omega_i(y) \Delta t_i \to 0, \quad (\|\pi\| = \max\{t_i - t_{i-1}\} \to 0)
$$

因此有

$$
\begin{aligned}
L(\sigma) &= \lim_{\|\pi\| \to 0} \sum_{i=1}^{n} \sqrt{(x(t_i) - x(t_{i-1}))^2 + (y(t_i) - y(t_{i-1}))^2} \\
&= \lim_{\|\pi\| \to 0} \sum_{i=1}^{n} \sqrt{(x'(\xi_i))^2 + (y'(\xi_i))^2} \Delta t_i \\
&= \int_\alpha^\beta \left[(x'(t))^2 + (y'(t))^2\right]^{\frac{1}{2}} dt.
\end{aligned}
$$

注：如果 $(x'(t))^2 + (y'(t))^2 \neq 0$，令

$$
s = \phi(t) = \int_\alpha^t \left[(x'(u))^2 + (y'(u))^2\right]^{\frac{1}{2}} du, \quad t \in [\alpha, \beta].
$$

则 $\phi: [\alpha, \beta] \to [0, L(\sigma)]$ 是严格单调递增函数，从而可逆，其逆记为 $t = \psi(s)$，$s$ 称为 $\sigma$ 的弧长参数.记 $\tilde{\sigma}(s) = \sigma(\psi(s))$，$s \in [0, L(\sigma)]$.根据反函数的求导公式易见

$$
\|\tilde{\sigma}'(s)\| = \sqrt{(\tilde{x}'(s))^2 + (\tilde{y}'(s))^2} = 1.
$$

### · 简单图形面积

(1) 如果 $f > 0$ 为 $[a, b]$ 上的连续函数，则由 $y = f(x)$, $x = a$, $x = b$ ($a < b$) 与 $y = 0$ 围成的曲边梯形的面积为

$$
S = \int_a^b f(x) dx.
$$

一般地，当 $f$ 变号时，上式仍有意义，称为代数面积和，而

$$
S = \int_a^b |f(x)| dx
$$

才是所围面积之和.更一般地，由 $y = f_2(x)$, $y = f_1(x)$ 以及 $x = a$, $x = b$ 围成的图形的面积为

$$
S = \int_a^b |f_2(x) - f_1(x)| dx.
$$

(2) 设 $\sigma$ 为平面曲线，由极坐标方程

$$
r = r(\theta), \quad \theta \in [\alpha, \beta]
$$

给出，其中 $r(\theta)$ 关于 $\theta$ 连续，$\beta - \alpha \leq 2\pi$.则由 $\sigma$, $\theta = \alpha$, $\theta = \beta$ 所围成的图形面积为

$$
S = \lim_{\|\pi\| \to 0} \sum_{i=1}^{m} \frac{1}{2} r^2(\xi_i) \cdot \Delta \theta_i = \frac{1}{2} \int_\alpha^\beta r^2(\theta) d\theta.
$$

这个公式是通过使用扇形的面积和逼近图形面积得到的.

(3) 如果曲线 $\sigma$ 由 $\sigma(t) = (x(t), y(t))$, $t \in [\alpha, \beta]$ 给出，其中 $y(t) \geq 0$, $x$ 关于 $t$ 单调递增，$x([\alpha, \beta]) = [a, b]$.则 $\sigma$ 与 $x = a$, $x = b$ 以及 $y = 0$ 围成的曲边梯形的面积为

$$
S = \int_\alpha^\beta y(t)x'(t) dt.
$$

这个公式仍然是通过使用矩形面积之和去逼近曲边梯形得到.一般地，如果只设 $x$ 是单调的，则面积公式为

$$
S = \int_\alpha^\beta |y(t)x'(t)| dt.
$$

如果 $\sigma$ 除在 $t = \alpha, \beta$ 处以外无自交点，则 $\sigma$ 本身围成的图形的面积为

$$
S = \left| \int_\alpha^\beta y(t)x'(t) dt \right| = \left| \int_\alpha^\beta x(t)y'(t) dt \right|,
$$

因为

$$
\begin{aligned}
\int_\alpha^\beta y(t)x'(t) dt &= y(t)x(t)\Big|_\alpha^\beta - \int_\alpha^\beta y'(t)x(t) dt \\
&= - \int_\alpha^\beta y'(t)x(t) dt,
\end{aligned}
$$

故这个面积公式也可以改写为

$$
S = \frac{1}{2} \left| \int_\alpha^\beta [y(t)x'(t) - y'(t)x(t)] dt \right|.
$$

(4) 旋转曲面的面积

设 $\sigma$ 为平面曲线

$$
\sigma(t) = (x(t), y(t)), \quad t \in [\alpha, \beta], \quad y(t) \geq 0.
$$

$\sigma$ 绕 $x$ 轴旋转所得曲面的面积为

$$
S = \int_\alpha^\beta 2\pi y(t)\left[(x'(t))^2 + (y'(t))^2\right]^{\frac{1}{2}} dt.
$$

> 取 $[\alpha, \beta]$ 的一个分割，在分点 $t_{i-1}, t_i$ 之间的曲线段经过旋转后所形成的曲面的面积可以用圆台的面积近似逼近，这一部分圆台的面积为
>
> $$
> \pi(y(t_{i-1}) + y(t_i)) \sqrt{(x(t_i) - x(t_{i-1}))^2 + (y(t_i) - y(t_{i-1}))^2},
> $$
>
> 因此
>
> $$
> S \approx \sum_{i=1}^{n} \pi(y(t_{i-1}) + y(t_i)) \sqrt{(x(t_i) - x(t_{i-1}))^2 + (y(t_i) - y(t_{i-1}))^2},
> $$
>
> 和曲线弧长公式的推导过程类似，当分割的模趋于零时，我们近似地有
>
> $$
> (y(t_{i-1}) + y(t_i)) \approx 2y(\xi_i), \quad (\xi_i \in [t_{i-1}, t_i])
> $$
>
> 以及
>
> $$
> \sqrt{(x(t_i) - x(t_{i-1}))^2 + (y(t_i) - y(t_{i-1}))^2} \approx \sqrt{(x'(\xi_i))^2 + (y'(\xi_i))^2} \Delta t_i,
> $$
>
> 当分割的模趋于零时，近似逼近所引起的这些误差之和趋于零.因此有
>
> $$
> \begin{aligned}
> S &= \lim_{\|\pi\| \to 0} \sum_{i=1}^{n} 2\pi y(\xi_i)\left[(x'(\xi_i))^2 + (y'(\xi_i))^2\right]^{\frac{1}{2}} \Delta t_i \\
> &= \int_\alpha^\beta 2\pi y(t)\left[(x'(t))^2 + (y'(t))^2\right]^{\frac{1}{2}} dt.
> \end{aligned}
> $$

### · 简单立体体积

(1) 平行截面之间的立体体积

设 $\Omega$ 为 $\mathbb{R}^3$ 中一块立体区域，夹在平面 $x = a$ 与 $x = b$ ($a < b$) 之间.记 $S(x)$ 为 $x \in [a, b]$ 处垂直于 $x$ 轴的平面截 $\Omega$ 的截面面积函数.如果 $S(x)$ 关于 $x$ 连续，则 $\Omega$ 的体积为

$$
V = \int_a^b S(x) dx.
$$

特别地，如果两块区域 $\Omega_A$ 和 $\Omega_B$ 的截面面积函数相等，则其体积相同.这个事实在公元 5 到 6 世纪由祖暅（祖冲之之子）所发现，17 世纪时意大利人 Cavalieri 也发现了这一事实.

(2) 旋转体的体积

设 $f$ 为 $[a, b]$ 上的连续函数，$\Omega$ 是由平面图形

$$
\{(x, y) \mid a \leq x \leq b, \; 0 \leq |y| \leq |f(x)|\}
$$

绕 $x$ 轴旋转一周所得旋转体.该旋转体在 $x \in [a, b]$ 处的截面为圆盘，其面积为

$$
S(x) = \pi f^2(x).
$$

因此 $\Omega$ 的体积为

$$
V = \int_a^b S(x) dx = \pi \int_a^b f^2(x) dx.
$$

### · 物理应用

(1) 降落伞的原理

质量为 $m$ 的物体在重力作用下自由下落，下落时所受空气阻力与下落速度成正比，比例常数为 $k$，则由牛顿定律，

$$
mg - kv = m \frac{dv}{dt},
$$

其中，$g$ 为重力加速度，$v$ 为物体的速度，我们选择指向地心的坐标.上面的方程等价于

$$
\frac{d}{dt}(e^{\frac{k}{m}t} v) = g e^{\frac{k}{m}t},
$$

假设初速度为零，则

$$
e^{\frac{k}{m}t} v = g \int_0^t e^{\frac{k}{m}s} ds = \frac{mg}{k}(e^{\frac{k}{m}t} - 1),
$$

即

$$
v(t) = \frac{mg}{k}(1 - e^{-\frac{k}{m}t}).
$$

特别地，$t \to \infty$ 时 $v(t) \to \dfrac{mg}{k}$，即速度不会增加到无限大.

(2) 第二宇宙速度

从地球表面发射火箭，如果要求火箭无限飞离地球，问：火箭的初速度至少为多大？

根据万有引力定律，在距地心 $x$ 处火箭所受地球引力为

$$
F = GMm x^{-2},
$$

其中，$G$ 为万有引力常数，$M$ 为地球质量，$m$ 为火箭质量.在地球表面，有

$$
GMm R^{-2} = mg,
$$

其中 $R$ 为地球半径.火箭从地面升到距地心 $r$ ($r > R$) 处需要做的功为

$$
\int_R^r GMm x^{-2} dx = \int_R^r mg R^2 x^{-2} dx = mg R^2 \left(\frac{1}{R} - \frac{1}{r}\right).
$$

因此，火箭无限飞离地球需要做功

$$
W = \lim_{r \to \infty} mg R^2 \left(\frac{1}{R} - \frac{1}{r}\right) = mg R.
$$

由能量守恒原理，火箭的初速度至少为 $v_0$，则

$$
\frac{1}{2} m v_0^2 = mg R,
$$

因而

$$
v_0 = \sqrt{2gR} \approx \sqrt{2 \times 9.81 (m/s^2) \times 6.371 \times 10^6 m} \approx 11.2 \, (km/s).
$$

(3) 缆绳的工作原理

绳索在日常生活中应用十分广泛，例如在码头上经常用来系住船舶.为什么绳索能拉住大型船舶？下面我们就来作一个力学分析，它揭示了绳索产生巨大拉力的原理.

设一段绳索缠绕在一圆柱体上，绳索一端施以拉力 $f$，绳索与圆柱体之间的摩擦系数为 $k$，如果绳索共绕了 $n$ 圈，在绳索的另一端产生的拉力为 $F$，我们来求 $F$ 的值.

取角度为 $\Delta\theta$ 的一小段绳索，研究其受力状况.设这一段绳索承受圆柱体的正压力为 $\Delta N$，则摩擦力为 $k \Delta N$.这一段绳索两端所受拉力分别为 $F$, $F + \Delta F$，则考虑沿圆柱体外法向和切向这两个方向绳索的受力，得到方程

$$
\begin{cases}
\Delta N = (F + \Delta F) \sin \frac{\Delta\theta}{2} + F \sin \frac{\Delta\theta}{2}, \\
(F + \Delta F) \cos \frac{\Delta\theta}{2} = F \cos \frac{\Delta\theta}{2} + k \Delta N.
\end{cases}
$$

从方程中消去 $\Delta N$，令 $\Delta\theta \to 0$，得

$$
\frac{dF}{d\theta} = \lim_{\Delta\theta \to 0} \frac{\Delta F}{\Delta\theta} = kF,
$$

利用积分解得

$$
F(\theta) = f \cdot e^{k\theta}.
$$

当 $\theta = 2n\pi$ 时，$F = f \cdot e^{2kn\pi}$.例如，设摩擦系数 $k = \dfrac{1}{4}$，$n = 6$，$f = 10 kg$，则 $F = 10 e^{3\pi} kg > 100000 kg$.

### · 近似计算

设 $f$ 为 $[a,b]$ 上的二次连续可微函数，则由微分中值定理或 Taylor 展开我们得到

$$
|f(x) - l(x)| \leq \frac{1}{2} M (x - a)(b - x), \quad \forall x \in [a,b],
$$

其中，$M = \max_{x \in [a,b]} |f''(x)|$，且

$$
l(x) = f(a) + \frac{f(b) - f(a)}{b - a}(x - a), \quad x \in [a,b].
$$

因此有如下的积分估计

$$
\left| \int_a^b f(x) dx - \int_a^b l(x) dx \right| \leq \frac{1}{2} M \int_a^b (x - a)(b - x) dx = \frac{1}{12} M (b - a)^3.
$$

这也就是 $f$ 在 $[a,b]$ 上的积分用梯形面积逼近的误差公式.

我们考虑函数 $f = \ln x$ 在 $[1,n]$ 上的积分.令

$$
A_n = \int_1^n \ln x \, dx = x \ln x \Big|_1^n - \int_1^n (\ln x)' x dx = n \ln n - n + 1,
$$

$$
B_n = \frac{1}{2}(\ln 1 + \ln 2) + \frac{1}{2}(\ln 2 + \ln 3) + \cdots + \frac{1}{2}(\ln(n-1) + \ln n)
= \ln n! - \frac{1}{2} \ln n,
$$

根据上面的误差估计，并注意 $\ln x$ 为凹函数，则有

$$
0 < \int_k^{k+1} \ln x \, dx - \frac{1}{2}(\ln k + \ln(k+1)) < \frac{1}{12 k^2}.
$$

令 $C_n = A_n - B_n$，则 $C_n$ 是 $n-1$ 次累计误差，它关于 $n$ 是单调递增的.从而

$$
0 < C_n < \frac{1}{12} \sum_{k=1}^{n-1} \frac{1}{k^2} < \frac{1}{12} \left(1 + \sum_{k=1}^\infty \left(\frac{1}{k} - \frac{1}{k+1}\right)\right) = \frac{1}{6},
$$

这说明极限 $\displaystyle\lim_{n \to \infty} C_n = C$ 存在，且

$$
\begin{aligned}
0 < C - C_n &< \frac{1}{12} \sum_{k=n}^\infty \frac{1}{k^2} \\
&< \frac{1}{12} \left[\frac{1}{n^2} + \frac{1}{n(n+1)} + \frac{1}{(n+1)(n+2)} + \cdots \right] = \frac{1}{12} \left(\frac{1}{n^2} + \frac{1}{n}\right).
\end{aligned}
$$

下面我们来求极限 $C$ 的值.由定义，有

$$
C_n = A_n - B_n = n \ln n - n + 1 - \ln n! + \frac{1}{2} \ln n,
$$

因此

$$
n! = e^{1 - C_n} n^{n + \frac{1}{2}} e^{-n}.
$$

由 Wallis 公式，

$$
\lim_{n \to \infty} \frac{(n!)^2 2^{2n}}{(2n)!} \cdot \frac{1}{\sqrt{n}} = \lim_{n \to \infty} \frac{(2n)!!}{(2n - 1)!!} \cdot \frac{1}{\sqrt{n}} = \sqrt{\pi},
$$

将 $n!$ 和 $(2n)!$ 的表达式代入，有

$$
\sqrt{\pi} = \lim_{n \to \infty} \frac{e^{2(1 - C_n)} n^{2n+1} e^{-2n} \cdot 2^{2n}}{e^{1 - C_{2n}} (2n)^{2n + \frac{1}{2}} e^{-2n} \cdot \sqrt{n}} = \frac{e^{1 - C}}{\sqrt{2}},
$$

这就得到 $n!$ 的如下表示

$$
n! = \sqrt{2\pi n} \left(\frac{n}{e}\right)^n e^{C - C_n}, \quad \text{(Stirling)}
$$

其中

$$
1 < e^{C - C_n} < e^{\frac{1}{12} \left(\frac{1}{n^2} + \frac{1}{n}\right)} < 1 + \frac{1}{12n} + \frac{1}{10n^2}, \quad \forall n > 1.
$$

## Part 2 广义积分

### · 定义

**定义1** (无穷积分). 

> 设 $a \in \mathbb{R}$, 定义在 $[a, +\infty)$ 中的函数 $f$ 如果在任何有限区间 $[a, A]$ 上都是 Riemann 可积的, 且极限
>
> $$
> \lim_{A \to +\infty} \int_a^A f(x) dx
> $$
>
> 存在（且有界），则称无穷积分 $\displaystyle\int_a^{+\infty} f(x) dx$ 存在或收敛，记为
>
> $$
> \int_a^{+\infty} f(x) dx = \lim_{A \to +\infty} \int_a^A f(x) dx,
> $$
>
> 否则就称无穷积分 $\displaystyle\int_a^{+\infty} f(x) dx$ 不存在或发散.
>
> 类似地，我们也可以定义无穷积分 $\displaystyle\int_{-\infty}^a f(x) dx$，以及 $\displaystyle\int_{-\infty}^{+\infty} f(x) dx$.并且无穷积分 $\displaystyle\int_{-\infty}^{+\infty} f(x) dx$ 收敛当且仅当 $\displaystyle\int_{-\infty}^a f(x) dx$ 和 $\displaystyle\int_a^{+\infty} f(x) dx$ 均收敛，此时
>
> $$
> \int_{-\infty}^{+\infty} f(x) dx = \int_{-\infty}^a f(x) dx + \int_a^{+\infty} f(x) dx, \quad \forall a \in \mathbb{R}.
> $$
>
> 需要注意的是，利用极限
>
> $$
> \lim_{A \to +\infty} \int_{-A}^A f(x) dx
> $$
>
> 也可以定义 $f$ 在 $(-\infty, +\infty)$ 上的一种积分，它和前一种定义不是等价的，称为 Cauchy 主值积分，记为
>
> $$
> (V.P.) \int_{-\infty}^{+\infty} f(x) dx = \lim_{A \to +\infty} \int_{-A}^A f(x) dx.
> $$

从无穷积分的定义立即得到如下的基本判别法：

(**无穷积分的 Cauchy 准则**) $f(x)$ 在 $[a, +\infty)$ 上的积分收敛 $\iff$ 任给 $\varepsilon > 0$, 存在 $M = M(\varepsilon)$, 使得当 $B > A > M$ 时，

$$
\left| \int_A^B f(x) dx \right| < \varepsilon.
$$

对于 $(-\infty, a]$ 和 $(-\infty, +\infty)$ 上的无穷积分有完全类似的判别法.

/example/ 讨论无穷积分 $\displaystyle\int_1^{+\infty} \dfrac{1}{x^p} dx$ ($p \in \mathbb{R}$) 的敛散性.

>  当 $A > 1$ 时，
>
> $$
> \int_1^A \frac{1}{x^p} dx =
> \begin{cases}
> \ln A, & p = 1, \\
> \frac{1}{1 - p}(A^{1 - p} - 1), & p \ne 1.
> \end{cases}
> $$
>
> 因此只有 $p > 1$ 时积分才是收敛的，此时
>
> $$
> \int_1^{+\infty} \frac{1}{x^p} dx = \lim_{A \to +\infty} \frac{1}{1 - p}(A^{1 - p} - 1) = \frac{1}{p - 1}.
> $$
>
> 一般地，如果连续函数 $f$ 在 $[a, +\infty)$ 上存在原函数 $F$，则由微积分基本公式，
>
> $$
> \lim_{A \to +\infty} \int_a^A f(x) dx = \lim_{A \to +\infty} F(A) - F(a),
> $$
>
> 即积分是否收敛与极限 $\displaystyle\lim_{A \to +\infty} F(A)$ 是否存在是一致的

/example/ 计算无穷积分 $\displaystyle\int_{-\infty}^{+\infty} \dfrac{1}{1 + x^2} dx$.

> $\dfrac{1}{1 + x^2}$ 的原函数为 $\arctan x$，因此
>
> $$
> \begin{aligned}
> \int_{-\infty}^{+\infty} \frac{1}{1 + x^2} dx &= \int_0^{+\infty} \frac{1}{1 + x^2} dx + \int_{-\infty}^0 \frac{1}{1 + x^2} dx \\
> &= \arctan x \Big|_{-\infty}^0 + \arctan x \Big|_0^{+\infty} \\
> &= \frac{\pi}{2} + \frac{\pi}{2} = \pi.
> \end{aligned}
> $$
>
> 和无穷积分类似，我们也可以通过极限来处理无界函数的积分.

**定义2** (瑕积分). 

> 设函数 $f$ 在任何区间 $[a', b]$ ($a < a' < b$) 上均 Riemann 可积，如果极限
>
> $$
> \lim_{a' \to a^+} \int_{a'}^b f(x) dx
> $$
>
> 存在（且有界），则称瑕积分 $\displaystyle\int_a^b f(x) dx$ 存在或收敛，记为
>
> $$
> \int_a^b f(x) dx = \lim_{a' \to a^+} \int_{a'}^b f(x) dx,
> $$
>
> 否则就称瑕积分 $\displaystyle\int_a^b f(x) dx$ 不存在或发散

不难看出，如果 $f$ 在 $[a,b]$ 上 Riemann 可积，则 $f$ 的瑕积分等于其 Riemann 积分.如果 $f$ 在 $a$ 附近无界，从而在 $[a,b]$ 上不是 Riemann 可积的，则称 $a$ 为 $f$ 的瑕点.类似地，可以在 $[a,b)$ 上定义瑕积分，当瑕点不只一个时也可类似地定义瑕积分，瑕积分的收敛性仍有和广义积分类似的 Cauchy 准则判别法.

如果一个函数既是无界的，定义域又是无限区间，则把上面两种积分，即无穷积分和瑕积分的处理方法结合起来往往可以对于这种函数的积分加以处理，得到的积分统称广义积分，在别的书上也称反常积分.

广义积分具有和 Riemann 积分类似的性质，一些运算法则，例如分部积分、变量代换等也可以直接推广过来.

**命题**. 假设积分限 $a, b, c$ 等可以取 $-\infty$ 或 $+\infty$，则

(1) 如果 $f$ 在 $[a,b], [b,c]$ 上积分存在，则 $f$ 在 $[a,c]$ 上的积分也存在，且

$$
\int_a^c f(x) dx = \int_a^b f(x) dx + \int_b^c f(x) dx;
$$

(2) 如果 $f, g$ 在 $[a,b]$ 上积分存在，则 $\lambda f + \mu g$ ($\lambda, \mu \in \mathbb{R}$) 在 $[a,b]$ 上的积分也存在，且

$$
\int_a^b [\lambda f(x) + \mu g(x)] dx = \lambda \int_a^b f(x) dx + \mu \int_a^b g(x) dx.
$$
/example/ 讨论积分 $\displaystyle\int_0^{+\infty} \cos(x^2) dx$ 的敛散性

> 只要讨论被积函数在 $[1, +\infty)$ 上的积分就可以了.作变量代换 $x = \sqrt{t}$，得
>
> $$
> \int_1^{+\infty} \cos(x^2) dx = \frac{1}{2} \int_1^{+\infty} \frac{\cos t}{\sqrt{t}} dt.
> $$
>
> 我们利用分部积分和 Cauchy 准则来判断积分的收敛性：
>
> $$
> \begin{aligned}
> \left| \int_A^B \frac{\cos t}{\sqrt{t}} dt \right| &= \left| \frac{\sin t}{\sqrt{t}} \Big|_A^B + \frac{1}{2} \int_A^B \frac{\sin t}{t^{3/2}} dt \right| \\
> &\leq \frac{1}{\sqrt{A}} + \frac{1}{\sqrt{B}} + \frac{1}{2} \int_A^B t^{-3/2} dt = \frac{2}{\sqrt{A}} \to 0 \quad (B > A \to +\infty).
> \end{aligned}
> $$
>
> 这说明积分是收敛的.
>
> 这个例子也告诉我们，$f$ 在 $[a, +\infty)$ 上的积分存在并不意味着 $f(x) \to 0$ ($x \to +\infty$).

### · 收敛判别法

进一步介绍其它的判别法，首先研究非负函数.我们注意到，如果 $f$ 非负，则积分 $\displaystyle\int_a^A f(x) dx$ 关于 $A$ 单调递增，因此其极限存在当且仅当它有上界，这就得到了非负函数广义积分的如下基本判别法：

**定理1**. 设 $f \geq 0$，则无穷积分 $\displaystyle\int_a^{+\infty} f(x) dx$ 收敛当且仅当
$$
F(A) = \int_a^A f(x) dx
$$

是 $A \in [a, +\infty)$ 的有界函数；对瑕积分有完全类似的结果.

由此又得到如下的比较判别法：

**定理2**. 设 $0 \leq f \leq M g$, $M > 0$ 为常数，则当无穷积分 $\displaystyle\int_a^{+\infty} g(x) dx$ 收敛时，无穷积分 $\displaystyle\int_a^{+\infty} f(x) dx$ 也收敛；当无穷积分 $\displaystyle\int_a^{+\infty} f(x) dx$ 发散时，无穷积分 $\displaystyle\int_a^{+\infty} g(x) dx$ 也发散；瑕积分有完全类似的结果.

> 令
>
> $$
> F(A) = \int_a^A f(x) dx, \quad G(A) = \int_a^A g(x) dx,
> $$
>
> 则 $0 \leq F(A) \leq M \cdot G(A)$, $A \in [a, +\infty)$. 因此，如果 $G(A)$ 有界，则 $F(A)$ 也有界；$F(A)$ 无界时，$G(A)$ 也无界.

> [!important]
>
> (1) 常数 $M$ 的存在性通常利用极限去找.即如果极限 $l = \displaystyle\lim_{x \to +\infty} \dfrac{f(x)}{g(x)}$ 存在，则当 $0 < l < \infty$ 时，积分 $\displaystyle\int_a^{+\infty} f(x) dx$ 和 $\displaystyle\int_a^{+\infty} g(x) dx$ 同时收敛或发散；当 $l = 0$ 时，如果 $\displaystyle\int_a^{+\infty} g(x) dx$ 收敛，则 $\displaystyle\int_a^{+\infty} f(x) dx$ 也收敛；当 $l = +\infty$ 时，如果 $\displaystyle\int_a^{+\infty} g(x) dx$ 发散，则 $\displaystyle\int_a^{+\infty} f(x) dx$ 也发散.
>
> (2) 我们可以拿函数 $f$ 与 $x^{-p}$ 比较，则得到如下的 Cauchy 判别法：
>
> (i) 如果 $p > 1$，且存在常数 $C > 0$，使得
>
> $$
> 0 \leq f(x) \leq \frac{C}{x^p} \quad (\forall x \geq x_0),
> $$
>
> 则 $\displaystyle\int_a^{+\infty} f(x) dx$ 收敛；
>
> (ii) 如果 $p \leq 1$，且存在常数 $C > 0$，使得
>
> $$
> f(x) \geq \frac{C}{x^p} \quad (\forall x \geq x_0),
> $$
>
> 则 $\displaystyle\int_a^{+\infty} f(x) dx$ 发散；
>
> 当然，常数 $C$ 通常是求极限得到的，即如果极限 $\displaystyle\lim_{x \to +\infty} x^p f(x) = l$ 存在，则
>
> (iii) 如果 $p > 1$, $0 \leq l < +\infty$，则 $\displaystyle\int_a^{+\infty} f(x) dx$ 收敛；
>
> (iv) 如果 $p \leq 1$, $0 < l \leq +\infty$，则 $\displaystyle\int_a^{+\infty} f(x) dx$ 发散；
>
> (3) 对于瑕积分，利用与函数 $x^{-p}$ 的比较，可以得到完全类似的 Cauchy 判别法.

注意，比较判别法只适用于非负函数.对于一般函数的广义积分，有时可以化为非负函数的积分来判断是否收敛.

设 $f$ 为一般函数，记

$$
f^+(x) = \max\{0, f(x)\}, \quad f^-(x) = \max\{0, -f(x)\},
$$

则 $f^+$ 和 $f^-$ 均为非负函数，且 $f = f^+ - f^-$. 因此，如果 $f^+$ 和 $f^-$ 的积分均收敛，则 $f$ 的积分也收敛，此时称 $f$ 的积分绝对收敛，这和 $|f| = f^+ + f^-$ 的积分收敛是一致的.如果 $f$ 的积分收敛，但 $|f|$ 的积分发散，则称 $f$ 的积分条件收敛.

对于两个函数乘积的广义积分，在某些情形下利用第二积分中值公式可以给出下面的判别法.

**定理3** (Dirichlet). 设 $F(A) = \displaystyle\int_a^A f(x) dx$ 在 $[a, +\infty)$ 中有界，函数 $g(x)$ 在 $[a, +\infty)$ 中单调，且 $\displaystyle\lim_{x \to +\infty} g(x) = 0$，则积分 $\displaystyle\int_a^{+\infty} f(x) g(x) dx$ 收敛.

> 设 $|F(A)| \leq C$, $\forall A \geq a$. 则
>
> $$
> \left| \int_A^B f(x) dx \right| = \left| \int_a^B f(x) dx - \int_a^A f(x) dx \right| \leq 2C, \quad \forall A, B \geq a.
> $$
>
> 又因为 $\displaystyle\lim_{x \to +\infty} g(x) = 0$，故任给 $\varepsilon > 0$，存在 $M > 0$，使得当 $x > M$ 时
>
> $$
> |g(x)| \leq \frac{\varepsilon}{4C}.
> $$
>
> 由积分第二中值定理，当 $A, B > M$ 时
> $$
> \begin{aligned}
> \left| \int_A^B f(x) g(x) dx \right| &= \left| g(A) \int_A^\xi f(x) dx + g(B) \int_\xi^B f(x) dx \right| \\
> &\leq C \left| \int_A^\xi f(x) dx \right| + C \left| \int_\xi^B f(x) dx \right| \\
> &\leq C \cdot \frac{\varepsilon}{2C} + C \cdot \frac{\varepsilon}{2C} = \varepsilon.
> \end{aligned}
> $$

这些判别法对于瑕积分也有完全类似的表达形式

结束.

