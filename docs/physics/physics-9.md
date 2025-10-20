---
title: Chapter 9
createTime: 2025/10/13 16:19:38
permalink: /physics/physics-9/
---

## Part 1 恒定磁场

我们高中都学过磁场的相关公式：
$$
F_m = qvB\sin\alpha
$$

$$
\vec{F}_m = q\vec{v} \times \vec{B}
$$

$$
B = \frac{F_m}{qv\sin\alpha}
$$

磁感应强度 $B$ 单位为特斯拉 (T)，1T = 10000G（高斯）

但是要仿照磁场研究，我们就有类似库仑定律的磁力定义方式。当然我们知道磁荷不存在，所以要提出安培分子电流假说：

**分子电流**相当于一个基元磁体，当物质中的分子电流规则排列时，物质就具有磁性。

一段段的小电流接续形成一个大的环形电流，从一端看是 N 极，从另一端看是 S 极。这个假说也能说明不存在磁单极子。因为一个磁极对应一面，存在一面就必然存在另一面。

现代理论表明，分子内电子的运动形成了分子电流，从而产生了物质的磁性。 所有的磁现象都可以归结为**运动电荷**之间的相互作用，磁力是运动电荷相互作用的表现。

> **磁荷观点（磁的库仑定律）**： 两点磁荷之间的相互作用力 (方向沿连线)
> $$
> F = \frac{1}{4\pi\mu_0} \frac{q_{m1} q_{m2}}{r^2}
> $$
> 磁荷意义下，磁场强度的定义
> $$
> \vec{H} = \frac{1}{4\pi\mu_0} \frac{q_m}{r^3} \vec{r}
> $$
> **电流观点（安培定律）：** 两电流元之间相互作用力
> $$
> dF_{12} = \frac{\mu_0}{4\pi} \frac{I_1 I_2 (d\vec{l}_2 \times \vec{dl_1} \times \hat{r}_{12})}{r_{12}^2}
> $$
> 不一定大小相等、方向相反，也不一定沿连线。

我们也可以由安培定理推出“比萨定律”

### · Biot-Savart Law

![](https://pic1.imgdb.cn/item/68f5a7b63203f7be00801fe0.png)

> 关于一些参数做出说明：
> $$
> K = \frac{\mu_0}{4\pi} = 10^{-7},\quad \mu_0 = 4\pi \times 10^{-7} \ \text{N} \cdot \text{A}^{-2}
> $$
> 我们知道真空磁导率满足：
> $$
> c = \frac{1}{\sqrt{\mu_0 \varepsilon_0}} 
> $$
> 由此电磁理论统一

由电场库伦定律：

$$
\vec{E}_i = \frac{\vec{F}_i}{q_0} = \frac{1}{4\pi\varepsilon_0} \frac{q_i q_0}{r_i^3} \vec{r}_i = \frac{1}{4\pi\varepsilon_0} \frac{q_i}{r_i^3} \vec{r}_i
$$

根据叠加原理：
$$
 \vec{E} = \sum_{i=1}^{n} \vec{E}_i = \sum_{i=1}^{n} \frac{1}{4\pi\varepsilon_0} \frac{q_i}{r_i^3} \vec{r}_i 
$$

根据磁场安培定律：
$$
 d\vec{F}_{12} = K \frac{I_2 d\vec{l}_2 \times (I_1 d\vec{l}_1 \times \vec{r}_{12})}{r_{12}^3}
$$

视  $I_2 d\vec{l}_2$  为检验电流元：


$$
 d\vec{F}_{12} = I_2 d\vec{l}_2 \times \left( \frac{\mu_0}{4\pi} \frac{I_1 d\vec{l}_1 \times \vec{r}_{12}}{r_{12}^3} \right) 
$$

$$
= I_2 d\vec{l}_2 \times d\vec{B}_1
$$

对回路1用叠加原理

$$
\vec{F}_{12} = \oint_{L_1} d\vec{F}_{12} = I_2 d\vec{l}_2 \times \left( \frac{\mu_0}{4\pi} \oint_{L_1} \frac{I_1 d\vec{l}_1 \times \vec{r}_{12}}{r_{12}^3} \right)
$$

$$
\vec{F}_{12} = I_2 d\vec{l}_2 \times \vec{B}_1
$$

对上述括号去掉下标取微分部分，得到电流元在r处的场强

$$
d\vec{B} = \frac{\mu_0}{4\pi} \frac{I d\vec{l} \times \vec{r}}{r^3}
$$
对电流回路积分（叠加原理）

$$
\vec{B} = \frac{\mu_0}{4\pi} \oint_L \frac{I d\vec{l} \times \vec{r}}{r^3} = \frac{\mu_0}{4\pi} \oint_L \frac{I d\vec{l} \times \vec{r}_0}{r^2}
$$
所以我们可以陈述比萨定律：

> /Theorem/
>
> 真空中电流元产生的磁感应强度为：
>
> $$
> d\vec{B} = \frac{\mu_0}{4\pi} \frac{I dl \times \vec{e}_r}{r^2}
> $$
> 其中， $\mu_0$  为真空磁导率，其值为  $4\pi \times 10^{-7} \, \text{T} \cdot \text{m/A}$ 。
>
> 则  $d\vec{B}$  的大小为
>
> $$
> dB = \frac{\mu_0}{4\pi} \frac{I dl \sin \theta}{r^2}
> $$
> 其中， $\theta$  为  $dl$  与  $\vec{e}_r$  的夹角。
>
> 因此电流元产生的磁场与电流元的大小成正比，与距离的平方成反比。
>
> 和库仑定律一样满足反比平方定律。方向由右手螺旋定则确定。

**Question**：载流直导线的磁场 (长度 L ,电流 I )

![](https://pic1.imgdb.cn/item/68f5a7b63203f7be00801fe3.png)

> 由 Biot-Savart Law
> $$
> d\vec{B} = \frac{\mu_0}{4\pi} \frac{I dl \times \vec{r}}{r^3}
> $$
> 方向垂直向内
> $$
> d\vec{B} = \frac{\mu_0}{4\pi} \frac{I dl \cdot \sin \theta}{r^2}
> $$
>
> $$
> r \sin \theta = a \Rightarrow r = \frac{a}{\sin \theta}
> $$
>
> $$
> \frac{-l}{a} = \text{ctg} \theta \Rightarrow dl = \frac{ad\theta}{\sin^2 \theta}
> $$
>
> $$
> B = \frac{\mu_0 I}{4\pi a} \int_{\theta_1}^{\theta_2} \sin \theta \, d\theta = \frac{\mu_0 I}{4\pi a} (\cos \theta_1 - \cos \theta_2)
> $$
>
> 方向：右手定则
>
> 特别的： $ L \rightarrow \infty $  则  $ \theta_1 = 0 $   $ \theta_2 = \pi $ 
>
> $$
> B = \frac{\mu_0 I}{2\pi a}
> $$

**Question**：载流圆线圈轴线上产生的磁场（R，I）

![](https://pic1.imgdb.cn/item/68f5a7b63203f7be00801fe1.png)

> 由 Biot-Savart Law
> $$
> d\vec{B} = \frac{\mu_0}{4\pi} \frac{I dl \times \vec{r}}{r^3}
> $$
>
> $$
> d\vec{B} = \frac{\mu_0}{4\pi} \frac{I dl}{r^2}
> $$
>
> $$
> dB_\perp = dB \cos \theta
> $$
>
> $$
> dB_\parallel = dB \sin \theta
> $$
>
> $$
> B_\parallel = \oint dB_\parallel = \frac{\mu_\parallel I \sin \theta}{4\pi r^2} \cdot 2\pi R
> $$
>
> $$
> B = \frac{\mu_0 IR^2}{2(R^2 + x^2)^{3/2}}
> $$
>
> 对比电偶极子
>
> $$
> \vec{m} = IS\vec{n} = I\pi R^2 \vec{n}
> $$
>
> $$
> \vec{B} = \frac{\mu_0 \vec{m}}{2\pi |x|^3}
> $$
>
> $$
> \vec{E} = -\frac{1}{4\pi\varepsilon_0} \frac{\vec{p}}{r^3}
> $$

**Question**：圆弧圆电流在其曲率中心处的磁场

![](https://pic1.imgdb.cn/item/68f5a7b63203f7be00801fe4.png)

> 由 Biot-Savart Law
> $$
> d\vec{B} = \frac{\mu_0}{4\pi} \frac{I dl \times \vec{r}}{r^3}
> $$
> 方向 ⊙
>
> $$
> d\vec{B} = \frac{\mu_0}{4\pi} \frac{I dl}{R^2}
> $$
>
> $$
> B = \frac{\mu_0 I}{4\pi} \frac{\overset{\frown}{ab}}{R^2}
> $$

**Question**：宽度为 a 的无限长金属平板，均匀通电流 I，求图中P点的磁感应强度

![](https://pic1.imgdb.cn/item/68f5a7b63203f7be00801fe2.png)

> 建立坐标系，将板细分为许多无限长直导线
>
> 每根导线宽度为  $dx$  通电流  $i = \frac{I}{a} dx$ 
>
> $$
> dB = \frac{\mu_0 i}{2\pi x} = \frac{\mu_0 I dx}{2\pi ax}
> $$
> 所有  $dB$  的方向都一样：⊙
>
> $$
> B = \int_a^{a+d} \frac{\mu_0 I dx}{2\pi ax} = \frac{\mu_0 I}{2\pi a} \ln \frac{a + d}{d}
> $$

### · 高斯定理

类比于静电场中引入的电通量，定义磁场中的磁通量为

$$
\Phi=\int \boldsymbol{B} \cdot d\boldsymbol{S}
$$
在国际单位制中，磁通量的单位是韦伯，符号是 Wb。

$$
1\mathrm{~Wb}=1\mathrm{~T}\cdot\mathrm{m}^{2}
$$
由于磁场线是无头无尾的闭合曲线，从封闭曲面 S 中穿出的磁场线必然会再次进入封闭曲面 S，因此磁场的高斯定理为

$$
\iint_{\partial V} \boldsymbol{B} \cdot d\boldsymbol{S}=0
$$
或者也可表示为：
$$
\nabla\cdot \vec{B}=0
$$

### · 安培环路定理

在静电场中，电场强度的环流等于零，即

$$
\oint \vec{E} \cdot d\vec{l} = 0
$$
从毕奥-萨伐尔定律可以得到安培环路定理 安培环路定理的表述为：在恒定电流的磁场中，磁感应强度  $ \vec{B} $  沿任意闭合曲线  $ L $  的线积分（即环流）等于通过该闭合曲线内的电流代数和的  $\mu_0$  倍。
即
$$
\oint_L \vec{B} \cdot d\vec{l} = \mu_0 \sum I_{\text{in}}
$$
式中， $ \sum I_{\text{in}} $  是通过环路  $ L $  内的电流代数和。

电流的正负号由电流的方向决定，若电流与环路的方向一致，则电流为正，否则为负。

> /proof/
>
> 若闭合曲线内包含有电流 取线元  $dl$ ，在  $ O $  点处的距离为  $r$ ，张角为  $ d\varphi $ ，与  $dl$  的夹角为  $\theta$ 。则有
>
> $$
> rd\varphi = dl \cdot r = rdl \cos \theta
> $$
>
> $$
> \oint_L \vec{B} \cdot d\vec{l} = \oint_L B dl \cos \theta = \oint_L B r d\varphi = \int_0^{2\pi} \frac{\mu_0 I}{2\pi r} r d\varphi = \mu_0 I
> $$
>
> 不包含电流时可以证明积分区域是两段角度互补的区域，所以积分为零。

