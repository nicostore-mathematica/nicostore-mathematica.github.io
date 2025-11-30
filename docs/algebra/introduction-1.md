---
title: 札记01-向量
createTime: 2025/11/29 22:20:34
permalink: /algebra/introduction-1/
---

线性代数的两个核心操作都和向量有关

- 向量加操作可以得到 $\vec{v}+\vec{w}$
- 乘以一个数可以得到 $c\vec{v},c\vec{w}$

组合这些操作,可以得到的 $c\vec{v}+c\vec{w}$ 线性组合(**linear combination**)
$$
\text{Linear combination}:c\vec{v}+c\vec{w}\\
c 
\left[\begin{matrix} 
1  \\
1	\\
\end{matrix} \right]
+ d 
\left[\begin{matrix} 
2  \\
3	\\
\end{matrix} \right]
= 
\left[\begin{matrix} 
c+2d  \\
c+3d	\\
\end{matrix} \right]
$$
向量 $c\vec{v}$ 都在一条直线上.如果 $\vec{w}$ 不在这一条直线上,组合 $c\vec{v}+c\vec{w}$ 形成了了整个的二维空间.我必须用二维这个词是因为线性代数允许更高维的平面.如果从四维空间的四个向量开始,$\vec{u},\vec{v},\vec{w},\vec{z}$,它们的 $c\vec{u}+d\vec{v}+d\vec{w}+f\vec{z}$ 组合很可能会形成那个空间

但不总是.这些线和组合可以处以同一条直线上

我们有两个数字$v_1,v_2$,这样一对数字产生了二维向量 $\vec{v}$:
$$
\text{column vector:}\quad v = \left[ \begin{array} { c } { v _ { 1 } } \\ { v _ { 2 } } \end{array} \right] \quad \begin{array} { l } { v _ { 1 } = \text { first component } } \\ { v _ { 2 } = \text { second component } } \end{array}
$$
向量加法如下,分量+分量
$$
\begin{array} { l } { \text { VECTOR } } \\ { \text { ADDITION } } \end{array} \quad v = \left[ \begin{array} { c } { v _ { 1 } } \\ { v _ { 2 } } \end{array} \right] \text { and } w = \left[ \begin{array} { c } { w _ { 1 } } \\ { w _ { 2 } } \end{array} \right] \quad \text { add to } \quad v + w = \left[ \begin{array} { c } { v _ { 1 } + w _ { 1 } } \\ { v _ { 2 } + w _ { 2 } } \end{array} \right]
$$
减法类似.

另外一个基础操作是数乘(scalar multiplication)
$$
\begin{array} { l l } { \text { SCALAR Multiplication:} } & { 2 v = \left[ \begin{array} { c } { 2 v _ { 1 } } \\ { 2 v _ { 2 } } \end{array} \right] \text { and } - v = \left[ \begin{array} { c } { - v _ { 1 } } \\ { - v _ { 2 } } \end{array} \right] } \end{array}
$$
$\vec{v}$ 和 $-\vec{v}$ 相加得到的结果是 $\vec{0}$ (不是数字0). $\vec{0}$ 向量的分量是 0 和 0 .线性代数就是在 $\vec{v}+\vec{w},c\vec{v}$ 这些**向量加法和数乘下构建起来的**

> Definition: Linear combination of $\vec{v}$ and $\vec{w}$
>
> $c\vec{v}$ 和 $d\vec{w}$  的和(sum),是   $\vec{v}$  和 $\vec{w}$ 的**线性组合**

四个特别的线性组合是：和，差，0乘和数乘 (sum,difference,zero and scalar multiple of c$\vec{v}$)
$$
\begin{aligned}

1 \vec{v} + 1 \vec{w} & = \text { sum of vectors in Fig } 1.1 \mathrm { a } \\ 
1 \vec{v} - 1 \vec{w} & = \text { difference of vectors in Fig } 1.1 \mathrm {b} \\ 
0 \vec{v} + 0 \vec{w} & = \text { zero vector } \\ 
c \vec{v} + 0 \vec{w} & = \text { vector } c \vec{v} \text { in the direction of } \vec{v} 

\end{aligned}
$$
零向量总是一个可能的组合,只要系数是`0`即可.任何我们看到一个向量空间(space of vector),零向量也是包括在内的.

从现在开始,我们写向量的时候,有下面约定 
$$
\vec { v } = \left[ \begin{array} { c } { 1 } \\ { 1 } \\ { - 1 } \end{array} \right] \text { ,  }\quad   \vec { v } = ( 1,1 , - 1 )
$$
主要原因是为了节省空间,注意 $\vec{v} = (1,1,-1)$ 实际上还是一个**列向量**,只是为了表示方便.行向量是列向量的转置.三维向量的线性组合和二维是一样的,只是多了一个坐标而已

对于一个向量$\vec{u}$,唯一的线性组合是 $c\vec{u}$.两个向量,组合有 $c\vec{u}+d\vec{v}$.三个向量是: $ c\vec{u}+d\vec{v} + e\vec{w} $;c,d,e可以是任何值.假设 $\vec{u},\vec{v},\vec{w}$ 是三维空间向量.那么

1. $c\vec{u}$ 所有组合的图像是什么?
2. $c\vec{u}  +  d\vec{v}$  所有组合的图像是什么?
3. $c\vec{u}  +  d\vec{v}  +  e\vec{w}$ 所有组合的图像是什么?

答案取决于这些 $\vec{u},\vec{v},\vec{w}$ 向量,如果它们都是零向量(极端例子),那么这些所有的组合都是零向量.如果它们不是零向量.那么下面就是答案,这是我们学习的关键:

1. $c\vec{u}$ 的组合形成一条直线(fill a **line**)
2. $c\vec{u}  +  d\vec{v}$ 形成一个平面(fill a **plane**)
3. $c\vec{u}  +  d\vec{v}  +  e\vec{w}$ 形成一个三维空间

零向量(0,0,0)是在第一种情况的直线上,因为c可以是0;它也在平面上,因为c,d可以是0.向量 $c \vec{u}$ 的线是无限长的(前进方向或者后退方向). 需要特别让你关注的是,所有 $ c\vec{u}  +  d\vec{v}$ (组合两个三维下的向量)的那个平面:
