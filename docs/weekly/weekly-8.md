---
title: weekly-期中寄
date: 2025-04-14 22:26:47
tags: Nichijou
permalink: /weekly/weekly-8/
---

万恶的期中寄结束力！紧接着赶来的就是期末寄（悲）

### · 一点数学

先给出来一道闫浩给大一微积分出的PDE的题

> 设 $f(u,v)$ 可微，且满足以下条件：
> $$
> \frac{\partial f(u,v)}{\partial u}-2\frac{\partial f(u,v)}{\partial v}=\cos(u+v),\quad 
> g(x,y)=f(x,y-2x)
> $$
> (1). 求解 $\frac{\partial g(x,y)}{\partial x}$ 
>
> (2). $g(0,y)=y^2-\sin y$ ，求 $f(u,v),g(x,y)$ 表达式

第一问本人做出来的，第二问似乎是做错力（悲）

第一问首先我们不难发现变量代换的关系：$u=x,v=y-2x$ 

那么使用链式法则：
$$
\frac{\partial g}{\partial x}=\frac{\partial f}{\partial u}\frac{\partial u}{\partial x}+\frac{\partial f}{\partial v}\frac{\partial v}{\partial x}=\frac{\partial f}{\partial u}-2\frac{\partial f}{\partial v}=\cos(u+v)=\cos(y-x)
$$
紧接着是第二问：

$$
f(u,v)=f(x,y-2x)=h(x,y)
$$

$$
\frac{\partial h}{\partial x}=\frac{\partial f}{\partial u}\frac{\partial u}{\partial x}+\frac{\partial f}{\partial v}\frac{\partial v}{\partial x}=\cos(y-x)
$$

两侧同时对 $x$ 积分：
$$
h(x,y)=f(x,y-2x)=\int\cos(y-x)\text{d}x=-\sin(y-x)+C(y)
$$

$$
f(u,v)=h(u,v+2u)=-\sin(u+v)+C(v+2u)
$$

我们发现到这里就求不出来 $C(y)$ 的具体表达式，但是还有个条件没有用
$$
g(0,y)=y^2-\sin y，g(x,y)=f(x,y-2x)\Rightarrow f(0,y)=y^2-\sin y
$$
然后将 $u$ 赋值为 $0$ 
$$
f(0,v)=-\sin v+C(v)=v^2-\sin v\Rightarrow C(v)=v^2
$$

$$
f(u,v)=-\sin(u+v)+(v+2u)^2
$$

$$
g(x,y)=y^2-\sin (y-x)
$$

Q.E.D.
