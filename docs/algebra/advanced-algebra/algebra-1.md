---
title: Chapter 1 行列式
createTime: 2025/09/17 23:22:15
permalink: /algebra/algebra-1/
---

## Part 1 行列式

线性代数研究步骤：引入问题 $\rightarrow$ 概念方法 $\rightarrow$ 解决问题

Q：如何进行线性方程组求解？

给出$n$元线性方程：

$$
\begin{cases}
a_{11}x_1 + a_{12}x_2 + \cdots + a_{1n}x_n = b_1, \\
a_{21}x_1 + a_{22}x_2 + \cdots + a_{2n}x_n = b_2, \\
\vdots \\
a_{m1}x_1 + a_{m2}x_2 + \cdots + a_{mn}x_n = b_m.
\end{cases}
$$

 $a_{ij}, b_i$  常数， $x_1, x_2, \ldots, x_n$  为未定元

第一章研究  $m = n$ ，即未定元个数等于方程数的情况（废话，非方阵哪来的行列式）

当  $n = 2$  时，二元线性方程组


$$
\begin{cases}
a_{11}x_1 + a_{12}x_2 = b_1 \\
a_{21}x_1 + a_{22}x_2 = b_2
\end{cases}
$$

> 消元法  $(a_{21}x_1 + a_{22}x_2 = b_2 \Rightarrow (a_{11}a_{22} - a_{12}a_{21})x_1 = b_1a_{22} - b_2a_{12})$ 
>
> 定义二阶行列式
> $$
> \begin{vmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end{vmatrix} = a_{11}a_{22} - a_{12}a_{21}
> $$
>
> $$
> x_1 = \frac{b_1}{\begin{vmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end{vmatrix}}, \quad x_2 = \frac{b_2}{\begin{vmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end{vmatrix}}
> $$

当  $n = 3$  时，三元线性方程组 当 $n=3$ 时，三元线性方程组

$$
\begin{equation*}
\begin{cases}
a_{11} x_1 + a_{12} x_2 + a_{13} x_3 = b_1 \\
a_{21} x_1 + a_{22} x_2 + a_{23} x_3 = b_2 \\
a_{31} x_1 + a_{32} x_2 + a_{33} x_3 = b_3
\end{cases}
\end{equation*}
$$
用待定系数法：(1) $\times V + (2) \times U + (3) \times W$
$$
\begin{equation*}
\begin{cases}
(a_{11}U + a_{21}V + a_{31}W)x_1 = b_1U + b_2V + b_3W  \\
a_{12}U + a_{22}V + a_{32}W = 0 \\
a_{13}U + a_{23}V + a_{33}W = 0
\end{cases}
\end{equation*}
$$
化简为二元线性方程组
$$
\begin{equation*}
\begin{cases}
a_{12} \frac{U}{W} + a_{22} \frac{V}{W} = -a_{32} \\
a_{13} \frac{U}{W} + a_{23} \frac{V}{W} = -a_{33}
\end{cases}
\end{equation*}
$$
不妨令
$$
U = \left| \begin{array}{cc} a_{22} & a_{23} \\ a_{32} & a_{33} \end{array} \right|,\quad V = -\left| \begin{array}{cc} a_{12} & a_{13} \\ a_{32} & a_{33} \end{array} \right|,\quad W = \left| \begin{array}{cc} a_{12} & a_{13} \\ a_{22} & a_{23} \end{array} \right|
$$
通过上述方程组解出 $U$, $V$, $W$。

通过如上运算，我们可以给出三阶行列式的定义

> 定义三阶行列式：
>
> $$
> \begin{vmatrix}
> a_{11} & a_{12} & a_{13} \\
> a_{21} & a_{22} & a_{23} \\
> a_{31} & a_{32} & a_{33}
> \end{vmatrix}= a_{11} \begin{vmatrix} a_{22} & a_{23} \\ a_{32} & a_{33} \end{vmatrix} - a_{21} \begin{vmatrix} a_{12} & a_{13} \\ a_{32} & a_{33} \end{vmatrix} + a_{31} \begin{vmatrix} a_{12} & a_{13} \\ a_{22} & a_{23} \end{vmatrix}
> $$
>
> (组合定义) = 
> $$
> a_{11}a_{22}a_{33} + a_{21}a_{32}a_{13} + a_{31}a_{12}a_{23} - a_{13}a_{22}a_{31} - a_{11}a_{32}a_{23} - a_{31}a_{21}a_{12}
> $$

$$
x_1 = \frac{\begin{vmatrix} a_{11} & a_{12} & a_{13} \\ a_{21} & a_{22} & a_{23} \\ a_{31} & a_{32} & a_{33} \end{vmatrix}}{\begin{vmatrix} a_{11} & a_{12} & a_{13} \\ b_1 & b_2 & b_3 \\ c_1 & c_2 & c_3 \end{vmatrix}}\quad\quad 
x_2 = \frac{\begin{vmatrix} a_{11} & a_{12} & a_{13} \\ b_1 & b_2 & b_3 \\ c_1 & c_2 & c_3 \end{vmatrix}}{\begin{vmatrix} a_{11} & a_{12} & a_{13} \\ a_{21} & a_{22} & a_{23} \\ a_{31} & a_{32} & a_{33} \end{vmatrix}}\quad \quad
x_3 = \frac{\begin{vmatrix} a_{11} & a_{12} & b_1 \\ a_{21} & a_{22} & b_2 \\ a_{31} & a_{32} & b_3 \end{vmatrix}}{\begin{vmatrix} a_{11} & a_{12} & a_{13} \\ a_{21} & a_{22} & a_{23} \\ a_{31} & a_{32} & a_{33} \end{vmatrix}}
$$

> [!important]
>
> 注意：$|A|$ 为三阶行列式，将元素  $a_{ij}$  第  $i$  行第 $j$ 列删去，剩下元素按原来的顺序构成的二阶行列式称为  $a_{ij}$  的余式，记为  $M_{ij}$   ，按照第一列展开为：
> $$
> |A| = a_{11}M_{11} - a_{21}M_{21} + a_{31}M_{31}
> $$

这时候我们可以给出行列式的一些其他定义：

> 定义：
> $$
> |A| = \begin{vmatrix} a_{11} & a_{12} & a_{13} \\ a_{21} & a_{22} & a_{23} \\ a_{31} & a_{32} & a_{33} \end{vmatrix}
> $$
>  $a_{11}, a_{22}, a_{33}$ 组成这个行列式的主对角线。
>
> 若主对角线下方元素全为0，即  $a_{ij} = 0, i > j$ ，称 |A| 为上三角行列式。
>
> 若主对角线上方元素全为0，即  $a_{ij} = 0, i < j$ ，称 |A| 为下三角行列式。
>
>  $a_{ij}$  代数余子式
> $$
> A_{ij} = (-1)^{i+j} M_{ij}\Rightarrow |A| = a_{11}A_{11} + a_{21}A_{21} + a_{31}A_{31}
> $$
> 这个行列式的转置： $|A^T| = \begin{vmatrix} a_{11} & a_{21} & a_{31} \\ a_{12} & a_{22} & a_{32} \\ a_{13} & a_{23} & a_{33} \end{vmatrix}$  为行列互换

这时候我们可以尝试计算行列式的值了！
$$
|A| = a_{11}A_{11} + a_{21}A_{21} + a_{31}A_{31}
= a_{11}A_{11} + a_{12}A_{12} + a_{13}A_{13}
$$

>二阶行列式的几何意义
>
> 
>$$
>\overrightarrow{OA} = (a_1, a_2),\quad
>\overrightarrow{OB} = (b_1, b_2),\quad
> S_{\triangle OAB} = \frac{1}{2} \left| \begin{array}{cc} a_1 & a_2 \\ b_1 & b_2 \end{array} \right|
>$$
>三阶行列式的几何意义： $R^3$ 立方体的体积
>$$
>\overrightarrow{OA} = (a_1, a_2, a_3) ,\quad
>\overrightarrow{OB} = (b_1, b_2, b_3) ,\quad
>\overrightarrow{OC} = (c_1, c_2, c_3),\quad
>V_{OABC} = \frac{1}{6} \left| \begin{array}{ccc} a_1 & a_2 & a_3 \\ b_1 & b_2 & b_3 \\ c_1 & c_2 & c_3 \end{array} \right|.
>$$
>
>

### · n 阶行列式

**定义1**：

> 由两条竖线围成的  $n$  行  $n$  列元素组成的式子（数值）称为 n阶行列式：
> $$
> |A| = \left| \begin{array}{cccc} a_{11} & a_{12} & \cdots & a_{1n} \\ a_{21} & a_{22} & \cdots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{n1} & a_{n2} & \cdots & a_{nn} \end{array} \right|
> $$
> 有时也记为  $\det(A)$  (determinant)
>
>  $a_{ij}$ 称为第 $i$ 行第 $j$ 列元素， $a_{ij}$ 称为主对角线（对角线第  $i,j$  元素，删去  $a_{ij}$  所在的第  $i$  行，第  $j$  列，剩余元素按原来的顺序构成一个 $n-1$ 阶行列式，称为 $a_{ij}$ 的余子式，记为 $M_{ij}$ 

**定义2**：

> 当 $n = 1$ 时，1阶行列式 $|A|$ 定义为 $a_{11}$ ；下设所有 $n$ 阶行列式值已定义好，特别地。
>
> 下定义 $n$ 阶行列式：
>
> $$
> |A| = a_{11}M_{11} - a_{21}M_{21} + \cdots + (-1)^{n+1} a_{n1}M_{n1}
> $$

**定义3**：

> **递归定义** 按第1列进行展开
> $$
> |A| = a_{11}A_{11} + a_{21}A_{21} + \cdots + a_{n1}A_{n1}
> $$

**定义4**：

> 若  $a_{ij} = 0$ ， $\forall i > j$ ，则主对角线下方所有元素都为0，称  $|A|$  为上三角行列式。
>
> 若  $a_{ij} = 0$ ， $\forall i < j$ ，则主对角线上方所有元素都为0，称  $|A|$  为下三角行列式。

我们接下来给出一些性质，此处略掉其中部分性质的详细的证明过程.

**性质1**：上三角（下三角）行列式值等于主对角元素的乘积.

**性质2**：若 $|A|$ 有一行（列）全为0，则 $|A|=0$ .

**性质3**：行列式 $|A|$ 某一行（列）乘以数$c$，得到新行列式 $|B|=c|A|$ .

**性质4**：对换 $|A|$ 的两个相邻行（列），所得行列式 $|B|=-|A|$ .

**性质5**：若$|A|$有两行（列）成比例（相等），则 $|A|=0$ .

**性质6**：行列式拆分 
$$
\begin{vmatrix} a_{11} & a_{12} & \cdots & a_{1n} \\ a_{11} + b_{11} & a_{12} + b_{12} & \cdots & a_{1n} + b_{1n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{nn} & a_{nn} & \cdots & a_{nn} \end{vmatrix} = \begin{vmatrix} a_{11} & a_{12} & \cdots & a_{1n} \\ a_{11} & a_{12} & \cdots & a_{1n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{nn} & a_{nn} & \cdots & a_{nn} \end{vmatrix} + \begin{vmatrix} a_{11} & a_{12} & \cdots & a_{1n} \\ b_{11} & b_{12} & \cdots & b_{1n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{nn} & a_{nn} & \cdots & a_{nn} \end{vmatrix}
$$

$$
|C| = \begin{vmatrix} a_{11} & a_{1r} + b_{1r} & \cdots & a_{1n} \\ a_{21} & a_{2r} + b_{2r} & \cdots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{n1} & a_{nr} + b_{nr} & \cdots & a_{nn} \end{vmatrix} 
= \begin{vmatrix} a_{11} & a_{1r} & \cdots & a_{1n} \\ a_{21} & a_{2r} & \cdots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{n1} & a_{nr} & \cdots & a_{nn} \end{vmatrix} + \begin{vmatrix} a_{11} & b_{1r} & \cdots & a_{1n} \\ a_{21} & b_{2r} & \cdots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{n1} & b_{nr} & \cdots & a_{nn} \end{vmatrix}
$$

**性质7**：行列式的某一行乘以一个数加到另外一行上或者某一列乘以一个数加到另外一列上，行列式的值不改变.

**性质8**：行列式的展开
$$
|A| =\sum_i a_{ki}A_{ki} =\sum_i a_{ik}A_{ik}
$$
**性质9**：行列式转置， $|A'| = |A|$.

### · 行列式展开和转置

我们这里恶趣味的给出性质8和9的证明过程：

> /proof/
>
> 先从列的角度证明行列式的展开
>
> 考虑如下相邻对换，既仅定义了相邻对换：
> $$
> 1 \cdots r-1 \quad r \cdots n \longrightarrow r \quad 1 \cdots r-1 \quad r+1 \cdots n
> $$
> 对于矩阵 $M_{ij}$：$|A| \rightarrow$ $r$ 次列的相邻对换 $|B|\Rightarrow |B| = (-1)^{r+1} |A|$.
> $$
> |B| = \begin{vmatrix}
> a_{1r} & a_{11} & \cdots & a_{1,r-1} & a_{1,r+1} & \cdots & a_{1n} \\
> a_{2r} & a_{21} & \cdots & a_{2,r-1} & a_{2,r+1} & \cdots & a_{2n} \\
> \vdots & \vdots & \ddots & \vdots & \vdots & \ddots & \vdots \\
> a_{nr} & a_{n1} & \cdots & a_{n,r-1} & a_{n,r+1} & \cdots & a_{nn}
> \end{vmatrix}
> $$
>
> $$
> \Rightarrow |B| = a_{1r} N_{1r} - a_{2r} N_{2r} + \cdots + (-1)^{n+r} a_{nr} N_{nr}
> $$
>
> 容易看出$\forall i$ ，$N_{ir} = M_{ir}$:
> $$
> \begin{align*}
> \Rightarrow |A| &= (-1)^{r+1} |B| = (-1)^{r+1} (a_{1r} M_{1r} - a_{2r} M_{2r} + \cdots + (-1)^{n+r} a_{nr} M_{nr})\\
> &= (-1)^{r+1} a_{1r} M_{1r} + (-1)^{r+2} a_{2r} M_{2r} + \cdots + (-1)^{n+r} a_{nr} M_{nr}\\
> \end{align*}
> $$
>
> $$
> |A| = a_{1r} A_{1r} + a_{2r} A_{2r} + \cdots + a_{nr} A_{nr}
> $$
>
> 即按第$r$列展开的展开式.

这个定理不只是按照第r列进行展开，我们还有更强的结论

首先我们引入 Kroneken 符号： 
$$
\delta_{ij} = \begin{cases}  1 &  i=j \\ 0 &  i \neq j  \end{cases}
$$
后面会用到该符号来叙述定理

> /theorem/
>
> 定理1：设 $|A|$ 为 $n$ 阶行列式，$1 \leq r, s \leq n$，则
> $$
> a_{1r} A_{1s} + a_{2r} A_{2s} + \cdots + a_{nr} A_{ns} = \delta_{rs} |A|
> $$
>
> > /proof/
> >
> > 若 $r=s$，已证；
> >
> > 下不妨设 $r<s$ ，构造一个新行列式，
> >
> > 新行列式将第s列的元素全部换位第r列（方便证明）
> >
> > 实际上s列无论元素是什么，结论都成立
> > $$
> > 0 = |C| = \begin{vmatrix}
> > a_{11} & \cdots & a_{1r} & \cdots & a_{1r} & \cdots & a_{1n} \\ \vdots & \ddots & \vdots & \ddots & \vdots & \ddots & \vdots \\
> > a_{k1} & \cdots & a_{kr} & \cdots & a_{kr} & \cdots & a_{kn} \\ \vdots & \ddots & \vdots & \ddots & \vdots & \ddots & \vdots \\
> > a_{n1} & \cdots & a_{nr} & \cdots & a_{nr} & \cdots & a_{nn} \end{vmatrix}
> > = a_{1r} A_{1s} + a_{2r} A_{2s} + \cdots + a_{nr} A_{ns}
> > $$
> > 后面推出的式子也称为 $|C|$ 按第 $s$ 列展开 
> >
> > $|A|$ 的第 $s$ 列元素与第 $r$ 列代数余子式的乘积之和为0.
> >
> > (本节课的一些结论在研究矩阵时仍会用到)
>
> ***
>
> 引理2：
> $$
> |A| = \begin{vmatrix} 
> a_{11} & \cdots & a_{1r}  & \cdots & a_{1n} \\
> \vdots & \ddots & \vdots & \ddots & \vdots  \\
> {0} & \cdots & a_{sr} & \cdots & {0}  \\
> \vdots & \ddots & \vdots & \ddots & \vdots \\
> a_{n1} & \cdots & a_{nr} & \cdots & a_{nn} 
> \end{vmatrix} = a_{sr} A_{sr}
> $$
>
> >  /proof/
> >
> >  $|A|$ 按第 $r$ 列进行展开
> >
> >  $$
> >  |A| = a_{1r} A_{1r} + a_{2r} A_{2r} + \cdots + a_{sr} A_{sr} + \cdots + a_{nr} A_{nr}
> >  $$
> >  $\forall i = s, \quad A_{ir} \neq 0$ 
> >
> >  $A_{ir}$ 中至少有一行为0 $\implies |A| = a_{sr} A_{sr}$
>
> ***
>
> 引理3： $|A| = a_{11} A_{11} + a_{12} A_{12} + \cdots + a_{1n} A_{1n}$ (按第 $r$ 行进行展开)
>
> （该结果可以推广至类似定理1的对偶结果）
>
> > /proof/
> >
> > 第$r$行元素的拆分：
> > $$
> > a_{r1} = a_{11} + 0 + \cdots + 0\\
> > a_{r2} = 0 + a_{12} + \cdots + 0\\
> > \cdots \cdots\\
> > a_{rn} = 0 + 0 + \cdots + a_{1n}\\
> > $$
> >
> > $$
> > \Rightarrow |A| = 
> > \begin{vmatrix}
> > a_{11} & a_{12} & \cdots & a_{1n} \\
> > a_{r1} & 0 & \cdots & 0 \\
> > \vdots & \vdots & \ddots & \vdots \\
> > a_{n1} & a_{n2} & \cdots & a_{nn}
> > \end{vmatrix}
> > +\begin{vmatrix}
> > a_{11} & a_{12} & \cdots & a_{1n} \\
> > 0 & a_{r2} & \cdots & 0 \\
> > \vdots & \vdots & \ddots & \vdots \\
> > a_{n1} & a_{n2} & \cdots & a_{nn}
> > \end{vmatrix}+ \cdots +
> > \begin{vmatrix}
> > a_{11} & a_{12} & \cdots & a_{1n} \\
> > 0 & 0 & \cdots & a_{rn} \\
> > \vdots & \vdots & \ddots & \vdots \\
> > a_{n1} & a_{n2} & \cdots & a_{nn}
> > \end{vmatrix}\\
> > $$
> >
> > $$
> > \Rightarrow \quad = a_{r1} A_{r1} + a_{r2} A_{r2} + \cdots + a_{rn} A_{rn}
> > $$
> >
> > 证毕.
>
> ***
>
> 定理4：设$|A|$为$n$阶行列式，$1 \leq r, s \leq n$，则
> $$
> a_{r1} A_{s1} + a_{r2} A_{s2} + \cdots + a_{rn} A_{sn} = \delta_{rs} |A|
> $$
>
> > /proof/
> >
> > 若$r=s$已证$\checkmark$ (引理3)
> >
> > 下不妨设$r<s$
> >
> > 构造新行列式，按$s$行展开
> > $$
> > 0 = |C| =
> > \begin{vmatrix}
> > a_{11} & a_{12} & \cdots & a_{1n} \\
> > a_{r1} & a_{r2} & \cdots & a_{rn} \\
> > a_{r1} & a_{r2} & \cdots & a_{rn} \\
> > a_{n1} & a_{n2} & \cdots & a_{nn}
> > \end{vmatrix}
> > = a_{r1} A_{s1} + a_{r2} A_{s2} + \cdots + a_{rn} A_{sn}
> > $$
> >
> > 证毕.

性质8的证明全部结束.

下面证明性质9：

> /proof/
>
> 对阶数进行归纳 $n=1$ 成立 
>
> $n-1$ 阶成立 $\checkmark$ 证$n$阶
> $$
> |A| = a_{11} M_{11} - a_{21} M_{21} + \cdots + (-1)^{n+1} a_{n1} M_{n1}
> $$
> $\forall i, j$, $N_{ji}$ 是 $M_{ij}$ 的转置，
>
> 由归纳假设得 $N_{ji} = M_{ij}$, $\forall i, j$
> $$
> |A| = a_{11} N_{11} - a_{21} N_{21} + \cdots + (-1)^{n+1} a_{n1} N_{n1}
> = |A'| 
> $$
> (按照第一行进行转置)

## Part 2 行列式计算

$$
(*) \quad 
\begin{cases}
a_{11} x_1 + a_{12} x_2 + \cdots + a_{1n} x_n = b_1 \\
a_{21} x_1 + a_{22} x_2 + \cdots + a_{2n} x_n = b_2 \\
\vdots \\
a_{n1} x_1 + a_{n2} x_2 + \cdots + a_{nn} x_n = b_n
\end{cases}
$$

设(*)有解，系数行列式
$$
|A| = \begin{vmatrix}
a_{11} & a_{12} & \cdots & a_{1n} \\
a_{21} & a_{22} & \cdots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{n1} & a_{n2} & \cdots & a_{nn}
\end{vmatrix}
$$
先考虑二阶、三阶时，分母不动

分子由数字列替换对应列，推广到 $n$阶：

$$
|A_i| = \begin{vmatrix}
b_1 & a_{12} & \cdots & a_{1n} \\
b_2 & a_{22} & \cdots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
b_n & a_{n2} & \cdots & a_{nn}
\end{vmatrix} = \begin{vmatrix}
a_{11} x_1 + a_{12} x_2 + \cdots + a_{1n} x_n & a_{12} & \cdots & a_{1n} \\
a_{21} x_1 + a_{22} x_2 + \cdots + a_{2n} x_n & a_{22} & \cdots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{n1} x_1 + a_{n2} x_2 + \cdots + a_{nn} x_n & a_{n2} & \cdots & a_{nn}
\end{vmatrix}
$$
利用性质化简
$$
= \begin{vmatrix}
a_{11} x_1 & a_{12} & \cdots & a_{1n} \\
a_{21} x_1 & a_{22} & \cdots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{n1} x_1 & a_{n2} & \cdots & a_{nn}
\end{vmatrix} = x_1 \cdot \begin{vmatrix}
a_{11} & a_{12} & \cdots & a_{1n} \\
a_{21} & a_{22} & \cdots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{n1} & a_{n2} & \cdots & a_{nn}
\end{vmatrix} = x_1 \cdot |A|
$$
若(*)有解，
$$
\Rightarrow \quad x_1=\frac {|A_1|}{|A|}\quad , \quad \cdots \quad , \quad x_n=\frac {|A_n|}{|A|}
$$

### · Cramer 法则 

若 $|A| \neq 0$，则(*) 有唯一解，
$$
x_1=\frac {|A_1|}{|A|}\quad , \quad \cdots \quad , \quad x_n=\frac {|A_n|}{|A|}
$$

> /proof/
>
> 若 (*) 有解，则解必为如上形式。
>
> 此处仅证了存在的唯一性，未证解的存在性.
>
> 只要证明 $x_i = \frac{|A_i|}{|A|}$ 确为 (*) 的解，即可.
>
> 其中
> $$
> |A_i| = \begin{vmatrix}
> a_{11} & \cdots & b_1 & \cdots & a_{1n} \\
> a_{21} & \cdots & b_2 & \cdots & a_{2n} \\
> \vdots & \ddots & \vdots & \ddots & \vdots \\
> a_{n1} & \cdots & b_n & \cdots & a_{nn}
> \end{vmatrix}
> $$

下面我们来证明解的存在性

> /proof/
> $$
> a_{11} A_{s1} + a_{r2} A_{s2} + \cdots + a_{rn} A_{sn} = \delta_{rs} |A| 
> $$
>
> $$
> \sum_{j=1}^n a_{ij} A_{sj} = \delta_{rs} |A|
> $$
>
> 然后对行列式元素求和
> $$
> \sum_{i=1}^m a_{i1} +\sum_{i=1}^m a_{i2}+\cdots + \sum_{i=1}^m a_{in}=\sum_{j=1}^n \sum_{i=1}^m a_{ij}
> $$
>
> > 这里注意一点：
> > $$
> > \sum_{j=1}^n \sum_{i=1}^m a_{ij}=\sum_{i=1}^m \sum_{j=1}^n a_{ij}
> > $$
> > 以后若对一个长方形的二维行列式进行求和，如果行列括号的位置无改变，那么行列括号可以交换次序.
>
> $$
> x_j = \frac{|A_j|}{|A|} = \frac{1}{|A|} \sum_{i=1}^n b_i A_{ij}
> $$
>
> 验证(*) 的第k个方程：
> $$
> \sum_{j=1}^n a_{kj} x_j = b_k\quad , \quad \forall k\geq 1
> $$
>
> $$
> \begin{align*}
> \sum_{j=1}^n a_{kj} x_j 
> &= \sum_{j=1}^n \left( a_{kj} \frac{1}{|A|} \sum_{i=1}^n b_i A_{ij} \right) = \frac{1}{|A|} \sum_{j=1}^n \sum_{i=1}^n a_{kj} b_i A_{ij}\\
> &=  \frac{1}{|A|} \sum_{i=1}^n b_i \left( \sum_{j=1}^n a_{kj} A_{ij} \right)\\
> &= \frac{1}{|A|} \sum_{i=1}^n b_i \delta_{ki} |A| = b_k \quad (i=k, 1; i \neq k, 0)
> \end{align*}
> $$
>

有了Cramer法则后，相当于把求解$n$元线性方程组的问题转化成求计算行列式的问题。

 当阶数$n$过大，仅按定义（某行、列）展开，计算量太大，这时候尝试降价计算

> $$
> |A| = \begin{vmatrix} a_{11} & \cdots & a_{1s} & \cdots & a_{1m} \\ \vdots & \ddots & \vdots & \ddots & \vdots \\ 0 & \cdots & a_{rs} & \cdots & 0 \\ \vdots & \ddots & \vdots & \ddots & \vdots \\ a_{n1} & \cdots & a_{ns} & \cdots & a_{nn} \end{vmatrix} = a_{rs} A_{rs}
> $$
>
> 计算行列式的值时，利用行列式的性质， 将行列式的某行或某一列化出尽可能多的零， 再按这一行或这一列展开，进行降阶处理。
>
> > 性质3：行列式的某一行或某一列乘C，得到的值是原来行列式的C倍
> >
> > 性质7：行列式的某一行乘以一个数加到另外一行上或者某一列乘以一个数加到另外一行上，行列式的值不改变
>

### · Vandermonde 行列式

$$
V_n = \begin{vmatrix} 1 & x_1 & x_1^2 & \cdots & x_1^{n-2} & x_1^{n-1} \\ 1 & x_2 & x_2^2 & \cdots & x_2^{n-2} & x_2^{n-1} \\ \vdots & \vdots & \vdots & \ddots & \vdots & \vdots \\ 1 & x_{n-1} & x_{n-1}^2 & \cdots & x_{n-1}^{n-2} & x_{n-1}^{n-1} \\ 1 & x_n & x_n^2 & \cdots & x_n^{n-2} & x_n^{n-1} \end{vmatrix}
$$

> /proof/
> $$
> = \begin{vmatrix}
> 1 & x_1 - x_n & x_1^2 - x_1 x_n & \cdots & x_1^{n-2} - x_1^{n-3} x_n & x_1^{n-1} - x_1^{n-2} x_n \\
> 1 & x_2 - x_n & x_2^2 - x_2 x_n & \cdots & x_2^{n-2} - x_2^{n-3} x_n & x_2^{n-1} - x_2^{n-2} x_n \\
> \vdots & \vdots & \vdots & \ddots & \vdots & \vdots \\
> 1 & x_{n-1} - x_n & x_{n-1}^2 - x_{n-1} x_n & \cdots & x_{n-1}^{n-2} - x_{n-1}^{n-3} x_n & x_{n-1}^{n-1} - x_{n-1}^{n-2} x_n \\
> 1 & 0 & 0 & \cdots & 0 & 0
> \end{vmatrix} 
> $$
> 按照最后一行进行展开
> $$
> =(-1)^{n+1} 
> \begin{vmatrix}
> x_1 - x_n & x_1^2 - x_1 x_n & \cdots & x_1^{n-2} - x_1^{n-3} x_n & x_1^{n-1} - x_1^{n-2} x_n \\
> x_2 - x_n & x_2^2 - x_2 x_n & \cdots & x_2^{n-2} - x_2^{n-3} x_n & x_2^{n-1} - x_2^{n-2} x_n \\
> \vdots & \vdots & \ddots & \vdots & \vdots \\
> x_{n-1} - x_n & x_{n-1}^2 - x_{n-1} x_n & \cdots & x_{n-1}^{n-2} - x_{n-1}^{n-3} x_n & x_{n-1}^{n-1} - x_{n-1}^{n-2} x_n \\
> \end{vmatrix}
> $$
> 根据性质化简展开
> $$
> = (-1)^{n+1} (x_1 - x_n) (x_2 - x_n) \cdots (x_{n-1} - x_n) \cdot \begin{vmatrix} 1 & x_1 & \cdots & x_1^{n-3} & x_1^{n-2} \\ 1 & x_2 & \cdots & x_2^{n-3} & x_2^{n-2} \\ \vdots & \vdots & \ddots & \vdots & \vdots \\ 1 & x_{n-1} & \cdots & x_{n-1}^{n-3} & x_{n-1}^{n-2} \end{vmatrix}
> $$
> 化为递推式：
> $$
> \implies V_n = (x_n - x_1) (x_n - x_2) \cdots (x_n - x_{n-1}) V_{n-1} \\
> \implies V_n = \prod_{1 \leq i < j \leq n} (x_j - x_i) 
> $$
> 事实上，我们有时候也会用到未定元降幂排列.

$$
V_n = \begin{vmatrix}
 x_1^{n-1} & x_1^{n-2} & \cdots & x_1 & 1 \\
 x_2^{n-1} & x_2^{n-2} & \cdots & x_2 & 1 \\
 \vdots & \vdots & \ddots & \vdots & \vdots \\
 x_n^{n-1} & x_n^{n-2} & \cdots & x_n& 1 \\ \end{vmatrix}
$$

> $(n-1) + (n-2) + \cdots + 1 = \frac{n(n-1)}{2}$ 次列换对换
> $$
> \widetilde{V}_n = (-1)^{\frac{n(n-1)}{2}} V_n = \prod_{1 \leq i < j \leq n} (x_i - x_j)
> $$
> 结束.

### · 递推法

/example/    多项式的友阵的特征多项式
$$
F_n = 
\begin{vmatrix}
\lambda & 0 & \cdots & 0 & a_n \\
-1 & \lambda & \cdots & 0 & a_{n-1} \\
\vdots & \vdots & \ddots & \vdots & \vdots \\
0 & 0 & \cdots & \lambda & a_2 \\
0 & 0 & \cdots & -1 & \lambda + a_1 
\end{vmatrix}
$$

> /proof/
>
> 按第一行展开：
> $$
> \begin{align*}
> F_n &= (-1)^{n+1} \lambda \cdot F_{n-1} + (-1)^{n+1} a_n (-1)^{n-1} = \lambda \cdot F_{n-1} + a_n, \quad F_1 = \lambda + a_1\\
> &= \lambda (\lambda F_{n-2} + a_{n-1}) + a_n = \lambda^2 F_{n-2} + a_{n-1} \lambda + a_n\\
> &= \lambda (\lambda F_{n-2} + a_{n-1}) + a_n = \lambda^2 F_{n-2} + a_{n-1} \lambda + a_n
> \end{align*}
> $$
> 结束.

***

### · 箭型行列式

$$
 |A| = \begin{vmatrix} x & a & a & \cdots & a & a \\ a & x & a & \cdots & a & a \\ \vdots & \vdots & \vdots & \ddots & \vdots & \vdots \\ a & a & a & \cdots & x & a \\ a & a & a & \cdots & a & x \end{vmatrix} 
$$

> 利用性质7
>
> $$
> = \begin{vmatrix} x + (n-1)a & x + (n-2)a & x + (n-3)a & \cdots & x + (n-1)a \\ a & x & a & \cdots & a \\ \vdots & \vdots & \vdots & \ddots & \vdots \\ a & a & a & \cdots & x \end{vmatrix}
> $$
> 再进行展开
> $$
> = (x + (n-1)a) \cdot \begin{vmatrix} 1 & 1 & 1 & \cdots & 1 \\ a & x & a & \cdots & a \\ \vdots & \vdots & \vdots & \ddots & \vdots \\ a & a & a & \cdots & x \end{vmatrix} = (x + (n-1)a) \cdot \begin{vmatrix} 1 & 1 & 1 & \cdots & 1 \\ 0 & x-a & 0 & \cdots & 0 \\ \vdots & \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & 0 & \cdots & x-a \end{vmatrix}
> $$
> 容易发现这是一个上三角行列式
> $$
> = (x + (n-1)a) (x-a)^{n-1}
> $$
> 结束.

***

### · 提取因子法

$$
|A| = \begin{vmatrix} x & y & z & w \\ y & x & w & z \\ z & w & x & y \\ w & z & y & x \end{vmatrix}
$$

> 强行拆解会非常麻烦
>
> 通过观察我们可以发现每一行和相同
>
> start！
> $$
> = \begin{vmatrix}
> x+y+z+w & y & z & w \\
> x+y+z+w & x & w & z \\
> x+y+z+w & z & w & x \\
> x+y+z+w & w & x & y 
> \end{vmatrix}
> =(A)
> \begin{vmatrix}
> 1 & y & z & w \\
> 1 & x & w & z \\
> 1 & z & w & x \\
> 1 & w & x & y 
> \end{vmatrix}
> $$
> $A=x+y+z+w$
>
> 然后利用性质化简
> $$
> = (A) 
> \begin{vmatrix}
> 1 & y & z & w \\
> 0 & x-y & w-z & z-w \\
> 0 & w-y & x-z & y-w \\
> 0 & z-y & y-z & x-w 
> \end{vmatrix}
> $$
> 然后按照第一列展开
> $$
> =(A)\begin{vmatrix}
> x-y & w-z & z-w \\
> w-y & z-z & y-w \\
> z-y & y-z & x-w 
> \end{vmatrix}
> $$
> 然后在列上使用性质7
> $$
> =\begin{vmatrix} x+w-y-z & w-z & 0 \\ x+w-y-z & x-z & x+y-z-w \\ 0 & y-z & x+y-z-w \end{vmatrix}
> $$
> 提取公因子
> $$
> =(ABC)
> \begin{vmatrix}
> 1 & w-z & 0 \\
> 1 & x-z & 1 \\
> 0 & y-z & 1 
> \end{vmatrix}
> =(ABC)
> \begin{vmatrix}
> 1 & w-z & 0 \\
> 0 & x-w & 1 \\
> 0 & y-z & 1 
> \end{vmatrix}
> $$
> $B=x+w-y-z$
>
> $C=x+y-z-w$
>
> 按照第一列进行展开
> $$
> =(ABC)
> \begin{vmatrix}
> 1 & w-z & 0 \\
> 0 & x-w & 1 \\
> 0 & y-z & 1
> \end{vmatrix}
> =(ABC)
> \begin{vmatrix}
> x-w & 1 \\
> y-z & 1
> \end{vmatrix}
> $$
> 结束.

***

### · 拆分法

/example/    证明
$$
\begin{vmatrix}
ax + by & ay + bz & az + bx \\
ay + bz & az + bx & ax + by \\
az + bx & ax + by & ay + bz 
\end{vmatrix}
  = (a^3 + b^3) 
  \begin{vmatrix}
  x & y & z \\
  y & z & x \\
  z & x & y 
  \end{vmatrix}
$$

> /proof/
> $$
> = \begin{vmatrix} ax & ay + bz & az + bx \\ ay & az + bx & ax + by \\ az & ax + by & ay + bz \end{vmatrix} + \begin{vmatrix} by & ay + bz & az + bx \\ bz & az + bx & ax + by \\ bx & ax + by & ay + bz \end{vmatrix} 
> $$
> 后续过程略.

## Part 3 等价定义

为了决定行列式中每一项的符号，我们引进逆序数的概念。

### · 逆序数

> **定义1**： 我们称 $n$ 个数  $1, 2, \ldots, n$  的排列 $(1, 2, \ldots, n)$ 为常序排列，即数字从小到大的排列为常序排列。如果在一个排列中  $j$  排在  $i$  之前但是 $j > i$ ，则称这是一个逆序对。一个排列的所有逆序对的总个数称为这个排列的逆序数。

> [!important]
>
> 逆序数的求法是：设排列为  $(k_1, k_2, \ldots, k_n)$ ，先看  $k_1$  后面有多少个数小于  $k_1$ ，不妨设为  $m_1$ ；再看  $k_2$  后面有多少个数小于  $k_2$ ，不妨设为  $m_2$ ；最后看  $k_{n-1}$  后面有多少个数小于  $k_{n-1}$ ，不妨设为  $m_{n-1}$ 。由定义，排列  $(k_1, k_2, \ldots, k_n)$  的逆序数就等于  $m_1 + m_2 + \cdots + m_{n-1}$ ，通常记为  $N(k_1, k_2, \ldots, k_n)$ 。例如，常序排列  $(1, 2, \ldots, n)$  的逆序数为零。

**引理1**：设  $(k_1, k_2, \ldots, k_n) \in S_n$ ，若将其中  $k_i$  与  $k_j$  的位置对换，其余数不动，则排列的奇偶性改变。即奇排列变为偶排列，偶排列变为奇排列。

> **证明**：首先我们考虑相邻两个数的对换。若是  $k_i > k_{i+1}$ ，则对换后逆序数减少了 1；若  $k_i < k_{i+1}$ ，则对换后逆序数增加了 1，无论哪种情形，奇偶性都改变了。再考虑一般情形。 $k_i$  与  $k_j$  的对换可通过相邻两个数的对换来实现：不妨设  $i < j$ ，将  $k_i$  与  $k_{i+1}$  对换，再与  $k_{i+2}$  对换，…，最后与  $k_j$  对换（共换了  $j - i$  次）；再将  $k_j$  与  $k_{j-1}$  对换，再与  $k_{j-2}$  对换，…，最后与  $k_{i+1}$  对换（共换了  $j - i - 1$  次）；此时  $k_j$  到了  $k_i$  原来的位置， $k_i$  到了原来  $k_j$  的位置。这样一共换了  $2(j - i) - 1$  次，因此改变了奇偶性

**引理2**：设  $n \geq 2$ ，则  $S_n$  中的奇排列与偶排列各占一半。

> **证明** 设  $S_n$  中的奇排列有  $p$  个，偶排列有  $q$  个。由于  $n \geq 2$ ，故可将每个奇排列的头两个数对换一下，则所有的奇排列变成了互不相同的偶排列，因此  $p \leq q$ 。同理可证  $q \leq p$ ，故  $p = q$ .

> [!caution]
>
> 逆序数的实际意义是，它给出了任一排列与常序排列之间相互转换的关系。

**引理3**：设  $(k_1, k_2, \cdots, k_n) \in S_n$ ，则通过  $N(k_1, k_2, \cdots, k_n)$  次相邻对换，可将  $(k_1, k_2, \cdots, k_n)$  变为常序排列  $(1, 2, \cdots, n)$ 。

> **证明** 对  $n$  进行归纳。 $n = 1$  时结论显然成立，设对  $1, 2, \cdots, n - 1$  的任一排列结论成立。设  $n$  在排列  $(k_1, k_2, \cdots, k_n)$  的第  $i$  位置，即  $k_i = n$ ，其逆序数为  $m_i$ （这时  $m_i = n - i$ ）。将  $k_i$  与  $k_{i+1}$  对换，再与  $k_{i+2}$  对换，…，最后与  $k_n$  对换（共换了  $m_i$  次），此时  $n$  就到了最末一位。注意到
> $$
> N(k_1, k_2, \cdots, k_n) = m_i + N(k_1, \cdots, k_{i-1}, k_{i+1}, \cdots, k_n),
> $$
> 且  $(k_1, \cdots, k_{i-1}, k_{i+1}, \cdots, k_n) \in S_{n-1}$ ，由归纳假设知  $(k_1, \cdots, k_{i-1}, k_{i+1}, \cdots, k_n)$  经过  $N(k_1, \cdots, k_{i-1}, k_{i+1}, \cdots, k_n)$  次相邻对换可变为常序排列  $(1, 2, \cdots, n - 1)$ ，因此由上面的讨论知  $(k_1, k_2, \cdots, k_n)$  经过  $N(k_1, k_2, \cdots, k_n)$  次相邻对换可变为常序排列  $(1, 2, \cdots, n)$ .

### · 等价定义

**定义**：设 $|A|$ 是的 $n$ 阶行列式，则

$$
|A| = \sum_{(k_1, k_2, \cdots, k_n) \in S_n} (-1)^{N(k_1, k_2, \cdots, k_n)} a_{k_1 1} a_{k_2 2} \cdots a_{k_n n}.
$$

> [!important]
>
> 我们也可以将上式作为行列式值的定义，从而推出行列式的诸性质。不过这个定义看着还是挺难受的。

## Part 4 Laplace定理

### · 定义

**定义1** ：设  $|A|$  为 n 阶行列式， $1 \leq k \leq n$ 

选定  $1 \leq i_1 \leq i_2 \leq \cdots \leq i_n \leq n$ ， $1 \leq j_1 \leq j_2 \leq \cdots \leq j_k \leq n$  定列

将  $|A|$  的第  $i_1$  行，第  $i_2$  行，…，第  $i_k$  行与第  $j_1$  列，第  $j_2$  列，…第  $j_k$  列

交叉点上的元素按原来的顺序构成一个 k 阶行列式，称为  $|A|$  的 k 阶子式

记为  
$$
A_{j_1 j_2 \ldots j_k}^{i_1 i_2 \ldots i_k}  =  \begin{vmatrix} a_{i_1 j_1} & a_{i_1 j_2} & \cdots & a_{i_1 j_k} \\ a_{i_2 j_1} & a_{i_2 j_2} & \cdots & a_{i_2 j_k} \\ \vdots & \vdots & \ddots & \vdots \\ a_{i_k j_1} & a_{i_k j_2} & \cdots & a_{i_k j_k} \end{vmatrix}
$$
删去第  $i_1$ ， $i_2$ ，…， $i_k$  行，第  $j_1$ ， $j_2$ ，…， $j_k$  列，

剩余的按原来顺序构成一个 $(n-k)$  阶子式，称为前面 k 阶子式的余子式记为  $M(_{j_1 j_2 \ldots j_k}^{i_1 i_2 \ldots i_k})$ 

代表余式 
$$
\hat{A}(_{j_1 j_2 \ldots j_k}^{i_1 i_2 \ldots i_k}) = (-1)^{i_1 + i_2 + \cdots + i_k + j_1 + j_2 + \cdots + j_k} M(_{j_1 j_2 \ldots j_k}^{i_1 i_2 \ldots i_k})
$$
**定理 2 (Laplace 定理)** 

$|A|$  中给定 k 行 (列)，则包含于这 k 行 (列) 中所有 k 阶子式与其代数余子式乘积之和等于  $|A|$ .

给定  $1 \leq i_1 < i_2 < \cdots < i_k \leq n$ ，则
$$
|A| = \sum_{1 \leq j_1 < j_2 < \cdots < j_k \leq n} A(_{j_1 j_2 \ldots j_k}^{i_1 i_2 \ldots i_k}) \hat{A}(_{j_1 j_2 \ldots j_k}^{i_1 i_2 \ldots i_k}) \cdots (*)
$$
给定  $1 \leq i_1 < i_2 < \cdots < i_k \leq n$ ，则


$$
|A| = \sum_{1 \leq j_1 < j_2 < \cdots < j_k \leq n} A(_{j_1 j_2 \ldots j_k}^{i_1 i_2 \ldots i_k}) \hat{A}(_{j_1 j_2 \ldots j_k}^{i_1 i_2 \ldots i_k})
$$

### · 分块行列式

部分分块行列式可以视作 Laplace 变换的推论，但是我懒，所以全部放上.

**三角分块行列式**：
$$
\begin{vmatrix}
A & B \\
O & D
\end{vmatrix}
= |A| \cdot |D|,\quad
\begin{vmatrix}
A & O \\
C & D
\end{vmatrix}
= |A| \cdot |D|
$$

以及分块左三角和右三角


$$
\begin{vmatrix}
O & B \\
C & D
\end{vmatrix}
=
\begin{vmatrix}
A & B \\
C & O
\end{vmatrix}
= (-1)^t |B| \cdot |C|
$$

**对称分块行列式**：

$$
\begin{vmatrix}
A & B \\
B & A
\end{vmatrix}
= |A + B| \cdot |A - B|
$$

其中  $A$  和  $B$  为同阶方阵.
