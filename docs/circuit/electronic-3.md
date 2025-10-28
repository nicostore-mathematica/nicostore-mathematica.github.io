---
title: Chapter 3 放大电路分析
createTime: 2025/09/27 13:34:31
permalink: /circuit/electronic-3/
---

## Part 1 典型放大电路

我们这里将会重新讲一下如何分析放大电路。

### · 直接耦合共射放大电路

![](https://pic1.imgdb.cn/item/68f337acc5157e1a88813c99.png)

**静态分析**：

> 绘制直流通路（将交流信号源短路）：
>
> ① 输入回路：
> $$
> \frac{V_{CC} - U_{BQ}}{R_{b2}} = \frac{U_{BQ} - 0}{R_{b1}} + I_{BQ}; \quad U_{EQ} = 0; \quad U_{BEQ} = U_{BQ} - U_{EQ} = 0.7V
> $$
>
> ② 电流放大关系：
> $$
> I_{CQ}=\beta I_{BQ}
> $$
> ③ 输出回路：
> $$
> V'_{CC} = \frac{R_L}{R_L + R_C} V_{CC}; \quad I_{CQ} = \beta I_{BQ}
> $$
>
> $$
> R'_c = R_c // R_L
> $$
>
> 负载  $ R_L $ ：
>
> $$
> U_{CQ} = V'_{CC} - R'_c I_{CQ}; \quad U_{EQ} = 0; \quad U_{CEQ} = U_{CQ} - U_{EQ}
> $$
>
> 空载：
>
> $$
> U_{CQ} = V_{CC} - R_c I_{CQ}; \quad U_{EQ} = 0; \quad U_{CEO} = U_{CQ} + U_{EQ}
> $$
>
> > 经过戴维宁等效后得到右图：
> > $$
> > V_{BB} = \frac{R_{b1}}{R_{b1} + R_{b2}} V_{CC}
> > $$
> >
> >
> > $$
> >  R_b = R_{b1} // R_{b2} 
> > $$
> >
> > 输入回路电路方程的目的——通过电位条件求解基极电流
> >
> > 把基极电流  $I_B$  看作输出电流，基极电位  $U_B$  看作输出电压 —— 戴维南等效定理
> >
> > 输入回路电路方程：
> >
> >
> > $$
> > \frac{V_{CC} - U_{BQ}}{R_{b2}} = \frac{U_{BQ} - 0}{R_{b1}} + I_{BQ}\xrightarrow{\text{Thevenin}} \frac{V_{BB} - U_{BQ}}{R_b} = I_{BQ}
> > $$
> >
> > 容易推出：
> > $$
> > V_{BB}=\frac{R_{b1}}{R_{b1}+R_{b2}}V_{CC}
> > $$
> >
> > $$
> > R_b=   R_{b1} // R_{b2}
> > $$

![](https://pic1.imgdb.cn/item/68f337acc5157e1a88813c9b.png)

**动态分析**：

> 电压放大倍数
> $$
> A_u = \frac{U_o}{U_i} = \frac{-\beta \dot{I}_b (R_c // R_L)}{R_{b1} \left( \frac{r_{be} \dot{I}_b + \dot{I}_b}{R_{b2}} \right) + r_{be} \dot{I}_b} = \frac{-\beta (R_c // R_L)}{R_{b1} \left( \frac{r_{be}}{R_{b2}} + 1 \right) + r_{be}}
> $$
> 输入电阻
> $$
> R_i = \frac{\dot{U}_i}{\dot{I}_i} = R_{b1} + \left( R_{b2} // r_{be} \right)
> $$
> 输出电阻
> $$
> R_o = \left. \frac{\dot{U}_o}{\dot{I}_o} \right|_{u_s=0} = R_c
> $$

### · 阻容耦合共射放大电路

信号源与放大电路、放大电路与负载之间通过耦合电容连接；耦合电容容值较大，充放电时间常数较大，端电压近似恒定；利用耦合电容的充放电将输入信号的变化传递为基极电位的变化，将集电极电位的变化传递为输出信号的变化；耦合电容起到“隔直通交”的作用

阻容耦合的缺点——无法对直流小信号放大，信号频率过低输出会发生明显的衰减

![](https://pic1.imgdb.cn/item/68f33bfdc5157e1a888168b3.png)

**静态分析**：

> 绘制直流通  （将交流信号源短路，耦合电容开路）；
>
> ① 输入回路：
> $$
> \frac{V_{CC} - U_{BQ}}{R_b} = I_{BQ}, \quad U_{EQ} = 0, \quad U_{BEQ} = U_{BQ} - U_{EQ} = 0.7V
> $$
> ② 电流放大关系：
> $$
> I_{CQ} = \beta I_{BQ}
> $$
> ③ 输出回路：
> $$
> U_{CQ} = V_{CC} - R_c I_{CQ}, \quad U_{EQ} = 0, \quad U_{CEQ} = U_{CQ} - U_{EQ}
> $$

![](https://pic1.imgdb.cn/item/68f337acc5157e1a88813c9d.png)

**动态分析**：

> 电压放大倍数
>
> $$
> A_u = \frac{\dot{U}_o}{\dot{U}_i} = \frac{-\beta \dot{I}_b (R_c // R_L)}{r_{be} \dot{I}_b} = \frac{-\beta (R_c // R_L)}{r_{be}}
> $$
> 输入电阻
> $$
> R_i = \frac{\dot{U}_i}{\dot{I}_i} = R_b // r_{be}
> $$
> 输出电阻
> $$
> R_o = \left. \frac{\dot{U}_o}{\dot{I}_o} \right|_{u_s=0} = R_c
> $$

> [!important]
>
> 考虑实际信号源内阻
>
> ![](https://pic1.imgdb.cn/item/68f337acc5157e1a88813c9f.png)
>
> 输入电阻从左侧箭头方向看，与信号源内阻无关；输出电阻从右侧箭头方向看，与负载无关
>
> 电压放大倍数  $A_{us} = ?$ 
> $$
> A_{us} = \frac{\dot{U}_o}{\dot{U}_s} = \frac{\dot{U}_o}{\dot{U}_i} \times \frac{\dot{U}_i}{\dot{U}_s} = A_u \frac{R}{R_1 + R_s}
> $$
>
> 回顾输入电阻的概念
>
> 求解输出电阻时， $ R_s $  是否短路？ —— No， $ R_s $  应保留，只短路信号源；（虽然对本题结果并无影响）

### · 射极偏置电路

等等，上面不是讲过了理想的基本共射放大电路？

![](https://pic1.imgdb.cn/item/68f337e6c5157e1a88813e2d.png)

> 我们需要考虑温度对电路稳定性的影响：
>
> 上面是我们所见的一个放大电路模型，温度影响 $V_{BE} ,\ \beta,\ I_{CBO}$ 三个参数，从而影响放大器静态工作点
>
> 随着温度上升：
> $$
> T\uparrow\quad\rightarrow\quad\quad\begin{matrix}
> V_{BE}\downarrow & & I_{BQ}\uparrow=(V_{CC}-V_{BE})/R_B \\\
> \beta\uparrow & & I_{CBO},\ I_{CEO}\uparrow 
> \end{matrix}\quad\rightarrow\quad
> I_{CQ}\uparrow =\beta I_{BQ}+I_{CEO}
> $$
> 那这样会有什么后果？
>
> 温度上升时输出特性曲线上移，Q向饱和区移动，可能导致失真
>
> 解决问题的方式是引入电阻 $R_e$ 
>
> 当集电极电流变化时，发射极电流跟随其产生相同的变化（晶体管放大区的电流关系），电阻 $R_e$ 上的压降即发射极电位也产生相同的变化（欧姆定律），发射结压降即 $U_{BE}$ 产生相反的变化（基极电位基本不变），进而基极电流产生相反的变化（晶体管的输入伏安特性曲线），最终抑制了集电极电流的变化； $R_e$ 越大，抗扰效果即稳定能力越好；

![](https://pic1.imgdb.cn/item/68f337e6c5157e1a88813e2e.png)

**静态分析**：

> 如下：
> $$
> \frac{V_{CC} - U_{BQ}}{R_b} = I_{BQ}
> $$
>
> $$
> U_{EQ} = R_e I_{EQ}
> $$
>
> $$
> I_{BQ} : I_{CQ} : I_{EQ} = 1 : \beta : 1 + \beta
> $$
>
> $$
> U_{BEQ} = U_{BQ} - U_{EQ} = 0.7V
> $$
>
> $$
> U_{CQ} = V_{CC} - R_e I_{CQ}
> $$
>
> $$
> U_{CEQ} = U_{CQ} - U_{EQ}
> $$
>
> 输出电压公式
> $$
> U_{CEQ} = V_{CC} - \beta R_e \frac{V_{CC} - U_{BEQ}}{R_b + (1 + \beta) R_e} - (1 + \beta) R_e \frac{V_{CC} - U_{BEQ}}{R_b + (1 + \beta) R_e}
> $$
> (不需要背下来)

![](https://pic1.imgdb.cn/item/68f337e6c5157e1a88813e30.png)

**动态分析**：

> 电压放大倍数  $ A_u $ ：
> $$
> A_u = \frac{\dot{U}_o}{\dot{U}_i} = \frac{-\beta \dot{I}_b (R_c // R_L)}{r_{be} \dot{I}_b + R_e (1 + \beta) \dot{I}_b} = \frac{-\beta (R_c // R_L)}{r_{be} + R_e (1 + \beta)}
> $$
> 输入电阻  $R_i$ ：
>
> $$
> R_i = \frac{\dot{U}_i}{\dot{I}_i} = R_b // \frac{\dot{U}_i}{\dot{I}_b} = R_b // \frac{r_{be} \dot{I}_b + R_e (1 + \beta) \dot{I}_b}{\dot{I}_b} = R_b // [r_{be} + (1 + \beta) R_e]
> $$
> 输出电阻  $ R_o $ ：
>
> $$
> R_o = \left. \frac{\dot{U}_o}{\dot{I}_o} \right|_{u_s=0} = R_c
> $$

> [!caution]
>
> 虽然输出电阻最后的结果是  $ R_c $ ，但求解过程并不是直接将受控电流源开路！！！
>
> 将独立电压源短路后，受控源仍然保留，从输出端口外施电源往里看，
>
> 假设受控电流源存在电流，则受控电流源电流、 $r_{be}$  电流、 $R_e$  电流应满足  $\beta : 1 : 1 + \beta$  的关系，
>
> 且方向如图所示，而根据 KVL  $r_{be} - R_e$  这条支路压降必须为零，因此这三个电流都为零，即受控源开路；

### · 分压偏置共射放大电路

也是写到这里了。

![](https://pic1.imgdb.cn/item/68f337acc5157e1a88813c9e.png)

**结构特点**：

> 两个基极偏置电阻 ——  $R_{b1}$ 、 $R_{b2}$ ;
>
> 集电极电阻 ——  $R_c$ ;
>
> 发射极电阻 ——  $R_e$ ;
>
> 发射极旁路电容 ——  $C_e$ ;
>
> 旁路电容 $C_e$ 的作用：静态动态的分离

**静态分析**：

> ![](https://pic1.imgdb.cn/item/68f337acc5157e1a88813c9c.png)
>
> (右图为戴维宁等效后的电路)
> $$
>  \frac{V_{BB} - U_{BQ}}{R_b} = I_{BQ}
> $$
>
>
> $$
>  U_{EQ} = R_e I_{EQ}
> $$
>
>
> $$
>  I_{BQ} : I_{CQ} : I_{EQ} = 1 : \beta : 1 + \beta 
> $$
>
>
> $$
>  U_{BEQ} = U_{BQ} - U_{EQ} = 0.7V
> $$
>
>
> $$
> U_{CQ} = V_{CC} - R_c I_{CQ}
> $$
>
>
> $$
> U_{CEQ} = U_{CQ} - U_{EQ}
> $$
>
> 戴维南等效后：
> $$
>  V_{BB} = \frac{R_{b1}}{R_{b1} + R_{b2}} V_{CC} 
> $$
>
>
> $$
> R_b = R_{b1} // R_{b2}
> $$
>
> 可以推出：
> $$
> U_{CEQ} = V_{CC} - \beta R_e \frac{kV_{CC} - U_{BEQ}}{R_b + (1 + \beta) R_e} - (1 + \beta) R_e \frac{kV_{CC} - U_{BEQ}}{R_b + (1 + \beta) R_e}
> $$
> 其中， $k$  为分压比，
> $$
> k = \frac{R_{b1}}{R_{b1} + R_{b2}}
> $$
> （不需要背下来）

> [!important]
>
> **静态分析的近似算法**：
>
> 忽略基极电流（非常小）
> $$
> I_1 = I_2
> $$
> 集电极电流约等于发射极电（放大系数足够大）, 满足
> $$
> (1 + \beta) R_e \gg R_{b1} // R_{b2} ,\quad \beta \gg 1
> $$
> 可以推出
> $$
> U_{BQ} = k V_{CC} = \frac{R_{b1}}{R_{b1} + R_{b2}} V_{CC}
> $$
>
> $$
> U_{EQ} = R_e I_{EQ}
> $$
>
> $$
> U_{BEQ} = U_{BQ} - U_{EQ} = 0.7V
> $$
>
> $$
> I_{EQ} = I_{CQ}
> $$
>
> $$
> U_{CQ} = V_{CC} - R_c I_{CQ}
> $$
>
> $$
> U_{CEQ} = U_{CQ} - U_{EQ}
> $$

## Part 2 单管放大电路基本接法

![pVo9Cct.png](https://s21.ax1x.com/2025/09/28/pVo9Cct.png)

> 好极了，那我们现在如何区分电路具体为何种接法？
>
> 如果信号从基极输入，发射极输出，我们称之为 **共集电极放大电路**.
>
> 如果信号从发射极输入，从集电极输出，我们称之为 **共基极放大电路**.
>
> 对于 **共射放大电路**，信号是从基极输入从集电极输出.

前面的部分我们以共射放大电路为例探讨了放大电路的工作原理、分析方法、静态工作点与动态参数、失真情况等，可以总结晶体管能够对动态交流信号放大的原理：


$$
\Delta u_{BE} \rightarrow \Delta i_B \rightarrow \Delta i_C \rightarrow \Delta u_{CE}
$$

因此，放大电路还可以有另外两种接法：

- 共集——基极输入，发射极输出，输入回路与输出回路公共端为集电极；
- 共基——发射极输入，集电极输出，输入回路与输出回路公共端为基极；

**共射放大电路动态参数的特点**：

1. 电压放大倍数为负，输入输出反相，具有一定的电压放大能力；
2. 输入电阻的表达式只含有 b-e 侧即输入侧的项，与 c 侧无关；输入电阻与负载无关；
3. 输出电阻的表达式只含有 c 侧即输出侧的项，与 b-e 侧无关；输出电阻与信号源内阻无关；
4. 即使存在发射极电阻，2 与 3 仍然成立；发射极电阻仅改变电压放大倍数与输入电阻；

### · 共集放大电路

我们先给出**基本共集放大电路**：

![pVXZ8xI.png](https://s21.ax1x.com/2025/10/23/pVXZ8xI.png)

当然我们也有一些基本推广模型，比如直接耦合和阻容耦合：

![pVXZtqf.png](https://s21.ax1x.com/2025/10/23/pVXZtqf.png)

我们以阻容耦合为例进行分析：

**静态分析**：先给出直流通路和交流通路

> ![pVXZJMt.png](https://s21.ax1x.com/2025/10/23/pVXZJMt.png)
> $$
> \frac{V_{CC} - U_{BQ}}{R_b} = I_{BQ}
> $$
>
>
> $$
> U_{EQ} = R_e I_{EQ} \quad \Longrightarrow \quad U_o = U_{EQ} 
> $$
>
> (输出电压的静态电位)
>
> $$
> I_{BQ} : I_{CQ} : I_{EQ} = 1 : \beta : 1 + \beta
> $$
>
>
> $$
> U_{BEQ} = U_{BQ} - U_{EQ} = 0.7V
> $$
>
>
> $$
> U_{CQ} = V_{CC}
> $$
>
>
> $$
> I_{CCQ} = U_{CQ} - U_{EQ}
> $$
>
> 除输出电压位置变化之外，其余思路与过程没有区别。

**动态分析**：

> [![pVXZUZ8.png](https://s21.ax1x.com/2025/10/23/pVXZUZ8.png)](https://imgchr.com/i/pVXZUZ8)
>
> $$
> A_u = \frac{\dot{U}_o}{\dot{U}_i} = \frac{(1+\beta) \dot{I}_b (R_e // R_L)}{r_{be} \dot{I}_b + (1+\beta) \dot{I}_b (R_e // R_L)} = \frac{(1+\beta)(R_e // R_L)}{r_{be} + (1+\beta)(R_e // R_L)}
> $$
>
>
> $$
> R_i = \frac{\dot{U}_i}{\dot{I}_i} = R_b // \frac{\dot{U}_i}{\dot{I}_b} = R_b // \frac{r_{be} \dot{I}_b + (R_e // R_L)(1+\beta) \dot{I}_b}{\dot{I}_b} = R_b // [r_{be} + (1+\beta)(R_e // R_L)]
> $$
>
>
> $$
> R_o = \frac{\dot{U}_o}{\dot{I}_o} \bigg|_{u_s=0} = R_e // \frac{r_{be}}{1+\beta}
> $$
>
> 再次强调求解输出电阻的过程：
>
> 将独立电压源短路后，受控源仍然保留，从输出端口外施电源往里看，假设受控电流源存在电流，则受控电流源电流、 $r_{be}$  电流、 $R_e$  电流应满足  $\beta : 1 : 1 + \beta$  的关系，且方向如图所示； $R_b$  被短路掉，而按照图示从输出端外施电源的电流流向，这样的假设是成立的，即受控电流源仍然存在；输出电阻是将原电路的独立源置零后从输出端口向里看的等效电阻（相当于“输入电阻”），此时干路电流为  $I_e$ ，而流过  $r_{be}$  的电流是  $I_b$ ，因此，输入侧即 b 侧的电阻  $r_{be}$  对于输出侧即 e 侧来说，要除以  $(1+\beta)$ 。

**含有集电极电阻的共集放大电路的动态分析**：

> ![pVXZYsP.png](https://s21.ax1x.com/2025/10/23/pVXZYsP.png)
> $$
> A_u = \frac{\dot{U}_o}{\dot{U}_i} = \frac{(1+\beta) \dot{I}_b (R_e // R_L)}{r_{be} \dot{I}_b + (1+\beta) \dot{I}_b (R_e // R_L)} = \frac{(1+\beta)(R_e // R_L)}{r_{be} + (1+\beta)(R_e // R_L)}
> $$
>
>
> $$
> R_i = \frac{\dot{U}_i}{\dot{I}_i} = R_b // \frac{\dot{U}_i}{\dot{I}_b} = R_b // \frac{r_{be} \dot{I}_b + (R_e // R_L)(1+\beta) \dot{I}_b}{\dot{I}_b} = R_b // [r_{be} + (1+\beta)(R_e // R_L)]
> $$
>
>
> $$
> R_o = \frac{\dot{U}_o}{\dot{I}_o} \bigg|_{u_s=0} = R_e // \frac{r_{be}}{1+\beta}
> $$
>
> 电路理论中有讲过，与电流源串联的电阻“无用”，即不影响电流源所在支路的电流；动态参数不变；
>
> 因此，共集放大电路动态分析时，集电极与地之间的集电极电阻可以忽略！

**共集放大电路动态参数的特点**：

1. 电压放大倍数为正（输入输出同相）且近似为1，因此共集放大电路也称为“射极跟随器”；
   
$$
   A_u = \frac{\dot{U}_o}{\dot{U}_i} = \frac{(1+\beta) \dot{I}_b (R_e // R_L)}{r_{be} \dot{I}_b + (1+\beta) \dot{I}_b (R_e // R_L)} = \frac{(1+\beta)(R_e // R_L)}{r_{be} + (1+\beta)(R_e // R_L)} \quad (1+\beta)(R_e // R_L) \gg r_{be}
$$

2. 输入电阻的表达式含有 e 侧即输出侧的项，共集放大电路的输入电阻与负载有关；且输入电阻一般较大；
   
$$
   R_i = \frac{\dot{U}_i}{\dot{I}_i} = R_b // \frac{\dot{U}_i}{\dot{I}_b} = R_b // \frac{r_{be} \dot{I}_b + (R_e // R_L)(1+\beta) \dot{I}_b}{\dot{I}_b} = R_b // [r_{be} + (1+\beta)(R_e // R_L)]
$$

3. 输出电阻的表达式含有 b 侧即输入侧的项，共集放大电路的输出电阻与信号源内阻有关；且由于并联项中输入侧归算除以  $ (1+\beta) $  导致并联的电阻很小，共集放大电路的输出电阻一般较小；
   
$$
R_o = \frac{\dot{U}_o}{\dot{I}_o} \bigg|_{u_s=0} = R_e // \frac{r_{be}}{1+\beta}
$$

**共集放大电路动态参数求解**——输入电阻与输出电阻

> 共集放大电路的输入电阻与输出侧即 e 侧有关，求解时，从输入端往里看，即从左往右看，将右侧的电阻逐一向左边等效，e 侧的项归算到 b 侧要乘以  $(1+\beta)$ ；
>
> $$
> R_i = \frac{\dot{U}_i}{\dot{I}_i} = R_b // \frac{\dot{U}_i}{\dot{I}_b} = R_b // \frac{r_{be} \dot{I}_b + (R_e // R_L)(1+\beta) \dot{I}_b}{\dot{I}_b} = R_b // [r_{be} + (1+\beta)(R_e // R_L)]
> $$
>
> 共集放大电路的输出电阻与输入侧即 b 侧有关，求解时，将独立源即交流电压输入短路掉（保留信号源内阻），从输出端往里看，即从右往左看，将左侧的电阻逐一向右边等效，b 侧的项归算到 e 侧要除以  $(1+\beta)$ ；
>
> $$
> R_o = \frac{\dot{U}_o}{\dot{I}_o} \bigg|_{u_s=0} = R_e // \frac{r_{be}}{1+\beta}
> $$

### · 共基放大电路

我们先给出**基本共基放大电路**：

![pVXZqeK.png](https://s21.ax1x.com/2025/10/23/pVXZqeK.png)

以典型应用电路为例分析：

> 本例为静态工作点稳定，一般为保证足够电压增益，基极加大旁路电容

![pVXZLdO.png](https://s21.ax1x.com/2025/10/23/pVXZLdO.png)

本例的静态工作点分析与前面的分压偏置式共射放大电路完全一致，此处不展开讨论；

**动态分析**：

> ![pVXZOoD.png](https://s21.ax1x.com/2025/10/23/pVXZOoD.png)
> $$
> A_u = \frac{\dot{U}_o}{\dot{U}_i} = \frac{\beta \dot{I}_b (R_e // R_L)}{r_{be} \dot{I}_b} = \frac{\beta (R_e // R_L)}{r_{be}}
> $$
>
>
> $$
> R_i = \frac{\dot{U}_i}{\dot{I}_i} = \frac{r_{be} \dot{I}_b}{(1+\beta) \dot{I}_b + \frac{r_{be} \dot{I}_b}{R_e}} = \frac{r_{be}}{(1+\beta) + \frac{r_{be}}{R_e}}
> $$
>
>
> $$
> R_o = \frac{\dot{U}_o}{\dot{I}_o} \bigg|_{u_s=0} = R_e
> $$

**共基放大电路动态参数的特点**：

1. 电压放大倍数为正（输入输出同相），大小与共射相当，但不具有电流放大能力；
   
$$
A_u = \frac{\dot{U}_o}{\dot{U}_i} = \frac{\beta \dot{I}_b (R_e // R_L)}{r_{be} \dot{I}_b} = \frac{\beta (R_e // R_L)}{r_{be}}
$$

2. 输入电阻的表达式仅含有 b-e 侧即输入侧的项，与 c 侧即输出侧无关；输入电阻与负载无关；值得注意的是，共基放大电路的输入电阻往往很小；
   
$$
   R_i = \frac{\dot{U}_i}{\dot{I}_i} = \frac{r_{be} \dot{I}_b}{(1+\beta) \dot{I}_b + \frac{r_{be} \dot{I}_b}{R_e}} = \frac{r_{be}}{(1+\beta) + \frac{r_{be}}{R_e}}
$$

3. 输出电阻的表达式仅含有 c 侧即输出侧的项，与 b-e 侧即输入侧无关；输出电阻与信号源内阻无关；共集放大电路的输出电阻与共射相当；
   
$$
R_o = \frac{\dot{U}_o}{\dot{I}_o} \bigg|_{u_s=0}  = R_e
$$

4. 共基放大电路的通频带较宽，中高频特性好；（暂时未推导，记住即可）

### · 三种基本接法小结

|              | 共射             | 共集                           | 共基                          |
| ------------ | ---------------- | ------------------------------ | ----------------------------- |
| 电压放大倍数 | 输入输出反相     | 输入输出同相 电压放大倍数约为1 | 输入输出同相                  |
| 输入电阻     | 与输出侧参数无关 | 与输出侧参数有关 输入电阻较大  | 与输出侧参数无关 输入电阻较小 |
| 输出电阻     | 与输入侧参数无关 | 与输入侧参数有关 输出电阻较小  | 与输入侧参数无关              |
| 应用         | 一般放大         | 射极跟随器                     | 宽频带                        |

## Part 3 多级放大电路

### · 达林顿管
