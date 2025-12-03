---
title: Chapter 4 rank
createTime: 2025/09/30 23:22:15
permalink: /algebra/algebra-4/
---

## Part 1 向量组的秩

$V$ 为 $K$ 上的线性空间，向量族为 $V$ 中向量的集合；向量组为 $V$ 中有限向量的集合.

**定义1**：

> 设 $S$ 是 $V$ 的向量族，若存在 $S$ 中的向量组 $\{\alpha_1, \alpha_2, \cdots, \alpha_r\}$，使得：
>
> 1. $\alpha_1, \alpha_2, \cdots, \alpha_r$ 线性无关；  
> 2. $S$ 中任一向量都是 $\alpha_1, \alpha_2, \cdots, \alpha_r$ 的线性组合，
>
> 则称 $\{\alpha_1, \alpha_2, \cdots, \alpha_r\}$ 为 $S$ 的**极大线性无关组**或**极大无关组**。

> [!important]
>
> - $\{\alpha_1, \alpha_2, \cdots, \alpha_r\}$ 线性无关。  
> - $\forall \alpha \in S$ ，$\{\alpha_1, \alpha_2, \cdots, \alpha_r, \alpha\}$ 线性相关。

**命题2**：包含非零向量的向量组 $S$ 必存在极大无关组。

> 对 $S$ 的向量个数 $\#S$ 进行归纳。
>
> - 若 $\#S = 1$，$S = \{\alpha\}$，$\alpha \neq 0$，极大无关组为 $\{\alpha\}$。✅
>
> - 下设 $\#S < k$ 时结论成立，下证 $\#S = k$ 的情形。
>
> (1). 若 $S$ 中 $k$ 个向量线性无关，则此时 $S$ 即为自己的极大无关组。  
>
> (2). 若 $S$ 中 $k$ 个向量线性相关，由定理，$\exists \alpha \in S$，使得 $\alpha$ 是 $S \setminus \{\alpha\}$ 中向量的线性组合。
>
> $\#(S \setminus \{\alpha\}) = k - 1$，断言 $S \setminus \{\alpha\}$ 包含非零向量。
>
> 用反证法：若 $S \setminus \{\alpha\}$ 都是零向量，由假设 $\alpha = 0$。这与 $S$ 包含非零向量矛盾！
>
> 由归纳假设，$S \setminus \{\alpha\}$ 存在极大无关组 $\{\alpha_1, \alpha_2, \cdots, \alpha_r\}$。
>
> 由假设 $\alpha$ 能线性表示 $S \setminus \{\alpha\}$ 能线性表示 $\{\alpha_1, \alpha_2, \cdots, \alpha_r\}$，  
>    （线性表示）
>
> $$
>    \Rightarrow \{\alpha_1, \alpha_2, \cdots, \alpha_r\}
> $$
>
> 是 $S$ 的极大无关组.

**引理3**：设 $A, B$ 为向量组，且 $A$ 中任一向量都是 $B$ 中向量的线性组合。若 $A$ 中向量线性无关，则 $\#A \leq \#B$。

> 证明：
>
> 设  
> $$
> A = \{\alpha_1, \alpha_2, \cdots, \alpha_r\}, \quad \#A = r \\
> B = \{\beta_1, \beta_2, \cdots, \beta_s\}, \quad \#B = s
> $$
>
> 用反证法，设 $r > s$，我们来推出矛盾！
>
> 由假设：  
> $$
> \alpha_i = \lambda_{i1}\beta_1 + \lambda_{i2}\beta_2 + \cdots + \lambda_{is}\beta_s, \quad \lambda_{ij} \in K
> $$
>
> 由 $A$ 线性无关，则 $\alpha_1 \neq 0$，从而 $\lambda_1, \cdots, \lambda_s$ 不全为 0。
>
> 不妨设 $\lambda_1 \neq 0$，则  
> $$
> \beta_1 = \frac{1}{\lambda_1}\alpha_1 - \frac{\lambda_2}{\lambda_1}\beta_2 - \cdots - \frac{\lambda_s}{\lambda_1}\beta_s
> $$
>
> $$
> \{\alpha_1, \cdots, \alpha_r\} \overset{\text{linear}}\rightarrow \{\beta_1, \beta_2, \cdots, \beta_s\} \overset{\text{linear}}\rightarrow \{\alpha_1, \beta_2, \cdots, \beta_s\}
> $$
>
> 证明了：$\forall i \leq r$，$\alpha_i$ 是 $\{\alpha_1, \cdots, \beta_s\}$ 的线性组合。
>
> **假设**：$\forall k < i \leq r$，$\alpha_i$ 是 $\{\alpha_1, \cdots, \alpha_k, \alpha_{k+1}, \cdots, \beta_s\}$ 的线性组合。
>
> 令  
> $$
> \alpha_{k+1} = \mu_1\alpha_1 + \cdots + \mu_k\alpha_k + \mu_{k+1}\beta_{k+1} + \cdots + \mu_s\beta_s
> $$
>
> 若 $\mu_{k+1} = \cdots = \mu_s = 0$，则 $\alpha_{k+1}$ 是 $\alpha_1, \cdots, \alpha_k$ 的线性组合，这与 $A$ 线性无关矛盾！
>
> 故不妨设 $\mu_{k+1} \neq 0$，从而  
> $$
> \beta_{k+1} = -\frac{\mu_1}{\mu_{k+1}}\alpha_1 - \cdots - \frac{\mu_k}{\mu_{k+1}}\alpha_k + \frac{1}{\mu_{k+1}}\alpha_{k+1} - \frac{\mu_{k+2}}{\mu_{k+1}}\beta_{k+2} - \cdots - \frac{\mu_s}{\mu_{k+1}}\beta_s
> $$
>
> $$
> \{\alpha_{k+2}, \cdots, \alpha_r\} \overset{\text{linear}}\rightarrow \{\alpha_1, \cdots, \alpha_k, \alpha_{k+1}, \cdots, \beta_s\} \overset{\text{linear}}\rightarrow \{\alpha_1, \cdots, \alpha_k, \alpha_{k+1}, \beta_{k+2}, \cdots, \beta_s\}
> $$
>
> 证明了：$\forall k+1 < i \leq r$，$\alpha_i$ 都是 $\{\alpha_1, \cdots, \alpha_k, \alpha_{k+1}, \beta_{k+2}, \cdots, \beta_s\}$ 的线性组合。
>
> 最后，$\forall s < i \leq r$，$\alpha_i$ 是 $\{\alpha_1, \cdots, \alpha_s\}$ 的线性组合。
>
> $\Rightarrow \alpha_r$ 是 $\alpha_1, \cdots, \alpha_s$ 的线性组合，这与 $A$ 线性无关矛盾！

**推广4**：若多的向量组可用少的向量组线性表示，则多的向量必线性相关。

**引理5**：设 $A, B$ 为两个线性无关的向量组，$A$ 的任一向量都是 $B$ 中向量的线性组合，且 $B$ 的任一向量都是 $A$ 中向量的线性组合，则 $\#A = \#B$。

**推论6**：设 $A, B$ 是向量族 $S$ 的极大无关组，则 $\#A = \#B$。

> **证明**：
>
> - $A, B$ 线性无关  
>
> - $$
>   A \subseteq S \overset{\text{linear}}\rightarrow B
>   $$
>
> - $$
>   B \subseteq S \overset{\text{linear}}\rightarrow A
>   $$
>
> 由引理5  $\Rightarrow\#A = \#B$.

**定义7**：向量族 $S$ 中极大线性无关组的向量个数称为 $S$ 的秩，记为 $\text{rank}(S)$ 或 $r(S)$。由推论6知，秩的定义不依赖于极大无关组的选择。约定由零向量构成的向量组秩为 0.

**定义8**：设 $A, B$ 是两个向量组，若 $A$ 中的每个向量都可以用 $B$ 中的向量线性表示，且 $B$ 中的每个向量也可以用 $A$ 中的向量线性表示，则称 $A, B$ 为等价的向量组。

**推论9**：等价的向量组有相同的秩。

> 1. 若 $A$ 或 $B$ 是由零向量构成，则另一个也必是由零向量构成，从而 $r(A) = r(B) = 0$.
>
> 2. 若 $A, B$ 至少有一个非零向量，则：
>
>    设 $A_1$ 是 $A$ 的一个极大线性无关组，$B_1$ 是 $B$ 的一个极大线性无关组。
>
>    由命题2，有 $r(A) = \#A_1$，$r(B) = \#B_1$。
>
>    因为 $A_1 , B_1$ 线性无关，所以
>    $$
>    A_1 \subseteq A \overset{\text{linear}}\rightarrow B \overset{\text{linear}}\rightarrow B_1\\
>    B_1 \subseteq B \overset{\text{linear}}\rightarrow A \overset{\text{linear}}\rightarrow A_1
>    $$
>    所以 $A_1 = B_1$，于是 $\#A_1 = \#B_1$，即 $r(A) = r(B)$.
>
> > **结论**：等价向量组的秩相等.

若 $S = V_k$，则：极大线性无关组 $\rightarrow$ 基；秩 $\rightarrow$ 维数

**定义10**：设 $V_k$ 为线性空间，若存在 $V$ 中线性无关的向量组 $\{e_1, e_2, \dots, e_n\}$，使得 $V$ 中任一向量都是 $\{e_1, e_2, \dots, e_n\}$ 的线性组合，则称 $\{e_1, e_2, \dots, e_n\}$ 为 $V$ 的一组基，$V$ 的维数为 $n$（记为 $\dim_k V = n$），$V$ 称为 $k$ 上的 $n$ 维线性空间。若不存在有限个向量构成 $V$ 的一组基，则称 $V$ 为无限维线性空间。

> 修正线性表示与线性无关的定义  $\Rightarrow V_k$ 上都存在基
>
> 选择公理或 Zorn 引理  $\Rightarrow V_k$ 上都存在基

**推论11**：在 $n$ 维线性空间 $V$ 中，超过 $n$ 个向量的向量组必线性相关。

> 📌 **注**：这是线性代数中非常重要的结论，常用于判断向量组的线性相关性。

**定理12**：

> 若下列条件之一成立：
>
> 1. $e_1, e_2, \dots, e_n$ 线性无关；  
> 2. $V$ 中任一向量都是 $e_1, e_2, \dots, e_n$ 的线性组合，
>
> 则 $\{e_1, \dots, e_n\}$ 是 $V$ 的一组基。
>
> > /proof/
> >
> > 情况1：设 (1) 成立，即 $e_1, \dots, e_n$ 线性无关。
> >
> > 因为 $\dim V = n$，所以对任意 $\alpha \in V$，由 **推论11** 可知：$e_1, \dots, e_n, \alpha$ 必线性相关。
> >
> > 由前一定理可知，$\alpha$ 是 $e_1, \dots, e_n$ 的线性组合。 ✅
> >
> > 因此，(2) 也成立。
> >
> > 情况2：设 (2) 成立，即 $V$ 中任一向量是 $\{e_1, \dots, e_n\}$ 的线性组合。
> >
> > 可设 $\{e_1, \dots, e_r\}$ 是 $\{e_1, \dots, e_n\}$ 的极大线性无关组。
> >
> > 由于
> > $$
> > V \overset{\text{linear}}\rightarrow \text{span}\{e_1, \dots, e_n\} \Rightarrow \text{span}\{e_1, \dots, e_r\} \overset{\text{linear}}\rightarrow V
> > $$
> > 又因 $\{e_1, \dots, e_r\}$ 是极大无关组，且生成 $V$，故它是 $V$ 的一组基。$\Rightarrow\dim V = r = n$ ✅

**命题13**：设 $V$ 为 $n$ 维线性空间，$\{v_1, \dots, v_m\}$（$m < n$）为线性无关的向量，$\{e_1, \dots, e_n\}$ 为 $V$ 的一组基. 则存在 $n - m$ 个向量（不妨设为 $e_1, \dots, e_{n-m}$ ），使得 
$$
\{v_1, \dots, v_m, e_1, \dots, e_{n-m}\}
$$
是 $V$ 的一组基.

> 先证：存在 $1 \leq i \leq m$，使得 $v_1, \dots, v_m, e_i$ 线性无关。
>
> 用**反证法**：假设对所有 $1 \leq i \leq m$，都有 $v_1, \dots, v_m, e_i$ 线性相关。
>
> 由前一定理可知，$e_i$ 是 $v_1, \dots, v_m$ 的线性组合（对每个 $i$）。
>
> 于是：
> $$
> \{e_1, \dots, e_n\} \overset{\text{linear}}\rightarrow \text{span}\{v_1, \dots, v_m\}
> $$
>
> 但 $\{e_1, \dots, e_n\}$ 线性无关 ⇒ $n \leq m$，这与 $m < n$ 矛盾！
>
> 因此，必存在某个 $i$，使得 $v_1, \dots, v_m, e_i$ 线性无关。
>
> 不妨设 $v_1, \dots, v_m, e_1$ 线性无关。
>
> 继续添加其他 $e_j$：
>
> - 若 $m+1 = n$，则 $\{v_1, \dots, v_m, e_1\}$ 就是 $V$ 的一组基；
> - 若 $m+1 < n$，同理可找到下一个 $e_j$，使得新向量组仍线性无关。
>
> 最终得到 $n$ 个线性无关向量，构成 $V$ 的一组基。
>
> 由 **定理12**，该组为基。 ✅

**定理14**（基扩张定理）：设 $V$ 为 $n$ 维线性空间，则：

1. $V$ 中任一线性无关的向量组可以扩充为 $V$ 的一组基；  
2. 子空间 $U$ 的基可以扩张为全空间 $V$ 的一组基。

## Part 2 矩阵的秩

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

