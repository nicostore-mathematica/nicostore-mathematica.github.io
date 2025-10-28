---
title: Chapter 3 时域分析
createTime: 2025/09/17 19:34:31
permalink: /circuit/circuit-3/
---

## Part 0 微分方程

### · 可分离变量方程

**形式**：
$$
\frac{dy}{dx} = f(x)g(y)
$$
**特点**：已解出一阶导数，右端是一个 $x$ 一元函数和 $y$ 一元函数的积

**解法**：

> (1). $g(y) \neq 0$   时，分离变量， $\frac{dy}{g(y)} = f(x) dx$，两侧积分,
> $$
> \int \frac{dy}{g(y)} = \int f(x) dx +C
> $$
> (2). 当 $y = y_0$,  有 $g(y_0) = 0$,   则  $y = y_0$ 也是方程的一个解

#### · 一阶齐次方程

$$
\frac{dy}{dx} = g\left(\frac{y}{x}\right) \Rightarrow u = \frac{y}{x}，  y = ux \Rightarrow y' = u + xu' \Rightarrow \frac{du}{dx} = \frac{g(u) - u}{x}
$$

#### · 其它可分离变量方程

(1). 
$$
\quad y' = f(ax+by+c) \quad \Rightarrow \quad z=ax+by+c \quad \Rightarrow \quad \frac{dz}{dx} = bf(z) + a
$$
(2). 线性方程比例形式
$$
y = f\left(\frac{a_1 x + b_1 y + c_1}{a_2 x + b_2 y + c_2}\right)
$$

> 只须讨论  $C_1, C_2$  不全为0， $\frac{a_1}{a_2} \neq \frac{b_1}{b_2}$ 
>
> 当 $C_1, C_2$  均为0时,
> $$
> y' = f\left(\frac{a_1x + b_1y}{a_2x + b_2y}\right)
> $$
> 解法令  $X = x - x_0$ ， $Y = y - y_0$ ，$X_0, Y_0$  满足
> $$
> \begin{cases} 
> a_1X_0 + b_1Y_0 + C_1 = 0 \\
> a_2X_0 + b_2Y_0 + C_2 = 0 
> \end{cases}
> $$

### · 一阶线性方程

$$
y' + P(x)y = Q(x)
$$

**基本解法**：

在这里介绍一阶线性常微分方程的基本解法

> > 1). $Q=0$ ， 
> > $$
> > y' + P(x)y \Rightarrow \frac{dy}{y} = -P(x)dx  ,\quad  \ln|y| = -\int P(x)dx \\
> > $$
> >
> > 两侧同时带入指数函数
> > $$
> > \Rightarrow y = \pm e^{-\int P(x)dx} \cdot e^{C_2}={C}e^{-\int P(x)dx}
> > $$
>
> 
>
> > 2). $Q\neq 0$ ，设原方程的解 $y = C(x)e^{-\int P(x)dx}$ (**常数变易法**)，代入方程得
> > $$
> > C'(x) e^{-\int P} + C(x) e^{-\int P} (-P) + P C e^{-\int P} = Q
> > $$
> >
> > $$
> > C'(x) = Q(x)e^{\int P(x)dx}
> > $$
>
> 原方程的解：
> $$
> y = e^{-\int P(x)dx} \left[ \int Q(x)e^{\int P(x)dx} dx + C \right]
> $$

