---
title: 数理统计
createTime: 2025/09/17 23:21:42
permalink: /statistics/statistics-2/
---

# Chapter 2 数理统计

## Part 1 大数定理与中心极限定理

### · 切比雪夫不等式

设随机变量 $X$ 的期望为 $E(X)$，方差为 $D(X)$，则对于任意给定的 $\epsilon > 0$，有：

$$
P\{|X - E(X)| \geq \epsilon\} \leq \frac{D(X)}{\epsilon^{2}}
$$

或等价地

$$
P\{|X - E(X)| < \epsilon\} \geq 1 - \frac{D(X)}{\epsilon^{2}}
$$

> **说明**：
>
> 1. 该不等式给出了随机变量偏离期望值的概率上界
> 2. 方差 $D(X)$ 越小，偏离概率的上界越小
> 3. 适用于任何具有有限方差的随机变量

### · 大数定律

**大数定理**：在大量重复试验中，样本平均数会趋近于理论期望值。换句话说，当试验次数足够多时，实验结果的平均值会接近预期的长期平均值。

> **切比雪夫大数定律 (Chebyshev's LLN)**.
>
> **条件**：
>
> 1. 随机变量序列 $X_{1},X_{2},\cdots,X_{n},\cdots$ 相互独立
> 2. 数学期望 $EX_{i}$ 和方差 $DX_{i}$ 都存在
> 3. 方差有公共上界：$DX_{i}\leq c$ ($i=1,2,\cdots$)
>
> **结论**：  对任意 $\epsilon>0$，有
> $$
> \lim_{n\to\infty}P\left\{\left|\frac{1}{n}\sum_{i=1}^{n}X_{i}-\frac{1}{n}\sum_{i=1}^{n}EX_{i}\right|<\epsilon\right\}=1
> $$
>
> **核心思想**：  "只要方差有限，大量重复试验的平均值会接近期望值"
>
> ---
>
> **伯努利大数定律 (Bernoulli's LLN)**.
>
> **条件**：  设 $X_{n}\sim B(n,p)$，$\mu_{n}$ 是 $n$ 次伯努利试验中事件 $A$ 发生的次数
>
> **结论**：  对任意 $\epsilon>0$，有
> $$
> \lim_{n\to\infty}P\left\{\left|\frac{\mu_{n}}{n}-p\right|<\epsilon\right\}=1
> $$
>
> **核心思想**：  "投硬币这类事情，大量地实验结果里，频率会接近概率"
>
> ---
>
> **辛钦大数定律 (Khinchin's LLN)**.
>
> **条件**：  随机变量序列 $X_{1},X_{2},\cdots,X_{n},\cdots$ 相互独立同分布，且 $EX_{i}=\mu$
>
> **结论**：  对任意 $\epsilon>0$，有
> $$
> \lim_{n\to\infty}P\left\{\left|\frac{1}{n}\sum_{i=1}^{n}X_{i}-\mu\right|<\epsilon\right\}=1
> $$
>
> **核心思想**：  "同一类型的随机变量，大量样本的平均值会接近期望值"

### · 中心极限定理

$n$个随机变量$X_1, X_2, X_3, \cdots, X_n$，它们相互独立且服从同一种分布规律（独立同分布），期望值为$\mu$，方差为$D$，有：
$$
\frac{\sum_{i=1}^{n} X_i - n\mu}{\sqrt{nD}} \sim N(0, 1) \quad \text{or} \quad \sum_{i=1}^{n} X_i \sim N(n\mu, nD)
$$

$$
\frac{\overline{X} - \mu}{\sqrt{D/n}} \sim N(0, 1) \quad \text{or} \quad \overline{X} \sim N\left(\mu, \frac{D}{n}\right)
$$

## Part 1  数理统计基本概念

**样本统计量定义**：从总体中抽出n个独立同分布的个体 $X_{1}$, $X_{2}$, $\cdots$, $X_{n}$，记为样本（样本容量为n）。

**样本均值**：
$$
\bar{X}=\frac{1}{n}\sum_{i=1}^{n}X_{i} 
$$

**样本方差**：
$$
S^{2}=\frac{1}{n-1}\sum_{i=1}^{n}\left(X_{i}-\bar{X}\right)^{2}
$$

**样本标准差**：
$$
S=\sqrt{\frac{1}{n-1}\sum_{i=1}^{n}\left(X_{i}-\bar{X}\right)^{2}} 
$$

**样本k阶原点矩**：
$$
A_{k}=\frac{1}{n}\sum_{i=1}^{n}X_{i}^{k},k=1,2,\cdots 
$$

**样本k阶中心矩**：
$$
B_{k}=\frac{1}{n}\sum_{i=1}^{n}\left(X_{i}-\bar{X}\right)^{k},k=2,3,\cdots 
$$

**经验分布函数定义**：设 $X_{1}$, $X_{2}$, $\cdots$, $X_{n}$ 是来自总体X的一个样本，将样本观测值按从小到大的顺序排列为 $x_{(1)}\leq x_{(2)}\leq\cdots\leq x_{(n)}$。经验分布函数 $F_{n}(x)$ 定义为：
$$
F_n(x)=\left\{\begin{array}{ll}
0, & x<x_{(1)} \\
\frac{k}{n}, & x_{(k)} \leq x<x_{(k+1)}, k=1, 2, \cdots, n-1 \\
1, & x \geq x_{(n)}
\end{array}\right.
$$

### · 三大抽样分布

$\chi^2$ **卡方分布 (Chi-square Distribution) ** 
$$
X = X_{1}^{2} + X_{2}^{2} + \cdots + X_{n}^{2}
$$
条件要求：各分量 $X_{i} \sim N(0,1)$ 且相互独立，自由度为 $n$.

![](https://nicostore-mathematica.github.io/picx-images-hosting/s2-1.7lkbw7mjja.webp)

---

**t分布 (Student's t-Distribution)** 
$$
X = \frac{X_{1}}{\sqrt{X_{2}/n}}
$$
条件要求：分子 $X_{1} \sim N(0,1)$，分母 $X_{2} \sim χ^{2}(n)$，自由度为 $n$.

![](https://nicostore-mathematica.github.io/picx-images-hosting/s2-2.5j4j85nyhx.webp)

***

**F分布 (F-Distribution)** 
$$
X = \frac{X_{1}/n_{1}}{X_{2}/n_{2}}
$$
条件要求：分子 $X_{1} \sim χ^{2}(n_{1})$，分母 $X_{2} \sim χ^{2}(n_{2})$，自由度分别为 $n_{1}$ 和 $n_{2}$.

![](https://nicostore-mathematica.github.io/picx-images-hosting/s2-3.8ok173ides.webp)

***

> /Definition/
>
> 分位数定义：对于遵循某个分布的随机变量 $X$，给定一个参数 $\alpha(0<\alpha<1)$，如果存在一个值$X_{0}$满足：
> $$
> P\{X>X_{0}\}=\alpha
> $$
> 则称 $X_{0}$ 为该分布的上 $\alpha$ 分位点。

不同分布的上 α 分位点表示

**卡方分布**：上 $\alpha$ 分位点记为 $\chi^{2}_{\alpha}(n)$.

![](https://nicostore-mathematica.github.io/picx-images-hosting/s2-4.9gwwox5tm3.webp)

**t分布**：上 $\alpha$ 分位点记为 $t_{\alpha}(n)$.

![](https://nicostore-mathematica.github.io/picx-images-hosting/s2-5.7i0pyl0bak.webp)

**F分布**：上 $\alpha$ 分位点记为 $F_{\alpha}(n_{1},n_{2})$.

![](https://nicostore-mathematica.github.io/picx-images-hosting/s2-6.1apbyf4k6h.webp)

### · 样本均值与样本方差分布

单个正态总体

设总体 $X \sim N(\mu, \sigma^2)$，$X_1, X_2, \ldots, X_n$ 是来自总体 $X$ 的简单随机样本，定义：

- **样本均值**：  
  $$
  \bar{X} = \frac{1}{n}\sum_{i=1}^{n}X_i
  $$
- **样本方差**：  
  $$
  S^2 = \frac{1}{n-1}\sum_{i=1}^{n}(X_i - \bar{X})^2
  $$

> (1) 样本均值的分布
>
> 1. **标准化样本均值**（已知总体方差 $\sigma^2$）：  
>    $$
>    \frac{\bar{X} - \mu}{\sigma / \sqrt{n}} = \frac{\sqrt{n}(\bar{X} - \mu)}{\sigma} \sim N(0, 1)
>    $$
>
> 2. **t分布形式**（未知总体方差，用样本方差 $S^2$ 替代）：  
>    $$
>    \frac{\bar{X} - \mu}{S / \sqrt{n}} = \frac{\sqrt{n}(\bar{X} - \mu)}{S} \sim t(n-1)
>    $$
>
> (2) 样本方差的分布
>
> 1. **总体均值已知时**：  
>    $$
>    \frac{1}{\sigma^2}\sum_{i=1}^{n}(X_i - \mu)^2 \sim \chi^2(n)
>    $$
>
> 2. **总体均值未知时**（用样本均值 $\bar{X}$​ 替代）：  
>    $$
>    \frac{(n-1)S^2}{\sigma^2} = \sum_{i=1}^{n}\left(\frac{X_i - \bar{X}}{\sigma}\right)^2 \sim \chi^2(n-1)
>    $$

## Part 2 参数估计与假设检验

我们需要用有限的样本数，来估算总体的状况。具体来说就是估计总体的实际平均值（有时候也估计总体的方差），而这里的“估计”又分为两类：

（1）估算实际平均值（例一）；

（2）估算实际平均值会在哪个范围内（例二）。

前者我们称之为“点估计”，后者则是“区间估计”

### · 点估计

> **矩估计**：样本矩与总体矩相等。
>
> 第一步：如果要估计𝑛个参数，需要计算总体以及样本中的前𝑛阶原点矩；
>
> 第二步：样本矩＝总体矩，得到𝑛个方程，可解出𝑛个参数的估计值；
>
> ***
>
> **最大似然估计**：让参数取“最有可能”的值。
>
> 第一步：按照样本取值，写出对应“取得该值的概率”，即样本的似然函数；
>
> 第二步：令似然函数取得最大值，求得此时对应的参数值作为估计值。

#### · 习题

/example/ 设 $X_{1}, X_{2}, \cdots, X_{n}$ 为总体 $X$ 的一个样本，求下列概率密度中未知参数 $\theta$ 的矩估计量和最大似然估计量。

**概率密度函数**：
$$
f(x)=\begin{cases} 
\theta \cdot 2^{\theta} x^{-(\theta + 1)}, & x>2, \\ 
0, & \text{others}
\end{cases}
$$
其中 $\theta>1$。

> **[矩估计]**.
>
> 计算总体期望：
> $$
> \mu = \int_{2}^{\infty} x \theta 2^{\theta} x^{-(\theta + 1)} dx = \frac{2\theta}{\theta - 1}
> $$
> 解得 $\theta$ 与 $\mu$ 的关系：
> $$
> \theta = \frac{\mu}{\mu - 2}
> $$
> 用样本均值 $\bar{X}$ 代替 $\mu$，得到矩估计量：
> $$
> \hat{\theta} = \frac{\bar{X}}{\bar{X} - 2}
> $$
> **[最大似然估计]**.
>
> 构建似然函数：
> $$
> L = (\theta 2^{\theta})^n \left( \prod_{i=1}^{n} X_i \right)^{-(\theta + 1)}
> $$
> 取对数似然函数：
> $$
> \ln L = n(\ln \theta + \theta \ln 2) - (\theta + 1) \ln \left( \prod_{i=1}^{n} X_i \right)
> $$
> 对 $\theta$ 求导并令导数为零：
> $$
> \frac{d}{d\theta} \ln L = n \left( \frac{1}{\theta} + \ln 2 \right) - \sum_{i=1}^{n} \ln X_i = 0
> $$
> 解得最大似然估计量：
> $$
> \hat{\theta} = \frac{1}{\left( \frac{1}{n} \sum_{i=1}^{n} \ln X_i - \ln 2 \right)}
> $$

/example/

**概率密度函数**：
$$
f(x)=\begin{cases} 
\sqrt{\theta} x^{\sqrt{\theta}-1}, & 0 \le x \le 1, \\ 
0, & \text{others}
\end{cases}
$$
其中 $\theta>0$。

> **[矩估计]**.
>
> 计算总体期望：
> $$
> \mu = \int_{0}^{1} x \sqrt{\theta} x^{\sqrt{\theta}-1} dx = \frac{\sqrt{\theta}}{\sqrt{\theta} + 1}
> $$
> 解得 $\theta$ 与 $\mu$ 的关系：
> $$
> \theta = \left( \frac{\mu}{1 - \mu} \right)^2
> $$
> 用样本均值 $\bar{X}$ 代替 $\mu$，得到矩估计量：
> $$
> \hat{\theta} = \left( \frac{\bar{X}}{1 - \bar{X}} \right)^2
> $$
> **[最大似然估计]**.
>
> 构建似然函数：
> $$
> L = \theta^{n/2} \left( \prod_{i=1}^{n} X_i \right)^{\sqrt{\theta} - 1}
> $$
> 取对数似然函数：
> $$
> \ln L = \frac{n}{2} \ln \theta + (\sqrt{\theta} - 1) \sum_{i=1}^{n} \ln X_i
> $$
> 对 $\theta$ 求导并令导数为零：
> $$
> \frac{d}{d\theta} \ln L = \frac{n}{2\theta} + \frac{1}{2\sqrt{\theta}} \sum_{i=1}^{n} \ln X_i = 0
> $$
> 解得最大似然估计量：
> $$
> \hat{\theta} = \frac{n^2}{\left( \sum_{i=1}^{n} \ln X_i \right)^2}
> $$

#### · 估计量的评选标准

设 $\theta$ 是总体 $X$ 分布中的待估参数，其估计量为 $\hat{\theta}$：

**(1). 无偏性**：若估计量的期望等于实际参数值，即：
$$
E(\hat{\theta}) = \theta
$$
则称 $\hat{\theta}$ 是 $\theta$ 的**无偏估计量**。

**(2). 有效性**：对于同一参数 $\theta$ 的两个无偏估计量 $\hat{\theta}_1$ 和 $\hat{\theta}_2$，若满足：
$$
D(\hat{\theta}_1) < D(\hat{\theta}_2)
$$
则称 $\hat{\theta}_1$ 比 $\hat{\theta}_2$ **更有效**。  

（方差越小，估计量越稳定，有效性越高）

**(3). 一致性（相合性）**：当样本容量 $n \to \infty$ 时，若 $\hat{\theta}$ 依概率收敛于 $\theta$，即：
$$
\lim_{n \to \infty} P(|\hat{\theta} - \theta| < \varepsilon) = 1 \quad (\forall \varepsilon > 0)
$$
则称 $\hat{\theta}$ 为 $\theta$ 的**一致估计量**。

### · 区间估计

(1). **总体方差已知时**（$\sigma^2$已知）：
$$
   \frac{\bar{X}-\mu}{\sigma/\sqrt{n}} \sim N(0,1)
$$

(2). **总体方差未知时**（$\sigma^2$未知）：
$$
   \frac{\bar{X}-\mu}{S/\sqrt{n}} \sim t(n-1)
$$

(3). **总体方差分布**：
$$
\frac{(n-1)S^{2}}{\sigma^{2}} \sim \chi^{2}(n-1)
$$

> 期望$\mu$的置信区间
>
> (1). $\sigma^2$已知时，置信区间公式：
> $$
> \bar{X} \pm z_{\alpha/2} \cdot \frac{\sigma}{\sqrt{n}}
> $$
>
> (2). $\sigma^2$未知时，置信区间公式：
> $$
> \bar{X} \pm t_{\alpha/2,n-1} \cdot \frac{S}{\sqrt{n}}
> $$
> **符号说明**：
> - $\bar{X}$：样本均值
> - $S$：样本标准差
> - $n$：样本数
> - $z_{\alpha/2}$：标准正态分布的上$\alpha/2$分位点
> - $t_{\alpha/2,n-1}$：$t$分布（自由度$n-1$）的上$\alpha/2$分位点
>
> ***
>
> 方差$\sigma^2$的置信区间 
>
> 置信区间公式：
> $$
> \left( \frac{(n-1)S^{2}}{\chi*_{\alpha/2,n-1}^{2}}, \frac{(n-1)S^{2}}{\chi_*{1-\alpha/2,n-1}^{2}} \right)
> $$
> 
>
> **符号说明**： 
>
> - $\chi_{\alpha/2,n-1}^{2}$：$\chi^{2}$分布（自由度$n-1$）的上$\alpha/2$分位点 
> - $S^{2}$：样本方差 
> - $n$：样本数

### · 假设检验

假设检验的类型与原理，与区间估计的几乎一致。但是以下概念需要清楚：

- **原假设和备择假设**：称需要着重考察的假设为原假设，原假设常记为 $H_0$；与原假设相对立的假设称为备择假设或对立假设，备择假设常记为 $H_1$。

- **检验统计量**：如果基于某一个统计量的观测值来确定接受 $H_0$ 或拒绝 $H_0$ 时，这一统计量称为检验统计量。

- **拒绝域和临界点**：当检验统计量的观测值落在某个区域时就拒绝 $H_0$，这一区域称为拒绝域，拒绝域的边界点称为临界点。

- **显著性水平 $\alpha$**：是一个小的正数，在作检验时要求犯第Ⅰ类错误的概率 $\leq \alpha$，$\alpha$ 称为检验的显著性水平。$\alpha$ 通常取 0.1, 0.05, 0.01, 0.005 等值。

- **假设检验的两类错误**：
    - $H_0$ 实际上为真时，而拒绝 $H_0$，这类弃真的错误称为第Ⅰ类错误。
    - $H_0$ 实际上为假时，而接受 $H_0$，这类取伪的错误称为第Ⅱ类错误。

- **显著性检验**：对于给定的样本容量，只控制犯第Ⅰ类错误的概率，而不考虑犯第Ⅱ类错误的概率的检验法，称为显著性检验。

数理统计部分结束.
