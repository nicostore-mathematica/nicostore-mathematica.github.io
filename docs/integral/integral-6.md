---
title: Chapter 6 微分学
permalink: /integral/integral-6/
createTime: 2025/09/16 20:57:28
---

## Part 1 微分

在经典物理学中, 如果我们考察质点沿直线的运动, 则有速度和加速度的概念. 速度是反映位移随时间变化的量, 即速度是位移函数的变化率, 而加速度是反映速度随时间变化的量. 我们现在利用极限给出这些变化量的数学定义.

### · 导数

**定义1** (导数). 

> 设函数 $f$ 在 $x_0$ 附近有定义, 如果极限
> $$
> \lim_{x \to x_0} \frac{f(x) - f(x_0)}{x - x_0}
> $$
> 存在且有限, 则称 $f$ 在 $x_0$ 处可导, 此极限称为 $f$ 在 $x_0$ 处的导数, 记为 $f'(x_0)$.
>
> 如果记 $y = f(x)$, $\Delta x = x - x_0$, $\Delta y = f(x) - f(x_0)$, 则导数也可表示为
> $$
> f'(x_0) = \lim_{x \to x_0} \frac{f(x) - f(x_0)}{x - x_0} = \lim_{\Delta x \to 0} \frac{\Delta y}{\Delta x}.
> $$
> 既然导数是用极限定义的, 我们当然也可以用 $\varepsilon-\delta$ 语言来描述它: 如果存在 $A \in \mathbb{R}$, 使得任给 $\varepsilon > 0$, 均存在 $\delta > 0$, 当 $0 < |x - x_0| < \delta$ 时
> $$
> \left|\frac{f(x) - f(x_0)}{x - x_0} - A\right| < \varepsilon,
> $$
> 则 $f$ 在 $x_0$ 处可导, 导数为 $A$.
>
> 如果 $f$ 在 $x_0$ 的左边邻域 $(x_0 - \delta, x_0]$ 中有定义, 且当 $x \to x_0^-$ 时, $\frac{f(x) - f(x_0)}{x - x_0}$ 的极限存在且有限, 则称 $f$ 在 $x_0$ 处左可导, 此极限称为 $f$ 在 $x_0$ 处的左导数, 记为 $f'_-(x_0)$, 即
> $$
> f'_-(x_0) = \lim_{x \to x_0^-} \frac{f(x) - f(x_0)}{x - x_0}.
> $$
>
> 类似地, 如果 $f$ 在 $x_0$ 的右边邻域 $[x_0, x_0 + \delta)$ 中有定义, 且当 $x \to x_0^+$ 时, $\frac{f(x) - f(x_0)}{x - x_0}$ 的极限存在且有限, 则称 $f$ 在 $x_0$ 处右可导, 此极限称为 $f$ 在 $x_0$ 处的右导数, 记为 $f'_+(x_0)$, 即
> $$
> f'_+(x_0) = \lim_{x \to x_0^+} \frac{f(x) - f(x_0)}{x - x_0}.
> $$

**命题1**. 设 $f$ 在 $x_0$ 附近有定义, 则 $f$ 在 $x_0$ 处可导当且仅当 $f$ 在 $x_0$ 处的左导数和右导数存在且相等, 此时它们等于 $f$ 在 $x_0$ 处的导数.

/example/

> 研究常值函数 $f(x) = c$ 的导数.
>
> > 任给 $x_0$, 有
> > $$
> > \lim_{x \to x_0} \frac{f(x) - f(x_0)}{x - x_0} = \lim_{x \to x_0} \frac{c - c}{x - x_0} = 0,
> > $$
> > 因此按照定义, 常值函数在 $x_0$ 处可导, 导数为零. 这和我们的直观是相吻合的, 因为导数反映函数的变化率, 而常值函数的变化率当然为零.
>
> 研究函数 $f(x) = |x|$ 在 $x_0 = 0$ 处的可导性.
>
> > 当 $x < 0$ 时, 有
> > $$
> > \lim_{x \to 0^-} \frac{f(x) - f(0)}{x - 0} = \lim_{x \to 0^-} \frac{|x|}{x} = \lim_{x \to 0^-} \frac{-x}{x} = -1.
> > $$
> > 这说明 $f'_-(0) = -1$. 类似地, 当 $x > 0$ 时, 有
> > $$
> > \lim_{x \to 0^+} \frac{f(x) - f(0)}{x - 0} = \lim_{x \to 0^+} \frac{|x|}{x} = \lim_{x \to 0^+} \frac{x}{x} = 1.
> > $$
> > 因此 $f'_+(0) = 1$. 这说明 $f$ 在 $x_0 = 0$ 处不可导.

> [!tip]
>
> 我们现在从几何的角度来解释导数的含义. 考虑函数 $f$ 在 $x_0$ 附近的图像, 经过图像上两点 $(x_0, f(x_0))$ 和 $(x, f(x))$ 的直线的方程为
> $$
> y(t) = \frac{f(x) - f(x_0)}{x - x_0}(t - x_0) + f(x_0),\quad \forall\ t \in \mathbb{R}.
> $$
> 当 $x \to x_0$ 时, 考察此直线的变化. 当 $f$ 在 $x_0$ 处可导时, 直线的极限位置是一条经过 $(x_0, f(x_0))$ 且斜率为 $f'(x_0)$ 的直线, 称为 $f$ 在 $x_0$ 处的切线, 其方程为
> $$
> y(t) = f'(x_0)(t - x_0) + f(x_0).
> $$
>
> 方程
> $$
> (x - x_0) + f'(x_0)(y - f(x_0)) = 0
> $$
> 所代表的直线则称为 $f$ 在 $x_0$ 处的法线.

### · 微分

根据切线的定义过程, 我们可以把切线看成函数 $f$ 的图像在 $x_0$ 处的一个线性逼近. 即, 函数 $f$ 在 $x_0$ 附近可以近似地看成线性函数, 这种线性逼近或线性化的方法是我们研究函数的一种基本手法.

**定义2** (微分). 

> 设 $f$ 是在 $x_0$ 附近有定义的函数, 如果存在常数 $A$, 使得
> $$
> f(x) = f(x_0) + A(x - x_0) + o(x - x_0)\quad (x \to x_0),
> $$
> 则称 $f$ 在 $x_0$ 处可微, $x_0$ 处的线性映射 $x \mapsto Ax$ 称为 $f$ 在 $x_0$ 处的微分, 记为 $df(x_0)$.

导数和微分之间的关系体现在下面的命题中.

**命题2.** 设 $f$ 在 $x_0$ 附近有定义, 则  

(1) $f$ 在 $x_0$ 处可导当且仅当 $f$ 在 $x_0$ 处可微, 且微分的斜率就是导数 $f'(x_0)$.  

(2) 如果 $f$ 在 $x_0$ 处可导, 则 $f$ 在 $x_0$ 处连续.

> /proof/
>
> (1) 设 $f$ 在 $x_0$ 处可导, 则
> $$
> \lim_{x \to x_0} \frac{f(x) - f(x_0) - f'(x_0)(x - x_0)}{x - x_0} = \lim_{x \to x_0} \frac{f(x) - f(x_0)}{x - x_0} - f'(x_0) = 0,
> $$
> 因此
> $$
> f(x) - f(x_0) - f'(x_0)(x - x_0) = o(x - x_0)\quad (x \to x_0),
> $$
> 即
> $$
> f(x) = f(x_0) + f'(x_0)(x - x_0) + o(x - x_0)\quad (x \to x_0).
> $$
> 这说明 $f$ 在 $x_0$ 处可微.
>
> 反之, 设 $f$ 在 $x_0$ 处可微, $f(x) = f(x_0) + A(x - x_0) + o(x - x_0)$, 则
> $$
> \lim_{x \to x_0} \frac{f(x) - f(x_0)}{x - x_0} = \lim_{x \to x_0} \frac{A(x - x_0) + o(x - x_0)}{x - x_0} = A,
> $$
> 从而 $f$ 在 $x_0$ 处可导, 且导数 $f'(x_0) = A$.
>
> (2) 如果 $f$ 在 $x_0$ 处可导, 则 $f$ 在 $x_0$ 处可微, 从而
> $$
> \lim_{x \to x_0} f(x) = \lim_{x \to x_0} [f(x_0) + A(x - x_0) + o(x - x_0)] = f(x_0),
> $$
> 因此 $f$ 在 $x_0$ 处连续.

微分的几何意义在于它可以看成 $f$ 的一个线性近似. 由于微分的斜率等于导数, 我们将 $x_0$ 处的微分 $df(x_0)$ 写为
$$
df(x_0) = f'(x_0)dx(x_0),
$$
其中 $dx(x_0)$ 是函数 $x$ 在 $x_0$ 的微分 (即恒同线性映射). 我们又将导数 $f'(x_0)$ 记为 $\frac{df}{dx}(x_0)$ 或 $\left.\frac{df}{dx}\right|_{x_0}$, 称为 $f$ 在 $x_0$ 处的微商. 

微商是一个历史遗留记号, 它并不是两个微分的商, 而仅仅表示函数 $f$ 关于变量 $x$ 在 $x_0$ 处的导数. 我们将在那些需要区分关于不同变量求导的时候使用微商的记号, 其余的时候一般用 $f'$ 表示导数.

### · 运算法则

下面我们研究导数的运算法则.

**命题3** (导数的运算法则). 设 $f,g$ 在 $x$ 处可导, 则 $fg$ 在 $x$ 处可导; 如果 $\alpha,\beta$ 为常数, 则 $\alpha f + \beta g$ 在 $x$ 处可导. 且有  

(1) $(\alpha f + \beta g)' = \alpha f' + \beta g'$ （线性性）;  

(2) $(fg)' = f'g + fg'$ （导性）.

> /proof/
>
> (1) 如果 $f,g$ 在 $x$ 处可导, 则
> $$
> f(x') = f(x) + f'(x)(x - x') + o(x - x'),
> $$
> $$
> g(x') = g(x) + g'(x)(x - x') + o(x - x').
> $$
> 从而
> $$
> \alpha f(x') + \beta g(x') = (\alpha f(x) + \beta g(x)) + (\alpha f'(x) + \beta g'(x))(x - x') + \alpha o(x - x') + \beta o(x - x')
> $$
> $$
> = (\alpha f(x) + \beta g(x)) + (\alpha f'(x) + \beta g'(x))(x - x') + o(x - x').
> $$
>
> 这说明 $\alpha f + \beta g$ 在 $x$ 处可导, 且导数等于 $\alpha f' + \beta g'$.
>
> (2) 如果 $f,g$ 在 $x$ 处可导, 则 $f,g$ 在 $x$ 处连续, 且
> $$
> f(x')g(x') = [f(x') - f(x)]g(x') + f(x)[g(x') - g(x)] + f(x)g(x),
> $$
> 于是
> $$
> \lim_{x' \to x} \frac{f(x')g(x') - f(x)g(x)}{x - x'} = \lim_{x' \to x} \frac{f(x') - f(x)}{x' - x}g(x') + \lim_{x' \to x'} \frac{g(x') - g(x)}{x' - x}f(x)
> = f'(x)g(x) + g'(x)f(x).
> $$
> 这说明 $fg$ 在 $x$ 处可导, 且 $(fg)' = f'g + fg'$.

导数运算的线性性可以推广为对任意有限多个函数的线性组合成立. 从导性还得到

**推论4**. 设 $f,g$ 在 $x$ 处可导, $g(x) \ne 0$. 则 $\frac{f}{g}$ 在 $x$ 处可导, 且
$$
\left(\frac{f}{g}\right)' = \frac{f'g - fg'}{g^2}.
$$

> /proof/
>
> 先说明 $g^{-1} = \frac{1}{g}$ 在 $x$ 处可导:
> $$
> \lim_{x' \to x} \frac{g^{-1}(x') - g^{-1}(x)}{x' - x} = \lim_{x' \to x} \frac{-1}{g(x)g(x')} \cdot \frac{g(x') - g(x)}{x' - x} = -\frac{g'(x)}{g^2(x)}.
> $$
> 因此 $\frac{f}{g} = f \cdot \frac{1}{g}$ 可导, 利用导数的导性, 有
> $$
> \left(\frac{f}{g}\right)' = f' \cdot \left(\frac{1}{g}\right) + f \cdot \left(\frac{1}{g}\right)' = \frac{f'g - fg'}{g^2},
> $$
> 推论得证.

**命题5** (链式法则). 设 $g$ 在 $x$ 处可导, $f$ 在 $g(x)$ 处可导, 则复合函数 $f \circ g = f(g)$ 在 $x$ 处可导, 且
$$
[f(g)]' = f'(g)g'.
$$

> /proof/
>
> 因为 $g$ 在 $x$ 处可导, 故当 $x'$ 在 $x$ 附近时
> $$
> g(x') = g(x) + g'(x)(x' - x) + o(x' - x),
> $$
> 这说明 $x' \to x$ 时, 存在常数 $C$, 使得 $|g(x') - g(x)| \le C|x' - x|$. 因此
> $$
> \begin{aligned}
> f(g(x')) &= f(g(x)) + f'(g(x))(g(x') - g(x)) + o(g(x') - g(x))\\
> &= f(g(x)) + f'(g(x))g'(x)(x' - x) + f'(g(x))o(x' - x') + o(x' - x)\\
> &= f(g(x)) + f'(g(x))g'(x)(x' - x) + o(x' - x).
> \end{aligned}
> $$
> 这说明 $f(g)$ 在 $x$ 处可导, 导数为 $f'(g(x))g'(x)$. 

链式法则对于任意有限个函数的复合也适用, 比如
$$
[f(g(h))]' = f'(g(h))g'(h)h'.
$$
**命题6** (反函数求导法则). 设 $f$ 在 $x_0$ 附近连续且有逆函数 $g$. 如果 $f$ 在 $x_0$ 处可导, 且导数 $f'(x_0) \ne 0$, 则 $g$ 在 $y_0 = f(x_0)$ 处可导, 且
$$
g'(y_0) = \frac{1}{f'(x_0)}.
$$

> /proof/
>
> 因为 $f$ 在 $x_0$ 处可导, 故
> $$
> f(x) = f(x_0) + f'(x_0)(x - x_0) + o(x - x_0)\quad (x \to x_0), \tag{4.1}
> $$
> 当 $x \to x_0$ 时上式可改写为
> $$
> f(x) - f(x_0) = [f'(x_0) + o(1)](x - x_0).
> $$
> 当 $f'(x_0) \ne 0$ 时, 上式表明, 当 $x \to x_0$ 时, 存在常数 $C > 0$ 使得
> $$
> |f(x) - f(x_0)| \ge C|x - x_0|,\quad \text{or}\quad |y - y_0| \ge C|g(y) - g(y_0)|.
> $$
> 特别地, 当 $y \to y_0$ 时, $x = g(y) \to g(y_0) = x_0$. 在 (4.1) 中代入 $x = g(y)$, $x_0 = g(y_0)$ 得
> $$
> \begin{aligned}
> y &= y_0 + f'(x_0)(g(y) - g(y_0)) + o(g(y) - g(y_0))\quad (y \to y_0)\\
> &= y_0 + f'(x_0)(g(y) - g(y_0)) + o(y - y_0)\quad (y \to y_0),
> \end{aligned}
> $$
> 或改写为
> $$
> g(y) = g(y_0) + \frac{1}{f'(x_0)}(y - y_0) + o(y - y_0)\quad (y \to y_0).
> $$
> 这说明 $g$ 在 $y_0 = f(x_0)$ 处可导, 且导数为 $\frac{1}{f'(x_0)}$.

有了上面这些求导运算法则, 我们就可以计算常见函数的导数了. 先看最基本的例子.

**命题7**. $x' = 1$, $(e^x)' = e^x$.

> /proof/
>
> 由定义,
> $$
> x' = \lim_{\Delta x \to 0} \frac{(x + \Delta x) - x}{\Delta x} = 1.
> $$
> 对于函数 $e^x$, 我们先计算它在 $x_0 = 0$ 处的导数:
> $$
> (e^x)'(0) = \lim_{x \to 0} \frac{e^x - 1}{x - 0} = \lim_{y \to 0} \frac{y}{\ln(1 + y)} = \lim_{y \to 0} \frac{1}{\ln(1 + y)^{1/y}} = 1.
> $$
> 对于一般的 $x$, 有
> $$
> (e^x)' = \lim_{x' \to x} \frac{e^{x'} - e^x}{x' - x} = \lim_{x' \to x} e^x \frac{e^{x' - x} - 1}{x' - x}
> = e^x \lim_{y \to 0} \frac{e^y - 1}{y} = e^x.
> $$
> 这样就得到了命题的证明.

**命题8**. 设 $a > 0$ ($a \ne 1$) 和 $\alpha \ne 0$ 为常数. 在函数的定义域内, 我们有  

(1) $(a^x)' = a^x \ln a$, $(\log_a x)' = \frac{1}{x \ln a}$;  

(2) $(\ln |x|)' = \frac{1}{x}$, $(x^\alpha)' = \alpha x^{\alpha - 1}$.

> /proof/
>
> (1) 利用复合求导计算如下:
> $$
> (a^x)' = (e^{x \ln a})' = e^{x \ln a}(x \ln a)' = a^x \ln a.
> $$
> 利用反函数的导数公式, 有
> $$
> (\log_a x)' = \frac{1}{(a^y)'|_{y = \log_a x}} = \frac{1}{a^{\log_a x} \ln a} = \frac{1}{x \ln a}.
> $$
>
> (2) 当 $x > 0$ 时, 由 (1) 知 $(\ln |x|)' = (\ln x)' = \frac{1}{x}$; 当 $x < 0$ 时,
> $$
> (\ln |x|)' = [\ln(-x)]' = \frac{1}{-x}(-x)' = \frac{1}{x}.
> $$
> 如果 $\alpha \ne 0$, $x > 0$, 则
> $$
> (x^\alpha)' = (e^{\alpha \ln x})' = e^{\alpha \ln x}(\alpha \ln x)'
> = x^\alpha \alpha \frac{1}{x} = \alpha x^{\alpha - 1};
> $$
> 如果 $\alpha > 1$, 则 $x = 0$ 处的导数计算如下
> $$
> (x^\alpha)'(0) = \lim_{x \to 0} \frac{x^\alpha}{x} = \lim_{x \to 0} x^{\alpha - 1} = 0;
> $$
> 我们现在考虑 $x < 0$ 的情形. 此时, 要求 $\alpha = \frac{p}{q}$ 为有理数, $p,q$ 为互素的整数, 且 $q$ 为奇数. 我们有
> $$
> (x^\alpha)' = ((-1)^{\frac{p}{q}} e^{\alpha \ln |x|})' = (-1)^{\frac{p}{q}} e^{\alpha \ln |x|} (\alpha \ln |x|)'
> = x^\alpha \alpha \frac{1}{x} = \alpha x^{\alpha - 1}.
> $$
> 这样就得到了定义域内所有可导点处的导数.

**命题9**. 在函数的定义域内, 有  

(1) $(\sin x)' = \cos x$, $(\csc x)' = -\csc x \cot x$, $(\arcsin x)' = \frac{1}{\sqrt{1 - x^2}}$;  

(2) $(\cos x)' = -\sin x$, $(\sec x)' = \sec x \tan x$, $(\arccos x)' = -\frac{1}{\sqrt{1 - x^2}}$;  

(3) $(\tan x)' = \sec^2 x$, $(\arctan x)' = \frac{1}{1 + x^2}$;  

(4) $(\cot x)' = -\csc^2 x$, $(\operatorname{arccot} x)' = -\frac{1}{1 + x^2}$;

> /proof/
>
> (1) 根据导数的定义, 有
> $$
> (\sin x)' = \lim_{x' \to x} \frac{\sin x' - \sin x}{x' - x}
> = \lim_{x' \to x} 2 \frac{\sin \frac{x' - x}{2}}{x' - x} \cos \frac{x' + x}{2} = \cos x.
> $$
> 由推论4或复合函数求导公式, 有
> $$
> (\csc x)' = \left(\frac{1}{\sin x}\right)' = -\frac{1}{\sin^2 x}(\sin x)'
> = -\frac{1}{\sin^2 x} \cos x = -\csc x \cot x.
> $$
> 由反函数求导公式, 有
> $$
> (\arcsin x)' = \frac{1}{\cos \arcsin x} = \frac{1}{\sqrt{1 - \sin^2 \arcsin x}} = \frac{1}{\sqrt{1 - x^2}}.
> $$
>
> (2) 我们可以象 $\sin x$ 那样利用三角函数和差公式去求 $\cos x$ 的导数, 也可以直接利用复合函数求导:
> $$
> (\cos x)' = \left(\sin\left(\frac{\pi}{2} - x\right)\right)' = \cos\left(\frac{\pi}{2} - x\right)\left(\frac{\pi}{2} - x\right)' = -\sin x,
> $$
> 因此
> $$
> (\csc x)' = -\frac{1}{\cos^2 x}(-\sin x) = \sec x \tan x,
> $$
> 又因为 $\arcsin x + \arccos x = \frac{\pi}{2}$, 故
> $$
> (\arccos x)' = \left(\frac{\pi}{2} - \arcsin x\right)' = -\frac{1}{\sqrt{1 - x^2}}.
> $$
>
> (3) 由推论4及上面的计算, 有
> $$
> (\tan x)' = \frac{\cos x \cos x - \sin x(-\sin x)}{\cos^2 x} = \frac{1}{\cos^2 x} = \sec^2 x.
> $$
> 由反函数求导公式, 有
> $$
> (\arctan x)' = \frac{1}{\sec^2 \arctan x} = \frac{1}{1 + \tan^2 \arctan x} = \frac{1}{1 + x^2}.
> $$
>
> (4) 由推论4及上面的计算, 有
> $$
> (\cot x)' = \frac{(-\sin x)\sin x - \cos x \cos x}{\sin^2 x} = -\csc^2 x,
> $$
> 由反函数求导公式, 有
> $$
> (\operatorname{arccot} x)' = \frac{1}{-\csc^2 \operatorname{arccot} x} = -\frac{1}{1 + \cot^2 \operatorname{arccot} x} = -\frac{1}{1 + x^2}.
> $$
> 这就得到了三角函数的导数公式.

我们如下定义一类所谓的双曲函数, 首先是双曲正弦 $\sinh x$ 和双曲余弦 $\cosh x$:
$$
\sinh x = \frac{e^x - e^{-x}}{2},\quad \cosh x = \frac{e^x + e^{-x}}{2};
$$
然后是双曲正切 $\tanh x$ 和双曲余切 $\coth x$:
$$
\tanh x = \frac{\sinh x}{\cosh x},\quad \coth x = \frac{\cosh x}{\sinh x};
$$
简单的计算表明, 双曲函数之间满足如下关系
$$
\sinh(x + y) = \sinh x \cdot \cosh y + \cosh x \cdot \sinh y,
$$
$$
\sinh(x - y) = \sinh x \cdot \cosh y - \cosh x \cdot \sinh y,
$$
$$
\cosh(x + y) = \cosh x \cdot \cosh y + \sinh x \cdot \sinh y,
$$
$$
\cosh(x - y) = \cosh x \cdot \cosh y - \sinh x \cdot \sinh y,
$$
以及
$$
\cosh^2 x - \sinh^2 x = 1,\quad 1 - (\tanh x)^2 = \frac{1}{\cosh^2 x},\quad (\coth x)^2 - 1 = \frac{1}{\sinh^2 x}.
$$
双曲函数的导数计算如下:

**命题10**. $(\sinh x)' = \cosh x$, $(\cosh x)' = \sinh x$, $(\tanh x)' = 1 - (\tanh x)^2$, $(\coth x)' = 1 - (\coth x)^2$.

> /proof/  利用 $e^x$ 的导数直接计算即可

## Part 2 高阶导数

### · 定义

要考察质点的运动, 除了考虑速度, 还要考虑加速度. 速度是位移函数的导数, 加速度则是速度的导数.

**定义1** (高阶导数). 

> 设 $f$ 在 $x_0$ 附近可导, 如果导函数 $f'$ 在 $x_0$ 处仍可导, 则称 $f$ 在 $x_0$ 处 2 阶可导. 记
> $$
> f''(x_0) = (f')'(x_0),
> $$
> 称为 $f$ 在 $x_0$ 处的 2 阶导数. 一般地, 如果 $f$ 在 $x_0$ 附近 $n$ ($n \ge 1$) 阶可导, 且 $n$ 阶导函数 $f^{(n)}$ 在 $x_0$ 处可导, 则称 $f$ 在 $x_0$ 处 $n+1$ 阶可导, 记
> $$
> f^{(n+1)}(x_0) = (f^{(n)})'(x_0),
> $$
> 称为 $f$ 的 $n+1$ 阶导数.
>
> 按照我们的记号, $f^{(1)} = f'$, $f^{(2)} = f''$, $f^{(3)} = f'''$ 等等. 我们约定 $f^{(0)} = f$. 有时也用下面的记号表示高阶导数:
> $$
> f'' = \frac{d^2 f}{dx^2},\quad f^{(3)} = f''' = \frac{d^3 f}{dx^3},\cdots
> $$

**定义2**. 

> 如果 $f$ 在区间 $I$ 的每一点处均 $n$ 阶可导, 则称 $f$ 在 $I$ 中 $n$ 阶可导; 如果 $f$ 可导, 且导函数 $f'$ 连续, 则称 $f$ (1 阶) 连续可导, 记为 $f \in C^1(I)$; 
>
> 一般地, 如果 $f$ 在 $I$ 中 $n$ 阶可导, 且 $n$ 阶导函数 $f^{(n)}$ 连续, 则称 $f$ $n$ 阶连续可导, 记为 $f \in C^n(I)$. 如果 $f$ 在 $I$ 中存在任意阶导数, 则称 $f$ 是光滑的, 记为 $f \in C^\infty(I)$.

/example/

> 可微函数的导函数不一定连续.
>
> > 考虑下面的函数
> > $$
> > f(x) =
> > \begin{cases}
> > x^{\frac{3}{2}} \sin \frac{1}{x}, & x \in (0,1], \\
> > 0, & x = 0.
> > \end{cases}
> > $$
> > 我们先计算 $f$ 在 $x = 0$ 处的导数:
> > $$
> > f'(0) = \lim_{x \to 0^+} \frac{x^{\frac{3}{2}} \sin \frac{1}{x}}{x} = \lim_{x \to 0^+} \sqrt{x} \sin \frac{1}{x} = 0,
> > $$
> > 这里我们用到了估计
> > $$
> > \left|\sqrt{x} \sin \frac{1}{x}\right| \le \sqrt{x} \to 0\quad (x \to 0^+).
> > $$
> > 当 $x > 0$ 时, 由复合求导, 有
> > $$
> > f'(x) = \frac{3}{2}x^{\frac{1}{2}} \sin \frac{1}{x} - x^{\frac{3}{2}} \frac{1}{x^2} \cos \frac{1}{x}
> > = \frac{3}{2}x^{\frac{1}{2}} \sin \frac{1}{x} - x^{-\frac{1}{2}} \cos \frac{1}{x}.
> > $$
> > 考察 $f'$ 在 $x_n = \frac{1}{2n\pi}$ ($n = 1,2,\cdots$) 处的取值知 $f'(x_n) \to -\infty$, 因此 $f'$ 不连续.
>
> 设 $k = 1,2,\cdots$, 则函数
> $$
> f(x) =
> \begin{cases}
> x^{2k+1} \sin \frac{1}{x}, & x \ne 0 \\
> 0, & x = 0
> \end{cases}
> $$
> 是 $C^k$ 函数, 但不是 $C^{k+1}$ 的.
>
> > 可以计算出 $f'(0) = 0$, 且
> > $$
> > f'(x) =
> > \begin{cases}
> > (2k+1)x^{2k} \sin \frac{1}{x} - x^{2k-1} \cos \frac{1}{x}, & x \ne 0, \\
> > 0, & x = 0.
> > \end{cases}
> > $$
> > 同理,
> > $$
> > f''(x) =
> > \begin{cases}
> > 2k(2k+1)x^{2k-1} \sin \frac{1}{x} - 4k x^{2k-2} \cos \frac{1}{x} - x^{2k-3} \sin \frac{1}{x}, & x \ne 0, \\
> > 0, & x = 0.
> > \end{cases}
> > $$
> > 继续求导可得 $f^{(k)}(0) = 0$, 且当 $x \ne 0$ 时,
> > $$
> > f^{(k)}(x) = x^2 \phi(x) \pm x \sin \frac{1}{x} \quad \text{或} \quad x^2 \phi(x) \pm x \cos \frac{1}{x},
> > $$
> > 其中 $\phi(x)$ 在 $x = 0$ 附近有界. 因此 $f^{(k)}$ 连续但在 $x = 0$ 处不可导.

### · 计算

/Theorem/

> 设 $f,g$ 均为 $n$ 阶可导函数, 则  
>
> (1) $(\alpha f + \beta g)^{(n)} = \alpha f^{(n)} + \beta g^{(n)}$, $\forall\ \alpha,\beta \in \mathbb{R}$;  
>
> (2) (Leibniz) 
> $$
> (fg)^{(n)} = \sum_{k=0}^{n} C_n^k f^{(n-k)}g^{(k)}
> $$
> 其中 $C_n^k = \frac{n!}{k!(n-k)!}$ 为组合数.

/proof/

> (1) 这可由求导运算的线性及归纳法直接得到.  
>
> (2) 对 $n$ 用数学归纳法. $n = 1$ 的情形就是求导运算的导性. 设公式对 $n = k$ 成立, 则 $n = k+1$ 时
> $$
> \begin{aligned}
> (fg)^{(k+1)} &= [(fg)^{(k)}]' = \sum_{l=0}^{k} C_k^l [f^{(k-l+1)}g^{(l)} + f^{(k-l)}g^{(l+1)}]\\
> &= \sum_{l=0}^{k} C_k^l f^{(k-l+1)}g^{(l)} + \sum_{l=0}^{k-1} C_k^l f^{(k-l)}g^{(l+1)} + C_k^k f g^{(k+1)}\\
> &= f^{(k+1)}g + \sum_{l=1}^{k} [C_k^l + C_k^{l-1}]f^{(k-l+1)}g^{(l)} + f g^{(k+1)}\\
> &= \sum_{l=0}^{k+1} C_{k+1}^l f^{(k+1-l)}g^{(l)},
> \end{aligned}
> $$
> 其中我们用到组合恒等式 $C_k^l + C_k^{l-1} = C_{k+1}^l$.

现在我们再看几个高阶导数计算和应用的例子.

/example/

> 设多项式 $p_n(x) = a_n x^n + a_{n-1} x^{n-1} + \cdots + a_1 x + a_0$ 次数为 $n$, 则  
>
> (1) $p_n^{(n)}(x) = n! a_n$, 从而 $p_n^{(k)} = 0$, $\forall\ k > n$;  
>
> (2) $a_k = \frac{1}{k!} p_n^{(k)}(0)$, $k = 0,1,\cdots,n$.
>
> > 直接逐项求导, 利用归纳法可得
> > $$
> > p_n^{(k)}(x) = n(n-1)\cdots(n-k+1)a_n x^{n-k} + (n-1)\cdots(n-k)a_{n-1}x^{n-1-k} + \cdots + k! a_k,
> > $$
> > 其中 $1 \le k \le n$. 特别地, 取 $k = n$ 就得到 (1), 而令 $x = 0$ 就得到 (2).
>
> 求函数 $f(x) = \sin x$, $\cos x$ 的各阶导数.
>
> > 我们已知
> > $$
> > (\sin x)' = \cos x = \sin(x + \frac{\pi}{2}),\quad (\sin x)'' = -\sin x = \sin(x + \pi).
> > $$
> > 一般地, 如果
> > $$
> > (\sin x)^{(k)} = \sin(x + \frac{k\pi}{2})
> > $$
> > 则
> > $$
> > (\sin x)^{(k+1)} = \cos\left(x + \frac{k\pi}{2}\right) = \sin\left(x + \frac{(k+1)\pi}{2}\right),
> > $$
> > 这说明
> > $$
> > (\sin x)^{(n)} = \sin(x + \frac{n\pi}{2})
> > $$
> > 同理可得
> > $$
> > (\cos x)^{(n)} = \cos(x + \frac{n\pi}{2})
> > $$

## Part 3 微分中值定理

要研究一个变化量, 可以考察其“最大”值和“最小”值.

### · 极值

**定义1** (极值点). 

> 设 $f$ 是定义在区间 $I$ 中的函数, $x_0 \in I$. 如果存在 $\delta > 0$, 使得
> $$
> f(x) \ge f(x_0)\ (f(x) \le f(x_0)),\quad \forall\ x \in (x_0 - \delta, x_0 + \delta) \cap I,
> $$
> 则称 $x_0$ 为 $f$ 在 $I$ 中的一个极小(大)值点, $f(x_0)$ 称为极小(大)值.
>
> 如果 $x_0 \in I$, 且
> $$
> f(x) \ge f(x_0)\ (f(x) \le f(x_0)),\quad \forall\ x \in I,
> $$
> 则称 $x_0$ 为 $f$ 在 $I$ 中的一个最小(大)值点, $f(x_0)$ 称为最小(大)值.
>
> 显然, 最小(大)值点是极小(大)值点. 我们把极小值点和极大值点统称为极值点, 极小值和极大值统称为极值, 最大值和最小值统称最值. 当定义中的不等号在 $x_0$ 的空心邻域中严格成立时, 相应的极值点称为严格极值点, 相应的极值称为严格极值.

**定理1** (Fermat). 设 $x_0$ 是函数 $f$ 在 $I$ 中的极值点, 且 $x_0$ 为 $I$ 的内点. 如果 $f$ 在 $x_0$ 处可导, 则 $f'(x_0) = 0$.

> /proof/
>
> 不妨设 $x_0$ 为 $f$ 的极小值点 (不然可考虑 $-f$). 由于 $x_0$ 为 $I$ 的内点, 故存在 $\delta > 0$, 使得 $(x_0 - \delta, x_0 + \delta) \subset I$. 当 $x_0$ 为 $f$ 的极小值点时, 我们假设 $\delta$ 充分小, 使得
> $$
> f(x) \ge f(x_0),\quad \forall\ x \in (x_0 - \delta, x_0 + \delta).
> $$
> 特别地, 当 $x \in (x_0 - \delta, x_0)$ 时,
> $$
> f'(x_0) = \lim_{x \to x_0^-} \frac{f(x) - f(x_0)}{x - x_0} \le 0,
> $$
> 而当 $x \in (x_0, x_0 + \delta)$ 时,
> $$
> f'(x_0) = \lim_{x \to x_0^+} \frac{f(x) - f(x_0)}{x - x_0} \ge 0,
> $$
> 这说明 $f'(x_0) = 0$.
>
> >  (1) 如果 $x_0$ 不是 $I$ 的内点, 则即使 $f$ 在 $x_0$ 处可导 (存在左导数或右导数), 导数也不必为零. 如定义在 $[0,1]$ 上的函数 $f(x) = x$ 就是例子. 如果 $x_0$ 为 $f$ 在 $I$ 中的极值点, 但不是 $I$ 的内点, 则根据定理的证明可以得到下面的结论:
> >
> >  设 $x_0$ 是 $I$ 的左端点, 如果 $x_0$ 为 $f$ 的极小(大)值点, 则 $f'_+(x_0) \ge 0 (\le 0)$; 设 $x_0$ 是 $I$ 的右端点, 如果 $x_0$ 为 $f$ 的极小(大)值点, 则 $f'_-(x_0) \le 0 (\ge 0)$;
> >
> >  (2) 函数可能在不可导点处取极值, 例如 $f(x) = |x|$, $x \in [-1,1]$ 在 $x_0 = 0$ 处取到最小值, 但 $f$ 在 $x_0 = 0$ 处不可导, 当然就谈不上导数为零了.
> >
> >  (3) 我们把满足条件 $f'(x_0) = 0$ 的点称为 $f$ 的驻点或临界点. 需要注意的是, 驻点不必为极值点, 例如 $f(x) = x^3$, $x_0 = 0$ 为 $f$ 的驻点, 但不是极值点.

**定理2** (Darboux). (*) 设 $f$ 为 $[a,b]$ 上的可导函数, 则 $f'$ 可以取到 $f'_+(a)$ 与 $f'_-(b)$ 之间的任意值.

> 设 $k$ 是介于 $f'_+(a)$ 和 $f'_-(b)$ 之间的数. 考虑函数 $g(x) = f(x) - kx$, 则
> $$
> g'_+(a) \cdot g'_-(b) = (f'_+(a) - k)(f'_-(b) - k) \le 0,
> $$
> 如果上式为零, 则 $k$ 等于 $f$ 在 $a$ 或 $b$ 处的导数; 如果上式小于零, 不妨设 $g'_+(a) > 0$, $g'_-(b) < 0$, 则 $g$ 在 $a$ 或 $b$ 处均取不到最大值, 从而 $g$ 在 $[a,b]$ 的内部某一点 $\xi$ 处取到最大值. 由 Fermat 定理, $g'(\xi) = 0$, 即 $f'(\xi) = k$.
>
> > 这个定理说明, 如果 $f$ 是区间 $I$ 中的可导函数, 则其导函数 $f'$ 的值域仍为区间. 特别地, Dirichlet 函数没有任何原函数.

**命题3**. 设 $f: \mathbb{R} \to \mathbb{R}$ 为连续函数, 且
$$
\lim_{x \to -\infty} f(x) = \lim_{x \to +\infty} f(x) = +\infty (-\infty),
$$
则 $f$ 在 $\mathbb{R}$ 上达到最小(大)值.

> 我们不妨设 $\lim_{x \to -\infty} f(x) = \lim_{x \to +\infty} f(x) = +\infty$. 由极限的定义, 存在 $M > 0$ 使得当 $|x| \ge M$ 时 $f(x) > f(0) + 1$. 因为 $f$ 为连续函数, 故在闭区间 $[-M,M]$ 上取到最小值. 设 $f$ 在 $x_0$ 处取到此最小值, 则 $f(x_0) \le f(0)$ (因为 $0 \in [-M,M]$). 另一方面,
> $$
> f(x_0) \le f(0) < f(0) + 1 < f(x),\quad \forall\ x \in (-\infty, M) \cup (M, +\infty),
> $$
> 这说明 $x_0$ 也是 $f$ 在 $(-\infty, +\infty)$ 上的最小值点.
>
> 显然, 上述命题可以推广到其它非闭区间的情形, 以 $(a, +\infty)$ 为例, 我们有如下结论: 如果连续函数 $f$ 满足
> $$
> \lim_{x \to a^+} f(x) = \lim_{x \to +\infty} f(x) = +\infty (-\infty)
> $$
> 则 $f$ 在 $(a, +\infty)$ 上达到最小(大)值.

/example/

设 $a_i$, $i = 1,2,\cdots,n$ 为 $\mathbb{R}$ 上的 $n$ 个点. 在 $\mathbb{R}$ 上求一点, 使得它到 $a_i$ ($1 \le i \le n$) 的距离的平方和最小.

> 设 $x \in \mathbb{R}$, 考虑连续函数
> $$
> f(x) = \sum_{i=1}^{n} (x - a_i)^2,\quad x \in \mathbb{R}.
> $$
> 我们的问题就是求 $f$ 的最小值点. 容易看出, 当 $|x| \to +\infty$ 时, $f(x) \to +\infty$, 因此由上面的命题, $f$ 的最小值点的确存在. 又因为 $f$ 可微, 故最小值点必为驻点. 方程
> $$
> f'(x) = 2 \sum_{i=1}^{n} (x - a_i) = 0
> $$
> 的惟一解为
> $$
> x = \frac{1}{n} \sum_{i=1}^{n} a_i,
> $$
> 因此它就是我们要求的点.设 $x \in \mathbb{R}$, 考虑连续函数
> $$
> f(x) = \sum_{i=1}^{n} (x - a_i)^2,\quad x \in \mathbb{R}.
> $$
> 我们的问题就是求 $f$ 的最小值点. 容易看出, 当 $|x| \to +\infty$ 时, $f(x) \to +\infty$, 因此由上面的命题, $f$ 的最小值点的确存在. 又因为 $f$ 可微, 故最小值点必为驻点. 方程
> $$
> f'(x) = 2 \sum_{i=1}^{n} (x - a_i) = 0
> $$
> 的惟一解为
> $$
> x = \frac{1}{n} \sum_{i=1}^{n} a_i,
> $$
> 因此它就是我们要求的点.

### · 中值定理

**定理1** (Rolle). 设函数 $f$ 在 $[a,b]$ 上连续, 在 $(a,b)$ 中可微, 且 $f(a) = f(b)$. 则存在 $\xi \in (a,b)$, 使得 $f'(\xi) = 0$.

> 连续函数 $f$ 在闭区间 $[a,b]$ 上可以取到最大值 $M$ 和最小值 $m$. 如果 $M = m$, 则 $f$ 恒为常数, 从而 $f' = 0$; 如果 $M > m$, 则由 $f(a) = f(b)$ 知 $m$ 与 $M$ 中至少有一个是被 $f$ 在内点 $\xi \in (a,b)$ 处所取得, 由 Fermat 定理, $f'(\xi) = 0$.

**定理2** (Lagrange). 设函数 $f$ 在 $[a,b]$ 上连续, 在 $(a,b)$ 中可微, 则存在 $\xi \in (a,b)$, 使得
$$
f'(\xi) = \frac{f(b) - f(a)}{b - a},\quad \text{or}\quad f(b) - f(a) = f'(\xi)(b - a).
$$

> /proof/
>
> 令
> $$
> F(x) = f(x) - \left[f(a) + \frac{f(b) - f(a)}{b - a}(x - a)\right],
> $$
> 则 $F(a) = F(b) = 0$, $F$ 满足 Rolle 定理的条件. 从而存在 $\xi \in (a,b)$, 使得 $F'(\xi) = 0$. 此 $\xi$ 即为满足定理要求的 $\xi$.
>
> > Lagrange 定理的物理含义: 质点的平均速度等于某一点的瞬时速度. 令
> > $$
> > l(x) = f(a) + \frac{f(b) - f(a)}{b - a}(x - a),
> > $$
> > 则 $l(x)$ 是满足条件 $l(a) = f(a)$, $l(b) = f(b)$ 的唯一线性函数, 其图像是连接 $(a,f(a))$ 和 $(b,f(b))$ 的直线. Lagrange 定理的证明思想就是将这条直线看成是 $X$ 轴, 从而将问题转化为已知情形.

**定理3** (Cauchy). 设函数 $f,g$ 在 $[a,b]$ 上连续, 在 $(a,b)$ 中可微, 且 $g'(x) \ne 0$, $\forall\ x \in (a,b)$. 则存在 $\xi \in (a,b)$, 使得
$$
\frac{f(b) - f(a)}{g(b) - g(a)} = \frac{f'(\xi)}{g'(\xi)}.
$$

> 由 Rolle 定理和 $g' \ne 0$ 知 $g(b) \ne g(a)$. 令
> $$
> F(x) = f(x) - \left[f(a) + \frac{f(b) - f(a)}{g(b) - g(a)}(g(x) - g(a))\right],
> $$
> 则 $F(a) = F(b) = 0$, $F$ 满足 Rolle 定理的条件, 从而存在 $\xi \in (a,b)$, 使得 $F'(\xi) = 0$. $\xi$ 即为满足要求的点.

下面给出两个例子：

/example/ 设 $f(x)$ 在 $[a,b]$ 上连续, 在 $(a,b)$ 中二阶可导. 如果 $f(a) = f(b) = 0$, 则对任意 $c \in [a,b]$, 存在 $\xi \in (a,b)$, 使得
$$
f(c) = \frac{f''(\xi)}{2}(c - a)(c - b).
$$

> 不妨设 $c \in (a,b)$, 令
> $$
> F(x) = f(x) - \frac{f(c)}{(c - a)(c - b)}(x - a)(x - b),\quad x \in [a,b].
> $$
> 则 $F(a) = F(c) = F(b) = 0$, 由 Rolle 定理, 存在 $\xi_1 \in (a,c)$, $\xi_2 \in (c,b)$, 使得
> $$
> F'(\xi_1) = 0,\quad F'(\xi_2) = 0.
> $$
> 因为 $F'(x)$ 在 $[\xi_1,\xi_2]$ 上可微, 再一次由 Rolle 定理知, 存在 $\xi \in (\xi_1,\xi_2)$, 使得
> $$
> F''(\xi) = 0.
> $$
> 简单的计算表明
> $$
> F''(x) = f''(x) - \frac{2f(c)}{(c - a)(c - b)},
> $$
> 在上式中代入 $x = \xi$ 即得欲证结论.
>
> ***
>
> 这个例子可以推广到一般情形. 例如, 设 $f$ 是 $n$ 阶可导函数, 且 $f(x) = 0$ 有 $n$ 个不同的解 $\{x_i\}_{i=1}^{n}$, 则对任意 $c \in [a,b]$, 存在 $\xi \in (a,b)$, 使得
> $$
> f(c) = \frac{1}{n!}f^{(n)}(\xi)\prod_{i=1}^{n}(c - x_i).\tag{5.1}
> $$
> 证明的方法仍是构造适当的辅助函数并利用微分中值定理. 例如, 无妨设 $c \ne x_i$ ($1 \le i \le n$), 令
> $$
> F(x) = f(x) - \frac{f(c)}{\prod_{i=1}^{n}(c - x_i)}\prod_{i=1}^{n}(x - x_i),\quad x \in [a,b].
> $$
> 则 $F(x)$ 有 $n+1$ 个不同的零点 $c,x_i$ ($1 \le i \le n$), 对 $F$ 反复使用 Rolle 定理可知, 存在 $\xi \in (a,b)$, 使得 $F^{(n)}(\xi) = 0$. 再利用 $n$ 次多项式 $\prod_{i=1}^{n}(x - x_i)$ 的 $n$ 阶导数为 $n!$ 即可得到欲证等式.
>
> 如果 $f$ 是任给的 $n$ 阶可导函数, 设 $\{x_i\}_{i=1}^{n}$ 为 $[a,b]$ 中 $n$ 个不同的点, 令
> $$
> p_{n-1}(x) = \sum_{i=1}^{n}\left[\prod_{j \ne i}\frac{(x - x_j)}{(x_i - x_j)}\right]f(x_i),
> $$
> 则 $p_{n-1}$ 为次数不超过 $n-1$ 的多项式, 它与函数 $f$ 在 $\{x_i\}_{i=1}^{n}$ 处取相同的值, 称为 $f$ 的 Lagrange 插值多项式. 由于 $f - p_{n-1}$ 有 $n$ 个不同的零点, 由 (5.1) 可得 (注意 $p_{n-1}$ 的 $n$ 阶导数为零)
> $$
> f(x) - p_{n-1}(x) = \frac{1}{n!}f^{(n)}(\xi)\prod_{i=1}^{n}(x - x_i),\quad \xi \in (a,b).\tag{5.2}
> $$
> 这个等式称为插值多项式的余项公式, 在第六章中, 我们将利用它来估计近似积分的误差.

证明勒让德 (Legendre) 多项式 $\frac{d^n}{dx^n}(x^2 - 1)^n$ 在 $(-1,1)$ 中有 $n$ 个不同的实根, 其中 $n \ge 1$.

> 首先, 多项式 $(x^2 - 1)^n$ 有实根 $-1$ 和 $1$, 根据 Rolle 定理, $\frac{d}{dx}(x^2 - 1)^n$ 在 $(-1,1)$ 内有实根, 记为 $\xi_{11}$. 当 $n > 1$ 时, $-1$ 和 $1$ 仍为 $\frac{d}{dx}(x^2 - 1)^n$ 的实根, 再次由 Rolle 定理即知 $\frac{d^2}{dx^2}(x^2 - 1)^n$ 在 $(-1,\xi_{11})$ 和 $(\xi_{11},1)$ 中分别有实根 $\xi_{21}$ 和 $\xi_{22}$. 
>
> 如果 $n > 2$, 则 $-1$ 和 $1$ 仍为 $\frac{d^2}{dx^2}(x^2 - 1)^n$ 的实根, 即它有四个实根 $-1,\xi_{21},\xi_{22}$ 和 $1$. 继续使用 Rolle 定理, $\frac{d^3}{dx^3}(x^2 - 1)^n$ 在 $(-1,1)$ 中就有三个不同的实根. 如此重复证明就知道欲证结论对任意正整数 $n$ 都成立. 

非常重要的一点就是微分中值定理中的 $\xi$ 可以取在区间内部.

结束.
