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

## Part 2 数理统计基本概念

### · 总体与样本

1. **总体**：研究对象某项数量指标的全体称为总体。构成总体的每个成员称为个体。例如，研究一批机器的寿命，则全部机器的寿命构成问题的总体，每一台机器的寿命是一个个体，总体是寿命  $X$  服从的分布。

   > 注：总体分布的类型有时是明确的，统计的任务是确定未知参数，即参数估计；有时是不明确的，需要先对分布进行假定，再估计未知参数。

2. **样本**：在相同条件下对总体  $X$  进行  $n$  次简单随机抽样，得到的  $n$  个观察结果  $X_1, X_2, \ldots, X_n$  相互独立且同分布于总体  $X$ ，称  $X_1, X_2, \ldots, X_n$  为来自总体  $X$  的一个简单随机样本，简称样本，其中  $n$  称为样本容量。抽样得到的一组实数记为  $x_1, x_2, \ldots, x_n$ ，称为样本观察值，简称样本值。

   例如，从该批机器中随机抽 20 台测定其寿命，即得容量为 20 的样本观测值  $x_1, x_2, \ldots, x_{20}$ 。抽取前无法预知每台样品的寿命，因此样本  $X_1, X_2, \ldots, X_{20}$  是随机变量。

   > 1. 有些教材中为简单化处理，统一用  $x_1, x_2, \ldots, x_n$  表示样本和样本值。
   > 2. 从总体中抽样的方法是多种多样的，本课程仅研究简单随机样本，即  $X_1, X_2, \ldots, X_n$  相互独立且同服从于总体分布。

### · 经验分布函数

> **定义** 设  $X_1, X_2, \ldots, X_n$  为总体  $X$  的一个样本，其样本值为  $x_1, x_2, \ldots, x_n$ ，则称函数
>
> $$
> F_n(x) = \frac{ \{\text{Count of}\ x_1, x_2, \ldots, x_n\  \text{less than or equal to}\  x  \}}{n} \quad (-\infty < x < +\infty)
> $$
> 为样本值  $x_1, x_2, \ldots, x_n$  的经验分布函数。
>
> 若已知样本值  $x_1, x_2, \ldots, x_n$  的频数、频率分布表为
>
> |  指标  $X$  |     $x_1^*$     |     $x_2^*$     | ...  |     $x_l^*$     |
> | :---------: | :-------------: | :-------------: | :--: | :-------------: |
> | 频数  $n_i$ |      $n_1$      |      $n_2$      | ...  |      $n_l$      |
> | 频率  $f_i$ | $\frac{n_1}{n}$ | $\frac{n_2}{n}$ | ...  | $\frac{n_l}{n}$ |
>
> 则经验分布函数
>
> $$
> F_n(x) = \begin{cases} 
> 0, & x < x_1^*, \\
> \frac{n_1 + \cdots + n_i}{n}, & x_i^* \leq x < x_{i+1}^*, \quad (i = 1, 2, \ldots, l-1) \\
> 1, & x \geq x_l^*.
> \end{cases}
> $$

**格里文科定理**：对于任意实数  $x$ ，当  $n \rightarrow \infty$  时  $F_n(x)$  以概率 1 一致收敛于分布函数  $F(x)$ 。即当  $n$  充分大时，经验分布函数的任一个观察值  $F_n(x)$  是总体分布函数  $F(x)$  的良好近似，从而实际上可当作  $F(x)$  来使用。

### · 统计量

> **定义**：不含任何未知参数的样本函数  $g(X_1, X_2, \ldots, X_n)$  称为**统计量**。设  $x_1, x_2, \ldots, x_n$  是对应于样本  $X_1, X_2, \ldots, X_n$  的样本值，则称  $g(x_1, x_2, \ldots, x_n)$  是  $g(X_1, X_2, \ldots, X_n)$  的观测值，称为**统计值**。

**常用统计量**：

设  $X_1, X_2, \cdots, X_n$  为总体  $X$  的一个样本， $n$  为样本容量

1. **样本均值**

$$
\overline{X} = \frac{1}{n} \sum_{i=1}^{n} X_i
$$

2. **样本方差**

$$
S^2 = \frac{1}{n-1} \sum_{i=1}^{n} (X_i - \overline{X})^2 = \frac{1}{n-1} \left( \sum_{i=1}^{n} X_i^2 - n \overline{X}^2 \right)
$$

> 推导过程
>
>
> $$
>    S^2 = \frac{1}{n-1} \sum_{i=1}^{n} (X_i - \overline{X})^2 = \frac{1}{n-1} \sum_{i=1}^{n} (X_i^2 - 2X_i \overline{X} + \overline{X}^2) = \frac{1}{n-1} \left( \sum_{i=1}^{n} X_i^2 - 2 \overline{X} \sum_{i=1}^{n} X_i + n \overline{X}^2 \right)
> $$
>
>
> $$
> = \frac{1}{n-1} \left( \sum_{i=1}^{n} X_i^2 - 2n \overline{X}^2 + n \overline{X}^2 \right) = \frac{1}{n-1} \left( \sum_{i=1}^{n} X_i^2 - n \overline{X}^2 \right)
> $$

3. **样本标准差**

$$
S = \sqrt{S^2} = \sqrt{\frac{1}{n-1} \sum_{i=1}^{n} (X_i - \overline{X})^2}
$$

4. **样本  $k$  阶原点矩**

$$
A_k = \frac{1}{n} \sum_{i=1}^{n} X_i^k, \quad k = 1, 2, \ldots,
$$

5. **样本  $k$  阶中心矩**

   

$$
   B_k = \frac{1}{n} \sum_{i=1}^{n} (X_i - \overline{X})^k, \quad k = 1, 2, \ldots,
$$

### · 样本统计量的数字特征

已知  $X_1, X_2, \cdots, X_n$  为来自总体  $X$  的样本， $EX = \mu, DX = \sigma^2$ 

1. $$
   EX_i = \mu, DX_i = \sigma^2
   $$

2. $$
   E\overline{X} = \mu, D\overline{X} = \frac{\sigma^2}{n}
   $$

3. $$
   ES^2 = DX
   $$

### · 三大抽样分布

$\chi^2$ **卡方分布 (Chi-square Distribution) **

> **定义** 设  $X_1, X_2, \cdots, X_n$  是来自总体  $N(0,1)$  的样本，则称统计量
>
>
> $$
> \chi^2 = X_1^2 + X_2^2 + \cdots + X_n^2
> $$
>
> 服从自由度为  $n$  的  $\chi^2$  分布，记为  $\chi^2 \sim \chi^2(n)$ 。

![](https://nicostore-mathematica.github.io/picx-images-hosting/s2-1.7lkbw7mjja.webp)

> 性质
>
> 1. **可加性**：设  $\chi_1^2 \sim \chi^2(n_1)$ ， $\chi_2^2 \sim \chi^2(n_2)$ ，并且  $\chi_1^2$ ， $\chi_2^2$  独立，则
>
> $$
>    \chi_1^2 + \chi_2^2 \sim \chi^2(n_1 + n_2)
> $$
>
> 2. **数学期望和方差（背）**：若  $\chi^2 \sim \chi^2(n)$ ，则有  $EX = n$ ， $DX = 2n$ 
>
> 3. **分位点**
>
>    **分位点定义** 设有分布函数  $F(x)$ ，对给定的  $\alpha (0 < \alpha < 1)$ ，若有
>    $$
>    P\{X > x_\alpha\} = \alpha
>    $$
>     则称点  $x_\alpha$  为  $F(x)$  的上  $\alpha$  分位点。
>
>     $\chi^2(n)$  的分位点 设  $\chi^2 \sim \chi^2(n)$ ，对给定的  $\alpha (0 < \alpha < 1)$ ，若有  $\chi_\alpha^2(n) > 0$  满足
>
>    $$
>         P\{\chi^2 > \chi_\alpha^2(n)\} = \alpha
>    $$
>
>     则称  $\chi_\alpha^2(n)$  为  $\chi^2(n)$  分布的上  $\alpha$  分位点。

---

**t分布 (Student's t-Distribution)** 

**定义** 设  $X \sim N(0,1)$ ， $Y \sim \chi^2(n)$ ，且  $X, Y$  独立，则称随机变量


$$
t = \frac{X}{\sqrt{Y/n}}
$$

服从自由度为  $n$  的  $t$  分布，记为  $t \sim t(n)$ 

![](https://nicostore-mathematica.github.io/picx-images-hosting/s2-2.5j4j85nyhx.webp)

> **性质**
>
> 1. **奇偶性**： $t$  分布的概率密度  $f(t)$  图像为偶函数。
>
> 2. **分位点** 对于给定的  $\alpha (0 < \alpha < 1)$ ，称满足条件  $P\{t > t_\alpha(n)\} = \alpha$  的点  $t_\alpha(n)$  为  $t(n)$  分布的上  $\alpha$  分位点。易得
>    $$
>    t_{1-\alpha}(n) = -t_\alpha(n)
>    $$
>
> **结论**
>
> 1. 自由度  $n=1$  的  $t$  分布是标准柯西分布，它的期望不存在。
> 2. 自由度  $n>1$  的  $t$  分布期望存在且为 0。
> 3. 当自由度较大（ $n \geq 30$ ）时， $t$  分布与标准正态分布  $N(0,1)$  近似。

***

**F分布 (F-Distribution)** 

**定义** 设  $X \sim \chi^2(n_1)$ ， $Y \sim \chi^2(n_2)$ ，且  $X, Y$  独立，则称随机变量


$$
F = \frac{X / n_1}{Y / n_2}
$$

服从自由度为  $(n_1, n_2)$  的  $F$  分布，记为  $F \sim F(n_1, n_2)$ ， $n_1$  称为第一自由度， $n_2$  称为第二自由度。

![](https://nicostore-mathematica.github.io/picx-images-hosting/s2-3.8ok173ides.webp)

**性质**：若  $F \sim F(n_1, n_2)$ ，则
$$
\frac{1}{F} \sim F(n_2, n_1)
$$
**分位点**：对于给定的  $\alpha (0 < \alpha < 1)$ ，称满足条件  $P\{F > F_\alpha(n_1, n_2)\} = \alpha$  的点  $F_\alpha(n_1, n_2)$  为  $F(n_1, n_2)$  分布的上  $\alpha$  分位点。易得  
$$
F_{1-\alpha}(n_1, n_2) = \frac{1}{F_\alpha(n_2, n_1)}
$$

***

### · 分位点

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

### · 正态总体抽样分布

**一个正态总体**：假设  $X_1, X_2, \cdots, X_n$  是来自正态总体  $X \sim N(\mu, \sigma^2)$  的样本，样本均值与样本方差分别是
$$
\overline{X} = \frac{1}{n} \sum_{i=1}^{n} X_i\quad \quad S^2 = \frac{1}{n-1} \sum_{i=1}^{n} (X_i - \overline{X})^2
$$

> 1. $$
>    \overline{X} \sim N\left(\mu, \frac{\sigma^2}{n}\right)\Rightarrow \frac{\overline{X} - \mu}{\sigma / \sqrt{n}} \sim N(0,1)
>    $$
>
> 2. 样本均值  $\overline{X}$  与样本方差  $S^2$  相互独立;
>
> 3. $$
>    \frac{(n-1)S^2}{\sigma^2} = \frac{\sum_{i=1}^{n} (X_i - \overline{X})^2}{\sigma^2} \sim \chi^2(n-1) ; \quad \frac{\sum_{i=1}^{n} (X_i - \mu)^2}{\sigma^2} \sim \chi^2(n) ;
>    $$
>
> 4. $$
>    T = \frac{\overline{X} - \mu}{S / \sqrt{n}} \sim t(n-1)
>    $$

**两个正态总体**:

设  $X_1, \cdots, X_{n_1}$  是取自总体  $X \sim (\mu_1, \sigma_1^2)$  的一个样本， $Y_1, \cdots, Y_{n_2}$  是取自总体  $Y \sim (\mu_2, \sigma_2^2)$  的一个样本，且这两个样本相互独立，即假定  $X_1, \cdots, X_{n_1}, Y_1, \cdots, Y_{n_2}$  是  $n_1 + n_2$  个相互独立的随机变量，则有

1. $$
   \frac{(\overline{X} - \overline{Y}) - (\mu_1 - \mu_2)}{\sqrt{\frac{\sigma_1^2}{n_1} + \frac{\sigma_2^2}{n_2}}} \sim N(0,1)
   $$

   > **证明**：
   > $$
   > \overline{X} \sim N\left(\mu_1, \frac{\sigma_1^2}{n_1}\right), \overline{Y} \sim N\left(\mu_2, \frac{\sigma_2^2}{n_2}\right)
   > $$
   >   $\overline{X}$  与  $\overline{Y}$  相互独立，故
   >
   > $$
   > \overline{X} - \overline{Y} \sim N\left(\mu_1 - \mu_2, \frac{\sigma_1^2}{n_1} + \frac{\sigma_2^2}{n_2}\right)
   > $$
   >  标准化有 
   > $$
   > \frac{(\overline{X} - \overline{Y}) - (\mu_1 - \mu_2)}{\sqrt{\frac{\sigma_1^2}{n_1} + \frac{\sigma_2^2}{n_2}}} \sim N(0,1)
   > $$

2. $$
   \frac{S_1^2 / \sigma_1^2}{S_2^2 / \sigma_2^2} \sim F(n_1 - 1, n_2 - 1)
   $$

   > **证明**：
   > $$
   > \frac{(n_1 - 1)S_1^2}{\sigma_1^2} \sim \chi^2(n_1 - 1), \frac{(n_2 - 1)S_2^2}{\sigma_2^2} \sim \chi^2(n_2 - 1)
   > $$
   > ，且它们相互独立，故
   >
   > 
   > $$
   > \frac{(n_1 - 1)S_1^2 / (n_1 - 1)}{\sigma_1^2} / \frac{S_2^2 / \sigma_2^2}{(n_2 - 1)S_2^2 / (n_2 - 1)} = \frac{S_1^2 / \sigma_1^2}{S_2^2 / \sigma_2^2} \sim F(n_1 - 1, n_2 - 1)
   > $$

3. 当  $\sigma_1^2 = \sigma_2^2 = \sigma^2$  时，有

   $$
   \frac{(\overline{X} - \overline{Y}) - (\mu_1 - \mu_2)}{S_w \cdot \sqrt{\frac{1}{n_1} + \frac{1}{n_2}}} \sim t(n_1 + n_2 - 2)
   $$
   **其中**
   $$
   S_1^2 = \frac{1}{n_1 - 1} \sum_{i=1}^{n_1} (X_i - \overline{X})^2, S_2^2 = \frac{1}{n_2 - 1} \sum_{i=1}^{n_2} (Y_i - \overline{Y})^2, S_w^2 = \frac{(n_1 - 1)S_1^2 + (n_2 - 1)S_2^2}{n_1 + n_2 - 2}
   $$

   > **证明**：由
   > $$
   > \frac{(n_1 - 1)S_1^2}{\sigma^2} \sim \chi^2(n_1 - 1), \frac{(n_2 - 1)S_2^2}{\sigma^2} \sim \chi^2(n_2 - 1)
   > $$
   > ，且相互独立，根据可加性，
   >
   > $$
   > \frac{(n_1 - 1)S_1^2}{\sigma^2} + \frac{(n_2 - 1)S_2^2}{\sigma^2} = \frac{(n_1 + n_2 - 2)S_w^2}{\sigma^2} \sim \chi^2(n_1 + n_2 - 2)
   > $$
   > 由
   > $$
   > \frac{(\overline{X} - \overline{Y}) - (\mu_1 - \mu_2)}{\sigma \sqrt{\frac{1}{n_1} + \frac{1}{n_2}}} \sim N(0,1)
   > $$
   >  ，且  $\overline{X} - \overline{Y}$  与  $S_w^2$  相互独立，故
   >
   > $$
   > \frac{(\overline{X} - \overline{Y}) - (\mu_1 - \mu_2)}{\sigma \sqrt{\frac{1}{n_1} + \frac{1}{n_2}}} \cdot \frac{\sigma}{S_w \cdot \sqrt{\frac{1}{n_1} + \frac{1}{n_2}}} = \frac{(\overline{X} - \overline{Y}) - (\mu_1 - \mu_2)}{S_w \cdot \sqrt{\frac{1}{n_1} + \frac{1}{n_2}}} \sim t(n_1 + n_2 - 2)
   > $$

## Part 3 参数估计

### · 点估计

**点估计**

> 设  $\theta$  是总体  $X$  的未知参数，用统计量  $\hat{\theta} = \hat{\theta}(X_1, X_2, \cdots, X_n)$  来估计  $\theta$ ，称为  $\theta$  的估计量。对于样本的一组观察值  $x_1, x_2, \cdots, x_n$ ，代入  $\hat{\theta}$  的表达式中所得的具体数值称为  $\theta$  的估计值。这样的方法称为参数的点估计。

**矩估计**

> - 用样本矩去估计相应总体矩，或者用样本矩的函数去估计总体矩的同一函数的估计方法就是矩估计。
>
> - 设总体  $X$  的概率分布中含有  $m$  个未知参数  $\theta_1, \theta_2, \cdots, \theta_m$ 。假定总体的  $k$  阶原点矩存在，记
>   $$
>   \mu_k = E(X^k) (k = 1, 2, \cdots, m), A_k = \frac{1}{n} \sum_{i=1}^{n} X_i^k
>   $$
>   为样本  $k$  阶矩，令  
>   $$
>   \mu_k(\theta_1, \theta_2, \cdots, \theta_m) = A_k \ (k = 1, 2, \cdots, m)
>   $$
>    则此方程组的解  $(\hat{\theta}_1, \hat{\theta}_2, \cdots, \hat{\theta}_m)$  称为参数  $(\theta_1, \theta_2, \cdots, \theta_m)$  的矩估计量。矩估计量的观察值称为矩估计值。

**最大似然估计（极大似然估计）**

> (1) 设总体  $X$  的概率分布为  $p(x; \theta)$ （当  $X$  为连续型时，其为概率密度函数，当  $X$  为离散型时，其为分布律）， $\theta = (\theta_1, \theta_2, \cdots, \theta_m)$  为未知参数， $x_1, x_2, \cdots, x_n$  为样本观察值，则
> $$
> L(x_1, x_2, \cdots, x_n, \theta) = \prod_{i=1}^{n} p(x_i; \theta) = L(\theta)
> $$
>
> 称为  $\theta$  的似然函数。
>
> (2) 对给定的  $x_1, x_2, \cdots, x_n$ ，使似然函数达到最大值的  $\hat{\theta}(x_1, x_2, \cdots, x_n)$  称为  $\theta$  的最大似然估计值，相应地  $\hat{\theta}(X_1, X_2, \cdots, X_n)$  称为  $\theta$  的最大似然估计量。
>
> (3) 最大似然估计的常用求解方法：由于  $\ln L(\theta)$  与  $L(\theta)$  有相同的最大值点，若  $L(\theta)$  可导，则可由对数似然方程组
>
> $$
>      \frac{\partial \ln L(\theta_1, \theta_2, \cdots, \theta_m)}{\partial \theta_i} = 0 \quad (i = 1, 2, \cdots, m)
> $$
>
> 求出  $\theta_i$  的最大似然估计量。需注意的是这一方法并不都是有效的，对于有些似然函数，其驻点或导数不存在，这时应考虑用其他方法求似然函数的最大值点。

### · 估计量的评选标准

1. **无偏性**
   设  $X_1, X_2, \cdots, X_n$  为来自总体  $X$  的样本， $\hat{\theta}$  为  $\theta$  的一个估计量，如果  $E(\hat{\theta}) = \theta$  成立，则称估计量  $\hat{\theta}$  为参数  $\theta$  的无偏估计。

2. **有效性**
   设  $\hat{\theta}_1, \hat{\theta}_2$  都为参数  $\theta$  的无偏估计量，若  $D(\hat{\theta}_1) \leq D(\hat{\theta}_2)$ ，则称  $\hat{\theta}_1$  比  $\hat{\theta}_2$  有效。特别地，若对于  $\theta$  的任一无偏估计量，都有  $D(\hat{\theta}_1) \leq D(\hat{\theta})$ ，则称  $\hat{\theta}_1$  是  $\theta$  的最小方差无偏估计（最佳无偏估计）。

3. **一致性**
   设  $\hat{\theta}$  为未知参数  $\theta$  的估计量，若对任意给定的  $\varepsilon > 0$ ，都有
$$
\lim_{n \to \infty} P(|\hat{\theta} - \theta| < \varepsilon) = 1
$$

   即  $\hat{\theta}$  依概率收敛于参数  $\theta$ ，则称  $\hat{\theta}$  为  $\theta$  的一致估计或相合估计。

### · 区间估计

1. **区间估计**

   > 设  $\theta$  为总体的未知参数， $\hat{\theta}_1$  和  $\hat{\theta}_2$  均为估计量，若对于给定的  $\alpha (0 < \alpha < 1)$ ，满足
   > $$
   > P(\hat{\theta}_1 \leq \theta \leq \hat{\theta}_2) = 1 - \alpha
   > $$
   >  ，则称  $[\hat{\theta}_1, \hat{\theta}_2]$  为  $\theta$  的置信度为  $1-\alpha$  的置信区间。通过构造一个置信区间对未知参数进行估计的方法称为区间估计。

2. **单个正态总体的区间估计**

   设  $X_1, X_2, \cdots, X_n$  为来自总体  $N(\mu, \sigma^2)$  的样本，则

   > (1) 当  $\sigma^2$  已知时， $\mu$  的置信度为  $1-\alpha$  的置信区间为
   > $$
   > \left[ \overline{X} - \frac{\sigma}{\sqrt{n}} u_{\frac{\alpha}{2}},\quad \overline{X} + \frac{\sigma}{\sqrt{n}} u_{\frac{\alpha}{2}} \right]
   > $$
   > (2) 当  $\sigma^2$  未知时， $\mu$  的置信度为  $1-\alpha$  的置信区间为
   > $$
   > \left[ \overline{X} - \frac{S}{\sqrt{n}} t_{\frac{\alpha}{2}}(n-1),\quad \overline{X} + \frac{S}{\sqrt{n}} t_{\frac{\alpha}{2}}(n-1) \right]
   > $$
   > (3) 当  $\mu$  已知时， $\sigma^2$  的置信度为  $1-\alpha$  的置信区间为
   > $$
   > \left[ \frac{\sum_{i=1}^{n} (X_i - \mu)^2}{\chi^2_{\frac{\alpha}{2}}(n)},\quad \frac{\sum_{i=1}^{n} (X_i - \mu)^2}{\chi^2_{1-\frac{\alpha}{2}}(n)} \right]
   > $$
   > (4) 当  $\mu$  未知时， $\sigma^2$  的置信度为  $1-\alpha$  的置信区间为
   >
   >
   > $$
   > \left[ \frac{(n-1)S^2}{\chi^2_{\frac{\alpha}{2}}(n-1)},\quad \frac{(n-1)S^2}{\chi^2_{1-\frac{\alpha}{2}}(n-1)} \right]
   > $$
   >

3. **双正态总体的区间估计**

   设  $X \sim N(\mu_1, \sigma_1^2), X_1, X_2, \cdots, X_{n_1}$  为其样本， $Y \sim N(\mu_2, \sigma_2^2), Y_1, Y_2, \cdots, Y_{n_2}$  为其样本，且  $X$  与  $Y$  独立。

   > (1). 当  $\sigma_1^2, \sigma_2^2$  都已知时： $\mu_1 - \mu_2$  的  $1-\alpha$  的置信区间为
   >
   > 
   > $$
   >    \left[ \overline{X} - \overline{Y} - u_{\frac{\alpha}{2}} \sqrt{\frac{\sigma_1^2}{n_1} + \frac{\sigma_2^2}{n_2}},\quad \overline{X} - \overline{Y} + u_{\frac{\alpha}{2}} \sqrt{\frac{\sigma_1^2}{n_1} + \frac{\sigma_2^2}{n_2}} \right]
   > $$
   >
   > (2). 当  $\sigma_1^2, \sigma_2^2$  都未知时： $\mu_1 - \mu_2$  的  $1-\alpha$  的置信区间为
   >
   > 
   > $$
   >    \left[ \overline{X} - \overline{Y} - t_{\frac{\alpha}{2}}(\gamma) \sqrt{\frac{S_1^2}{n_1} + \frac{S_2^2}{n_2}},\quad \overline{X} - \overline{Y} + t_{\frac{\alpha}{2}}(\gamma) \sqrt{\frac{S_1^2}{n_1} + \frac{S_2^2}{n_2}} \right]
   > $$
   >
   > 其中
   > $$
   > \gamma = \frac{\left( \frac{S_1^2}{n_1} + \frac{S_2^2}{n_2} \right)^2}{\frac{S_1^4}{n_1^2(n_2-1)} + \frac{S_2^4}{n_2^2(n_1-1)}}
   > $$

   > [!caution]
   >
   > 特殊情形：
   >
   > ①  $\sigma_1^2, \sigma_2^2$  未知，但  $n_1, n_2$  较大时： $\mu_1 - \mu_2$  的  $1-\alpha$  的置信区间为
   >
   >
   > $$
   > \left[ \bar{X} - \bar{Y} - u_{\frac{\alpha}{2}} \sqrt{\frac{S_1^2}{n_1} + \frac{S_2^2}{n_2}},\quad \ \bar{X} - \bar{Y} + u_{\frac{\alpha}{2}} \sqrt{\frac{S_1^2}{n_1} + \frac{S_2^2}{n_2}} \right]
   > $$
   >
   > ②  $\sigma_1^2 = \sigma_2^2 = \sigma^2$  未知： $\mu_1 - \mu_2$  的  $1-\alpha$  的置信区间为
   >
   >
   > $$
   > \left[ \bar{X} - \bar{Y} - t_{\frac{\alpha}{2}} S_w \sqrt{\frac{1}{n_1} + \frac{1}{n_2}},\quad \ \bar{X} - \bar{Y} + t_{\frac{\alpha}{2}} S_w \sqrt{\frac{1}{n_1} + \frac{1}{n_2}} \right]
   > $$
   >
   > 其中
   > $$
   > S_w^2 = \frac{(n_1 - 1) S_1^2 + (n_2 - 1) S_2^2}{n_1 + n_2 - 2}
   > $$
   >  $t$  分布为  $t(n_1 + n_2 - 2)$ 。

   > 3.  $\mu_1, \mu_2$  已知： $\frac{\sigma_1^2}{\sigma_2^2}$  的  $1-\alpha$  的置信区间为
   >
   >
   > $$
   > \left[ \frac{\sum_{n_1=1}^{n_1} (X_i - \mu_1)^2}{\sum_{n_2=1}^{n_2} (Y_j - \mu_2)^2} F_{1-\frac{\alpha}{2}}(n_2, n_1),\quad  \frac{\sum_{n_1=1}^{n_1} (X_i - \mu_1)^2}{\sum_{n_2=1}^{n_2} (Y_j - \mu_2)^2} F_{\frac{\alpha}{2}}(n_2, n_1) \right]
   > $$
   >
   > 4. $(0-1)$  分布无参数的区间估计
   >
   >    设总体  $X \sim (0-1)$  分布， $P\{X=1\} = p, P\{X=0\} = 1-p, X_1, X_2, \cdots, X_n (n \geq 50)$  为其样本，则  $p$  的  $1-\alpha$  的置信区间为
   >
   >
   > $$
   > \left[ \bar{X} - u_{\frac{\alpha}{2}} \sqrt{\frac{\bar{X}(1-\bar{X})}{n}},\quad  \bar{X} + u_{\frac{\alpha}{2}} \sqrt{\frac{\bar{X}(1-\bar{X})}{n}} \right]
   > $$
   >
   > 5. 单侧置信区间
   >
   >    设  $\theta$  为总体的未知参数，对于给定值  $\alpha (0 < \alpha < 1)$ ，若  $P\{ \theta \leq \theta \} = 1 - \alpha$ ，则称  $(\underline{\theta}, +\infty)$ 
   >

### · 单侧置信区间

为  $\theta$  的满足置信度  $1-\alpha$  的单侧置信区间， $\theta$  称为单侧置信下限。若  $P\{ \theta \leq \bar{\theta} \} = 1-\alpha$ ，则称  $(-\infty, \bar{\theta}]$  为  $\theta$  的满足置信度  $1-\alpha$  的单侧置信区间， $\theta$  称为单侧置信上限。

例如，对于正态分布  $N(\mu, \sigma^2)$ ， $\sigma^2$  未知，可得  $\mu$  的置信水平为  $1-\alpha$  的单侧置信区间为

> 1. $$
>    \left( -\infty, \bar{X} + t_{\alpha}(n-1) \frac{S}{\sqrt{n}} \right)
>    $$
>
>    单侧置信上限为
>    $$
>    \mu = \bar{X} + t_{\alpha}(n-1) \frac{S}{\sqrt{n}}
>    $$
>
> ***
>
> 2. $$
>    \left( \bar{X} - t_{\alpha}(n-1) \frac{S}{\sqrt{n}}, +\infty \right)
>    $$
>
>     单侧置信下限为
>    $$
>    \mu = \bar{X} - t_{\alpha}(n-1) \frac{S}{\sqrt{n}}
>    $$

亦即只需将双侧置信区间的上、下限中的“ $\frac{\alpha}{2}$ ”改成“ $\alpha$ ”，就得到相应的单侧置信区间的上限或下限了。

### · 习题

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

## Part 4 假设检验

### · 假设检验的基本概念

1. **假设检验**

   对总体的分布类型或分布中的未知参数作出假设，然后抽取样本并选择一个合适的检验统计量，利用检验统计量的观察值和预先给定的误差  $\alpha$ ，对所作假设成立与否作出定性判断，这种统计推断称为假设检验。

   若总体分布已知，只对分布中未知参数提出假设并作检验，这种检验称为参数检验。

2. **假设检验基本思想的依据是小概率原理**

   小概率原理是指概率很小的事件在试验中发生的频率也很小，因此小概率事件在一次试验中几乎不可能发生。

   当对问题提出待检假设  $H_0$ ，并要检验它是否可信时，先假定  $H_0$  正确。在这个假定下，经过一次抽样，若小概率事件发生了，就作出拒绝  $H_0$  的决定；否则，若小概率事件未发生，则接受  $H_0$ 。

3. **假设检验基本概念**

   在显著性水平  $\alpha$  下，检验假设
   $$
   H_0: \mu = \mu_0, \quad H_1: \mu \neq \mu_0,
   $$
   当检验统计量取某个区域  $C$  中的值时，我们拒绝原假设  $H_0$ ，则称区域  $C$  为拒绝域（或否定域）。

4. **假设检验过程**

   1. 提出原假设和备择假设；
   2. 选取检验统计量；
   3. 确定拒绝原假设的域；
   4. 计算检验统计量的观察值并作出判断。

5. **两类错误**

   人们作出判断的依据是一个样本，样本是随机的，因而人们进行假设检验判断  $H_0$  可信与否时，不免因误判而犯两类错误：

   - 第一类错误： $H_0$  为真，而检验结果将其否定，这称为“弃真”错误；
   - 第二类错误： $H_0$  不真，而检验结果将其接受，这称为“取伪”错误。
   分别记犯第一、二类错误的概率为  $\alpha, \beta$ ，即  $\alpha = P\{$ 拒绝 $H_0 | H_0$ 为真 $\}$, $\beta = P\{$ 接受 $H_0 | H_0$ 不真 $\}$ 。当样本容量  $n$  固定时， $\alpha$  越小， $\beta$  就越大。一般采取的原则是：固定  $\alpha$ ，通过增加样本容量  $n$  降低 $\beta$ 

6. **假设检验与区间估计的联系**
   假设检验与区间估计是从不同角度对同一问题的回答，它们解决问题的途径是相通的。下面以正态总体  $N(\mu, \sigma^2)$ ，其中  $\sigma^2$  已知，关于  $\mu$  的假设检验和区间估计为例加以说明：

   假设  $H_0: \mu = \mu_0$ ，当  $H_0$  为真时，则  $U = \frac{\bar{X} - \mu_0}{\sigma/\sqrt{n}} \sim N(0, 1)$ ，对于给定的显著性水平  $\alpha$ ， $P\{ |U| \leq u_{\frac{\alpha}{2}} \} = 1 - \alpha$ ，那么  $H_0$  的接受域为
   $$
   \left( \bar{X} \pm u_{\frac{\alpha}{2}} \frac{\sigma_0}{\sqrt{n}} \right)
   $$
   即认为以  $1-\alpha$  的概率接受  $H_0$ ，事实上，这个接受域也是  $\mu$  的置信度为  $1-\alpha$  的置信区间。这充分说明两者解决问题的途径相同，假设检验判断的是结论是否成立，而参数估计解决的是范围问题。

### · 正态总体参数的假设检验

1. **一个正态总体的假设检验**
   
   设  $X \sim N(\mu, \sigma^2), (X_1, X_2, \cdots, X_n)$  为其样本，
   
   > (1)  $\sigma^2$  已知，检验假设  $H_0: \mu = \mu_0, H_1: \mu \neq \mu_0$ 。检验步骤为：
   >
   > > 1. 提出待检验假设  $H_0: \mu = \mu_0 (\mu_0$  已知)；
   > >
   > > 2. 选取样本  $(X_1, X_2, \cdots, X_n)$  的统计量
   > >    $$
   > >    U = \frac{\bar{X} - \mu_0}{\sigma_0/\sqrt{n}}
   > >    $$
   > >    ( $\sigma_0$  已知)，在  $H_0$  成立时， $U \sim N(0, 1)$ ；
   > >
   > > 3. 对给定的显著性水平  $\alpha$ ，查表确定临界值  $u_{\frac{\alpha}{2}}$ ，使得
   > >    $$
   > >    P\{ |U| > u_{\frac{\alpha}{2}} \} = \alpha
   > >    $$
   > >    计算检验统计量  $U$  的观察值并与临界值  $u_{\frac{\alpha}{2}}$  比较；
   > >
   > > 4. 作出判断：若  $|U| > u_{\frac{\alpha}{2}}$ ，则拒绝  $H_0$ ；若  $|U| \leq u_{\frac{\alpha}{2}}$ ，则接受  $H_0$ 。
   >
   > ***
   >
   > (2)  $\sigma^2$  未知，检验假设
   > $$
   > H_0: \mu = \mu_0,\quad H_1: \mu \neq \mu_0
   > $$
   > 选取统计量
   > $$
   > T = \frac{\bar{X} - \mu_0}{S/\sqrt{n}}
   > $$
   >  其中
   > $$
   > S^2 = \frac{1}{n-1} \sum_{i=1}^{n} (X_i - \bar{X})^2
   > $$
   > 当  $H_0$  为真时， $T \sim t(n-1)$ ，拒绝域为  $|T| > t_{\frac{\alpha}{2}}(n-1)$ 。
   >
   > ***
   >
   > (3)  $\mu$  已知，检验假设
   > $$
   > H_0: \sigma^2 = \sigma_0^2,\quad H_1: \sigma^2 \neq \sigma_0^2
   > $$
   >  选取统计量
   > $$
   > \chi^2 = \frac{\sum_{i=1}^{n} (X_i - \mu_0)^2}{\sigma_0^2} \sim \chi^2(n)
   > $$
   > 拒绝域为  $\chi^2 > \chi^2_{\frac{\alpha}{2}}(n)$  或  $\chi^2 < \chi^2_{1-\frac{\alpha}{2}}(n)$ 。
   >
   > ***
   >
   > (4)  $\mu$  未知，检验假设
   > $$
   > H_0: \sigma^2 = \sigma_0^2,\quad H_1: \sigma^2 \neq \sigma_0^2
   > $$
   > 选取统计量
   > $$
   > \chi^2 = \frac{(n-1)S^2}{\sigma_0^2}
   > $$
   > 当  $H_0$  为真时， $\chi^2 \sim \chi^2(n-1)$ ，拒绝域为  $\chi^2 > \chi^2_{\frac{\alpha}{2}}(n-1)$  或  $\chi^2 < \chi^2_{1-\frac{\alpha}{2}}(n-1)$ 。
   
   2. **两个正态总体的假设检验**
   
      设  $X \sim N(\mu_1, \sigma_1^2)$ ,  $Y \sim N(\mu_2, \sigma_2^2)$ ,  $(X_1, X_2, \cdots, X_{n_1})$  和  $(Y_1, Y_2, \cdots, Y_{n_2})$  分别是来自总体  $X$  和  $Y$  的样本， $\bar{X}, S_1^2$  和  $\bar{Y}, S_2^2$  是相应的样本均值和样本方差
   
      > (1)  $\sigma_1^2, \sigma_2^2$  已知，检验假设  $H_0: \mu_1 = \mu_2, H_1: \mu_1 \neq \mu_2$ 。
      >
      > 选取统计量
      >
      >
      > $$
      > U = \frac{\bar{X} - \bar{Y}}{\sqrt{\frac{\sigma_1^2}{n_1} + \frac{\sigma_2^2}{n_2}}} \sim N(0, 1),
      > $$
      >
      > 拒绝域为  $|U| > u_{\frac{\alpha}{2}}$ 。
      >
      > ***
      >
      > (2)  $\sigma_1^2, \sigma_2^2$  未知，检验假设  $H_0: \mu_1 = \mu_2, H_1: \mu_1 \neq \mu_2$ 。常见的三种特殊情况：
      >
      > > ① 当  $n_1, n_2$  较大时：选取统计量
      > >
      > >
      > > $$
      > > U = \frac{\bar{X} - \bar{Y}}{\sqrt{\frac{S_1^2}{n_1} + \frac{S_2^2}{n_2}}} \sim N(0, 1),
      > > $$
      > >
      > > 拒绝域为  $|U| > u_{\frac{\alpha}{2}}$ 。
      > >
      > > ②  $\sigma_1^2 = \sigma_2^2$  时：选取检验统计量
      > >
      > >
      > > $$
      > > T = \frac{\bar{X} - \bar{Y}}{\sqrt{\frac{(n_1 - 1)S_1^2 + (n_2 - 1)S_2^2}{n_1 + n_2 - 2} \left( \frac{1}{n_1} + \frac{1}{n_2} \right)}},
      > > $$
      > >
      > > 当  $H_0$  为真时， $T \sim t(n_1 + n_2 - 2)$ ，显著性水平为  $\alpha$  的拒绝域为  $|T| > t_{\frac{\alpha}{2}}(n_1 + n_2 - 2)$ 。
      > >
      > > ③  $\sigma_1^2 \neq \sigma_2^2$ ，但  $n_1 = n_2$  (配对问题)：
      > >
      > > 令  $D_i = X_i - Y_i (i = 1, 2, \cdots, n)$ ，则  $D_i \sim N(\mu_D, \sigma_D^2)$ ，其中  $\mu_D = \mu_1 - \mu_2, \sigma_D^2 = \sigma_1^2 + \sigma_2^2$  (未知)。此时检验假设等价于  $H_0: \mu_D = 0, H_1: \mu_D \neq 0$ 。
      > >
      > > 选取统计量
      > >
      > >
      > > $$
      > > T = \frac{\bar{D} - \mu_D}{S_D/\sqrt{n}} \sim t(n - 1),
      > > $$
      > >
      > > 拒绝域为  $|T| > t_{\frac{\alpha}{2}}(n - 1)$ 。
      >
      > ***
      >
      > (3)  $\mu_1, \mu_2$  已知，检验假设  $H_0: \sigma_1^2 = \sigma_2^2, H_1: \sigma_1^2 \neq \sigma_2^2$ 。
      >
      > 选取统计量
      >
      >
      > $$
      > F = \frac{(\sum_{i=1}^{n_1} (X_i - \mu_1)^2)/n_1}{(\sum_{j=1}^{n_2} (Y_j - \mu_2)^2)/n_2} \sim F(n_1, n_2),
      > $$
      >
      > 拒绝域为  $F > F_{\frac{\alpha}{2}}(n_1, n_2)$  或  $F < F_{1-\frac{\alpha}{2}}(n_1, n_2)$ 。
      >
      > ***
      >
      > (4)  $\mu_1, \mu_2$  未知，检验假设  $H_0: \sigma_1^2 = \sigma_2^2, H_1: \sigma_1^2 \neq \sigma_2^2$ 。
      >
      > 选取检验统计量
      >
      >
      > $$
      > F = \frac{S_1^2}{S_2^2},
      > $$
      >
      > 当  $H_0$  为真时  $F \sim F(n_1 - 1, n_2 - 1)$ ，显著性水平为  $\alpha$  的拒绝域为
      >
      >
      > $$
      > F > F_{\frac{\alpha}{2}}(n_1 - 1, n_2 - 1) \quad \text{或} \quad F < F_{1 - \frac{\alpha}{2}}(n_1 - 1, n_2 - 1)。
      > $$

### · 单侧检验

在假设检验中，如果只关心总体参数是否偏大或偏小，此时可将拒绝域确定在一侧，这种检验称为单侧检验。单侧检验可由双侧检验修改转化而得到。常用基本类型举例：

1. $\sigma^2$  已知，检验假设
   $$
   H_0: \mu \leq \mu_0, H_1: \mu > \mu_0
   $$
   有时也写成
   $$
   H_0: \mu = \mu_0, H_1: \mu > \mu_0
   $$
   选取
   $$
   U = \frac{\bar{X} - \mu_0}{\sigma/\sqrt{n}}
   $$
   拒绝域为
   $$
   U > u_{\alpha}
   $$

2. $\sigma^2$  已知，检验假设
   $$
   H_0: \mu \geq \mu_0, H_1: \mu < \mu_0
   $$
   选取
   $$
   U = \frac{\bar{X} - \mu_0}{\sigma/\sqrt{n}}
   $$
   拒绝域为 
   $$
   U < -u_{\alpha}
   $$

3) $\sigma^2$  未知，检验假设
   $$
   H_0: \mu \leq \mu_0, H_1: \mu > \mu_0
   $$
   选取
   $$
   T = \frac{\bar{X} - \mu_0}{S/\sqrt{n}}
   $$
   拒绝域为
   $$
   T > t_{\alpha}(n - 1)
   $$

4) $\sigma^2$  未知，检验假设
   $$
   H_0: \mu \geq \mu_0, H_1: \mu < \mu_0
   $$
   选取
   $$
   T = \frac{\bar{X} - \mu_0}{S/\sqrt{n}}
   $$
   拒绝域为
   $$
   T < -t_{\alpha}(n - 1)
   $$

5) $\mu$  未知，检验假设
   $$
   H_0: \sigma^2 \leq \sigma_0^2, H_1: \sigma^2 > \sigma_0^2
   $$
   选取
   $$
   \chi^2 = \frac{(n - 1)S^2}{\sigma_0^2}
   $$
   拒绝域为
   $$
   \chi^2 > \chi^2_{\alpha}(n - 1)
   $$

6) $\mu$  未知，检验假设
   $$
   H_0: \sigma^2 \geq \sigma_0^2, H_1: \sigma^2 < \sigma_0^2
   $$
   选取
   $$
   \chi^2 = \frac{(n - 1)S^2}{\sigma_0^2}
   $$
   拒绝域为
   $$
   \chi^2 < \chi^2_{1 - \alpha}(n - 1)
   $$

7) $\mu_1, \mu_2$  未知，检验假设
   $$
   H_0: \sigma_1^2 \leq \sigma_2^2, H_1: \sigma_1^2 > \sigma_2^2
   $$
   选取
   $$
   F = \frac{S_1^2}{S_2^2}
   $$
   拒绝域为
   $$
   F > F_{\alpha}(n_1 - 1, n_2 - 1)
   $$

8) $\mu_1, \mu_2$  未知，检验假设
   $$
   H_0: \sigma_1^2 \geq \sigma_2^2, H_1: \sigma_1^2 < \sigma_2^2
   $$
   选取
   $$
   F = \frac{S_1^2}{S_2^2}
   $$
   拒绝域为
   $$
   F < F_{1 - \alpha}(n_1 - 1, n_2 - 1)
   $$

结束.
