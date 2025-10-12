---
title: Chapter 4 线性方程组
createTime: 2025/09/30 23:22:15
permalink: /algebra/algebra-4/
---

## Part 1 矩阵的秩

**定义1**：设 $A$ 为 $m \times n$ 阶矩阵，
$$
A = 
\begin{bmatrix}
\alpha_1 \\
\alpha_2 \\
\vdots \\
\alpha_m
\end{bmatrix}
\quad  \qquad
A = (\beta_1, \beta_2, \dots, \beta_n)
$$

称 $\{\alpha_1, \alpha_2, \dots, \alpha_m\}$ 的秩为 $A$ 的**行秩**；  称 $\{\beta_1, \beta_2, \dots, \beta_n\}$ 的秩为 $A$ 的**列秩**。

**命题2**：矩阵的行秩、列秩在初等变换下不改变。

> 证明：  
>
> 下面只证**列秩**在初等列变换下不变，行秩的证明完全类似。
>
> 记 $r_c(A) = r\{\beta_1, \beta_2, \dots, \beta_n\}$ 为 $A$ 的列秩。
>
>
> 1° 先证 $r_c(A)$ 在初等变换下不变，记 $Q$ 为初等阵。
>
> (I)
> $$
> A P_{ij} = (\beta_1, \dots, \beta_j, \dots, \beta_i, \dots, \beta_n)
> $$
> (II)
> $$
> A P_{i}(c) = (\beta_1, \dots, c\beta_i, \dots, \beta_n) \quad (c \ne 0)
> $$
> (III)
> $$
> A T_{ji}(c) = (\beta_1, \dots, \beta_i, \dots, \beta_j + c\beta_i, \dots, \beta_n)
> $$
>
> > **关键观察**：  
> >
> > $AQ$ 的列向量都是 $A$ 的列向量的线性组合。  
> >
> > 反之，$A = (AQ)Q^{-1}$，所以 $A$ 的列向量也是 $AQ$ 的列向量的线性组合。
>
>  $\Rightarrow A$ 的列向量组与 $AQ$ 的列向量组**等价**
>
>  $\Rightarrow r_c(A) = r_c(AQ)$ ✅
>
> 2° 再证 $r_c(A)$ 在初等行变换下不改变。

**引理**：设 $A^{m \times n} = (\beta_1, \beta_2, \dots, \beta_n)$ 为列分块，$Q$ 为 $m$ 阶非异阵（可逆矩阵）, 若 $\{\beta_{i_1}, \beta_{i_2}, \dots, \beta_{i_r}\}$ 是 $A$ 的列向量的极大无关组，则 $\{Q\beta_{i_1}, Q\beta_{i_2}, \dots, Q\beta_{i_r}\}$ 是 $QA = (Q\beta_1, Q\beta_2, \dots, Q\beta_n)$ 的列向量的极大无关组。

> 第一步：先证 $Q\beta_{i_1}, \dots, Q\beta_{i_r}$ 线性无关。
>
> 设：
> $$
> \lambda_1 Q\beta_{i_1} + \lambda_2 Q\beta_{i_2} + \cdots + \lambda_r Q\beta_{i_r} = 0
> $$
>
> $$
> \Rightarrow Q(\lambda_1 \beta_{i_1} + \cdots + \lambda_r \beta_{i_r}) = 0
> $$
>
> 由于 $Q$ 可逆 $\Rightarrow Q^{-1}$ 存在，两边左乘 $Q^{-1}$ 得：
>
> $$
> \lambda_1 \beta_{i_1} + \cdots + \lambda_r \beta_{i_r} = 0
> $$
>
> 但 $\{\beta_{i_1}, \dots, \beta_{i_r}\}$ 线性无关 $\Rightarrow \lambda_1 = \cdots = \lambda_r = 0$
>
>  $\Rightarrow Q\beta_{i_1}, \dots, Q\beta_{i_r}$ 线性无关 ✅
>
> 第二步：再证 $Q\beta_j$ 都是 $Q\beta_{i_1}, \dots, Q\beta_{i_r}$ 的线性组合。
>
> 由 $\beta_j$ 是 $A$ 列向量的极大无关组可知：
>
> $$
> \beta_j = \mu_1 \beta_{i_1} + \mu_2 \beta_{i_2} + \cdots + \mu_r \beta_{i_r}
> $$
>
> 两边左乘 $Q$ 得：
>
> $$
> Q\beta_j = \mu_1 Q\beta_{i_1} + \cdots + \mu_r Q\beta_{i_r}
> $$
>
>  $\Rightarrow Q\beta_j$ 是 $Q\beta_{i_1}, \dots, Q\beta_{i_r}$ 的线性组合 ✅
> $$
> \Rightarrow Q\beta_j = \mu_1 Q\beta_{i_1} + \mu_2 Q\beta_{i_2} + \cdots + \mu_r Q\beta_{i_r}, \quad \forall 1 \leq j \leq n
> $$
> **结论**：  
>
> $\{Q\beta_{i_1}, \dots, Q\beta_{i_r}\}$ 是 $QA$ 的列向量的极大无关组，即为基。
>
> 因此，$r_c(QA) = r_c(A)$，故列秩在初等行变换下不变。

**引理**：初等行变换保持矩阵列向量极大无关组的列指标。

> **说明**：在引理中令 $Q$ 为初等阵，从而可得：
>
> $$
> r_c(QA) = r_c(A) = r
> $$
>
> 若 $A = 0$，则 $QA = 0$，此时 $r_c(QA) = r_c(A) = 0$

**定理3**：矩阵的行秩 = 列秩

> 证明：设 $A^{m \times n}$ 相抵于标准形：
> $$
> B = \begin{pmatrix}
> I_r & 0 \\
> 0 & 0
> \end{pmatrix}
> $$
>
> 由命题2知：
> - $A$ 的行秩 = $B$ 的行秩 = $r$
> - $A$ 的列秩 = $B$ 的列秩 = $r$
>
>  $\Rightarrow A$ 的行秩 = 列秩 = $r$ ✅

**命题3**：设 $A \in M_{m\times n}(K)$，则 $r(A) = r(A^T)$

> 证明：$r(A) = A$ 的行秩 = $A$ 的列秩 = $r(A^T)$ ✅

**推论4**：设 $A \in M_{m\times n}(K)$，则 $r(A) = r(A^T)$

> 注：这是定理3与命题3的直接推论。

**推论5**：设 $A \in M_{m\times n}(K)$，$P$ 为 $m$ 阶非异阵，$Q$ 为 $n$ 阶非异阵，则  
$$
r(PAQ) = r(A)
$$

> 证明：  
> $$
> PAQ = P_1 \cdots P_k AQ_1 \cdots Q_s, \quad P_i, Q_j 
> $$
>
> 为初等矩阵，由命题2（初等变换不改变秩），逐次应用可得：
> $$
> r(PAQ) = r(A) 
> $$

**推论6**：设 $A \in M_{m\times n}(K)$，$r = r(A)$，则存在非异阵 $P \in M_m(K)$，$Q \in M_n(K)$，使得  
$$
PAQ = \begin{pmatrix}
I_r & 0 \\
0 & 0
\end{pmatrix}
$$

> 注：这是矩阵相抵标准形的存在性结论。

**推论7**：设 $A, B \in M_{m\times n}(K)$，则  
$$
A \sim B \iff r(A) = r(B)
$$

> **充分性**：设 $r(A) = r(B) = r$，则  
> - $$
>   A \sim \begin{bmatrix} I_r & 0 \\ 0 & 0 \end{bmatrix}
>   $$
> - $$
>   B \sim \begin{bmatrix} I_r & 0 \\ 0 & 0 \end{bmatrix}
>   $$
>
>   
>
>  $\Rightarrow  A \sim B$ ✅
>
> **必要性**：若 $A \sim B$，则 $A$ 可通过初等变换变为 $B$，由命题2知 $r(A) = r(B)$ ✅

**定义** (满秩矩阵)：设 $A \in M_{m\times n}(K)$，

- 若 $r(A) = m \iff m$ 个行向量线性无关 $\Rightarrow$ 称 $A$ 为**行满秩阵**
- 若 $r(A) = n \iff n$ 个列向量线性无关 $\Rightarrow$ 称 $A$ 为**列满秩阵**

设 $A \in M_n(K)$，若 $r(A) = n \iff n$ 个行向量/列向量线性无关 $\Rightarrow$ 称 $A$ 为**满秩阵**

**推论8**：设 $A \in M_n(K)$，则 $A$ 非异 $\iff A$ 满秩

> **充分性**：$r(A) = n\Rightarrow$  由推论6  $\Rightarrow A \sim I_n \Rightarrow A$ 非异 ✅
>
> **必要性**：若 $A$ 非异 $\Rightarrow A = A \cdot I_n \Rightarrow$ 由推论5 $\Rightarrow  r(A) = r(I_n) = n$ ✅

**引理9**：设 $A$ 为阶梯形矩阵，$a_{k_1}, a_{k_2}, \dots, a_{k_r}$ 为 $A$ 的**阶梯点**，则 $r(A) = r =$ 非零行个数，且阶梯点所在列向量构成 $A$ 的列向量的极大无关组。

**命题**：设 $r(A) = r$，$A = (\beta_1, \beta_2, \dots, \beta_n)$，若 $\{\beta_{i_1}, \dots, \beta_{i_r}\}$ 满足以下条件之一：

1. $\beta_{i_1}, \dots, \beta_{i_r}$ 线性无关；  
2. $\beta_j$ 是 $\beta_{i_1}, \dots, \beta_{i_r}$ 的线性组合（对所有 $j$），

则 $\{\beta_{i_1}, \dots, \beta_{i_r}\}$ 是 $A$ 的列向量的极大无关组。

> 由引理9可知，**阶梯点所在列**是 $A$ 的列向量的极大无关组

> [!important]
>
> P1：求矩阵 $A$ 的秩及列向量极大无关组的方法
>
> > **(1)** 用行变换将 $A$ 化为阶梯形矩阵 $B$，设 $b_{k_1}, b_{k_2}, \dots, b_{k_r}$ 为 $B$ 的阶梯点；
> >
> > **(2)** $r(A) = r(B) = B$ 的非零行个数 $= r$；
> >
> > **(3)** $A = (\beta_1, \dots, \beta_n)$ 的极大无关组为：  
> > $$
> > \{\alpha_{k_1}, \alpha_{k_2}, \dots, \alpha_{k_r}\}
> > $$
> > 即对应于阶梯点所在列的原向量。
>
> P2：行、列向量组的秩的计算及线性关系的判定
>
> > **(1)** 将行、列向量排成一个矩阵 $A$，用 **P1 方法** 求出 $r(A)$，即为该向量组的秩；  
> >
> > **(2)** 若 $r(A) =$ 向量个数 $\Rightarrow$ 向量线性无关；若 $r(A) <$ 向量个数 $\Rightarrow$ 向量线性相关。
>
> P3：求行、列向量组的极大无关组的方法
>
> > **(1)** 将行、列向量按照列向量排成矩阵 $A$；
> >
> > **(2)** 按照 **P1 方法** 求出 $A$ 的列向量的极大无关组；$\Rightarrow$ 从而可得原向量组的极大无关组。

**定理10**：设 $A \in M_{m\times n}(K)$，则 $r(A) = r \iff$ 存在一个 $r$ 阶子式不等于零，且所有 $r+1$ 阶子式全为零

> 必要性：设 $r(A) = r$
>
>  $\Rightarrow A$ 的行秩 = $r\Rightarrow$ 存在 $r$ 行线性无关
>
> 不妨设前 $r$ 行线性无关。记 $A = (\alpha_1, \alpha_2, \dots, \alpha_m)$，行分块。
>
> 令 
> $$
> B = 
> \begin{bmatrix}
> \alpha_1 \\
> \alpha_2 \\
> \vdots \\
> \alpha_r
> \end{bmatrix}
> $$
> ，则 $r(B) = r$（行秩）
>
>  $\Rightarrow B$ 的列秩 = $r\Rightarrow$  前 $r$ 列线性无关
>
> 构造矩阵：
> $$
> C = 
> \begin{bmatrix}
> \alpha_{i_1} & \alpha_{i_2} & \cdots & \alpha_{i_r} \\
> \alpha_{j_1} & \alpha_{j_2} & \cdots & \alpha_{j_r} \\
> \vdots & \vdots & \ddots & \vdots \\
> \alpha_{k_1} & \alpha_{k_2} & \cdots & \alpha_{k_r}
> \end{bmatrix}
> \quad \Rightarrow \quad r(C) = r
> $$
>
> 即 $C$ 为满秩矩阵 ⇒ $|C| \ne 0$
>
> 故存在一个 $r$ 阶子式非零。
>
> 再证所有 $r+1$ 阶子式为零：
>
> 任取 $r+1$ 阶子式 $A\left( \begin{array}{c} 1 & 2 & \cdots & r \\ 1 & 2 & \cdots & j \end{array} \right)$，其中 $j > r$
>
> 令
> $$
> A' = 
> \begin{bmatrix}
> \alpha_1 \\
> \alpha_2 \\
> \vdots \\
> \alpha_{r+1}
> \end{bmatrix}
> $$
> 因为 $r(A) = r$ ⇒ $\alpha_1, \dots, \alpha_{r+1}$ 线性相关
>
> 设 $\alpha = (\alpha_1, \dots, \alpha_n) \in K^n$，且 $T_{r+1}\alpha = (\alpha_1, \dots, \alpha_r)$
>
>  $\Rightarrow T_{r+1}\alpha_1, T_{r+1}\alpha_2, \dots, T_{r+1}\alpha_{r+1}$ 线性相关
>
>  $\Rightarrow$ 所有 $r+1$ 阶子式为零 ✅
> $$
> \begin{bmatrix}
> T_{r+1}\alpha_1 \\
> T_{r+1}\alpha_2 \\
> \vdots \\
> T_{r+1}\alpha_{r+1}
> \end{bmatrix}
> =
> \begin{bmatrix}
> \alpha_{i_1} & \alpha_{i_2} & \cdots & \alpha_{i_{r+1}} \\
> \alpha_{j_1} & \alpha_{j_2} & \cdots & \alpha_{j_{r+1}} \\
> \vdots & \vdots & \ddots & \vdots \\
> \alpha_{k_1} & \alpha_{k_2} & \cdots & \alpha_{k_{r+1}}
> \end{bmatrix}
> $$
> 不满秩
> $$
> \Rightarrow A\left( \begin{array}{c} 1 & 2 & \cdots & r+1 \\ 1 & 2 & \cdots & j+1 \end{array} \right) = |C| = 0
> $$
> 充分性：
>
> 由 $r+1$ 阶子式全为零，以及 **Laplace 定理**，可证明 $A$ 的任一大于 $r$ 阶子式全为 0。
>
> 设 $r(A) = t$，则由必要性 $\Rightarrow A$ 有一个 $t$ 阶子式 $\neq 0$，且所有 $t+1$ 阶子式全为 0。
>
> - 若 $t > r$，则存在一个 $t$ 阶子式 $\neq 0$，但 $t > r$，与“所有 $r+1$ 阶子式为 0”矛盾！
> - 若 $t < r$，则存在一个 $r$ 阶子式 $\neq 0$，但 $r > t$，与“所有 $t+1$ 阶子式为 0”矛盾！
>
>  故 $t = r \Rightarrow  r(A) = r$ ✅

例1：设 $C = \begin{bmatrix} A & O \\ O & B \end{bmatrix}$，则  
$$
r(C) = r(A) + r(B)
$$

> 设 $P_1, P_2, Q_1, Q_2$ 为非异阵，使得
> $$
> P_1 A Q_1 = \begin{bmatrix} I_{r_1} & O \\ O & O \end{bmatrix}, \quad P_2 B Q_2 = \begin{bmatrix} I_{r_2} & O \\ O & O \end{bmatrix}
> $$
>
> 构造：
> $$
> \begin{bmatrix}
> P_1 & O \\
> O & P_2
> \end{bmatrix}
> \begin{bmatrix}
> A & O \\
> O & B
> \end{bmatrix}
> \begin{bmatrix}
> Q_1 & O \\
> O & Q_2
> \end{bmatrix}
> =
> \begin{bmatrix}
> P_1 A Q_1 & O \\
> O & P_2 B Q_2
> \end{bmatrix}
> =
> \begin{bmatrix}
> I_{r_1} & O & O & O \\
> O & O & O & O \\
> O & O & I_{r_2} & O \\
> O & O & O & O
> \end{bmatrix}
> \to
> \begin{bmatrix}
> I_{r_1} & O & O & O \\
> O & O & O & O \\
> O & O & I_{r_2} & O \\
> O & O & O & O
> \end{bmatrix}
> $$
>
> 即化为对角块形式，非零行数为 $r_1 + r_2$
>
> $\Rightarrow r(C) = r_1 + r_2 = r(A) + r(B)$ ✅

**性质**：矩阵乘以非异阵，秩不改变 $\Rightarrow$ 分块矩阵在分块初等变换下，秩不变

例2：设 $C = \begin{bmatrix} A & D \\ O & B \end{bmatrix}$ 或 $\begin{bmatrix} A & O \\ D & B \end{bmatrix}$，则  
$$
r(C) \geq r(A) + r(B)
$$

> 证明（以第一种为例）：
>
> $$
> \begin{bmatrix}
> P_1 & O \\
> O & P_2
> \end{bmatrix}
> \begin{bmatrix}
> A & D \\
> O & B
> \end{bmatrix}
> \begin{bmatrix}
> Q_1 & O \\
> O & Q_2
> \end{bmatrix}
> =
> \begin{bmatrix}
> P_1 A Q_1 & P_1 D Q_2 \\
> O & P_2 B Q_2
> \end{bmatrix}
> =
> \begin{bmatrix}
> I_{r_1} & O & 0 & 0 \\
> O & O & O & D_{22} \\
> O & O & I_{r_2} & O \\
> O & O & O & O
> \end{bmatrix}
> \to
> \begin{bmatrix}
> I_{r_1} & O & O & O \\
> O & D_{22} & O & O \\
> O & O & I_{r_2} & O \\
> O & O & O & O
> \end{bmatrix}
> $$
>
> 进一步化简得：
> $$
> \begin{bmatrix}
> I_{r_1} & D_{12} \\
> O & I_{r_2}
> \end{bmatrix}
> $$
>
> (通过列变换消元)
> $$
> \Rightarrow r(C) = r_1 + r_2 = r(A) + r(B)
> $$
>
> > 注：若 $D = 0$，则 $r(C) = r(A) + r(B)$；否则可能更大，但至少等于。
>
> 所以一般有：
> $$
> r(C) \geq r(A) + r(B)
> $$
>
> 当且仅当 $A = 0$ 时等号成立 $\iff$ 矩阵方程 $AX + YB = 0$ 有解 $\iff D = 0$

例3（秩的降阶公式）设 $M = \begin{pmatrix} A & B \\ C & D \end{pmatrix}$，则：

**(1)** 若 $A$ 非异，则  
$$
r(M) = r(A) + r(D - CA^{-1}B)
$$

**(2)** 若 $D$ 非异，则  
$$
r(M) = r(D) + r(A - BD^{-1}C)
$$

**(3)** 若 $A, D$ 均非异，则  
$$
r(A) + r(D - CA^{-1}B) = r(D) + r(A - BD^{-1}C)
$$

> **证明**：只需证 (1) 即可。
>
> 对分块矩阵进行初等行变换：
> $$
> \begin{pmatrix}
> A & B \\
> C & D
> \end{pmatrix}
> \stackrel{-C A^{-1}}{\longrightarrow}
> \begin{pmatrix}
> A & B \\
> 0 & D - C A^{-1} B
> \end{pmatrix}
> {\longrightarrow}
> \begin{pmatrix}
> I_n & A^{-1}B \\
> 0 & D - C A^{-1}B
> \end{pmatrix}
> \to
> \begin{pmatrix}
> I_n & O \\
> 0 & D - C A^{-1}B
> \end{pmatrix}
> $$
>
> 由 **例1** 得：
> $$
> r(M) = r(A) + r(D - C A^{-1}B)
> $$
>

例4：设 $A$ 为 $n$ 阶方阵，则
$$
A=A^2 \iff r(A)+r(I_n-A)=n
$$

> 通过初等变换能够推出：
> $$
> \Rightarrow rank \begin{bmatrix}
> A & O \\
> O & I_n-A
> \end{bmatrix}=rank
> \begin{bmatrix}
> A-A^2 & O \\
> O & I_n
> \end{bmatrix}
> $$
>
> 根据例一，我们能得到结论：
> $$
> r(A)+r(I_n-A)=r(A-A^2)+r(I_n)
> $$
> 充分性：
> $$
> r(A-A^2)=0\Rightarrow A=A^2
> $$
> 必要性：
> $$
> A^2=A\Rightarrow r(A-A^2)=0
> $$
> 推出等式成立.

**定理11** (Sylvester 不等式)：设 $A \in M_{m\times n}(K)$ ， $B \in M_{n\times p}(K)$，则  
$$
r(A) + r(B) - n \leq r(AB) \leq \min\{r(A), r(B)\}
$$

> 证明：
>
> 第一步：先证 $r(AB) \leq r(B)$
>
> 令 $B = (\beta_1, \beta_2, \dots, \beta_p)$，设 $\{\beta_{i_1}, \dots, \beta_{i_r}\}$ 是 $B$ 的列向量极大无关组。
>
> 断言：$AB$ 的每一列是 $A\beta_{i_1}, \dots, A\beta_{i_r}$ 的线性组合。
>
> 因为：
> $$
> \forall j \leq p, \quad \beta_j = \lambda_1 \beta_{i_1} + \cdots + \lambda_r \beta_{i_r}
> \Rightarrow A\beta_j = \lambda_1 A\beta_{i_1} + \cdots + \lambda_r A\beta_{i_r}
> $$
>
>  $\Rightarrow AB = (A\beta_1, \dots, A\beta_p)$ 的每一列都可由 $\{A\beta_{i_1}, \dots, A\beta_{i_r}\}$ 线性表示
>
>  $\Rightarrow r(AB) \leq r$ ⇒ $r(AB) \leq r(B)$
>
> 同理，$r(AB) = r(BA) \leq r(A)$
>
>  $\Rightarrow r(AB) \leq \min\{r(A), r(B)\}$ ✅
>
> 再证 Sylvester 不等式（下界）：
>
> 构造分块矩阵：
> $$
> \begin{pmatrix}
> A & O \\
> I_n & B
> \end{pmatrix}
> \to
> \begin{pmatrix}
> O & AB \\
> I_n & B
> \end{pmatrix}
> \to
> \begin{pmatrix}
> O & AB \\
> I_n & O
> \end{pmatrix}
> \to
> \begin{pmatrix}
> AB & O \\
> O & I_n
> \end{pmatrix}
> $$
>
> 即通过初等变换得到：
> $$
> \begin{pmatrix}
> AB & O \\
> O & I_n
> \end{pmatrix}
> \Rightarrow r\left(\begin{pmatrix} A & O \\ I_n & B \end{pmatrix}\right) = r(AB) + n
> $$
>
> 另一方面，该矩阵的秩满足：
> $$
> r\left(\begin{pmatrix} A & O \\ I_n & B \end{pmatrix}\right) \geq r(A) + r(B)
> $$
>
>  $\Rightarrow r(AB) + n \geq r(A) + r(B)$
>
>  $\Rightarrow r(AB) \geq r(A) + r(B) - n$ 

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
>  $$Ax = \beta \Leftrightarrow x_1\alpha_1 + x_2\alpha_2 + \cdots + x_n\alpha_n = \beta$$ 
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
>  $\exists$  不全为0的数  $c_1, c_2, \cdots, c_n \in k$ ，使得
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
>  $\Rightarrow$  (*) 有无穷多组解。

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
>  $r(A) = r(A|0) = r(A) \Rightarrow (**)$  有解，平凡解零解。
>
> 令  $V_A = \{x \in k^n | Ax = 0\}$  (**) 的解集。
>
> 断言  $V_A$  是  $k^n$  的线性子空间。
>
>  $\forall \alpha, \beta \in V_A$ ，即
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
>  $r(A) = r$  在列分列对换的情形下（等价于未知数对换）
>
> 不妨设  $A$  的列向量的极大无关组为前  $r$  列：
>
>
>  $A = (b_1, b_2), r(B_2) = r,$ 从而 $B$ 非零
>
>
>  $A = (b_1, b_2)$ 行变换 $\rightarrow (I_r, C)$
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
>  $\cdots$ ，令  
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
