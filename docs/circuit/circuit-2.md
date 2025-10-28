---
title: Chapter 2 交流电路分析
createTime: 2025/09/17 19:34:31
permalink: /circuit/circuit-2/
---

# Chapter 2 正弦电路分析

首先让我们复习一下复数。

我们知道初等代数里面欧拉公式统一了初等代数届最基本的五个量：
$$
e^{j\theta} = \cos\theta + j\sin\theta
$$
不过在电路里，我们一般使用 $j$ 表示虚数单位.

我们知道复数三种表示形式等价:
$$
z = x + jy \longleftrightarrow z = \rho e^{j\varphi} \longleftrightarrow z = \rho (\cos \varphi + j \sin \varphi).
$$
我们假设这里有个交变电流形如 $\mathbf{I_m e^{j(\omega t + \psi)}}$.

> [!important]
>
> 根据欧拉公式
> $$
> \mathbf{I_m e^{j(\omega t + \psi)}} = I_m \cos(\omega t + \psi) + j I_m \sin(\omega t + \psi)
> $$
>
> $$
> i(t) = \text{Re}[\mathbf{I_m e^{j(\omega t + \psi)}}] = \text{Re}[I_m e^{j\psi} e^{j\omega t}] = \text{Re}[\dot{I}_m e^{j\omega t}]
> $$
>
> > $\mathbf{e^{j\omega t}}$ 模为 1、辐角随 $t$ 增大而逆时针旋转。称为旋转因子。
>
> 我们不难推出
> $$
> \dot{I}_m = I_m e^{j\psi}
> $$
> 这称为 $i(t)$ 的相量，这是振幅相量——但我们一般较多使用有效值相量
> $$
> i(t) = \sqrt{2} I \cos(\omega t + \psi) \rightarrow \dot{I} = I e^{j\psi}
> $$
>  默认有效值相量
> $$
> i(t) = \sqrt{2} I \cos(\omega t + \psi) \xrightarrow{\dot{I} = P[i(t)]} \dot{I} = I \angle \psi
> $$
> 反向我们可以用这个式子：
> $$
> i(t) = P^{-1}[\dot{I}] = \text{Re}[\dot{I} e^{j\omega t}]
> $$
> $\mathbf{e^{j\omega t}}$ 模为 1、辐角随 $t$ 增大而逆时针旋转。称为旋转因子。

(其实这里完全可以很恶趣味的加上复数的矩阵定义)

## Part 1 正弦交流电路

### · 基尔霍夫定律

我们知道：同频率正弦量线性组合的相量等于各相量的同一线性组合，那么
$$
a_1 i_1(t) + a_2 i_2(t) = a_1 \text{Re}[\dot{I}_{1m} e^{j\omega t}] + a_2 \text{Re}[\dot{I}_{2m} e^{j\omega t}] = \text{Re}[(a_1 \dot{I}_{1m} + a_2 \dot{I}_{2m}) e^{j\omega t}]
$$

$$
a_1 i_1(t) + a_2 i_2(t) \rightarrow a_1 \dot{I}_{1m} + a_2 \dot{I}_{2m}
$$

那我们可以推出：
$$
\sum i_k =0\Rightarrow\sum \dot{I}_{k}=0
$$
同理，我们可以推出相应的 KVL
$$
\sum u_k =0\Rightarrow\sum \dot{U}_{k}=0
$$

### · 相量

我们知道三大元件的伏安关系：
$$
i=\frac{u}{R},\quad i = C\frac{\text{d}u}{\text{d}t},\quad u = L \frac{\text{d}i}{\text{d}t}
$$
下面我们要将其推广为相量形式.

**电阻元件**：
$$
u=iR\Rightarrow \dot{U}=\dot{I}R
$$

> 不难发现，电压电流相位关系同相，有效值成正比关系.

**电感元件**：
$$
u_L = L \frac{\text{d}i_L}{\text{d}t}\Rightarrow \dot{U}_L=\text{j}\omega L \dot{I}_L
$$

> 定义感抗：
> $$
> X_L=\omega L
> $$
> 单位欧姆，电感电压与电流幅值（有效值）之比等于感抗，相位上电压比电流超前90度.
> $$
> \varphi_u=\varphi_i + 90^\circ
> $$

**电容元件**：
$$
i = C\frac{\text{d}u}{\text{d}t}\Rightarrow \dot{U}_C=\frac{1}{\text{j}\omega C} \dot{I}_C
$$

> 定义容抗：
> $$
> X_C=\frac{1}{\omega C}
> $$
> 单位欧姆，电容电压与电流幅值（有效值）之比等于容抗 ，相位上电压比电流落后 90 度
> $$
> \varphi_u=\varphi_i - 90^\circ
> $$

![pVTvQx0.png](https://s21.ax1x.com/2025/10/04/pVTvQx0.png)

相量变换的重要优点：采用相量变换，并引入感抗和容抗作为 “参数”，则电感和电容元件的微分方程均变为代数方程。

### · 导纳 阻抗

(1). 阻抗

![pVTvM2q.png](https://s21.ax1x.com/2025/10/04/pVTvM2q.png)

> 对上图电路使用KVL： 
> $$
> \dot{U} = \dot{U}_R + \dot{U}_L + \dot{U}_C = RI + \text{j}\omega L\dot{I} + \frac{1}{\text{j}\omega C}\dot{I}
> $$
>
> $$
> = [R + j(\omega L - \frac{1}{\omega C})]\dot{I}
> $$
>
> 令其为 $Z$ ，称为阻抗
> $$
> Z = R + \text{j}X = |Z| \angle \varphi
> $$
> 易推出欧姆定律的相量形式：
> $$
> \dot{U} = Z\dot{I}
> $$

**阻抗** $Z$ **的电路意义**：
$$
Z = R + j(\omega L - \frac{1}{\omega C}) = R + j(X_L - X_C)
$$
**阻抗模**：
$$
|Z| = \sqrt{R^2 + (X_L - X_C)^2}
$$
**阻抗角**：
$$
\varphi = \arctan \frac{X}{R} = \arctan \frac{X_L - X_C}{R}
$$
**阻抗三角形**：

![pVTvKGn.png](https://s21.ax1x.com/2025/10/04/pVTvKGn.png)

**欧姆定律的相量形式**：

> 形式：
> $$
> \dot{U} = Z\dot{I} \Rightarrow Z = \frac{\dot{U}}{\dot{I}} = |Z| \angle \varphi
> $$
>
> - 阻抗模等于电压与电流有效值（振幅）之比。
> - 阻抗角等于电压与电流的相位差。
>
> $$
> |Z| = \frac{U}{I} = \frac{U_m}{I_m},\quad
> \varphi = \varphi_u - \varphi_i
> $$

下面我们给出阻抗角的可能：
$$
\varphi = \arctan \frac{X_L - X_C}{R}
$$

> - 当  $\varphi > 0$  时， $X_L - X_C > 0$ ，总电压超前于电流。
> - 当  $\varphi = 0$  时， $X_L - X_C = 0$ ，总电压、电流同相。
> - 当  $\varphi < 0$  时， $X_L - X_C < 0$ ，总电压滞后于电流。

仍旧是针对阻抗给出的电路图例，我们这次希望求出 $R,\ L,\ C$ 的分压：

> 电流大小：
> $$
> \dot{I} = \frac{\dot{U}}{Z}
> $$
> 使用元件方程：
> $$
> \dot{U}_R = R\dot{I}, 
> $$
> $$
> \dot{U}_L = \text{j}\omega L\dot{I}, 
> $$
>
> $$
> \dot{U}_C = \frac{\dot{I}}{\text{j}\omega C}
> $$
>
> 或者直接使用分压公式：
> $$
> \dot{U}_R = \frac{R\dot{U}}{R + \text{j}\omega L + 1/(\text{j}\omega C)}, 
> $$
> $$
> \dot{U}_L = \frac{\text{j}\omega L\dot{U}}{R + \text{j}\omega L + 1/(\text{j}\omega C)}, 
> $$
>
> $$
> \dot{U}_C = \frac{(1/\text{j}\omega C)\dot{U}}{R + j\omega L + 1/(\text{j}\omega C)}
> $$
>
> 结束.

(2). 导纳

![pV7KNnO.png](https://s21.ax1x.com/2025/10/05/pV7KNnO.png)

> 根据 KCL 
>
> $$
> i = i_G + i_C + i_L
> $$
>
>
> $$
> \dot{i} = G\dot{U} + j\omega C\dot{U} + \frac{\dot{U}}{j\omega L} = \left[ G + j\left( \omega C - \frac{1}{\omega L} \right) \right] \dot{U}
> $$
>
> 令
> $$
> Y = \left[ G + j\left( \omega C - \frac{1}{\omega L} \right) \right] = G + jB = |Y| \angle \varphi_Y
> $$
>
>
> $$
> \Rightarrow \dot{i} = Y\dot{U}
> $$
>
> 此为并联电路欧姆定律的相量形式。
>
> 称 $Y$ 为RLC并联电路的**导纳**，单位西门子，S

![pV7KYjK.png](https://s21.ax1x.com/2025/10/05/pV7KYjK.png)

导纳 $Y$ 的电路意义

$$
Y = G + jB = |Y| \angle \varphi_Y
$$


$$
Y = \frac{\dot{I}}{\dot{U}} = \frac{I \angle \varphi_i}{U \angle \varphi_u} = \frac{I}{U} \angle \varphi_i - \varphi_u
$$


$$
\Rightarrow |Y| = \frac{I}{U}, \quad \varphi_Y = \varphi_i - \varphi_u
$$

**导纳的模等于电流与电压有效值（幅值）之比；导纳角等于电流超前于电压的相位角。**

画相量图，以  $\dot{U}$  为参考


$$
I = \sqrt{I_G^2 + (I_C - I_L)^2}
$$

### · 等效电路![pV7MAVe.png](https://s21.ax1x.com/2025/10/05/pV7MAVe.png)

> **数学推导**：
>
> 阻抗计算公式：
> $$
> \frac{\dot{U}}{\dot{I}} = Z = R + jX
> $$
> 导纳计算：
> $$
> Y = \frac{1}{R + j\omega L}= \frac{R}{R^2 + (\omega L)^2} + j(-\frac{\omega L}{R^2 + (\omega L)^2})= G + jB
> $$
>
> $$
> \frac{1}{\omega L'} = \frac{\omega L}{R^2 + (\omega L)^2} = L + \frac{R^2}{\omega^2 L}
> $$

我们这时候就可以用如下方法分析正弦电路：

![pV7MEUH.png](https://s21.ax1x.com/2025/10/05/pV7MEUH.png)

### · 功率

在电路中，电压  $u = \sqrt{2}U \cos(\omega t)$  和电流  $i = \sqrt{2}I \cos(\omega t - \varphi)$  通过阻抗 $Z$ 时，

电压和电流的关系可以表示为
$$
Z = \frac{U}{I} \angle \varphi = R + jX
$$
瞬时功率： $p(t) = ui$ 

> 我们知道和差化积公式：
> $$
> 2 \cos \alpha \cos \beta = \cos(\alpha + \beta) + \cos(\alpha - \beta)
> $$
> 功率表达式：
>
> $$
> p(t) = 2UI \cos \alpha \cos(\omega t - \varphi)
> $$
>
> $$
> = UI \cos \varphi + UI \cos(2 \omega t - \varphi)
> $$
>
> $$
> = UI \cos \varphi (1 + \cos 2 \omega t) + UI \sin \varphi \sin 2 \omega t
> $$
>
> 不难观测到：
> $$
> UI \cos \varphi (1 + \cos 2 \omega t) \geq 0
> $$
> 被  $R$  消耗；
> $$
> UI \sin \varphi \sin 2 \omega t
> $$
> 正负交替，在电源与  $L-C$  间交换

所以我们可以给出以下定义

> [!important]
>
> 平均功率： $P = UI \cos \varphi$ ，单位：W
>
> 无功功率： $Q = UI \sin \varphi$ ，单位：var
>
> 视在功率： $S = UI$ ，单位：VA
>
> 功率因数： $\lambda = \cos \varphi$ 
>
> > 因为，有功功率
> > $$
> > P = S \cos \varphi
> > $$
> > 无功功率
> > $$
> > Q = S \sin \varphi = P \tan \varphi
> > $$
> > 所以，视在功率
> > $$
> > S = \sqrt{P^2 + Q^2}
> > $$
> > 功率因数代表了视在功率中，有功功率所占的比重。

我们可以在这里给出如下关系：

> [!important]
>
> **阻抗**：
> $$
> Z = |Z| \angle \varphi
> $$
>
> > **相位角**
> > $$
> > \varphi = \angle \varphi_u - \angle \varphi_i
> > $$
> > **有功功率**：
> > $$
> > P = UI \cos \varphi
> > $$
> > **无功功率**：
> > $$
> > Q = UI \sin \varphi
> > $$
> > **视在功率**：
> > $$
> > S=UI
> > $$
>
> **电阻元件**：
> $$
> Z = R
> $$
>
> > **相位角**：
> > $$
> > \varphi = 0^\circ
> > $$
> > **有功功率**：
> > $$
> > UI = \frac{U^2}{R} = RI^2
> > $$
> > **无功功率**： $0$  
> >
> > **视在功率**：
> > $$
> > S=I^2R=\frac{U^2}{R}
> > $$
>
> **电感元件**：
> $$
> Z = j \omega L
> $$
>
> > **相位角**：
> > $$
> > \varphi = 90^\circ
> > $$
> > **有功功率**： $0$ 
> >
> > **无功功率**：
> > $$
> > Q = UI = \omega LI^2
> > $$
> > **视在功率**：
> > $$
> > S=\omega LI^2
> > $$
>
> **电容元件**：
> $$
> Z = -j \frac{1}{\omega C}
> $$
>
> > **相位角**：
> > $$
> > \varphi = -90^\circ
> > $$
> > **有功功率**： $0$ 
> >
> > **无功功率**：
> > $$
> > Q = -UI = - \frac{1}{\omega C} I^2
> > $$
> > **视在功率**：
> > $$
> > S=\frac{1}{\omega C}I^2
> > $$

有功功率对应电源的为对外做功的能量的变化率。如电机对外做功转化成机械能的能量。

无功功率对应电源不对外做功的那部分电能，用于建立和维持电磁场，保证设备正常运转，无功功率不是无用功率。

**功率表**：测得的功率为有用功率，有时读数并不代表某个具体元件的功率

![pVOshO1.png](https://s21.ax1x.com/2025/10/21/pVOshO1.png)

**复功率**：

![pVOsWl9.png](https://s21.ax1x.com/2025/10/21/pVOsWl9.png)

> 复功率是纯计算量，是交流电路功率大综合
> $$
> \tilde{S} = P + \mathrm{j}Q = UI\cos\varphi + \mathrm{j}UI\sin\varphi
> $$
>
> **复功率的相量计算法：**
>
> $$
> \tilde{S} = UIe^{\mathrm{j}\varphi} = UIe^{\mathrm{j}(\psi_u - \psi_i)} = (Ue^{\mathrm{j}\psi_u})(Ie^{-\mathrm{j}\psi_i}) = \vec{U}\vec{I}^*
> $$
>
> $$
> S = |\tilde{S}| = \sqrt{P^2 + Q^2} = UI
> $$
>
> 复功率模为视在功率
>
> $$
> \varphi = \arctan\frac{Q}{P} = \arccos\lambda 
> $$
>
> 复功率辐角即功率因数角
>
> $$
> P = \operatorname{Re}[\tilde{S}]
> $$
>
> 复功率的实部为有功功率
>
> $$
> Q = \operatorname{Im}[\tilde{S}]
> $$
>
> 复功率的虚部为无功功率

### · 例题

已知电路的有用功率为 $P$，电流表和电压表的读数为 $I$ 和 $U$ ，电容大小为 $C$ ，电压源的频率为 $f$ 

求解电路的功率因数 $\cos\varphi$ 以及电阻 $R$ 和电感 $L$ 的具体值是多少

![pVOsfyR.png](https://s21.ax1x.com/2025/10/21/pVOsfyR.png)

> **解法一**：
> $$
> \omega = 2\pi f
> $$
> 电容电流大小：
> $$
> I_C = \omega C U
> $$
> 设 R 与 L 支路的电流为 $I_L$，则：
>
> 有功功率：
> $$
> P = U I_L \cos\varphi_L = U I \cos\varphi
> $$
>
> $$
> \cos\varphi=\frac{P}{UI}  \quad \Rightarrow \quad \arccos\varphi =\pm \varphi
> $$
>
> 总电流平方关系（由相量合成）：
> $$
> I^2 = (I_L \cos\varphi_L)^2 + (I_C - I_L \sin\varphi_L)^2
> $$
>
> 根据 **代数学基本定理** ，我们很容易知道有两组解
>
> 代入已知条件：
> $$
> I_L \cos\varphi_L = \frac{P}{U}
> $$
> 不妨令
> $$
> I_L \sin\varphi_L = s,\quad
> I_L \cos\varphi_L = a
> $$
> 可以推出：
> $$
> (I_C - s)^2 = \text{const}
> $$
> 求支路功率因数角：
>
> $$
> \varphi_{L1} = \arctan\frac{s_1}{a}
> $$
> $$
> \varphi_{L2} = \arctan\frac{s_2}{a}
> $$
>
> 电阻与电感参数计算：
>
> $$
> P = I_L^2 R \quad \Rightarrow \quad R = \frac{P}{I_L^2}
> $$
>
> $$
> \frac{U}{I_L} = Z_L \quad \Rightarrow \quad Z_L \sin\varphi_L = \omega L
> $$
>
> $$
> X_L = \omega L = Z_L \sin\varphi_L
> $$
>
> 代数即可.
>
> ***
>
> **解法二**：使用相量法
>
> 电容电流大小：
> $$
> I_C = \omega C U
> $$
> 且电流方向：
> $$
> \cos\varphi=\frac{P}{UI}  \quad \Rightarrow \quad \arccos\varphi =\pm \varphi
> $$
> 所以我们可以设定主干路电流为
> $$
> \dot{I}=I\angle \pm \varphi
> $$
> 电容支路电流为：
> $$
> \dot{I}_C = \omega C U\angle 90^\circ
> $$
> 然后我们可以根据功率：
> $$
> P=|\dot{I}-\dot{I}_C|^2R
> $$
> 求出电阻阻值,
>
> 进而求出电感.

## Part 2 磁耦合元件

### · 互感

一个线圈电流所产生的磁通会穿过邻近的另一个线圈，称为**磁耦合现象**

![pVxeNrR.png](https://s21.ax1x.com/2025/10/27/pVxeNrR.png)

磁耦合一般可以用于能量传输和信号传递（无线充电）

**互感磁链**：

![pVxedVx.png](https://s21.ax1x.com/2025/10/27/pVxedVx.png)

- $\Phi_{11}$：线圈1的自感磁通
- $\Phi_{22}$：线圈2的自感磁通
- $\Phi_{21}$：线圈1对线圈2的互感磁通
- $\Phi_{12}$：线圈2对线圈1的互感磁通

![pVxeUq1.png](https://s21.ax1x.com/2025/10/27/pVxeUq1.png)

自感磁链：

$$
\begin{cases}
\Psi_{11} = n_1 \Phi_{11} = L_1 i_1 \\
\Psi_{22} = n_2 \Phi_{22} = L_2 i_2
\end{cases}
$$

互感磁链：

$$
\begin{cases}
\Psi_{21} = n_2 \Phi_{21} = M_{21} i_1 \\
\Psi_{12} = n_1 \Phi_{12} = M_{12} i_2
\end{cases}
$$

-  $L_1$ 、 $L_2$ 称为自感系数，简称自感
-  $M_{12}$ 、 $M_{21}$ 称为互感系数，简称互感，单位：H
-  $M_{12} = M_{21} = M$ ，表示一个线圈对临近线圈产生感生电压的能力。

**定义耦合系数**
$$
k = \sqrt{\frac{\Psi_{21} \Psi_{12}}{\Psi_{11} \Psi_{22}}} = \frac{M}{\sqrt{L_1 L_2}}\quad 0 \leq k \leq 1
$$
互感磁链相对自感磁链越大，则  $k$  越大，因此  $k$  的大小代表了线圈磁耦合的紧密程度。

 $k = 1$ ，称为全耦合。

由耦合系数算互感：
$$
M = k \sqrt{L_1 L_2}
$$
![pVxewa6.png](https://s21.ax1x.com/2025/10/27/pVxewa6.png)

**自感与互感磁链方向相同**

$$
\begin{cases}
\Psi_1 = \Psi_{11} + \Psi_{12} = L_1 i_1 + M i_2 \\
\Psi_2 = \Psi_{21} + \Psi_{22} = M i_1 + L_2 i_2
\end{cases}
$$

**自感与互感磁链方向相反**

$$
\begin{cases}
\Psi_1 = \Psi_{11} - \Psi_{12} = L_1 i_1 - M i_2 \\
\Psi_2 = -\Psi_{21} + \Psi_{22} = -M i_1 + L_2 i_2
\end{cases}
$$

**问题：** 如果不画出线圈绕向，如何知道自感磁链与互感磁链的方向关系？

**规定：** 当两个线圈中的自感磁通和互感磁通方向相同时，流入（或流出）电流的两个端子称为**同名端**，标记*。

![pVxe0IK.png](https://s21.ax1x.com/2025/10/27/pVxe0IK.png)

$$
u_1 = -e_1 = \frac{d\Psi_1}{dt} = L_1 \frac{di_1}{dt} \pm M \frac{di_2}{dt} \\
u_2 = -e_2 = \frac{d\Psi_2}{dt} = \pm M \frac{di_1}{dt} + L_2 \frac{di_2}{dt}
$$

互感电压，可正可负，取决于  $i_2$  的方向和同名端

自感电压，若  $u_2$  和  $i_2$  为关联方向，则为正

**相量表示**：

![pVxesRe.png](https://s21.ax1x.com/2025/10/27/pVxesRe.png)

![pVxerGD.png](https://s21.ax1x.com/2025/10/27/pVxerGD.png)

$$
u_1 = L_1 \frac{di_1}{dt} \pm M \frac{di_2}{dt} \\
u_2 = \pm M \frac{di_1}{dt} + L_2 \frac{di_2}{dt}
$$

转换为相量表示：


$$
\dot{U}_1 = j\omega L_1 \dot{I}_1 \pm j\omega M \dot{I}_2 \\
\dot{U}_2 = \pm j\omega M \dot{I}_1 + j\omega L_2 \dot{I}_2
$$

### · 耦合元件化简

(1). **串联等效化简**.

![pVxeDPO.png](https://s21.ax1x.com/2025/10/27/pVxeDPO.png)

> **正串**：
>
> 列KVL方程得：
>
>
> $$
> u = u_1 + u_2 = \left( L_1 \frac{di}{dt} + M \frac{di}{dt} \right) + \left( M \frac{di}{dt} + L_2 \frac{di}{dt} \right)
> $$
>
>
> $$
> = \left( L_1 + L_2 + 2M \right) \frac{di}{dt} = L_{eq} \frac{di}{dt}
> $$
>
> 等效电感
> $$
> L_{eq} = L_1 + L_2 + 2M \geq L_1 + L_2
> $$
> **反串**：
>
> 列KVL方程得：
>
>
> $$
> u = u_1 + u_2 = \left( L_1 \frac{di}{dt} - M \frac{di}{dt} \right) + \left( L_2 \frac{di}{dt} - M \frac{di}{dt} \right)
> $$
>
>
> $$
> = \left( L_1 + L_2 - 2M \right) \frac{di}{dt}
> $$
>
> 等效电感
> $$
> L_{eq} = L_1 + L_2 - 2M
> $$

(2). **并联等效化简**.

> **同名端并联**：
>
> ![](https://pic1.imgdb.cn/item/6900504c3203f7be00a9b318.png)
>
> 
>
> **异名端并联**：
>
> ![](https://pic1.imgdb.cn/item/6900504c3203f7be00a9b31a.png)

(3). **T形等效**.

![](https://pic1.imgdb.cn/item/6900504c3203f7be00a9b319.png)

### · 空心变压器

空心变压器的两个耦合线圈分别称为一次侧线圈和二次侧线圈，当一次侧线圈连接电源（或信号源），二次侧线圈连接负载时，电能（或信号）从一次侧线圈通过磁场耦合方式传递到二次侧线圈。

![](https://pic1.imgdb.cn/item/69005d3d3203f7be00aa4de0.png)

空心变压器中我们要做的假设很简单——为了便于计算，我们需要将耦合元件两侧的电路等效到一侧，所以我们需要引入反射阻抗的概念使得计算相对更为便捷和直接。

> **一次侧等效**：
>
> ![](https://pic1.imgdb.cn/item/69005d3d3203f7be00aa4de2.png)
>
> 一次侧、二次侧电压方程
>
> $$
> \begin{cases} 
> j\omega L_1 \dot{I}_1 + j\omega M \dot{I}_2 = \dot{U}_1 \\
> j\omega M \dot{I}_1 + j\omega L_2 \dot{I}_2 + Z_2 \dot{I}_2 = 0 
> \end{cases}
> $$
>
> 一次侧看进去的等效阻抗
>
> $$
> Z_{eq} = \frac{\dot{U}_1}{\dot{I}_1} = \frac{(\omega M)^2}{Z_2 + j\omega L_2} + j\omega L_1 = Z_{r1} + j\omega L_1
> $$
>
> 二次侧对一次侧的反射阻抗
>
> $$
> Z_{r1} = \frac{(\omega M)^2}{Z_2 + j\omega L_2} = R_{r1} + jX_{r1} = \frac{(\omega M)^2}{Z_2}
> $$
> **二次侧等效**：
>
> ![](https://pic1.imgdb.cn/item/69005d3d3203f7be00aa4de4.png)
>
> 一次侧电流
>
> $$
> \dot{I}_1 = \frac{\dot{U}_s}{R_1 + j\omega L_1} 
> $$
>
> 开路电压
>
> $$
> \dot{U}_{oc} = j\omega M \dot{I}_1 = \frac{j\omega M}{R_1 + j\omega L_1} \dot{U}_s 
> $$
>
> 等效阻抗
>
> $$
> Z_{eq} = \frac{(\omega M)^2}{R_1 + j\omega L_1} + j\omega L_2 = Z_{r2} + j\omega L_2 
> $$
>
> 一次侧对二次侧的反射阻抗
>
> $$
> Z_{r2} = \frac{(\omega M)^2}{Z_1}
> $$
>

### · 理想变压器

![pVxeNrR.png](https://s21.ax1x.com/2025/10/27/pVxeNrR.png)

我们以常见变压器为例：

> **假设一**：全耦合，耦合系数  $k = 1$ 。
>
> $$
> \begin{cases} 
> \psi_1 = N_1 \Phi \\
> \psi_2 = N_2 \Phi 
> \end{cases}
> $$
>
>
> $$
> \frac{\psi_1}{\psi_2} = \frac{N_1}{N_2} = n
> $$
>
> 磁链之比，等于匝数之比。
>
>
> $$
> \frac{e_1}{e_2} = \frac{-\frac{d\psi_1}{dt}}{-\frac{d\psi_2}{dt}} = \frac{N_1}{N_2} = n
> $$
>
> 感应电动势之比，等于匝数之比。内部表现。
>
> **假设二**：忽略线圈电阻
>
> $$
> \begin{cases} 
> u_1 = -e_1 = \frac{d\psi_1}{dt} = N_1 \frac{d\Phi}{dt} \\
> u_2 = -e_2 = \frac{d\psi_2}{dt} = N_2 \frac{d\Phi}{dt} 
> \end{cases}
> $$
>
>
> $$
> \frac{u_1}{u_2} = \frac{N_1}{N_2} = n
> $$
>
> 电压之比，等于匝数之比。
>
> **假设三**：不计涡流损耗
>
> 安培环路定律
>
>
> $$
> \oint_{l} \vec{H} \cdot d\vec{l} = N_1 i_1 + N_2 i_2
> $$
>
> 不含涡流，只含线圈电流
>
> **假设四**：磁导率  $\mu$  为无限大
>
> $$
> \oint_{l} \vec{H} \cdot d\vec{l} = \oint_{l} \frac{\vec{B}}{\mu} d\vec{l} = \oint_{l} 0 d\vec{l} = 0
> $$
>
>
> $$
> N_1 i_1 + N_2 i_2 = 0
> $$
>
>
> $$
> \frac{i_1}{i_2} = -\frac{N_2}{N_1} = -\frac{1}{n}
> $$
>
> 或者不计损耗且磁导率为无限大，则磁场能量密度
>
>
> $$
> W_{m0} = 0.5 \vec{B} \cdot \vec{H} = 0
> $$
>
> 不耗能、不储能，变压器的瞬时功率为：
>
>
> $$
> p = u_1 i_1 + u_2 i_2 = 0 \quad \Rightarrow \quad \frac{i_1}{i_2} = -\frac{u_2}{u_1} = -\frac{1}{n}
> $$

对实际变压器做如下假设便成为理想变压器：

（1）全耦合，耦合系数 $k=1$；

（2）忽略损耗，包括铜损耗和铁损耗；

（3）磁导率 $\mu$ 为无限大。

理想变压器只有一个参数，并且用代数方程来描述；而互感要用微分方程组来描述，极端量变导致质变。

![](https://pic1.imgdb.cn/item/690063a23203f7be00aa8969.png)
$$
\frac{i_1}{i_2} = -\frac{u_2}{u_1} = \frac{1}{n}
$$
