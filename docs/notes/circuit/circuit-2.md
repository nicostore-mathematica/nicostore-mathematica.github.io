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

