---
title: Chapter 2 矩阵
createTime: 2025/09/17 23:22:15
permalink: /algebra/algebra-2/
---

## Part 1 矩阵概念

**定义1**：

> 把 $mn$ 个数  $a_{ij} (1 \leq i \leq m, 1 \leq j \leq n)$  排成一个矩形阵列，称为一个  $m \times n$  阶矩阵。
> $$
> A = \begin{bmatrix} a_{11} & a_{12} & \cdots & a_{1n} \\ a_{21} & a_{22} & \cdots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{m1} & a_{m2} & \cdots & a_{mn} \end{bmatrix} = (a_{ij})_{m \times n}
> $$
>  $a_{ij}$  称为第  $i, j$  元素。若  $a_{ij} ( \forall i, j) \in \mathbb{R}$  (C)，则称为实(复)矩阵。
>
> 若  $\forall i, j$ ， $a_{ij} = 0$ ，则称  $A$  为零矩阵，记为  $O_{mn}$ 。
>
> 若  $m = n$ ，称  $A$  为  $n$  阶方阵。
>
> 设  $A = (a_{ij})_{n \times n}$  为方阵，则称  $a_{ii}, a_{12}, \cdots, a_{nn}$  连成一线为  $A$  的主对角线。
>
> 若  $\forall i \neq j$ ， $a_{ij} = 0$ ，则称  $A$  为对角阵，简记为  $diag \{a_{11}, a_{22}, \cdots, a_{nn}\}$ 。
>
> $$
> A = \begin{bmatrix} a_{11} & 0 & \cdots & 0 \\ 0 & a_{22} & \cdots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \cdots & a_{nn} \end{bmatrix}
> $$
> 进一步，若  $a_{ii} = a_{22} = \cdots = a_{nn} = 1$ ，这样的对角阵称为单位阵，记为  $I_n$ 。
>
> $$
> I_n = \begin{bmatrix} 1 & 0 & \cdots & 0 \\ 0 & 1 & \cdots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \cdots & 1 \end{bmatrix}
> $$
> 若  $a_{ij} = 0 ( \forall i > j)$ ，则称  $A$  为上三角阵，若  $a_{ij} = 0 ( \forall i < j)$ ，则称为下三角阵。

**定义2**：

> 设  $A = (a_{ij})_{m \times n}$ ， $B = (b_{ij})_{s \times t}$ 。
>
> $$
> A = B \Leftrightarrow m = s, n = t, a_{ij} = b_{ij} ( \forall 1 \leq i \leq m, 1 \leq j \leq n)
> $$

**定义3**：

> 设  $A = (a_{ij})_{m \times n}$ ，则  $(a_{1i}, a_{2i}, \cdots, a_{mi})$  称为  $A$  的第  $i$  个行向量。
>
>
>  $\begin{bmatrix} a_{1j} \\ a_{2j} \\ \vdots \\ a_{mj} \end{bmatrix}$ 称  $1 \times n$  矩阵，  $(a_1, a_2, \cdots, a_n)$  称为  $n$  维行向量，称  $m \times 1$  矩阵  $\begin{bmatrix} a_1 \\ a_2 \\ \vdots \\ a_m \end{bmatrix}$  称为  $n$  维列向量。
>
> 记  $M_n(\mathbb{R})$  为  $n$  阶实方阵全体构成的集合
>
> 映射（函数）： 
> $$
> det: M_n(\mathbb{R}) \longrightarrow \mathbb{R}\quad \quad
> A \longmapsto |A| = det(A)
> $$

**Question**:

(i) $n$ 阶行列式的值在多大程度上反映 $n$ 阶方阵的性质？

(ii) 映射 $\text{det}$ 具有怎样的性质？

### · 矩阵运算

**定义4**：矩阵加减

> 设 $A = (a_{ij})_{m \times n}$ ， $B = (b_{ij})_{m \times n}$ 
>
> $$
> A + B \overset{\text{def}}{=} (a_{ij} + b_{ij})_{m \times n}\quad\quad
> A - B \overset{\text{def}}{=} (a_{ij} - b_{ij})_{m \times n} \quad\quad
> A_{m \times n} + O_{m \times n} = A_{m \times n}
> $$
> (1). 交换律：
> $$
> A + B = B + A
> $$
> (2). 结合律：
> $$
> (A + B) + C = A + (B + C)
> $$
> (3). 零矩阵：
> $$
> A + 0 = A
> $$
> (4). 负矩阵：
> $$
> A + (-A) = 0
> $$
> (5). 
> $$
> A - B = A + (-B)
> $$

**定义5**：矩阵数乘

> 设  $A = (a_{ij})_{m \times n}$ ， $C$  为常数， $c$  与  $A$  的数乘为 (scalar product)
>
> $$
> c \cdot A \overset{\text{def}}{=} (c \cdot a_{ij})_{m \times n}
> $$
> 负矩阵
> $$
> -A \overset{\text{def}}{=} (-1) \cdot A = (-a_{ij})_{m \times n}
> $$
> (1). 数的分配律： 
> $$
> (c + d) \cdot A = c \cdot A + d \cdot A
> $$
> (2). 矩阵的分配律：
> $$
> c \cdot (A + B) = c \cdot A + c \cdot B
> $$
> (3). 数乘的结合律：
> $$
> (c \cdot d) \cdot A = c \cdot (d \cdot A)
> $$
> (4). 数乘单位元：
> $$
> 1 \cdot A = A
> $$
> (5). 数乘零元： 
> $$
> 0 \cdot A_{m \times n} = O_{m \times n}
> $$

**定义6**：矩阵乘法

> 设  $A = (a_{ij})_{m \times k}$ ， $B = (b_{ij})_{k \times n}$ ，定义  $A$  与  $B$  的乘积  $C$  是  $m \times n$  矩阵，其元素
>
> $$
> c_{ij} = a_{i1}b_{1j} + a_{i2}b_{2j} + \cdots a_{ik}b_{kj} = \sum_{r=1}^{k} a_{ir}b_{rj}
> $$
> (1). 只有 $A$ 的列数 = $B$ 的行数， $AB$ 才有意义。
>
> 
>
> (2). $AB$ 的行数 =  $A$  的行数， $AB$  的列数 =  $B$  的列数。
>
> $$
> \begin{align*}
> A _{m \times k}\cdot B _{k \times n}\rightarrow AB _{m \times n}
> \end{align*}
> $$
>
> (3). $AB$  的第  $(i,j)$  元素 = $A$ 的第 $i$ 行与 $B$ 的第 $j$ 列对应元素之和。
>
> (4). 矩阵乘法一般不满足交换律，即使  $AB, BA$  都有意义，但  $AB \neq BA$ 。
>
> - (1)  $A = (1 \quad 1 \quad 1)$ ， $B = \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}$ ， $AB = (3)$ ， $BA = \begin{pmatrix} 1 & 1 & 1 \\ 1 & 1 & 1 \end{pmatrix} \neq AB$ 
>
> - (2)  $A = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}$ ， $B = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}$ ， $AB = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix} \neq BA = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}$ 

**矩阵乘法性质**：

(1). 结合律：
$$
(AB) \cdot C = A \cdot (B \cdot C)
$$
(2). 分配律：
$$
(A + B) \cdot C = A \cdot C + B \cdot C,\quad A \cdot (B + C) = A \cdot B + A \cdot C
$$
(3). 与数乘的相容性：
$$
c \cdot (AB) = (c \cdot A) \cdot B = A \cdot (c \cdot B)
$$
(4). 单位元：记  $I_{m \times m}$ ：
$$
I_{m} \cdot A = A = A \cdot I_{n}
$$
然后我们来康康性质（1）的证明（很有精神地打字）

> $A = (a_{ij})_{m \times n}$, $B = (b_{ij})_{n \times p}$, $C = (c_{ij})_{p \times q}$ 
>
> 对于 $(AB)C$，先考虑 $AB$ 的第 $(i,j)$ 元素 $\sum_{k=1}^{n} a_{ik} b_{kj}$ 
>
> 再考虑 $(AB)C$ 的第 $(i,j)$ 元素 
> $$
> \sum_{r=1}^{p} (\sum_{k=1}^{n} a_{ik} b_{kr}) c_{rj} = \sum_{r=1}^{p} \sum_{k=1}^{n} a_{ik} b_{kr} c_{rj}
> $$
> 对于 $A(BC)$ ，先考虑 $BC$ 的第 $(k,i)$ 元素 $\sum_{r=1}^{p} b_{kr} c_{ri}$ $\Rightarrow$ 第 $(i,j)$ 元素 
> $$
> \sum_{k=1}^{n} a_{ik} (\sum_{r=1}^{p} b_{kr} c_{ri}) = \sum_{k=1}^{n} \sum_{r=1}^{p} a_{ik} b_{kr} c_{ri}
> $$
> $\Rightarrow (AB) \cdot C = A(BC)$ 成立
>
> PS：以后写 3 个矩阵相乘时：不用打括号

**定义7**：乘方

> 设 $A$ 为 $n$ 阶方阵，
>
> $$
> \forall k \geq 1,\quad A^k \overset{\text{def}}{=} \underbrace{A \cdot A \cdots A}_{k }
> $$
> PS：如果一个矩阵有平方，则它一定是方阵

**乘方的性质**：
$$
A^r \cdot A^s = A^{r+s}\\
(A^r)^s = A^{rs}  \quad  (r, s \in \mathbb{Z}^+) 
$$

> (1) 设  $A, B$  为  $n$  阶方阵，一般地
>
> $$
> (A \cdot B)^r = (AB)(AB) \cdots (AB) \neq A^r \cdot B^r
> $$
>
>
> $$
> AB  \neq BA \\
> (AB)^2  \neq 0, \quad A^2 B^2 = 0
> $$
>
> (2). 若  $AB = BA$ ，则  $(AB)^n = A^n B^n$ ，进而
> $$
> (A + B)^m = A^m + C_m^1 A^{m-1} B + \cdots + C_m^m AB^{m-1} + B^m
> $$
> 纯量阵  $c \cdot I_n = A \cdot (c \cdot I_n) = (c \cdot I_n) \cdot A = c \cdot A$ 
>
>
> $$
> (c \cdot I_n + A)^m = c^m \cdot I_n + C_m^1 c^{m-1} A + \cdots + C_m^m A^m
> $$
>
> (3). 矩阵乘法消去律一般不成立， $AB = AC$ 且  $A \neq 0$ 不能推出 $B = C$
>
> $A\neq 0,\quad B\neq 0$ 无法推出 $AB\neq 0$ .

**定义8**： 转置

> 设 $A = (a_{ij})_{m \times n}$ ， $A'$  是  $n \times m$  阶矩阵， $A' = (b_{ij})_{n \times m}$ 
>
> 其中  $b_{ij} = a_{ji}$ ，即  $A'$  的第  $i$  行就是  $A$  的第  $j$  列， $A'$  的第  $j$  列是  $A$  的第  $i$  行。
>
> 若  $A' = A$ ，则称  $A$  为对称阵；若  $A' = -A$ ，则称  $A$  为反对称阵
>
> 我们也可以给出如下性质：
> $$
> (A')' = A,\quad
> (A + B)' = A' + B',\quad
> (c \cdot A)' = c \cdot A',\quad
> (A \cdot B)' = B' \cdot A'
> $$

**定义9**：共轭

> $A = (a_{ij})_{m \times n}$ 为复矩阵，共轭
> $$
> \overline{A} \overset{\text{def}}{=} (\overline{a_{ij}})_{m \times n}
> $$
> 性质如下
> $$
> \overline{\overline{A}} = A,\quad
> \overline{A + B} = \overline{A} + \overline{B},\quad
> \overline{cA} = \overline{c} \cdot \overline{A},\quad
> \overline{AB} = \overline{A} \cdot \overline{B},\quad
> \overline{A'} = \overline{A}'
> $$

### · 方阵的逆阵

矩阵乘法的应用可以是解决线性方程组：
$$
(*)\begin{equation}
\begin{cases}
a_{11} x_1 + a_{12} x_2 + \cdots + a_{1n} x_n = b_1 \\
a_{21} x_1 + a_{22} x_2 + \cdots + a_{2n} x_n = b_2 \\
\cdots \\
a_{m1} x_1 + a_{m2} x_2 + \cdots + a_{mn} x_n = b_m
\end{cases}
\end{equation}
$$
每次写线性方程组会很烦，但是我们引入矩阵乘法后会变得简洁

我们让所有系数构成一个矩阵（线性方程组的系数矩阵）：
$$
A = \begin{bmatrix} a_{11} & a_{12} & \cdots & a_{1n} \\ a_{21} & a_{22} & \cdots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{m1} & a_{m2} & \cdots & a_{mn} \end{bmatrix}
$$
我们把所有的未定元拼成列向量，把常数项拼成列向量：

$$
\boldsymbol{x} = \begin{bmatrix} x_1 \\ x_2 \\ \vdots \\ x_n \end{bmatrix} \quad \boldsymbol{b} = \begin{bmatrix} b_1 \\ b_2 \\ \vdots \\ b_m \end{bmatrix}
$$


自然地，根据矩阵乘法 $A \boldsymbol{x} = \boldsymbol{b} \iff (*)$  

写成矩阵能否借此来解线性方程组？（第三章）

我们学过 $\boldsymbol{b} \neq \boldsymbol{0}$, $\frac{a}{b} = a \cdot {b}^{-1}$ ，那矩阵能否求逆： $A \xrightarrow{\sim} A^{-1}$ ，自然地想：$A \boldsymbol{x} = \boldsymbol{b} \Rightarrow \boldsymbol{x} = A^{-1} \boldsymbol{b}$

**定义1**：

>  设 $A$ 为 $n$ 阶方阵，若存在 $n$ 阶方阵 $B$ ，使得 $AB = BA = I_n$ 则称 $B$ 为 $A$ 的逆阵，记为 $A^{-1}$ 。
>
> 若矩阵  $A$  存在逆阵，则称为非奇异阵或可逆阵；若矩阵  $A$  不存在逆阵，则称为奇异阵。
>

> [!important]
>
> (1). 只有对方阵才有逆阵的定义，当  $m \neq n$  时，没有逆阵的定义。
>
> (2). 非零方阵不一定有逆阵。
>
> (3). 一般来说，$A^{-1}B\neq BA^{-1}$.

**可逆矩阵性质**：

> 设 $A$ 为 $n$ 阶方阵
>
> (1). 若 $A$ 可逆，则逆阵必唯一。
>
> - 设  $B, C$  均为  $A$  的逆阵，即  $AB = BA = I_n$ ， $AC = CA = I_n$ 
> - $B = B \cdot I_n = B(AC) = (BA)C = I_nC = C$ 
>
> (2). 设  $A, B$  可逆，则  $AB$  也可逆， $(AB)^{-1} = B^{-1}A^{-1}$ 
> $$
> (AB)(B^{-1}A^{-1}) = A(BB^{-1})A^{-1} = A \cdot I_n \cdot A^{-1} = A \cdot A^{-1} = I_n\\
> (B^{-1}A^{-1})(AB) = B^{-1}(A^{-1}A)B = B^{-1} \cdot I_n \cdot B = B^{-1} \cdot B = I_n
> $$
>
> > 推广 设  $A_1, \cdots, A_m$  均为  $n$  阶可逆阵  $(m \geq 2)$ ，则  $A_1 \cdots A_m$  也可逆， $(A_1 \cdots A_m)^{-1} = A_m^{-1} \cdots A_1^{-1}$ 
> > $$
> > (A_1 \cdots A_m)(A_m^{-1} \cdots A_1^{-1}) = I_n
> > (A_m^{-1} \cdots A_1^{-1})(A_1 \cdots A_m) = I_n
> > $$
>
> (3). 设  $A$  可逆， $C \neq 0$  常数，则  $CA$  仍可逆，
> $$
> (CA)^{-1} = C^{-1}A^{-1} \\
> (C^{-1}A^{-1})(CA) = (C^{-1}C)(A^{-1}A) = I_n\\
> (CA)(C^{-1}A^{-1}) = (CC^{-1})(A \cdot A^{-1}) = I_n
> $$
> (4). 设  $A$  可逆，则  $A'$  也可逆且  $(A')^{-1} = (A^{-1})'$ 
> $$
> A'(A')' = (A^{-1}A)' = I_n' = I_n \\
> (A')'A' = (A \cdot A')' = I_n' = I_n
> $$
> (5). 设  $A$  可逆，则  $(A')^{-1} = A$ 
> $$
> A' \cdot A = A \cdot A' = I_n \Rightarrow (A')^{-1} = A
> $$
> (6). 对可逆阵而言，乘法消去律成立。
>
> - 设  $A$  为可逆
>   $$
>   \left\{ \begin{array}{l} AB = AC \Rightarrow B = C \\ BA = CA \Rightarrow B = C \end{array} \right.
>   $$
>
> - $A^{-1}AB = A^{-1}AC \Rightarrow I_nB = I_nC \Rightarrow B = C$ 
>
> - $BA \cdot A^{-1} = CA \cdot A^{-1}$  两边同时右乘  $A^{-1}$  即  $B = C$ 
>
> (7) 整性对可逆阵成立，即
>
> -  $A$  可逆， $B \neq 0 \Rightarrow AB \neq 0$ 
> -  $A$  可逆， $C \neq 0 \Rightarrow CA \neq 0$ 

**定义2**： 

> 设  $A = (a_{ij})_{n \times n}$ ， $A^*$  是  $|A|$  中的代数余子式，叫  $A$  的伴随阵，记为  $A^*$ .
> $$
> A^* = \begin{bmatrix} A_{11} & A_{21} & \cdots & A_{n1} \\ A_{12} & A_{22} & \cdots & A_{n2} \\ \vdots & \vdots & \ddots & \vdots \\ A_{1n} & A_{2n} & \cdots & A_{nn} \end{bmatrix}
> $$
>  $A$  不一定有逆阵，但伴随阵总存在.
> $$
> A = \begin{bmatrix} 1 & 0 \\ 0 & 0 \end{bmatrix}\quad  A^* = \begin{bmatrix} 0 & -1 \\ 0 & 0 \end{bmatrix}
> $$

**引理3**：设 $A$ 为 $n$ 阶方阵，则 $AA^* = A^*A = |A| \cdot I_n$ .

> **证明**:
> $$
> \begin{bmatrix}
> a_{11} & a_{12} & \cdots & a_{1n} \\
> a_{21} & a_{22} & \cdots & a_{2n} \\
> \vdots & \vdots & \ddots & \vdots \\
> a_{n1} & a_{n2} & \cdots & a_{nn}
> \end{bmatrix}
> \begin{bmatrix}
> A_{11} & A_{12} & \cdots & A_{1n} \\
> A_{21} & A_{22} & \cdots & A_{2n} \\
> \vdots & \vdots & \ddots & \vdots \\
> A_{n1} & A_{n2} & \cdots & A_{nn}
> \end{bmatrix}
> =\begin{bmatrix}
> |A| & 0 & \cdots & 0 \\
> 0 & |A| & \cdots & 0 \\
> \vdots & \vdots & \ddots & \vdots \\
> 0 & 0 & \cdots & |A|
> \end{bmatrix}
> = |A| \cdot I_n
> $$
>
> 同理可逆  $A^*A = |A| \cdot I_n$ .

**定理4**：设 $A$ 为 $n$ 阶方阵，若 $|A| \neq 0$ ，则  $A$  可逆且 $A^{-1} = \frac{1}{|A|} \cdot A^*$ 

> **证明**  $AA^* = A^*A = |A| \cdot I_n$ 
>
> $$
> \Rightarrow A \cdot \left( \frac{1}{|A|} A^* \right) = \left( \frac{1}{|A|} A^* \right) \cdot A = I_n,
> $$
>
> (1). $A = \begin{bmatrix} a & b \\ c & d \end{bmatrix}$ ，若  $|A| = ad - bc \neq 0$ ，则
> $$
> A^* = \frac{1}{ad - bc} \begin{bmatrix} d & -b \\ -c & a \end{bmatrix}
> $$
> (2).  $Ax = \beta$ ，且  $|A| \neq 0$ ，从而  $A$  可逆
>
> 同时左乘  $A^{-1} \Rightarrow x = A^{-1} \beta$ 
>
>
> $$
> \begin{bmatrix} x_1 \\ x_2 \\ \vdots \\ x_n \end{bmatrix} = x = A^{-1} \beta = \frac{1}{|A|} A^* \beta
> $$
>
> 具体地
> $$
> x_j = \frac{1}{|A|} (b_1 A_{j1} + b_2 A_{j2} + \cdots + b_n A_{jn})
> $$

**定理5**：设  $A, B$  为  $n$  阶方阵，则  $|AB| = |A| \cdot |B|$ 

> **证明** 设 $A = (a_{ij})_{n \times n}$ ， $B = (b_{ij})_{n \times n}$ ，构造  $2n$  阶方阵  $C = \begin{bmatrix} A & O \\ I_n & B \end{bmatrix}$ 
>
> 用 $A$ 乘以 $|C|$ 的 $n$ 行加到第 $i$ 行上  $(1 \leq i, j \leq n)$ 
>
>
> $$
> \begin{bmatrix}
> O & AB \\
> -I_n & B
> \end{bmatrix}
> $$
>
> 用 Laplace 定理来展开，按前  $n$  行展开。
>
> 左边 =  $|A| \cdot |B|$ ，右边
>
>
> $$
> = |AB| \cdot (-1)^{n^2 + n + 1 + \cdots + n} \cdot |I_n| = |AB| \cdot (-1)^{\frac{n(n+1)}{2}} \cdot (-1)^n \cdot |I_n| = |AB|
> $$
>

**定理6**：设 $A$ 为 $n$ 阶方阵，则 $A$ 可逆 $\Leftrightarrow |A| \neq 0$ ；$A$ 奇异 $\Leftrightarrow |A| = 0$ 

**推论7**:

(1) 设  $A_1, \cdots, A_m$  为 $n$ 阶方阵，若存在 $i$ 使得 $A_i$ 是奇异阵，则  $A_1 \cdots A_m$  是奇异阵。

(2). 设  $A$  可逆，则  $|A^{-1}| = |A|^{-1}$ 

(3). 设 $A, B$ 为  $n$  阶方阵，若 $AB = I_n$ 或 $BA = I_n$ ，则 $B = A^{-1}$ 

> **证明** 只证  $AB = I_n$  的情形。
> $$
> 1 = |I_n| = |AB| = |A| \cdot |B| \Rightarrow |A| \neq 0 \Rightarrow A^{-1}\ \text{exist}\\
> B = I_n \cdot B = (A^{-1} \cdot A) \cdot B = A^{-1} \cdot (AB) = A^{-1} \cdot I_n = A^{-1}
> $$

/example/
$$
A = \begin{bmatrix} (a+b)^n & (a+b)^n & \cdots & (a+b)^n \\ \cdots & \cdots & \cdots & \cdots \\ (a+b)^n & (a+b)^n & \cdots & (a+b)^n \end{bmatrix}
$$
我们知道
$$
(a+b)^n = \sum_{i=0}^{n} C_n^i a_{i} b_{n-i}
$$
那么
$$
A= \begin{bmatrix}
1 & C_n^1 a_0 & C_n^2 a_0^2 & \cdots & C_n^n a_0^n \\
1 & C_n^1 a_1 & C_n^2 a_1^2 & \cdots & C_n^n a_1^n \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
1 & C_n^1 a_n & C_n^2 a_n^2 & \cdots & C_n^n a_n^n 
\end{bmatrix}\cdot
\begin{bmatrix}
b_0^n & b_1^n  & \cdots & b_n^n \\
b_0^{n-1} & b_1^{n-1}  & \cdots & b_n^{n-1} \\
\vdots &  \vdots & \ddots & \vdots \\
1 & 1 & \cdots & 1
\end{bmatrix} \Rightarrow |A| = C_n^1 C_n^2 \cdots C_n^n \prod_{0 \leq i < j \leq n} (b_j - b_i)
$$

## Part 2 等价变换

### · 矩阵的初等变换

**行列式性质**：

> 设 $A, B$ 为 $n$ 阶方阵，$c$ 为常数。
>
> 1. $|A + B| \neq |A| + |B|$
> 2. $|cA| = c^n|A|$
> 3. $|AB| = |A||B|$
> 4. $|A^T| = |A|$
>
> 5. 若 $A$ 可逆，则 $|A^{-1}| = \frac{1}{|A|}$
> 6. 设 $n \geq 2$，则 $|A^{*}| = |A|^{n-1}$

/example/ 用Gauss消元法求解线性方程组。

PS: 系数矩阵+常数列为增广矩阵。

给出如下定义：

**定义1**: 矩阵的初等变换

> 第一类：对换矩阵的两行（列）
>
> 第二类：矩阵某一行（列）乘上非零常数
>
> 第三类：矩阵某一行乘常数加到另一行上

**定义2**:

> 若矩阵 $A$ 通过若干的初等变换变为矩阵 $B$，则称 $A$ 相抵于 $B$，记 $A \sim B$

**定义3**:

> 设 $A = (a_{ij})_{m \times n}$ 相抵于 $\begin{pmatrix} I_r & 0 \\ 0 & 0 \end{pmatrix}$ ，称为 $A$ 的相抵标准型。

注意：$r \leq \min\{m, n\}$，$r$ 不依赖于初等变换选取，$r$ 唯一确定。

> /proof/
>
> 对 $\min\{m, n\}$ 进行归纳。若 $\min\{m, n\} = 0$，则归纳过程结束。
>
> 设 $\min\{m, n\} < k$ 归纳成立，下证 $\min\{m, n\} = k$ 情形。
>
> 若 $A = 0$ 则结论成立，下设 $A \neq 0$，不妨设 $a_{ij} \neq 0$，$i \leq r$, $j \leq s$.
>
> 此时 $a_{ij}$ 变到了 $(1, 1)$ 位置，以下不妨设 $a_{ij} = 1$.
>
> $$
> \begin{bmatrix}
> a_{11} & \cdots & a_{1n} \\
> \vdots & & \vdots \\
> a_{m1} & \cdots & a_{mn}
> \end{bmatrix}
> \rightarrow
> \begin{bmatrix}
> 1 & 0 & \cdots & 0 \\
> 0 & b_{22} & \cdots & b_{2n} \\
> \vdots & \vdots & \ddots & \vdots \\
> 0 & b_{m2} & \cdots & b_{mn}
> \end{bmatrix}
> $$
>
> 此时 $B$ 是 $(m-1) \times (n-1)$ 矩阵，
>
> $\min\{(m-1), (n-1)\} = \min\{m, n\} - 1 = k - 1$.
>
> 由归纳假设，$B$ 可变换为 $\begin{bmatrix} I_r & 0 \\ 0 & 0 \end{bmatrix}$，$A \sim \begin{bmatrix} I_r & 0 \\ 0 & 0 \end{bmatrix}$.

**定义4**：

> 设 $A = (a_{ij})_{m \times n}$，对任给 $m$，
> $$
> k_i = \begin{cases} 
> +\infty & \text{if } a_{i1} = 0 \\
> \min_{j \geq 1} \{ j | a_{ij} \neq 0 \} & \text{if } a_{i1} \neq 0 
> \end{cases}
> $$
> 给出阶梯点定义：
>
> $A$ 为阶梯形矩阵 $\stackrel{\text{def}}{\Longleftrightarrow}$ 存在 $r$，使得 $k_1 < k_2 < \cdots < k_r$，$k_{r+1} = \cdots = k_m = +\infty$。

**定义5**：设 $A = (a_{ij})_{m \times n}$，则通过初等变换可将 $A$ 化为阶梯形矩阵。

### · 初等矩阵

**定义6**：

> 对单位矩阵 $I_n$ 实施三类初等行变换后得到的矩阵称为三类初等矩阵。
> $$
> P_{ij} = \begin{bmatrix}
> 1 &  &  &  & &  \\
> & \ddots &  &  &  & \\
> &  & 0 & 1 &  & \\
> &  & 1 & 0 &  & \\
> &  &  &  & \ddots  & \\
>  &  &  &  &  & 1 \\
> \end{bmatrix}
> $$
>
> $$
> P_{i(c)} = \begin{bmatrix} 
> 1 & \cdots & 0 & \cdots & 0 \\
> \vdots & & \vdots & & \vdots \\
> 0 & \cdots & c & \cdots & 0 \\
> \vdots & & \vdots & & \vdots \\
> 0 & \cdots & 0 & \cdots & 1 
> \end{bmatrix}
> $$
>
> $$
> T_{ij}(c) = \begin{bmatrix}
> 1 &  &  &  & &  \\
> & \ddots &  &  &  & \\
> &  & 1 &  &  & \\
> &  & c & 1 &  & \\
> &  &  &  & \ddots  & \\
>  &  &  &  &  & 1 \\
> \end{bmatrix}
> $$

**定理7**：

>初等矩阵行列变换等价于左(右)乘对应初等矩阵，左行右列
>$$
>C_j^i A = P_{ij} A \quad \Rightarrow A = P_{i(c)} A \quad C_{ji}^i A = T_{ij}(c) A
>$$

**引理8**：

> 1. 初等矩阵都是可逆矩阵，且逆矩阵为同类初等矩阵。
>
> $$
> P_{ij}^{-1} = P_{ij}\quad \quad
> P_{i(c)}^{-1} = P_{i(-c)}\quad \quad
> T_{ij}(c)^{-1} = T_{ij}(-c)
> $$
>
> 2. 矩阵实施第三类初等行变换后 $|A|$ 不变。
>
> $$
> |P_{ij}| = -1\quad \quad |P_{i(c)}| = c\quad \quad |T_{ij}(c)| = 1
> $$
>
> 3. 非奇异矩阵经初等变换后仍为非奇异矩阵。奇异矩阵 $\sim$ 奇异矩阵
>
> > /proof/
> >
> > 定理7 $\Rightarrow$ A实施初等变换等价于 $P_1 \cdots P_r A Q_1 \cdots Q_s$
> >
> > 其中 $P_i, Q_j$ 都是非奇异矩阵，从而都是非奇异矩阵。
> >
> > - A非异 $\Rightarrow$ B非异
> > - A奇异 $\Rightarrow$ B奇异

> [!caution]
>
> 集合A :给定子集 $R\subset A \times A = \{(a, b) | a, b \in A\}$，若 $(a, b) \in R$ 则称 $a\text{ } \underline{R}\text{ } b$
>
> 若又满足以下三条性质，则称为等价关系：
>
> 1. 自反性：$a\text{ } \underline{R}\text{ } a$
> 2. 对称性：$a\text{ } \underline{R}\text{ } b$ 且  $b\text{ } \underline{R}\text{ } a$
> 3. 传递性：若 $a\text{ } \underline{R}\text{ } b$ 且 $b\text{ } \underline{R}\text{ } c$，则 $a\text{ } \underline{R}\text{ } c$

**定理9**：

> 矩阵的相抵关系是等价关系即：
>
> 1. 自反性 $A \sim A$
> 2. 对称性 $A \sim B \Leftrightarrow B \sim A$
> 3. 传递性 $A \sim B$ 且 $B \sim C \Rightarrow A \sim C$

/proof/

> 1. $A = I_n \cdot A \Rightarrow A \sim A$
>
> 2. 由 $A \sim B$ 可知，存在初等矩阵 $P_1 \cdots P_r$ 和 $Q_1 \cdots Q_s$ 使得
>
>    $$
>    B = P_1 \cdots P_r A Q_1 \cdots Q_s \Rightarrow P_1 \cdots P_r B Q_1 \cdots Q_s^{-1} = A \Rightarrow B \sim A
>    $$
>
> 3. $B = P_1 \cdots P_r A Q_1 \cdots Q_s$
>
>    $$
>    C = R_1 \cdots R_t B T_1 \cdots T_l
>    $$
>
>    其中 $P_i, Q_j, R_k, T_l$ 都是初等矩阵。
>
>    $$
>    \Rightarrow C = R_1 \cdots R_t P_1 \cdots P_r A Q_1 \cdots Q_s T_1 \cdots T_l \Rightarrow A \sim C
>    $$

下面研究非异阵的一些性质:

**定理1**:

> 设 $A$ 为 $n$ 阶方阵，则下列结论等价：
>
> 1. $A$ 为非奇异矩阵
> 2. $A$ 的相抵标准型为 $I_n$
> 3. $A$ 通过初等行变换或列变换能变为 $I_n$
> 4. $A$ 是若干个初等矩阵的乘积

/proof/

> (1) $\Rightarrow$ (2) 设 $A$ 相抵标准型为 $\begin{pmatrix} I_r & 0 \\ 0 & 0 \end{pmatrix}$，由 $A$ 的非奇异性和初等矩阵性质可知 $r = n$。
>
> (2) $\Rightarrow$ (3) 设 $A \sim I_n$ 即 $\exists P_1 \cdots P_r, Q_1 \cdots Q_s$ 使得 $P_1 \cdots P_r A Q_1 \cdots Q_s = I_n$
>
> $$
> P_1 \cdots P_r A = I_n \quad \text{i.e.} \quad Q_1 \cdots Q_s P_1 \cdots P_r A = I_n
> $$
> (3) $\Rightarrow$ (4)
>
> 设 $A$ 通过行变换变为 $I_n$，即存在非奇异矩阵 $P_1, P_2, \ldots, P_r$ 使得 $P_r \cdots P_1 A = I_n$。
>
> $$
> \Rightarrow A = (P_r \cdots P_1)^{-1} = P_1^{-1} \cdots P_r^{-1}
> $$
>
> 即 $A$ 是若干个初等矩阵的乘积。
>
> (4) $\Rightarrow$ (1)
>
> 设 $A = P_1 \cdots P_r$，$P_i$ 为初等矩阵。则 $P_i$ 为可逆矩阵 $\Rightarrow A$ 为可逆矩阵。

**推论2**:

> 设 $A = (a_{ij})_{m \times n}$，则存在 $m$ 阶非奇异矩阵 $P$ 和 $n$ 阶非奇异矩阵 $Q$ 使得 $PAQ = \begin{pmatrix} I_r & 0 \\ 0 & 0 \end{pmatrix}$。

/proof/

> 存在 $m$ 阶非奇异矩阵 $P$ 和 $n$ 阶非奇异矩阵 $Q$ 使得 $P \cdots P_1 A Q_1 \cdots Q_s = \begin{pmatrix} I_r & 0 \\ 0 & 0 \end{pmatrix}$。
>
> 令 $P = P_r \cdots P_1$，$Q = Q_1 \cdots Q_s$。

### · 逆矩阵求解

设 $A$ 为 $n$ 阶非奇异矩阵，则存在初等矩阵 $P_1$ 使得 $P_1 \cdots P_r A = I_n \Rightarrow A^{-1} = P_r \cdots P_1$。

可以推出求逆矩阵方法：
$$
[A : I_n] \rightarrow [I_n : A^{-1}]
$$

> /proof/
>
> $$
> [A : I_n] \rightarrow [PA : P_1 I_n] \rightarrow [P_r \cdots P_1 A : P_r \cdots P_1 I_n] \rightarrow [I_n : A^{-1}]
> $$

列变换求逆矩阵：
$$
\begin{bmatrix} A \\ I_n \end{bmatrix}
$$

矩阵方程
$$
AX = B \quad X = A^{-1}B \quad (A | B) \rightarrow (I_n | A^{-1}B)
$$

$$
XA = B \quad X = BA^{-1} \quad \begin{bmatrix} A \\ B \end{bmatrix} \rightarrow \begin{bmatrix} I_n \\ BA^{-1} \end{bmatrix}
$$

这就是初等变换法求逆矩阵.

## Part 3 分块矩阵

**定义1**：

> 分块矩阵： $A = (a_{ij})_{r \times s}$ ，分块行、分块列。
> $$
> A = \begin{pmatrix} A_{11} & A_{12} & \cdots & A_{1s} \\ A_{21} & A_{22} & \cdots & A_{2s} \\ \vdots & \vdots & \ddots & \vdots \\ A_{r1} & A_{r2} & \cdots & A_{rs} \end{pmatrix} = (A_{ij})_{rs}
> $$
>

**定义2**：

> 设  $A = (a_{ij})_{r \times s}$ ， $B = (b_{ij})_{k \times l}$  为分块矩阵。  
>
> 则  $A = B$  当且仅当  $r = k$ ， $s = l$ ， $A_{ij} = B_{ij}$ （ $\forall 1 \leq i \leq r$ ， $\forall 1 \leq j \leq s$）

**定义3**：设  $A = (a_{ij})_{r \times s}$ ， $B = (b_{ij})_{r \times s}$  且  $A$ ， $B$  有相同的分块方式，则  $A \pm B = (a_{ij} \pm b_{ij})_{r \times s}$ 。

**定义4**：设  $A = (a_{ij})_{r \times s}$ ， $c$  为常数，则 $cA = (c \cdot a_{ij})_{r \times s}$ 。

**定义5**：

> 设  $A = (a_{ij})_{r \times s}$ ， $B = (b_{ij})_{s \times k}$  且  $A$  的列分块与  $B$  的行分块方式相同。
>
> 定义  $C = AB = (c_{ij})_{r \times k}$ ，其中  $c_{ij} = a_{i1}b_{1j} + a_{i2}b_{2j} + \cdots + a_{is}b_{sj}$ 。

**定义6**：

> 设  $A = (A_{ij})_{r \times s}$  则  $A$  的转置  $A^T$  是  $s \times r$  分块矩阵。  
>
> $$
> A^T = \begin{pmatrix}
> A_{11}' & A_{21}' & \cdots & A_{r1}' \\
> A_{12}' & A_{22}' & \cdots & A_{r2}'\\
> \vdots & \vdots & \ddots & \vdots \\
> A_{1s}' & A_{2s}' & \cdots & A_{rs}' \\
> \end{pmatrix}
> $$
>
> ***

**定义7**：设 $A = (A_{ij})_{r \times s}$，复分块矩阵 $\overline{A} = (\overline{A_{ij}})_{r \times s}$

我们给出如下例子

/example/
$$
A = \begin{bmatrix}
A_1 &  &  &  \\
 & A_2 &  &  \\
 &  & \ddots &  \\
 &  &  & A_k \\
\end{bmatrix} = diag(A_1, A_2, \cdots, A_k)\quad\quad
B = \begin{bmatrix}
B_1 &  &  &  \\
 & B_2 &  &  \\
 &  & \ddots &  \\
 &  &  & B_k \\
\end{bmatrix}
$$
$A_i$ 与 $B_i$ 为同阶方阵，$(1 \leq i \leq k)$ ， $AB = diag(A_1B_1, A_2B_2, \cdots, A_kB_k)$

> **推论**：若 $A_1, A_2, \cdots, A_k$ 为非零矩阵，则 $A$ 为非零矩阵。
> $$
> |A| = |A_1||A_2| \cdots |A_k| \neq 0\\
> A^{-1} = diag(A_1^{-1}, A_2^{-1}, \cdots, A_k^{-1})
> $$

此处再给出一个例子：

设 $A = (a_{ij})_{m \times n}$，$B = (b_{ij})_{n \times p}$， $A$ 行分块：$A = \begin{bmatrix}
\alpha_1 \\
\alpha_2 \\
\vdots \\
\alpha_m
\end{bmatrix}$，$B$ 列分块：$B = \begin{bmatrix}
\beta_1 & \beta_2 & \cdots & \beta_p
\end{bmatrix}$
$$
AB = \begin{bmatrix}
\alpha_1 \\
\alpha_2 \\
\vdots \\
\alpha_m
\end{bmatrix} \begin{bmatrix}
\beta_1 & \beta_2 & \cdots & \beta_p
\end{bmatrix}
$$

$$
AB = A(\beta_1, \beta_2, \cdots, \beta_p) = (A\beta_1, A\beta_2, \cdots, A\beta_p)
$$

下面我们接着给出定义：

**定义8**：

> 设 $A = (A_{ij})_{r \times s}$ 为分块矩阵，以下称为三类分块初等变换。
>
> 1. 第一类：对换 $A$ 的两个分块行（分块列）。
> 2. 第二类：用非零矩阵 $M$ 左乘 $A$ 的某一分块行（右乘 $A$ 的某一分块列）。
> 3. 第三类：将一个矩阵 $M$ 左乘 $A$ 某一分块行加到另一个分块行上（右乘列）。
>
> $$
> (1).
> P_{ij} = \begin{bmatrix}
> I_{m1} &  &  &  & & & & \\
>  & \ddots &  &   & & & & \\
>  &  & 0 & \cdots  & I_{mj}  & & & \\
>  &  & \vdots &  & \vdots & & & \\
>  &  & I_{mi} & \cdots  & 0 & & & \\
>  &  &  &  &  & \ddots & & \\
>   &  &  &  &  &  & & I_{mk}\\
> \end{bmatrix}
> \quad\quad
> (2).P_{i}(M)  = \begin{bmatrix} 
> I_{m1} &  &  &  &  \\
>  & \ddots &  & &  \\
>  &  & M &  &  \\
>  & &  & \ddots &  \\
>  &  &  &  & I_{mk} 
> \end{bmatrix}
> $$
>
> $$
> (3). P_{ij}(M) = \begin{bmatrix}
> I_{m1} &  &  &  & &  &\\
> & \ddots &  &  &  & &\\
> &  & I_{mi} &  &  & &\\
> &  & \vdots & \ddots &  &  &\\
> &  & M & \cdots & I_{mj} & &\\
> &  &  & & & \ddots  &\\
>  &  &  &  & & & I_{mk} \\
> \end{bmatrix}
> $$

接着给出两个定理：

**定理9**：

> (1). 分块初等阵是非零阵：
> $$
> P_{ij}^T = P_{ij}, \quad P_{ij}(M)^T = P_{ij}(M), \quad T_{ij}(M)^T = T_{ij}(-M)
> $$
> (2).
> $$
> |P_{ij}| = 1, \quad l = m + n + (m + n), \quad i \neq j, \quad m\\
> |P_{ij}(M)| = |M|, \quad|T_{ij}(M)| = 1
> $$
> (3).分块初等行变换等价于左乘对应的分块初等阵。
>
> (4). 第三类分块初等变换不改变行列式的值。
> $$
> |M_{ij}(M) \cdot A| = |T_{ij}(M) \cdot A| = |T_{ij}(M)| \cdot |A| = |A|
> $$
>

**定理10**：

> 设 $M = \begin{bmatrix}
> A & B \\
> C & D
> \end{bmatrix}$
>
> (1). 若 $A$ 可逆，则 $|M| = |A| \cdot |D - CA^{-1}B|$
>
> (2). 若 $D$ 可逆，则 $|M| = |D| \cdot |A - BD^{-1}C|$
>
> (3). 若 $A$ 和 $D$ 同时可逆，则 $|M| = |A| \cdot |D - CA^{-1}B| = |D| \cdot |A - BD^{-1}C|$

## Part 4 Cauthy-Binet 公式

这部分证明过程基本略掉.

**定理1**：$A, B$  为  $n$  阶方阵，则  $|AB| = |A||B|$ .

**定理2** (Cauchy-Binet公式)：

> 设  $A = (a_{ij})$  是  $m \times n$  矩阵， $B = (b_{ij})$  是  $n \times m$  矩阵， $A \begin{pmatrix}i_1 & \cdots & i_s \\ j_1 & \cdots & j_s \end{pmatrix}$  表示  $A$  的一个  $s$  阶子式，它由  $A$  的第  $i_1, \cdots, i_s$  行与第  $j_1, \cdots, j_s$  列交点上的元素按原次序排列组成的行列式。同理可定义  $B$  的  $s$  阶子式。
>
> 1. 若  $m > n$ ，则必有  $|AB| = 0$ ;
> 2. 若  $m \leq n$ ，则必有
>
> $$
> |AB| = \sum_{1 \leq j_1 < j_2 < \cdots < j_m \leq n} A \left( \begin{array}{ccc} 1 & 2 & \cdots & m \\ j_1 & j_2 & \cdots & j_m \end{array} \right) B \left( \begin{array}{ccc} j_1 & j_2 & \cdots & j_m \\ 1 & 2 & \cdots & m \end{array} \right).
> $$

**定理 3**：

> 设  $A = (a_{ij})$  是  $m \times n$  矩阵， $B = (b_{ij})$  是  $n \times m$  矩阵， $r$  是一个正整数且  $r \leq m$ 。
>
> 1. 若  $r > n$ ，则  $AB$  的任意一个  $r$  阶子式等于零；
> 2. 若  $r \leq n$ ，则  $AB$  的  $r$  阶子式
>
> $$
> AB \left( \begin{array}{ccc} i_1 & i_2 & \cdots & i_r \\ j_1 & j_2 & \cdots & j_r \end{array} \right) = \sum_{1 \leq k_1 < k_2 < \cdots < k_r \leq n} A \left( \begin{array}{ccc} i_1 & i_2 & \cdots & i_r \\ k_1 & k_2 & \cdots & k_r \end{array} \right) B \left( \begin{array}{ccc} k_1 & k_2 & \cdots & k_r \\ j_1 & j_2 & \cdots & j_r \end{array} \right).
> $$

下面介绍 Cauchy-Binet 公式的两个重要应用。它们分别是著名的 Lagrange (拉格朗日) 恒等式和 Cauchy-Schwarz (柯西-许瓦兹) 不等式。这两个结论也可以用其他方法证明，但用矩阵方法显得非常简洁。

**推论1**： Lagrange 恒等式 ( $n \geq 2$ )
$$
\left( \sum_{i=1}^n a_i^2 \right) \left( \sum_{i=1}^n b_i^2 \right) - \left( \sum_{i=1}^n a_i b_i \right)^2 = \sum_{1 \leq i < j \leq n} (a_i b_j - a_j b_i)^2.
$$

> 证明 左边的式子等于
>
> $$
> \left| \begin{array}{cc} \sum_{i=1}^n a_i^2 & \sum_{i=1}^n a_i b_i \\ \sum_{i=1}^n a_i b_i & \sum_{i=1}^n b_i^2 \end{array} \right|,
> $$
> 这个行列式对应的矩阵可化为
>
> $$
> \left( \begin{array}{cc} a_1 & a_2 & \cdots & a_n \\ b_1 & b_2 & \cdots & b_n \end{array} \right) \left( \begin{array}{cc} a_1 & b_1 \\ a_2 & b_2 \\ \vdots & \vdots \\ a_n & b_n \end{array} \right).
> $$
> 用 Cauchy-Binet 公式得
>
> $$
> \left| \sum_{i=1}^n a_i^2 \sum_{i=1}^n b_i^2 \sum_{i=1}^n a_i b_i \right| = \sum_{1 \leq i < j \leq n} \left| \begin{array}{cc} a_i & a_j \\ b_i & b_j \end{array} \right| \left| \begin{array}{cc} a_i & b_i \\ a_j & b_j \end{array} \right| = \sum_{1 \leq i < j \leq n} (a_i b_j - a_j b_i)^2.
> $$

**推论2**：设  $a_i, b_i$  都是实数， Cauchy-Schwarz 不等式：
$$
\left( \sum_{i=1}^n a_i^2 \right) \left( \sum_{i=1}^n b_i^2 \right) \geq \left( \sum_{i=1}^n a_i b_i \right)^2.
$$

> **证明**： 由上例，Lagrange 恒等式右边总非负，即得结论。