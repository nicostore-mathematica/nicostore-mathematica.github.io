---
title: Chapter 2 函数极限
createTime: 2025/01/11 00:01:01
permalink: /integral/integral-2/
---

## Chapter 2 函数极限

引例：$y = f(x)$，$n\in N$。

(1)：$f(n)=\frac{1}{n}$，$n\in N$，$f(n)$：$1,\frac{1}{2},\frac{1}{3},\cdots,\frac{1}{n},\cdots$，$\lim_{n \to \infty}\frac{1}{n}=0$。

(2)：$f(x)=\frac{1}{x}$，$x > 0$，$\lim_{x \to +\infty}\frac{1}{x}=0$。

### · 定义

不妨模仿数列极限，给出函数在无穷处极限的定义：

> /Define/
>
> 给出 $\lim_{x \to +\infty}f(x)=A$ 的定义：
>
> 设 $f(x)$ 在 $[a,+\infty)$ 上有定义（$a$ 常），$A$ 是一个确定的常数，
>
> 若 $\forall\varepsilon > 0$ ，$\exists X > 0$ ，当 $x > X$ 的一切实数，都有 $|f(x)-A|<\varepsilon$ ，
>
> 称 $f(x)$ 当 $x$ 趋于正无穷大时的极限为 $A$ ，记作 $\lim_{x \to +\infty}f(x)=A$ 或 $f(x)\to A(x\to +\infty)$。
>
> ***
>
> 给出 $\lim_{x \to -\infty}f(x)=A$ 的定义：
>
> 设 $f(x)$ 在 $(-\infty,a]$ 上有定义（$a$ 常），$A$ 是一个确定的常数，
>
> 若 $\forall\varepsilon > 0$ ，$\exists X > 0$ ，当 $x < -X$ 的一切实数，都有 $|f(x)-A|<\varepsilon$ ，
>
> 称 $f(x)$ 当 $x$ 趋于负无穷大时的极限为 $A$ ，记作 $\lim_{x \to -\infty}f(x)=A$ 或 $f(x)\to A(x\to -\infty)$。
>
> ***
>
> 定义：设 $f(x)$ 在 $(-\infty,a]\cup[b,+\infty)$（$a < b$，常），$A$ 是一个确定的常数，
>
> 若 $\forall\varepsilon > 0$ ，$\exists X > 0$ ，当 $|x| > X$ 时（$x < -X$ 或 $x > X$ ），都有 $|f(x)-A|<\varepsilon$ ，
>
> 称 $f(x)$ 当 $x$ 趋于无穷大时极限为 $A$ ，记作 $\lim_{x \to \infty}f(x)=A$ 或 $f(x)\to A(x\to \infty)$

定理：$\lim_{x \to \infty}f(x)=A$ 的充要条件是 $\lim_{x \to +\infty}f(x)=A$ ，$\lim_{x \to -\infty}f(x)=A$ 。

> /proof/
>
> 必要性无需证明。
>
> 充分性：
>
> 由 $\lim_{x \to +\infty}f(x)=A$ ，$\forall\varepsilon > 0$ ，$\exists X_{1} > 0$ ，当 $x > X_{1}$ 时，都有 $|f(x)-A|<\varepsilon$ 。
>
> 又 $\lim_{x \to -\infty}f(x)=A$ ，$\exists X_{2} > 0$ ，当 $x < -X_{2}$ 时，都有 $|f(x)-A|<\varepsilon$ 。
>
> 取 $\max\{X_{1},X_{2}\}=X$ ，当 $|x| > X$ 时，都有 $|f(x)-A|<\varepsilon$ ，知 $\lim_{x \to \infty}f(x)=A$ 。

/example/    证明 $\lim_{x \to \infty}\frac{1}{x^{k}} = 0$（$k > 0$，常）。

> /proof/
>
> $\forall\varepsilon > 0$，若要 $\left|\frac{1}{x^{k}} - 0\right| < \varepsilon$ 成立，
> $$
> \begin{align*}
> \left|\frac{1}{x^{k}} - 0\right| < \varepsilon&\Leftrightarrow\frac{1}{|x|^{k}} < \varepsilon\Leftrightarrow|x|^{k} > \frac{1}{\varepsilon}\\
> &\Leftrightarrow|x| > (\frac{1}{\varepsilon})^{\frac{1}{k}}
> \end{align*}
> $$
> 取 $X = (\frac{1}{\varepsilon})^{\frac{1}{k}} > 0$，当 $|x| > X$ 时，都有 $\left|\frac{1}{x^{k}} - 0\right| < \varepsilon$，
>
> $\therefore\lim_{x \to \infty}\frac{1}{x^{k}} = 0$ 

接下来试着给出函数某点的极限定义

> /Define/
>
> 若 $\exists\delta_{0} > 0$，$f(x)$ 在 $\mathring{U}(x_{0},\delta_{0})$ 中有定义，
>
> 对于 $\forall\varepsilon > 0$，$\exists\delta > 0(\delta\leq\delta_{0})$，当 $0 < |x - x_{0}| < \delta$（$x\in\mathring{U}(x_{0},\delta)$）时，
>
> 都有 $|f(x) - A| < \varepsilon$，称 $f(x)$ 当 $x$ 趋于 $x_{0}$ 时的极限为 $A$，
>
> 记作 $\lim_{x \to x_{0}}f(x) = A$ 或 $f(x)\to A(x\to x_{0})$ 
>
> ***
>
> 设 $\exists\delta_{0} > 0$，$f(x)$ 在 $\mathring{U}_{-}(x_{0},\delta_{0})$（$x\in(x_{0}-\delta_{0},x_{0})$），$A$ 是一个确定常数，
>
> 对于 $\forall\varepsilon > 0$，$\exists\delta > 0(\delta\leq\delta_{0})$，当 $x_{0}-\delta < x < x_{0}$ 时，
>
> 都有 $|f(x) - A| < \varepsilon$，称 $f(x)$ 当 $x$ 趋于 $x_{0}$ 的左极限是 $A$，
>
> 记作 $\lim_{x \to x_{0}^{-}}f(x) = A$  或 $f(x_{0}^{-}) = f(x_{0}^{-})$
>
> ***
>
> 设 $\exists\delta_{0} > 0$，$f(x)$ 在 $\mathring{U}_{+}(x_{0},\delta_{0})$（$x\in(x_{0},x_{0}+\delta_{0})$），$A$ 是一个确定常数，
>
> 对于 $\forall\varepsilon > 0$，$\exists\delta > 0(\delta\leq\delta_{0})$，当 $x_{0} < x < x_{0}+\delta$ 时，
>
> 都有 $|f(x) - A| < \varepsilon$，称 $f(x)$ 当 $x$ 趋于 $x_{0}$ 的右极限是 $A$，
>
> 记作 $\lim_{x \to x_{0}^{+}}f(x) = A$  或 $f(x_{0}^{+}) = f(x_{0}^{+})$

定理：$\lim_{x \to x_{0}}f(x) = A$ 的充要条件是 $\lim_{x \to x_{0}^{-}}f(x) = A$ 且 $\lim_{x \to x_{0}^{+}}f(x) = A$。

$\lim_{x \to x_{0}}f(x) = A$ 的几何意义：

$\forall\varepsilon > 0$，$\exists\delta > 0$，当 $0 < |x - x_{0}| < \delta$（$x\in(x_{0}-\delta,x_{0})\cup(x_{0},x_{0}+\delta)$）时，

都有 $|f(x) - A| < \varepsilon\Leftrightarrow A - \varepsilon < f(x) < A + \varepsilon$。

***

/example/    证明 $\lim_{x \to x_{0}}C = C$（$C$ 常，$x_{0}$ 常）。

> /proof/
>
> $\forall\varepsilon > 0$，取 $\delta = 1$，当 $0 < |x - x_{0}| < \delta$ 时，都有 $|C - C| < \varepsilon$，$\therefore\lim_{x \to x_{0}}C = C$。

/example/    证明 $\lim_{x \to x_{0}}x = x_{0}$。

> /proof/
>
> $\forall\varepsilon > 0$，取 $\delta = \varepsilon$，当 $0 < |x - x_{0}| < \delta$ 时，都有 $|x - x_{0}| < \varepsilon$，$\therefore\lim_{x \to x_{0}}x = x_{0}$。

/example/    证明 $\lim_{x \to 1}(3x + 2)=5$。

> /proof/
>
> $\forall\varepsilon > 0$，若要 $|3x + 2 - 5| < \varepsilon$ 成立，
>
> $$
> \begin{align*}
> |3x + 2 - 5| < \varepsilon&\Leftrightarrow|3(x - 1)| < \varepsilon\\
> &\Leftrightarrow|x - 1| < \frac{\varepsilon}{3}
> \end{align*}
> $$
>
> 取 $\delta = \frac{\varepsilon}{3} > 0$，当 $0 < |x - 1| < \delta$ 时，都有 $|3x + 2 - 5| < \varepsilon$，$\therefore\lim_{x \to 1}(3x + 2)=5$ 

### · 函数极限的性质

以 $\lim_{x \to x_{0}}f(x)$ 为例（$x_{0}$ 常数）。

- **性质1（唯一性）**：若 $\lim_{x \to x_{0}}f(x)$ 存在，则极限必唯一。

- **性质2（局部有界）**：

  若 $\lim_{x \to x_{0}}f(x)=A$，则 $\exists\delta_{0} > 0$，当 $x\in\mathring{U}(x_{0},\delta_{0})$ 时，$|f(x)|\leq M$（$M$ 常数）。

  > 证：由 $\lim_{x \to x_{0}}f(x)=A$，取 $\varepsilon = 1 > 0$，
  >
  > $\exists\delta_{0} > 0$，当 $0 < |x - x_{0}| < \delta_{0}$ 时，
  >
  > 都有 $||f(x)| - |A|| < |f(x) - A| < 1$，
  >
  > $\Rightarrow|f(x)| < |A| + 1 = M$（常数）

- **性质3（不等式性质）**：

  若 $\lim_{x \to x_{0}}f(x)=A$，$\lim_{x \to x_{0}}g(x)=B$，且 $A < B$，则 $\exists\delta_{0} > 0$，当 $0 < |x - x_{0}| < \delta_{0}$ 时，有 $f(x) < g(x)$。

  > 推论：若 $\lim_{x \to x_{0}}f(x)=A > 0$（$A < 0$），
  >
  > 对任何常数 $0 < \eta < A$（$A < \eta < 0$），$\exists\delta > 0$，
  >
  > 当 $0 < |x - x_{0}| < \delta$ 时，都有 $f(x) > \eta > 0$（$f(x) < \eta < 0$）。

- **性质4（不等式性质）**：

  若 $\exists\delta_{0} > 0$，当 $0 < |x - x_{0}| < \delta_{0}$ 时，都有 $f(x)\leq g(x)$，

  且 $\lim_{x \to x_{0}}f(x)=A$，$\lim_{x \to x_{0}}g(x)=B$，则 $A\leq B$（条件改为 $f(x) < g(x)$，结论不变）。

- **性质5（极限的四则运算）**：

  若 $\lim_{x \to x_{0}}f(x)=A$，$\lim_{x \to x_{0}}g(x)=B$，则

  $$
  \lim_{x \to x_{0}}(f(x)\pm g(x))=A\pm B\\
  \lim_{x \to x_{0}}(f(x)\cdot g(x))=A\cdot B\\
  \lim_{x \to x_{0}}(C\cdot f(x))=C\cdot\lim_{x \to x_{0}}f(x)\\
  \lim_{x \to x_{0}}\frac{f(x)}{g(x)}=\frac{A}{B}\quad(B\neq0)
  $$

/example/    求 $\lim_{x \to x_{0}}x^{n}$，$n\in N$，$n\geq2$。

> /solution/
>
> $$
> \begin{align*}
> &\lim_{x \to x_{0}}x^{n}=\lim_{x \to x_{0}}\underbrace{x\cdot x\cdots x}_{n}\\
> &=\lim_{x \to x_{0}}x\cdot\lim_{x \to x_{0}}x\cdots\lim_{x \to x_{0}}x\\
> &=\underbrace{x_{0}\cdot x_{0}\cdots x_{0}}_{n}=x_{0}^{n}
> \end{align*}
> $$
>
> 结束

/example/    设 $P_{n}(x)=a_{0}x^{n}+a_{1}x^{n - 1}+\cdots+a_{n - 1}x + a_{n}$（$a_{0},a_{1},\cdots,a_{n}$ 均为常数），求 $\lim_{x \to x_{0}}P_{n}(x)$。

>  /solution/
>
>  $$
>  \begin{align*}
>  \lim_{x \to x_{0}}P_{n}(x)&=\lim_{x \to x_{0}}a_{0}x^{n}+\lim_{x \to x_{0}}a_{1}x^{n - 1}+\cdots+\lim_{x \to x_{0}}a_{n - 1}x+\lim_{x \to x_{0}}a_{n}\\
>  &=a_{0}x_{0}^{n}+a_{1}x_{0}^{n - 1}+\cdots+a_{n - 1}x_{0}+a_{n}\\
>  &=P_{n}(x_{0})
>  \end{align*}
>  $$
>
>  结束

/example/    设 $Q_{m}(x)=b_{0}x^{m}+b_{1}x^{m - 1}+\cdots+b_{m - 1}x + b_{m}$ 且 $Q_{m}(x_{0})\neq0$，求 $\lim_{x \to \infty}\frac{P_{n}(x)}{Q_{m}(x)}$。

> /solution/
>
> $$
> \lim_{x \to \infty}\frac{a_{0}x^{n}+a_{1}x^{n - 1}+\cdots+a_{n - 1}x + a_{n}}{b_{0}x^{m}+b_{1}x^{m - 1}+\cdots+b_{m - 1}x + b_{m}}=
> \begin{cases}
> 0, & n < m\\
> \frac{a_{0}}{b_{0}}, & n = m\\
> \infty, & n > m
> \end{cases}
> $$
>
> 结束

/example/ 求 $\lim_{x \to 1}\frac{\sqrt{x}-1}{\sqrt[3]{x}-1}$。

> /solution/
>
> $$
> \begin{align*}
> &\lim_{x \to 1}\frac{\sqrt{x}-1}{\sqrt[3]{x}-1}=\lim_{x \to 1}\frac{(\sqrt{x}-1)(\sqrt{x}+1)(\sqrt[3]{x^{2}}+\sqrt[3]{x}+1)}{(\sqrt[3]{x}-1)(\sqrt{x}+1)(\sqrt[3]{x^{2}}+\sqrt[3]{x}+1)}\\
> &=\lim_{x \to 1}\frac{(x - 1)(\sqrt[3]{x^{2}}+\sqrt[3]{x}+1)}{(x - 1)(\sqrt{x}+1)}\\
> &=\frac{3}{2}
> \end{align*}
> $$

例：$f(x)=\begin{cases}x+\sqrt{1 + x^{2}}, & x < 1\\x^{2}+2, & x\geq1\end{cases}$，研究 $f(x)$ 在 $x = 1$ 处极限是否存在。

> /solution/
>
> $$
> \begin{align*}
> &\lim_{x \to 1^{-}}f(x)=\lim_{x \to 1^{-}}(x+\sqrt{1 + x^{2}})=1+\sqrt{2}\\
> &\lim_{x \to 1^{+}}f(x)=\lim_{x \to 1^{+}}(x^{2}+2)=3
> \end{align*}
> $$
>
> 由 $1+\sqrt{2}\neq3$，知 $\lim_{x \to 1}f(x)$ 不存在

定理：若 $\lim_{x \to x_{0}}f(x)=A\geq0$，则 $\lim_{x \to x_{0}}\sqrt[n]{f(x)}=\sqrt[n]{A}$。

> PS：$a^{n}-b^{n}=(a - b)(a^{n - 1}+a^{n - 2}b+\cdots+ab^{n - 2}+b^{n - 1})$。

### · 海涅定理

$\lim_{x \to x_{0}}f(x)$ 存在的充要条件是 $\forall\{x_{n}\}\subset\mathring{U}(x_{0})$ 且 $\lim_{n \to \infty}x_{n}=x_{0}$，则 $\lim_{n \to \infty}f(x_{n})$ 的极限均存在且相等。

我们来证明海涅定理。

> /proof/
>
> - **必要性**：
>
>   由 $\lim_{x \to x_{0}}f(x)$ 存在，设 $\lim_{x \to x_{0}}f(x)=A$，
>
>   即 $\forall\varepsilon > 0$，$\exists\delta > 0$，当 $0 < |x - x_{0}| < \delta$ 时，都有 $|f(x)-A| < \varepsilon$。
>
>   $\forall\{x_{n}\}\subset\mathring{U}(x_{0})$，$\lim_{n \to \infty}x_{n}=x_{0}$，要证明 $\lim_{n \to \infty}f(x_{n})=A$。
>
>   分析：只要证 $\forall\varepsilon > 0$，$\exists N$，当 $n > N$ 时，都有 $|f(x_{n})-A| < \varepsilon$。
>
>   由 $\lim_{n \to \infty}x_{n}=x_{0}$，对上述 $\delta > 0$，$\exists N$，当 $n > N$ 时，都有 $0 < |x_{n}-x_{0}| < \delta$，都有 $|f(x_{n})-A| < \varepsilon$，
>
>   $\therefore\lim_{n \to \infty}f(x_{n})=A$。
>
> - **充分性**：（反证法）
>
>   由 $\forall\{x_{n}\}\subset\mathring{U}(x_{0})$，$\lim_{n \to \infty}x_{n}=x_{0}$，都有 $\lim_{n \to \infty}f(x_{n})$ 存在且相等，设极限值为 $A$。
>
>   我们要证明 $\lim_{x \to x_{0}}f(x)=A$。
>
>   用反证法：假设 $f(x)$ 当 $x\to x_{0}$ 时，不以 $A$ 为极限。
>
>   即 $\exists\varepsilon_{0} > 0$，对无论多么小的 $\delta > 0$，$\exists x_{\delta}$，虽然 $0 < |x_{\delta}-x_{0}| < \delta$，但是 $|f(x_{\delta})-A|\geq\varepsilon_{0}$。
>
>   取 $\frac{\delta}{2}>0$，$\exists x_{1}$，$0 < |x_{1}-x_{0}| < \frac{\delta}{2}$，但是 $|f(x_{1})-A|\geq\varepsilon_{0}$。
>
>   取 $\frac{\delta}{2^{2}}>0$，$\exists x_{2}$，$0 < |x_{2}-x_{0}| < \frac{\delta}{2^{2}}$，$|f(x_{2})-A|\geq\varepsilon_{0}$。
>
>   $\cdots$
>
>   取 $\frac{\delta}{2^{n}}>0$，$\exists x_{n}$，$0 < |x_{n}-x_{0}| < \frac{\delta}{2^{n}}$，$|f(x_{n})-A|\geq\varepsilon_{0}$。
>
>   构造出一个数列 $\{x_{n}\}\subset\mathring{U}(x_{0})$，$0 < |x_{n}-x_{0}| < \frac{\delta}{2^{n}}$，$\Rightarrow\lim_{n \to \infty}x_{n}=x_{0}$（夹逼定理可证）
>
>   （于是 $\lim_{n \to \infty}x_{n}=\lim_{n \to \infty}(x_{0}+(x_{n}-x_{0}))=x_{0}$）。
>
>   但是，$|f(x_{n})-A|\geq\varepsilon_{0}$，知 $f(x_{n})$ 当 $n$ 趋于无穷大时不是以 $A$ 为极限，
>
>   与 $\lim_{n \to \infty}f(x_{n})=A$ 矛盾，$\therefore$ 假设不成立，故 $\lim_{x \to x_{0}}f(x)=A$ 

推论：若 $\exists\{x_{n}'\},\{x_{n}''\}\subset\mathring{U}(x_{0})$ 且 $\lim_{n \to \infty}x_{n}'=x_{0}$，$\lim_{n \to \infty}x_{n}''=x_{0}$，

有 $\lim_{n \to \infty}f(x_{n}')=B$，$\lim_{n \to \infty}f(x_{n}'')=C$，且 $B\neq C$，或 $\exists\{x_{n}\}\subset\mathring{U}(x_{0})$，且 $\lim_{n \to \infty}f(x_{n})$ 不存在，

则 $\lim_{x \to x_{0}}f(x)$ 不存在。

***

/example/    证明 $\lim_{x \to +\infty}\sin x$ 不存在。

> /proof/
>
> 取 $x_{n}' = 2n\pi$，$n\in N$，$\lim_{n \to \infty}x_{n}' = +\infty$，
>
> $\lim_{n \to \infty}f(x_{n}')=\lim_{n \to \infty}\sin(2n\pi)=\lim_{n \to \infty}0 = 0$。
>
> 取 $x_{n}'' = 2n\pi+\frac{\pi}{2}$，$n\in N$，$\lim_{n \to \infty}x_{n}'' = +\infty$，
>
> $$
> \begin{align*}
> \lim_{n \to \infty}f(x_{n}'')&=\lim_{n \to \infty}\sin(2n\pi+\frac{\pi}{2})\\
> &=\lim_{n \to \infty}1 = 1
> \end{align*}
> $$
>
> 由 $0\neq1$，知 $\lim_{x \to +\infty}\sin x$ 不存在。

/example/    证明 $\lim_{x \to 0}\sin\frac{1}{x}$ 不存在。

> /proof/
>
> 取 $x_{n}'=\frac{1}{2n\pi}$，$n\in N$，$\lim_{n \to \infty}x_{n}' = 0$，
>
> $$
> \begin{align*}
> \lim_{n \to \infty}\sin\frac{1}{x_{n}'}&=\lim_{n \to \infty}\sin(2n\pi)\\
> &=\lim_{n \to \infty}0 = 0
> \end{align*}
> $$
>
> $x_{n}''=\frac{1}{2n\pi+\frac{\pi}{2}}$，$n\in N$，$\lim_{n \to \infty}x_{n}'' = 0$，
>
> $$
> \begin{align*}
> \lim_{n \to \infty}\sin\frac{1}{x_{n}''}&=\lim_{n \to \infty}\sin(2n\pi+\frac{\pi}{2})\\
> &=\lim_{n \to \infty}1 = 1
> \end{align*}
> $$
>
> 由于 $0\neq1$，知 $\lim_{x \to 0}\sin\frac{1}{x}$ 不存在

### · 无穷小量

定义：若 $\lim_{x \to x_{0}}f(x)=0$，称 $f(x)$ 当 $x$ 趋于 $x_{0}$ 时是无穷小量。

/example/    $\lim_{x \to \infty}\frac{1}{x}=0$，称 $\frac{1}{x}$ 当 $x\to\infty$ 时是无穷小量。

/example/    $\frac{1}{n}$ 是无穷小量，即 $\lim_{n \to \infty}\frac{1}{n}=0$。

定理：若 $\lim_{x \to x_{0}}f(x)=A$（常数）$\Leftrightarrow f(x)=A+\alpha(x)$，其中 $\lim_{x \to x_{0}}\alpha(x)=0$。

> /proof/
>
> - $\Leftarrow$：$\lim_{x \to x_{0}}f(x)=\lim_{x \to x_{0}}[A+\alpha(x)]=A$。
>
> - $\Rightarrow$：由 $\lim_{x \to x_{0}}f(x)=A$，$\Rightarrow\lim_{x \to x_{0}}[f(x)-A]=0$。
>
>   设 $f(x)-A=\alpha(x)$，$f(x)=A+\alpha(x)$，$\lim_{x \to x_{0}}\alpha(x)=0$。

无穷小量的性质

- **性质1**：有限个无穷小量之和仍是无穷小量
- **性质2**：有限个无穷小量之积仍是无穷小量
- **有界量的定义**：若 $\exists\delta_{0} > 0$，$\exists M > 0$，当 $x\in\mathring{U}(x_{0},\delta_{0})$ 时，都有 $|f(x)|\leq M$（常），即 $f(x)$ 在 $\mathring{U}(x_{0},\delta_{0})$ 内有界，称 $f(x)$ 当 $x\to x_{0}$ 时是有界量。$f(x)$ 是有界函数 $\Rightarrow f(x)$ 是有界量，反之不成立。
- **性质3**：有界量与无穷小量之积仍是无穷小量

证明性质3

> /proof/
>
> 设 $f(x)$ 当 $x\to x_{0}$ 时是有界量，$g(x)$ 当 $x\to x_{0}$ 是无穷小量。
>
> 由定义，$\exists\delta_{0}$，当 $0 < |x - x_{0}| < \delta_{0}$ 时，$|f(x)|\leq M$，$\lim_{x \to x_{0}}g(x)=0$。
>
> $\forall\varepsilon > 0$，$\exists\delta_{1} > 0$，当 $0 < |x - x_{0}| < \delta_{1}$ 时，都有 $|g(x)-0| = |g(x)| < \varepsilon$。
>
> 取 $\min\{\delta_{0},\delta_{1}\}=\delta_{2}$，当 $0 < |x - x_{0}| < \delta_{2}$ 时，都有 $|f(x)|\leq M$，$|g(x)| < \varepsilon$。
>
> 当 $0 < |x - x_{0}| < \delta_{2}$ 时，$|f(x)g(x)-0| = |f(x)||g(x)| < M\varepsilon$。

推论：有界函数与无穷小量之积仍是无穷小量。

/example/    $\lim_{x \to 0}\frac{\sin x}{x}=\lim_{x \to 0}\frac{1}{x}\sin x = 0$。

/example/    $\lim_{x \to 0}\frac{\sin\frac{1}{x}}{\frac{1}{x}}=\lim_{x \to 0}x\sin\frac{1}{x}=0$。

#### · 无穷小量阶的比较

若 $\lim_{x \to x_{0}}f(x)=0$，$\lim_{x \to x_{0}}g(x)=0$。

1. 若 $\lim_{x \to x_{0}}\frac{f(x)}{g(x)} = 0$，称 $f(x)$ 当 $x\to x_{0}$ 时是 $g(x)$ 的高阶无穷小量，记作 $f(x)=o(g(x))$（$x\to x_{0}$）。

$$
  \begin{align*}
  &\Leftrightarrow\lim_{x \to x_{0}}\frac{f(x)}{g(x)} = 0\\
  &\Leftrightarrow\lim_{x \to x_{0}}\frac{o(g(x))}{g(x)} = 0
  \end{align*}
$$

  /example/    证明 $o(x^{3})-o(x^{5})=o(x^{3})$（$x\to 0$）。

  > /proof/
  >
  > $$
  > \begin{align*}
  > &\lim_{x \to 0}\frac{o(x^{3})-o(x^{5})}{x^{3}}\\
  > =&\lim_{x \to 0}\left[\frac{o(x^{3})}{x^{3}}-\frac{o(x^{5})}{x^{3}}\right]\\
  > =&0 - 0 = 0
  > \end{align*}
  > $$
  >
  > $\therefore o(x^{3})-o(x^{5})=o(x^{3})$（$x\to 0$）。

  同理，$o(x^{3})-o(x^{5})+o(x^{7})-2o(x^{8})=o(x^{3})$（$x\to 0$）。

  > /proof/
  >
  > $$
  > \begin{align*}
  > &\lim_{x \to 0}\frac{o(x^{3})-o(x^{5})+o(x^{7})-2o(x^{8})}{x^{3}}\\
  > =&\lim_{x \to 0}\left[\frac{o(x^{3})}{x^{3}}-\frac{o(x^{5})}{x^{5}}\cdot x^{2}+\frac{o(x^{7})}{x^{7}}\cdot x^{4}-2\frac{o(x^{8})}{x^{8}}\cdot x^{5}\right]\\
  > =&0
  > \end{align*}
  > $$
  >
  > 同理，$o(x^{m})\cdot o(x^{n})=o(x^{m + n})$（$x\to 0$）。

1. 若 $\lim_{x \to x_{0}}\frac{f(x)}{g(x)} = C$（常 $\neq0$），称 $f(x)$ 当 $x\to x_{0}$ 时是 $g(x)$ 的同阶无穷小量。

2. 若 $\lim_{x \to x_{0}}\frac{f(x)}{g(x)} = 1$，称 $f(x)$ 当 $x\to x_{0}$ 时是 $g(x)$ 的等价无穷小量，记作：$f(x)\sim g(x)$（$x\to x_{0}$）。

  此时，也可记作：$f(x)\sim Cg(x)$（$x\to x_{0}$）（$C$ 为非零常数）。

4. 若 $\lim_{x \to x_{0}}\frac{f(x)}{(x - x_{0})^{k}} = C$（$k > 0$，$C\neq0$），称 $f(x)$ 当 $x\to x_{0}$ 时是 $(x - x_{0})$ 的 $k$ 阶无穷小，

   $\Leftrightarrow f(x)\sim C(x - x_{0})^{k}$（$x\to x_{0}$）。

#### · 无穷大量及性质

定义：设 $f(x)$ 在 $\mathring{U}(x_{0},\delta_{0})$ 内，满足 $f(x)\neq0$。若 $\lim_{x \to x_{0}}\frac{1}{f(x)} = 0$，

称 $f(x)$ 当 $x\to x_{0}$ 时是无穷大量，记作：$\lim_{x \to x_{0}}f(x)=\infty$。

$\Leftrightarrow$ 由 $\lim_{x \to x_{0}}\frac{1}{f(x)} = 0$，$\forall\varepsilon > 0$，$\exists\delta > 0$（$\delta\leq\delta_{0}$），当 $0 < |x - x_{0}| < \delta$ 时，都有 $\left|\frac{1}{f(x)}-0\right| < \varepsilon$，

$\Leftrightarrow\frac{1}{|f(x)|} < \varepsilon\Leftrightarrow|f(x)| > \frac{1}{\varepsilon}\triangleq M$。

> 定义：设 $f(x)$ 在 $\mathring{U}(x_{0},\delta_{0})$ 内有定义，$\forall M > 0$，$\exists\delta > 0$（$\delta\leq\delta_{0}$），
>
> 当 $0 < |x - x_{0}| < \delta$ 时，都有 $|f(x)| > M$，称 $f(x)$ 当 $x\to x_{0}$ 时是无穷大量，
>
> 记作：$\lim_{x \to x_{0}}f(x)=\infty$。

***

/example/    $\lim_{x \to 0^{+}}\frac{1}{x^{k}}=\infty$（$k > 0$ 常）。

> /proof/
>
> $\forall M > 0$，若要 $\frac{1}{x^{k}} > M$ 成立，（由 $x > 0^{+}$，即 $x > 0\Rightarrow x^{k} < \frac{1}{M}$）$\Leftrightarrow0 < x < (\frac{1}{M})^{\frac{1}{k}}$，
>
> 取 $\delta = (\frac{1}{M})^{\frac{1}{k}}$，当 $0 < x < \delta$ 时，都有 $\frac{1}{x^{k}} > M$，$\therefore\lim_{x \to 0^{+}}\frac{1}{x^{k}}=\infty$。

**定理**：若 $\lim_{x \to x_{0}}f(x)=\infty$，则 $\lim_{x \to x_{0}}\frac{1}{f(x)} = 0$；若 $\lim_{x \to x_{0}}f(x)=0$，$\exists\delta_{0} > 0$，$x\in\mathring{U}(x_{0},\delta_{0})$ 时，$f(x)\neq0$，则 $\lim_{x \to x_{0}}\frac{1}{f(x)}=\infty$。

/example/    $\lim_{x \to 0}0 = 0$，但 $\frac{1}{0}$ 没有意义。

/example/    证明 $\lim_{x \to \infty}\frac{P_{n}(x)}{Q_{m}(x)}=\infty$（$n > m$，$a_{0}\neq0$，$b_{0}\neq0$）。

> /proof/
>
> $\lim_{x \to \infty}\frac{Q_{m}(x)}{P_{n}(x)} = 0$（$m < n$），$\therefore\lim_{x \to \infty}\frac{P_{n}(x)}{Q_{m}(x)}=\infty$。

/example/    $\lim_{x \to 0}\frac{1}{x}=\infty$。

> 定义：设 $f(x)$ 在 $\mathring{U}(x_{0},\delta_{0})$ 内有定义，$\forall M > 0$，$\exists\delta > 0$（$\delta\leq\delta_{0}$），当 $0 < |x - x_{0}| < \delta$ 时，都有 $f(x) > M$，记作 $\lim_{x \to x_{0}}f(x)=+\infty$（$f(x) < - M$ 记作 $\lim_{x \to x_{0}}f(x)=-\infty$）。

/example/    求 $\lim_{x \to 0}\frac{1}{1 - \cos x}$。

> /solution/
>
> 由 $\lim_{x \to 0}(1 - \cos x)=0$，知 $\lim_{x \to 0}\frac{1}{1 - \cos x}=\infty$，
>
> 或：解 原式 $=\infty$。但是不能写成 $\lim_{x \to 0}\frac{1}{1 - \cos x}=\frac{1}{0}=\infty$（$\times$）。

***

无穷大的性质

两个无穷大之和不一定是无穷大。

例：$\lim_{n \to \infty}n = +\infty$，$\lim_{n \to \infty}(-n)=-\infty$，但是 $\lim_{n \to \infty}[n + (-n)] = 0$。

- **性质1**：有限个无穷大之积仍是无穷大。

  > /proof/
  >
  > 设 $\lim_{x \to x_{0}}f_{1}(x)=\infty$，$\lim_{x \to x_{0}}f_{2}(x)=\infty$，$\cdots$，$\lim_{x \to x_{0}}f_{k}(x)=\infty$。
  > $$
  > \begin{align*}
  > &\lim_{x \to x_{0}}\frac{1}{f_{1}(x)\cdot f_{2}(x)\cdots f_{k}(x)}\\
  > =&\lim_{x \to x_{0}}\frac{1}{f_{1}(x)}\cdot\frac{1}{f_{2}(x)}\cdots\frac{1}{f_{k}(x)} = 0
  > \end{align*}
  > $$
  > $\therefore\lim_{x \to x_{0}}f_{1}(x)\cdot f_{2}(x)\cdots f_{k}(x)=\infty$。

- **性质2**：有界量与无穷大量之和仍是无穷大。

- **性质3**：有界函数与无穷大量之积仍是无穷大。

- **性质4**：若 $\lim_{x \to x_{0}}f(x)=\infty$，$\lim_{x \to x_{0}}g(x)=C$（常 $\neq0$），则 $\lim_{x \to x_{0}}f(x)\cdot g(x)=\infty$。

- **性质5**：

  若 $\lim_{x \to x_{0}}f(x)=C$（常 $\neq0$），$\lim_{x \to x_{0}}g(x)=0$，则 $\lim_{x \to x_{0}}\frac{f(x)}{g(x)}=\infty$。

  若 $\lim_{x \to x_{0}}\frac{f(x)}{g(x)} = 1$，称 $f(x)$ 当 $x\to x_{0}$ 时是 $g(x)$ 的等价量，记作：$f(x)\sim g(x)$（$x\to x_{0}$）。

  > /example/    $\lim_{x \to x_{0}}f(x)=A$（常 $\neq0$），则有 $f(x)\sim A$（$x\to x_{0}$）。
  >
  > /proof/    $\lim_{x \to x_{0}}\frac{f(x)}{A}=\frac{A}{A}=1$。

***

$x\to x_{0}^{-}$，$\exists\delta > 0$，当 $x_{0}-\delta < x < x_{0}$；

$x\to x_{0}^{+}$，$\exists\delta > 0$，当 $x_{0} < x < x_{0}+\delta$；

$x\to +\infty$，$\exists X > 0$，当 $x > X$；

$x\to -\infty$，$\exists X > 0$，当 $x < -X$；

$x\to \infty$，$\exists X > 0$，当 $|x| > X$；

$n\to \infty$，$\exists N$，当 $n > N$。

对应的极限值为常数，$\infty$，$+\infty$，$-\infty$，共 $7\times4 = 28$ 种极限，要能叙述出它们的定义。

***

我们说 $f(x)$ 当 $x\to x_{0}$ 时极限存在，指的是 $\lim_{x \to x_{0}}f(x)=A$（常），

其中 $\lim_{x \to x_{0}}f(x)=\infty$ 属于极限不存在，但是有个趋势，给它一个记号。与 $\lim_{x \to \infty}\sin x$ 不存在有区别。

$\lim_{x \to x_{0}}f(x)=A$（常）比喻为“好人”；$\lim_{x \to x_{0}}f(x)$ 不存在，比喻为“坏人”；$\lim_{x \to x_{0}}f(x)=\infty$ 比喻为“认识的坏人”；

$\lim_{x \to x_{0}}f(x)$ 不存在，也没有趋势，如 $\lim_{x \to \infty}\sin x$，比喻为“大坏人”。

#### · 等价量替换定理

> 若 $x\to x_{0}$ 时，$f(x)\sim f_{1}(x)$，$g(x)\sim g_{1}(x)$，$h(x)\sim h_{1}(x)$，
>
> 且 $\lim_{x \to x_{0}}\frac{f_{1}(x)\cdot g_{1}(x)}{h_{1}(x)} = A$（$A$ 可为有限数，也可为 $\infty$），则 $\lim_{x \to x_{0}}\frac{f(x)\cdot g(x)}{h(x)} = A$（$A$ 可为有限数，也可为 $\infty$）。

/proof/

> $$
> \begin{align*}
> &\lim_{x \to x_{0}}\frac{f(x)\cdot g(x)}{h(x)}\\
> =&\lim_{x \to x_{0}}\frac{f_{1}(x)\cdot g_{1}(x)}{h_{1}(x)}\cdot\frac{f(x)}{f_{1}(x)}\cdot\frac{g(x)}{g_{1}(x)}\cdot\frac{h_{1}(x)}{h(x)}\\
> =&A
> \end{align*}
> $$
>
> 

性质：若 $\lim_{x \to x_{0}}f(x)$ 不存在，$\lim_{x \to x_{0}}g(x)=C$（常 $\neq0$），则 $\lim_{x \to x_{0}}f(x)g(x)$ 不存在。

> /proof
>
> 假设 $\lim_{x \to x_{0}}f(x)g(x)=b$（常）,
> $$
> \begin{align}
> &\Rightarrow\lim{x \to x{0}}f(x)\\
> =&\lim{x \to x{0}}f(x)g(x)\cdot\frac{1}{g(x)}=\frac{b}{C}\text{ exist}\\
> &\therefore\lim_{x \to x_{0}}\frac{f(x)g(x)}{h(x)}=\lim_{x \to x_{0}}\frac{f_{1}(x)\cdot g(x)}{h(x)}
> \end{align}
> $$
> 证毕。


$P(x)\cdot g(x)\cdot w(x)$，$P(x)$，$g(x)$，$w(x)$ 称为因式，$h(x)$ 一个函数也称为因式。

在求分式极限的过程中，可以把分子分母中的因式用它的等价量替代，则极限不变，只需把分子分母中复杂因式替换。

/example/    $f(x)\sim f_{1}(x)$（简单）（$x\to x_{0}$），则 $\lim_{x \to x_{0}}\frac{f(x)g(x)}{h(x)}=\lim_{x \to x_{0}}\frac{f_{1}(x)g(x)}{h(x)}$。

PS：分子分母中加、减的项不能替换。

### · 判断函数极限准则

以 $x\to x_{0}$ 为例。

> 夹逼定理：若 $\exists\delta_{0}>0$，当 $0 < |x - x_{0}| < \delta_{0}$ 时，都有 $f(x)\leq h(x)\leq g(x)$，且 $\lim_{x \to x_{0}}f(x)=A$，$\lim_{x \to x_{0}}g(x)=A$，则 $\lim_{x \to x_{0}}h(x)=A$。

/example/    求 $\lim_{x \to 0}x\cdot[\frac{1}{x}]$。

错解：原式 $=\lim_{x \to 0}x\cdot\lim_{x \to 0}[\frac{1}{x}]=0\cdot\lim_{x \to 0}[\frac{1}{x}]=0$。

错解：原式 $=\lim_{x \to 0}[x\cdot\frac{1}{x}]=\lim_{x \to 0}[1]=1$。

> /solution/
>
> $\frac{1}{x}-1<[\frac{1}{x}]\leq\frac{1}{x}$，由 $x\to0^{+}$，设 $x > 0$，$1 - x<x\cdot[\frac{1}{x}]\leq1$。
>
> $\lim_{x \to 0^{+}}(1 - x)=1$，$\lim_{x \to 0^{+}}1 = 1$，由夹逼定理，$\lim_{x \to 0^{+}}x\cdot[\frac{1}{x}]=1$。

函数极限的单调有界定理：难度较大，一般不研究

### · 两个重要极限

$$
\lim_{x \to 0}\frac{\sin x}{x}=1\quad \quad
\lim_{x \to \infty}(1+\frac{1}{x})^{x}=e
$$

先证 $\lim_{x \to 0^{+}}\frac{\sin x}{x}=1$。

> /proof/
>
> 由 $x\to0^{+}$，设 $0 < x<\frac{\pi}{2}$，有 $0<\frac{\sin x}{x}<\frac{1}{x}$。
>
> 根据单位圆，$\frac{1}{2}\sin x<\frac{1}{2}x<\frac{1}{2}\tan x$，$\sin x<x<\tan x=\frac{\sin x}{\cos x}$，
> $$
> \begin{align*}
> &\Rightarrow1<\frac{x}{\sin x}<\frac{1}{\cos x}\\
> &\Rightarrow\cos x<\frac{\sin x}{x}<1
> 
> \end{align*}
> $$
>
> $$
> \begin{align*}
> 1-\cos x&=2\sin^{2}\frac{x}{2}<2(\frac{x}{2})^{2}=\frac{x^{2}}{2}\\
> 1-\frac{x^{2}}{2}&<\cos x<\frac{\sin x}{x}<1
> \end{align*}
> $$
>
> $\lim_{x \to 0^{+}}(1 - \frac{x^{2}}{2})=1$，$\lim_{x \to 0^{+}}1 = 1$，$\lim_{x \to 0^{+}}\frac{\sin x}{x}=1$。
> $$
> \begin{align*}
> &\lim_{x \to 0^{-}}\frac{\sin x}{x}\xlongequal{x=-t}\lim_{t \to 0^{+}}\frac{\sin(-t)}{-t}\\
> &=\lim_{t \to 0^{+}}\frac{\sin t}{t}=1
> \end{align*}
> $$
> $\therefore\lim_{x \to 0}\frac{\sin x}{x}=1$。
> $$
> \begin{align*}
> &\lim_{x \to 0^{-}}\cos x\xlongequal{x=-t}\lim_{t \to 0^{+}}\cos(-t)\\
> &=\lim_{t \to 0^{+}}\cos t=1
> \end{align*}
> $$
> $\therefore\lim_{x \to 0}\cos x=1$。
>
> $\lim_{x \to 0}0 = 0$，$\lim_{x \to 0^{+}}\frac{1}{x}=+\infty$，夹不住。
>
> （此处有单位圆相关示意图像，用于辅助说明重要极限推导，但文档形式较难精确呈现图像代码）
>
> 若 $\lim_{x \to x_{0}}f(x)=0$，则 $\lim_{x \to x_{0}}\frac{\sin f(x)}{f(x)}\xlongequal{t = f(x)}\lim_{t \to 0}\frac{\sin t}{t}=1$。

/example/    求 $\lim_{x \to 0}\frac{1 - \cos x}{x^{2}}$。

> /solution/
> $$
> \lim_{x \to 0}\frac{1 - \cos x}{x^{2}}
> =\lim_{x \to 0}\frac{2\sin^{2}\frac{x}{2}}{x^{2}}
> =\lim_{x \to 0}\frac{2\sin^{2}\frac{x}{2}}{\frac{x^{2}}{4}\cdot4}
> =\frac{1}{2}\lim_{x \to 0}(\frac{\sin\frac{x}{2}}{\frac{x}{2}})^{2}
> =\frac{1}{2}
> $$



/example/     求 $\lim_{x \to 0}\frac{\tan x}{x}$。

> /solution/
> $$
> \lim_{x \to 0}\frac{\tan x}{x}
> =\lim_{x \to 0}\frac{\sin x}{x}\cdot\frac{1}{\cos x}
> =1
> $$
> $\therefore$ 当 $x\to0$ 时，$\sin x\sim x$，$\tan x\sim x$，$1 - \cos x\sim\frac{1}{2}x^{2}$，$\lim_{x \to 0}\frac{\sin x}{x}=1$。

当 $0 < x<\frac{\pi}{2}$ 时，$|\sin x|<|x|$；当 $x\geq\frac{\pi}{2}$ 时，$|\sin x|\leq1<\frac{\pi}{2}\leq|x|$；

当 $x < 0$ 时，$|\sin x|=|\sin(-x)|<|-x|=|x|$；当 $x = 0$ 时，$|\sin x|=|x| = 0$。

总之，$x\in R$ 时，$|\sin x|\leq|x|$，等号当且仅当 $x = 0$ 时成立。

***

当 $x\to0$ 时，$\sin x\sim x$，$\lim_{x \to 0}\frac{\tan x}{x}=\lim_{x \to 0}\frac{\sin x}{x}\cdot\frac{1}{\cos x}=1$，$x\to0$，$\tan x\sim x$。
$$
\begin{align*}
&\lim_{x \to 0}\frac{1 - \cos x}{x^{2}}=\lim_{x \to 0}\frac{2\sin^{2}\frac{x}{2}}{x^{2}\cdot\frac{1}{2}}\\
=&\frac{1}{2}\lim_{x \to 0}(\frac{\sin\frac{x}{2}}{\frac{x}{2}})^{2}=\frac{1}{2}
\end{align*}
$$
当 $x\to0$ 时，$1 - \cos x\sim\frac{1}{2}x^{2}$。
当 $x\to x_{0}$ 时，如果 $f(x)\to0$，则 

$\lim_{x \to x_{0}}\frac{\sin f(x)}{f(x)}\xlongequal{t = f(x)}\lim_{t \to 0}\frac{\sin t}{t}=1$，$\sin f(x)\sim f(x)$，$\tan f(x)\sim f(x)$，$1 - \cos f(x)\sim\frac{1}{2}f^{2}(x)$。

***

再来看第二个重要极限 $\lim_{x \to \infty}(1+\frac{1}{x})^{x}=e$

> /proof/
>
> 先证 $\lim_{x \to +\infty}(1+\frac{1}{x})^{x}=e$。
>
> 由 $x\to+\infty$，不妨设 $x>1$，$[x]\in N$，且 $[x]\leq x<[x]+1$，
>
> $$
> \begin{align*}
> &\Rightarrow\frac{1}{[x]+1}+1<1+\frac{1}{x}<\frac{1}{[x]}+1
> \end{align*}
> $$
>
> 由 $y = x^{\alpha}$，当 $x>0$，$\alpha>0$（$\alpha$ 常）是严格递增函数（$y^\prime=\alpha x^{\alpha - 1}>0$），
>
> $$
> (\frac{1}{[x]+1}+1)^{[x]}\leq(\frac{1}{[x]+1}+1)^{x}<(1+\frac{1}{x})^{x}<(1+\frac{1}{[x]})^{x}\leq(1+\frac{1}{[x]})^{[x]+1}
> $$
>
> $y = a^{x}(a > 1)$ 是严格递增。
>
> $x\to+\infty\Leftrightarrow [x]\to+\infty$。
>
> $$
> \begin{align*}
> &\lim_{x \to +\infty}(1 + \frac{1}{[x]+1})^{[x]}\xlongequal{[x]=n}\lim_{n \to \infty}(1 + \frac{1}{n+1})^{n}\\
> =&\lim_{n \to \infty}(1 + \frac{1}{n+1})^{n+1}\cdot\frac{1}{1 + \frac{1}{n+1}}=\frac{e}{1}=e
> \end{align*}
> $$
>
> $$
> \begin{align*}
> &\lim_{x \to +\infty}(1 + \frac{1}{[x]})^{[x]+1}\xlongequal{[x]=n}\lim_{n \to \infty}(1 + \frac{1}{n})^{n+1}\\
> =&\lim_{n \to \infty}(1 + \frac{1}{n})^{n}\cdot(1 + \frac{1}{n})=e
> \end{align*}
> $$
>
> 由夹逼定理，知 $\lim_{x \to +\infty}(1 + \frac{1}{x})^{x}=e$。
>
> $$
> \begin{align*}
> &\lim_{x \to -\infty}(1 + \frac{1}{x})^{x}\xlongequal{x=-t}\lim_{t \to +\infty}(1 - \frac{1}{t})^{-t}\\
> =&\lim_{t \to +\infty}(\frac{t}{t - 1})^{t}=\lim_{t \to +\infty}(\frac{t - 1+1}{t - 1})^{t}\\
> =&\lim_{t \to +\infty}(1 + \frac{1}{t - 1})^{t}=\lim_{t \to +\infty}(1 + \frac{1}{t - 1})^{t - 1}\cdot(1 + \frac{1}{t - 1})=e
> \end{align*}
> $$
>
> $\therefore\lim_{x \to \infty}(1 + \frac{1}{x})^{x}=e$。
>
> 令 $\frac{1}{x}=t\Rightarrow\lim_{t \to 0}(1 + t)^{\frac{1}{t}}=e$，即 $\lim_{x \to 0}(1 + x)^{\frac{1}{x}}=e$（幂指函数）。

当 $x\to x_{0}$ 时，如果 $f(x)\to0$，有 $\lim_{x \to x_{0}}(1 + f(x))^{\frac{1}{f(x)}}=e$。

若 $\lim_{x \to x_{0}}f(x)=A$（常），$n\in N$，则 $\lim_{x \to x_{0}}(f(x))^{n}=A^{n}$。

若 $\lim_{x \to x_{0}}f(x)=A$（常）$\neq0$，$m\in Z$，则 $\lim_{x \to x_{0}}[f(x)]^{m}=A^{m}$。

***

/example/ 求 $\lim_{x \to 0}(1 - 3x)^{\frac{1}{x}}$（$1^{\infty}$ 型）。

> /proof/
> $$
> \lim_{x \to 0}(1 - 3x)^{\frac{1}{x}}
> =\lim_{x \to 0}\{[1 + (-3x)]^{\frac{1}{-3x}}\}^{-3}
> =e^{-3}
> $$

/example/    求 $\lim_{x \to 0}\cos x^{\frac{1}{1 - \cos x}}$（$1^{\infty}$ 型）。

> /solution/
> $$
> \lim_{x \to 0}\cos x^{\frac{1}{1 - \cos x}}
> =\lim_{x \to 0}\{[1 + (\cos x - 1)]^{\frac{1}{\cos x - 1}}\}^{-1}
> =e^{-1}
> $$

