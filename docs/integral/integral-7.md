---
title: Chapter 7 ODE
createTime: 2025/02/06 10:48:41
permalink: /integral/integral-7/
---

~~好吧，我感觉这个更像是熟练工种~~

2024.12.25更新，我不同意我昨天说的观点

## Part 1 一阶线性微分方程

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

/example/  求解：
$$
xy' = y + 2\sqrt{xy}
$$

> 设 $y = xu$ 则 $ y' = xu' + u$ ，方程化为
> $$
> x(xu' + u) = xu + 2|x|\sqrt{u}
> $$
>
> $$
> \Rightarrow u' = \begin{cases} 2\frac{\sqrt{u}}{x} & x > 0 \\ -2\frac{\sqrt{u}}{x} & x < 0 \end{cases} \text{ } \Rightarrow \frac{du}{2\sqrt{u}} = \pm\frac{dx}{x}
> $$
> 两边积分，
> $$
> \sqrt{u} = \pm\ln|x| + C,\quad u = (\pm\ln|x| + C)^2
> $$
>  ，另外，$u=0$ 也是解
>
> 代换后即可解出关于 $y$ 的表达式。

#### · 其它可分离变量方程

> [!important]
>
> (1). 
> $$
> \quad y' = f(ax+by+c) \quad \Rightarrow \quad z=ax+by+c \quad \Rightarrow \quad \frac{dz}{dx} = bf(z) + a
> $$

/example/  求解
$$
\quad y' = \cos(x - y)
$$

> 令 $z = x - y$ ，方程化为
> $$
> z' + 1 = \cos z \quad \Rightarrow \quad \frac{dz}{\cos z - 1} = dx
> $$
>
> $$
> \frac{dz}{2\sin^2\frac{z}{2}} = -dx \quad \Rightarrow \quad -\cot\frac{z}{2} = -x + C \quad \Rightarrow \quad \cot\frac{z}{2} = x + C
> $$
>
> 若写成 $\text{arccot}$ 形式，则限制了 $x$ 和  $y$ 的范围，不可取。
>
> 另外， $\cos z = 1$ 也为解，
>
> 原方程的解为 $\cot\frac{y - x}{2} = x + C$  ( $C$ 为任意常数), $y = x + 2k\pi(k \in \mathbb{Z})$

> [!important]
>
> (2). 线性方程比例形式
> $$
> y = f\left(\frac{a_1 x + b_1 y + c_1}{a_2 x + b_2 y + c_2}\right)
> $$
>
> > 只须讨论  $C_1, C_2$  不全为0， $\frac{a_1}{a_2} \neq \frac{b_1}{b_2}$ 
> >
> > 当 $C_1, C_2$  均为0时,
> > $$
> > y' = f\left(\frac{a_1x + b_1y}{a_2x + b_2y}\right)
> > $$
> > 解法令  $X = x - x_0$ ， $Y = y - y_0$ ，$X_0, Y_0$  满足
> > $$
> > \begin{cases} 
> > a_1X_0 + b_1Y_0 + C_1 = 0 \\
> > a_2X_0 + b_2Y_0 + C_2 = 0 
> > \end{cases}
> > $$

### · 一阶线性方程

$$
y' + P(x)y = Q(x)
$$

#### · 基本解法

在这里介绍一阶线性常微分方程的基本解法

> > 1). $Q=0$ ， 
> >
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
> > 2). $Q\neq 0$ ，设原方程的解  $y = C(x)e^{-\int P(x)dx}$ (**常数变易法**)，代入方程得
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

/example/	$(x+1)y' - \alpha y = e^x (x+1)^{\alpha+1}$ 

>/proof/
>$$
>y' - \frac{\alpha}{x+1} y = e^x (x+1)^{\alpha},\quad P(x) = -\frac{\alpha}{x+1},\quad Q(x) = e^x (x+1)^{\alpha},\quad
>\int P(x) dx = -\alpha \ln |x+1|
>$$
>代入公式得：
>$$
>y = e^{\alpha \ln |x+1|} \left[ \int e^x (x+1)^{\alpha} e^{-\alpha \ln |x+1|} dx + C \right] = (x+1)^{\alpha} (e^x + C)
>$$
>(C 为任意常数)

/example/
$$
y' = \frac{y}{2x - y^2}
$$

> 方程化为
> $$
> \frac{dx}{dy} = \frac{2}{y}x - y  ,\quad  P(x) = -\frac{2}{y}  ,\quad  Q(x) = -y  ,\quad  \int P(x) dx = -\ln y^2
> $$
> 然后直接套公式：
> $$
> x = e^{\ln y^2} \left[ \int (-y) e^{-\ln y^2} dy + C \right] = y^2(-\ln y + C)
> $$
> ( C  为任意常数)

/example/  求解
$$
\int_0^1 f(ux) du = \frac{1}{x} f(x) + 1
$$

> $$
> \int_0^1 f(ux) \, du \quad \stackrel{v=ux}{=} \quad \frac{1}{x} \int_0^x f(v) \, dv\\
> $$
>
> $$
> \int_{0}^{x} f(v) \, dv = \frac{1}{2} x f(x) + x\Rightarrow f(x) = \frac{1}{2} f(x) + \frac{1}{2} f(x) \cdot x + 1\\
> $$
>
> $$
> \Rightarrow x f'(x) - f(x) + 2 = 0 \Rightarrow  f(x) - \frac{1}{x} f(x) = -\frac{2}{x}\\
> $$
>
> $$
> \int -\frac{1}{x} \, dx = -\ln x\\
> $$
>
> $$
> f(x) = e^{\ln x} \left( \int -\frac{2}{x} e^{-\ln x} dx + C \right) = x(\frac{2}{x} + C) = 2 + Cx
> $$

### · 可降价高阶微分方程

我们已学了一阶微分方程的基本解法，然后介绍一些微分方程，这些方程可以通过各种手段化为一阶微分方程，其中最具代表性的便是Bernoulli方程(具有已知精确解的非线性微分方程)

> [!important]
>
> **Bernoulli方程**：
> $$
> y' + P(x)y = Q(x)y^n  \ ( n \neq 0, 1  )
> $$
>
> 
>
> 解法：代换  $z = y^{1-n}$  则
> $$
> z' + (1-n)Pz = (1-n)Q
> $$
> （线性方程）
>
> **此外还有几种特殊形式**：
>
> (1). $y^{(n)} = f(x)$  →  逐次积分
>
> (2). $y'' = f(x, y) \rightarrow$ 设  $y' = p, \quad \frac{dp}{dx} = f(x, y)$ 
>
> (3). $y'' = f(y, y') \rightarrow$ 设 $y' = p \Rightarrow\frac{dp}{dy} = f(y, p)$
> $$
> y'' = \frac{dp}{dx} = \frac{dp}{dy} \cdot \frac{dy}{dx} = p \frac{dp}{dy}
> $$

/example/ 求解方程
$$
y' - \frac{y}{x} + xy^2 = 0
$$

>$$
>\text{if} \quad  z = y^{-1} ,\quad z' + \frac{6}{x}z = x ,\quad \int \frac{6}{x}dx=6\ln|x|
>\\
>$$
>
>$$
>z = e^{-\int \frac{6}{x} \, dx} \left[ \int xe^{6\ln|x|} \, dx + C \right] = \frac{1}{x^6} \left( \frac{x^8}{8} + C \right)
>$$

/example/ 求解方程
$$
xy'' + y' = 4x
$$

>$$
>y' = p\Rightarrow p' + \frac{1}{x}p = 4 \\
>$$
>
>$$
>\int \frac{1}{x} \, dx = \ln|x| = \frac{1}{2} \ln x^2 \\
>$$
>
>$$
>P = e^{-\ln|x|} \left( \int e^{\frac{1}{2} \ln x^2} \cdot 4 \, dx + C \right) 
>= \frac{1}{|x|} \left( \int 4|x| \, dx + C \right) 
>= \begin{cases} 
>\frac{1}{x} (2x^2 + C) & x > 0 \\
>-\frac{1}{x} (-2x^2 + C) & x < 0 
>\end{cases} \\
>$$
>
>$$
>p = 2x + \frac{C}{x}
>$$
>
>$$
>y = x^2 + C \ln|x| + C_1
>$$

/example/ 求解方程
$$
y'' + y' = 2e^{-y}
$$

> $$
> p \frac{dp}{dy} + p^2 = 2e^{-y}  ,\quad  \frac{1}{2} \frac{d^2p}{dy^2} + p^2 = 2e^{-y}
> $$

## Part 2   二阶常系数线性微分方程

### · 线性方程解的结构

$$
y^{(n)} + p_n(x)y^{(n-1)} + \cdots + p_1(x)y' = f(x)
$$

，$f(x)$  为非齐次项。

齐次线性微分方程：
$$
y^{(n)} + p_n(x)y^{(n-1)} + \cdots + p_1(x)y = 0
$$

> (1). 线性方程的叠加原理：
>
> -  $y_1(x)$  是方程  $y^{(n)} + \cdots + p_1(x)y = f_1(x)$  的解。
> -  $y_2(x)$  是方程  $y^{(n)} + \cdots + p_1(x)y = f_2(x)$  的解。
> -  $\Rightarrow C_1y_1(x) + C_2y_2(x)$  是方程  $y^{(n)} + \cdots + p_1(x)y = C_1f_1(x) + C_2f_2(x)$  的解。
>
> (2). 推论：齐次线性微分方程的性质
>
> - $y_1(x), y_2(x)$  是方程  $y^{(n)} + \cdots + p_1(x)y = 0$  的解 
>
>   $\Rightarrow C_1y_1(x) + C_2y_2(x)$  也是此方程的解。

### · 二阶线性齐次方程

> 以下的内容和线性代数有一定关联

**标准形式**：（HL）
$$
y'' + p(x)y' + q(x)y = 0
$$
**线性相关与无关**：

- 对函数  $y_1(x), y_2(x)$ ，若有不全为零常数  $C_1, C_2$ ，使  $C_1y_1(x) + C_2y_2(x) \equiv 0$ ，则称  $y_1(x), y_2(x)$  线性相关，否则称线性无关。

**解的结构定理**：

- 若  $y_1(x), y_2(x)$  是方程（HL）两个线性无关的解（称为方程的基本解组），那么通解  $C_1y_1(x) + C_2y_2(x)$ （ $C_1, C_2$  任意常数）给出了方程（HL）的解。
- 方程（HL）的所有解构成二维线性空间，基本解组是一组基。

**Liouville公式**：

- 若   $y_1(x)$  为（HL）非零解， $y_2 = y_1 \int \frac{1}{y_1^2} \,e^{-\int p(x) \, dx} dx$  是方程与  $y_1(x)$  线性无关的解。
- 求（HL）的解归结为求出一个非零特解。
- 简单形式方程常用观察法找出特解， $x^n, e^{ax}, \sin(bx)$  或  $\cos(bx)$ 。

/example/ 求解方程 
$$
(2x+1)y'' + 4xy' - 4y = 0
$$

> $$
> \begin{align*}
> y_2 &= y_1 \int \frac{1}{y_1^2} e^{-\int p(x) \, dx} \, dx \\
> &= x \int \frac{1}{x^2} e^{-2x + \ln(2x+1)} \, dx \\
> &= x \int \frac{1}{x^2} e^{-2x} (2x+1) \, dx \\
> &= x \left( \int \frac{2x}{x^2} e^{-2x} \, dx + \int \frac{1}{x^2} e^{-2x} \, dx \right) \\
> &= -e^{-2x},
> \end{align*}
> $$

/example/ 求解方程
$$
xy'' -y' - (x-1)y = 0
$$

> 解法同上 （猫条の恶趣味）(其实我也不想做 qwq )

### · 二阶线性非齐次方程

标准形式：
$$
y'' + Py' + Q(x)y = f(x)
$$
解的结构定理：设 $y^*(x)$ 是非齐次方程(NHL)的解，而 $y_1(x)$ ， $y_2(x)$ 是对应齐次方程的基本解组，那么通解
$$
y = y*(x) + C_1y_1(x) + C_2y_2(x)
$$

> 如何求出方程特解？常用方法为常数变易法。

/example/	已知 $y'' + y = 0$ 基本解组为 $\cos x, \sin x$ ，求非齐次方程 $y'' + y = \tan x$ 的通解。

> 设 $y^* = C_1(x)\cos x + C_2(x)\sin x$
>
> $$
> (y^*)'= C'_1(x)\cos x - C_1(x)\sin x + C'_2(x)\sin x + C_2(x)\cos x
> $$
> 设 $C_1'(x)\cos x + C_2'(x)\sin x = 0$ ①，
>
> 则
> $$
> (y^*)'' = -C'_1(x)\sin x - C_1(x)\cos x + C'_2(x)\cos x - C_2(x)\sin x
> $$
> 方程化为 $-C_1'(x)\sin x + C_2'(x)\cos x = \tan x$ 。②
>
> 联立方程①②， $C'_1(x) = -\tan x\sin x$ ， $C'_2(x) = \sin x$ 。
>
> $$
> C_2(x) = -\cos x ,\quad C_1(x) = \sin x - \ln|\sec x + \tan x|
> $$

> [!important]
>
> 这种方法有效，数学系学生有一定要求，工科不是特别强调

### · 常系数线性齐次方程

二阶方程形式： $y'' + py' + qy = 0$ 

> [!important]
>
> 解的函数代入方程最后等于0，什么样的函数求导之后形式变化不大？指数函数.

令  $y = e^{rx}$ ，代入后得到  $r^2 + pr + q = 0$ ，求解（三种情况）

方程称为特征方程，根称为特征根

- 相异实根  $r_1, r_2$ ，基本解组为  $e^{r_1x}, e^{r_2x}$ 	

- 相同实根  $r$ ： $e^{rx}  \xrightarrow{Liouville}  xe^{rx}$ 

- 共轭复根： 中学阶断学过  $e^{x+iy} = e^x \cdot e^{iy} = e^x (\cos y + i\sin y)$

  基本解组
  $$
  e^{(\alpha + i\beta)x}, e^{(\alpha - i\beta)x} \xrightarrow{e^{ix} = \cos x + i\sin x}	e^{\alpha x}\cos \beta x ，e^{\alpha x}\sin \beta x
  $$
  
  >  $\lambda=\alpha\pm i\beta$ ，这里虽然复数是成对出现，但是当做是一个根。
  >
  >  通解：
  >
  >  $$
  >  y=c_1 e^{ax}\cos\beta x+c_2 e^{ax}\sin\beta x
  >  $$
  >  推导过程：
  >
  >  先补充欧拉方程：
  >  $$
  >  e^{i x}=\cos x+i\sin x
  >  $$
  >  由欧拉公式进行推导，先推导  $\lambda=\alpha+i\beta$ ：
  >
  >  $$
  >  \begin{align*}
  >  e^{(\alpha+i\beta) x}&=e^{\alpha x+i\beta x} \\
  >  &=e^{\alpha x}(\cos\beta x+i\sin\beta x) \\
  >  &=e^{\alpha x}\cos\beta x+i e^{\alpha x}\sin\beta x \\
  >  &=c_1 e^{\alpha x}\cos\beta x+c_2 e^{\alpha x}\sin\beta x
  >  \end{align*}
  >  $$
  >  这里  $c_2$  实际上包含了  $i$  的。
  >
  >  同理， $\lambda=\alpha-i\beta$  如下：
  >
  >  $$
  >  \begin{align*}
  >  e^{(\alpha-i\beta) x}&=e^{\alpha x-i\beta x} \\
  >  &=e^{\alpha x}(\cos\beta x-i\sin\beta x) \\
  >  &=e^{\alpha x}\cos\beta x-i e^{\alpha x}\sin\beta x \\
  >  &=c_1 e^{\alpha x}\cos\beta x+c_2 e^{\alpha x}\sin\beta x
  >  \end{align*}
  >  $$
  >  因为  $\cos(-x)=\cos x,\sin(-x)=-\sin x$ ，所以可以获得上面公式，这里  $c_2$  是包含了  $-i$  的。

/example/  $y'' + 5y' + 6y = 0$ 

> 特征方程  $r^2 + 5r + 6 = 0$ ， $r = -2, -3$ 
>
> 原方程通解为  $C_1 e^{-2x} + C_2 e^{-3x}$  (  $C_1, C_2$  为常数 )

/example/  $y'' + 4y' + 9y = 0$ 

> 特征方程  $r^2 + 4r + 9 = 0$ ， $r = -2 \pm \sqrt{5}i$ 
>
> 原方程通解   $y = e^{-2x}(C_1 \cos(\sqrt{5}x) + C_2 \sin(\sqrt{5}x))$  (  $C_1, C_2$  为常数 )

二次项常系数微分方程基本解组如何推广到 $n$ 阶？

/example/  $y''' - 3y'' + 3y' - y = 0$ 

> 特征方程  $r^3 - 3r^2 + 3r - 1 = 0$ ， $r = 1$  
>
> 原方程通解  $y = C_1 e^x + C_2 x e^x + C_3 x^2 e^x$ 

### · 常系数非线性齐次方程

求出对应方程基本解组后可用常数变易法（麻烦，非齐次麻烦）

非齐次项可以为某些特殊形式，可用待定系数法

> [!important]
>
> (1).
> $$
> f(x) = (b_0x^n + b_1x^{n-1} + \cdots + b_{n-1}x + b_n)e^{\lambda x}
> $$
> 特解形式为
> $$
> y_p = x^k (B_0x^n + B_1x^{n-1} + \cdots + B_n)e^{\lambda x}
> $$
> k是 $\lambda$ 作为特征方程 $r^2 + pr + q = 0$ 的根的重数（ 若 $\lambda$ 不是特征根则为0重根）

写出下列方程一个特解的特定形式：

> /example/
> $$
> y'' - 6y' + 10y = (x + 1)e^{3x}
> $$
>
> > 特征方程： 
> > $$
> > r^2 - 6r + 10 = 0,\quad r = 3 \pm i
> > $$
> > 原方程特解形式：
> > $$
> > y^* = (ax + b)e^{3x}
> > $$
>
> /example/
> $$
> y'' + y' = x^2 + 1
> $$
>
> > 特征方程：
> > $$
> > r^2 + r = 0,\quad r = 0, -1
> > $$
> > 原方程特解形式：
> > $$
> > y^* = x(ax^2 + bx + c)
> > $$
>
> /example/
> $$
> y'' + 3y' - 4y = e^x
> $$
>
> > 特征方程：
> > $$
> > r^2 + 3r - 4 = 0,\quad r = 1, -4
> > $$
> > 原方程特解形式：
> > $$
> > y^* = axe^x
> > $$

/example/  求解方程
$$
y'' - 3y' + 2y = 3xe^{-x}
$$

> 特征方程 
> $$
> r^2 - 3r + 2 = 0,\quad r = 1, 2
> $$
> 原方程特解
> $$
> y^* = (ax + b)e^{-x}
> $$
> 求导
>
> $$
> (y^*)' = ae^{-x} - (ax + b)e^{-x} = e^{-x}(-ax + a - b),\quad(y^*)'' = e^{-x}(ax - 2a + b)\\
> $$
> 代入方程
> $$
> e^{-x}[(ax - 2a + b) - 3(-ax + a - b) + 2(ax + b)] = 3xe^{-x} \Rightarrow 
> a = \frac{1}{2}, \quad b = \frac{5}{12},\\
> $$
>
> $$
> y = \left(\frac{1}{2}x + \frac{5}{12}\right)e^{-x} + C_1e^x + C_2e^{2x}
> $$

/example/ 求解方程
$$
y'' - 2y' + y = 3xe^x
$$

> 特征方程  $r^2 - 2r + 1 = 0$ ， $r = 1$ （二重根）， $y^* = x^2(ax + b)e^x$ 
>
> $$
> (y^*)' = [(3ax^2 + 2bx) + (ax^3 + bx^2)]e^x \\
> $$
>
> $$
> (y^*)'' = [(3ax^2 + 6ax + 2bx + 2b) + (3ax^2 + 2bx + ax^3 + bx^2)]e^x
> $$
>
> $$
> b = 0, \quad a = \frac{1}{2}, \quad y^* = \frac{1}{2}x^2e^x
> $$

> [!important]
>
> (2).
> $$
> f(x) = \left[ P(x) \cos(\beta x) + Q(x) \sin(\beta x) \right] e^{\alpha x}
> $$
> 其中  $P(x)$  和  $Q(x)$  为最高次数为  $m$  的  $m$  次多项式。
>
> 方程的特解形式  $y^*$  为:
> $$
> y^* = x^k \left[ A(x) \cos(\beta x) + B(x) \sin(\beta x) \right] e^{\alpha x}
> $$
>  $k$  为  $\alpha+i\beta$  作为特征方程  $r^2 + pr + q = 0$  的根的重数，$A(x)$  和  $B(x)$ 为  $m$  次待定多项式。

> /example/	$y'' - y = xe^x \cos x$
>
> >  $$
> >  y^* = \left[(a x + b_1) \cos x + (a x + b_2) \sin x\right] e^x \quad (a + i\beta = 1 + i)
> >  $$
>
> /example/	$y'' + 4y = x \sin 2x$
>
> > 特征方程 $r^2 + 4 = 0, \quad r = \pm 2i, \quad \alpha + \beta i = 2i$
> >
> > $$
> > y^* = x \left[(a_1 x + b_1) \cos 2x + (a_2 x + b_2) \sin 2x\right]
> > $$
> > 
>
> /example/	$y'' - 2y' + 2y = xe^x \cos x$
>
> > 特征方程 $r^2 - 2r + 2 = 0, \quad r = 1 \pm i, \quad \alpha + \beta i = 1 + i$
> >
> > $$
> > y^* = x \left[(a_1 x + b_1) \cos x + (a_2 x + b_2) \sin x\right] e^x
> > $$

/example/
$$
y'' + y = 2\cos x
$$

> $$
> \quad r^2 + 1 = 0, \quad r = \pm i, \quad \alpha + \beta i = i \\
> $$
>
> $$
> \quad  y^* = x(A\cos x + B\sin x) \\
> $$
>
> $$
> \quad (y^*)' = A\cos x + x(-A\sin x + B\cos x) + B\sin x + x(A\cos x + B\sin x) \\
> $$
>
> $$
> \quad (y^*)'' = -2A\sin x + 2A\cos x - A\cos x - A\sin x - A\sin x + B\cos x \\
> $$
>
> $$
> \quad  A_1 = 0, \quad y^* = x\sin x \\
> $$
>
> $$
> \quad  y = x\sin x + C_1\cos x + C_2\sin x \\
> $$

 /example/
$$
y'' - 2y' + 2y = e^x\sin x
$$

>$$
>\quad  r^2 - 2r + 2 = 0, \quad r = 1 \pm i, \quad \alpha + \beta i = 1 + i \\
>$$
>
>$$
>\quad  y^* = x[A\cos x + B\sin x]e^x \\
>$$
>
>$$
>\quad (y^*)' = (A\cos x + B\sin x - Ax\sin x + Bx\cos x + Ax\cos x + Bx\sin x)e^x \\
>$$
>
>$$
>\quad B = 0, \quad A = \frac{1}{2}, \quad y^* = \frac{1}{2}x\cos x e^x
>$$

PS：比较系数宜从多项式最低次数开始

## Part 3 其它类型微分方程

### · Euler 方程

欧拉方程的形式如下
$$
f(x) = x^n y^{(n)} + a_1 x^{n-1} y^{(n-1)} + \cdots + a_{n-1} x y' + a_n y
$$
欧拉提出了一种解法，通过令  $x = e^t$ ，我们可以发现方程已经解出来了。

具体我们可以利用链式法则考察：
$$
\frac{dy}{dt} = \frac{dy}{dx} \cdot \frac{dx}{dt} = y' \cdot e^t = x y' \\
\frac{d^2 y}{dt^2} = \frac{d\left(\frac{dy}{dt}\right)}{dt} = \frac{d\left(x \cdot y'\right)}{dx} \cdot \frac{dx}{dt} = \left(y' + x y''\right) \cdot x = x y' + x^2 y'' \\
$$
由此可以得到：

$$
x y' = \frac{dy}{dt} \\ 
  x^2 y'' = \frac{d^2 y}{dt^2} - \frac{dy}{dt} = \frac{d\left(\frac{d}{dt} - 1\right)}{dt} y
$$
此时我们引入微分算子： $D = \frac{d}{dt}$ 

则上式可写为：

$$
x y' = D y \\ 
  x^2 y'' = D(D-1) y \\
  x^3 y''' = D(D-1)(D-2) y
$$
/example/	 $x^2 y'' - x y' + y = 0$

>  设 $x = e^t$，则方程化为：
>
>  $$
>  D(D-1)y - Dy + y = 0
>  $$
>  特征方程为 $r^2 - 2r + 1 = 0$，解得 $r = 1$（重根）
>
>  $$
>  y = e^t (C_1 t + C_2) = x (C_1 \ln |x| + C_2)
>  $$

/example/	方程 $x^2 y'' + 3xy' + 5y = 0$

> 设 $x = e^t$，则方程化为：
>
> $$
> D(D-1)y + 3Dy + 5y = 0 \quad D = \frac{d}{dt}\\
> r^2 - r + r - 1 = 0，\quad r = \pm 2i\\
> y = e^{-t}(C_1 \cos(2t) + C_2 \sin(2t))\\
> $$
>
> 其中$C_1, C_2$ 为任意常数。

### · 线性微分方程组

一般而言，线性微分方程与一阶线性微分方程组形式可以互换。

二阶线性微分方程的形式： $y'' + p(x) y' + q(x) y = f(x)$ 

通过引进函数  $z = y'$ ，我们可以将二阶线性微分方程转换为一阶线性微分方程组：

$$
\begin{cases} y' = z \\ z' = -p(x) z - q(x) y + f(x) \end{cases}
$$
反之，一阶线性微分方程组可化为方程求解。

例如，求解方程组：

$$
\begin{cases} \frac{dx}{dt} = x + y \\
\frac{dy}{dt} = x - y \end{cases}
$$

> 解法由 $y= \frac{dx}{dt} -x$ 代入后一方程

/example/    求解：

$$
\begin{cases}
\frac{dx}{dt} +\frac{dy}{dt}+ 2x + 6y = 2e^t\\
3\frac{dy}{dt} +2\frac{dx}{dt}+ 3x + 8y = -1
\end{cases}
$$

> 先化为导数解出型
> $$
> \begin{cases}
> \frac{dx}{dt}=?\\
> \frac{dy}{dt}=?\end{cases}
> $$
> 然后便可化为方程求解
>
> （实际上可以使用矩阵求解，鉴于没学线性代数，此处略过）

### · 高阶常系数齐次微分方程

定义：

$$
a_n\frac{d^n y}{d x^n}+a_{n-1}\frac{d^{n-1} y}{d x^{n-1}}+\ldots+a_1\frac{d y}{d x}+a_0 y=f(x)
$$
若：

1.  $f(x)=0$  ，则为齐次方程；
2.  $f(x)\neq 0$  ，则为非齐次方程。

高阶常系数齐次微分方程解的结构为：

$$
y=c_1 y_1(x)+c_2 y_2(x)+\ldots+c_n y_n(x)
$$
齐次方程的解法为：

1. 先将非齐转换为齐，即令  $f(x)=0$ ；
2. 找到特征方程的特征根，假设微分方程为  $y^{\prime\prime}+2 y^{\prime}+y=0$  ，特征方程为  $\lambda^2+2\lambda+1=0$  ，其特征根： $\lambda_1=\lambda_2=-1$ ，即入最高为多少次，那么就有多少个特征根。

现在问题转换为了特征根形式，特征根从大方向上来说一共有3类：

1. 每个特征根都是单重根；
2. 有重根；
3. 有复数根。

都是单根，通解为：
$$
y=c_1 e^{\lambda_1 x}+c_2 e^{\lambda_2 x}+\ldots+c_n e^{\lambda_n x}
$$
有重根，通解为：
$$
y=c_1 e^{\lambda x}+c_2 x e^{\lambda x}+\ldots+c_n x^{n-1} e^{\lambda x}=e^{\lambda x}\left(c_1+c_2 x+\ldots+c_n x^{n-1}\right)
$$

那如果有多重复根呢？

/example/    $y^{(4)}+y=0$ 

> 求解特征方程：
>
> $$
> \begin{align*}
> &y^{(4)} + y = 0 \\
> &\lambda_1 = \lambda_2 = \frac{\sqrt{2}}{2} + \frac{\sqrt{2}}{2}i \\
> &\lambda_3 = \lambda_4 = \frac{\sqrt{2}}{2} - \frac{\sqrt{2}}{2}i
> \end{align*}
> $$
> 通解
>
> $$
> \begin{align*}
> y = e^{\frac{\sqrt{2}}{2}x} \left[ (C_1+C_2x) \cos\left(\frac{\sqrt{2}}{2}x\right) + (C_3+C_4x) \sin\left(\frac{\sqrt{2}}{2}x\right) \right] \\
> 
> \end{align*}
> $$

ODE就这么速通完了。
