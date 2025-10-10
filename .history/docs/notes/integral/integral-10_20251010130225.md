---
title: Chapter 10 重积分
createTime: 2025/02/06 10:48:41
permalink: /integral/integral-10/
---

~~我们要坚定相信重积分是一元函数定积分的推广~~

## Part 1 重积分定义

定积分解决的是一维连续变量求和的问题，而重积分解决的是多维连续变量求和的问题。

先回忆定积分的概念。函数 $f(x)$ 在区间 $[a, b]$ 上的定积分 $\int_{a}^{b} f(x) \, dx$ 定义为黎曼和的极限：

$$
\int_{a}^{b} f(x) \, dx = \lim_{\lambda \to 0} \sum_{i=1}^{n} f(\xi_i) \Delta x_i.
$$

详细地说，函数 $f(x)$ 定义在 $[a, b]$ 上，对 $[a, b]$ 的任意分法：

$$
a = x_0 < x_1 < \cdots < x_n = b,
$$

它将 $[a, b]$ 分为 $n$ 个小区间 $[x_{i-1}, x_i] (i = 1, 2, \cdots, n)$，每个小区间 $[x_{i-1}, x_i]$ 的长度是 $\Delta x_i = x_i - x_{i-1}$。在每个小区间 $[x_{i-1}, x_i]$ 上任取一点 $\xi_i$，作和式

$$
\sum_{i=1}^{n} f(\xi_i) \Delta x_i.
$$

如果当小区间长度最大者 $\lambda = \max_{1 \leq i \leq n} |\Delta x_i|$ 趋于零时，极限

$$
\lim_{\lambda \to 0} \sum_{i=1}^{n} f(\xi_i) \Delta x_i
$$

存在，则称此极限值为 $f(x)$ 在 $[a, b]$ 的定积分，记为 $\int_{a}^{b} f(x) \, dx$。

定积分最典型的一个物理背景是求非均匀细棒的质量。如果 $\rho(x)$ 是直线上端点坐标为 $ a, b $ 的非均匀细棒在 $x$ 点的线密度，且 $\rho(x)$ 在 $[a, b]$ 连续，那么细棒的质量为 $\int_{a}^{b} \rho(x) \, dx$。这是因为 $\rho(\xi_i) \Delta x_i$ 近似于棒位于 $[x_{i-1}, x_i]$ 一段的质量，从而
$$
\sum_{i=1}^{n} \rho(\xi_i) \Delta x_i
$$
就是整个细棒质量的近似值. 当 $\lambda \rightarrow 0$ 时，它的极限就是细棒的质量。

我们现在要把定积分的概念推广到高维。我们主要考虑二维的情形。二维的积分叫做二重积分。

二重积分最典型的物理背景是求非均匀薄板的质量。设给定一个平面区域$D$，它代表一块薄板，其上定义了一个面密度函数$\rho(x, y)$，它的意义同一维的线密度相似。任给包含$(x, y)$的小块区域$\Delta\sigma$，其面积也用$\Delta\sigma$表示，又设$\Delta\sigma$的质量为$\Delta m$，则
$$
\rho(x, y) = \lim_{\Delta\sigma \to 0} \frac{\Delta m}{\Delta\sigma},
$$

其中极限过程是$\Delta\sigma$收缩到点$(x, y)$。因此，$\rho(x, y)$表示薄板在$(x, y)$附近单位面积的质量。现在的问题是要求$D$的质量$M$。为此，给$D$一个分法，即把$D$分成任意$n$块小区域

$$
\Delta\sigma_1, \Delta\sigma_2, \cdots, \Delta\sigma_n,
$$

其中$\Delta\sigma_i$既代表小区域本身，也代表小区域的面积。这样在$\Delta\sigma_i$中取$(\xi_i, \eta_i) \in \Delta\sigma_i$，则$\rho(\xi_i, \eta_i) \Delta\sigma_i$便近似于$\Delta\sigma_i$的质量$\Delta M_i$，即$\Delta M_i \approx \rho(\xi_i, \eta_i) \Delta\sigma_i$。加起来，和便是$D$的质量$M$的近似，即

$$
M \approx \sum_{i=1}^{n} \rho(\xi_i, \eta_i) \Delta\sigma_i.
$$

当分法越来越细时，和的极限便等于质量

$$
M = \lim_{\lambda \to 0} \sum_{i=1}^{n} \rho(\xi_i, \eta_i) \Delta\sigma_i,
$$

而右边的极限也就称为$\rho(x, y)$在$D$的积分

$$
\iint_D \rho(x, y) \, d\sigma = \lim_{\lambda \to 0} \sum_{i=1}^{n} \rho(\xi_i, \eta_i) \Delta\sigma_i.
$$

### · 定义

> /Define/
>
> 设$D$是平面上可求面积的有界闭区域，$f(x, y)$定义在$D$上，用任意曲线网将$D$分成有限个可求面积的区域$\Delta\sigma_1, \Delta\sigma_2, \cdots, \Delta\sigma_n$（称为$D$的一个分法），任取$(\xi_i, \eta_i) \in \Delta\sigma_i$，$\Delta\sigma_i$既表示小块平面区域，也表示这小块区域的面积。作和
> $$
> \sigma = \sum_{i=1}^{n} f(\xi_i, \eta_i) \Delta\sigma_i.
> $$
>
> 记$d_i$为$\Delta\sigma_i$的直径，$\lambda = \max_{1 \leq i \leq n} |d_i|$。如果当$\lambda \to 0$时，$\sigma$的极限存在，则称$f(x, y)$在$D$可积，并称极限值为$f(x, y)$在$D$的二重积分，记为
>
> $$
> \iint_D f(P) \, d\sigma \quad \text{or} \quad \iint_D f(x, y) \, dx \, dy.
> $$
>
> 也就是说，
>
> $$
> \iint_D f(x, y) \, dx \, dy = \iint_D f(P) \, d\sigma = \lim_{\lambda \to 0} \sum_{i=1}^{n} f(\xi_i, \eta_i) \Delta\sigma_i.
> $$

下面给出二重积分的几何解释。为简单起见，设$D = [a, b] \times [c, d]$是一矩形区域，$f(x, y) \geq 0$在$D$连续。这时，$z = f(x, y)$表示一曲面，而以$D$为底，以曲面$z = f(x, y)$为顶便构成一曲顶柱体。

$$
\sigma = \sum_{i=1}^{n} f(\xi_i, \eta_i) \Delta\sigma_i.
$$

是整个$D$上曲顶柱体体积的近似。当$\lambda \to 0$时，这个和的极限便是$D$上曲顶柱体的体积，而它也同时是$f(x, y)$在$D$的二重积分。故

$$
\iint_D f(x, y) \, dx \, dy = \lim_{\lambda \to 0} \sum_{i=1}^{n} f(\xi_i, \eta_i) \Delta\sigma_i
$$

的几何意义便是以$D$为底，以$z = f(x, y)$为顶的曲顶柱体的体积。

### · 性质

不难由定义和可积性理论证明下面的二重积分基本性质。

> (1). 若  $f(P)$  在  $D$  可积， $k$  为常数，则  $kf(P)$  也在  $D$  可积，且
>
> $$
>\iint_D kf(P) \, d\sigma = k \iint_D f(P) \, d\sigma.
> $$
> 
> (2). 若  $f(P)$ ， $g(P)$  都在  $D$  可积，则  $f(P) \pm g(P)$ ， $f(P)g(P)$  也在  $D$  可积，并且
>
> $$
>\iint_D [f(P) \pm g(P)] \, d\sigma = \iint_D f(P) \, d\sigma \pm \iint_D g(P) \, d\sigma.
> $$
> 
> (3).（可加性）若  $D$  由  $D_1$ ， $D_2$  组成： $D = D_1 \cup D_2$ ，且  $D_1$ ， $D_2$  除边界外不相交，则  $f(P)$  在  $D$  可积的充要条件是  $f(P)$  在  $D_1$ ， $D_2$  均可积，且
>
> $$
>\iint_D f(P) \, d\sigma = \iint_{D_1} f(P) \, d\sigma + \iint_{D_2} f(P) \, d\sigma.
> $$
> 
> (4).（单调性）若  $f$  与  $g$  都在  $D$  可积，且在  $D$  的每点  $P$  都有  $f(P) \leq g(P)$ ，则
>
> $$
>\iint_D f(P) \, d\sigma \leq \iint_D g(P) \, d\sigma.
> $$
> 
> (5). 若  $f(P)$  在  $D$  可积，则  $|f(P)|$  也在  $D$  可积，并且
>
> $$
>\left| \iint_D f(P) \, d\sigma \right| \leq \iint_D |f(P)| \, d\sigma.
> $$
> 
> (6).（积分中值定理）设  $D$  是有界闭区域（因而是连通的）， $f(P)$  在  $D$  上连续，则存在  $P_0 \in D$ ，使得
>
> $$
>\iint_D f(P) \, d\sigma = f(P_0) |D|,
> $$
> 其中  $|D|$  表示  $D$  的面积。

很容易把上述讨论推广到高维，写出三重积分的定义

$$
\iiint_V f(P) \, dV \quad \text{or} \quad \iiint_V f(x, y, z) \, dx \, dy \, dz
$$
的定义，其中  $V$  是三维空间中可求体积的有界闭区域。

### · 累次积分

已知  $\int_c^d f(x_0, y) \, dy$  的几何意义是用垂直于  $x$  轴的平面  $x = x_0$  去截曲顶柱体，得一曲面，曲顶为  $z = f(x_0, y)$ ， $c \leq y \leq d$ 。该曲边梯形的面积便是

$$
A(x_0) = \int_c^d f(x_0, y) \, dy.
$$
由  $x_0 \in [a, b]$  的任意性，知曲顶柱体的平行截面面积为  $A(x) (a \leq x \leq b)$ ，因此它的体积是

$$
\iint_D f(x, y) \, dx \, dy = \int_a^b A(x) \, dx = \int_a^b dx \int_c^d f(x, y) \, dy.
$$
类似地可以得到

$$
\iint_D f(x, y) \, dx \, dy = \int_c^d dy \int_a^b f(x, y) \, dx.
$$
一般地我们有下述定理。

**定理1**：若  $f(x, y)$  在矩形区域  $D = [a, b] \times [c, d]$  上可积，并且对  $[a, b]$  上的任何  $x$ ，含参变量积分
$$
A(x) = \int_c^d f(x, y) \, dy
$$

存在，则
$$
\iint_D f(x, y) \, dx \, dy = \int_a^b dx \int_c^d f(x, y) \, dy.
$$

> 证明：用平行于坐标轴的直线网
>
> $$
> a = x_0 < x_1 < \cdots < x_n = b,
> $$
>
> $$
> c = y_0 < y_1 < \cdots < y_m = d
> $$
>
> 将  $D$  分为若干个小矩形  $\Delta \sigma_{ij} = [x_{i-1}, x_i] \times [y_{j-1}, y_j]$ 。记  $f(x, y)$  在  $\Delta \sigma_{ij}$  的上、下确界分别为  $M_{ij}$  和  $m_{ij}$ 。任取  $\xi_i \in [x_{i-1}, x_i]$  则
> $$
> m_{ij} \Delta y_j \leq \int_{y_{j-1}}^{y_j} f(\xi_i, y) \, dy \leq M_{ij} \Delta y_j,
> $$
>
> $$
> i = 1, 2, \ldots, n, j = 1, 2, \ldots, m.
> $$
>
> 对  $j$  求和，得
>
> $$
> \sum_{i=1}^n m_{ij} \Delta y_j \leq \int_c^d f(\xi_i, y) \, dy = A(\xi_i) \leq \sum_{i=1}^n M_{ij} \Delta y_j,
> $$
>
> $$
> i = 1, 2, \ldots, n.
> $$
>
> 乘以  $\Delta x_i$  后再对  $i$  求和得
>
> $$
> \sum_{i=1}^n \sum_{j=1}^m m_{ij} \Delta x_i \Delta y_j \leq \sum_{i=1}^n A(\xi_i) \Delta x_i \leq \sum_{i=1}^n \sum_{j=1}^m M_{ij} \Delta x_i \Delta y_j.
> $$
> 当  $\lambda = \max \left| \sigma_{ij} \right|$  的直径  $\rightarrow 0$  时， $\lambda^* = \max \left| \Delta x_i \right| \rightarrow 0$ 。由  $f(x, y)$  在  $D$  上可知，上式左、右两端当  $\lambda \rightarrow 0$  时有公共极限值  $\iint_D f(x, y) \, dx \, dy$ ，因此
>
> $$
> \lim_{\lambda \rightarrow 0} \sum_{i=1}^n A(\xi_i) \Delta x_i = \iint_D f(x, y) \, dx \, dy.
> $$
> 由定积分定义即得
>
> $$
> \int_a^b A(x) \, dx = \iint_D f(x, y) \, dx \, dy.
> $$
> 把  $A(x)$  的表达式代进去，便得
>
> $$
> \iint_D f(x, y) \, dx \, dy = \int_a^b dx \int_c^d f(x, y) \, dy.
> $$
> 证完。
>
> 当  $f(x, y)$  取形式  $f_1(x) / f_2(y)$  时，定理1的结论变成
>
> $$
> \iint_D f_1(x) f_2(y) \, dx \, dy = \int_a^b f_1(x) \, dx \int_c^d f_2(y) \, dy,
> $$

**推论1**： 设  $f(x, y)$  在  $D = [a, b] \times [c, d]$  上连续，则
$$
\iint_D f(x, y) \, dx \, dy = \int_a^b dx \int_c^d f(x, y) \, dy = \int_c^d dy \int_a^b f(x, y) \, dx.
$$

> 证明  $f(x, y)$  在  $D$  上连续故可积，而且含参变量积分
>
> $$
> \int_c^d f(x, y) \, dy\quad \text{and}\quad
> \int_a^b f(x, y) \, dx 
> $$
> 都存在。由定理1立得结论成立。

定理1告诉我们在定理的条件下，二重积分可以化为累次积分来计算。而推论1告诉我们，当  $f$  连续时，两个累次积分可以任意交换次序，或说累次积分与次序无关。

下面要把定理1的矩形区域推广到一般的非矩形区域。我们先讨论简单区域 $D$ 

$$
D = \{(x, y) \mid y_1(x) \leq y \leq y_2(x), a \leq x \leq b\},\tag{1}
$$

$$
D = \{(x, y) \mid x_1(y) \leq x \leq x_2(y), c \leq y \leq d\}.\tag{2}
$$

**定理2**：设  $D$  由（1）式给出， $y_1(x)$ ， $y_2(x)$  在  $[a, b]$  上连续， $f(x, y)$  在  $D$  上连续，则
$$
\iint_D f(x, y) \, dx \, dy = \int_a^b dx \int_{y_1(x)}^{y_2(x)} f(x, y) \, dy.
$$

> 证明： $y_1(x)$ ， $y_2(x)$  在  $[a, b]$  上连续，故  $y_1(x)$  在  $[a, b]$  上有最小值  $c$ ， $y_2(x)$  在  $[a, b]$  有最大值  $d$ ，故  $D \subset [a, b] \times [c, d]$ 。构造  $D$  上的延拓函数  $\tilde{f}$ 
>
> $$
>  \tilde{f}(x, y) = \begin{cases} 
> f(x, y), & (x, y) \in D, \\
> 0, & (x, y) \notin D.
> \end{cases} 
> $$
>
> 由二重积分的性质(3)知  $\tilde{f}$  在  $[a, b] \times [c, d]$  可积，且
>
> $$
>  \iint_D f(x, y) \, dx \, dy = \iint_{[a, b] \times [c, d]} \tilde{f}(x, y) \, dx \, dy = \int_a^b dx \int_c^d \tilde{f}(x, y) \, dy 
> $$
>
> $$
>  = \int_a^b dx \left[ \int_{y_1(x)}^{y_2(x)} \tilde{f}(x, y) \, dy + \int_{y_2(x)}^d \tilde{f}(x, y) \, dy + \int_{y_1(x)}^c \tilde{f}(x, y) \, dy \right]
> $$
>
> $$
>  = \int_a^b dx \int_{y_1(x)}^{y_2(x)} f(x, y) \, dy. 
> $$
>
> 定理2证完。

同理，若  $D$  由(2)式给出， $x_1(y)$  和  $x_2(y)$  在  $[c, d]$  上连续， $f(x, y)$  在  $D$  上连续，则

$$
 \iint_D f(x, y) \, dx \, dy = \int_c^d dy \int_{x_1(y)}^{x_2(y)} f(x, y) \, dx. 
$$

若  $D$  既能用(1)表示又能用(2)表示，且  $x_1(y)$ ， $x_2(y)$ ， $y_1(x)$ ， $y_2(x)$  均连续， $f$  在  $D$  上连续，则

$$
\iint_D f(x, y) \, dx \, dy = \int_a^b dx \int_{y_1(x)}^{y_2(x)} f(x, y) \, dy = \int_c^d dy \int_{x_1(y)}^{x_2(y)} f(x, y) \, dx.
$$

**对于三重积分**：
$$
\iiint_V f(x, y, z) \, dx \, dy \, dz,
$$
其计算也是化为累次积分来计算

> (1). $V$  是长方体  $[a, b] \times [c, d] \times [e, f]$ ，则有公式
>
> $$
>  \iiint_V f(x, y, z) \, dx \, dy \, dz = \int_a^b dx \int_c^d dy \int_e^f f(x, y, z) \, dz. 
> $$
>
> 它完全可以类似于定理1一样加以证明。把后面两个累次积分写成重积分，便得
>
> $$
>  \iiint_V f(x, y, z) \, dx \, dy \, dz = \int_a^b dx \iint_{[c, d] \times [e, f]} f(x, y, z) \, dy \, dz,
> $$
> 这可以看作，对每个固定的  $x$ ，先对截面积分，然后对  $x$  按  $a$  到  $b$  积分，便得在整个立体  $V$  的积分。
>
> 公式也可以写成
>
> $$
>  \iiint_V f(x, y, z) \, dx \, dy \, dz = \int_e^f dz \iint_{[a, b] \times [c, d]} f(x, y, z) \, dx \, dy. 
> $$
>
> 这可以看作，在  $[a, b] \times [c, d]$  中固定的一点  $(x, y)$ ，先对  $z$  从  $e$  到  $f$  积分，然后再对  $(x, y)$  在整个  $[a, b] \times [c, d]$  积分，便得在整个立体  $V$  的积分。
>
> (2). 设空间立体界于平面  $z = e$  和  $z = f$  之间，对每一  $z \in [e, f]$ ，用平行于  $Oxy$  面的平面  $z = z$  截立体  $V$  得一平面图形  $D_z$  ，则有
>
> $$
>  \iiint_V f(x, y, z) \, dx \, dy \, dz = \int_e^f dz \iint_{D_z} f(x, y, z) \, dx \, dy. 
> $$
>
> 其中  $\iint_{D_z} f(x, y, z) \, dx \, dy$  是展布在平面图形  $D_z$  上的二重积分， $z$  相对固定不变。一般来说当  $z \in [e, f]$  上变动时，所得到的平面图形  $D_z$  是不同的，即  $D_z$  是依赖于  $z$  的。若  $D_z$  可表示为  $x_1(y, z) \leq x \leq x_2(y, z), y_1(z) \leq y \leq y_2(z)$  (见图 20-15)，则
>
> $$
>  \iiint_V f(x, y, z) \, dx \, dy \, dz = \int_e^f dz \iint_{y_1(z)}^{y_2(z)} f(x, y, z) \, dx \, dy 
> $$
>
> $$
>  = \int_e^f dz \int_{y_1(z)}^{y_2(z)} dy \int_{x_1(y, z)}^{x_2(y, z)} f(x, y, z) \, dx. 
> $$
>
> 通常，先积分者，其积分限是后积分变量的函数，而最后积分者，其积分限只能是常数。
>
> (3). 设空间立体  $V$  在  $Oxy$  面上的投影  $D$  是平面上的简单区域。平行于  $z$  轴且通过  $D$  的内点的直线与  $V$  的边界相交至多两点。记下面一点所在的边界曲面为  $z_1(x, y)$ ，上面一点所在的边界曲面为  $z_2(x, y)$ ，则有公式
>
> $$
>  \iiint_V f(x, y, z) \, dx \, dy \, dz = \iint_D dx \, dy \int_{z_1(x, y)}^{z_2(x, y)} f(x, y, z) \, dz. 
> $$
>
> 又若  $D$  可表示为  $y_1(x) \leq y \leq y_2(x), a \leq x \leq b$ ，则有
>
> $$
> \iiint_V f(x, y, z) \, dx \, dy \, dz = \int_a^b dx \int_{y_1(x)}^{y_2(x)} dy \int_{z_1(x, y)}^{z_2(x, y)} f(x, y, z) \, dz.
> $$

> [!important]
>
> 这里给出推广后在实分析的 Fubini 定理
>
> 设有定义在  $\mathbb{R}^p \times \mathbb{R}^q$  上的可积函数  $f(x, y)$ ，其中， $x \in \mathbb{R}^p, y \in \mathbb{R}^q$ ，我们有
>
> 1. 对于  $\mathbb{R}^p$  上几乎处处的  $x$ ， $f(x, y)$  关于  $y$  在  $\mathbb{R}^q$  上 Lebesgue 可积。
> 2. 积分
>    $$
>    \int_{\mathbb{R}^q} f(x, y) \, dy
>    $$
>    是  $\mathbb{R}^p$  上的可积函数
>
> 3. 有如下交换次序和重积分转化为累次积分的定理
>    $$
>    \int_{\mathbb{R}^{p+q}} f(x, y) \, dx \, dy = \int_{\mathbb{R}^p} dx \int_{\mathbb{R}^q} f(x, y) \, dy = \int_{\mathbb{R}^q} dy \int_{\mathbb{R}^p} f(x, y) \, dx.
>    $$
>    当  $f(x, y)$  在  $\mathbb{R}^{p+q}$  上非负可测时对应的定理是 Tonelli 定理。Fubini 定理就是通过先证明非负情形的 Tonelli 定理，然后再注意到一个一般的可积函数可以分解为两个非负函数的差这一点给出证明的。
>

### · 换元公式

我们已经知道，变量代换即积分换元在定积分计算中占有重要的地位。定积分的变量代换公式说，若  $f(x)$  在  $[a, b]$  连续，变量代换  $x = \varphi(t)$  在  $\alpha \leq t \leq \beta$  可微， $\varphi(\alpha) = a$ ， $\varphi(\beta) = b$ ，则

$$
\int_a^b f(x) \, dx = \int_{\alpha}^{\beta} f(\varphi(t)) \varphi'(t) \, dt.
$$
公式证明用的是微积分基本定理。设  $F(x)$  是  $f(x)$  的原函数，则  $F(\varphi(t))$  是  $f(\varphi(t)) \varphi'(t)$  的原函数，因此

$$
\int_a^b f(x) \, dx = F(b) - F(a) = F(\varphi(\beta)) - F(\varphi(\alpha))= \int_{\alpha}^{\beta} f(\varphi(t)) \varphi'(t) \, dt.
$$
在重积分计算中，变量代换不仅有可能使被积函数简化，还可以使积分区域变得规则很多，从而使化累次积分变得容易而把积分计算出来。到现在为止，在重积分中还没有微积分基本定理可以应用。因此只能回到积分的定义来考虑。

> 考虑计算二重积分
>
> $$
> \iint_D f(x, y) \, dx \, dy, \tag{1}
> $$
>
> 其中  $f(x, y)$  在  $D$  连续。作变量代换
>
> $$
> \begin{cases} 
> x = \varphi(u, v), \\
> y = \psi(u, v),
> \end{cases} \tag{2}
> $$
>
> 我们把它看作一个由平面  $Ouv$  到平面  $Oxy$  的映射  $T$ 。 $T$  通过 (2) 的变换，把  $Ouv$  平面的区域  $\Delta$  映射成  $Oxy$  平面的区域  $D$ ，即  $T: \Delta \rightarrow D$ 
>
> 假设  $\varphi$ ， $\psi$  在  $\Delta$  有连续的二阶偏导数。显然，重积分换元公式不可能是把 (2) 代入 (1) 得到，因为若把  $dx$ ， $dy$  看作微分的话，我们根本就不知道
>
> $$
> \iint_{\Delta} f(\varphi(u, v), \psi(u, v)) \left( \frac{\partial \varphi}{\partial u} \, du + \frac{\partial \varphi}{\partial v} \, dv \right) \left( \frac{\partial \psi}{\partial u} \, du + \frac{\partial \psi}{\partial v} \, dv \right) 
> $$
> 表示什么？实际上当时用 (1) 表示重积分，完全是一个记号，并说明没有理由把  $dx \, dy$  看作是微分的乘积。
>
> 下面进一步，假设变换的函数行列式不取零值，即
>
> $$
> J(u, v) = \frac{\partial (x, y)}{\partial (u, v)} = \begin{vmatrix} \frac{\partial \varphi}{\partial u} & \frac{\partial \varphi}{\partial v} \\ \frac{\partial \psi}{\partial u} & \frac{\partial \psi}{\partial v} \end{vmatrix} 
> $$
>
> 在  $\Delta$  内没有零点。由于所有偏导数在  $\Delta$  连续，因此  $\frac{\partial (x, y)}{\partial (u, v)}$  恒为正或恒为负。这时  $T: \Delta \rightarrow D$  把  $\Delta$  的内点映为  $D$  的内点，并且是一一对应的，同时把  $\Delta$  的边界点映为  $D$  的边界点。易猜想二重积分的变量代换公式
> $$
> \iint_D f(x, y) \, dx \, dy = \iint_{\Delta} f(\varphi(u, v), \psi(u, v)) |J(u, v)| \, du \, dv.
> $$

**定理1**：二重积分的变量代换公式
$$
\iint_D f(x, y) \, dx \, dy = \iint_{\Delta} f(\varphi(u, v), \psi(u, v)) |J(u, v)| \, du \, dv.
$$
**引理**： 设  $\sigma$  是  $\Delta$  内的一个正方形，左下方顶点为  $(u_0, v_0)$ ，边长为  $h$ ，经  $T$  映为  $D$  内的一个曲边四边形，记为  $S$ ，则  $S$  的面积
$$
|S| = \iint_{\sigma} |J(u, v)| \, du \, dv.
$$

**定理2**：

设变换  $T$ ：
$$
 \begin{cases} 
x = \varphi(u, v), \\
y = \psi(u, v)
\end{cases} 
$$
把  $Ouv$  平面上由逐段光滑的闭曲线围成的区域  $\Delta$  一一地映射为  $Oxy$  平面的区域  $D$ ，且  $\varphi$ ， $\psi$  在  $\Delta$  上有二阶连续偏导数，

$$
 J(u, v) = \frac{\partial (x, y)}{\partial (u, v)} \neq 0 \quad \text{当} \, (u, v) \in \Delta, 
$$
而  $f(x, y)$  是定义在  $D$  上的连续函数，则

$$
\iint_D f(x, y) \, dx \, dy = \iint_{\Delta} f(\varphi(u, v), \psi(u, v)) |J(u, v)| \, du \, dv.
$$

> 用间隔为  $h$  的平行于坐标轴的直线网，作  $\Delta$  的一个分法： $\Delta \sigma_1, \Delta \sigma_2, \cdots, \Delta \sigma_n$ ，则通过映射  $T$  便对应于  $D$  的一个分法： $\Delta S_1, \Delta S_2, \cdots, \Delta S_n$ 。由公式(4)知，存在  $(\bar{u}_i, \bar{v}_i) \in \Delta \sigma_i$ ，使得
>
> $$
>  |\Delta S_i| = |J(\bar{u}_i, \bar{v}_i)| \cdot |\Delta \sigma_i|. 
> $$
>
> 记
>
> $$
>  \begin{cases} 
> \bar{x}_i = \varphi(\bar{u}_i, \bar{v}_i), \\
> \bar{y}_i = \psi(\bar{u}_i, \bar{v}_i),
> \end{cases}
> $$
>
> 显然  $(\bar{x}_i, \bar{y}_i) \in \Delta S_i$ 。作黎曼和
>
> $$
>  \sum_{i=1}^n f(\bar{x}_i, \bar{y}_i) |\Delta S_i| = \sum_{i=1}^n f(\varphi(\bar{u}_i, \bar{v}_i), \psi(\bar{u}_i, \bar{v}_i)) |J(\bar{u}_i, \bar{v}_i)| \Delta \sigma_i 
> $$
>
> $$
>  = \sum_{i=1}^n f(\varphi(\bar{u}_i, \bar{v}_i), \psi(\bar{u}_i, \bar{v}_i)) |J(\bar{u}_i, \bar{v}_i)| |\Delta \sigma_i|.
> $$
>
> 令  $h \to 0$ ，这时  $\lambda = \max \, (d(\Delta S_i)) \to 0$ ，在上式两边取极限，便得
>
> $$
> \iint_D f(x, y) \, dx \, dy = \iint_{\Delta} f(\varphi(u, v), \psi(u, v)) |J(u, v)| \, du \, dv.
> $$

从微元的观点来看，这公式是比较容易理解的。事实上，公式可以写成

$$
 \iint_D f(x, y) \, dS = \iint_{\Delta} f(\varphi(u, v), \psi(u, v)) |J(u, v)| \, d\sigma.
$$
用平行于坐标的直线网作 $\Delta$ 的分法，相应地得到 $D$ 的用曲线网作成的分法，这时 $D$ 上的面积微元 $dS$ 与 $\Delta$ 的面积微元 $d\sigma$ 之间有下列的关系

$$
 dS = |J(u, v)| \, d\sigma, 
$$
因此，相应地两边对  $f(P)$  积分便得上述的换元公式。在这意义下，符号

$$
\iint_D f(P) \, dS = \iint_{\Delta} f(\varphi(Q), \psi(Q)) |J(Q)| \, d\sigma
$$
更能反映出变量代换中函数行列式是面积元之比的直观意义，但缺点是看不到积分变量，故通常还是写作

$$
\iint_D f(x, y) \, dx \, dy = \iint_{\Delta} f(\varphi(u, v), \psi(u, v)) |J(u, v)| \, du \, dv,
$$

> [!important]
>
> 三重积分的变量代换公式与二重积分变量代换公式完全类似。我们不再详细推导，在此仅给出公式的叙述。
>
> 设函数  $f(x, y, z)$  在由逐片光滑曲面围成的闭区域  $V$  上连续，变换  $T$ 
>
> $$
>  \begin{cases} 
> x = x(u, v, w), \\
> y = y(u, v, w), \\
> z = z(u, v, w)
> \end{cases} 
> $$
>
> 将  $Ouvw$  坐标系下的区域  $\Omega$  一一映射为  $V$ 。函数  $x(u, v, w)$ ， $y(u, v, w)$ ， $z(u, v, w)$  在  $\Omega$  有连续的二阶偏导数，且雅可比行列式
>
> $$
>  J(u, v, w) = \frac{\partial (x, y, z)}{\partial (u, v, w)} \neq 0, 
> $$
>
> 则
>
> $$
>  \iiint_V f(x, y, z) \, dx \, dy \, dz 
> $$
>
> $$
>  = \iiint_{\Omega} f(x(u, v, w), y(u, v, w), z(u, v, w)) \left| \frac{\partial (x, y, z)}{\partial (u, v, w)} \right| \, du \, dv \, dw. 
> $$
>
>
> 公式的证明完全类似于二重积分的情形。即首先证明，函数行列式的大小  $|J(u_0, v_0, w_0)|$  实际上就是变换  $T$  在  $(u_0, v_0, w_0)$  的体积变化率
>
> $$
>  |J(u_0, v_0, w_0)| = \lim \frac{\Delta V}{|\Delta \Omega|}, 
> $$
>
> 其中  $\Delta \Omega$  是包含  $(u_0, v_0, w_0)$  的小块体积， $\Delta V$  是  $\Delta \Omega$  在变换  $T$  下的像，而极限过程是  $\Delta \Omega$  收缩到点  $(u_0, v_0, w_0)$ 。其次，是用  $u =$  常数， $v =$  常数与  $w =$  常数的三组平行于坐标平面的平面作  $\Omega$  的分法，这对应于用三束坐标曲面作  $V$  的分法。这时
>
> $$
>  |J(u, v, w)| \, du \, dv \, dw
> $$
>
> 就是曲面坐标下的体积元，
>
> 一般地，类似于二重积分，如果在有限个点，或有限条光滑曲线，或有限块光滑曲面上  $\frac{\partial (x, y, z)}{\partial (u, v, w)} = 0$ ，而在  $V$  的其余地方  $J(u, v, w)$  不变号，则变量代换公式仍然成立。

### · 换元公式应用

**极坐标变换**：

> 平面变量代换中最重要的一种是极坐标变换：
>
> $$
> \begin{cases} 
> x = r \cos \theta, \\
> y = r \sin \theta.
> \end{cases}
> $$
> 变换的函数行列式为
>
> $$
> \frac{\partial (x, y)}{\partial (r, \theta)} = \begin{vmatrix} \cos \theta & -r \sin \theta \\ \sin \theta & r \cos \theta \end{vmatrix} = r.
> $$
> 对极坐标变换来说，在公式
>
> $$
> \iint_D f(x, y) \, dx \, dy = \iint_{\Delta} f(r \cos \theta, r \sin \theta) \, r \, dr \, d\theta
> $$
> 的证明中，对  $D$  实际上是用  $\theta =$  常数与  $r =$  常数的两束曲线作分法，从微元法的观点来看，这时的面积微元为
> $$
> dS = r \, dr \, d\theta,
> $$
> 因此， $D$  上的函数  $f(x, y)$  的积分自然应该等于微元
> $$
> f(r \cos \theta, r \sin \theta) \, r \, dr \, d\theta
> $$
> 之和.



