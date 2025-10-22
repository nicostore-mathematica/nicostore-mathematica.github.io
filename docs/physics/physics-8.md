---
title: Chapter 8
createTime: 2025/10/13 16:19:38
permalink: /physics/physics-8/
---

## Part 1 真空中的静电场

### · 场论

电磁学本质上是在分析两种物理场——电场和磁场. 因此先来简单介绍场论的知识点.

> 如果在全部或部分空间里的每一个点都对应着某个物理量的一个确定的值，就说在这空间里确定了该物理量的一个场.
>
> - 标量场：如温度场、密度场、电势场
>
> - 矢量场：如电场、磁场、速度场、力场
>
> 或者说，场就是关于空间中的点的函数

**Nabla 算子**: 

>  Nabla 算子是一个矢量微分算子，在三维笛卡尔坐标系中可写成
>
> $$
> \nabla = \left( \frac{\partial}{\partial x}, \frac{\partial}{\partial y}, \frac{\partial}{\partial z} \right)
> $$
>
> 在运算时，可先简单把它看作一个三维矢量。

**梯度**: 

> 当 Nabla 算子作用于标量场  $ f = f(x, y, z) $ ，相当于矢量的数乘，得到
>
> $$
> \nabla f = \left( \frac{\partial f}{\partial x}, \frac{\partial f}{\partial y}, \frac{\partial f}{\partial z} \right)
> $$
>
> 这个新的矢量称为标量场  $f$  的梯度 (gradient)，它指向函数增长最快的方向。

**散度**: 

> 当 Nabla 算子作用于矢场  $\vec{F} = (P, Q, R)$ ，可以做点乘或者叉乘，当 Nabla 算子点乘  $\vec{F}$  时，得到
>
> $$
>  \nabla \cdot \vec{F} = \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} + \frac{\partial R}{\partial z} 
> $$
>
> 这个标量称为矢场  $\vec{F}$  的散度 (divergence)，表征空间各点矢场发散的强弱程度。散度为正，说明该点有发散场线的正源；散度为负，说明该点有收场线的负源。

**旋度**: 

> 当 Nabla 算子叉矢场  $\vec{F}$ ，得到
>
> $$
> \nabla \times \vec{F} = \left|
> \begin{matrix} 
> \vec{i} & \vec{j} & \vec{k}\\
> \frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\
> P & Q & R 
> \end{matrix}\right|
> $$
>
> 这个新的矢量称为矢场  $\vec{F}$  的旋度 (Curl)，表征三维矢场对某一点附近的微元造成的旋转程度。

**通量**: 

> 矢场  $\vec{F}$  沿有向曲面  $S$  的某一的某一侧的曲面积分
>
> $$
> \Phi = \iint _S \vec{F} \cdot d\vec{S} =\iint _S {F}_n \cdot d{S}
> $$
>
> 称为  $\vec{F}$  向积分所沿一侧穿过曲面  $S$  的通量。

**环量**: 

> 矢场  $\vec{F}$  沿场中某一有向闭合曲线  $l$  的曲线积分
>
> $$
> \Gamma = \oint_{l} \vec{F} \cdot d\vec{l}
> $$
>
> 称为  $\vec{F}$  按积分方向沿曲线  $l$  的环量。

> [!important]
>
> 通量与散度、环量与旋度的关系
>
> Gauss 公式:
>
> $$
> {\iint_{{\partial}\Omega}} \vec{F} \cdot d\vec{S} = \iiint_{\Omega} (\nabla\cdot \vec{F})\ dV
> $$
>
> Stokes 公式:
>
> $$
> \oint_{l} \vec{F} \cdot d\vec{l} = \iint_{\Sigma} \nabla \times \vec{F} dS 
> $$
>
> 散度是通量的体密度，旋度是环量的面密度

下面是一些特殊的场：

- 无源场:  $\nabla \cdot \vec{F} \equiv 0$ ，则称  $\vec{F}$  为无源场，反之为有源场
- 无旋场:  $\nabla \times \vec{F} \equiv 0$ ，则称  $\vec{F}$  为无旋场，反之为有旋场
- 有势场: 若  $\vec{F}$  是个标量场  $u$  的度场，即  $\vec{F} = \nabla u$ ，则称  $\vec{F}$  为有势场，并将  $v = -u$  称为  $\vec{F}$  的势函数
- 调和场: 若  $\vec{F}$  既无源也无旋，则称  $\vec{F}$  为调和场

**Laplace 算子**: 

> 当 Nabla 算子与自身做点乘，得到
>
> $$
> \nabla^2 = \Delta = \frac{\partial^2}{\partial x^2} + \frac{\partial^2}{\partial y^2} + \frac{\partial^2}{\partial z^2}
> $$
> 当它作用于标量场  $f$ ，得到其梯度的散度。

### · 电场强度

**库仑定律**：(Coulomb's law)

相对于惯性系静止的两个点电荷间的静电力满足如下规律：

- 大小相等方向相反，并且沿它们的连线；同号电荷相斥，异号电荷相吸
- 大小与各自的电量  $q_1, q_2$  成正比，与距离  $r$  的平方成反比


$$
\vec{F}_{12} = k \frac{q_1 q_2}{r^2} \vec{e}_{12} = \frac{1}{4\pi \varepsilon_0} \frac{q_1 q_2}{r^2} \vec{e}_{12}
$$

式中  $k$  叫做静电力常量， $\varepsilon_0$  叫做真空介电常量， $\vec{e}_{12}$  是  $q_1$  指向  $q_2$  的单位矢量

**叠加原理**：当空间有两个以上的点电荷时（点电荷系、连续带电体），计算静电力应遵循矢量叠加的原则

> (1)  $N$  个点电荷对  $q_0$  的静电力：
>
> $$
> \vec{F} = \frac{1}{4\pi \varepsilon_0} q_0 \sum_{i=1}^{N} \frac{q_i}{|\vec{r} - \vec{r}_i|^3} (\vec{r} - \vec{r}_i)
> $$
>
> (2) 带电线对  $q_0$  的静电力：
>
> $$
> \vec{F} = \frac{1}{4\pi \varepsilon_0} q_0 \int_L \frac{\lambda_e (\vec{r'})}{|\vec{r} - \vec{r'}|^3} (\vec{r} - \vec{r'}) \, dl
> $$
>
> (3) 带电面对  $q_0$  的静电力：
>
> $$
> \vec{F} = \frac{1}{4\pi \varepsilon_0} q_0 \iint_S \frac{\sigma_e (\vec{r'})}{|\vec{r} - \vec{r'}|^3} (\vec{r} - \vec{r'}) \, dS
> $$
>
> (4) 带电体对  $q_0$  的静电力：
>
> $$
> \vec{F} = \frac{1}{4\pi \varepsilon_0} q_0 \iiint_V \frac{\rho_e (\vec{r'})}{|\vec{r} - \vec{r'}|^3} (\vec{r} - \vec{r'}) \, dV
> $$

**电场强度**：

> 定义电场强度为试探电荷所受的电场力  $\vec{F}$  与其电量  $q_0$  的比值：
>
>
> $$
> \vec{E} \equiv \frac{\vec{F}}{q_0}
> $$
>

**点电荷场强公式**：

> 设场源电荷  $Q$  所在的位置为原点， $\vec{e}_r$  是原点指向场点的单位矢量。对试探电荷  $q_0$ ，由库仑定律有：
>
>
> $$
> \vec{F} = \frac{1}{4\pi \varepsilon_0} \frac{Q q_0}{r^2} \vec{e}_r
> $$
>
> 再由电场强度的定义得：
>
>
> $$
> \vec{E} \equiv \frac{\vec{F}}{q_0} = \frac{Q}{4\pi \varepsilon_0 r^2} \vec{e}_r
> $$

当计算连续带电体在空间某点激发的场强时，按照下面的步骤进行：

- 选择恰当的微元，计算微元对场点的场强
- 进行积分，要注意此时进行的是矢量场的积分

### · Gauss 定理

我们先仿照磁通量定义给出电通量定义：
$$
\Phi_c=\iint_{S} \vec{E} \cdot d\vec{S}
$$
其中电通量是有方向性的，正负取值取决于面元的法线方向的选取；通过闭合面的电通量即为净穿出闭合面的电场线的条数

同时规定：面元法线方向由闭合面内指向面外

> 对于任意闭合曲面  $S$ （也称为 Gauss 面），电场强度  $\vec{E}$  的通量等于面内全部电荷代数和的  $\frac{1}{\varepsilon_0}$  倍，与面外的电荷无关，即
>
>
> $$
> \Phi_c=\iint_{\partial\Omega} \vec{E} \cdot d\vec{S} = \frac{1}{\varepsilon_0} \sum_{\text{in }\Omega} q
> $$
>
> 我们可以把 Gauss 面内的总电荷写成体积分的形式
>
>
> $$
> q = \iiint_{\Omega} \rho_e dV
> $$
>
> 这样一来 Gauss 定理可写成
>
>
> $$
> \iint_{\partial\Omega} \vec{E} \cdot d\vec{S}= \iiint_{\Omega} \frac{\rho_e}{\varepsilon_0} dV \rightarrow\nabla \cdot \vec{E} = \frac{\rho_e}{\varepsilon_0}
> $$
> $$
> \nabla \cdot \vec{E} = \frac{\rho_e}{\varepsilon_0}
> $$
>
> 我们可以将其比作为“中心喷水的鱼缸”

Gauss 定理处理的问题为一维对称结构，尽管我们处理的问题一般是在三维空间中，但在一些特殊情况下，$\vec{E}$ 可能只与一个空间坐标有关. 我们把这样的特性称为一维对称性.

下面给出几个典例：

**Question1**：均匀带电球体

![pVqJFKJ.png](https://s21.ax1x.com/2025/10/15/pVqJFKJ.png)

> 选择与带电球同心的球面为 Gauss 面，当  $r < R$  时
>
>
> $$
> \iint_{\partial V} \vec{E} \cdot d\vec{S} = E \cdot 4\pi r^2 = \frac{1}{\varepsilon_0} \rho_e \frac{4}{3} \pi r^3
> $$
>
> $$
> E = \frac{\rho_e}{3\varepsilon_0} r
> $$
>
> 当  $r > R$  时
>
>
> $$
> \iint_{\partial V} \vec{E} \cdot d\vec{S} = E \cdot 4\pi r^2 = \frac{1}{\varepsilon_0} \rho_e \frac{4}{3} \pi R^3
> $$
>
> $$
> E = \frac{\rho_e R^3}{3\varepsilon_0 r^2}
> $$

**Question2**：无限长带电直线

![pVqJ98U.png](https://s21.ax1x.com/2025/10/15/pVqJ98U.png)

> 设直线的线电荷密度为  $\lambda_e$ ，我们可以取如图所示的闭合柱面为 Gauss 面，由于此时电场沿直线辐向分布，故柱面的上下底面应没有场线通过
>
>
> $$
> \iint_{\partial V}S \vec{E} \cdot d\vec{S} = E \cdot 2\pi r \Delta l = \frac{1}{\varepsilon_0} \lambda_e \Delta l
> $$
>
>
> $$
> E = \frac{\lambda_e}{2\pi \varepsilon_0 r}
> $$

**Question3**：无限大带电平面

![pVqJC2F.png](https://s21.ax1x.com/2025/10/15/pVqJC2F.png)

> 由于平面两侧的电场是镜像对称的，我们可选择一个贯穿平面的柱面为 Gauss 面。由于场线应垂直于平面，因此柱面的侧面应没有场线通过。
>
>
> $$
> \iint_S \vec{E} \cdot d\vec{S} = 2E \Delta S = \frac{1}{\varepsilon_0} \sigma_e \Delta S
> $$
>
>
> $$
> E = \frac{\sigma_e}{2\varepsilon_0}
> $$

**Question4**：平行放置的无限大带电平面

![pVqJPv4.png](https://s21.ax1x.com/2025/10/15/pVqJPv4.png)

> 当场源是几个具有对称性的带电体时，可用高斯定理分别求各带电体单独存在时的场强，再作矢量叠加。
>
> 从左到右两平面分出三个区域，分别是 A，B，C
> $$
> E_1 = \frac{\sigma_1}{2\varepsilon_0} \quad E_2 = \frac{\sigma_2}{2\varepsilon_0}
> $$
>
>
> $$
> \vec{E}_A = -\frac{\sigma_1 + \sigma_2}{2\varepsilon_0} \vec{i} \quad \vec{E}_B = \frac{\sigma_1 - \sigma_2}{2\varepsilon_0} \vec{i}
> $$
>
>
> $$
> \vec{E}_C = \frac{\sigma_1 + \sigma_2}{2\varepsilon_0} \vec{i}
> $$
>
> 当  $\sigma_1 = -\sigma_2 = \sigma$ ， $E_A = E_C = 0$ 
>
>
> $$
> \boxed{E_B = \frac{\sigma}{\varepsilon_0}}
> $$
> ${\sigma}/{\varepsilon_0}$ 也为带电平板电容器间的场强

### · 环路定理

Gauss 定理给出了静电场通量的性质，那么这部分要介绍的环路定理将给出静电场环量的性质。

对于场中任意闭合回路 $L$，静电场的环量恒等于零，即

$$
\oint_L \vec{E} \cdot d\vec{l} = 0
$$

结合数学中的 Stokes 公式：
$$
\oint_L \vec{E} \cdot d\vec{l} = \iint_\Sigma (\nabla \times \vec{E}) \cdot d\vec{S}
$$
我们可以得到
$$
\nabla \times \vec{E} = 0
$$

也就是说，**静电场是一个无旋场**。

> 简要证明：以点电荷的电场为例，设有一个点电荷 $q_0$ 沿路径 $L$ 从 $P$ 移动到 $Q$ 
>
> ![](https://pic1.imgdb.cn/item/68f62deb3203f7be00831982.png)
>
> 电场强度为：
> $$
> \vec{E} = \frac{q}{4\pi\varepsilon_0 r^3} \vec{r}
> $$
> 电场力做功为：
> $$
> W = \frac{q q_0}{4\pi\varepsilon_0} \int_{\vec{r}_P}^{\vec{r}_Q} \frac{1}{r^3} \vec{r} \cdot d\vec{l}
> $$
>
> 由图可知：
> $$
> \vec{r} \cdot d\vec{l} = r \cos\theta \, dl = r \, dr
> $$
>
> 因此：
> $$
> W = \frac{q q_0}{4\pi\varepsilon_0} \int_{r_P}^{r_Q} \frac{1}{r^2} dr = \frac{q q_0}{4\pi\varepsilon_0} \left( \frac{1}{r_P} - \frac{1}{r_Q} \right)
> $$
>
> **静电场做功与路径无关，只与始末位置有关！**
>
> 因此自然有沿闭合环路做功为零，环路定理证毕。

### · 电势

电场力做功与路径无关，只取决于始末位置，力学上将这样的力称为**保守力**，保守力必然对应一种势能，且做功等于势能的减少。因此，我们引入**电势能**

$$
q_0 \int_P^Q \vec{E} \cdot d\vec{l} = W_P - W_Q
$$

一般选取无穷远为势能零点，则试探电荷 $q_0$ 在 $P$ 点的电势能为

$$
W_P = q_0 \int_P^{\infty} \vec{E} \cdot d\vec{l}
$$

电势能 $ W_P $ 与 $ q_0 $ 的比值称为**电势**，它由电场本身的性质决定：

$$
U_P = \frac{W_P}{q_0} = \int_P^{\infty} \vec{E} \cdot d\vec{l}
$$
定义了电势后，则两点间的电势差为

$$
U_{PQ} = U_P - U_Q
$$

将试探电荷 $ q_0 $ 从 $ P $ 移至 $ Q $，电场力做功为

$$
W_{PQ} = q_0 U_{PQ}
$$

点电荷电势公式：由电势的定义得

$$
U_P = \frac{q}{4\pi\varepsilon_0} \int_{\vec{r}_P}^{\infty} \frac{1}{r^3} \vec{r} \cdot d\vec{l} = \frac{q}{4\pi\varepsilon_0} \int_{r_P}^{\infty} \frac{1}{r^2} dr = \frac{q}{4\pi\varepsilon_0 r_P}
$$

如果要计算带电体系的电势，可以利用我们前面介绍的叠加原理进行积分，只不过此处是标量场的积分，相对而言要容易些。

场强和电势的微分关系：静电场是**有势场**，其势函数即为电势，由场论相关知识，我们可以写出

$$
\vec{E} = -\nabla U
$$

也就是说**场强是电势的负梯度**，由梯度的性质，我们可以推出：

- 电场强度指向电势降低最快的方向  
- 电场线必然与等势面垂直

顺便提一句，电场线（等势面）的疏密程度能够反映场强的大小。电场线（等势面）越密集，场强越大；越稀疏，场强越小。



