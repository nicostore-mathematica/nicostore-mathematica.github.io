---
title: Chapter 1 数列极限
createTime: 2025/01/11 00:01:01
permalink: /integral/integral-1/
---

## Chapter 1 数列极限

> 数列极限是微积分内容的核心，极限思想贯穿整个微积分内容之中，数列极限是微积分最基本、最核心、最重要、最难的内容。
>
> ——苏德矿

研究数列极限，我们先复习一下数列定义

> /Define/
>
> 无限排列的一列数 $a_{1},a_{2},a_{3},\cdots,a_{n},\cdots$ 称为数列，记作 $\{a_{n}\}$ ，称 $a_{n}$ 为数列的通项。
>
> 设函数 $y = f(x)$ ，$x\in D$ 。特别地，$D = N = \{1,2,3,\cdots\}$ ，
>
> 函数为 $y = f(x)$ ，$x\in N$ ，改写成 $y = f(n)$ ，$n\in N$ ，称为自变量取整函数。
>
> 由于它的自变量可以按照自然数大小的顺序排成无限列 $n = 1,2,3,\cdots,n,\cdots$ ，
>
> 相应的函数值也可排成一无限列 $f(1),f(2),f(3),\cdots,f(n),\cdots$ ，称为数列，记作 $\{f(n)\}$ ，$f(n)$ 称为数列的通项。

### · 定义

那我们试着定义极限：

给定一个数列 $\{a_{n}\}$ ，看随着 $n$ 增大，$a_{n}$ 的变化趋势。

> /example/
>
> 1：$\{\frac{1}{n}\}$ ，$1,\frac{1}{2},\frac{1}{3},\cdots,\frac{1}{n},\cdots$ ，极限是 $0$ ，即 $\lim_{n \to \infty}\frac{1}{n}=0$ 。
>
> 2：$\{1\}$ ，$1,1,1,\cdots,1,\cdots$ ，极限是 $1$ 。
>
> 3：$1,0,\frac{1}{2},0,\frac{1}{3},0,\cdots,\frac{1}{n},0,\cdots$ ，极限是 $0$ 。
>
> 4：$\{(-1)^{n}\}$ ，$-1,1,-1,\cdots,(-1)^{n},\cdots$ ，无极限。

同时还有以下常见极限：

>  /example/
>
>  $$
>  \lim_{n \to \infty}(1 + \frac{1}{n})^{n}=e \\
>  \lim_{n \to \infty}\sqrt[n]{n}=1 \\
>  \lim_{n \to \infty}\sqrt[n]{a}=1 (a>0)\\
>  \lim_{n \to \infty}(1-\frac{1}{n})^{n}=\frac{1}{e} \\
>  $$

分析：随着 $n$ 无限增大，$a_{n}$ 与 $a$ 无限地接近，如何衡量 $|a_{n}-a|$ 与 $0$ 无限地接近？

$\forall\varepsilon > 0$ ，使 $|a_{n}-a|<\varepsilon$ ，找到一个自然数 $N$ ，当 $n > N$ 时，都有 $|a_{n}-a|<\varepsilon$ 。

我们可以给出数列极限定义：

> 主要研究一个数列 $\{a_{n}\}$ 有极限 $a$ 的情况。
>
> /Define/
>
> 设 $\{a_{n}\}$ 是一个给定的数列，$a$ 是一个确定的常数，
>
> 若 $\forall\varepsilon > 0$ ，相应地 $\exists$ 自然数 $N$ ，当 $n > N$ 时，$a_{n}$ 与 $a$ 无限地接近，
>
> 称数列 $\{a_{n}\}$ 当 $n \to \infty$ 时的极限是 $a$ ，记作
>
> $$
> \lim_{n \to \infty}a_{n}=a\quad  \text{or} \quad a_{n}\to a(n\to\infty) 
> $$
>
> ( 这是数学语言的表述，而像“随着 $n$ 无限增大，$a_{n}$ 与 $a$ 无限地接近”这种不是数学语言 )

/example/：$1 - 1+1 - 1+\cdots+(-1)^{n - 1}+\cdots$ 求和

> /Claim/
>
> $$
> \begin{align*}
> &(1 - 1)+(1 - 1)+\cdots=0\\
> &1+(- 1 + 1)+(-1 + 1)+\cdots=1
> \end{align*}
> $$
>
> 由此可见，不存在极限

定义理解：

> 1. $\varepsilon$ 的任意性：
>
>    定义中 $\forall\varepsilon > 0$ ，指的是一切正数。限制 $0 < \varepsilon < 1$ ，但是，不能限制 $\varepsilon$ 大于某个正数。
>
> 2. $N$ 的相应性：先有 $\varepsilon$ ，再确定 $N$ ，使 $n > N$ 时，都有 $|a_{n}-a|<\varepsilon$ 成立。找到一个 $N$ ，就能找到无数个 $N$ ，$n > N$ 可以改成 $n \geq N$ 。$\varepsilon$ 可以换成 $\varepsilon^{2}$ ，$\sqrt{\varepsilon}$ ，不能换成 $\varepsilon + 1$ ，$|a_{n}-a|<\varepsilon$ 可以改成 $|a_{n}-a|\leq\varepsilon$ 。
>
> 3. 几何意义：
>
>    $\lim_{n \to \infty}a_{n}=a$ ，即 $\forall\varepsilon > 0$ ，$\exists N$ ，当 $n > N$ 时，都有 $|a_{n}-a|<\varepsilon$ 。
>
>    $$
>    \begin{align*}
>    |a_{n}-a|<\varepsilon&\Leftrightarrow -\varepsilon < a_{n}-a < \varepsilon\\
>    &\Leftrightarrow a - \varepsilon < a_{n}< a + \varepsilon\\
>    &\Leftrightarrow a_{n}\in(a - \varepsilon,a + \varepsilon)\triangleq U(a,\varepsilon)
>    \end{align*}
>    $$
>
>    对于 $a$ 的任何 $\varepsilon$ 邻域 $U(a,\varepsilon)$ ，在外部仅有数列的有限项，其余项统统在邻域内。

要证明 $\lim_{n \to \infty}a_{n}=a$ ：$\forall\varepsilon > 0$ ，$\exists N$ ，当 $n > N$ 时，都有 $|a_{n}-a|<\varepsilon$ 成立。

在具体的题目里，$a_{n}$ ，$a$ 已知，$\forall\varepsilon > 0$ ，给过以后也可以看成定值，$n > N$ ，$N$ 为待求。

$|a_{n}-a|<\varepsilon\Leftrightarrow n > N$ （$\surd$ ），$|a_{n}-a|<\varepsilon\Rightarrow n > N$ （$\times$ ）。

/example/    证明 $\lim_{n \to \infty}C = C$ ，$C$ 常数。

> /proof/
>
> $\forall\varepsilon > 0$ ，取 $N = 1$ ，当 $n > N$ 时，都有 $|C - C|=0 < \varepsilon$ ，知 $\lim_{n \to \infty}C = C$ 。

/example/    证明 $\lim_{n \to \infty}\frac{1}{n^{k}} = 0$ ，$k > 0$ ，常数。

> 证：$\forall\varepsilon > 0$ ，若要 $|\frac{1}{n^{k}}-0|<\varepsilon$ 成立，
>
> $$
> \begin{align*}
> |\frac{1}{n^{k}}-0|<\varepsilon&\Leftrightarrow\frac{1}{n^{k}}<\varepsilon\Leftrightarrow n^{k}>\frac{1}{\varepsilon}\\
> &\Leftrightarrow n > (\frac{1}{\varepsilon})^{\frac{1}{k}}
> \end{align*}
> $$
>
> 取 $N = [(\frac{1}{\varepsilon})^{\frac{1}{k}}]$ ，当 $n > N$ 时，都有 $|\frac{1}{n^{k}}-0|<\varepsilon$ 成立，故 $\lim_{n \to \infty}\frac{1}{n^{k}} = 0$ ，$k > 0$ 。
>
> 比如 $\lim_{n \to \infty}\frac{1}{n} = 0$ ，$\lim_{n \to \infty}\frac{1}{n^{2}} = 0$ 。

/example/    证明 $\lim_{n \to \infty}\sqrt[n]{a}=0$ ，$a > 0$ ，常数。

> /proof/
>
> $a = 1$ ，$\lim_{n \to \infty}\sqrt[n]{1}=\lim_{n \to \infty}1 = 1$ 。
>
> $a > 1$ ，$\forall\varepsilon > 0$ ，若要 $|\sqrt[n]{a}-1|<\varepsilon$ 成立，
>
> $$
> \begin{align*}
> |\sqrt[n]{a}-1|<\varepsilon&\Leftrightarrow\sqrt[n]{a}-1<\varepsilon\Leftrightarrow a^{\frac{1}{n}}<1 + \varepsilon\\
> &\Leftrightarrow\frac{1}{n}\ln a<\ln(1 + \varepsilon)\Leftrightarrow n > \frac{\ln a}{\ln(1 + \varepsilon)}
> \end{align*}
> $$
>
> 取 $N = [\frac{\ln a}{\ln(1 + \varepsilon)}]$ ，当 $n > N$ 时，都有 $|\sqrt[n]{a}-1|<\varepsilon$ ，$\lim_{n \to \infty}\sqrt[n]{a}=1$ 。
>
> $0 < a < 1$ ，$\forall\varepsilon > 0$ ，若要 $|\sqrt[n]{a}-1|<\varepsilon$ 成立，
>
> $$
> \begin{align*}
> |\sqrt[n]{a}-1|<\varepsilon&\Leftrightarrow1-\sqrt[n]{a}<\varepsilon\Leftrightarrow a^{\frac{1}{n}}>1 - \varepsilon\\
> &\Leftrightarrow\frac{1}{n}\ln a>\ln(1 - \varepsilon)\Leftrightarrow n > \frac{\ln a}{\ln(1 - \varepsilon)}
> \end{align*}
> $$
>
> 取 $N = [\frac{\ln a}{\ln(1 - \varepsilon)}]$ ，当 $n > N$ 时，都有 $|\sqrt[n]{a}-1|<\varepsilon$ ，$\lim_{n \to \infty}\sqrt[n]{a}=1$ 。
>
> 总之，$\lim_{n \to \infty}\sqrt[n]{a}=1$ ，$a > 0$ ，常。

适当放大法：

$\forall\varepsilon > 0$ ，若要 $|a_{n}-a|<\varepsilon$ 成立，用 $|a_{n}-a|\leq g(n)$ （$n > N$ ）。

要求：$\lim_{n \to \infty}g(n)=0$ ， $g(n)$ 尽量简单。

只要 $g(n)<\varepsilon\Leftrightarrow n > N_{2}$ ，取 $N=\max\{N_{1},N_{2}\}$ ，

当 $n > N$ 时，都有 $|a_{n}-a|\leq g(n)<\varepsilon$ 。

分析：$0\leq|a_{n}-a|\leq g(n)$ ，$\forall\varepsilon > 0$ ，$\exists N_{2}$ ，当 $n > N_{2}$ 时，

$$
|a_{n}-a|<\varepsilon\Leftrightarrow|g(n)|\leq\varepsilon\Leftrightarrow|g(n)-0|<\varepsilon
$$

 即 $\lim_{n \to \infty}g(n)=0$ 。

***

/example/    证明 
$$
\lim_{n \to \infty}\frac{n^{2}\sin n! + 100}{n^{4}+2n^{2}+1}=0
$$

> /proof/
>
> $\forall\varepsilon > 0$ ，若要 $\left|\frac{n^{2}\sin n! + 100}{n^{4}+2n^{2}+1}-0\right|<\varepsilon$ 成立，
>
> 因为 
>
> $$
> \left|\frac{n^{2}\sin n! + 100}{n^{4}+2n^{2}+1}\right|\leq\frac{\left|n^{2}\sin n!\right| + 100}{n^{4}+2n^{2}+1}\leq\frac{n^{2}+100}{n^{4}+2n^{2}+1},\quad a < b\Rightarrow a\leq b
> $$
>
> 当 $n > 10$ 时，
>
> $$
> \frac{n^{2}+100}{n^{4}+2n^{2}+1}<\frac{n^{2}+n^{2}}{n^{4}}=\frac{2n^{2}}{n^{4}}=\frac{2}{n^{2}}
> $$
>
> 只要 $\frac{2}{n^{2}}<\varepsilon$ 成立，即 $\frac{n^{2}}{2}>\frac{1}{\varepsilon}\Leftrightarrow n > \frac{2}{\varepsilon}$ ，取 $N=\max\left\{10,\frac{2}{\varepsilon}\right\}$ 。
>
> 当 $n > N$ 时，都有 $\left|\frac{n^{2}\sin n! + 100}{n^{4}+2n^{2}+1}-0\right|<\varepsilon$ 成立，
>
> 所以 $\lim_{n \to \infty}\frac{n^{2}\sin n! + 100}{n^{4}+2n^{2}+1}=0$ 。

/example/   证明 $\lim_{n \to \infty}\frac{a^{n}}{n!}=0$ ，$a$ 常数。

> /proof/
>
> $\forall\varepsilon > 0$ ，若要 $\left|\frac{a^{n}}{n!}-0\right|<\varepsilon$ 成立，即 $\frac{|a|^{n}}{n!}<\varepsilon$ 。
>
> 由于 $a$ 为常数，$\exists$ 自然数 $m$ 为定值，使 $|a|\leq m$ 。
>
> 因为 
>
> $$
> \left|\frac{a^{n}}{n!}-0\right|=\frac{|a|^{n}}{n!}=\frac{|a|}{1}\cdot\frac{|a|}{2}\cdots\frac{|a|}{m}\cdots\frac{|a|}{n}\leq\frac{m}{1}\cdot\frac{m}{2}\cdots\frac{m}{m}\cdot\frac{m}{m + 1}\cdots\frac{m}{n}
> $$
>
> 令 $\frac{m}{1}\cdot\frac{m}{2}\cdots\frac{m}{m}=M$ ，则
>
> $$
> \frac{m}{1}\cdot\frac{m}{2}\cdots\frac{m}{m}\cdot\frac{m}{m + 1}\cdots\frac{m}{n}=M\cdot\frac{m}{m + 1}\cdots\frac{m}{n}<\frac{M\cdot m}{n}
> $$
>
> （$n > m$ ）
>
> 只要 $\frac{M\cdot m}{n}<\varepsilon\Leftrightarrow n > \frac{M\cdot m}{\varepsilon}$ ，取 $N=\max\left\{m,\left[\frac{M\cdot m}{\varepsilon}\right]\right\}$ ，
>
> 当 $n > N$ 时，都有 $\left|\frac{a^{n}}{n!}-0\right|<\varepsilon$ ，所以 $\lim_{n \to \infty}\frac{a^{n}}{n!}=0$ 。

重要的数列极限

1. $\lim_{n \to \infty}C = C$ ，$C$ 常数。

2. $\lim_{n \to \infty}\frac{1}{n^{k}}=0$ ，$k > 0$ 常数。

3. $\lim_{n \to \infty}q^{n}=0$ ，$|q|<1$ 常数。

4. $\lim_{n \to \infty}\sqrt[n]{a}=1$ ，$a > 0$ 常数。

5. $\lim_{n \to \infty}\frac{a^{n}}{n!}=0$ ，$a$ 常数。

6. $\lim_{n \to \infty}\sqrt[n]{n}=1$ （二次展开，适当放大）。

### · 收敛数列的性质

性质1（唯一性）：若数列 $\{a_{n}\}$ 有极限，则极限值唯一。

> /proof/
>
> 证法一：用反证法，假设 $\lim_{n \to \infty}a_{n}=a$ ，$\lim_{n \to \infty}a_{n}=b$ ，且 $a\neq b$ 。
>
> 对 $\forall\varepsilon > 0$ ，$\exists N_{1}$ ，当 $n > N_{1}$ 时，都有 $|a_{n}-a|<\varepsilon$ ； $\exists N_{2}$ ，当 $n > N_{2}$ 时，$|a_{n}-b|<\varepsilon$ 。
>
> 取 $N=\max\{N_{1},N_{2}\}$ ，当 $n > N$ 时，都有 $|a_{n}-a|<\varepsilon$ ，$|a_{n}-b|<\varepsilon$ ，于是
>
> $$
> \begin{align*}
> |a - b|&=|a - a_{n}+a_{n}-b|\leq|a_{n}-a|+|a_{n}-b|\\
> &<\varepsilon+\varepsilon = 2\varepsilon\Rightarrow a = b
> \end{align*}
> $$
>
> 矛盾，所以极限值唯一。
>
> ***
>
> 证法二：取 $\varepsilon=\frac{|a - b|}{2}>0$ ，
>
> $\exists N_{1}$ ，当 $n > N_{1}$ 时，都有 $|a_{n}-a|<\frac{|a - b|}{2}$ ，
>
> $\exists N_{2}$ ，当 $n > N_{2}$ 时，都有 $|a_{n}-b|<\frac{|a - b|}{2}$ 。
>
> 取 $N=\max\{N_{1},N_{2}\}$ ，当 $n > N$ 时，$|a - b|\leq|a - a_{n}|+|a_{n}-b|<|a - b|$ ，
>
> 矛盾，极限值唯一。
>
> 若数列 $\{a_{n}\}$ 有极限，则称 $\{a_{n}\}$ 收敛，否则称 $\{a_{n}\}$ 发散。

性质2：

一个数列改变它的有限项，或去掉数列的有限项，或在前面添加有限项，不改变数列的收敛性。

若原数列收敛，改变后极限值不变。

若常数 $M>0$ ，$\forall n\in N$ ，都有 $|a_{n}|\leq M$ ，称 $\{a_{n}\}$ 有界。

若数列 $\{a_{n}\}$ 收敛，则 $\{a_{n}\}$ 有界。

> /proof/
>
> 证法一：由 $\{a_{n}\}$ 收敛，设 $\lim_{n \to \infty}a_{n}=a$ 。
>
> 取 $\varepsilon = 1>0$ ，由 $\lim_{n \to \infty}a_{n}=a$ ，$\exists$ 自然数 $N_{0}$ ，
>
> 当 $n > N_{0}$ 时，都有 $||a_{n}|-|a||\leq|a_{n}-a|<1\Rightarrow|a_{n}|<1 + |a|$ 。
>
> 令 $M=\max\{|a_{1}|,|a_{2}|,\cdots,|a_{N_{0}}|,|a| + 1\}$ ，$\forall n\in N$ ，都有 $|a_{n}|\leq M$ 。
>
> ***
>
> 证法二：设 $M=\max\{|a_{1}|,|a_{2}|,\cdots,|a_{N}|\}$ ，$\forall n\in N$ ，都有 $|a_{n}|\leq M$ 。

/example/    $M=\max\{1,2,\cdots,n,\cdots\}$ 无最大值（$\times$）。

这个性质逆命题不成立，例：$\{(-1)^{n}\}$ 有界，但 $\{(-1)^{n}\}$ 是发散的。

这个性质称为收敛的必要条件。

性质3（不等式性质）

若 $\lim_{n \to \infty}a_{n}=a$ ，$\lim_{n \to \infty}b_{n}=b$ ，且 $a < b$ ，

则 $\exists N_{0}$ ，当 $n > N_{0}$ 时，都有 $a_{n}<b_{n}$ 。

> /proof/
>
> 取 $\varepsilon=\frac{b - a}{2}$ ，$\exists N_{1}$ ，当 $n > N_{1}$ 时，都有 $|a_{n}-a|<\frac{b - a}{2}$ 。
>
> $$
> \begin{align*}
> |a_{n}-a|<\frac{b - a}{2}&\Leftrightarrow a-\frac{b - a}{2}<a_{n}<a+\frac{b - a}{2}\\
> &\Leftrightarrow\frac{3a - b}{2}<a_{n}<\frac{a + b}{2}\quad\tag{1}
> \end{align*}
> $$
>
> $\exists N_{2}$ ，当 $n > N_{2}$ 时，都有 $|b_{n}-b|<\frac{b - a}{2}$ 。
>
> $$
> \begin{align*}
> |b_{n}-b|<\frac{b - a}{2}&\Leftrightarrow b-\frac{b - a}{2}<b_{n}<b+\frac{b - a}{2}\\
> &\Leftrightarrow\frac{a + b}{2}<b_{n}<\frac{3b - a}{2}\quad\tag{2}
> \end{align*}
> $$
>
> 取 $N=\max\{N_{1},N_{2}\}$ ，当 $n > N$ 时，都有 $a_{n}<\frac{a + b}{2}<b_{n}$ 。

推论：$\exists N_{0}$ ，$n,m > N_{0}$ ，$a_{n}<b_{m}$ 。

若条件中“$a_{n}\geq b_{n}$”改成“$a_{n}>b_{n}$”，结论能否改成 $a > b$ ？不行。

命题的条件加强，结论仍成立，其逆结论要证明。

/example/    $a_{n}=\frac{1}{n}$ ，$b_{n}=-\frac{1}{n}$ ，$a_{n}>b_{n}$ ，$\lim_{n \to \infty}\frac{1}{n}=0$ ，$\lim_{n \to \infty}(-\frac{1}{n})=0$ ，$a = b$ 。

推论（保号性）：保正号，保负号。

> /proof/
>
> 若 $\lim_{n \to \infty}a_{n}=a>0$（$a < 0$），对任意常数 $0<\eta < a$（$a<\eta < 0$）
>
> ，$\exists N$ ，当 $n > N$ 时，都有 $a_{n}>\eta > 0$（$a_{n}<\eta < 0$）。
>
> 取 $b_{n}\equiv\eta$（$n = 1,2,3,\cdots$），$\lim_{n \to \infty}b_{n}=\eta$ ，且 $a>\eta$ 。
>
> 由性质 3 ，$\exists N$ ，当 $n > N$ 时，都有 $a_{n}>b_{n}$ ，即 $a_{n}>\eta > 0$ 。

性质4（不等式性质）

若 $\exists N_{0}$ ，当 $n > N_{0}$ 时，都有 $a_{n}>b_{n}$ ，且 $\lim_{n \to \infty}a_{n}=a$ ，$\lim_{n \to \infty}b_{n}=b$ ，则 $a\geq b$ 。

> /proof/
>
> 用反证法，假设 $a < b$ ，由性质 3 ，
>
> $\exists N_{1}$ ，当 $n > N_{1}$ 时，都有 $a_{n}<b_{n}$ ，
>
> 取 $N=\max\{N_{0},N_{1}\}$ ，当 $n > N$ 时，都有 $a_{n}>b_{n}$ 且 $a_{n}<b_{n}$ ，所以假设不成立，$a\geq b$ 。

性质5（数列极限的四则运算）
若 $\lim_{n \to \infty}a_{n}=a$ ，$\lim_{n \to \infty}b_{n}=b$ ，则

$$
\begin{align*}
\lim_{n \to \infty}(a_{n}\pm b_{n})&=\lim_{n \to \infty}a_{n}\pm\lim_{n \to \infty}b_{n}\\
\lim_{n \to \infty}(a_{n}\cdot b_{n})&=\lim_{n \to \infty}a_{n}\cdot\lim_{n \to \infty}b_{n}=a\cdot b\\
\end{align*}
$$

若 $C$ 为常数，

$$
\lim_{n \to \infty}(C\cdot a_{n})=C\lim_{n \to \infty}a_{n}\quad \quad
\lim_{n \to \infty}\frac{a_{n}}{b_{n}}=\frac{\lim_{n \to \infty}a_{n}}{\lim_{n \to \infty}b_{n}}=\frac{a}{b}(b\neq0)
$$

计算的过程中进行验证。

推广到有限项，前提是这些的极限都存在，不能推广到无限项，例：

$$
\lim_{n \to \infty}(\underbrace{\frac{1}{n}+\frac{1}{n}+\cdots+\frac{1}{n}}_{n})=0 + 0+\cdots+0 = 0 \quad (\times)
$$

原式$=\lim_{n \to \infty}1 = 1$

由 $\lim_{n \to \infty}\frac{1}{n^{k}}=0$ ，$k > 0$ ，常数。

那我们这时候可以给出求极限的重要公式

### · 重要公式

（$a_{0},a_{1},\cdots,a_{k};b_{0},b_{1},\cdots,b_{m}$ 均为常数 ，$a_{0}\neq0$，$b_{0}\neq0$）

$$
\lim_{n \to \infty}\frac{a_{0}n^{k}+a_{1}n^{k - 1}+\cdots+a_{k - 1}n+a_{k}}{b_{0}n^{m}+b_{1}n^{m - 1}+\cdots+b_{m - 1}n+b_{m}}
=\begin{cases}
0, & k < m\\
\frac{a_{0}}{b_{0}}, & k = m\\
\infty, & k > m
\end{cases}
$$


（“抓大放小”）

> /proof/
>
> 原式
>
> $$
> =\lim_{n \to \infty}\frac{n^{k}}{n^{m}}\cdot\frac{a_{0}+a_{1}\frac{1}{n}+\cdots+a_{k - 1}\frac{1}{n^{k - 1}}+a_{k}\frac{1}{n^{k}}}{b_{0}+b_{1}\frac{1}{n}+\cdots+b_{m - 1}\frac{1}{n^{m - 1}}+b_{m}\frac{1}{n^{m}}}
> $$
>
> 极限为 $\frac{a_{0}}{b_{0}}$ 。
>
> 分子分母中的指数为正数时，结论依然成立

### · 判断数列收敛两个准则

#### · 夹逼定理

若 $\exists N_{0}$ ，当 $n > N_{0}$ 时，都有 $a_{n}\leq c_{n}\leq b_{n}$ ，且 $\lim_{n \to \infty}a_{n}=a$ ，$\lim_{n \to \infty}b_{n}=a$ ，

则数列 $\{c_{n}\}$ 收敛，且 $\lim_{n \to \infty}c_{n}=a$ 。

> /proof/
>
> 由 $\lim_{n \to \infty}a_{n}=a$ ，$\forall\varepsilon > 0$ ，$\exists N_{1}$ ，当 $n > N_{1}$ 时，都有 $|a_{n}-a|<\varepsilon$ ，$\Leftrightarrow a-\varepsilon < a_{n}<a + \varepsilon$（1）。
>
> 由 $\lim_{n \to \infty}b_{n}=a$ ，$\exists N_{2}$ ，当 $n > N_{2}$ 时，都有 $|b_{n}-a|<\varepsilon$ ，$\Leftrightarrow a-\varepsilon < b_{n}<a + \varepsilon$（2）。
>
> 设 $\max\{N_{0},N_{1},N_{2}\}=N$ ，当 $n > N$ 时，$a_{n}\leq c_{n}\leq b_{n}$ ，
>
> 结合（1）和（2）可得 $a-\varepsilon < c_{n}<a + \varepsilon$ ，即 $\lim_{n \to \infty}c_{n}=a$ 。

$$
\begin{align*}
a - \varepsilon&<a_{n}<a + \varepsilon\\
a_{n}&\leq c_{n}\leq b_{n}\\
a - \varepsilon&<b_{n}<a + \varepsilon
\end{align*} \quad
\Rightarrow a - \varepsilon < a_{n}\leq c_{n}\leq b_{n}<a + \varepsilon\Rightarrow|c_{n}-a|<\varepsilon
\quad \therefore\lim_{n \to \infty}c_{n}=a
$$

注意：若一个数列有很多项相加或相乘但是不易化简，不能用极限的四则运算，常试用夹逼定理

/example/    求 $\lim_{n \to \infty}\sqrt[n]{a^{n}+b^{n}+c^{n}}$（$a>b>c>0$，常数）。

> /solution/
>
> 
>
> $$
> \sqrt[n]{a^{n}+b^{n}+c^{n}}\leq\sqrt[n]{3a^{n}}=a\sqrt[n]{3}
> \sqrt[n]{a^{n}+b^{n}+c^{n}}>\sqrt[n]{a^{n}}=a
> $$
>
> 并且 
>
> $$
> \lim_{n \to \infty}a = a
> \lim_{n \to \infty}a\sqrt[n]{3}=a
> $$
> 由夹逼定理，
> $$
> \lim_{n \to \infty}\sqrt[n]{a^{n}+b^{n}+c^{n}}=a
> $$
> 结束

/example/    求解 
$$
\lim_{n \to \infty}(\frac{\sqrt{1\cdot2}}{n^{2}+1}+\frac{\sqrt{2\cdot3}}{n^{2}+2}+\cdots+\frac{\sqrt{n(n + 1)}}{n^{2}+n})
$$

> /solution/
>
> 不妨设
>
> $$
> c_{n}=\frac{\sqrt{1\cdot2}}{n^{2}+1}+\frac{\sqrt{2\cdot3}}{n^{2}+2}+\cdots+\frac{\sqrt{n(n + 1)}}{n^{2}+n}
> $$
>
> （一般先放大）。
>
> $$
> \begin{align*}
> c_{n}&<\frac{1}{n^{2}}(\sqrt{1\cdot2}+\sqrt{2\cdot3}+\cdots+\sqrt{n(n + 1)})\\
> &<\frac{1}{n^{2}}(2 + 3+\cdots+(n + 1))=\frac{\frac{(n + 3)n}{2}}{n^{2}}=\frac{n + 3}{2n}
> \end{align*}
> $$
>
> $$
> \begin{align*}
> c_{n}&\geq\frac{1}{n^{2}+n}(\sqrt{1\cdot2}+\sqrt{2\cdot3}+\cdots+\sqrt{n(n + 1)})\\
> &>\frac{1}{n^{2}+n}(1 + 2+\cdots+n)=\frac{\frac{(n + 1)n}{2}}{n^{2}+n}=\frac{1}{2}
> \end{align*}
> $$
>
> 根据
>
> $$
> \lim_{n \to \infty}\frac{1}{2}=\frac{1}{2}
> \lim_{n \to \infty}\frac{n + 3}{2n}=\frac{1}{2}
> $$
>
> 由夹逼定理，
>
> $$
> \lim_{n \to \infty}c_{n}=\frac{1}{2}
> $$

#### · 单调有界原理

在数学分析中，有7个命题是等价的：

> 戴德金分割原理，确界原理，单调有界定理（原理）
>
> 聚点定理，区间套定理，有限覆盖定理，柯西收敛准则

若数列 $\{a_{n}\}$ 递增有上界，则 $\{a_{n}\}$ 收敛（$a_{1}\leq a_{2}\leq a_{3}\leq\cdots\leq a_{n}\leq\cdots$ 称为递增，

$\exists$ 常数 $M$，$\forall n\in N$，都有 $a_{n}\leq M$ 称为有上界）。

若数列 $\{a_{n}\}$ 递减有下界，则 $\{a_{n}\}$ 收敛。

即若 $\{a_{n}\}$ 单调且有界，则 $\{a_{n}\}$ 收敛。

> PS：定理的条件可减弱为：当 $n > N_{0}$ 时，单调有界，则 $\{a_{n}\}$ 收敛。
>
> PS+：若 $\{a_{n}\}$ 是由递推关系式给出，或证明 $\{a_{n}\}$ 收敛并求极限，或证明 $\{a_{n}\}$ 收敛，或不能用夹逼定理，常试用单调有界定理。

我们现在试着研究 $\{(1 + \frac{1}{n})^{n}\}$ 的收敛性

> /solution/
>
> $$
> \begin{align*}
> \lim_{n \to \infty}(1 + \frac{1}{n})^{n}
> &=\lim_{n \to \infty}(1 + \frac{1}{n})\cdot(1 + \frac{1}{n})\cdots(1 + \frac{1}{n})\\
> &=\lim_{n \to \infty}(1 + \frac{1}{n})\cdot\lim_{n \to \infty}(1 + \frac{1}{n})\cdots\lim_{n \to \infty}(1 + \frac{1}{n})\\
> &=1\times1\times\cdots\times1\\
> &=1\quad(\times)
> \end{align*}
> $$
>
> 只判定收敛，没求极限，用单调有界定理。
>
> 设 $a_{n}=(1 + \frac{1}{n})^{n}$ ，非常规方法：
>
> 中学里学过一个重要不等式：设 $a_{1},a_{2},\cdots,a_{n}$ 均为正数，则
>
> $$
> \frac{a_{1}+a_{2}+\cdots+a_{n}}{n}\geq\sqrt[n]{a_{1}a_{2}\cdots a_{n}}
> $$
>
> ，等号当且仅当 $a_{1}=a_{2}=\cdots=a_{n}$ 时成立，由
>
> $$
> \sqrt[n + 1]{(1 + \frac{1}{n})^{n}}<\frac{n(1 + \frac{1}{n})+1}{n + 1}=\frac{n + 2}{n + 1}=1+\frac{1}{n + 1}
> $$
> 要证 $a_{n}<a_{n + 1}$ 成立，只要证 $(1 + \frac{1}{n})^{n}<(1 + \frac{1}{n + 1})^{n + 1}$ 成立，只要证 $\sqrt[n]{(1 + \frac{1}{n})}<1+\frac{1}{n + 1}$ 成立。
>
> $$
> \begin{align*}
> \sqrt[n]{\frac{1}{n}}&=\sqrt[n]{\frac{1}{n}\cdot1\cdots1}\\
> &<\frac{1 + n\cdot\frac{1}{n}}{n}=\frac{n + 1}{n}=1-\frac{1}{n}\\
> &<1-\frac{1}{n + 1}=\frac{n}{n + 1}\\
> &\Rightarrow\frac{1}{4}<(\frac{n}{n + 1})^{n}\Rightarrow4>(\frac{n + 1}{n})^{n}\\
> &\Rightarrow a_{n}<4
> \end{align*}
> $$
>
> 其他方法，利用 $a^{n}-b^{n}=(a - b)(a^{n - 1}+a^{n - 2}b+\cdots+ab^{n - 2}+b^{n - 1})$ 。
>
> 设 $\lim_{n \to \infty}(1 + \frac{1}{n})^{n}=e$ （$\ast$）。
>
> 后来证明，$e$ 是无理数，$e = 2.71828\cdots$ 

> $$
> \Rightarrow(1 + \frac{1}{n})^{n}<(1 + \frac{1}{n + 1})^{n + 1}\quad \text{ i.e. } \quad a_{n}<a_{n + 1}
> $$

/example/

设 $c>0$，$x_{1}=\sqrt{c}$，$x_{2}=\sqrt{c + \sqrt{c}}$，$x_{n}=\sqrt{c+\sqrt{c+\cdots}}$（$n$ 个根号），

证明 $\{x_{n}\}$ 收敛，并求极限 $\lim_{n \to \infty}x_{n}$。（先证明收敛，再求极限，考虑单调有界定理）

> /proof/
>
> 证法一
>
> 由条件可知，$x_{n + 1}=\sqrt{c + x_{n}}$。
>
> $$
> \begin{align*}
> x_{n + 1}-x_{n}&=\sqrt{c + x_{n}}-x_{n}\\
> &=\frac{c + x_{n}-x_{n}^{2}}{\sqrt{c + x_{n}}+x_{n}}=\frac{c + x_{n}-(c + x_{n + 1})}{\sqrt{c + x_{n}}+x_{n}}\\
> &=\frac{x_{n}-x_{n + 1}}{\sqrt{c + x_{n}}+x_{n}}
> \end{align*}
> $$
>
> $\Rightarrow x_{n + 1}-x_{n}$ 与 $x_{n}-x_{n - 1}$ 同号 $\cdots$ $\Rightarrow x_{n + 1}-x_{n}$ 与 $x_{2}-x_{1}$ 同号。
>
> 由 $x_{2}-x_{1}=\sqrt{c+\sqrt{c}}-\sqrt{c}>0$ $\Rightarrow x_{n + 1}-x_{n}>0\Rightarrow x_{n}<x_{n + 1}$，知 $\{x_{n}\}$ 递增。
>
> 另一种证法：由 $x_{1}<x_{2}$（$\sqrt{c}<\sqrt{c + \sqrt{c}}$）。
>
> 假设 $x_{k}<x_{k + 1}$ 成立，
>
> $$
> \begin{align*}
> &\Rightarrow0<x_{k}+c<x_{k + 1}+c\\
> &\Rightarrow\sqrt{x_{k}+c}<\sqrt{x_{k + 1}+c}\\
> &\Rightarrow x_{k + 1}<x_{k + 2}
> \end{align*}
> $$
>
> 由数学归纳法知，$x_{n}<x_{n + 1}$。
>
> 由 $x_{n}<\sqrt{c + x_{n}}\Rightarrow x_{n}^{2}<c + x_{n}$，$x_{n}^{2}-x_{n}-c<0$。
>
> 由 $x^{2}-x - c=0$，$x_{1,2}=\frac{1\pm\sqrt{1 + 4c}}{2}$，$\therefore\frac{1-\sqrt{1 + 4c}}{2}<x_{n}<\frac{1+\sqrt{1 + 4c}}{2}$，知 $\{x_{n}\}$ 有上界。
>
> 由单调有界定理知，$\{x_{n}\}$ 收敛。
>
> 设 $\lim_{n \to \infty}x_{n}=a$，$\Rightarrow\lim_{n \to \infty}x_{n + 1}=a$（$\lim_{n \to \infty}x_{n}=a\Rightarrow\lim_{n \to \infty}x_{n + m}=a$，$m\in N$）。
>
> 由 $x_{n + 1}=\sqrt{c + x_{n}}\Rightarrow x_{n + 1}^{2}=c + x_{n}$，
>
> $\Rightarrow\lim_{n \to \infty}x_{n + 1}^{2}=\lim_{n \to \infty}(c + x_{n})$，
>
> $\Rightarrow a^{2}=c + a$，$a^{2}-a - c=0$，$a=\frac{1\pm\sqrt{1 + 4c}}{2}$。
>
> 由 $a>0$，$\therefore\lim_{n \to \infty}x_{n}=\frac{1 + \sqrt{1 + 4c}}{2}$ 
>
> ***
>
> 证法二：
>
> 我们可以证明 $\{x_{n}\}$ 收敛。
>
> 设 $\lim_{n \to \infty}x_{n}=a$，由 $x_{n + 1}=\sqrt{c + x_{n}}$ 
> $$
> \begin{align*}
> &\Rightarrow x_{n + 1}^{2}=c + x_{n}\\
> &\Rightarrow\lim_{n \to \infty}x_{n + 1}^{2}=\lim_{n \to \infty}(c + x_{n})\\
> &\Rightarrow a^{2}=c + a\\
> &\Rightarrow a^{2}-a - c=0\\
> &\Rightarrow a=\frac{1\pm\sqrt{1 + 4c}}{2}
> \end{align*}
> $$
> 由 $a>0$，$\therefore\lim_{n \to \infty}x_{n}=\frac{1 + \sqrt{1 + 4c}}{2}$。
>
> 下面我们来证明 $\{x_{n}\}$ 收敛，之前我们已证明 $x_{n}<x_{n + 1}$。
>
> 由 $\frac{1+\sqrt{1 + 4c}}{2}<\frac{1+\sqrt{1 + 4c}+c}{2}=\frac{1+(1 + 2\sqrt{c})}{2}=1+\sqrt{c}$。
>
> 当 $n = 1$ 时，$x_{1}=\sqrt{c}<1+\sqrt{c}$。
>
> 假设 $n = k$ 时，$x_{k}<1+\sqrt{c}$。
>
> 当 $n = k + 1$ 时，$x_{k + 1}=\sqrt{c + x_{k}}<\sqrt{c + 1+\sqrt{c}}<\sqrt{c + 1 + 2\sqrt{c}}=1+\sqrt{c}$。
>
> 由数学归纳法，知 $x_{n}<1+\sqrt{c}$，所以 $\{x_{n}\}$ 递增有上界，收敛

/example/    $x_{0}=2$，$x_{n}=\frac{2x_{n - 1}^{3}+1}{3x_{n - 1}^{2}}$，$n = 1,2,\cdots$，证明 $\{x_{n}\}$ 收敛，并求 $\lim_{n \to \infty}x_{n}$（单调有界定理）。

> /proof/
>
> 由 $x_{n}-x_{n - 1}=\frac{2x_{n - 1}^{3}+1}{3x_{n - 1}^{2}}-x_{n - 1}=\frac{1 - x_{n - 1}^{3}}{3x_{n - 1}^{2}}$。
>
> 由条件知 $x_{n}>0$。
>
> $$
> x_{n}=\frac{1}{3}(x_{n - 1}+x_{n - 1}+\frac{1}{x_{n - 1}^{2}})\geq\sqrt[3]{x_{n - 1}\cdot x_{n - 1}\cdot\frac{1}{x_{n - 1}^{2}}}=1\\
> \Rightarrow x_{n}-x_{n - 1}\leq0\Rightarrow x_{n}\leq x_{n - 1}
> $$
>
> 由单调有界定理知，$\{x_{n}\}$ 收敛。
>
> 设 $\lim_{n \to \infty}x_{n}=a$。
>
> $$
> \begin{align*}
> \lim_{n \to \infty}x_{n}&=\lim_{n \to \infty}\frac{2x_{n - 1}^{3}+1}{3x_{n - 1}^{2}}\\
> \Rightarrow a&=\frac{2a^{3}+1}{3a^{2}}\\
> \Rightarrow 3a^{3}&=2a^{3}+1\\
> \Rightarrow a^{3}&=1\Rightarrow a = 1
> \end{align*}
> $$
>
> $\therefore\lim_{n \to \infty}x_{n}=1$。

### · 子数列

设 $\{a_{n}\}$ 是一个给定的数列，从该数列中挑选出无穷项，按原来的顺序排成一无限列：$a_{n_{1}},a_{n_{2}},\cdots,a_{n_{k}},\cdots$，

称为 $\{a_{n}\}$ 的子数列，记作 $\{a_{n_{k}}\}$ ，$n_{k}\geq k$。

例如 $a_{1},a_{3},\cdots,a_{2k - 1},\cdots$ ；$a_{2},a_{4},\cdots,a_{2k},\cdots$ 。

定理：数列 $\{a_{n}\}$ 收敛的充要条件是 $\{a_{n}\}$ 的任何一个子数列 $\{a_{n_{k}}\}$ 都收敛且极限相等。

> /proof/
>
> - **充分性**：由 $\{a_{n}\}$ 的任何一个子数列都收敛并且极限值相等，$\{a_{n}\}$ 是 $\{a_{n}\}$ 的一个子数列，所以 $\{a_{n}\}$ 收敛。
>
> - **必要性**：由 $\{a_{n}\}$ 收敛，设 $\lim_{n \to \infty}a_{n}=a$ 。$\forall\varepsilon > 0$ ，$\exists N$ ，当 $n > N$ 时，都有 $|a_{n}-a|<\varepsilon$ 。
>
>   设 $\{a_{n_{k}}\}$ 是 $\{a_{n}\}$ 的任何一个子数列。要证明 $\lim_{k \to \infty}a_{n_{k}}=a$ ，$\forall\varepsilon > 0$ ，当 $k > N$ 时，由于 $n_{k}\geq k > N$ ，
>
>   $\Rightarrow|a_{n_{k}}-a|<\varepsilon$ ，$\therefore\lim_{k \to \infty}a_{n_{k}}=a$ 

推论：若 $\{a_{n}\}$ 中挑选两个子数列极限存在但不相等或挑选一个子数列极限不存在，则 $\{a_{n}\}$ 发散。

/example/    证明 $\{(-1)^{n}\}$ 发散。

> /proof/
>
> 取 $n = 2k$ ，$\{(-1)^{2k}\}=\{1\}$ ，极限是 $1$ 。
>
> $n = 2k - 1$ ，$\{(-1)^{2k - 1}\}=\{-1\}$ ，极限是 $-1$ 。
>
> 且 $-1\neq1$ ，知 $\{(-1)^{n}\}$ 发散。

定理：若 $\{a_{n}\}$ 收敛的充要条件是 $\{a_{2k}\}$ ，$\{a_{2k + 1}\}$ 极限都存在且相等。
