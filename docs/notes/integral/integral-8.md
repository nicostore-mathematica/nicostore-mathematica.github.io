---
title: Chapter 8 空间解析几何
createTime: 2025/02/06 10:48:41
permalink: /integral/integral-8/
---

## Fragment 1 向量

### · 向量基本运算

1.以量度或不变来分：变量与常量

2.以量的特征来分：

(1) 只有大小的量称为数量，或称为标量，或称为纯量

(2) 不仅有大小，而且还有方向称向量，或称为向量，常用 $\vec{a}$, $\vec{b}$, $\vec{c}$ 表示

而 $|\vec{a}|$, $|\vec{b}|$, $|\vec{c}|$ 表示矢量的大小，称为模长；有时也用 $\overrightarrow{AB}$ 表示，模长 $|\overrightarrow{AB}| = AB$

定义：若 $\vec{a}$, $\vec{b}$ 大小相等，方向一致，称 $\vec{a} = \vec{b}$

大小 $|m \vec{a}| = |m| |\vec{a}|$

> 性质：
>
> $$
> (mn) \vec{a} = m (n \vec{a}) = (nm) \vec{a}\\
> (n + m) \vec{a} = n \vec{a} + m \vec{a}
> $$

***

#### · 向量加减

> /property/
>
> 交换律：
> $$
> \vec{a} + \vec{b} = \vec{b} + \vec{a}
> $$
>
> 结合律：
> $$
> \begin{align*}
> \vec{a} + \vec{b} + \vec{c} = \vec{a} + (\vec{b} + \vec{c})\\
> = (\vec{a} + \vec{b}) + \vec{c}
> \end{align*}
> $$

#### · 数量积

/example/  一个质点M在恒力下的作用下，沿直线从A点移动到B点所做的功W
$$
\begin{align*}
W &= |\vec{F}| \cdot \cos \theta \cdot |\overrightarrow{AB}|\\
&= |\vec{F}| |\overrightarrow{AB}| \cos \theta\\
&= \vec{F} \cdot \overrightarrow{AB}\\
\end{align*}
$$

> /Define/
>
> 定义：设 $\vec{a}$, $\vec{b}$ 为两个向量
>
> 定义两向量 $\vec{a}$, $\vec{b}$ 的夹角 $\theta$ ($0 \leq \theta \leq \pi$)
>
> $$
> \vec{a} \cdot \vec{b} = |\vec{a}| |\vec{b}| \cos \theta
> $$
>
> 称为两向量 $\vec{a}$ 与 $\vec{b}$ 的点乘积，或点积，或数量积，或内积

然后给出性质：

>  /property/
>
>  性质1:
>  $$
>  \vec{a} \cdot \vec{b} = \vec{b} \cdot \vec{a}
>  $$
>
>  ***
>
>  性质2:
>  $$
>  \vec{a} \cdot (\vec{b} + \vec{c}) = \vec{a} \cdot \vec{b} + \vec{a} \cdot \vec{c}
>  $$
>
>  ***
>
>  性质3:
>  $$
>  \vec{a} \perp \vec{b} \iff \vec{a} \cdot \vec{b} = 0
>  $$
>  反之，若 $\vec{a} \cdot \vec{b} = 0$
>
>  $\Rightarrow |\vec{a}| |\vec{b}| \cos \theta = 0$
>
>  $\Rightarrow \cos \theta = 0 \text{ 或 } |\vec{a}| = 0 \text{ 或 } |\vec{b}| = 0$
>
>  $\Rightarrow \theta = \frac{\pi}{2}, \text{ 即 } \vec{a} \perp \vec{b}$
>
>  或 $|\vec{a}| = 0 \Rightarrow \vec{a} = \vec{0}$
>
>  写成 $\vec{a} = 0$
>
>  ***
>
>  性质4：
>
>  $$
>  \vec{a} \cdot \vec{a} = |\vec{a}| |\vec{a}| \cos 0 = |\vec{a}|^2\\
>  |\vec{a}| = \sqrt{\vec{a} \cdot \vec{a}}
>  $$
>

点乘积的物理意义：一个质点M在恒力$\vec{F}$的作用下沿直线由A点移动到B点所做的功W = $\vec{F} \cdot \overrightarrow{AB}$

> /Define/
>
> 设 $\vec{a} \neq \vec{0}$，即 $|\vec{a}| \neq 0$，
>
> 称 $\frac{\vec{a}}{|\vec{a}|}$ 为 $\vec{a}$ 的单位矢量，记作 $\hat{a}$，即 $\hat{a} = \frac{\vec{a}}{|\vec{a}|}$
>
> $$
> \Rightarrow \vec{a} = |\vec{a}| \hat{a}\\
> |\hat{a}| = \left| \frac{\vec{a}}{|\vec{a}|} \right| = \frac{1}{|\vec{a}|} |\vec{a}| = 1
> $$

 $\hat{a}$ 是单位矢量，求矢量 $\vec{a}$ 在非零矢量 $\vec{b}$ 上的投影：

$$
\begin{align*}
P_{rj\vec{b}} \cdot \vec{a} &= OP = |\vec{a}| \cos \theta\\
&= |\vec{a}| \left| \hat{b} \right| \cos \theta\\
&= \vec{a} \cdot \hat{b}\\
&= \vec{a} \cdot \frac{\vec{b}}{|\vec{b}|}\\
&= \frac{\vec{a} \cdot \vec{b}}{|\vec{b}|}\\
\end{align*}
$$

投影矢量 $\overrightarrow {OP} = OP \hat{b}$

$$
= (\vec{a} \cdot \hat{b}) \hat{b}
$$



### · 向量叉乘

我们引入一个开门的模型：

门径里开往处开大小定义为 $|\overrightarrow{F}| |\overrightarrow{AB}| \sin \theta$，方向与 $\overrightarrow{F}$，$\overrightarrow{AB}$ 确定的平面垂直

且 $\overrightarrow{n}$, $\overrightarrow{m}$ 与方向构成右手系  (符合右手法则)，这个矢量记为 $\overrightarrow{F} \times \overrightarrow{AB}$

> /Define/
>
> 设 $\overrightarrow{a}$, $\overrightarrow{b}$ 为任意向量 
>
> 定义一个新的向量 $\overrightarrow{a} \times \overrightarrow{b}$ ：$|\overrightarrow{a} \times \overrightarrow{b}| = |\overrightarrow{a}| |\overrightarrow{b}| \sin \theta$
>
> $\overrightarrow{a} \times \overrightarrow{b}$ 的方向如下确定：$\overrightarrow{a} \times \overrightarrow{b}$ 与 $\vec a$ ，$\vec b$  确定的平面垂直 ，且 $\overrightarrow{a}$ ， $\overrightarrow{b}$ ， $\overrightarrow{a} \times \overrightarrow{b}$ 构成右手系
>
> 称为 $\overrightarrow{a}$ 与 $\overrightarrow{b}$ 的叉乘积，或叉积，或矢量积，或外积

性质如下：

> /property/
>
> 1. $\overrightarrow{a} \times \overrightarrow{b} = -\overrightarrow{b} \times \overrightarrow{a}$
>
> 2. $\overrightarrow{a} \times (\overrightarrow{b} + \overrightarrow{c}) = \overrightarrow{a} \times \overrightarrow{b} + \overrightarrow{a} \times \overrightarrow{c}$
>
> 3. $\overrightarrow{a} \parallel \overrightarrow{b} \Leftrightarrow \overrightarrow{a} \times \overrightarrow{b} = \overrightarrow{0}$ 
>
>   若 $\overrightarrow{a} \parallel \overrightarrow{b} \Leftrightarrow \overrightarrow{a}$, $\overrightarrow{b}$ 线性相关， 存在不全为 0 的常数 $k_1$, $k_2$， 使 $k_1 \overrightarrow{a} + k_2 \overrightarrow{b} = \overrightarrow{0}$ 
>
>   不妨设 $k_1 \neq 0$, 有 $\overrightarrow{a} = -\frac{k_2}{k_1} \overrightarrow{b}$ ，令 $-\frac{k_2}{k_1} = \lambda$, 有 $\overrightarrow{a} = \lambda \overrightarrow{b}$
>
> 4. $(\overrightarrow{a} \cdot \overrightarrow{b})^2 + |\overrightarrow{a} \times \overrightarrow{b}|^2 = |\overrightarrow{a}|^2 |\overrightarrow{b}|^2$
>
> PS：点乘可为负，叉乘必非负

然后补充了一条数量级的性质（高中知识）

> $\overrightarrow{a} \cdot \overrightarrow{b} = |\overrightarrow{a}| |\overrightarrow{b}| \cos \theta \quad (0 \leq \theta \leq \pi)$
>
> 当 $\overrightarrow{a} \neq \overrightarrow{0}$, $\overrightarrow{b} \neq \overrightarrow{0}$ 时，
>
> $\cos \theta = \frac{\overrightarrow{a} \cdot \overrightarrow{b}}{|\overrightarrow{a}| |\overrightarrow{b}|}$

### · 空间直角坐标

#### · 集合直积

/example/ $A = \{0, 1\}$, $B = \{1, 2\}$

定义 $A$ 与 $B$ 的直积$A \times B = \{(0, 1), (0, 2), (1, 1), (1, 2)\}$ ， $A \times A = A^2$

设 $R = (-\infty, +\infty)$，$R \times R = R^2 = \{(x, y) | x, y \in R\}$

二维平面： $R \times R \times R = R^3 = \{(x, y, z) | x, y, z \in R\}$

三维空间： $\underbrace{R \times R \times \cdots \times R}_{n \text{个}} = R^n$

$R^n = \{(x_1, x_2, \ldots, x_n) | x_1, x_2, \ldots, x_n \in R\}$

$n > 3$ 时，称为抽象空间

#### · 空间直角坐标系

全体空间点组成的集合与 $\{(x,y,z) | x,y,z \in \mathbb{R}\} = \mathbb{R}^3$ 建立一一对应。

三个平面把空间分成八个卦限

第一卦限：$x > 0$, $y > 0$, $z > 0$

$xOy$ 平面方程：$z = 0$ ， $yOz$ 平面方程：$x = 0$ ， $zOx$ 平面方程：$y = 0$

$x$ 轴方程：$\begin{cases} y = 0 \\ z = 0 \end{cases}$ ， $y$ 轴方程：$\begin{cases} x = 0 \\ z = 0 \end{cases}$ ， $z$ 轴方程：$\begin{cases} x = 0 \\ y = 0 \end{cases}$

$M(x, y, z)$ 关于 $xOy$ 平面对称点为 $(x, y, -z)$

$oz$ 轴对称点为 $(-x, -y, z)$ ， $O$ 点对称点为 $(-x, -y, -z)$

#### · 空间两点间距离

设 $P_1(x_1, x_2, \ldots, x_n)$, $P_2(y_1, y_2, \ldots, y_n) \in \mathbb{R}^n$

$$
|P_1 P_2| = \sqrt{\sum_{i=1}^{n} (y_i - x_i)^2}
$$

> /Define/
>
> 定义：设 $X$ 是一个非空集合，$\forall P_1, P_2 \in X$，$d(P_1, P_2)$ 表达式是一个实数
>
> 而且满足下列条件：
>
> 1. $d(P_1, P_2) \geq 0$ （非负性）
>
> 2. $d(P_1, P_2) = d(P_2, P_1)$ （对称性）
>
> 3. $\forall P_3 \in X$ （三角形法则）
>
>    $d(P_1, P_2) \leq d(P_1, P_3) + d(P_2, P_3)$
>
>    称 $d(P_1, P_2)$ 是 $\mathbb{R}^3$ 上的一个距离

/additional/ 

$P_1(x_1, y_1, z_1) \in \mathbb{R}^3$ ， $P_2(x_2, y_2, z_2) \in \mathbb{R}^3$

$d(P_1, P_2) = |x_2 - x_1| + |y_2 - y_1| + |z_2 - z_1|$

验证满足距离定义，但是并非日常所讲距离

(实际上是三维空间中的曼哈顿距离)

#### · 向量坐标式

矢量的 $\overrightarrow{i}$, $\overrightarrow{j}$, $\overrightarrow{k}$ 坐标分解式，简称为坐标式：
$$
\overrightarrow{a} = x \overrightarrow{i} + y \overrightarrow{j} + z \overrightarrow{k}
$$
称为 ${i}$, ${j}$, ${k}$ 的坐标分量式

$$
\overrightarrow{a} = \{x, y, z\} = [x, y, z] = (x, y, z)
$$
$\{x, y, z\}$ 称为坐标式

***

然后是单位向量有关的部分：

我们想象一个空间向量，与 $x$ ， $y$ ， $z$ 的夹角为 $\alpha$ ， $\beta$ ， $\gamma$
$$
z = \vec{a} \cdot \hat{k} = |\vec{a}| \cos \gamma\\
x = \vec{a} \cdot \hat{i} = |\vec{a}| \cos \alpha\\
y = \vec{a} \cdot \hat{j} = |\vec{a}| \cos \beta
$$
$\vec{a} = \{|\vec{a}| \cos \alpha, |\vec{a}| \cos \beta, |\vec{a}| \cos \gamma\}= \{\vec{a} \cdot \hat{i}, \vec{a} \cdot \hat{j}, \vec{a} \cdot \hat{k}\}$

$$
\cos \alpha = \frac{x}{|\vec{a}|} = \frac{x}{\sqrt{x^2 + y^2 + z^2}} \\
\cos \beta = \frac{y}{|\vec{a}|} = \frac{y}{\sqrt{x^2 + y^2 + z^2}} \\
\cos \gamma = \frac{z}{|\vec{a}|} = \frac{z}{\sqrt{x^2 + y^2 + z^2}}
$$
其中 $|\vec{a}| = \sqrt{x^2 + y^2 + z^2}$

$$
\cos^2 \alpha + \cos^2 \beta + \cos^2 \gamma = 1
$$

$$
\vec{a} = \{x, y, z\}
$$

$$
\hat{a} = \frac{\vec{a}}{|\vec{a}|}= \frac{1}{|\vec{a}|} \{x, y, z\}= \{\cos \alpha, \cos \beta, \cos \gamma\}
$$

称为单位向量

***

#### · 坐标运算

 $\vec{a} = \{x_1, y_1, z_1\}$，$k$是一个常数，则$k \vec{a} = \{k x_1, k y_1, k z_1\}$

> /proof/
> $$
> \begin{align*}
> k \vec{a} &= k (x_1 \hat{i} + y_1 \hat{j} + z_1 \hat{k})\\
> &= (k x_1) \hat{i} + (k y_1) \hat{j} + (k z_1) \hat{k}\\
> &= \{k x_1, k y_1, k z_1\}
> \end{align*}
> $$
> 结束.

不妨给出 $\vec{b} = \{x_2, y_2, z_2\}$

$$
\begin{align*}
\vec{a} + \vec{b} &= x_1 \hat{i} + y_1 \hat{j} + z_1 \hat{k} + x_2 \hat{i} + y_2 \hat{j} + z_2 \hat{k}\\
&= (x_1 + x_2) \hat{i} + (y_1 + y_2) \hat{j} + (z_1 + z_2) \hat{k}\\
&= \{x_1 + x_2, y_1 + y_2, z_1 + z_2\}
\end{align*}
$$
同理，
$$
\vec{a} - \vec{b} = \{x_1 - x_2, y_1 - y_2, z_1 - z_2\}
$$
对于数量级运算：
$$
\begin{align*}
\vec{a} \cdot \vec{b} &= (x_1 \hat{i} + y_1 \hat{j} + z_1 \hat{k}) \cdot (x_2 \hat{i} + y_2 \hat{j} + z_2 \hat{k})\\
&= x_1 x_2 + y_1 y_2 + z_1 z_2
\end{align*}
$$
那对于向量叉乘运算？不难发现如下轮换式：
$$
\hat{i} \times \hat{j} = \hat{k}\\
\hat{j} \times \hat{k} = \hat{i}\\
\hat{k} \times \hat{i} = \hat{j}
$$
根据如上轮换式：
$$
\begin{align*}
\vec{a} \times \vec{b} &= (x_1 \hat{i} + y_1 \hat{j} + z_1 \hat{k}) \times (x_2 \hat{i} + y_2 \hat{j} + z_2 \hat{k})\\
&= x_1 y_2 \hat{k} - x_1 z_2 \hat{j} - y_1 x_2 \hat{k}\\
&+ y_1 z_2 \hat{i} + z_1 x_2 \hat{j} - z_1 y_2 \hat{i}\\
&= (y_1 z_2 - z_1 y_2) \hat{i} - (x_1 z_2 - z_1 x_2) \hat{j}+ (x_1 y_2 - y_1 x_2) \hat{k}
\end{align*}
$$
不难发现，这个展开式似乎与行列式有关:
$$
\vec{a} \times \vec{b} = \begin{vmatrix}
    \hat{i} & \hat{j} & \hat{k} \\
    x_1 & y_1 & z_1 \\
    x_2 & y_2 & z_2
\end{vmatrix}
$$
按第一行展开即可得到结果

#### · 混合积

设 $\vec{a} = \{x_1, y_1, z_1\}$,$\vec{b} = \{x_2, y_2, z_2\}$,$\vec{c} = \{x_3, y_3, z_3\}$

积 $(\vec{a} \times \vec{b}) \cdot \vec{c}$ 称为 $\vec{a}$，$\vec{b}$，$\vec{c}$ 的混合积，结果是一个数量。

混合积不能等成：$\vec{a} \times \vec{b} \cdot \vec{c}$

$(\vec{a} \times \vec{b}) \cdot \vec{c} = (\vec{a} \times \vec{b}) \cdot \vec{c} \quad$	数量

$\vec{a} \times \vec{b} \cdot \vec{c} = \vec{a} \times (\vec{b} \cdot \vec{c}) \quad$	矢量

混合积 $(\vec{a} \times \vec{b}) \cdot \vec{c} =$
$$
\begin{align*}
(\vec{a} \times \vec{b}) \cdot \vec{c} &=[(y_1z_2-z_1y_2)\vec{i}-(x_1z_2-z_1x_2)\vec{j}+(x_1y_2-y_1x_2)\vec{k}\text{ }]
(x_3 \hat{i} + y_3 \hat{j} + z_3 \hat{k})\\
&= (y_1 z_2 - z_1 y_2) x_3 + (x_1 z_2 - z_1 x_2) y_3 + (x_1 y_2 - y_1 x_2) z_3\\
\end{align*}
$$

$$
= \begin{vmatrix}
x_3 & y_3 & z_3 \\
x_1 & y_1 & z_1 \\
x_2 & y_2 & z_2
\end{vmatrix}
= \begin{vmatrix}
x_1 & y_1 & z_1 \\
x_2 & y_2 & z_2 \\
x_3 & y_3 & z_3
\end{vmatrix}
$$

/example/

 $(\vec{a} \times \vec{b}) \cdot \vec{c} = -(\vec{c} \times \vec{b}) \cdot \vec{a}$

$(\vec{a} \times \vec{b}) \cdot \vec{c} = (\vec{b} \times \vec{c}) \cdot \vec{a}$

证明 $(\vec{a} \times \vec{b}) \cdot \vec{c} = \vec{a} \cdot (\vec{b} \times \vec{c})$

> /proof/
>
> 证：右边
> $$
> = \vec{a} \cdot (\vec{b} \times \vec{c})= (\vec{b} \times \vec{c}) \cdot \vec{a}
> = -(\vec{a} \times \vec{c}) \cdot \vec{b}= (\vec{a} \times \vec{b}) \cdot \vec{c}
> $$
> $=$ 左式

然后给出混合积性质：

> /property/
>
> $\vec{a}$ ， $\vec{b}$ ， $\vec{c}$共面的充要条件是 $(\vec{a} \times \vec{b}) \cdot \vec{c} = 0$
>
> $$
> \Leftrightarrow \begin{vmatrix}
> x_1 & y_1 & z_1 \\
> x_2 & y_2 & z_2 \\
> x_3 & y_3 & z_3
> \end{vmatrix} = 0
> $$
> 若$\vec{a} = \{x_1, y_1, z_1\}$ , $\vec{b} = \{x_2, y_2, z_2\}$ , $\vec{c} = \{x_3, y_3, z_3\}$, 有下列性质:
>
> 性质1
>
> $\vec{a} \perp \vec{b} \Leftrightarrow \vec{a} \cdot \vec{b} = 0$
>
> $\Leftrightarrow x_1 x_2 + y_1 y_2 + z_1 z_2 = 0$
>
> 性质 2
>
> $\vec{a} \parallel \vec{b} \iff \vec{a} \times \vec{b} = \vec{0}$
>
> $$
> \iff  \vec{b} \neq \vec{0}, \text{  } \vec{a} = \lambda \vec{b}\\
> \iff \frac{x_1}{x_2} = \frac{y_1}{y_2} = \frac{z_1}{z_2}
> $$
> 向量中分量可以一个或两个为 0
>
> 比如：
> $$
> \frac{x_1}{x_2} = \frac{y_1}{0} = \frac{z_1}{z_2} = \lambda
> $$
> “建立形式上的比”
>
> 可以推出 $y_1 = 0 \cdot \lambda = 0$

***

#### · 几何意义

向量叉乘几何意义：

$|\vec{a} \times \vec{b}| = |\vec{a}| |\vec{b}| \sin \theta$ ， $S = \frac{1}{2} |\vec{a} \times \vec{b}|$ （与 $\vec{a}$ ， $\vec{b}$ ， $\theta$ 相关的平行四边形面积）

混合积的几何意义：

$$
|(\vec{a} \times \vec{b}) \cdot \vec{c}|= |\vec{a} \times \vec{b}| |\vec{c}| |\cos \langle \vec{a} \times \vec{b}, \vec{c} \rangle|= |\vec{a} \times \vec{b}| |\vec{c}| |\cos \theta|
$$

$$
V_{O-ABC} = \frac{1}{2} S \cdot h = \frac{1}{6} |(\vec{a} \times \vec{b}) \cdot \vec{c}|
$$

## Fragment 2 平面与直线方程

### · 空间曲面曲线方程

> /Define/
>
> 设 $\Sigma(\Omega)$ 是空间一张曲面，$F(x, y, z) = 0$ 是一个三元方程，
> $$
> M(x_1, y_1, z_1) \in \Sigma\Rightarrow F(x_1, y_1, z_1) = 0
> $$
> 反之，若对 $M(x_1, y_1, z_1)$ 有 $F(x_1, y_1, z_1) = 0$  
> $$
> \Rightarrow M(x_1, y_1, z_1) \in \Sigma
> $$
> 知 { ${ M |\text{ } M \in \Sigma}$ } 与 {$(x, y, z)|F(x, y, z) = 0$} 建立一一对应
>
> 称 $f(x, y, z) = 0$ 是曲面 $\Sigma$ 的方程
>
> 而曲面 $\Sigma$ 是方程 $F(x, y, z) = 0$ 表示的曲面
>
> 方程 $f(x, y, z) = 0$ 称为曲面 $\Sigma$ 的一般方程
>
> 如果从方程可以解出 $z = f(x, y)$，称为曲面 $\Sigma$ 的显函数表达式

求曲面 $\Sigma$ 方程的方法：

设 $M(x, y, z)$ 是 $\Sigma$ 上任意一点，找到 $M$ 点满足的等式

$$
\Leftrightarrow F(x, y, z) = 0
$$
就是曲面 $\Sigma$ 的方程

曲线 $\Gamma$ 的方程，用
$$
\begin{cases}
F(x, y, z) = 0 \\
G(x, y, z) = 0
\end{cases}
$$
称为曲线方程的一般式

空间曲线$\Gamma$参数式:

$$
\Gamma = \left\{
\begin{array}{l}
x = x(t) \\
y = y(t) \\
z = z(t)
\end{array}
\right.
$$
$t$为参数

空间曲面$\Sigma$参数式:

$$
\Sigma = \left\{
\begin{array}{l}
x = x(u, v) \\
y = y(u, v) \\
z = z(u, v)
\end{array}
\right.
$$
$u, v$为参数

***

### · 平面与直线方程

#### · 平面方程

1.点法式

设平面$\pi$经过已知点$P_0(x_0, y_0, z_0)$，且与非零常矢量$\vec{n} = \{A, B, C\}$垂直，求平面$\pi$的方程：

设 $\vec{n} = (A, B, C)$ 是平面 $\pi$ 的法向量，$\mathbf{P}_0 = (x_0, y_0, z_0)$ 是平面上一点，则平面 $\pi$ 的点法式方程为：
$$
A(x - x_0) + B(y - y_0) + C(z - z_0) = 0
$$
这就是所求的平面方程，这个方程称为平面 $\pi$ 的点法式方程。

> 求平面 $\pi$ 法向量 $\mathbf{n}$ 的方法：
>
> 1. 若 $\overrightarrow{a} \in \pi$，$\overrightarrow{b} \in \pi$，$\overrightarrow{a} \times \overrightarrow{b}$ ，则 $\vec{n} = \overrightarrow{a} \times \overrightarrow{b}$
>
> 2. 若 $\overrightarrow{a} \in \pi$，$\overrightarrow{b} \parallel \pi$，$\overrightarrow{a} \times \overrightarrow{b}$ ，则 $\vec{n} = \overrightarrow{a} \times \overrightarrow{b}$
>
> 3. 若 $\overrightarrow{a} \parallel \pi$，$\overrightarrow{b} \parallel \pi$，$\overrightarrow{a} \neq \overrightarrow{b}$ ，则 $\vec{n} = \overrightarrow{a} \times \overrightarrow{b}$

***

2.一般式：

由平面方程的点法式 $A(x - x_0) + B(y - y_0) + C(z - z_0) = 0$
$$
\Rightarrow Ax + By + Cz - (Ax_0 + By_0 + Cz_0) = 0
$$
设 $D = -(Ax_0 + By_0 + Cz_0)$  $\Rightarrow  Ax + By + Cz + D = 0$

其中 $A$, $B$, $C$ 不全为 0。

反之，若 $Ax + By + Cz + D = 0$  其中 $A$, $B$, $C$ 不全为 0。

不妨设 $A \neq 0$，取 $y = y_0$，$z = z_0$
$$
x = \frac{-By_0 - Cz_0 - D}{A} \triangleq x_0
$$
得到了方程的一组解 $(x_0, y_0, z_0)$。

有 $Ax_0 + By_0 + Cz_0 + D = 0$

$$
\Rightarrow D = -(Ax_0 + By_0 + Cz_0)
$$

$$
\Rightarrow Ax + By + Cz + (Ax_0 + By_0 + Cz_0) = 0
$$

$$
\Rightarrow A(x - x_0) + B(y - y_0) + C(z - z_0) = 0
$$

知 $Ax + By + Cz + D = 0$ 表示一个平面。

即全体平面组成的集合

与 $\{Ax + By + Cz + D = 0 | A, B, C \in \mathbb{R}, \text{不全为} 0\}$

建立了一一对应。

所以 $Ax + By + Cz + D = 0$ ，称为平面方程的一般式。

> (1) 若平面 $\pi$ 经过原点，方程为 $Ax + By + Cz = 0$。
>
> (2) 若平面 $\pi$ 平行于 $Oz$ 轴，
>
> $\{A,B,C \}\cdot \{0,0,1\}=0$ ， $C = 0$
>
> 方程为 $Ax + By + D = 0$
>
> (3) 若平面 $\pi$ 经过 $Oz$ 轴，方程为 $Ax + By = 0$

***

3.截距式

若平面方程为
$$
\frac{x}{a} + \frac{y}{b} + \frac{z}{c} = 1
$$
且 $a, b, c \neq 0$ ，称为截距式，该平面经过点 $(a, 0, 0)$, $(0, b, 0)$, $(0, 0, c)$。

$a$, $b$, $c$ 称为平面方程在 $x$ 轴、$y$ 轴、$z$ 轴的截距。

$$
V_{O-ABC} = \frac{1}{6} |abc|
$$

平面的一般式 $Ax + By + Cz + D = 0$ 写成截距式，要求 $ABCD \neq 0$。
$$
\Rightarrow \frac{x}{-\frac{D}{A}} + \frac{y}{-\frac{D}{B}} + \frac{z}{-\frac{D}{C}} = 1
$$

***

4.三点式

若平面 $\pi$ 经过不在同一条直线上的三点 $M_1(x_1, y_1, z_1)$，$M_2(x_2, y_2, z_2)$，$M_3(x_3, y_3, z_3)$，求平面的方程。

> /proof/
>
> 解法一：由条件知
>
> $$
> \overrightarrow{M_1M_2} \subset \pi, \quad \overrightarrow{M_1M_3} \subset \pi\\
> \overrightarrow{M_1M_2} \neq \overrightarrow{M_1M_3}
> $$
>
>
> $$
> \overrightarrow{n} = \overrightarrow{M_1M_2} \times \overrightarrow{M_1M_3}= \begin{vmatrix}
> \overrightarrow{i} & \overrightarrow{j} & \overrightarrow{k} \\
> x_2 - x_1 & y_2 - y_1 & z_2 - z_1 \\
> x_3 - x_1 & y_3 - y_1 & z_3 - z_1
> \end{vmatrix}
> $$
>
> 按第一行展开，求出 $\overrightarrow{n}$。
>
> 再经过 $M_1$，然后用点法式。
>
> ***
>
> 解法二:
> $$
> \forall M(x, y, z) \in \pi
> $$
>
> $$
> \overrightarrow{MM_1}, \quad \overrightarrow{M_1M_2}, \quad \overrightarrow{M_1M_3} \text{ are coplanar}
> $$
>
> 混合积为 0
>
> $$
> \begin{vmatrix}
> x - x_1 & y - y_1 & z - z_1 \\
> x_2 - x_1 & y_2 - y_1 & z_2 - z_1 \\
> x_3 - x_1 & y_3 - y_1 & z_3 - z_1
> \end{vmatrix}
> $$
>
> 按第一行展开，写成点向式。

#### · 直线方程

1.点向式

设 $L$ 经过已知点 $M_0(x_0, y_0, z_0)$，且与非零的常矢量 $\overrightarrow{v} = \{l, m, n\}$ 平行，求 $L$ 的方程。

$$
\frac{\overrightarrow{v} \neq 0}{M_0(x_0, y_0, z_0)} \Rightarrow L
$$

得 $\forall M(x, y, z) \in L$ ， $\overrightarrow{M_0M} \subset L$

由 $\overrightarrow{v} \parallel L \iff \overrightarrow{M_0M} \parallel \overrightarrow{v}$

由 $\overrightarrow{v} \neq 0$，则
$$
\frac{x-x_0}{l} = \frac{y-y_0}{m} = \frac{z-z_0}{n}
$$

这就是所求直线 $L$ 的方程，称为点向式（对称式）， $\overrightarrow{v}$ 称为 $L$ 的方向向量

***

2.直线的参数式
$$
\begin{cases}
x = x_0 + lt \\
y = y_0 + mt \\
z = z_0 + nt
\end{cases}
$$

$t$ 为参数，$-\infty < t < +\infty$

***

3.两点式

若直线 $L$ 经过不同的两点 $M_1(x_1, y_1, z_1)$ 和 $M_2(x_2, y_2, z_2)$，求 $L$ 的方程。

得 $\overrightarrow{v} = \overrightarrow{M_1M_2} = (x_2 - x_1, y_2 - y_1, z_2 - z_1)$ ， $L$ 经过 $M_1(x_1, y_1, z_1)$。

由点向式，得 $L$ 的方程为
$$
\frac{x - x_1}{x_2 - x_1} = \frac{y - y_1}{y_2 - y_1} = \frac{z - z_1}{z_2 - z_1}
$$

***

4.一般式
$$
L: \begin{cases}
A_1 x + B_1 y + C_1 z + D_1 = 0 \\
A_2 x + B_2 y + C_2 z + D_2 = 0
\end{cases}
$$
要求两平面不平行，即
$$
[A_1, B_1, C_1] \times [A_2, B_2, C_2] \neq 0
$$

$L$ 的方向向量

$$
\overrightarrow{v} = \begin{vmatrix}
\overrightarrow{i} & \overrightarrow{j} & \overrightarrow{k} \\
A_1 & B_1 & C_1 \\
A_2 & B_2 & C_2
\end{vmatrix}
$$


***

直线方程常用点向式

/question/    如何求直线 $L$ 的方向向量

> /proof/
>
> 1. 若 $L \perp \overrightarrow{a}$, $L \perp \overrightarrow{b}$, 且 $\overrightarrow{a} \times \overrightarrow{b}$
>
>    $\overrightarrow{v} = \overrightarrow{a} \times \overrightarrow{b}$
>
> 2. 若 $L \perp \overrightarrow{a}$, $L \parallel \pi$, $\pi$ 的法向量为 $\overrightarrow{n}$
>
>    $\overrightarrow{n} \perp \pi, L \parallel \pi \Rightarrow L \perp \overrightarrow{n}$
>
>    $\therefore \overrightarrow{v} = \overrightarrow{a} \times \overrightarrow{n}$

#### · 平面方程的平面束

经过直线 $L = \left\{ \begin{aligned} A_1 x + B_1 y + C_1 z + D_1 &= 0 \\ A_2 x + B_2 y + C_2 z + D_2 &= 0 \end{aligned} \right.$

的平面方程一定可以写成
$$
\lambda (A_1 x + B_1 y + C_1 z + D_1) + \mu (A_2 x + B_2 y + C_2 z + D_2) = 0
$$
其中，$\lambda$, $\mu$ 为待求的参数，称为平面束方程。

### · 距离问题

#### · 点到平面距离

设平面 $\pi = Ax + By + Cz + D = 0$

$P(x_1, y_1, z_1)$ 是空间一点，求 $P$ 到 $\pi$ 的距离 $d$

$$
d = \frac{|Ax_1 + By_1 + Cz_1 + D|}{\sqrt{A^2 + B^2 + C^2}}
$$
设$\mathbf{P} \in \pi$,$\mathbf{P} \neq \mathbf{P}_0$

$$
\begin{align*}
d &= |\overrightarrow{\mathbf{P}_1\mathbf{P}} \cdot \overrightarrow{n}
= \frac{|\overrightarrow{\mathbf{P}_1\mathbf{P}} \cdot \overrightarrow{n}|}{|\overrightarrow{n}|}\\
&= \frac{|A(x - x_1) + B(y - y_1) + C(z - z_1)|}{\sqrt{A^2 + B^2 + C^2}}\\
&= \frac{|Ax + By + Cz - (Ax_1 + By_1 + Cz_1)|}{\sqrt{A^2 + B^2 + C^2}}\\
&= \frac{|Ax_1 + By_1 + Cz_1 + D|}{\sqrt{A^2 + B^2 + C^2}}
\end{align*}
$$

#### · 点到直线的距离

设
$$
L: \frac{x - x_0}{l} = \frac{y - y_0}{m} = \frac{z - z_0}{n}
$$
$\mathbf{P}_1(x_1, y_1, z_1)$是空间一点，求$\mathbf{P}_1$到$L$的距离

$$
d = |\overrightarrow{\mathbf{P}'\mathbf{P}_1}| = \frac{|\overrightarrow{\mathbf{P}_0\mathbf{P}_1} \times \overrightarrow{v}|}{|\overrightarrow{v}|} = \frac{S_{parallelogram}}{a}
$$

### · 直线方程转化

(1) 点向式转化为一般式

根据
$$
\frac{x - x_0}{l} = \frac{y - y_0}{m} = \frac{z - z_0}{n}
$$
消元：

$$
\Rightarrow \left\{ \begin{aligned}
\frac{x - x_0}{l} &= \frac{y - y_0}{m} \\
\frac{y - y_0}{m} &= \frac{z - z_0}{n}
\end{aligned} \right.
$$

$$
\iff \left\{ \begin{aligned}
m(x - x_0) - l(y - y_0) &= 0 \\
n(y - y_0) - m(z - z_0) &= 0
\end{aligned} \right.
$$

***

(2) 一般式转化为点向式

由 $\left\{ \begin{aligned}
A_1 x + B_1 y + C_1 z + D_1 &= 0 \\
A_2 x + B_2 y + C_2 z + D_2 &= 0
\end{aligned} \right.$

方法一：L 的方向向量

$$
\overrightarrow{v} = \{A_1, B_1, C_1\} \times \{A_2, B_2, C_2\}= \begin{vmatrix}
\overrightarrow{i} & \overrightarrow{j} & \overrightarrow{k} \\
A_1 & B_1 & C_1 \\
A_2 & B_2 & C_2
\end{vmatrix}
$$

求出 L 的一个点 $P_0(x_0, y_0, z_0)$，用点向式写出方程

方法二：消元法

/example/ 转化为点向式：
$$
L = \left\{ \begin{aligned}
x + y + z &= 1 \\
x + 2y + 3z &= 0
\end{aligned} \right.
$$

> /proof/
>
> 选取 $z$ 为参数。
>
> 消去 $x$：(2) - (1)
> $$
> y + 2z = -1, \quad z = \frac{y + 1}{-2}
> $$
> 消去 $y$：(2) - (1) $\times$ 2
> $$
> -x + z = -2, \quad z = x - 2\\
> \Rightarrow \frac{x - 2}{1} = \frac{y + 1}{-2} = \frac{z - 0}{1}
> $$
> 知直线经过 $(2, -1, 0)$，
>
> 方向向量 $\overrightarrow{v} = \{1, -2, 1\}$

/example/ $L = \left\{ \begin{aligned}
x + y + z &= 1 \\
x - y + z &= 2
\end{aligned} \right.$

> /proof/
>
> 以 $z$ 为参数
>
> 消去 $y$：(1) + (2)
> $$
> 2x + 2z = 3, \quad z = \frac{x - \frac{3}{2}}{-1}
> $$
> 消去 $x$：(1) - (2)
>
> $$
> 2y = -1 \Rightarrow 2y + 1 = 0\\
> \Rightarrow z = \frac{2y + 1}{0} = \frac{y + \frac{1}{2}}{0}
> $$
> 形式上的比
> $$
> \frac{x - \frac{3}{2}}{-1} = \frac{y + \frac{1}{2}}{0} = \frac{z - 0}{1}
> $$

### · 直线投影问题

/example/    求直线 $L = \left\{ \begin{aligned}
x + y - z - 1 &= 0 \\
x - y + z + 1 &= 0
\end{aligned} \right.$ 在平面 $\pi = x + y + z = 0$ 上投影直线 $L'$ 的方程

<img src="https://nicostore-mathematica.github.io/picx-images-hosting/c1.9kgaaygm0n.webp" alt=/>

***

解法一：直线的两点式

$L$ 上任取 $P_1$, $P_2$ 两点， $P_1$ 与 $\pi$ 点向式，得到 $P_1P_1'$，与 $\pi$ 交于 $P_1'$ ， $P_2$ 同理。

***

解法二：直线的一般式

$L'$ 为 $\pi$ 与 $\pi'$ 联立，点法式求 $\pi' = L$ 上任取一点 $P_1$

$L$ 的方向向量 $\overrightarrow{l} = \{1, -1, 1\} \times \{1, -1, 1\}$ 与 $\pi$ 的法向量 $\overrightarrow{n} = \{1, 1, 1\}$ 叉乘，得 $\pi'$ 的法向量

***

解法三：设 $L$ 与 $L'$ 确定的平面为 $\pi'$

设 $\pi'$ 的方程为：
$$
\lambda (x + y - z - 1) + \mu (x - y + z + 1) = 0
$$
 $\pi'$ 的法向量 $\overrightarrow{n'} = \{1, 1, 1\}$

由 $(\lambda + \mu)x + (\lambda - \mu)y + (\mu - \lambda)z = 0$

$$
\overrightarrow{n'} = \{\lambda + \mu, \lambda - \mu, \mu - \lambda\}
$$
由 $\overrightarrow{n} \perp \overrightarrow{n'}$，有
$$
\lambda + \mu + \lambda - \mu + \mu - \lambda = 0
$$

$$
\mu = -\lambda
$$

$$
2\lambda y - 2\lambda z - 2\lambda = 0
$$

$$
\Rightarrow y - z - 1 = 0
$$

$$
\therefore L' = \left\{ \begin{aligned}
x + y + z &= 0 \\
y - z - 1 &= 0
\end{aligned} \right.
$$

### · 直线平面关系

<img src="https://nicostore-mathematica.github.io/picx-images-hosting/c2.54xv5p4dks.webp" alt=/>

$L_1: \frac{x - x_1}{l_1} = \frac{y - y_1}{m_1} = \frac{z - z_1}{n_1}$

$L_2: \frac{x - x_2}{l_2} = \frac{y - y_2}{m_2} = \frac{z - z_2}{n_2}$

直线 $L_1$ 和 $L_2$ 的关系

1. 若 $(\overrightarrow{v}_1 \times \overrightarrow{v}_2) \cdot \overrightarrow{M_1M_2} = 0$ $\iff L_1, L_2$ 共面

2. 若 $(\overrightarrow{v}_1 \times \overrightarrow{v}_2) \cdot \overrightarrow{M_1M_2} = 0$, 且 $\overrightarrow{v}_1 \neq \overrightarrow{v}_2$  $\iff L_1, L_2$  相交

3. $\overrightarrow{v}_1 \parallel \overrightarrow{v}_2 \iff L_1 \parallel L_2$

4. 若 $(\overrightarrow{v}_1 \times \overrightarrow{v}_2) \cdot \overrightarrow{M_1M_2} \neq 0$  $\iff L_1, L_2$  为异面直线

#### · 异面直线距离

若 $L_1, L_2$ 为异面直线，求 $|\overrightarrow{O_1O_2}|$ (公垂线)

<img src="https://nicostore-mathematica.github.io/picx-images-hosting/c3.3d4wasl0oq.webp" alt=/>

***

解法一 过$O_1$ 作$L_2' \parallel L_2$

由$L_1$,$L_2'$ 构成一平面，$L_2$ 任意一点到平面一点均相等。

问题：如何确定$O_1$

***

解法二 过$M_1$ 作$L_2' \parallel L_2$

则高度$|\overrightarrow{O_1O_2}| = |\overrightarrow{M_1M_2} \cdot \overrightarrow{n^0}|$ ，其中，$\overrightarrow{n^0}$ 为$\overrightarrow{v_1} \times \overrightarrow{v_2}$ 的单位矢量

$$
\overrightarrow{n^0} = \frac{\overrightarrow{v_1} \times \overrightarrow{v_2}}{|\overrightarrow{v_1} \times \overrightarrow{v_2}|}
$$

***

解法三 精彩一刻
$$
|\overrightarrow{O_1O_2}| = \frac{|(\overrightarrow{v_1} \times \overrightarrow{v_2}) \cdot \overrightarrow{M_1M_2}|}{|\overrightarrow{v_1} \times \overrightarrow{v_2}|}
$$
$h = \frac{V}{S}$

/question/    求$O_1O_2$ 的方程

设$O_1O_2$ 与$L_1$ 确定的平面为$\pi_1$
$$
M_1 \in \pi_1, \quad \overrightarrow{n_1} = (\overrightarrow{v_1} \times \overrightarrow{v_2}) \times \overrightarrow{v_1}
$$
点法式写出$\pi_1$ 方程

设$O_1O_2$ 与$L_2$ 确定的平面为$\pi_2$

$$
M_2 \in \pi_2, \quad \overrightarrow{n_2} = (\overrightarrow{v_1} \times \overrightarrow{v_2}) \times \overrightarrow{v_2}
$$
点法式写出$\pi_2$ 方程

***

转化思路，使用参数方程：

不妨设
$$
L_1 = \left\{\begin{aligned}
x &= x_1(s) \\
y &= y_1(s) \\
z &= z_1(s)
\end{aligned}\right. \quad
L_2 = \left\{\begin{aligned}
x &= x_2(t) \\
y &= y_2(t) \\
z &= z_2(t)
\end{aligned}\right.
$$
设 $O_1(x_1(s), y_1(s), z_1(s))$

设 $O_2(x_2(t), y_2(t), z_2(t))$

$\overrightarrow{O_1O_2} \parallel \overrightarrow{v_1} \times \overrightarrow{v_2} = \{a, b, c\} \neq 0$，有

$$
\frac{x_2(t) - x_1(s)}{a} = \frac{y_2(t) - y_1(s)}{b} = \frac{z_2(t) - z_1(s)}{c}
$$

***

### · 向量表示夹角

求 $L_1$ 与 $L_2$ 的夹角 $\theta$ ($0 \leq \theta \leq \frac{\pi}{2}$)

(1) $0 \leq <\overrightarrow{v_1}, \overrightarrow{v_2}> \leq \frac{\pi}{2}$

$$
\cos \theta = \cos <\overrightarrow{v_1}, \overrightarrow{v_2}> = \frac{\overrightarrow{v_1} \cdot \overrightarrow{v_2}}{|\overrightarrow{v_1}| |\overrightarrow{v_2}|}= \frac{|\overrightarrow{v_1} \cdot \overrightarrow{v_2}|}{|\overrightarrow{v_1}| |\overrightarrow{v_2}|}
$$
(2) $\frac{\pi}{2} \leq <\overrightarrow{v_1}, \overrightarrow{v_2}> \leq \pi$

$$
\cos \theta = \cos [\pi - <\overrightarrow{v_1}, \overrightarrow{v_2}>]
= -\cos <\overrightarrow{v_1}, \overrightarrow{v_2}>
= -\frac{\overrightarrow{v_1} \cdot \overrightarrow{v_2}}{|\overrightarrow{v_1}| |\overrightarrow{v_2}|}
= \frac{|\overrightarrow{v_1} \cdot \overrightarrow{v_2}|}{|\overrightarrow{v_1}| |\overrightarrow{v_2}|}
$$
总之，

$$
\cos \theta = \frac{|\overrightarrow{v_1} \cdot \overrightarrow{v_2}|}{|\overrightarrow{v_1}| |\overrightarrow{v_2}|} \quad (0 \leq \theta \leq \frac{\pi}{2})
$$
($\overrightarrow{v_1} \neq 0$, $\overrightarrow{v_2} \neq 0$)

2.求平面 $\pi_1$ 与 $\pi_2$ 的夹角 $\theta$ ($0 \leq \theta \leq \frac{\pi}{2}$)
$$
\cos \theta = \frac{|\overrightarrow{n_1} \cdot \overrightarrow{n_2}|}{|\overrightarrow{n_1}| |\overrightarrow{n_2}|}
$$

3.直线 $L$ 与平面 $\pi$ 的夹角 $\theta$ ($0 \leq \theta \leq \frac{\pi}{2}$)
$$
\iff \sin \theta = \frac{|\overrightarrow{v_1} \cdot \overrightarrow{v_2}|}{|\overrightarrow{v_1}| |\overrightarrow{v_2}|} \quad (0 \leq \theta \leq \frac{\pi}{2})
$$

***

## Fragment 3 一般曲面方程

### · 球面

设一动点到一定点 $P_0(x_0, y_0, z_0)$ 的距离为 $R$，求此轨迹方程。

> /solution/
>
> 设 $P(x, y, z)$ 是轨迹上任意一点。
>
> 由条件知，$|P_0P| = R \iff |P_0P|^2 = R^2$
>
> $(x - x_0)^2 + (y - y_0)^2 + (z - z_0)^2 = R^2$
>
> 表示以 $P_0(x_0, y_0, z_0)$ 为中心，半径为 $R$ 的球面。

### · 柱面

> /Define/
>
> 设 $\Gamma$ 为一定曲线，$\vec{\nu}$ 为一个非零的常矢量，$L$ 为一动直线，当 $L$ 沿着曲线 $\Gamma$（$L$ 与 $\Gamma$ 相交）且与 $\vec{\nu}$ 平行移动所产生的曲面，称为柱面，称 $L$ 为母线，$\Gamma$ 称为准线

请问：$x^2 + y^2 = R^2$ ($R > 0$，常数)  表示什么？

***

/example/ 求以曲线 $\left\{\begin{aligned}
&f(x, y) = 0 \\
&z = k (\text{Constant})
\end{aligned}\right.$ 为准线，母线平行于 $Oz$ 轴的柱面的方程

<img src="https://nicostore-mathematica.github.io/picx-images-hosting/c5.2yygk49prd.webp" alt=/>

> 设 $M(x, y, z)$ 是柱面上任意一点。
>
> 过 $M$ 点作平行于 $Oz$ 轴的母线与 $\Gamma$ 交于 $M_1(x_1, y_1, z_1)$，有
>
> $$
> \left\{
> \begin{aligned}
> f(x_1, y_1) &= 0 \\
> z_1 &= k
> \end{aligned}
> \right.
> $$
>
> 因
> $$
> \left\{
> \begin{aligned}
> x &= x_1 \\
> y &= y_1
> \end{aligned}
> \right.
> $$
>
> $\therefore M$ 点坐标满足方程为 $f(x, y) = 0$
>
> 就是该曲面的方程

曲面 $f(x, z) = 0$ 表示什么？

柱面，$f(x, z) = 0$ 与 $y = k$（常数）交线为准线，母线平行于 $Oy$ 轴。

知 $x^2 + y^2 = R^2$，表示以 
$$
\left\{
\begin{aligned}
x^2 + y^2 &= R^2 \\
z &= 0
\end{aligned}
\right.
$$
为准线，母线平行于 $Oz$ 轴的圆柱面。

<img src="https://nicostore-mathematica.github.io/picx-images-hosting/c6.1lbxg3fyrq.webp" alt=/>

***

/example/    $y = x^2$ 的曲面

> /proof/
> $$
> \left\{
> \begin{aligned}
> y &= x^2 \\
> z &= 0
> \end{aligned}
> \right.
> $$
> 为准线，母线平行于 $Oz$ 轴的抛物柱面

<img src="https://nicostore-mathematica.github.io/picx-images-hosting/c7.60uclcsczo.webp" alt=/>

***

平行于 $Oz$ 轴的平面，方程为 $Ax + By + D = 0$ （可看成一柱面）

/example/   侧面 $x + y = 1$ 表示的平面

> /proof/
>
> 以 $\left\{
> \begin{aligned}
> x + y &= 1 \\
> z &= 0
> \end{aligned}
> \right.$ 为准线，
>
> 母线平行于 $Oz$ 轴。

### · 锥面

设 $O$ 是空间一定点，$\Gamma$ 是一定曲线，$O \notin \Gamma$，有一动直线 $L$ 经过 $O$ 点，与 $\Gamma$ 相交，设 $\Gamma$ 移动所生成的曲面称为锥面，

$O$ 点称为顶点，动直线称为母线，$\Gamma$ 称为准线。

<img src="https://nicostore-mathematica.github.io/picx-images-hosting/c8.7lk3ku3iqn.webp" alt=/>

求锥面方程的方法：

设 $M$ 点是锥面上任意一点，连接 $OM$，与 $\Gamma$ 相交于 $M_1(x_1, y_1, z_1)$，

$M_1(x_1, y_1, z_1)$ 满足 $\Gamma$ 的方程，$\overrightarrow{OM} \parallel \overrightarrow{OM_1} \iff$ 向量对应成比例。

### · 旋转曲面

/example/    求曲线 $\Gamma = \left\{
\begin{aligned}
&f(y, z) = 0 \\
&x = 0
\end{aligned}
\right.$  绕 $Oz$ 轴旋转一周所形成的旋转曲面的方程。

<img src="https://nicostore-mathematica.github.io/picx-images-hosting/c9.64dyj2zdzy.webp" alt=/>

> /proof/
>
> 设 $M(x, y, z)$ 是曲面上任意一点，
>
> 则 $M(x, y, z)$ 是由曲线 $\Gamma$ 上某点 $M_1(x_1, y_1, z_1)$ 旋转形成的圆周上的一点。
>
> 已知
> $$
> \left\{
> \begin{aligned}
> f(y_1, z_1) &= 0 \\
> x_1 &= 0
> \end{aligned}
> \right.
> $$
>
> $z = z_1, \quad |O_1M| = |O_1M_1|$
>
> $x^2 + y^2 = x_1^2 + y_1^2 = y_1^2$
>
> $y_1 = \pm \sqrt{x^2 + y^2}$
>
> 知曲面的方程为 $f(\pm \sqrt{x^2 + y^2}, z) = 0$

***

/example/
$$
\left\{
\begin{aligned}
f(y, z) &= 0 \\
x &= 0
\end{aligned}
\right.
$$

绕 $Oy$ 轴旋转得到曲面方程为  $f(y, \pm \sqrt{z^2 + x^2})$

/example/
$$
\left\{
\begin{aligned}
f(x, y) &= 0 \\
z &= 0
\end{aligned}
\right.
$$

绕 $Ox$ 轴旋转得到曲面方程为  $f(x, \pm \sqrt{y^2 + z^2})$

***

/example/ $\frac{x^2}{a^2} + \frac{y^2}{b^2} - \frac{z^2}{c^2} = 1$ 是否是旋转曲面？

> 是旋转曲面

它是如何形成的？

> $$
> \left\{
> \begin{aligned}
> \frac{y^2}{b^2} - \frac{z^2}{c^2} &= 1 \\
> x &= 0
> \end{aligned}
> \right.
> $$
>
> 绕 $Oz$ 轴旋转所得到

验证：$\frac{(\pm \sqrt{y^2 + x^2})^2}{a^2} - \frac{z^2}{c^2} = 1$

$$
\iff \frac{x^2}{a^2} + \frac{y^2}{a^2} - \frac{z^2}{c^2} = 1
$$

<img src="https://nicostore-mathematica.github.io/picx-images-hosting/c10.ic858gjn6.webp" alt=/>

也可以看成由 $\left\{
\begin{aligned}
\frac{x^2}{a^2} - \frac{z^2}{c^2} &= 1 \\
y &= 0
\end{aligned}
\right.$

绕 $Oz$ 轴旋转得到

验证：$\frac{x^2 + y^2}{a^2} - \frac{z^2}{c^2} = 1$

即 $\frac{x^2}{a^2} + \frac{y^2}{a^2} - \frac{z^2}{c^2} = 1$

<img src="https://nicostore-mathematica.github.io/picx-images-hosting/c11.13lvrjazxv.webp" alt=/>

#### · 绕轴旋转曲面方程求解

把曲线$\Gamma$表示为
$$
\left\{
\begin{aligned}
x &= f(z) \\
y &= g(z) \\
z &= z
\end{aligned}
\right.
$$

解 设$M(x, y, z)$是曲面上任意一点。

$M$由$\Gamma$上某点$M_1(x_1, y_1, z_1)$绕$Oz$轴

旋转形成的圆周上的一点，有

$$
\left\{
\begin{aligned}
x_1 &= f(z_1) \\
y_1 &= g(z_1)
\end{aligned}
\right.
$$

$$
\begin{align*}
z = z_1, \quad x^2 + y^2 &= x_1^2 + y_1^2\\
&= f^2(z_1) + g^2(z_1)\\
&= f^2(z) + g^2(z)
\end{align*}
$$

就是我们所求的曲面方程。

## Fragment 4 二次曲面

面一般方程$F(x, y, z) = 0$表示的曲面：用一系列平行于坐标平面的平面去截这个曲面，截口是一个曲线

/example/


$$
\left\{
\begin{aligned}
f(x, y, z) &= 0 \\
z &= k
\end{aligned}
\right.

\iff \left\{
\begin{aligned}
f(x, y, k) &= 0 \\
z &= k
\end{aligned}
\right.
$$
是一个曲线，由一系列的曲线，可以画出曲面的草图。

这种方法称为平面截割法。

### · 椭球面

$$
\frac{x^2}{a^2} + \frac{y^2}{b^2} + \frac{z^2}{c^2} = 1 \quad (a > 0, b > 0, c > 0)
$$

由如下方程组
$$
\left\{
\begin{aligned}
\frac{x^2}{a^2} + \frac{y^2}{b^2} + \frac{z^2}{c^2} &= 1 \\
z &= k \quad |k| < c
\end{aligned}
\right.
$$
可以推出
$$
\iff \left\{
\begin{aligned}
\frac{x^2}{a^2} + \frac{y^2}{b^2} &= 1 - \frac{k^2}{c^2} \\
z &= k
\end{aligned}
\right.
$$

$$
\iff \left\{
\begin{aligned}
\frac{x^2}{(a \sqrt{1 - \frac{k^2}{c^2}})^2} + \frac{y^2}{(b \sqrt{1 - \frac{k^2}{c^2}})^2} = 1 \\
z = k \quad |k| < c
\end{aligned}
\right.
$$



<img src="https://nicostore-mathematica.github.io/picx-images-hosting/c12.175hq3po16.webp" alt=/>

（由特殊图画一般曲面的草图）

当 $a = b$ 时，椭球面方程为

$$
\frac{x^2}{a^2} + \frac{y^2}{a^2} + \frac{z^2}{c^2} = 1
$$

是旋转曲面，是由 $\left\{
\begin{aligned}
\frac{y^2}{a^2} + \frac{z^2}{c^2} &= 1 \\
x &= 0
\end{aligned}
\right.$ 绕 $Oz$ 轴旋转所得曲面

<img src="https://nicostore-mathematica.github.io/picx-images-hosting/c13.1ovjeox6f7.webp" alt=/>

适用情况：方程中有两个变量的平方，符号相同，画草图时可令其系数相同，变为旋转曲面。

### · 单叶双曲面

$$
\frac{x^2}{a^2} + \frac{y^2}{b^2} - \frac{z^2}{c^2} = 1
$$

令 $a = b$，得

$$
\frac{x^2}{a^2} + \frac{y^2}{a^2} - \frac{z^2}{c^2} = 1
$$

是旋转曲面，由 

$$
\left\{
\begin{aligned}
\frac{x^2}{a^2} - \frac{z^2}{c^2} &= 1 \\
x &= 0
\end{aligned}
\right.
$$
绕 $Oz$ 轴旋转得到

<img src="https://nicostore-mathematica.github.io/picx-images-hosting/c14.8add5q18ed.webp" alt=/>

### · 双叶双曲面

$$
\frac{x^2}{a^2} + \frac{y^2}{b^2} - \frac{z^2}{c^2} = -1
$$

令 $a = b$，得

$$
\left\{
\begin{aligned}
\frac{y^2}{a^2} - \frac{z^2}{c^2} &= -1 \\
x &= 0
\end{aligned}
\right.
$$

绕 $Oz$ 轴旋转所得曲面

<img src="https://nicostore-mathematica.github.io/picx-images-hosting/c15.1vyra4jbup.webp" alt=/>

### · 二次锥面

$$
\frac{x^2}{a^2} + \frac{y^2}{b^2} - \frac{z^2}{c^2} = 0
$$

令 $a = b$，有

$$
\frac{x^2}{a^2} + \frac{y^2}{a^2} - \frac{z^2}{c^2} = 0
$$

由

$$
\left\{
\begin{aligned}
\frac{y^2}{a^2} - \frac{z^2}{c^2} &= 0 \\
x &= 0
\end{aligned}
\right.
$$

绕 $Oz$ 轴旋转所得曲面

$$
\iff
\left\{
\begin{aligned}
\frac{y}{a} + \frac{z}{c} &= 0 \\
x &= 0
\end{aligned}
\right.
\quad \text{or} \quad
\left\{
\begin{aligned}
\frac{y}{a} - \frac{z}{c} &= 0 \\
x &= 0
\end{aligned}
\right.
$$
<img src="https://nicostore-mathematica.github.io/picx-images-hosting/c16.m6hi6w8y.webp" alt=/>

### · 椭圆抛物面

$$
z = \frac{x^2}{a^2} + \frac{y^2}{b^2}
$$

当 $a = b$ 时，$z = \frac{x^2}{a^2} + \frac{y^2}{a^2}$ ，由 $\left\{
\begin{aligned}
z &= \frac{y^2}{a^2} \\
x &= 0
\end{aligned}
\right.$  绕 $Oz$ 轴旋转所得曲面

<img src="https://nicostore-mathematica.github.io/picx-images-hosting/c17.6f0sd3p1qi.webp" alt=/>

### · 双曲抛物面

$$
z = -\frac{x^2}{a^2} + \frac{y^2}{b^2} 
$$

由 $\left\{
\begin{aligned}
z &= -\frac{x^2}{a^2} + \frac{y^2}{b^2} \\
x &= 0
\end{aligned}
\right.$


$$
\iff
\left\{
\begin{aligned}
z &= \frac{y^2}{b^2} \\
x &= 0
\end{aligned}
\right.
$$

(1) 是抛物线

根据
$$
\left\{
\begin{aligned}
z &= -\frac{x^2}{a^2} + \frac{y^2}{b^2} \\
y &= k
\end{aligned}
\right.
$$

$$
\iff \left\{
\begin{aligned}
z - \frac{k^2}{b^2} &= -\frac{x^2}{a^2} \\
y &= k
\end{aligned}
\right.
$$

(2) 是抛物线，顶点是 $(0, k, \frac{k^2}{b^2})$

在抛物线 (1) 上
$$
\left\{
\begin{aligned}
z  &= -\frac{x^2}{a^2}+\frac{k^2}{b^2} \\
z &= k
\end{aligned}
\right.
$$
<img src="https://nicostore-mathematica.github.io/picx-images-hosting/c18.3yejy6i5u2.webp" alt=/>

## Fragment 5 空间曲线研究方法

1.画曲线的草图

注意把方程组进行恒等变形，以使清楚知道是什么曲线，如何画草图

/example/
$$
\left\{
\begin{aligned}
x^2 + y^2 + z^2 &= 1 \\
x^2 + y^2 + z^2 &= z + \frac{3}{4}
\end{aligned}
\right.
$$

面该曲线的图形

> /proof/
>
> (2) - (1)： $0 = z - \frac{1}{4}$
> $$
> \left\{
> \begin{aligned}
> x^2 + y^2 &= \frac{15}{16} \\
> z &= \frac{1}{4}
> \end{aligned}
> \right.
> $$
>
> 

2.求曲线$\Gamma$
$$
\left\{
\begin{aligned}
F(x, y, z) &= 0 \\
G(x, y, z) &= 0
\end{aligned}
\right.
$$

在$xoy$平面上投影曲线 $\Gamma'$ 的方程

<img src="https://nicostore-mathematica.github.io/picx-images-hosting/c19.51e992dzpk.webp" alt=/>

> /proof/
>
> 设 $\Gamma '$ 即为准线 $\Gamma$，母线平行于 $Oz$ 轴
>
> 的线形成的柱面，与 $xoy$ 平面 $(z = 0)$ 的交线
>
> 由 $\left\{
> \begin{aligned}
> F(x, y, z) &= 0 \\
> G(x, y, z) &= 0
> \end{aligned}
> \right.$
>
> 消去 $z$，得到 $H(x, y) = 0$
>
> 知该曲面是以 $\Gamma$ 为准线，
>
> 母线平行于 $Oz$ 轴的柱面，
>
> 则投影曲线 $\Gamma'$：
>
> $$
> \Gamma' : \left\{
> \begin{aligned}
> H(x, y) &= 0 \\
> z &= 0
> \end{aligned}
> \right.
> $$

向量代数结束，大家新年快乐