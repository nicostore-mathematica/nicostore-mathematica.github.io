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
> \dot{U}_R &= R\dot{I}, \\
> \dot{U}_L &= \text{j}\omega L\dot{I}, \\
> \dot{U}_C &= \frac{\dot{I}}{\text{j}\omega C}
> $$
> 或者直接使用分压公式：
> $$
> \dot{U}_R &= \frac{R\dot{U}}{R + \text{j}\omega L + 1/(\text{j}\omega C)}, \\
> \dot{U}_L &= \frac{\text{j}\omega L\dot{U}}{R + \text{j}\omega L + 1/(\text{j}\omega C)}, \\
> \dot{U}_C &= \frac{(1/\text{j}\omega C)\dot{U}}{R + j\omega L + 1/(\text{j}\omega C)}
> $$
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
>  $UI \cos \varphi (1 + \cos 2 \omega t) \geq 0$ ，被  $R$  消耗；$UI \sin \varphi \sin 2 \omega t$ 正负交替，在电源与  $L-C$  间交换

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
> > **相位角**：$\varphi = \angle \varphi_u - \angle \varphi_i$  
> >
> > **有功功率**： $P = UI \cos \varphi$ 
> >
> > **无功功率**： $Q = UI \sin \varphi$  
> >
> > **视在功率**：$S=UI$ 
>
> **阻抗**：$Z = R$ 
>
> > **相位角**：$\varphi = 0^\circ$  
> >
> > **有功功率**： $UI = \frac{U^2}{R} = RI^2$ 
> >
> > **无功功率**： $0$  
> >
> > **视在功率**：$S=I^2R=\frac{U^2}{R}$ 
>
> **阻抗**：$Z = j \omega L$ 
>
> > **相位角**：$\varphi = 90^\circ$  
> >
> > **有功功率**： $0$ 
> >
> > **无功功率**： $Q = UI = \omega LI^2$  
> >
> > **视在功率**：$S=\omega LI^2$ 
>
> **阻抗**：$Z = -j \frac{1}{\omega C}$
>
> > **相位角**：$\varphi = -90^\circ$  
> >
> > **有功功率**： $0$ 
> >
> > **无功功率**： $Q = -UI = - \frac{1}{\omega C} I^2$  
> >
> > **视在功率**：$S=\frac{1}{\omega C}I^2$ 

有功功率对应电源的为对外做功的能量的变化率。如电机对外做功转化成机械能的能量。

无功功率对应电源不对外做功的那部分电能，用于建立和维持电磁场，保证设备正常运转，无功功率不是无用功率。
