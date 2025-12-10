---
title: Chapter 7 微分学应用
permalink: /integral/integral-7/
createTime: 2025/09/16 20:57:28
---

## Part 1 导数应用

### · 单调函数

**命题1**. 设 $f$ 在 $[a,b]$ 上连续，在 $(a,b)$ 中可微. 如果 $f'(x) = 0$, $\forall\ x \in (a,b)$，则 $f$ 为常值函数. 

> 任取 $x,y \in [a,b]$，由 Lagrange 中值定理，存在 $\xi \in (a,b)$，使得  
> $$
> f(x) - f(y) = f'(\xi)(x - y) = 0,
> $$
> 因此 $f$ 为常值函数.

完全类似的证明可以推出

**命题2**：设 $f$ 在 $[a,b]$ 上连续，在 $(a,b)$ 中可微. 则 $f$ 为单调函数当且仅当 $f'$ 不变号.

> 不妨设 $f$ 为单调递增函数，则由导数的定义，当 $x_0 \in (a,b)$ 时，有  
> $$
> f'(x_0) = \lim_{x \to x_0} \frac{f(x) - f(x_0)}{x - x_0},
> $$
> 因为 $f$ 是单调递增的，故 $\frac{f(x) - f(x_0)}{x - x_0}$ 总是非负的，从而 $f'(x_0) \ge 0$. 
>
> 反之，不妨设 $f'(x) \ge 0$, $x \in (a,b)$. 任取 $x_1 < x_2 \in [a,b]$，由 Lagrange 中值定理，存在 $\xi \in (x_1,x_2)$，使得  
> $$
> f(x_2) - f(x_1) = f'(\xi)(x_2 - x_1) \ge 0,
> $$
> 因此 $f$ 是单调递增的.

如果 $f' > 0$，则 $f$ 是严格单调递增的；如果 $f' < 0$，则 $f$ 是严格单调递减的. 反之不然，例如，函数 $f(x) = x^3$ 是严格单调递增的，但 $f'(0) = 0$. 

下面的结果进一步说明，如果可微函数在两个驻点之间没有其它驻点，则它在这两个驻点之间是单调的，我们可以藉此判断函数图像的大致走向.

**定理3**（反函数定理）：设 $f$ 为区间 $I$ 中的可微函数，如果 $f$ 的导数处处非零，则 $f: I \to f(I)$ 是可逆的，且其逆函数也可微. 

> 如果 $f'(x) \ne 0$, $\forall\ x \in I$，则由 Lagrange 定理知 $f$ 是单射，根据前面的证明知 $f$ 是严格单调函数且 $f$ 可逆，不难证明 $f$ 的逆函数也可微.

**命题4**：设 $\delta > 0$，$f$ 在 $(x_0 - \delta, x_0 + \delta)$ 中连续，在 $(x_0 - \delta, x_0) \cup (x_0, x_0 + \delta)$ 中可微. 如果  
$$
f'(x) \le 0,\ x \in (x_0 - \delta, x_0);\quad f'(x) \ge 0,\ x \in (x_0, x_0 + \delta),
$$
则 $x_0$ 为 $f$ 的极小值点；如果  
$$
f'(x) \ge 0,\ x \in (x_0 - \delta, x_0);\quad f'(x) \le 0,\ x \in (x_0, x_0 + \delta),
$$
则 $x_0$ 为 $f$ 的极大值点.

> 以第一种情形为例. 任取 $x \in (x_0 - \delta, x_0)$，由 Lagrange 中值定理，存在 $\xi \in (x,x_0)$，使得  
> $$
> f(x) - f(x_0) = f'(\xi)(x - x_0),
> $$
> 因为 $f'(\xi) \le 0$, $x - x_0 < 0$，故此时 $f(x) - f(x_0) \ge 0$. 同理，任取 $x \in (x_0, x_0 + \delta)$，则由 Lagrange 中值定理，存在 $\zeta \in (x_0,x)$，使得  
> $$
> f(x) - f(x_0) = f'(\zeta)(x - x_0) \ge 0,
> $$
> 因此 $x_0$ 为 $f$ 的极小值点.

**命题5**：设 $f$ 在 $x_0$ 处二阶可导，且 $f'(x_0) = 0$. 则  

(1) 如果 $f''(x_0) > 0$，则 $x_0$ 为 $f$ 的（严格）极小值点；  

(2) 如果 $f''(x_0) < 0$，则 $x_0$ 为 $f$ 的（严格）极大值点. 

> 以 (1) 为例. 设 $f''(x_0) > 0$，则由导数定义，  
> $$
> \lim_{x \to x_0} \frac{f'(x)}{x - x_0} = \lim_{x \to x_0} \frac{f'(x) - f'(x_0)}{x - x_0} = f''(x_0) > 0,
> $$
> 这说明，存在 $\delta > 0$，使得当 $x \in (x_0 - \delta, x_0)$ 时 $f'(x) < 0$；当 $x \in (x_0, x_0 + \delta)$ 时 $f'(x) > 0$. 利用命题 5.3.4 的证明即知 $x_0$ 为 $f$ 的（严格）极小值点.

**推论6**：设 $f$ 在 $x_0$ 处二阶可导，$x_0$ 为 $f$ 的极小（大）值点，则 $f''(x_0) \ge 0$（$\le 0$）. 

> 不妨设 $x_0$ 为 $f$ 的极小值点，则 $x_0$ 为驻点. 
>
> 如果 $f''(x_0) < 0$，则由上面的命题，$x_0$ 为 $f$ 的严格极大值点，从而不可能是极小值点.

如果 $x_0$ 是 $f$ 的驻点，且 $f''(x_0) = 0$，则 $x_0$ 可能是极值点，也可能不是极值点. 这时我们往往需要利用高阶导数去做进一步的判断.

### · 凸函数

如果函数 $f$ 二阶可导，且 $f'' > 0$，则 $f$ 在区间的内部取不到极大值. 进一步，如果 $f$ 在 $[a,b]$ 上二阶可导，则  
$$
f(x) - l(x) = \frac{1}{2}f''(\xi)(x - a)(x - b),\quad \xi \in (a,b),
$$
其中 $l(x)$ 是满足条件 $l(a) = f(a)$, $l(b) = f(b)$ 的线性函数，它可以写成  
$$
l(x) = \frac{f(b) - f(a)}{b - a}(x - a) + f(a),\quad \text{or}\quad l(x) = f(b) - \frac{f(b) - f(a)}{b - a}(b - x).\tag{1-1}
$$
于是，当 $f'' \ge 0$ 时，有  
$$
f(x) \le l(x),\quad \forall\ x \in (a,b).\tag{1-2}
$$
特别地，由线性函数的单调性可得  
$$
f(x) \le l(x) \le \max\{l(a), l(b)\} = \max\{f(a), f(b)\},\quad \forall\ x \in [a,b].
$$
**定义1**（凸函数）

设 $f$ 为区间 $I$ 中定义的函数. 如果对任意 $a < b \in I$，(1-2) 式均成立，则称 $f$ 为 $I$ 中的凸函数. 

当 (1-2) 中不等号反向时，则称相应的函数为凹函数. 有时也将凸函数称为下凸函数，凹函数称为上凸函数. 如果不等号为严格小于号，则称相应的函数为严格凸函数. 

我们可以将 $f(x) \le l(x)$ 改写为  
$$
\frac{f(x) - f(a)}{x - a} \le \frac{f(b) - f(a)}{b - a} \le \frac{f(b) - f(x)}{b - x},\quad \forall\ x \in (a,b).\tag{1-3}
$$
上式与下面的不等式等价  
$$
\frac{f(x) - f(a)}{x - a} \le \frac{f(b) - f(x)}{b - x},\quad \forall\ x \in (a,b).\tag{1-4}
$$
这只要对 两端利用如下初等结论即可：即，如果 $k,l > 0$, $\frac{m}{k} \le \frac{n}{l}$，则  
$$
\frac{m}{k} \le \frac{m + n}{k + l} \le \frac{n}{l}.
$$
假设不等式 (1-4) 成立，应用此初等结论即有  
$$
\frac{f(x) - f(a)}{x - a} \le \frac{(f(x) - f(a)) + (f(b) - f(x))}{(x - a) + (b - x)} \le \frac{f(b) - f(x)}{b - x},
$$
这也就是不等式 (1-3). 

当 $x \in [a,b]$ 时，$x$ 可以写为  
$$
x = ta + (1 - t)b,\quad t = \frac{b - x}{b - a} \in [0,1].
$$
此时 $l(x)$ 可以写为 $l(x) = tf(a) + (1 - t)f(b)$. 于是 (1-2) 可以改写为  
$$
f(ta + (1 - t)b) \le tf(a) + (1 - t)f(b),\quad \forall\ t \in (0,1).
$$
**Young 不等式**：

> 考虑指数函数 $f(x) = e^x$，由 $f''(x) = e^x > 0$ 可知 $f$ 为（严格）凸函数. 于是，当 $a,b > 0$, $p,q$ 满足条件 $p > 1$, $1/p + 1/q = 1$ 时，有  
> $$
> ab = e^{\frac{1}{p}\ln a^p + \frac{1}{q}\ln b^q} \le \frac{1}{p}e^{\ln a^p} + \frac{1}{q}e^{\ln b^q} = \frac{a^p}{p} + \frac{b^q}{q},
> $$
> 这也就是 Young 不等式.

**定理1**（Jensen 不等式）：设 $f$ 是定义在区间 $I$ 中的函数. 则 $f$ 为凸函数当且仅当对任意的 $x_i \in I$, $\lambda_i \ge 0$ ($i = 1,\cdots,n$), $\sum_{i=1}^{n} \lambda_i = 1$，有  
$$
f\left(\sum_{i=1}^{n} \lambda_i x_i\right) \le \sum_{i=1}^{n} \lambda_i f(x_i).
$$

> 只要证明必要性就可以了. 我们对 $n$ 用数学归纳法. $n = 1$ 是显然的，$n = 2$ 上面已经讨论了. 假设不等式对 $n = k$ 成立，则当 $n = k+1$，不妨假设 $0 < \lambda_{k+1} < 1$，此时  
> $$
> \sum_{i=1}^{k} \frac{\lambda_i}{1 - \lambda_{k+1}} = 1.
> $$
> 由归纳假设，有  
> $$
> f\left(\sum_{i=1}^{k+1} \lambda_i x_i\right) = f\left((1 - \lambda_{k+1})\sum_{i=1}^{k} \frac{\lambda_i}{1 - \lambda_{k+1}}x_i + \lambda_{k+1}x_{k+1}\right)
> $$
> $$
> \le (1 - \lambda_{k+1})f\left(\sum_{i=1}^{k} \frac{\lambda_i}{1 - \lambda_{k+1}}x_i\right) + \lambda_{k+1}f(x_{k+1})
> $$
> $$
> \le (1 - \lambda_{k+1})\sum_{i=1}^{k} \frac{\lambda_i}{1 - \lambda_{k+1}}f(x_i) + \lambda_{k+1}f(x_{k+1})
> $$
> $$
> = \sum_{i=1}^{k+1} \lambda_i f(x_i).
> $$
> 这说明不等式对 $n = k+1$ 也成立，从而定理得证.

**算术–几何平均值不等式**：

> 考虑函数 $f(x) = -\ln x$ ($x > 0$). 由 $f''(x) = x^{-2} > 0$ 可知 $f$ 为（严格）凸函数. 根据 Jensen 不等式，当 $a_i > 0$ 时  
> $$
> \frac{1}{n}(\ln a_1 + \ln a_2 + \cdots + \ln a_n) \le \ln \frac{a_1 + a_2 + \cdots + a_n}{n},
> $$
> 即  
> $$
> (a_1a_2\cdots a_n)^{\frac{1}{n}} \le \frac{1}{n}(a_1 + a_2 + \cdots + a_n),\quad \forall\ a_i > 0\ (1 \le i \le n).
> $$
> 这个不等式就是经典的算术–几何平均值不等式. 

下面我们研究一般凸函数的基本性质，先看连续性质.

**命题2**（连续性质）：设 $f$ 为区间 $I$ 中的凸函数，如果 $[a,b]$ 为 $I$ 中不含 $I$ 的端点的闭区间，则 $f$ 为 $[a,b]$ 上的 Lipschitz 函数. 特别地，凸函数在区间内部总是连续的. 

> 由已知条件，可取 $a', b' \in I$，使得 $a' < a$, $b < b'$. 任取 $x < y \in [a,b]$，因为 $f$ 为凸函数，故有下列不等式  
> $$
> \frac{f(a') - f(a)}{a' - a} \le \frac{f(a') - f(x)}{a' - x} \le \frac{f(y) - f(x)}{y - x} \le \frac{f(b') - f(y)}{b' - y} \le \frac{f(b') - f(b)}{b' - b}.
> $$
> 令  
> $$
> M = \max\left\{\left|\frac{f(a') - f(a)}{a' - a}\right|, \left|\frac{f(b') - f(b)}{b' - b}\right|\right\},
> $$
> 则不等式意味着  
> $$
> |f(x) - f(y)| \le M|x - y|,\quad \forall\ x,y \in [a,b].
> $$
> 这说明 $f$ 在 $[a,b]$ 上为 Lipschitz 函数

凸函数在区间的端点处可能不连续，例如函数  
$$
f(0) = 1,\quad f(x) = 0,\ x > 0
$$
是 $[0,+\infty)$ 中的凸函数，但它在 $x = 0$ 处不连续. 

对于连续的函数，我们可以用下面较简单的方法去判别它是否是凸函数

**命题3**：设 $f$ 为区间 $I$ 中的连续函数，则 $f$ 为凸函数当且仅当对任意 $x_1 < x_2 \in I$，有  
$$
f\left(\frac{x_1 + x_2}{2}\right) \le \frac{1}{2}[f(x_1) + f(x_2)].
$$
**推论4**：设 $f$ 为区间 $I$ 中的凸函数，则 $f$ 在 $I$ 的内部无极大值点，除非它在内部是常值函数

> 凸函数在 $I$ 的内部是连续的，且满足平均值不等式，因此结论成立

**命题5**（导数性质）：设 $f$ 为区间 $I$ 中的凸函数，$x$ 为 $I$ 的内点，则 $f$ 在 $x$ 处的左导数和右导数均存在，且 $f'_-(x) \le f'_+(x)$.

> 任取 $x_1,x_2 \in I$，使得 $x_1 < x < x_2$，因为 $f$ 为凸函数，我们有不等式  
> $$
> \frac{f(x) - f(x_1)}{x - x_1} \le \frac{f(x_2) - f(x)}{x_2 - x},
> $$
> $f$ 为凸函数也意味着 $\frac{f(x) - f(x_1)}{x - x_1}$ 是关于 $x_1$ 的单调递增函数，上式则表明这个单调递增函数有上界，从而极限  
> $$
> \lim_{x_1 \to x^-} \frac{f(x) - f(x_1)}{x - x_1} = f'_-(x)
> $$
> 存在，且  
> $$
> f'_-(x) \le \frac{f(x_2) - f(x)}{x_2 - x}.
> $$
> 同理，当 $x_2 \to x_+$ 时，$\frac{f(x_2) - f(x)}{x_2 - x}$ 单调递减且有下界，从而极限存在且满足  
> $$
> f'_-(x) \le \lim_{x_2 \to x^+} \frac{f(x_2) - f(x)}{x_2 - x} = f'_+(x),
> $$
> 这就证明了命题.

(1) 凸函数不一定可微，例如函数 $f(x) = |x|$ 是凸函数，但它在 $x = 0$ 处不可微；  

(2) 凸函数的不可微点只有至多可数个.

可微函数也可以用下面的方法去判别它是否是凸函数.

**命题6**：设 $f$ 是区间 $I$ 中的可微函数，则  

(1) $f$ 为凸函数当且仅当 $f'$ 为单调递增函数；  

(2) $f$ 为凸函数当且仅当对任意 $x_0 \in I$, $x \in I$，有  
$$
f(x) \ge f'(x_0)(x - x_0) + f(x_0).
$$
我们可以重新讨论二阶可导函数的凸性

**命题7**：如果 $f$ 在 $I$ 中二阶可导，则 $f$ 为凸函数当且仅当 $f'' \ge 0$.

> 如果 $f$ 二阶可导，则 $f$ 是凸函数当且仅当 $f'$ 为单调递增函数，而可微函数 $f'$ 是单调递增函数当且仅当其导数 $f''$ 非负.

### · 函数作图

应用以上几节的知识，我们可以在平面上大致作出函数的图像，需要注意的要点就是：求函数 $f$ 的驻点和极值点，判断 $f$ 的单调区间和凸凹区间，以及求出 $f$ 的其它特殊值，如 $f$ 和坐标轴的交点，$f$ 在间断点或无穷远处的极限. 

我们再给出两个概念：一是函数的拐点. 如果函数 $f$ 在 $x_0$ 的一侧是凸的，而在另一侧是凹的，则称 $x_0$ 为 $f$ 的拐点；另一个概念是渐近线. 如果  
$$
\lim_{x \to x_0^+} f(x) = \infty\quad \text{or}\quad \lim_{x \to x_0^-} f(x) = \infty
$$
则称 $x = x_0$ 为 $f$ 的垂直渐近线；如果  
$$
\lim_{x \to +\infty} [f(x) - (ax + b)] = 0\quad \text{or}\quad \lim_{x \to -\infty} [f(x) - (ax + b)] = 0,
$$
则称 $y = ax + b$ 为 $f$ 在无穷远处的渐近线

## Part 2 L'Hopital 法则

在计算函数极限的时候，经常遇到这样的情形：设 $f$, $g$ 为函数，求极限  
$$
\lim_{x \to x_0} \frac{f(x)}{g(x)}.
$$
下列两种情况比较常见：  

(1) $\left(\frac{0}{0}\right)$ 型：$x \to x_0$ 时，$f(x) \to 0$, $g(x) \to 0$；  

(2) $\left(\frac{\infty}{\infty}\right)$ 型：$x \to x_0$ 时，$f(x) \to \infty$, $g(x) \to \infty$.   

还有一些情形也可以转化为这两种情形之一. 利用求导我们往往可以方便地计算这样的极限，这是微分学对于求极限的一个应用. 

**定理1**（L'Hôpital 法则）：设 $f$, $g$ 在 $(a,b)$ 中可导，且 $g'(x) \ne 0$, $\forall\ x \in (a,b)$. 又设
$$
\lim_{x \to a^+} f(x) = 0 = \lim_{x \to a^+} g(x).
$$
如果极限  
$$
\lim_{x \to a^+} \frac{f'(x)}{g'(x)}
$$
存在（或为 $\infty$），则  
$$
\lim_{x \to a^+} \frac{f(x)}{g(x)} = \lim_{x \to a^+} \frac{f'(x)}{g'(x)}.
$$

> 补充定义 $f(a) = g(a) = 0$，则 $f$ 在 $[a,b)$ 中连续. 由 Cauchy 中值定理，$\forall\ x \in (a,b)$，存在 $\xi \in (a,x)$，使得  
> $$
> \frac{f(x)}{g(x)} = \frac{f(x) - f(a)}{g(x) - g(a)} = \frac{f'(\xi)}{g'(\xi)}.
> $$
> 当 $x \to a^+$ 时，$\xi \to a^+$，从而  
> $$
> \frac{f'(\xi)}{g'(\xi)} \to \lim_{x \to a^+} \frac{f'(x)}{g'(x)},
> $$
> 因此  
> $$
> \lim_{x \to a^+} \frac{f(x)}{g(x)} = \lim_{x \to a^+} \frac{f'(x)}{g'(x)}.
> $$
>
> > (1) 如果仍有 $f'_+(a) = g'_+(a) = 0$，则可利用二次导数继续求极限：  
> > $$
> > \lim_{x \to a^+} \frac{f(x)}{g(x)} = \lim_{x \to a^+} \frac{f'(x)}{g'(x)} = \lim_{x \to a^+} \frac{f''(x)}{g''(x)},
> > $$
> > 高阶导数的情形类似.   
> >
> > (2) 区间 $(a,b)$ 换成 $(-\infty,b)$ 或 $(a,\infty)$ 时，有类似结论：  
> > $$
> > \lim_{x \to -\infty} \frac{f(x)}{g(x)} = \lim_{x \to -\infty} \frac{f'(x)}{g'(x)},\quad \lim_{x \to +\infty} \frac{f(x)}{g(x)} = \lim_{x \to +\infty} \frac{f'(x)}{g'(x)}.
> > $$
> > 这可由变量代换 $x = \frac{1}{t}$ 得出.   
> >
> > (3) 需要注意的是，等式成立需要其右端极限存在（或为无穷），如果极限不存在，就未必成立了，读者可在 $x = 0$ 处验证 $f(x) = x^2 \sin \frac{1}{x}$, $g(x) = x$ 就是不成立的例子. 

**定理2**（L'Hôpital 法则）:设 $f$, $g$ 在 $(a,b)$ 中可导，且 $g'(x) \ne 0$, $\forall\ x \in (a,b)$. 又设  
$$
\lim_{x \to a^+} g(x) = \infty.
$$
如果极限  
$$
\lim_{x \to a^+} \frac{f'(x)}{g'(x)} = l
$$
存在（或为 $\infty$），则  
$$
\lim_{x \to a^+} \frac{f(x)}{g(x)} = \lim_{x \to a^+} \frac{f'(x)}{g'(x)} = l.
$$

> 我们对 $l$ 有限的情形加以证明，$l = \infty$ 的情形可类似证明. 由已知条件，任给 $\varepsilon > 0$，存在 $\eta > 0$，使得当 $x \in (a,a+\eta)$ 时  
> $$
> l - \frac{\varepsilon}{2} < \frac{f'(x)}{g'(x)} < l + \frac{\varepsilon}{2}.
> $$
> 取 $c = a + \eta$，当 $x \in (a,c)$ 时，由 Cauchy 微分中值定理，存在 $\xi \in (x,c)$，使得  
> $$
> \frac{f(x) - f(c)}{g(x) - g(c)} = \frac{f'(\xi)}{g'(\xi)}.
> $$
> 上式可以改写为  
> $$
> f(x) = f(c) + \frac{f'(\xi)}{g'(\xi)}(g(x) - g(c)),
> $$
> 即  
> $$
> \frac{f(x)}{g(x)} = \frac{f'(\xi)}{g'(\xi)} + \frac{f(c)}{g(x)} - \frac{f'(\xi)}{g'(\xi)} \cdot \frac{g(c)}{g(x)}.
> $$
> 不难得知，存在正数 $\delta < \eta$，使得当 $x \in (a,a+\delta)$ 时  
> $$
> \left|\frac{f(x)}{g(x)} - l\right| < \varepsilon,
> $$
> 这就证明了所需结论.

## Part 3 Taylor 展开

### · Taylor 公式

这一节我们研究用多项式逼近高阶可微函数的问题. 研究一元函数 $f$ 的局部性态时，我们知道：

> (1) 如果 $f(x)$ 在 $x_0$ 处连续，则  
> $$
> f(x) - f(x_0) = o(1)\ (x \to x_0),
> $$
> 即，在 $x_0$ 附近 $f$ 可用常值函数 $f(x_0)$ 逼近. 
>
> (2) 如果 $f(x)$ 在 $x_0$ 处可微，则  
> $$
> f(x) - [f(x_0) + f'(x_0)(x - x_0)] = o(x - x_0)\ (x \to x_0),
> $$
> 即，在 $x_0$ 附近 $f$ 可用线性函数 $L$ 逼近，其中  
> $$
> L(x) = f(x_0) + f'(x_0)(x - x_0).
> $$
>
> (3) 如果 $f''(x_0)$ 存在，则
> $$
> f(x) - [f(x_0) + f'(x_0)(x - x_0) + \frac{1}{2}f''(x_0)(x - x_0)^2] = o((x - x_0)^2)\ (x \to x_0),
> $$
> 即 $f$ 在 $x_0$ 附近可以用二次多项式逼近

**定理1**（带 Peano 余项的 Taylor 公式）：设 $f$ 在 $x_0$ 处 $n$ 阶可导，则
$$
f(x) = \sum_{k=0}^{n} \frac{f^{(k)}(a)}{k!} (x-a)^n + o((x - x_0)^n)\ (x \to x_0).\tag{*}
$$

> 用数学归纳法. $n = 1, 2$ 已经在前面证明. 设 $n = k$ 时 $(*)$ 成立，则 $n = k+1$ 时，由假设，$f^{(k+1)}(x_0)$ 存在，此时 $f'(x)$ 在 $x_0$ 处 $k$ 阶可导，由归纳假设，  
> $$
> f'(x) = f'(x_0) + f''(x_0)(x - x_0)   + \cdots + \frac{1}{k!}f^{(k+1)}(x_0)(x - x_0)^k + o((x - x_0)^k)\ (x \to x_0),
> $$
> 从而由 L'Hôpital 法则得
> $$
> \lim_{x \to x_0} \frac{f(x) - [f(x_0) + f'(x_0)(x - x_0) + \cdots + \frac{f^{(k+1)}(x_0)}{(k+1)!}(x - x_0)^{k+1}]}{(x - x_0)^{k+1}}\\
> = \lim_{x \to x_0} \frac{f'(x) - [f'(x_0) + f''(x_0)(x - x_0) + \cdots + \frac{f^{(k+1)}(x_0)}{k!}(x - x_0)^k]}{(k+1)(x - x_0)^k}
> = 0.
> $$
> 即  
> $$
> f(x) = f(x_0) +  \cdots + \frac{1}{(k+1)!}f^{(k+1)}(x_0)(x - x_0)^{k+1} + o((x - x_0)^{k+1})\ (x \to x_0).
> $$
> 这说明 $(*)$ 对 $n = k+1$ 也成立. 由数学归纳法，$(*)$ 对任意的 $n$ 都成立

记
$$
R_n(x) = f(x) - [f(x_0) + f'(x_0)(x - x_0) + \cdots + \frac{f^{(n)}(x_0)}{n!}(x - x_0)^n],
$$
称 $R_n$ 为 Taylor 展开的余项. 根据刚才的定理，如果 $f$ 在 $x_0$ 处有 $n$ 阶导数，则  
$$
R_n(x) = o((x - x_0)^n)\ (x \to x_0)\
$$

如果没有进一步的条件，想要获得余项 $R_n(x)$ 的更精确的估计较为困难. 例如，即使已知 $f(x)$ 是关于 $x$ 的 $n$ 次多项式，从刚才的定理也无法得知余项 $R_n(x)$ 是否为零. 这时，我们需要下面的结果. 

**定理2**（Taylor）：设 $f$ 在开区间 $(a,b)$ 中有直到 $n+1$ 阶导数，$x_0, x \in (a,b)$. 则存在区间 $(x,x_0)$ 或 $(x_0,x)$ 中的点 $\xi$, $\zeta$，使得 Taylor 展开的余项可表示为
$$
R_n(x) = \frac{1}{(n+1)!}f^{(n+1)}(\xi)(x - x_0)^{n+1},
$$
(Lagrange 余项)

以及  
$$
R_n(x) = \frac{1}{n!}f^{(n+1)}(\zeta)(x - \zeta)^n(x - x_0).
$$
(Cauchy 余项)

> 考虑以 $t$ 为变量的函数  
> $$
> F(t) = f(t) + \sum_{k=1}^n \frac{f^{(k)}(t)}{k!}(x - t)^k,\quad t \in (a,b).
> $$
> 对 $t$ 求导，得  
> $$
> F'(t) = f'(t) + \sum_{k=1}^n \left[\frac{f^{(k+1)}(t)}{k!}(x - t)^k - \frac{f^{(k)}(t)}{(k-1)!}(x - t)^{k-1}\right]
> = \frac{1}{n!}f^{(n+1)}(t)(x - t)^n.
> $$
> 根据 $F$ 的构造，有  
> $$
> F(x) - F(x_0) = R_n(x).
> $$
> 由 Lagrange 微分中值定理，存在 $\zeta = x_0 + \theta(x - x_0)$ ($0 < \theta < 1$)，使得  
> $$
> R_n(x) = F'(\zeta)(x - x_0)
> = \frac{1}{n!}f^{(n+1)}(\zeta)(x - \zeta)^n(x - x_0).
> $$
> 得到含 Cauchy 余项的 Taylor 展开
>
> 取 $G(t) = -(x - t)^{n+1}$，再由 Cauchy 微分中值定理知，存在 $\xi = x_0 + \eta(x - x_0)$ ($0 < \eta < 1$)，使得  
> $$
> \frac{R_n(x)}{(x - x_0)^{n+1}} = \frac{F(x) - F(x_0)}{G(x) - G(x_0)} = \frac{F'(\xi)}{G'(\xi)} = \frac{f^{(n+1)}(\xi)}{(n+1)!},
> $$
> 即  
> $$
> R_n(x) = \frac{1}{(n+1)!}f^{(n+1)}(\xi)(x - x_0)^{n+1}.
> $$
> 得到含 Lagrange 余项的 Taylor 展开

(1) 如果 $f$ 的直到 $n$ 阶的导数在 $[a,b]$ 上都是连续的（因此 $F$ 在 $[a,b]$ 上连续），则对于 $x = a$ 或 $x = b$，即区间的端点，定理的结论仍然成立，这是由微分中值定理成立的条件所保证的.   

(2) 如果 $x_0$ 为区间端点，例如 $f$ 在 $(a,x_0]$ 上存在直到 $n+1$ 阶的导数，则 $f(x)$ 在 $x_0$ 处仍然有如上 Taylor 余项公式.   

(3) 定理的证明过程中的关键之处在于辅助函数的构造以及微分中值定理的运用. 由于辅助函数不容易想到，下面我们用另一个方法导出 Lagrange 余项.

**引理3**：设 $g(x)$ 在 $(a,b)$ 内 $n+1$ 阶可导，$x_0 \in (a,b)$. 如果  
$$
g(x_0) = g'(x_0) = \cdots = g^{(n)}(x_0) = 0,
$$
则任给 $c \in (a,b)$，存在 $\xi = x_0 + \theta(c - x_0)$ ($0 < \theta < 1$)，使得  
$$
g(c) = \frac{g^{(n+1)}(\xi)}{(n+1)!}(c - x_0)^{n+1}.
$$

> 不妨设 $c \ne x_0$. 考虑辅助函数  
> $$
> h(x) = g(x) - \frac{g(c)}{(c - x_0)^{n+1}}(x - x_0)^{n+1},\quad x \in (a,b).
> $$
> 则 $h(c) = 0$，且 $h(x_0) = h'(x_0) = \cdots = h^{(n)}(x_0) = 0$. 由 $h(c) = h(x_0) = 0$ 以及 Rolle 中值定理知，存在严格介于 $c$ 和 $x_0$ 之间的点 $\xi_1$，使得 $h'(\xi_1) = 0$. 
>
> 由 $h'(\xi_1) = h'(x_0) = 0$ 又可推出，存在严格介于 $\xi_1$ 和 $x_0$ 之间的点 $\xi_2$，使得 $h''(\xi_2) = 0$. 如此继续，最后可以找到严格介于 $c$ 和 $x_0$ 之间的点 $\xi$，使得 $h^{(n+1)}(\xi) = 0$. 即  
> $$
> g^{(n+1)}(\xi) - \frac{g(c)}{(c - x_0)^{n+1}} \cdot (n+1)! = 0,
> $$
> 上式整理以后就是结论.
>
> > 如果 $g(x)$ 在 $[a,b]$ 上还是连续的，则对 $c = a$ 或 $b$，引理的结论仍然成立. 
> >
> > 现在，如果 $f$ 在 $(a,b)$ 内 $n+1$ 次可导，$x_0 \in (a,b)$，则其 Taylor 余项 $R_n(x)$ 满足下列等式（习题）：  
> > $$
> > R_n(x_0) = R'_n(x_0) = \cdots = R_n^{(n)}(x_0) = 0,\quad R_n^{(n+1)}(x) = f^{(n+1)}(x).
> > $$
> > 对 $R_n(x)$ 运用上述引理就得到了 $R_n(x)$ 的 Lagrange 表示. 这种做法的好处就是，只要 $f$ 在 $[a,b]$ 上还是连续的，则对 $x = a,b$ 同样有余项公式. 

如果关于 $f$ 的条件更强一些，例如 $f$ 是 $n+1$ 阶连续可微的，则由微积分基本公式得  
$$
R_n(x) = F(x) - F(x_0) = \int_{x_0}^x F'(t)\,dt = \int_{x_0}^x \frac{f^{(n+1)}(t)}{n!}(x - t)^n\,dt.
$$
这是 Taylor 展开的积分余项，它是余项的一个精确积分表示. 此时，由于 $(x - t)^n$ 不变号，由积分中值定理可知，存在 $\xi \in (x_0,x)$（或 $(x,x_0)$），使得  
$$
R_n(x) = \frac{1}{n!}f^{(n+1)}(\xi) \cdot \int_{x_0}^x (x - t)^n\,dt = \frac{f^{(n+1)}(\xi)}{(n+1)!}(x - x_0)^{n+1}.
$$
这也就是 Lagrange 余项. 同理可得 Cauchy 余项.

考虑多项式函数 $f(x) = (1+x)^{2n+1}$，$f(x)$ 在 $x_0 = 0$ 处可展开为  
$$
(1+x)^{2n+1} = \sum_{k=0}^n C_{2n+1}^k x^k + R_n(x),
$$
其中 Taylor 展开的余项为  
$$
R_n(x) = \frac{1}{n!} \int_0^x \frac{(2n+1)!}{n!}(1+t)^n (x - t)^n\,dt,
$$
特别地，取 $x = 1$ 就得  
$$
\int_0^1 (1 - t^2)^n\,dt = \frac{(n!)^2}{(2n+1)!} R_n(1)
= \frac{(n!)^2}{(2n+1)!} \left(2^{2n+1} - \sum_{k=0}^n C_{2n+1}^k\right)
= \frac{(n!)^2}{(2n+1)!} (2^{2n+1} - 2^{2n}) = \frac{(2n)!!}{(2n+1)!!},
$$
其中  
$$
\sum_{k=0}^n C_{2n+1}^k = \frac{1}{2} \sum_{k=0}^n (C_{2n+1}^k + C_{2n+1}^{2n+1-k}) = \frac{1}{2} \sum_{k=0}^{2n+1} C_{2n+1}^k = 2^{2n}.
$$
这个积分也可以用递推的方法求出.

如果 $f$ 在 $x_0$ 附近无限次可微，则称形式和  
$$
\sum_{n=0}^\infty \frac{f^{(n)}(x_0)}{n!}(x - x_0)^n
$$
为 $f$ 在 $x_0$ 处的 Taylor 展开或 Taylor 公式. Taylor 公式在 $x_0 = 0$ 的特殊情形也称 Maclaurin 展开公式. 如果 $\displaystyle\lim_{n \to \infty} R_n(x) = 0$，则记  
$$
f(x) = \sum_{n=0}^\infty \frac{f^{(n)}(x_0)}{n!}(x - x_0)^n.
$$
此时称 $f$ 的 Taylor 展开收敛到自身.

**定理4**（Taylor 系数的惟一性）：设 $f$ 在 $x_0$ 处 $n$ 阶可导，且  
$$
f(x) = \sum_{k=0}^n a_k (x - x_0)^k + o((x - x_0)^n)\ (x \to x_0),
$$
则  
$$
a_k = \frac{1}{k!} f^{(k)}(x_0),\quad k = 0,1,\cdots,n.
$$

> 根据 Taylor 展开的 Peano 余项表示，$f(x)$ 又可写为  
> $$
> f(x) = \sum_{k=0}^n \frac{1}{k!} f^{(k)}(x_0)(x - x_0)^k + o((x - x_0)^n)\ (x \to x_0).
> $$
> 如果令  
> $$
> b_k = a_k - \frac{1}{k!} f^{(k)}(x_0),\quad k = 0,1,\cdots,n,
> $$
> 则由已知条件得  
> $$
> \sum_{k=0}^n b_k (x - x_0)^k = o((x - x_0)^n)\ (x \to x_0).
> $$
> 首先，在上式中令 $x \to x_0$ 即得 $b_0 = 0$. 其次，上式两边除以 $x - x_0$，再令 $x \to x_0$ 可得 $b_1 = 0$. 这个过程可以继续，当等式两边除以 $(x - x_0)^k$ 并令 $x \to x_0$ 就得到 $b_k = 0\ (0 \le k \le n)$，定理证毕.

**命题5**：

设 $f(x)$ 在 $x_0 = 0$ 处的 Taylor 展开为 $\sum_{n=0}^\infty a_n x^n$，则  

(1) $f(-x)$ 的 Taylor 展开为 $\sum_{n=0}^\infty (-1)^n a_n x^n$；  

(2) $f(x^k)$ 的 Taylor 展开为 $\sum_{n=0}^\infty a_n x^{kn}$，其中 $k$ 为正整数；  

(3) $x^k f(x)$ 的 Taylor 展开为 $\sum_{n=0}^\infty a_n x^{k+n}$，其中 $k$ 为正整数； 


(4) $f'(x)$ 的 Taylor 展开为 $\sum_{n=1}^\infty n a_n x^{n-1} = \sum_{n=0}^\infty (n+1)a_{n+1} x^n$；  

(5) $\int_0^x f(t)\,dt$ 的 Taylor 展开为 $\sum_{n=0}^\infty \frac{a_n}{n+1} x^{n+1}$；  

(6) 如果 $g(x)$ 在 $x_0 = 0$ 处的 Taylor 展开为 $\sum_{n=0}^\infty b_n x^n$，则 $\lambda f(x) + \mu g(x)$ 的 Taylor 展开为 $\sum_{n=0}^\infty (\lambda a_n + \mu b_n)x^n$，其中 $\lambda,\mu \in \mathbb{R}$. 

> 利用上述命题，再结合前面的例子，我们有  
> $$
> \frac{1}{1 - x} = 1 + x + x^2 + x^3 + \cdots + x^n + \cdots,\quad \forall\ x \in (-1,1).
> $$
> 因此  
> $$
> \frac{1}{1 + x} = 1 - x + x^2 - x^3 + x^4 - \cdots,\quad \forall\ x \in (-1,1),
> $$
>
> $$
> \frac{1}{1 - x^2} = 1 + x^2 + x^4 + x^6 + \cdots,\quad \forall\ x \in (-1,1),
> $$
>
> $$
> \frac{1}{1 + x^2} = 1 - x^2 + x^4 - x^6 + \cdots,\quad \forall\ x \in (-1,1),
> $$
>
> 以及  
> $$
> \ln(1 - x) = -\int_0^x \frac{dt}{1 - t} = -x - \frac{x^2}{2} - \frac{x^3}{3} - \cdots - \frac{x^n}{n} - \cdots,\quad (*)
> $$
> 其余项  
> $$
> R_n(x) = \ln(1 - x) + x + \frac{x^2}{2} + \frac{x^3}{3} + \cdots + \frac{x^n}{n} = -\int_0^x \frac{t^n}{1 - t}\,dt,
> $$
> 如果 $-1 \le x < 0$，则  
> $$
> |R_n(x)| \le \left|\int_0^x t^n\,dt\right| = \frac{|x|^{n+1}}{n+1} \to 0\ (n \to \infty),
> $$
> 如果 $0 \le x < 1$，则  
> $$
> |R_n(x)| \le \frac{1}{1 - x} \int_0^x t^n\,dt = \frac{x^{n+1}}{(1 - x)(n+1)} \to 0\ (n \to \infty),
> $$
> 因此 (*) 对 $x \in [-1,1)$ 均成立. 将 $x$ 换成 $-x$，则得  
> $$
> \ln(1 + x) = x - \frac{x^2}{2} + \frac{x^3}{3} - \frac{x^4}{4} + \frac{x^5}{5} - \cdots,\quad \forall\ x \in (-1,1].
> $$
> 特别地，在上式中取 $x = 1$，得  
> $$
> \ln 2 = 1 - \frac{1}{2} + \frac{1}{3} - \frac{1}{4} + \frac{1}{5} - \frac{1}{6} + \cdots.
> $$
> 同理，  
> $$
> \arctan x = \int_0^x \frac{dt}{1 + t^2} = x - \frac{x^3}{3} + \frac{x^5}{5} + \cdots + (-1)^{n-1} \frac{x^{2n-1}}{2n - 1} + R_n(x),
> $$
> 其中余项 $R_n(x) = (-1)^n \int_0^x \frac{t^{2n}}{1 + t^2}\,dt$. 当 $x \in [-1,1]$ 时  
> $$
> |R_n(x)| \le \int_0^{|x|} t^{2n}\,dt = \frac{|x|^{2n+1}}{2n + 1} \to 0\ (n \to \infty),
> $$
> 这说明  
> $$
> \arctan x = x - \frac{x^3}{3} + \frac{x^5}{5} - \frac{x^7}{7} + \cdots,\quad \forall\ x \in [-1,1].
> $$
> 特别地，在上式中取 $x = 1$，得  
> $$
> \frac{\pi}{4} = 1 - \frac{1}{3} + \frac{1}{5} - \frac{1}{7} + \cdots.\quad \text{(Leibniz-Gregory)}
> $$
> 类似地我们有如下展开式  
> $$
> e^{-x} = 1 - x + \frac{x^2}{2!} - \frac{x^3}{3!} + \frac{x^4}{4!} - \frac{x^5}{5!} + \cdots = \sum_{n=0}^\infty (-1)^n \frac{x^n}{n!},
> $$
>
> $$
> \sinh x = \frac{1}{2}(e^x - e^{-x}) = x + \frac{x^3}{3!} + \frac{x^5}{5!} + \cdots = \sum_{n=0}^\infty \frac{x^{2n+1}}{(2n+1)!},
> $$
>
> $$
> \cosh x = \frac{1}{2}(e^x + e^{-x}) = 1 + \frac{x^2}{2!} + \frac{x^4}{4!} + \frac{x^6}{6!} + \cdots = \sum_{n=0}^\infty \frac{x^{2n}}{(2n)!}.
> $$
>
> 通常，有很多方法得到一个函数的 Taylor 展开，但要判断 Taylor 展开是否收敛以及是否收敛到原函数就不是很容易了.

### · 微分应用

我们来介绍 Taylor 公式以及微分学的几个应用.

(1) **函数极值的判断**.

我们知道，如果 $x_0$ 为 $f$ 在定义域内部的极值点和可导点，则 $f'(x_0) = 0$. 进一步，如果 $f''(x_0) < 0$，则 $x_0$ 为极大值点；如果 $f''(x_0) > 0$，则 $x_0$ 为极小值点. 利用 Taylor 公式，我们可以得到如下的一般结果.

**定理1**：设 $f$ 在 $x_0$ 处 $n$ 阶可导，且  
$$
f'(x_0) = f''(x_0) = \cdots = f^{(n-1)}(x_0) = 0,\quad f^{(n)}(x_0) \ne 0,
$$
则  

(1) $n$ 为偶数时，如果 $f^{(n)}(x_0) < 0$，则 $x_0$ 为极大值点；如果 $f^{(n)}(x_0) > 0$，则 $x_0$ 为极小值点；

(2) $n$ 为奇数时，$x_0$ 不是极值点. 

> 根据已知条件，$f$ 在 $x_0$ 处有 Taylor 展开：  
> $$
> f(x) = f(x_0) + \frac{f^{(n)}(x_0)}{n!}(x - x_0)^n + o((x - x_0)^n)
> = f(x_0) + (x - x_0)^n\left[\frac{1}{n!}f^{(n)}(x_0) + o(1)\right].
> $$
> 因此结论的证明都是显然的.

(2) **二阶可微函数的线性逼近**

下面的结果我们曾用微分中值定理得到过，现在再用 Taylor 展开看一下.

**定理2**：设 $f$ 在 $[a,b]$ 上连续，在 $(a,b)$ 中二阶可导，并且  
$$
M = \sup_{x \in (a,b)} |f''(x)| < \infty,
$$
则  
$$
|f(x) - l(x)| \le \frac{1}{8}M(b - a)^2,\quad \forall\ x \in [a,b],
$$
其中  
$$
l(x) = f(a) + \frac{f(b) - f(a)}{b - a}(x - a),\quad x \in [a,b].
$$

> 由连续性，只要对 $x \in (a,b)$ 证明即可. 在 $x$ 点作 Taylor 展开，有  
> $$
> f(a) - f(x) = f'(x)(a - x) + \frac{1}{2}f''(\xi)(a - x)^2,
> $$
> $$
> f(b) - f(x) = f'(x)(b - x) + \frac{1}{2}f''(\eta)(b - x)^2,
> $$
> 其中 $\xi \in (a,x)$，$\eta \in (x,b)$. 简单的计算表明  
> $$
> \begin{aligned}
> |(b - x)(f(a) - f(x)) - (a - x)(f(b) - f(x))|
> &= \frac{1}{2}(x - a)(b - x)|(x - a)f''(\xi) + (b - x)f''(\eta)|\\
> &\le \frac{1}{2}(x - a)(b - x)[M(x - a) + M(b - x)]\\
> &= \frac{1}{2}M(b - a)(x - a)(b - x).
> \end{aligned}
> $$
> 上式两边除以 $(b - a)$，整理以后得  
> $$
> |f(x) - l(x)| \le \frac{1}{2}M(b - x)(x - a) \le \frac{1}{8}M(b - a)^2,
> $$
> 其中 $l$ 为定理中的线性函数.
>
> 最后我们实际上得到了一个逐点的估计  
> $$
> |f(x) - l(x)| \le \frac{1}{2}M(b - x)(x - a),\quad \forall\ x \in [a,b].
> $$
> 以后我们会用这个估计给出积分的梯形公式的误差估计.

(3) **计算某些极限**

在某些情况下，Taylor 展开可以用来计算极限

/example/ 求极限  
$$
\lim_{x \to \infty} \left[x - x^2 \ln\left(1 + \frac{1}{x}\right)\right].
$$

>  当 $x \to \infty$ 时，$x^{-1} \to 0$，因此  
> $$
> \ln\left(1 + \frac{1}{x}\right) = \frac{1}{x} - \frac{1}{2x^2} + o\left(\frac{1}{x^2}\right)\ (x \to \infty),
> $$
> 这说明  
> $$
> x - x^2 \ln\left(1 + \frac{1}{x}\right) = \frac{1}{2} + o(1) \to \frac{1}{2}\ (x \to \infty).
> $$

(4) **近似计算**.

如果对余项有好的估计，则 Taylor 展开也可用于近似计算，这儿我们只考虑简单的例子. 

/example/ 求 $\pi$ 的近似值

> 利用恒等式  
> $$
> \arctan u + \arctan v = \arctan\left(\frac{u + v}{1 - uv}\right)
> $$
> 可以得到  
> $$
> \frac{\pi}{4} = \arctan 1 = \arctan \frac{1}{2} + \arctan \frac{1}{3}
> = 2 \arctan \frac{1}{3} + \arctan \frac{1}{7} = \cdots
> $$
> 然后利用 Taylor 展开  
> $$
> \arctan x = x - \frac{x^3}{3} + \frac{x^5}{5} - \frac{x^7}{7} + \cdots
> $$
> 就可以将 $\pi$ 很快地算到很精确的值

(5) **Newton 方法**.

现在我们考虑这样的问题：给定函数 $f(x)$，怎样解方程  
$$
f(x) = 0
$$
呢？当 $f(x)$ 是二次函数的时候，我们可以判断它有无解，并且可以将解显式地写出来. 对于一般的函数，我们往往只能近似地求解. 下面我们作这样的假设：  

(*) $f$ 在 $[a,b]$ 上连续，$f(a)f(b) < 0$；$f'$ 和 $f''$ 在 $(a,b)$ 中都不变号. 

在这个假设之下，根据介值定理和微分中值定理，$f(x) = 0$ 在 $(a,b)$ 中有且仅有一个解 $\xi$. 为了讨论的简单起见，我们进一步假设 $f'$ 和 $f''$ 有正的下界. 此时 $f$ 为严格单调递增的凸函数，因而 $f(a) < 0$，$f(b) > 0$. 

考察 $f$ 的图像，如果从 $(b,f(b))$ 作函数 $y = f(x)$ 的切线，其方程为  
$$
y - f(b) = f'(b)(x - a),
$$
此切线和 $x$ 轴的交点的横坐标为  
$$
x_1 = b - \frac{f(b)}{f'(b)}.
$$
根据 $f$ 的凸性可知，$x_1$ 比 $b$ 要更靠近 $\xi$. 

再从 $(x_1,f(x_1))$ 出发作 $y = f(x)$ 的切线，交 $x$ 轴于 $(x_2,0)$，其中  
$$
x_2 = x_1 - \frac{f(x_1)}{f'(x_1)}.
$$
$x_2$ 要比 $x_1$ 更靠近 $\xi$. 

这样一直做下去就得到一列点 $\{x_n\}$，它们可以递归地定义为  
$$
x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)},\quad n \ge 0.
$$
其中 $x_0 = b$. $\{x_n\}$ 为单调递减数列，且 $\xi < x_n < b$，$\forall\ n \ge 1$. 因此极限 $\displaystyle\lim_{n \to \infty} x_n$ 存在，记为 $\xi'$. 于是 $\xi \le \xi' < b$. 在上式中令 $n \to \infty$ 得  
$$
\xi' = \xi' - \frac{f(\xi')}{f'(\xi')},
$$
即 $f(\xi') = 0$，这说明 $\xi' = \xi$. 因此，我们把 $x_n$ 视为 $f(x) = 0$ 的近似解是合理的，这种求近似解的方法称为 Newton 法或切线法式. 

下面我们来估计近似解 $x_n$ 和 $\xi$ 之间的误差. 根据 Taylor 公式，存在点 $c \in (\xi,x_n)$，使得  
$$
0 = f(\xi) = f(x_n) + f'(x_n)(\xi - x_n) + \frac{1}{2}f''(c)(\xi - x_n)^2,
$$
上式可改写为  
$$
x_{n+1} - \xi = \frac{1}{2} \frac{f''(c)}{f'(x_n)}(x_n - \xi)^2,
$$
因此有
$$
|x_{n+1} - \xi| \le \frac{M}{2m}|x_n - \xi|^2,
$$
其中  
$$
M = \sup_{x \in (a,b)} |f''(x)|,\quad m = \inf_{x \in (a,b)} |f'(x)|.
$$
可以看出，数列 $\{x_n\}$ 趋于极限 $\xi$ 的速度是很快的. 

需要注意的是，在我们的假设条件下，一般来说不能从 $(a,f(a))$ 开始作切线求交点来近似求解 $f(x) = 0$. 不难发现，当 $f'$ 和 $f''$ 同号时，应从 $(b,f(b))$ 出发作切线；当 $f'$ 和 $f''$ 反号时则应从 $(a,f(a))$ 出发作切线. 

