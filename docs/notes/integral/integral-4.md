---
title: Chapter 4 微分
createTime: 2025/01/11 00:01:01
permalink: /integral/integral-4/
---

## Fragment 1 导数

### · 定义

> /Define/
>
> 设 $f(x)$ 在 $(x_0 - \delta_0, x_0 + \delta_0)$​ 内有定义，$x_0 + \Delta x \in(x_0 - \delta_0, x_0 + \delta_0)$ ,若
> $$
> \lim_{\Delta x \to 0} \frac{\Delta y}{\Delta x} = \lim_{\Delta x \to 0} \frac{f(x_0 + \Delta x) - f(x_0)}{\Delta x}=\lim_{\Delta x \to 0} \frac{f(x) - f(x_0)}{x - x_0}
> $$
>
> $$
> x_0 + \Delta x = x
> $$
>
> 存在
>
> 该极限值称为 $y = f(x)$ 在 $x = x_0$ 处的导数，记作 $f(x_0)$ 或 $y'|_{x = x_0}$ , 或
>
> $$
> \lim_{\Delta x \to 0} \frac{d}{dx} |_{x = x_0} \text{ or } \frac{d}{dx} f(x)|_{x = x_0} \text{ or } \frac{d}{dx} f(x)|_{x = x_0}
> $$
>
> 其中 $\frac{d}{dx}$ 称之为导数算子
>
> 如果有
>
> $$
> \lim_{\Delta x \to 0} \frac{f(x_0 + \Delta x) - f(x_0)}{\Delta x} = f(x_0)
> $$
>
> 称 $y = f(x)$ 在 $x = x_0$ 处可导 ， $f(x_0)$ 称为 $y = f(x)$ 在 $x = x_0$ 处变化率
>
> 否则称 $y = f(x)$ 在 $x = x_0$ 不可导

导数表示形式：
$$
f'(x_0) = y'|_{x=x_0} = \frac{dy}{dx}|_{x=x_0} = \frac{d f(x)}{dx}|_{x=x_0} = \frac{d}{dx}f(x)|_{x=x_0}
$$
切线方程：
$$
y - y_0 = f'(x_0)(x - x_0)
$$
法线方程：
$$
y - y_0 = -\frac{1}{f'(x_0)}(x - x_0)
$$
然后我们可以给出左右导数的概念：

> /Define/
>
> 右导数：
>
> $f(x)$在$(x_0, x_0 + \delta_0)\ (\delta_0 > 0)$有定义，$x_0 + \Delta x \in (x_0, x_0 + \delta_0)$
> $$
> \lim_{\Delta x \to 0^+} \frac{\Delta y}{\Delta x} = \lim_{\Delta x \to 0^+} \frac{f(x_0 + \Delta x) - f(x_0)}{\Delta x} = \lim_{x \to x_0^+} \frac{f(x) - f(x_0)}{x - x_0}\ (\text{exist}) = f'_+(x_0)
> $$
> 左导数：
>
> $f(x)$在$(x_0 - \delta_0, x_0)\ (\delta_0 > 0)$有定义，$x_0 + \Delta x \in (x_0 - \delta_0, x_0)$
> $$
> \lim_{\Delta x \to 0^-} \frac{\Delta y}{\Delta x} = \lim_{\Delta x \to 0^-} \frac{f(x_0 + \Delta x) - f(x_0)}{\Delta x} = \lim_{x \to x_0^-} \frac{f(x) - f(x_0)}{x - x_0}\ (\text{exist}) = f'_-(x_0)
> $$

定理：$f(x)$在$x = x_0$处可导$\iff$$f(x)$ 在 $x_0$ 处 $f'_+(x_0), f'_-(x_0)$ 存在且相等（证明过程略去）

定理（可导必要条件）：若$f(x)$在$x_0$处可导，则$f(x)$在$x_0$处连续；反之不成立

> /proof/
>
> $y = f(x)$ 在 $x_0$ 可导 $\Rightarrow$  $\lim_{\Delta x \to 0} \frac{\Delta y}{\Delta x} = f'(x_0)$
>
> 于是$\lim_{\Delta x \to 0} \Delta y = \lim_{\Delta x \to 0} \frac{\Delta y}{\Delta x} \cdot \Delta x = f'(x_0) \cdot 0 = 0$
>
> 即$y = f(x)$在$x_0$处连续；反之不成立

### · 初等基本函数导数

(1). $y = C$（$C$为常数），求$y^{\prime}$：

> /solution/
> $$
> \forall x\in \mathbb{R}\quad \lim_{\Delta x \to 0}\frac{f(x+\Delta x)-f(x)}{\Delta x}=\lim_{\Delta x \to 0}\frac{C - C}{\Delta x}=\lim_{\Delta x \to 0}0 = 0=f^{\prime}(x)
> $$
> $\therefore x\in \mathbb{R}$，$(C)^{\prime}=0$。

(2). $y = a^{x}(a\gt0,a\neq1$为常数)，求$y^{\prime}$：

> /solution/
> $$
> \forall x\in \mathbb{R}\quad \lim_{\Delta x \to 0}\frac{a^{x+\Delta x}-a^{x}}{\Delta x}=\lim_{\Delta x \to 0}\frac{a^{x}a^{\Delta x}-a^{x}}{\Delta x}=a^{x}\lim_{\Delta x \to 0}\frac{a^{\Delta x}-1}{\Delta x}=a^{x}\ln a=f(x)
> $$
> $\therefore x\in \mathbb{R}$，$(a^{x})^{\prime}=a^{x}\ln a$，特别地，$(e^{x})^{\prime}=e^{x}$。

(3). $y=\log_{a}x(a\gt0,a\neq1$为常数)，求$y^{\prime}$：

> /solution/
>
> $\forall x\in(0,+\infty)$，$\lim_{\Delta x \to 0}\frac{\log_{a}(x + \Delta x)-\log_{a}x}{\Delta x}$（换底公式：$\log_{a}b = \frac{\log_{c}b}{\log_{c}a}$），
> $$
> =\lim_{\Delta x \to 0}\frac{\log_{e}(1+\frac{\Delta x}{x})}{\Delta x}=\lim_{\Delta x \to 0}\frac{\ln(1+\frac{\Delta x}{x})}{\Delta x}=\lim_{\Delta x \to 0}\frac{1}{x}\frac{\ln(1+\frac{\Delta x}{x})}{\frac{\Delta x}{x}}=\frac{1}{x\ln a}=(\log_{a}x)^{\prime}
> $$
> $(\ln x)^{\prime}=\frac{1}{x}$。

(4). $y = x^{a}(a\neq0$为常数)，求$y^{\prime}$：

> /solution/
>
> 设定义域为$D$，且$x\neq0$，$\forall x\in D$，
> $$
> \lim_{\Delta x \to 0}\frac{(x+\Delta x)^{a}-x^{a}}{\Delta x}=\lim_{\Delta x \to 0}\frac{x^{a}(1+\frac{\Delta x}{x})^{a}-1}{\Delta x}=x^{a}\lim_{\Delta x \to 0}\frac{a\frac{\Delta x}{x}}{\Delta x}=x^{a}\frac{a}{x}=ax^{a - 1}=(x^{a})^{\prime}
> $$
> 当$x = 0\in D$，要使 $0^{0}$ 有意义:
> $$
> \Rightarrow a\gt 0 \quad \lim_{x\to 0}\frac{f(x)-f(0)}{x - 0}=\lim_{x\to 0}\frac{x^{a}}{x}=\lim_{x\to 0}x^{a - 1}
> $$
>
> $$
> \lim_{x \to 0} x^{a}=
> \begin{cases}
> 0 = f(0) & a>1 \\
> 1 = f(0) & a = 1 \\
> \infty & 0 < a < 1
> \end{cases}
> $$
>
> $a<1$: $\lim_{x \to 0} \frac{1}{x^{a}}=\infty$
>
> $x^{0} \equiv 1$ 

(5). $y = \sin x$，求 $y^{\prime}$ 

>/solution/
>$$
>\lim_{\Delta x \to 0} \frac{\sin(x+\Delta x)-\sin x}{\Delta x}
>=\lim_{\Delta x \to 0} \frac{2\cos(x + \frac{\Delta x}{2})\sin\frac{\Delta x}{2}}{\Delta x}
>=\cos x = (\sin x)^{\prime}
>$$
>
>同理，$(\cos x)^{\prime}=-\sin x$，$x\in \mathbb{R}$

### · 导数的四则运算

设$u(x)$，$v(x)$均可导，则

 - $(u(x)\pm v(x))^{\prime}=u^{\prime}(x)\pm v^{\prime}(x)$ 或 $(u\pm v)^{\prime}=u^{\prime}\pm v^{\prime}$

 - $(uv)^{\prime}=u^{\prime}v + uv^{\prime}$ 

 - $(Cu)^{\prime}=Cu^{\prime}$ 

 - $(\frac{u}{v})^{\prime}=\frac{u^{\prime}v - uv^{\prime}}{v^{2}}$ $(v\neq 0)$

 - $(\frac{1}{v})^{\prime}=-\frac{v^{\prime}}{v^{2}}$

$$
(\tan x)^{\prime}=(\frac{\sin x}{\cos x})^{\prime}
=\frac{\cos x\cdot\cos x-\sin x\cdot(-\sin x)}{(\cos x)^{2}}
=\frac{1}{\cos^{2}x}=\sec^{2}x
\quad (x\neq k\pi+\frac{\pi}{2}\quad k\in \mathbb{Z})
$$

同理，$(\cot x)^{\prime}=-\csc^{2}x$，$x\neq k\pi$，$k\in \mathbb{Z}$

$$
(\sec x)^{\prime}=(\frac{1}{\cos x})^{\prime}=-\frac{-\sin x}{\cos^{2}x}=\sec x\tan x\quad (x\neq k\pi+\frac{\pi}{2}\quad k\in \mathbb{Z})
$$
同理，$(\csc x)^{\prime}=-\csc x\cot x$，$x\neq k\pi$，$k\in \mathbb{Z}$

### · 反函数求导法则

分析：若$y = f(x)$的反函数$x = \varphi(y)$，要求$\varphi^{\prime}(y)$存在，$\varphi^{\prime}(y)=\frac{dx}{dy}$，$f^{\prime}(y)=\frac{dy}{dx}=\frac{1}{\frac{dx}{dy}}=\frac{1}{\varphi^{\prime}(y)}$，要求$\varphi^{\prime}(y)\neq 0$，且$\varphi$严格单调。

定理（反函数求导法则）:

若$y = f(x)$的反函数$x = \varphi(y)$严格单调，$\varphi^{\prime}(y)$存在且 $\varphi^{\prime}(y)\neq 0$，则$f^{\prime}(x)$存在且$f^{\prime}(x)=\frac{1}{\varphi^{\prime}(y)}$或$\frac{dy}{dx}=\frac{1}{\frac{dx}{dy}}$。

> /proof/
>
> 由$\varphi^{\prime}(y)$存在，由导数定义$\lim_{\Delta y \to 0} \frac{\Delta x}{\Delta y}=\varphi^{\prime}(y)$，于是$\lim_{\Delta x \to 0} \frac{\Delta y}{\Delta x}=\lim_{\Delta y \to 0} \frac{1}{\frac{\Delta x}{\Delta y}}$
>
> （由$x = \varphi(y)$严格单调，则它的反函数$y = f(x)$严格单调）
> $$
> \Delta x\to0 \quad \Delta x\neq0
> \Rightarrow x - x_0\neq0\Rightarrow x\neq x_0\\
> \Rightarrow f(x)\neq f(x_0)\\
> \Rightarrow f(x)-f(x_0)\neq0
> \Rightarrow [f(x_0+\Delta x)-f(x_0)]\neq0\\
> \Rightarrow \Delta y\neq0
> $$
> 由$x = \varphi(y)$可导且连续，$x = \varphi(y)$严格单调且连续，则其反函数$y = f(x)$严格单调且连续，有$\lim\limits_{\Delta x\to 0}\Delta y = 0$。
>
> $\lim\limits_{\Delta x\to 0}\frac{\Delta y}{\Delta x}=\lim\limits_{\Delta y\to 0}\frac{1}{\frac{\Delta x}{\Delta y}}=\frac{1}{\varphi^{\prime}(y)}=f^{\prime}(x)$，或$\frac{dy}{dx}=\frac{1}{\frac{dx}{dy}}$。

#### · 反三角函数导数

1. $y = \arcsin x,x\in[-1,1]$

   - 其反函数$x = \sin y,y\in[-\frac{\pi}{2},\frac{\pi}{2}]$。

   - 因为$(\sin y)^{\prime}=\cos y\neq 0,y\in(-\frac{\pi}{2},\frac{\pi}{2})$，且$x = \sin y$在$(-\frac{\pi}{2},\frac{\pi}{2})$上严格单调。

   - 当$x\in(-1,1)$时，$y = \arcsin x$，且$(\arcsin x)^{\prime}=\frac{1}{(\sin y)^{\prime}}=\frac{1}{\cos y}=\frac{1}{\sqrt{1 - \sin^{2}y}}=\frac{1}{\sqrt{1 - x^{2}}},x\in(-1,1)$。

2. 同理，$(\arccos x)^{\prime}=-\frac{1}{\sqrt{1 - x^{2}}},x\in(-1,1)$。

3. $y = \arctan x,x\in(-\infty,+\infty)$，求$y^{\prime}$

   - 它的反函数$x = \tan y,y\in(-\frac{\pi}{2},\frac{\pi}{2})$。

   - 由于$(\tan y)^{\prime}=\sec^{2}y\neq 0$，$x = \tan y$严格单调。

   - 所以$(\arctan x)^{\prime}=\frac{1}{(\tan y)^{\prime}}=\frac{1}{\sec^{2}y}=\frac{1}{1 + \tan^{2}y}=\frac{1}{1 + x^{2}},x\in\mathbb{R}$。

4. 同理，$(\text{arccot }x)^{\prime}=-\frac{1}{1 + x^{2}},x\in\mathbb{R}$。

> 有规律：“正的导数都$+$”，“余的导数都$-$”。

### · 链式法则

分析：设$y = f(u)$，$u = \varphi(x)$，若构成复合函数$y = f(\varphi(x))$。

思考：添加什么条件能使$y = f(\varphi(x))$对$x$的导数存在，即$\frac{dy}{dx}$存在。已知$\frac{dy}{du}$，$\frac{du}{dx}$存在。

猜想：$\frac{dy}{dx}=\frac{dy}{du}\cdot\frac{du}{dx}$。

/Theorem/ 链式法则

> 若$u = \varphi(x)$对$x$可导，$y = f(u)$对$u$可导，则复合函数$y = f(\varphi(x))$对$x$也可导，且$\frac{dy}{dx}=\frac{dy}{du}\cdot\frac{du}{dx}$，此称为链式法则。

#### · 证明

复合函数求导推导

- $(f(\varphi(x)))^{\prime}=f^{\prime}(u)\cdot\varphi^{\prime}(x)$（其中$u = \varphi(x)$），即$(f(\varphi(x)))^{\prime}=f^{\prime}(\varphi(x))\cdot\varphi^{\prime}(x)$。

- 对于$f(\varphi(x))$的求导过程：$f(u)\to f(\varphi(x))\to (f(\varphi(x)))^{\prime}$；对于$f^{\prime}(\varphi(x))$的求导过程：$f(u)\to f^{\prime}(u)\to f^{\prime}(\varphi(x))$。

/proof/

>  因为$f^{\prime}(u)$存在，即$\lim\limits_{\Delta u\to 0}\frac{\Delta y}{\Delta u}=f^{\prime}(u)$，设$\lim\limits_{\Delta x\to 0}\alpha = 0$，$\frac{\Delta y}{\Delta u}=f^{\prime}(u)+\alpha$（当$\Delta u\to 0$时），则$\Delta y = f^{\prime}(u)\cdot\Delta u+\alpha\Delta u$。
>
>  所以
>  $$
>  \lim\limits_{\Delta x\to 0}\frac{\Delta y}{\Delta x}=\lim\limits_{\Delta x\to 0}\frac{f^{\prime}(u)\cdot\Delta u+\alpha\Delta u}{\Delta x}=\lim\limits_{\Delta x\to 0}\left[f^{\prime}(u)\frac{\Delta u}{\Delta x}+\alpha\frac{\Delta u}{\Delta x}\right]
>  $$
>  补充定义，当$\Delta u = 0$，令$\alpha = 0$，则
>  $$
>  \lim\limits_{\Delta x\to 0}\frac{\Delta y}{\Delta x}=f^{\prime}(u)\cdot\varphi^{\prime}(x)+\lim\limits_{\Delta x\to 0}\alpha\cdot\lim\limits_{\Delta x\to 0}\frac{\Delta u}{\Delta x}=f^{\prime}(\varphi(x))\cdot\varphi^{\prime}(x)=(f(\varphi(x)))^{\prime}
>  $$

若 $y = f(u)$ 可导，$u=\varphi(v)$可导，$v = \psi(x)$可导，则$y=[f(\varphi(\psi(x)))]$对$x$导数存在且$\frac{dy}{dx}=\frac{dy}{du}\cdot\frac{du}{dv}\cdot\frac{dv}{dx}$。

> /proof/
>
> 因为$u = \varphi(\psi(x))$对$x$可导且$\frac{du}{dx}=\frac{du}{dv}\cdot\frac{dv}{dx}$，$y = f(u)$对$u$可导，所以$\frac{dy}{dx}=\frac{dy}{du}\cdot\frac{du}{dv}\cdot\frac{dv}{dx}$。

***

#### · 练习

/example/    求$y = e^{\cos^{2}\frac{1}{x}}$的导数

> /solution/
>
> 解法一：
>
> 令$y = e^{u}$，$u = v^{2}$，$v=\cos w$，$w=\frac{1}{x}$。
>
> $$
> \frac{dy}{dx}=\frac{dy}{du}\cdot\frac{du}{dv}\cdot\frac{dv}{dw}\cdot\frac{dw}{dx}
> =e^{u}\cdot 2v\cdot(-\sin w)\cdot\left(-\frac{1}{x^{2}}\right)\\
> =e^{\cos^{2}\frac{1}{x}}\cdot 2\cos\frac{1}{x}\cdot\left(-\sin\frac{1}{x}\right)\left(-\frac{1}{x^{2}}\right)
> =\frac{1}{x^{2}}e^{\cos^{2}\frac{1}{x}}\cdot\sin\frac{2}{x}
> $$
> 解法二：
>
> $$
> \begin{align*}
> y^{\prime}
> &=(e^{\cos^{2}\frac{1}{x}})^{\prime}=e^{\cos^{2}\frac{1}{x}}\cdot(\cos^{2}\frac{1}{x})^{\prime}
> =e^{\cos^{2}\frac{1}{x}}\cdot 2\cos\frac{1}{x}\cdot(\cos\frac{1}{x})^{\prime}\\
> &=e^{\cos^{2}\frac{1}{x}}\cdot 2\cos\frac{1}{x}\cdot(-\sin\frac{1}{x})\cdot(\frac{1}{x})^{\prime}\\
> &=e^{\cos^{2}\frac{1}{x}}\cdot 2\cos\frac{1}{x}\cdot(-\sin\frac{1}{x})\left(-\frac{1}{x^{2}}\right)
> \end{align*}
> $$

/example/   求$y = \sqrt{1+\sqrt{1 + x^{2}+x^{3}}}$的导数

> /solution/
> $$
> \begin{align*}
> y^{\prime}&=\frac{1}{2}(1+\sqrt{1 + x^{2}+x^{3}})^{-\frac{1}{2}}\cdot\frac{1}{2}(1+\sqrt{x^{2}+x^{3}})^{-\frac{1}{2}}\cdot\frac{1}{2}(x^{2}+x^{3})^{-\frac{1}{2}}\cdot(2x + 3x^{2})
> \end{align*}
> $$

/example/   求$y=\ln\left(\frac{e^{2x}}{e^{2x}-1}+\sqrt{1+\cos^{2}\frac{1}{x}+\sin^{2}\frac{1}{x}}\right)$的导数

> /solution/
> $$
> \begin{align*}
> y&=\frac{1}{2}[2x-\ln(e^{2x}-1)]+\sqrt{2}\\
> y^{\prime}&=1-\frac{1}{2}\cdot\frac{e^{2x}\cdot 2}{e^{2x}-1}+0\\
> &=\frac{e^{2x}-1 - e^{2x}}{e^{2x}-1}=\frac{1}{1 - e^{2x}}
> \end{align*}
> $$

/example/    求$y = \ln|x|$的导数

> /solution/
>
> 当 $x>0$ 时，$(\ln|x|)^{\prime}=(\ln x)^{\prime}=\frac{1}{x}$；
>
> 当 $x<0$ 时，$(\ln|x|)^{\prime}=(\ln(-x))^{\prime}=\frac{1}{-x}\cdot(-1)=\frac{1}{x}$。
>
> 所以$(\ln|x|)^{\prime}=\frac{1}{x}$。

/example/   求$y = \ln|3x + 1|$的导数

> /solution/
>
> $y^{\prime}=\frac{1}{3x + 1}\cdot 3$，
>
> $y^{\prime}=\frac{1}{|3x + 1|}\cdot(3x + 1)^{\prime}$（不可取）

/example/    求$y=\ln(x+\sqrt{x^{2}+a^{2}})$（$a>0$）的导数

> /solution/
> $$
> \begin{align*}
> y^{\prime}&=\frac{1}{x+\sqrt{x^{2}+a^{2}}}\cdot(1+\frac{2x}{2\sqrt{x^{2}+a^{2}}})\\
> &=\frac{1}{\sqrt{x^{2}+a^{2}}}
> \end{align*}
> $$
> 并且在第三章我们会学到
> $$
> \int\frac{1}{\sqrt{x^{2}+a^{2}}}dx=\ln(x+\sqrt{x^{2}+a^{2}})+C
> $$

/example/   求$y=\ln|x+\sqrt{x^{2}-a^{2}}|$（$a>0$）的导数

> /solution/
> $$
> \begin{align*}
> y^{\prime}&=\frac{1}{x+\sqrt{x^{2}-a^{2}}}\cdot(1+\frac{2x}{2\sqrt{x^{2}-a^{2}}})\\
> &=\frac{1}{\sqrt{x^{2}-a^{2}}}
> \end{align*}
> $$
> 且第三章会学到
> $$
> \int\frac{1}{\sqrt{x^{2}-a^{2}}}dx=\ln|x+\sqrt{x^{2}-a^{2}}|+C
> $$

/example/   求$y = x^{\sin x}$的导数

> /solution/
>
> **错误解法**：$y^{\prime}=\sin x\cdot x^{\sin x - 1}\cdot\cos x$（用$(x^{a})^{\prime}=ax^{a - 1}$，$a$为常数，错误）
>
> **正确解法**：
> $$
> y = e^{\sin x\ln x}\quad \quad
> y^{\prime}=e^{\sin x\ln x}(\cos x\ln x+\frac{\sin x}{x})
> $$

/example/   求$y = e^{|x^{3}|}$的导数

> /solution/
> $$
> y=\begin{cases}e^{-x^{3}}&x\leq0\\e^{x^{3}}&x>0\end{cases}
> $$
> 分界点用定义
>
> $$
> y^{\prime}=\begin{cases}e^{-x^{3}}(-3x^{2})&x<0\\0&x = 0\\e^{x^{3}}(3x^{2})&x>0\end{cases}
> $$
>
> $$
> \lim_{x \to 0}\frac{f(x)-f(0)}{x - 0}=\lim_{x \to 0}\frac{e^{-x^{2}}-1}{x}=\lim_{x \to 0}\frac{-x^{2}}{x}=0 = f^{\prime}(0)\\
> \lim_{x \to 0}\frac{f(x)-f(0)}{x - 0}=\lim_{x \to 0}\frac{e^{x^{2}}-1}{x}=\lim_{x \to 0}\frac{x^{2}}{x}=0 = f^{\prime}(0)
> $$
>
> $\therefore f^{\prime}(0)=0$

### · 高阶导数

#### · 定义

> /Define/
>
> 若$f(x)$在区间$I$上的导函数$f^{\prime}(x)$在$I$上又可导，即$[f^{\prime}(x)]^{\prime}$存在，记为$f^{\prime\prime}(x)$。
>
> $(y^{\prime})^{\prime}=y^{\prime\prime}=\frac{d^{2}y}{dx^{2}}$
>
> $y^{\prime\prime}=(y^{\prime})^{\prime}=\frac{dy^{\prime}}{dx}=\frac{d}{dx}y^{\prime}=\frac{d}{dx}(\frac{dy}{dx})\triangleq\frac{d^{2}y}{dx^{2}}$
>
> $d x^{2}=dx\cdot dx=(dx)^{2}\neq d(x^{2}) = 2xdx$
>
> 称为$f(x)$在区间$I$上的二阶导函数，或简称为二阶导数。
>
> 如果$f(x)$在区间$I$上的$n$阶导函数存在，记作：
>
> $$
> y\underbrace{^{\prime\prime\cdots\prime}}_{n}=y^{(n)}=f^{(n)}(x)=\frac{d^{n}y}{dx^{n}}=\frac{d}{dx}\cdot\frac{d^{n - 1}y}{dx^{n - 1}}=\frac{d}{dx}\cdot y^{(n - 1)}
> $$
> 当$n>1$时，$y^{(n)}$称为高阶导数，$y^{(0)}=y$。

#### · 基本初等函数高阶导数

(1).  $y = a^{x}$，求$y^{(n)}$

> /solution/
>
> $y^{\prime}=a^{x}\ln a$
>
> $y^{\prime\prime}=(a^{x}\ln a)^{\prime}=\ln a(a^{x})^{\prime}=\ln a\cdot a^{x}\ln a=a^{x}(\ln a)^{2}$
>
> $\cdots$
>
> $y^{(n)}=a^{x}(\ln a)^{n}$
>
> $(e^{x})^{(n)}=e^{x}$

(2).  $y = x^{a}$（$a\neq0$常），求$y^{(n)}$

> /solution/
>
> $y^{\prime}=ax^{a - 1}$，$y^{\prime\prime}=a(a - 1)x^{a - 2}$
>
> $\cdots$
>
> $y^{(n)}=a(a - 1)(a - 2)\cdots(a - n + 1)x^{a - n}$
>
> $(x^{n})^{(n)}=n(n - 1)(n - 2)\cdots1\cdot x^{n - n}=n!$
>
> 约定$x^{0}=1$，$n,m\in N$，$m>n$，$(x^{n})^{(m)}=0$

(3). $y = \ln x$，求$y^{(n)}$

> /solution/
>
> 解法一：
>
> $y^{\prime}=\frac{1}{x}$，$y^{\prime\prime}=-\frac{1}{x^{2}}=(-1)^{1}\frac{1}{x^{2}}$
>
> $y^{(3)}=(-1)(-2)x^{-3}$
>
> $y^{(n)}=(-1)(-2)\cdots(-(n - 1))x^{-n}=(-1)^{n - 1}(n - 1)!x^{-n}$
>
> 解法二：
>
> $$
> \begin{align*}
> (\ln x)^{(n)}&=[(\ln x)^{\prime}]^{(n - 1)}\\
> &=(x^{-1})^{(n - 1)}\\
> &=(-1)(-1 - 1)\cdots(-(1+(n - 1)))x^{-1-(n - 1)}\\
> &=(-1)^{n - 1}\cdot(n - 1)!x^{-n}
> \end{align*}
> $$
>
> 同理$(1 + x)^{a(n)}=a(a - 1)\cdots(a - n + 1)\cdot(1 + x)^{a - n}$，$[\ln(1 + x)]^{(n)}=(-1)^{n - 1}(n - 1)!(1 + x)^{-n}$ 

(4). $y = \sin x$，求$y^{(n)}$

> /solution/
> $$
> y^{\prime}=\cos x \quad \quad
> y^{\prime\prime}=-\sin x\quad \quad
> y^{\prime\prime\prime}=-\cos x\quad \quad
> y^{(4)}=\sin x
> $$
> $y^{\prime}=\cos x=\sin(x+\frac{\pi}{2})$ ， $y^{\prime\prime}=\sin(x+\frac{\pi}{2}+\frac{\pi}{2})\cdot1$
>
> 假设$n = k$时，$y^{(k)}=\sin(x + k\frac{\pi}{2})$
>
> 当$k=n + 1$时，
> $$
> y^{(k + 1)}=[\sin(x + k\frac{\pi}{2})]^{\prime}=\sin(x + k\frac{\pi}{2}+\frac{\pi}{2})
> $$
> 知$n = k + 1$成立，由数学归纳法知 $y^{(n)}=\sin(x + n\frac{\pi}{2})$
>
> 同理$(\cos x)^{(n)}=\cos(x + n\frac{\pi}{2})$
>
> $k\neq0$，常数，
> $$
> (\sin kx)^{(n)}=k^{n}\sin(kx + n\cdot\frac{\pi}{2})
> $$

#### · *Leibniz* 法则

>/Theorem/
>$$
>(uv)^{\prime}=u^{\prime}v + uv^{\prime}\\
>(f_1f_2f_3\cdots f_n)^{\prime}=\sum_{i=1}^{k}f_1f_2f_3\cdots f_i' \cdots f_n
>$$

对于乘积函数的高阶导数有如下推论：

> /Theorem/
>
> 若$u^{(n)}$，$v^{(n)}$均存在，则
>
> $(u\pm v)^{(n)}=u^{(n)}\pm v^{(n)}$
>
> $(Cu)^{(n)}=Cu^{(n)}$
>
> $$
> (uv)^{(n)}=C_{n}^{0}u^{(n)}v^{(0)}+C_{n}^{1}u^{(n - 1)}v^{(1)}+\cdots + C_{n}^{n}u^{(0)}v^{(n)}
> $$

> 补充：
>
> 二项式展开：$(u + v)^{n}=\cdots + C_{n}^{k}u^{n - k}v^{k}+\cdots$，$C_{n}^{k}+C_{n}^{k + 1}=C_{n + 1}^{k+1}$，$C_{n}^{k}=\frac{n(n - 1)\cdots(n - k + 1)}{k!}$

若$u$，$v$中有一项经过几次求导为$0$，把此项看成$1$，另一项$n$阶导数有公式，把此项看成$u$，这时用$(uv)^{(n)}$公式。

/example/    $y = x^{2}e^{x}$，求$y^{(n)}$

> /solution/
> $$
> \begin{align*}
> y^{(n)}&=(e^{x}x^{2})^{(n)}\\
> &=C_{n}^{0}e^{x}x^{2}+C_{n}^{1}e^{x}(2x)+C_{n}^{2}e^{x}\cdot2\\
> &=e^{x}(x^{2}+2nx + n(n - 1))
> \end{align*}
> $$
>
> $(n\geqslant2)$，当$n = 1$时上式也成立

#### · 例题

(1). 求$y = \cos^{2}x$的$n$阶导数$y^{(n)}$

> /solution/
> $$
> \begin{align*}
> y&=\frac{1}{2}(1 + \cos 2x)\\
> y^{(n)}&=\left[\frac{1}{2}(1 + \cos 2x)\right]^{(n)}\\
> &=\frac{1}{2}(\cos 2x)^{(n)}\\
> &=\frac{1}{2}\cdot2^{n}\cos(2x + n\cdot\frac{\pi}{2})\\
> &=2^{n - 1}\cos(2x + n\cdot\frac{\pi}{2})
> \end{align*}
> $$
> 所以$y^{(n)} = 2^{n - 1}\cos(2x + n\cdot\frac{\pi}{2})$

(2). 求$y=\frac{1}{x^{2}+3x + 2}$的$n$阶导数

> /solution/
>
> $$
> \begin{align*}
> y&=\frac{1}{(x + 1)(x + 2)}=(x + 1)^{-1}(x + 2)^{-1}\\
> &=[(x + 1)^{-1}-(x + 2)^{-1}]^{(n)}\\
> &=(-1)(-1 - 1)\cdots(-1-(n - 1))[(x + 1)^{-1 - n}-(x + 2)^{-1 - n}]\\
> &=(-1)^{n}n![(x + 1)^{-n - 1}-(x + 2)^{-n - 1}]
> \end{align*}
> $$

3. 求$y = e^{x}\cos x$的$n$阶导数

> /solution/
> $$
> \begin{align*}
> y^{\prime}&=e^{x}\cos x+e^{x}(-\sin x)\\
> &=e^{x}(\cos x-\sin x)\\
> &=e^{x}\sqrt{2}(\frac{\sqrt{2}}{2}\cos x-\frac{\sqrt{2}}{2}\sin x)\\
> &=e^{x}\sqrt{2}(\cos\frac{\pi}{4}\cos x-\sin\frac{\pi}{4}\sin x)\\
> &=\sqrt{2}e^{x}\cos(x+\frac{\pi}{4})
> \end{align*}
> $$
> 假设$n = k$时，$y^{(k)}=\sqrt{2}^{k}e^{x}\cos(x + k\cdot\frac{\pi}{4})$
>
> 当$n = k + 1$时，
>
> $$
> \begin{align*}
> y^{(k + 1)}&=(y^{(k)})^{\prime}\\
> &=\sqrt{2}^{k}[e^{x}\cos(x + k\cdot\frac{\pi}{4})+e^{x}(-\sin(x + k\cdot\frac{\pi}{4}))]\\
> &=\sqrt{2}^{k + 1}e^{x}[\cos\frac{\pi}{4}\cos(x + k\cdot\frac{\pi}{4})-\sin\frac{\pi}{4}\sin(x + k\cdot\frac{\pi}{4})]\\
> &=\sqrt{2}^{k + 1}e^{x}\cos(x+(k + 1)\cdot\frac{\pi}{4})
> \end{align*}
> $$
> 当$n = k + 1$时也成立，所以$y^{(n)}=\sqrt{2}^{n}e^{x}\cos(x + n\cdot\frac{\pi}{4})$

### · 方程确定函数的导数

>定义：设$F(x,y)=0$，$D$、$Z$均为非空实数集，$\forall x_{0}\in D$，$F(x_{0},y)=0$，如果方程有唯一属于$Z$的解$y$，即$F(x_{0},y_{0})=0$，$y_{0}\in Z$，按照函数的定义，得到了$D$上的一个函数，记作$y = y(x)$，称为方程$F(x,y)=0$确定的函数。

如何求$y = y(x)$的导数？

如果从$F(x,y)=0$中解出$y$用$x$的表达式，称$y = y(x)$为显函数。

/example/    $y^{3}-x^{3}=1$，确定$y = y(x)$，$y=\sqrt[3]{1 + x^{3}}$，$x\in\mathbb{R}$，满足$(\sqrt[3]{1 + x^{3}})^{3}-x^{3}\equiv1$。

如果$F(x,y)=0$确定$y = y(x)$，但是$y$不能用$x$的显式表达式表示，称为方程确定的隐函数。

如$y-xe^{y}=1$确定$y = y(x)$，称为隐函数，有$y(x)-xe^{y(x)}\equiv1$，$x\in D$。

#### · 隐函数求导

/example/    已知$y(x)-xe^{y(x)} = 1$，求$\frac{dy}{dx}$。

> /solution/
>
> 方程两边同时对$x$求导：
>
> $y^{\prime}(x)-e^{y(x)}-xe^{y(x)}\cdot y^{\prime}(x)=0$
>
> $(1 - xe^{y(x)})y^{\prime}(x)=e^{y(x)}$
>
> $\therefore y^{\prime}(x)=\frac{e^{y(x)}}{1 - xe^{y(x)}}$

以后用以下方法：

/example/    已知$y - xe^{y}=1$，求$\frac{dy}{dx}$。

> /solution/
>
> 方法一：由$y = y(x)$，方程两边对$x$求导：
>
> $y^{\prime}-e^{y}-xe^{y}y^{\prime}=0$  (1)
>
> $y^{\prime}=\frac{e^{y}}{1 - xe^{y}}$
>
> 求$\left.\frac{dy}{dx}\right|_{x = 0}$：当$x - 0\cdot e^{y}=1$，$\Rightarrow y = 1$ ， $\left.\frac{dy}{dx}\right|_{x = 0}=e$
>
> 在曲线过$(0,1)$处：切线方程：$y - 1 = ex$    ；法线方程：$y - 1=-\frac{1}{e}x$
>
> 求$\frac{d^{2}y}{dx^{2}}$：
>
> $$
> y^{\prime\prime}=\frac{e^{y}\cdot y^{\prime}(1 - xe^{y})-e^{y}(0 - e^{y}-xe^{y}y^{\prime})}{(1 - xe^{y})^{2}}
> $$
> 化简，把$y^{\prime}=\frac{e^{y}}{1 - xe^{y}}$代入，再化简。
>
> ***
>
> 方法二：
>
> 方程(1)两边对$x$求导：
>
> $y^{\prime\prime}-e^{y}\cdot y^{\prime}-e^{y}\cdot y^{\prime}-xe^{y}\cdot y^{\prime}\cdot y^{\prime}-xe^{y}\cdot y^{\prime\prime}=0$
>
> 代入$y^{\prime}$，化简，解出$y^{\prime\prime}$。
>
> 求$\left.\frac{d^{2}y}{dx^{2}}\right|_{x = 0}$：把$x = 0$，$y = 1$，$y^{\prime}(0)=e$代入：$y^{\prime\prime}-e^{2}-e^{2}=0$
>
> $\therefore y^{\prime\prime}=2e^{2}$

***

/example/    $y = f(x + y)$，求$\frac{dy}{dx}$，其中$f$二阶可导。

> /solution/
>
> 由$y = y(x)$ ,方程两边对$x$求导：
>
> $$
> y^{\prime}=f^{\prime}(x + y)(1 + y^{\prime})\Rightarrow
> y^{\prime}=f^{\prime}\cdot(1 + y^{\prime})\Rightarrow
> y^{\prime}=(1 + y^{\prime})f^{\prime} \Rightarrow
> (1 - f^{\prime})y^{\prime}=f^{\prime} \Rightarrow
> y^{\prime}=\frac{f^{\prime}}{1 - f^{\prime}}
> $$
>
> $$
> y^{\prime\prime}=\frac{f^{\prime\prime}\cdot(1 + y^{\prime})(1 - f^{\prime})+f^{\prime}\cdot f^{\prime\prime}\cdot(1 + y^{\prime})}{(1 - f^{\prime})^{2}}
> $$
>
> 化简，把$y^{\prime}=\frac{f^{\prime}}{1 - f^{\prime}}$再化简。

#### · 对数微分法

(1). 求$y = x^{\sin x}$的导数$y^{\prime}$

>/solution/ 
>
>$\ln y=\sin x\ln x$
>
>方程两边对$x$求导：
>$$
>\frac{1}{y}y^{\prime}=\cos x\ln x+\frac{\sin x}{x}\\
>y^{\prime}=y(\cos x\ln x+\frac{\sin x}{x})
>$$

(2). 求$y = \frac{(\ln x)^{x}}{x^{\ln x}}$的导数 $y^{\prime}$ 

>/solution/
>
>$$
>\ln y=\ln(\ln x)^{x}-\ln x^{\ln x}\iff
>\ln y=x\ln\ln x-(\ln x)^{2}
>$$
>
>$$
>\frac{1}{y}y^{\prime}=\ln\ln x+x\cdot\frac{1}{\ln x}\cdot\frac{1}{x}-2\frac{\ln x}{x}
>$$

(3). 求$y = \frac{\sqrt[3]{3x + 1}\cdot x^{2}}{\sqrt{2x + 1}\cdot\sqrt[3]{1 - 5x}}$的导数 $y^{\prime}$ 

>/solution/
>
>$$
>\ln y=\frac{1}{3}\ln|3x + 1|+2\ln|x|-\frac{1}{2}\ln|2x + 1|-\frac{1}{3}\ln|1 - 5x|
>$$
>方程两边对$x$求导：
>
>$$
>\frac{1}{y}y^{\prime}=\frac{1}{3}\cdot\frac{3}{3x + 1}+2\cdot\frac{1}{x}-\frac{1}{2}\cdot\frac{2}{2x + 1}-\frac{1}{3}\cdot\frac{-5}{1 - 5x}
>$$
>
>$$
>\therefore y^{\prime}=y[\frac{1}{3x + 1}+\frac{2}{x}-\frac{1}{2x + 1}+\frac{5}{3(1 - 5x)}]
>$$

(4). 求$y = (\frac{b}{a})^{x}(\frac{x}{a})^{a}(\frac{a}{x})^{b}$（$a,b>0$，$x>0$）的导数$y^{\prime}$

>/solution/
>
>$$
>\ln y=x\ln\frac{b}{a}+a(\ln x-\ln a)+b(\ln a-\ln x)
>$$
>
>$$
>\frac{1}{y}y^{\prime}=\ln\frac{b}{a}+a\cdot\frac{1}{x}-b\cdot\frac{1}{x}\iff
>y^{\prime}=y(\ln\frac{b}{a}+\frac{a - b}{x})
>$$
>
>

(5). 求$a^{2}x^{2}+b^{2}y^{2}=1$（$a,b>0$常）中$y^{\prime}$

>/solution/
>
>由$y = y(x)$ ，方程两边对$x$求导：
>
>$a^{2}\cdot2x + b^{2}\cdot2y\cdot y^{\prime}=0$ ， $y^{\prime}=-\frac{a^{2}}{b^{2}}\cdot\frac{x}{y}$

## Fragment 2 微分

若$y = f(x)$在$x$处可导，按定义，$\lim\limits_{\Delta x\to 0}\frac{\Delta y}{\Delta x}=f^{\prime}(x)$

$$
\Leftrightarrow\frac{\Delta y}{\Delta x}=f^{\prime}(x)+\alpha,\ \lim\limits_{\Delta x\to 0}\alpha = 0
\Leftrightarrow\Delta y=f^{\prime}(x)\Delta x+\alpha\Delta x
$$
$\lim\limits_{\Delta x\to 0}\frac{\alpha\Delta x}{\Delta x}=0$，记$o(\Delta x)=\alpha\Delta x$（$\Delta x\to 0$）

$$
\Leftrightarrow\Delta y=f^{\prime}(x)\Delta x+o(\Delta x)\ (\Delta x\to 0)\quad \quad
\Delta y=f(x+\Delta x)-f(x)
$$
当$|\Delta x|$很小时，则$|o(\Delta x)|$很小

$\therefore\Delta y\approx f^{\prime}(x)\Delta x$ 

于是我们可以试着给出微分的定义

### · 定义

>/Define/
>
>设$y = f(x)$，若$\Delta y=f(x+\Delta x)-f(x)$可表示为$\Delta y = A\Delta x+o(\Delta x)$（$\Delta x\to 0$），其中$A$是与$\Delta x$无关的量，则称$y = f(x)$在$x$处可微，称线性主部$A\Delta x$为$y = f(x)$在$x$处的微分，记作$dy$，即$dy = A\Delta x$。

定理：$f(x)$在$x$处可微的充分必要条件是$f(x)$在$x$处可导，且$A = f^{\prime}(x)$。

>/proof/
>
>充分性：前面分析已证。
>
>必要性：由$f(x)$在$x$处可微，由定义知，$f(x)=A\Delta x+o(\Delta x)$（$\Delta x\to 0$），
>
>于是$\lim\limits_{\Delta x\to 0}\frac{\Delta y}{\Delta x}=\lim\limits_{\Delta x\to 0}[A+\frac{o(\Delta x)}{\Delta x}]=A = f^{\prime}(x)$。

若$f(x)$在$x$处可导，则$A = f^{\prime}(x)$。如果$y = f(x)$在$x$处可微（$x$为自变量），$dy = f^{\prime}(x)\Delta x$或$d f(x)=f^{\prime}(x)\Delta x$。

由$y = x$在$x$处可导$\Leftrightarrow x$在$x$处可微，$dx=(x)^{\prime}\Delta x=\Delta x$，自变量的增量等于自变量的微分，

于是$dy = f^{\prime}(x)\cdot\Delta x=f^{\prime}(x)\cdot dx$，因此，$\frac{dy}{dx}=f^{\prime}(x)$，故导数又称为微商。

### · 四则运算

若$u(x)$，$v(x)$均可微，则

 - $d(u\pm v)=du\pm dv$

 - $d(Cu)=Cdu$

 - $d(uv)=vdu + udv$

 - $d(\frac{u}{v})=\frac{vdu - udv}{v^{2}}$（$v\neq 0$）

 - $d(\frac{1}{v})=-\frac{dv}{v^{2}}$

>/proof/
>
>由$u$，$v$可微，知$u$，$v$可导$\Rightarrow\frac{u}{v}$可导（$v\neq 0$）$\Rightarrow\frac{u}{v}$可微。
>$$
>d(\frac{u}{v})=(\frac{u}{v})^{\prime}dx=\frac{u^{\prime}dx\cdot v - u\cdot v^{\prime}dx}{v^{2}}=\frac{vdu - udv}{v^{2}}
>$$

### · 微分的一阶形式不变性

若$y = f(x)$可微，且$x$为自变量，$dy = f^{\prime}(x)\Delta x$，即$d f(x)=f^{\prime}(x)dx$。

若$y = f(u)$可微，$x=\varphi(t)$可微，$\Rightarrow y = f(\varphi(t))$可微，$t$为自变量。

于是$y = [f(\varphi(t))]^{\prime}dt$，$d f(\varphi(t))=f^{\prime}(\varphi(t))\varphi^{\prime}(t)dt=f^{\prime}(\varphi(t))d\varphi(t)$。

由$x = \varphi(t)$，$\therefore d f(u)=f^{\prime}(u)du$。

当$u$为中间变量时，这个形式仍成立，即，$y = f(u)$可微，不论$u$为自变量还是中间变量，都有$d f(u)=f^{\prime}(u)du$，称为微分的一阶形式不变性。

即，若$y = f(u)$可微，如果$dy = g(u)du = d f(u)=f^{\prime}(u)du$，则$f^{\prime}(u)=g(u)$，$\frac{dy}{du}=g(u)=f^{\prime}(u)$。

#### · 例题

(1). 求$y = e^{\sqrt{1 + x^{2}}}$的微分$dy$

> /solution/
> $$
> \begin{align*}
> dy&=d(e^{\sqrt{1 + x^{2}}})\\
> &=e^{\sqrt{1 + x^{2}}}d(\sqrt{1 + x^{2}})\\
> &=e^{\sqrt{1 + x^{2}}}\frac{1}{2\sqrt{1 + x^{2}}}d(1 + x^{2})\\
> &=e^{\sqrt{1 + x^{2}}}\frac{1}{2\sqrt{1 + x^{2}}}[d(1)+d(x^{2})]\\
> &=e^{\sqrt{1 + x^{2}}}\frac{1}{2\sqrt{1 + x^{2}}}d(x^{2})\\
> &=e^{\sqrt{1 + x^{2}}}\frac{1}{2\sqrt{1 + x^{2}}}\cdot 2xdx
> \end{align*}
> $$
>
> 且$y^{\prime}=e^{\sqrt{1 + x^{2}}}\frac{x}{\sqrt{1 + x^{2}}}$。

(2). 已知$dy = e^{\sqrt{1 + x^{2}}}\frac{x}{\sqrt{1 + x^{2}}}dx(=y^{\prime}dx)$求$y$

> /solution/
>
> $\Leftrightarrow$已知$y^{\prime}=e^{\sqrt{1 + x^{2}}}\frac{x}{\sqrt{1 + x^{2}}}$，求$y$。
>
> $$
> \begin{align*}
> dy&=e^{\sqrt{1 + x^{2}}}\frac{x}{\sqrt{1 + x^{2}}}dx\\
> &=e^{\sqrt{1 + x^{2}}}\frac{1}{2\sqrt{1 + x^{2}}}d(x^{2})\\
> &=e^{\sqrt{1 + x^{2}}}\frac{1}{2\sqrt{1 + x^{2}}}d(1 + x^{2})\\
> &=e^{\sqrt{1 + x^{2}}}d(\sqrt{1 + x^{2}})\\
> &=d(e^{\sqrt{1 + x^{2}}}+C)
> \end{align*}
> $$
>
> $\therefore y = e^{\sqrt{1 + x^{2}}}+C$

### · 近似值

若$y = f(x)$在$x$处可微，即

$$
\begin{align*}
\Delta y&=A\Delta x+o(\Delta x) (\Delta x\to 0)\\
&=f^{\prime}(x)\Delta x+o(\Delta x)\\
&=f^{\prime}(x)dx+o(\Delta x)\\
&=dy + o(\Delta x)
\end{align*}
$$

当$|\Delta x|$很小时，有$\Delta y\approx dy$，若$f^{\prime}(x)\neq 0$时，

$$
\begin{align*}
\lim_{\Delta x\to 0}\frac{\Delta y}{dy}&=\lim_{\Delta x\to 0}\frac{f^{\prime}(x)\Delta x+o(\Delta x)}{f^{\prime}(x)\cdot\Delta x}\\
&=\lim_{\Delta x\to 0}[1+\frac{1}{f^{\prime}(x)}\cdot\frac{o(\Delta x)}{\Delta x}]=1
\end{align*}
$$

$\therefore \Delta x\to 0$，$\Delta y\sim dy$，称$dy$是$\Delta y$的最佳近似。

即$\Delta y = f(x+\Delta x)-f(x)\approx f^{\prime}(x)\Delta x\Rightarrow f(x+\Delta x)\approx f(x_{0})+f^{\prime}(x_{0})\Delta x$。

当$|x|$很小时，$f(x)\approx f(0 + x)=f(0)+f^{\prime}(0)x$。

/example/    求$f(x)=(1 + x)^{\alpha}$的近似值（$x = 0$处）

> /solution/
>
> $f^{\prime}(x)=\alpha(1 + x)^{\alpha - 1}$，$f(0)=1$，$f^{\prime}(0)=\alpha$
>
> $(1 + x)^{\alpha}\approx 1+\alpha x$
>
> $\lim_{x\to 0}\frac{(1 + x)^{\alpha}-1}{x}=\alpha$
>
> 当$|x|$很小时，$\frac{(1 + x)^{\alpha}-1}{x}\approx\alpha$
>
> $(1 + x)^{\alpha}-1\approx\alpha x$ ， $(1 + x)^{\alpha}\approx 1+\alpha x$
> 当$x\to 0$时，$(1 + x)^{\alpha}-1\sim\alpha x$
>
> 即$|x|$很小时，$(1 + x)^{\alpha}\approx 1+\alpha x$

### · 参数方程确定导数

若$\begin{cases}x=\varphi(t)\\y=\psi(t)\end{cases}$确定$y = y(x)$，求$\frac{dy}{dx}$

分析：
$$
\frac{dy}{dx}=\frac{dy/dt}{dx/dt}=\frac{\psi^{\prime}(t)}{\varphi^{\prime}(t)}
$$
总结：若$\varphi^{\prime}(t)$，$\psi^{\prime}(t)$存在，且$\varphi^{\prime}(t)\neq 0$，则$\frac{dy}{dx}=\frac{\psi^{\prime}(t)}{\varphi^{\prime}(t)}$

或者
$$
\frac{dy}{dx}=\frac{d\psi(t)}{d\varphi(t)}=\frac{\psi^{\prime}(t)dt}{\varphi^{\prime}(t)dt}=\frac{\psi^{\prime}(t)}{\varphi^{\prime}(t)}
$$
一元函数微分学的第一部分就此结束。