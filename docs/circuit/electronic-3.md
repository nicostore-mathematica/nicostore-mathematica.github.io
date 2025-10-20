---
title: Chapter 3 BJT放大电路
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

