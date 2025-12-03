---
title: Chapter 5 线性方程组
createTime: 2025/09/30 23:22:15
permalink: /algebra/algebra-5/
---

## Part 1 基变换 过渡矩阵

**定义1**：基变换与过渡矩阵

设 $V_k$ 是线性空间，$\{e_1, e_2, \dots, e_n\}$ 和 $\{f_1, f_2, \dots, f_n\}$ 是两组基，则有：

$$
\begin{cases}
f_1 = a_{11}e_1 + a_{12}e_2 + \cdots + a_{1n}e_n \\
f_2 = a_{21}e_1 + a_{22}e_2 + \cdots + a_{2n}e_n \\
\vdots \\
f_n = a_{n1}e_1 + a_{n2}e_2 + \cdots + a_{nn}e_n
\end{cases}
$$

记前面的系数构成的 $n \times n$ 方阵为：
$$
A = (a_{ij})_{n\times n}
$$

称为 **从基** $\mathcal{E}$ **到基** $\mathcal{F}$ **的过渡矩阵**

**注意**：$A$ 可逆，因为新基可由旧基线性表示，且线性无关

> 形式行向量 $(\alpha_1, \alpha_2, \cdots, \alpha_n)$，其中 $\alpha_i \in V$
>
> 相等
> $$
> (\alpha_1, \alpha_2, \cdots, \alpha_n) = (\beta_1, \beta_2, \cdots, \beta_n) \stackrel{\text{def}}{\Longleftrightarrow} \alpha_i = \beta_i,\ \forall 1 \leq i \leq n
> $$
> 加法
> $$
> (\alpha_1, \alpha_2, \cdots, \alpha_n) + (\beta_1, \beta_2, \cdots, \beta_n) \stackrel{\text{def}}{=} (\alpha_1 + \beta_1, \alpha_2 + \beta_2, \cdots, \alpha_n + \beta_n)
> $$
> 数乘
> $$
> k \in K,\quad
> k \cdot (\alpha_1, \alpha_2, \cdots, \alpha_n) \stackrel{\text{def}}{=} (k\alpha_1, k\alpha_2, \cdots, k\alpha_n)
> $$
> 矩阵乘法
> $$
> (\alpha_1, \alpha_2, \cdots, \alpha_n) A_{m \times n} = \left( \sum_{i=1}^n \alpha_i a_{i1}, \cdots, \sum_{i=1}^n \alpha_i a_{im} \right)
> $$

设 $A = (a_{ij})_{m \times n}$ 列分块
$$
A = (\alpha_1, \alpha_2, \cdots, \alpha_n),\quad \alpha_i \in K^m
$$

$$
(f_1, f_2, \cdots, f_m) = (e_1, e_2, \cdots, e_m) A\cdots\cdots(*)
$$

 $A$ 即为**过渡矩阵**

**引理2**：设 $\{e_1, e_2, \cdots, e_n\}$ 为 $V$ 的基，$A = (a_{ij})_{m \times n}$，令 $B = (b_{ij})_{m \times n}$，使得  
$$
(e_1, e_2, \cdots, e_n) A = (e_1, e_2, \cdots, e_n) B
\Rightarrow A = B
$$

> **证明**：
> $$
> (e_1, e_2, \cdots, e_n) A = \left( \sum_{i=1}^n a_{i1} e_i, \cdots, \sum_{i=1}^n a_{im} e_i \right)
> $$
>
> $$
> (e_1, e_2, \cdots, e_n) B = \left( \sum_{i=1}^n b_{i1} e_i, \cdots, \sum_{i=1}^n b_{im} e_i \right)
> $$
>
> $$
> \Rightarrow \sum_{i=1}^n a_{i1} e_i = \sum_{i=1}^n b_{i1} e_i,\ \cdots,\ \sum_{i=1}^n a_{im} e_i = \sum_{i=1}^n b_{im} e_i
> $$
>
> $$
> \Rightarrow a_{ij} = b_{ij},\quad \forall 1 \leq i \leq n,\ 1 \leq j \leq m.
> $$
>
> 在线性空间中，$\{e_1, e_2, \cdots, e_n\}$ 为旧基，$\{f_1, f_2, \cdots, f_n\}$ 新基
>
> 对任意 $\alpha \in V$，
> $$
> \alpha = \lambda_1 e_1 + \lambda_2 e_2 + \cdots + \lambda_n e_n \longrightarrow 
> \begin{pmatrix}
> \lambda_1 \\ \lambda_2 \\ \vdots \\ \lambda_n
> \end{pmatrix}_{\text{old}}
> $$
>
> $$
> \alpha = \mu_1 f_1 + \mu_2 f_2 + \cdots + \mu_n f_n \longrightarrow 
> \begin{pmatrix}
> \mu_1 \\ \mu_2 \\ \vdots \\ \mu_n
> \end{pmatrix}_{\text{new}}
> $$
>
> 设 $(f_1, f_2, \cdots, f_n) = (e_1, e_2, \cdots, e_n) A$ ，则：
> $$
> \alpha = (e_1, e_2, \cdots, e_n)
> \begin{pmatrix}
> \lambda_1 \\ \lambda_2 \\ \vdots \\ \lambda_n
> \end{pmatrix}
> =
> (f_1, f_2, \cdots, f_n)
> \begin{pmatrix}
> \mu_1 \\ \mu_2 \\ \vdots \\ \mu_n
> \end{pmatrix}
> = (e_1, e_2, \cdots, e_n) A
> \begin{pmatrix}
> \mu_1 \\ \mu_2 \\ \vdots \\ \mu_n
> \end{pmatrix}
> $$
>
> 易推出引理2：
> $$
> \begin{pmatrix}
> \lambda_1 \\ \lambda_2 \\ \vdots \\ \lambda_n
> \end{pmatrix}
> = A
> \begin{pmatrix}
> \mu_1 \\ \mu_2 \\ \vdots \\ \mu_n
> \end{pmatrix}
> \quad \cdots\cdots\ \text{(**) }
> $$
> $(*) \Rightarrow (**)$  ✓  
>
> $(**) \Rightarrow (*)$: $f_i$ 的新坐标向量为 $\begin{pmatrix} 0 \\ \vdots \\ 1 \\ \vdots \\ 0 \end{pmatrix}$，第 $i$ 个位置为 1。
>
> 由 $(**)$ 可得 $f_i$ 的旧坐标向量为
> $$
> A \begin{pmatrix} 0 \\ \vdots \\ 1 \\ \vdots \\ 0 \end{pmatrix}_i = \begin{pmatrix} a_{i1} \\ a_{i2} \\ \vdots \\ a_{in} \end{pmatrix}
> \Rightarrow f_i = a_{i1}e_1 + a_{i2}e_2 + \cdots + a_{in}e_n, \quad \forall 1 \leq i \leq n,\quad A=(a_{ij})_{n\times n}
> $$
>
> $\Rightarrow(*)$ 成立，即 $A$ 为过渡矩阵。

**命题3**：设 $V_k$ 为线性空间，$\{e_1, e_2, \cdots, e_n\}$、$\{f_1, f_2, \cdots, f_n\}$、$\{g_1, g_2, \cdots, g_n\}$ 为三组基。  从基 $e$ 到基 $f$ 的过渡阵为 $A$，从基 $f$ 到基 $g$ 的过渡阵为 $B$，则：

1. $A$ 为可逆阵；
2. 从基 $e$ 到基 $g$ 的过渡阵为 $AB$ .

> 证明：
>
> **(1)** 设从基 $f$ 到基 $e$ 的过渡阵为 $P$，  
> $$
> (f_1, f_2, \cdots, f_n) = (e_1, e_2, \cdots, e_n) A \\
> (e_1, e_2, \cdots, e_n) = (f_1, f_2, \cdots, f_n) P
> $$
>
> $$
> \Rightarrow  (e_1, e_2, \cdots, e_n) I_n = (e_1, e_2, \cdots, e_n) AP
> $$
>
> 由 **引理2** $\Rightarrow AP = I_n$，从而 $A$ 可逆。
>
> **(2)** 设从基 $e$ 到基 $g$ 的过渡阵为 $C$，  
> $$
> (f_1, f_2, \cdots, f_n) = (e_1, e_2, \cdots, e_n) A \\
> (g_1, g_2, \cdots, g_n) = (f_1, f_2, \cdots, f_n) B \\
> (g_1, g_2, \cdots, g_n) = (e_1, e_2, \cdots, e_n) C
> $$
>
> 又因为
> $$
> (g_1, g_2, \cdots, g_n) = (e_1, e_2, \cdots, e_n) AB
> $$
>
> 从而有：  
> $$
> C = AB
> $$

注：若用行向量 $(\lambda_1, \lambda_2, \cdots, \lambda_n)$ 来表示坐标向量

设 $\{e_1, e_2, \cdots, e_n\}$、$\{f_1, \cdots, f_n\}$ 为两组基，  

形式列向量：
$$
\begin{pmatrix}
e_1 \\
e_2 \\
\vdots \\
e_n
\end{pmatrix}
$$

则有：
$$
(*)'\cdots\cdots \begin{pmatrix}
f_1 \\
f_2 \\
\vdots \\
f_n
\end{pmatrix}
= X
\begin{pmatrix}
e_1 \\
e_2 \\
\vdots \\
e_n
\end{pmatrix}
$$

$X$ 为过渡矩阵

$$
(**)'\Rightarrow(\lambda_1, \lambda_2, \cdots, \lambda_n) = (\mu_1, \mu_2, \cdots, \mu_n) A
$$

## Part 2 子空间

**定义1**：设 $V_k$ 是线性空间，$V_0$ 是 $V$ 的非空子集。若对任意 $\alpha, \beta \in V_0$，$k \in K$，有：
$$
\alpha + \beta \in V_0,\quad
k\alpha \in V_0
$$
则称 $V_0$ 为 $V$ 的**线性子空间**，简称**子空间**。

**引理2**：$V_0$ 在 $V$ 的加法和数乘下构成了 $K$ 上的线性空间。

> **性质**：
>
> 对任意 $\alpha_1, \alpha_2, \cdots, \alpha_m \in V_0$，$\lambda_1, \lambda_2, \cdots, \lambda_m \in K$，  
> $$
> \Rightarrow \lambda_1\alpha_1 + \lambda_2\alpha_2 + \cdots + \lambda_m\alpha_m \in V_0
> $$

**特殊子空间**：

 $V_k$：线性空间； $\{0_v\}$：零子空间 → 约定 $\dim = 0$ ；$V$：全子空间 ($\{0_v\},\ V$ 称为平凡子空间)

**引理**：设 $V_0$ 是 $n$ 维线性空间 $V$ 的子空间，则  
$$
0 \leq \dim V_0 \leq \dim V
$$

进一步，若 $V_0$ 是非平凡子空间，则取严格不等号。

> 证明：
>
> 设 $V_0$ 为 $V$ 的非零子空间，记 $\dim V_0 = m$，取 $V_0$ 的一组基 $\{e_1, e_2, \cdots, e_m\}$，从而 $e_1, \cdots, e_m$ 是 $V$ 中线性无关的向量。
>
> 由**基扩张定理**：
>
> $\Rightarrow$ 可将 $\{e_1, \cdots, e_m\}$ 扩张为 $V$ 的一组基 $\{e_1, \cdots, e_m, e_{m+1}, \cdots, e_n\}$ .
> $$
> \Rightarrow 0 \leq \dim V_0 = m \leq n = \dim V
> $$
> 下证：若 $\dim V_0 = \dim V = n$，则 $V_0 = V$
>
> ① 取 $V_0$ 的基 $\{e_1, e_2, \cdots, e_n\}$，从而 $e_1, \cdots, e_n$ 是 $V$ 中线性无关的向量。  
>
> 又 $\dim V = n$， $\Rightarrow \{e_1, \cdots, e_n\}$ 也是 $V$ 的一组基。
>
> 对任意 $\alpha \in V$，有  
> $$
> \alpha = \lambda_1 e_1 + \cdots + \lambda_n e_n \in V_0
> \Rightarrow V_0 = V
> $$

**定义 + 命题2**：设 $V_1, V_2$ 是 $V$ 的子空间。

- **交空间**：$V_1 \cap V_2 = \{\alpha \mid \alpha \in V_1,\ \alpha \in V_2\}$
- **和空间**：$V_1 + V_2 = \{\alpha + \beta \mid \alpha \in V_1,\ \beta \in V_2\}$

则 $V_1 \cap V_2$、$V_1 + V_2$ 都是 $V$ 的子空间。

> 证明：
>
> $V_1 \cap V_2$ 是子空间：设 $\alpha, \beta \in V_1 \cap V_2$ ⇒  
>
> $$
> \alpha + \beta \in V_1,\ \alpha + \beta \in V_2 \Rightarrow \alpha + \beta \in V_1 \cap V_2
> $$
>
> $$
> k \in K,\ k\alpha \in V_1,\ k\alpha \in V_2 \Rightarrow k\alpha \in V_1 \cap V_2
> $$
>
> $\Rightarrow V_1 \cap V_2$ 是子空间。
>
> $V_1 + V_2$ 是子空间：设 $\alpha, \beta \in V_1 + V_2$，即  
>
> $$
> \alpha = \alpha_1 + \alpha_2,\ \alpha_1 \in V_1,\ \alpha_2 \in V_2 \\
> \beta = \beta_1 + \beta_2,\ \beta_1 \in V_1,\ \beta_2 \in V_2
> $$
>
> 则：
> $$
> \alpha + \beta = (\alpha_1 + \beta_1) + (\alpha_2 + \beta_2) \in V_1 + V_2
> $$
>
> $$
> k \in K,\ k\alpha = k\alpha_1 + k\alpha_2 \in V_1 + V_2
> $$
>
> $\Rightarrow V_1 + V_2$ 是子空间。

设 $V = \mathbb{R}^3$，

- $V_1 =$ x轴， $V_2 =$ y轴， $V_3 =$ z轴  

定义平面：

- $V_{12} =xy$ 平面，$V_{13} =xz$ 平面，$V_{23} =yz$ 平面  

则：
$$
V_{12} \cap V_{13} = V_1,\quad
V_{12} \cap V_{23} = V_2,\quad
V_{13} \cap V_{23} = V_3
$$
和空间：
$$
V_1 + V_2 = V_{12},\quad
V_1 + V_3 = V_{13},\quad
V_2 + V_3 = V_{23}
$$

$$
V_1 + V_{23} = V = \mathbb{R}^3 ,\quad 
V_1 + V_2 + V_3 = \mathbb{R}^3
$$

**推广**：设 $V_1, V_2, \cdots, V_m$ 是 $V$ 的子空间，则：

- 交空间：
  $$
  V_1 \cap V_2 \cap \cdots \cap V_m
  $$

- 和空间：
  $$
  V_1 + V_2 + \cdots + V_m = \{\alpha_1 + \alpha_2 + \cdots + \alpha_m \mid \alpha_i \in V_i\}
  $$

**定义3**：设 $S$ 是 $V$ 的非空子集，记 $L(S)$ 为 $S$ 中向量所有可能的线性组合构成的集合，即：
$$
L(S) = \left\{ \lambda_1\alpha_1 + \lambda_2\alpha_2 + \cdots + \lambda_m\alpha_m \,\middle|\, 
\begin{array}{c}
\lambda_1, \cdots, \lambda_m \in K \\
\alpha_1, \cdots, \alpha_m \in S \\
m \geq 0
\end{array}
\right\}
$$
易证：$L(S)$ 在加法和数乘下封闭，从而是 $V$ 的子空间，称为由 $S$ 生成（张成）的子空间。

**命题4**：设 $S$ 是线性空间 $V$ 的非空子集，记 $L(S)$ 为由 $S$ 张成的子空间，则：

1. $L(S)$ 是包含 $S$ 的 **最小子空间**；
2. 若 $S$ 存在极大线性无关组 $\{\alpha_1, \alpha_2, \cdots, \alpha_r\}$，则 $L(S) = L(\alpha_1, \alpha_2, \cdots, \alpha_r)$，且 $\{\alpha_1, \cdots, \alpha_r\}$ 是 $L(S)$ 的一组基，从而 $\dim L(S) = r = r(S)$.

> 证明：
>
> **(1)** $L(S) \geq S$，任取子空间 $V_0 \geq S$。  对任意 $\alpha \in L(S)$，有
> $$
> \alpha = \lambda_1\alpha_1 + \lambda_2\alpha_2 + \cdots + \lambda_m\alpha_m,\quad \alpha_i \in S
> \Rightarrow \alpha_i \in V_0 \Rightarrow \alpha \in V_0
> $$
> $\Rightarrow L(S) \leq V_0$ 
>
> **(2)** 
> $$
> L(S) \overset{\text{linear}}\rightarrow S \overset{\text{linear}}\rightarrow \{\alpha_1, \alpha_2, \cdots, \alpha_r\}
> $$
>
> $$
> \Rightarrow L(S) = L(\alpha_1, \alpha_2, \cdots, \alpha_r)
> $$
>
> 又 $\alpha_1, \cdots, \alpha_r$ 线性无关 $\Rightarrow$  是 $L(S)$ 的一组基
>
> $$
> \Rightarrow \dim L(S) = r = r(S)
> $$

/example/  设 $V_1, V_2$ 是 $V$ 的子空间，则  
$$
L(V_1 \cup V_2) = V_1 + V_2
$$

> 证明：
>
> 任取 $\alpha \in V_1 + V_2$，即 $\alpha = \alpha_1 + \alpha_2$，$\alpha_1 \in V_1$，$\alpha_2 \in V_2$ 
> $$
> \Rightarrow \alpha_1 \in V_1 \cup V_2,\quad\alpha_2 \in V_1 \cup V_2
> $$
>
> $$
> \Rightarrow \alpha \in L(V_1 \cup V_2)
> $$
>
> 另一方面：
>
> - $$
>   V_1 \subseteq V_1 + V_2,\quad\alpha_1 \in V_1\Rightarrow\alpha_1 = \alpha_1 + 0 \in V_1 + V_2
>   $$
>
>
> - $$
>   V_2 \subseteq V_1 + V_2,\quad\alpha_2 \in V_2 \Rightarrow \alpha_2 = 0 + \alpha_2 \in V_1 + V_2
>   $$
>
> $$
> \Rightarrow V_1 \cup V_2 \subseteq V_1 + V_2
> $$
>
> $$
> \Rightarrow L(V_1 \cup V_2) \subseteq V_1 + V_2
> $$
>
> 结合得：
> $$
> L(V_1 \cup V_2) = V_1 + V_2
> $$

**推广**：若 $V_1, \cdots, V_m$ 是子空间，则  
$$
L(V_1 \cup \cdots \cup V_m) = V_1 + \cdots + V_m
$$
**定理6**（维数公式）：设 $V_1, V_2$ 是 $V$ 的子空间，则  
$$
\dim(V_1 + V_2) = \dim V_1 + \dim V_2 - \dim(V_1 \cap V_2)
$$

> 证明：
>
> 取 $V_1 \cap V_2$ 的一组基 $\{\alpha_1, \cdots, \alpha_r\}$，记 $r = \dim(V_1 \cap V_2)$。
>
> 将该基**扩充**为 $V_1$ 的基：  
> $$
> \{\alpha_1, \cdots, \alpha_r, \beta_1, \cdots, \beta_{m-r}\}
> $$
>
> 将该基**扩充**为 $V_2$ 的基：  
> $$
> \{\alpha_1, \cdots, \alpha_r, \gamma_1, \cdots, \gamma_{n-r}\}
> $$
>
> 要证：  
> $$
> \{\alpha_1, \cdots, \alpha_r, \beta_1, \cdots, \beta_{m-r}, \gamma_1, \cdots, \gamma_{n-r}\}
> $$
> 是 $V_1 + V_2$ 的一组基。
>
> 任取 $\nu \in V_1 + V_2$，则 $\nu = \nu_1 + \nu_2$，$\nu_1 \in V_1$，$\nu_2 \in V_2$
>
> $$
> \nu_1=\{ \alpha_1, \cdots, \alpha_r, \beta_1, \cdots, \beta_{m-r} \}\\
> \nu_2=\{\alpha_1, \cdots, \alpha_r,\gamma_1, \cdots, \gamma_{n-r} \}
> $$
> 考虑线性组合：
> $$
> \lambda_1\alpha_1 + \cdots + \lambda_r\alpha_r + \mu_1\beta_1 + \cdots + \mu_{m-r}\beta_{m-r} + k_1\gamma_1 + \cdots + k_{n-r}\gamma_{n-r} = 0
> $$
>
> 将前两部分归入 $V_1$，后一部分归入 $V_2$：
>
> $$
> \lambda_1\alpha_1 + \cdots + \lambda_r\alpha_r + \mu_1\beta_1 + \cdots + \mu_{m-r}\beta_{m-r} \in V_1 \\
> = -(k_1\gamma_1 + \cdots + k_{n-r}\gamma_{n-r}) \in V_2
> $$
>
> $\Rightarrow$ 上面两组向量 $\in V_1 \cap V_2$
>
> 又因 $\{\alpha_1, \cdots, \alpha_r\}$ 是 $V_1 \cap V_2$ 的基，故存在 $t_1, \cdots, t_r$ 使得：
> $$
> = t_1\alpha_1 + \cdots + t_r\alpha_r\\
> \Rightarrow k_1\gamma_1 + \cdots + k_{n-r}\gamma_{n-r} + t_1\alpha_1 + \cdots + t_r\alpha_r = 0\\
> \Rightarrow k_1 = \cdots = k_{n-r} = t_1 = \cdots = t_r = 0
> $$
>
> 代回得：
> $$
> \lambda_1\alpha_1 + \cdots + \lambda_r\alpha_r + \mu_1\beta_1 + \cdots + \mu_{m-r}\beta_{m-r} = 0\\
> \Rightarrow \lambda_1 = \cdots = \lambda_r = \mu_1 = \cdots = \mu_{m-r} = 0
> $$
>
> 当 $V_1 \cap V_2=O=\{0\}$ .
> $$
> \dim(V_1 + V_2) = \dim V_1 + \dim V_2
> $$

**定义7**：设 $V_1, \cdots, V_m$ 是 $V$ 的子空间，若对任意 $i = 1, \cdots, m$，  
$$
V_i \cap (V_1 + \cdots + V_{i-1} + V_{i+1} + \cdots + V_m) = \{0\}
$$
成立，则称 $V_1 + V_2 + \cdots + V_m$ 为 **直和**，记为：

$$
V_1 \oplus V_2 \oplus \cdots \oplus V_m
$$

> 注意：**两两相交为零不能保证直和！**

**定理8**：设 $V_1, \cdots, V_m$ 是 $V$ 的子空间，令 $V_0 = V_1 + V_2 + \cdots + V_m$，则以下条件等价：

1. $V_0 = V_1 \oplus V_2 \oplus \cdots \oplus V_m$；

2. 对任意 $i = 1, \cdots, m$，  
   $$
   V_i \cap (V_1 + \cdots + V_{i-1} + V_{i+1} + \cdots + V_m) = \{0\}
   $$

3. $\dim(V_1 + \cdots + V_m) = \dim V_1 + \cdots + \dim V_m$；

4. $V_i$ 的一组基可拼成 $V_0$ 的一组基；

5. 分块表示唯一：  
   $$
   \text{if }\ u = u_1 + u_2 + \cdots + u_m,\quad u_i \in V_i
   $$
   $\Rightarrow u_i$ 唯一

> 特别地，**零向量的分块表示唯一**：  
> $$
> 0 = u_1 + u_2 + \cdots + u_m,\quad u_i \in V_i \Rightarrow u_i = 0,\ \forall i
> $$

## Part 3 线性方程组的解

**定理1**（解的存在性与唯一性）—— **解的判定定理**

考虑线性方程组：
$$
\begin{cases}
a_{11}x_1 + a_{12}x_2 + \cdots + a_{1n}x_n = b_1 \\
a_{21}x_1 + a_{22}x_2 + \cdots + a_{2n}x_n = b_2 \\
\vdots \\
a_{m1}x_1 + a_{m2}x_2 + \cdots + a_{mn}x_n = b_m
\end{cases}
\tag{*}
$$
记为：

- 系数矩阵
  $$
  A = (a_{ij})_{m\times n}
  $$

- 未知向量
  $$
  \mathbf{x} = \begin{pmatrix} x_1 \\ x_2 \\ \vdots \\ x_n \end{pmatrix}
  $$

- 常数项
  $$
  \beta = \begin{pmatrix} b_1 \\ b_2 \\ \vdots \\ b_m \end{pmatrix}
  $$

- 增广矩阵
  $$
  \widetilde{A} = (A \mid \beta)
  $$

$(*)$ 有解 $\iff r(A) = r(\widetilde{A})$

且进一步有：

1. 若 $r(A) = r(\widetilde{A}) = n$，则 $(*)$ 有**唯一解**；
2. 若 $r(A) = r(\widetilde{A}) < n$，则 $(*)$ 有**无穷多解**；
3. 若 $r(A) \ne r(\widetilde{A})$，则 $(*)$ **无解**，此时 $r(\widetilde{A}) = r(A) + 1$ 

> **证明**：先证明 (*) 有解  $\Leftrightarrow r(A) = r(A\beta)$ 。
>
> 证明：列分块  $A = (\alpha_1, \alpha_2, \cdots, \alpha_n)$ 
>
>
> $$Ax = \beta \Leftrightarrow x_1\alpha_1 + x_2\alpha_2 + \cdots + x_n\alpha_n = \beta$$ 
>
> (*) 有解  $\Leftrightarrow \beta$  是  $\alpha_1, \alpha_2, \cdots, \alpha_n$  的线性组合。
>
> **必要性** 设 (x) 有解，则  $\beta$  是  $\alpha_1, \cdots, \alpha_n$  的线性组合。
>
> 设  $\{\alpha_1, \cdots, \alpha_n\}$  是  $A$  列向量的一个极大无关组， $r = r(A)$ 。
>
> 从而  $\beta$  是  $\alpha_1, \cdots, \alpha_r$  的线性组合，于是  $\{\alpha_1, \cdots, \alpha_r\}$  是  $A\beta$  的列向量的极大无关组。
>
> 从而  $r(A\beta) = r = r(A)$ 
>
> **充分性** 设  $r(A) = r(A\beta) = r$ ， $\{\alpha_1, \cdots, \alpha_r\}$  是  $A$  列向量的一个极大无关组。
>
> 从而  $\alpha_1, \cdots, \alpha_r$  是  $A$  列向量中线性无关的  $r$  个向量，又  $r(A\beta) = r$ 。
>
> 从而  $\{\alpha_1, \cdots, \alpha_r\}$  也是  $A\beta$  列向量的极大无关组，于是  $\beta$  是  $\alpha_1, \cdots, \alpha_r$  的线性组合，也是  $\alpha_1, \cdots, \alpha_n$  的线性组合，从而 (*) 有解。
>
> 若  $r(A) = r(A\beta) = n$ ，则  $\alpha_1, \cdots, \alpha_n$  线性无关。
>
> 由前定理可知， $\beta$  表示为  $\alpha_1, \cdots, \alpha_n$  的线性组合是唯一的，则 (x) 有唯一解。
>
> 若  $r(A) = r(A\beta) < n$ ，则  $\alpha_1, \alpha_2, \cdots, \alpha_r$  线性相关。
>
> $\exists$  不全为0的数  $c_1, c_2, \cdots, c_n \in k$ ，使得
>
> $$
> 0 = c_1\alpha_1 + c_2\alpha_2 + \cdots + c_n\alpha_n \cdots (1)
> $$
> (*) 有解， $\exists k_1, k_2, \cdots, k_n \in k$ ，使得
>
> $$
> \beta = k_1\alpha_1 + k_2\alpha_2 + \cdots + k_n\alpha_n \cdots (2)
> $$
>
> $$
> (1)xR + (2) : \beta = (k_1 + k_1c_1)\alpha_1 + \cdots + (k_n + k_nc_n)\alpha_n
> $$
>
> 解得：
> $$
> x_1 = k_1 + k_1c_1,\quad \cdots,\quad x_n = k_n + k_nc_n,\quad \forall k \in k
> $$
> $\Rightarrow$  (*) 有无穷多组解。

**定理2**：设 $Y$ 是 $Ax = \beta$ 的一个解（称为特解），则 $\alpha$ 是 $Ax = \beta$ 的解 $\Leftrightarrow \alpha - Y$ 是相应的齐次线性方程组 $Ax = 0$  的解。

> 证明：
> $$
> \Rightarrow A(\alpha - Y) = A\alpha - AY = \beta - \beta = 0
> $$
>
> $$
> \Leftarrow 0 = A(\alpha - Y) = A\alpha - AY = A\alpha - \beta = 0
> $$
>
> 即  $A\alpha = \beta$ ， $\alpha$  是  $Ax = \beta$  的解。
>
> 下面考虑齐次线性方程组  $Ax = 0 \cdots (**)$ 
>
> $r(A) = r(A|0) = r(A) \Rightarrow (**)$  有解，平凡解零解。
>
> 令  $V_A = \{x \in k^n | Ax = 0\}$  (**) 的解集。
>
> 断言  $V_A$  是  $k^n$  的线性子空间。
>
> $\forall \alpha, \beta \in V_A$ ，即
> $$
> A\alpha = A\beta = 0 \Rightarrow A(\alpha + \beta) = 0 \Rightarrow \alpha + \beta \in V_A
> $$
>
> $$
> \forall k \in k,\quad A(k\alpha) = k(A\alpha) = 0 \Rightarrow k\alpha \in V_A
> $$

**定理3** (齐次线性方程组解的结构定理)：设  $r(A) = r$ ，则  $V_A$  是  $k^n$  的  $n-r$  维子空间，从而有一组基  $\eta_1, \eta_2, \cdots, \eta_{n-r}$  使得  $Ax = 0$  的所有解都是  $\eta_1, \eta_2, \cdots, \eta_{n-r}$  的线性组合，称为 $(*)$ 的基础解系。

> 证明：这些对  $(*)$  在同解的基础上进行行初等变换  $\Leftrightarrow$  对  $A$  实施初等行变换。
>
> 由行初等变换可将  $A$  行向量的极大无关组调到前  $r$  行，
>
> 不妨  $A = (\alpha_1, \alpha_2, \cdots, \alpha_r)$  是  $A$  行向量的极大无关组。
>
> 通过第三类行变换  $A \rightarrow (\alpha_1, \alpha_2, \cdots, \alpha_r, 0, \cdots, 0)$  令  $A = (\alpha_1, \alpha_2, \cdots, \alpha_r)$ 
>
> $r(A) = r$  在列分列对换的情形下（等价于未知数对换）
>
> 不妨设  $A$  的列向量的极大无关组为前  $r$  列：
>
>
> $A = (b_1, b_2), r(B_2) = r,$ 从而 $B$ 非零
>
>
> $A = (b_1, b_2)$ 行变换 $\rightarrow (I_r, C)$
>
> 总之， $A$  通过初等行变换及列对换可变为如下 $R$ 阶
>
> $$
> A \rightarrow \begin{pmatrix} I_r & C \\ 0 & 0 \end{pmatrix}, C = (c_{ij})_{r \times (n-r)}
> $$
> 从而  $(*)$  与下列方程组同解：
>
>
> $$
> \begin{cases}
> x_1 + c_{11}x_{n-r+1} + \cdots + c_{1r}x_n = 0 \\
> x_2 + c_{21}x_{n-r+1} + \cdots + c_{2r}x_n = 0 \\
> \vdots \\
> x_r + c_{r1}x_{n-r+1} + \cdots + c_{rr}x_n = 0
> \end{cases}
> $$
> 令
> $$
> x_{r+1} = 1, x_{n+2} = \cdots = x_n = 0,\quad\eta_1 = \begin{pmatrix} -c_{1,r+1} \\ -c_{2,r+1} \\ \vdots \\ -c_{n,r+1} \\ 1 \end{pmatrix}
> $$
> 令
> $$
> x_{r+2} = 1, x_{r+3} = \cdots = x_n = 0,\quad \eta_2 = \begin{pmatrix} -c_{1,r+2} \\ -c_{2,r+2} \\ \vdots \\ -c_{n,r+2} \\ 0 \\ 1 \end{pmatrix}
> $$
> $\cdots$ ，令  
> $$
> x_n = 1, x_{r+2} = \cdots = x_{n-1} = 0,\quad \eta_{n-r} = \begin{pmatrix} -c_{1,n} \\ -c_{2,n} \\ \vdots \\ -c_{n,n} \\ 0 \\ \vdots \\ 0 \\ 1 \end{pmatrix}
> $$
> 断言： $\{\eta_1, \eta_2, \cdots, \eta_{n-r}\}$  是 (#) 的解空间的一组基。
>
> 令  $x_1 + \lambda_{r+1}x_{r+1} + \cdots + \lambda_nx_n = 0 \Rightarrow \lambda_1 = \lambda_2 = \cdots = \lambda_{n-r} = 0$ 
>
> 任取 (#) 的解  $\eta = (a_1, a_2, \cdots, a_n)$ 
>
>
> $$
> \eta = \begin{pmatrix} a_1 \\ a_2 \\ \vdots \\ a_n \end{pmatrix} = \begin{pmatrix} -c_{1,r+1}a_{r+1} - \cdots - c_{1,n}a_n \\ -c_{2,r+1}a_{r+1} - \cdots - c_{2,n}a_n \\ \vdots \\ -c_{n,r+1}a_{r+1} - \cdots - c_{n,n}a_n \end{pmatrix} = a_{r+1}\eta_1 + a_{r+2}\eta_2 + \cdots + a_n\eta_{n-r}
> $$
>
> 于是， $\{\eta_1, \eta_2, \cdots, \eta_{n-r}\}$  也是 (x) 解空间的一组基 (基础解系)
>
> 从而  $\dim V_A = n - r = n - r(A)$ 

**定理4** (结构定理) 设  $r(A) = r(\widehat{A}) = r$ ，$r$ 是 (*) 的解。 $\{\eta_1, \eta_2, \cdots, \eta_{n-r}\}$  是相伴齐次线性方程组 (#) 的基础解系，则 $AX = \beta$ 的通解为
$$
r + k_1\eta_1 + k_2\eta_2 + \cdots + k_{n-r}\eta_{n-r},\quad k_i \in k
$$

> 证明：任取  $AX = \beta$  的解  $\alpha$ 
>
> 引理2  $\Rightarrow \alpha - Y$  是  $AX = 0$  的解
>
> 定理3
> $$
> \Rightarrow \alpha - Y = k_1\eta_1 + k_2\eta_2 + \cdots + k_{n-r}\eta_{n-r}
> $$
>
> $$
> \Rightarrow \alpha = Y + k_1\eta_1 + k_2\eta_2 + \cdots + k_{n-r}\eta_{n-r}
> $$

线性方程组  $AX = \beta$  的求解方法

> (1) 通过初等行变换将增广矩阵  $\widehat{A} = (A : \beta)$  变为阶梯形，判断  $r(A)$ 与 $r(\widehat{A})$ 的关系，确定解是否存在。
>
> (2) 继续对增广矩阵实施初等行变换和列对换，使之变为解方程组的标准型：
>
>
> $$
> \begin{bmatrix}
> I_r & C & r \\
> O & O & O
> \end{bmatrix}, C = (c_{ij})_{r \times (n-r)}
> $$
>
> 从而得到特解  $\begin{bmatrix} r  \\ O \end{bmatrix}$ ，基础解系  $\eta_1, \eta_2, \cdots, \eta_{n-r}$ 。
>
> (3) 根据列对换情况，调整各个分量，最后得到原方程的特解和基础解系。

**非齐次方程组**：  $AX = \beta$ ，其中  $\beta \neq 0$ 

结构定理
$$
\alpha = \gamma + k_1\eta_1 + k_2\eta_2 + \cdots + k_{n-r}\eta_{n-r}
$$
 $r$ 特解 $\{\eta_1, \cdots, \eta_{n-r}\}$ 是 $AX = 0$ 的基础解系。

**齐次方程组**：  $AX = 0$  的解空间  $V_A \subseteq k^n$  子空间
$$
\dim V_A = n - r(A)
$$
**推论6**：设  $Ax = \beta (\beta \neq 0)$  的解解为  $\gamma$ ，相伴齐次  $Ax = 0$  的基础解系为  $\eta_1, \cdots, \eta_{n-r}$ 。

(1)  $\gamma, \gamma + \eta_1, \cdots, \gamma + \eta_{n-r}$  线性无关

(2)  $Ax = \beta$  的任一解可表示为如下形式：

$$
\xi = \gamma + c_1(\gamma + \eta_1) + \cdots + c_{n-r}(\gamma + \eta_{n-r})
$$
 其中  $c_1 + c_2 + \cdots + c_{n-r} = 1$ 

> 证明：
>
> (1) 不妨设
> $$
> \lambda_0\gamma + \lambda_1(\gamma + \eta_1) + \cdots + \lambda_{n-r}(\gamma + \eta_{n-r}) = 0
> $$
>
> $$
> A(\lambda_0\gamma + \lambda_1(\gamma + \eta_1) + \cdots + \lambda_{n-r}(\gamma + \eta_{n-r})) = 0
> $$
>
> $$
> \Rightarrow (\sum_{i=0}^{n-r} \lambda_i)A\gamma = (\sum_{i=1}^{n-r} \lambda_i)A\eta_i = 0 \Rightarrow \sum_{i=0}^{n-r} \lambda_i = 0 \Rightarrow \lambda_0 = 0
> $$
>
> $$
> \Rightarrow \lambda_1\eta_1 + \cdots + \lambda_{n-r}\eta_{n-r} = 0 \Rightarrow \lambda_1 = \cdots = \lambda_{n-r} = 0 \Rightarrow \lambda_0 = 0
> $$
>
> (2)  任意解  
> $$
> \xi = \gamma + k_1\eta_1 + k_2\eta_2 + \cdots + k_{n-r}\eta_{n-r},\quad k_i \in K
> $$
>
> $$
> = (1 - k_1 - \cdots - k_{n-r})\gamma + k_1(\gamma + \eta_1) + k_2(\gamma + \eta_2) + \cdots + k_{n-r}(\gamma + \eta_{n-r})
> $$
>
> $$
> \Rightarrow \sum_{i=0}^{n-r} c_i = 1
> $$
>
> $$
> A((c_0 + c_1 + \cdots + c_{n-r})(\gamma + \eta_1) + \cdots + c_{n-r}(\gamma + \eta_{n-r})) = (c_0 + c_1 + \cdots + c_{n-r})A\gamma = \beta
> $$

方程 $A_{m\times n}x = 0$ , $V_A$  解空间
$$
\Rightarrow \dim_k V_A + r(A) = V_k
$$
**应用一**： $A: n$  阶方阵，叫  $A$  非奇异  $\Leftrightarrow Ax = 0$  只有零解。

> /example/ $A^2 - A - 3I_n = 0$ ，求证： $A - 2I_n$  非奇异。
>
> 证明：凑因子法，
> $$
> (A - 2I_n)(A + I_n) = I_n
> $$
> 线性方程组解法：只要证：$(A - 2I_n)x = 0$ 只有零解。
>
> $$
> Ax_0 = 2x_0
> $$
>
> $$
> A^2x_0 = 2Ax_0 = 4x_0
> $$
>
> $$
> (A^2 - A - 3I_n)x_0 = -x_0 = 0 \Rightarrow x_0 = 0
> $$

**应用二**：利用  $r(A)$  求  $V_A$ 、

> /example/ 设 $\lambda_1, \cdots, \lambda_n$ 是 $k$ 中不同的数，$1 \leq k \leq n-1$ 
> $$
> (I)\begin{cases}
> x_1 + x_2 + \cdots + x_n = 0 \\
> \lambda_1x_1 + \lambda_2x_2 + \cdots + \lambda_nx_n = 0 \\
> \quad\vdots \\
> \lambda_1^{k-1}x_1 + \lambda_2^{k-1}x_2 + \cdots + \lambda_n^{k-1}x_n = 0
> \end{cases}
> $$
>
> $$
> (II)\begin{cases}
> \lambda_1^kx_1 + \lambda_2^kx_2 + \cdots + \lambda_n^k x_n = 0 \\
> \quad\cdots \\
> \lambda_1^{n-1}x_1 + \lambda_2^{n-1}x_2 + \cdots + \lambda_n^{n-1}x_n = 0
> \end{cases}
> $$
>
> 设 (I) 解空间  $V_1$ ，(II) 解空间  $V_2$ 。证明： $k = V_1 \oplus V_2$ 
>
> > 证明： $V_1 \cap V_2$  是 (I) 与 (II) 联立之后新方程组的解空间 
> >
> > $$
> > (III)\begin{cases}
> > x_1 + x_2 + \cdots + x_n = 0 \\
> > \lambda_1x_1 + \lambda_2x_2 + \cdots + \lambda_nx_n = 0 \\
> > \quad\vdots \\
> > \lambda_1^{n-1}x_1 + \lambda_2^{n-1}x_2 + \cdots + \lambda_n^{n-1}x_n = 0
> > \end{cases}
> > $$
> > 系数矩阵为 $A$ .
> > $$
> > |A| = \prod_{i=1}^{n} (\lambda_i - \lambda) \neq 0
> > $$
> >
> > $$
> > r(A) = n \Rightarrow V_1 \cap V_2 = 0
> > $$
> >
> > $$
> > \Rightarrow V_1 \cap V_2 = V_3 = 0
> > $$
> >
> >
> > $$
> > A = \begin{pmatrix} A_1 \\ A_2 \end{pmatrix}
> > $$
> >
> > $$
> > r(A) = n,\quad \Rightarrow r(A_1) = r,\quad r(A_2) = n-k
> > $$
> >
> > $$
> > \dim V_1 = n - r(A_1) = n-k,\quad \dim V_2 = n - r(A_2) = k
> > $$
> >
> > $$
> > \dim (V_1 \oplus V_2) = (n-k) + k = n = dim K^n
> > $$

**应用三**：利用 $V_A$ 来求 $r(A)$ 

> /example/ 设 $A \in M_{mn}(R)$ ，证明：$r(AA^*) = r(A^*A) = r(A)$ 
>
> > 证明：
> > $$
> > AX = 0 \Rightarrow AA'X = 0 \subseteq V_A \subseteq V_{AA'}
> > $$
> >
> >
> > 任取 $x_0 \in V_{A'A}$ ，此时  $x_0 \in R^n$ 且 $A'Ax_0 = 0$ 
> >
> > 令 $X_0 = \begin{pmatrix} a_1 \\ a_2 \\ \vdots \\ a_n \end{pmatrix} \in R^m$ ， $(Ax_0)'(Ax_0) = 0$ 
> >
> >
> > $$
> > \Rightarrow [a_1, \cdots, a_m] \begin{bmatrix} a_1 \\ \vdots \\ a_m \end{bmatrix} = 0 \Rightarrow \sum_{i=1}^{m} a_i^2 = 0 \Rightarrow \forall i, a_i = 0
> > $$
> >
> > $$
> > \Rightarrow Ax_0 = 0 \Rightarrow V_{A'A} \subseteq V_A \Rightarrow V_A = V_{A'A} \Rightarrow r(A) = r(A'A)
> > $$

结束.