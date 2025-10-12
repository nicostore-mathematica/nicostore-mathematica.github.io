---
title: 20251002 - 点灯
permalink: /RoboMaster/RoboMaster-1/
createTime: 2025/10/01 20:57:28
---

这部分没有图很难看懂，但是我懒得放图片了，主要从代码角度做个存档吧。

Q1：什么是单片机？

> **通俗地说**：相当于一台“微型电脑”，集成了一台计算机的核心部件（CPU、RAM、ROM、I/O）在一块芯片上。
>
> **官方定义**：一种集成电路芯片，采用超大规模集成电路技术，具有数据处理能力的中央处理器CPU、随机存储器RAM、只读存储器ROM、多种I/O口和中断系统、定时器/计数器等功能。

Q2：关于STM32

> 主要有这几个优点：
>
> 内核强大： 基于 ARM Cortex-M 内核，性能强劲。（但计算性能依旧有限）
>
> 生态丰富： 资源多，资料全，社区活跃。
>
> 开发便捷： 拥有 STM32CubeMX 这样的图形化配置工具，大大简化了初始化过程。
>
> 应用广泛： 从消费电子到工业控制，无处不在。

Q3：如何烧录程序？

> CubeMX:帮你搭建代码基本框架，设置好引脚，无需操作者从头开始，大大节省时间。
>
> kile5:跟vs code,pycharm之类的IDE差不多，提供了代码烧录以及调试的功能。

### · GPIO

> 全称： General-Purpose Input/Output （通用输入/输出）
>
> 作用： 单片机与外部世界（如LED、按键、传感器等）进行信息交互的物理引脚。
>
> 简单地说，GPIO引脚就是房子墙上的插座和开关。
>
> 输出模式就像你控制的电灯开关。你拨动开关（程序控制），就能让电灯（外部设备）亮或灭。
>
> 输入模式就像门上的门铃按钮。你按下按钮（外部事件），房子里的门铃（单片机）就会响，告诉你有人来了。

关于点灯：先查表看电路板，然后通过电路图我们可以发现，LED灯的三个原色分别对PH10,PH11,PH12三个引脚，那么通过控制这三个引脚，就能实现LED灯的点亮和熄灭

然后上 cubemx 改一些东西，这部分请参考我在GitHub上的仓库[DUT-ling-BUG](https://github.com/nicostore-mathematica/DUT-ling-BUG).

然后我们要尝试用HAL库去实现功能：

```c
HAL_GPIO_WritePin(端口, 引脚号, 电平状态);   // 写引脚电平
HAL_GPIO_ReadPin(端口, 引脚号);             // 读引脚电平
HAL_GPIO_TogglePin(端口, 引脚号);           // 翻转引脚电平
```

使用 STM32 HAL 库控制 GPIO 引脚来点亮不同颜色的 LED（红、蓝、绿）：

```c
HAL_GPIO_WritePin(GPIOH, LED_R_Pin, GPIO_PIN_SET);
HAL_Delay(500);
HAL_GPIO_WritePin(GPIOH, LED_R_Pin, GPIO_PIN_RESET);

HAL_GPIO_WritePin(GPIOH, LED_B_Pin, GPIO_PIN_SET);
HAL_Delay(500);
HAL_GPIO_WritePin(GPIOH, LED_B_Pin, GPIO_PIN_RESET);

HAL_GPIO_WritePin(GPIOH, LED_G_Pin, GPIO_PIN_SET);
HAL_Delay(500);
HAL_GPIO_WritePin(GPIOH, LED_G_Pin, GPIO_PIN_RESET);
```

用HAL自行实现LED灯闪烁和按键控制LED灯:

```c
#include "main.h"
#include "stm32f4xx_hal.h"

// 用户变量声明
uint8_t exit_flag = 0;               // 标志位：0=正常，1=事件发生，2=正在处理
uint8_t rising_falling_flag;         // 存储中断时的电平状态

/**
 * @brief  主函数
 */
int main(void)
{
    // HAL 初始化
    HAL_Init();

    // 配置系统时钟（由 CubeMX 生成）
    SystemClock_Config();

    // 初始化 GPIO 和 EXTI 中断
    MX_GPIO_Init();

    // 启用 NVIC 中断（必须在 HAL_GPIO_EXTI_IRQHandler() 之前调用）
    HAL_NVIC_EnableIRQ(EXTI0_IRQn);

    /* 主循环 */
    while (1)
    {
        // 检查是否有按键事件发生
        if (exit_flag == 1)
        {
            // 第一步：立即改变状态，防止重复进入
            exit_flag = 2;

            // 处理按键事件（根据 rising_falling_flag 决定是按下还是释放）
            if (rising_falling_flag == GPIO_PIN_RESET)  // 按下（低电平）
            {
                // 消抖：延时20ms
                HAL_Delay(20);
                if (HAL_GPIO_ReadPin(KEY_GPIO_Port, KEY_Pin) == GPIO_PIN_RESET)
                {
                    // 确认是有效按下：点亮绿色LED
                    HAL_GPIO_WritePin(LED_G_GPIO_Port, LED_G_Pin, GPIO_PIN_SET);
                }
                else
                {
                    // 抖动，不执行操作
                    exit_flag = 0;
                    continue;
                }
            }
            else if (rising_falling_flag == GPIO_PIN_SET)  // 释放（高电平）
            {
                // 消抖：延时20ms
                HAL_Delay(20);
                if (HAL_GPIO_ReadPin(KEY_GPIO_Port, KEY_Pin) == GPIO_PIN_SET)
                {
                    // 确认是有效释放：熄灭绿色LED
                    HAL_GPIO_WritePin(LED_G_GPIO_Port, LED_G_Pin, GPIO_PIN_RESET);
                }
                else
                {
                    // 抖动，不执行操作
                    exit_flag = 0;
                    continue;
                }
            }

            // 处理完成，重置标志位
            exit_flag = 0;
        }

        // 可选：关闭其他LED（如红色、蓝色）
        HAL_GPIO_WritePin(LED_R_GPIO_Port, LED_R_Pin, GPIO_PIN_RESET);
        HAL_GPIO_WritePin(LED_B_GPIO_Port, LED_B_Pin, GPIO_PIN_RESET);
    }
}

/**
 * @brief EXTI 线 0 中断服务函数（由 HAL 自动调用）
 */
void HAL_GPIO_EXTI_Callback(uint16_t GPIO_Pin)
{
    // 第一步：判断是否为我们的按键触发了中断
    if (GPIO_Pin == KEY_Pin)
    {
        // 第二步：检查“退出标志”是否为0（表示系统处于正常运行状态）
        if (exit_flag == 0)
        {
            // 第三步：设置“退出标志”为1，表示按键事件已发生
            exit_flag = 1;

            // 第四步：读取并保存按键触发瞬间的电平状态
            rising_falling_flag = HAL_GPIO_ReadPin(KEY_GPIO_Port, KEY_Pin);
        }
    }
}

/**
 * @brief GPIO 初始化函数
 */
static void MX_GPIO_Init(void)
{
    GPIO_InitTypeDef GPIO_InitStruct = {0};

    // 使能相关 GPIO 时钟
    __HAL_RCC_GPIOA_CLK_ENABLE();
    __HAL_RCC_GPIOH_CLK_ENABLE();

    // -------------------------------
    // 配置按键：PA0 输入，内部上拉
    // -------------------------------
    GPIO_InitStruct.Pin = KEY_Pin;
    GPIO_InitStruct.Mode = GPIO_MODE_IT_RISING_FALLING;  // 上升沿+下降沿触发中断
    GPIO_InitStruct.Pull = GPIO_PULLUP;
    GPIO_InitStruct.Speed = GPIO_SPEED_FREQ_LOW;
    HAL_GPIO_Init(KEY_GPIO_Port, &GPIO_InitStruct);

    // -------------------------------
    // 配置绿灯：PH10 输出
    // -------------------------------
    GPIO_InitStruct.Pin = LED_G_Pin;
    GPIO_InitStruct.Mode = GPIO_MODE_OUTPUT_PP;
    GPIO_InitStruct.Pull = GPIO_NOPULL;
    GPIO_InitStruct.Speed = GPIO_SPEED_FREQ_LOW;
    HAL_GPIO_Init(LED_G_GPIO_Port, &GPIO_InitStruct);

    // -------------------------------
    // 配置红灯和蓝灯：初始关闭
    // -------------------------------
    GPIO_InitStruct.Pin = LED_R_Pin;
    HAL_GPIO_Init(LED_R_GPIO_Port, &GPIO_InitStruct);

    GPIO_InitStruct.Pin = LED_B_Pin;
    HAL_GPIO_Init(LED_B_GPIO_Port, &GPIO_InitStruct);
}

/**
 * @brief 系统时钟配置（示例：HSI + PLL -> 168MHz）
 */
void SystemClock_Config(void)
{
    RCC_OscInitTypeDef RCC_OscInitStruct = {0};
    RCC_ClkInitTypeDef RCC_ClkInitStruct = {0};

    RCC_OscInitStruct.OscillatorType = RCC_OSCILLATORTYPE_HSI;
    RCC_OscInitStruct.HSIState = RCC_HSI_ON;
    RCC_OscInitStruct.HSICalibrationValue = 16;
    RCC_OscInitStruct.PLL.PLLState = RCC_PLL_ON;
    RCC_OscInitStruct.PLL.PLLSource = RCC_PLLSOURCE_HSI;
    RCC_OscInitStruct.PLL.PLLM = 8;
    RCC_OscInitStruct.PLL.PLLN = 168;
    RCC_OscInitStruct.PLL.PLLP = RCC_PLLP_DIV2;
    RCC_OscInitStruct.PLL.PLLQ = 7;
    HAL_RCC_OscConfig(&RCC_OscInitStruct);

    RCC_ClkInitStruct.ClockType = RCC_CLOCKTYPE_HCLK|RCC_CLOCKTYPE_SYSCLK
                                  |RCC_CLOCKTYPE_PCLK1|RCC_CLOCKTYPE_PCLK2;
    RCC_ClkInitStruct.SYSCLKSource = RCC_SYSCLKSOURCE_PLLCLK;
    RCC_ClkInitStruct.AHBCLKDivider = RCC_SYSCLK_DIV1;
    RCC_ClkInitStruct.APB1CLKDivider = RCC_HCLK_DIV4;
    RCC_ClkInitStruct.APB2CLKDivider = RCC_HCLK_DIV2;
    HAL_RCC_ClockConfig(&RCC_ClkInitStruct, FLASH_LATENCY_5);
}
```

不过在实际使用的时候对代码做出了修改，成果如下:

```c
/* USER CODE BEGIN Header */
/**
  ******************************************************************************
  * @file           : main.c
  * @brief          : Main program body
  ******************************************************************************
  * @attention
  *
  * Copyright (c) 2025 STMicroelectronics.
  * All rights reserved.
  *
  * This software is licensed under terms that can be found in the LICENSE file
  * in the root directory of this software component.
  * If no LICENSE file comes with this software, it is provided AS-IS.
  *
  ******************************************************************************
  */
/* USER CODE END Header */
/* Includes ------------------------------------------------------------------*/
#include "main.h"
#include "gpio.h"

/* Private includes ----------------------------------------------------------*/
/* USER CODE BEGIN Includes */
uint8_t exit_flag = 0;               
uint8_t rising_falling_flag;         
/* USER CODE END Includes */

/* Private typedef -----------------------------------------------------------*/
/* USER CODE BEGIN PTD */
void HAL_GPIO_EXTI_Callback(uint16_t GPIO_Pin)
{
    // ???:???????????????
    if (GPIO_Pin == KEY_Pin)
    {
        // ???:??“????”???0(????????????)
        if (exit_flag == 0)
        {
            exit_flag = 1;
            rising_falling_flag = HAL_GPIO_ReadPin(KEY_GPIO_Port, KEY_Pin);
        }
    }
}

/* USER CODE END PTD */

/* Private define ------------------------------------------------------------*/
/* USER CODE BEGIN PD */
/* USER CODE END PD */

/* Private macro -------------------------------------------------------------*/
/* USER CODE BEGIN PM */

/* USER CODE END PM */

/* Private variables ---------------------------------------------------------*/

/* USER CODE BEGIN PV */

/* USER CODE END PV */

/* Private function prototypes -----------------------------------------------*/
void SystemClock_Config(void);
/* USER CODE BEGIN PFP */

/* USER CODE END PFP */

/* Private user code ---------------------------------------------------------*/
/* USER CODE BEGIN 0 */

/* USER CODE END 0 */

/**
  * @brief  The application entry point.
  * @retval int
  */
int main(void)
{
  /* USER CODE BEGIN 1 */

  /* USER CODE END 1 */

  /* MCU Configuration--------------------------------------------------------*/

  /* Reset of all peripherals, Initializes the Flash interface and the Systick. */
  HAL_Init();

  /* USER CODE BEGIN Init */

  /* USER CODE END Init */

  /* Configure the system clock */
  SystemClock_Config();

  /* USER CODE BEGIN SysInit */

  /* USER CODE END SysInit */

  /* Initialize all configured peripherals */
  MX_GPIO_Init();
  /* USER CODE BEGIN 2 */

  /* USER CODE END 2 */

  /* Infinite loop */
  /* USER CODE BEGIN WHILE */
  while (1)
  {
    /* USER CODE END WHILE */
        // 
        if (exit_flag == 1)
        {
            // 
            exit_flag = 2;

            // 
            if (rising_falling_flag == GPIO_PIN_RESET)  //
            {
                // 
                HAL_Delay(20);
                if (HAL_GPIO_ReadPin(KEY_GPIO_Port, KEY_Pin) == GPIO_PIN_RESET)
                {
                    // 
                    HAL_GPIO_WritePin(LED_G_GPIO_Port, LED_G_Pin, GPIO_PIN_SET);
                }
                else
                {
                    // 
                    exit_flag = 0;
                    continue;
                }
            }
            else if (rising_falling_flag == GPIO_PIN_SET)  // ??(???)
            {
                // 
                HAL_Delay(20);
                if (HAL_GPIO_ReadPin(KEY_GPIO_Port, KEY_Pin) == GPIO_PIN_SET)
                {
                    // 
                    HAL_GPIO_WritePin(LED_G_GPIO_Port, LED_G_Pin, GPIO_PIN_RESET);
                }
                else
                {
                    // 
                    exit_flag = 0;
                    continue;
                }
            }

            // 
            exit_flag = 0;
        }

        // 
        HAL_GPIO_WritePin(LED_R_GPIO_Port, LED_R_Pin, GPIO_PIN_RESET);
        HAL_GPIO_WritePin(LED_B_GPIO_Port, LED_B_Pin, GPIO_PIN_RESET);
    }
    /* USER CODE BEGIN 3 */
  }
  /* USER CODE END 3 */


/**
  * @brief System Clock Configuration
  * @retval None
  */
void SystemClock_Config(void)
{
  RCC_OscInitTypeDef RCC_OscInitStruct = {0};
  RCC_ClkInitTypeDef RCC_ClkInitStruct = {0};

  /** Configure the main internal regulator output voltage
  */
  __HAL_RCC_PWR_CLK_ENABLE();
  __HAL_PWR_VOLTAGESCALING_CONFIG(PWR_REGULATOR_VOLTAGE_SCALE1);

  /** Initializes the RCC Oscillators according to the specified parameters
  * in the RCC_OscInitTypeDef structure.
  */
  RCC_OscInitStruct.OscillatorType = RCC_OSCILLATORTYPE_HSE;
  RCC_OscInitStruct.HSEState = RCC_HSE_ON;
  RCC_OscInitStruct.PLL.PLLState = RCC_PLL_ON;
  RCC_OscInitStruct.PLL.PLLSource = RCC_PLLSOURCE_HSE;
  RCC_OscInitStruct.PLL.PLLM = 6;
  RCC_OscInitStruct.PLL.PLLN = 168;
  RCC_OscInitStruct.PLL.PLLP = RCC_PLLP_DIV2;
  RCC_OscInitStruct.PLL.PLLQ = 4;
  if (HAL_RCC_OscConfig(&RCC_OscInitStruct) != HAL_OK)
  {
    Error_Handler();
  }

  /** Initializes the CPU, AHB and APB buses clocks
  */
  RCC_ClkInitStruct.ClockType = RCC_CLOCKTYPE_HCLK|RCC_CLOCKTYPE_SYSCLK
                              |RCC_CLOCKTYPE_PCLK1|RCC_CLOCKTYPE_PCLK2;
  RCC_ClkInitStruct.SYSCLKSource = RCC_SYSCLKSOURCE_PLLCLK;
  RCC_ClkInitStruct.AHBCLKDivider = RCC_SYSCLK_DIV1;
  RCC_ClkInitStruct.APB1CLKDivider = RCC_HCLK_DIV4;
  RCC_ClkInitStruct.APB2CLKDivider = RCC_HCLK_DIV2;

  if (HAL_RCC_ClockConfig(&RCC_ClkInitStruct, FLASH_LATENCY_5) != HAL_OK)
  {
    Error_Handler();
  }
}

/* USER CODE BEGIN 4 */

/* USER CODE END 4 */

/**
  * @brief  This function is executed in case of error occurrence.
  * @retval None
  */
void Error_Handler(void)
{
  /* USER CODE BEGIN Error_Handler_Debug */
  /* User can add his own implementation to report the HAL error return state */
  __disable_irq();
  while (1)
  {
  }
  /* USER CODE END Error_Handler_Debug */
}

#ifdef  USE_FULL_ASSERT
/**
  * @brief  Reports the name of the source file and the source line number
  *         where the assert_param error has occurred.
  * @param  file: pointer to the source file name
  * @param  line: assert_param error line source number
  * @retval None
  */
void assert_failed(uint8_t *file, uint32_t line)
{
  /* USER CODE BEGIN 6 */
  /* User can add his own implementation to report the file name and line number,
     ex: printf("Wrong parameters value: file %s on line %d\r\n", file, line) */
  /* USER CODE END 6 */
}
#endif /* USE_FULL_ASSERT */
```

第一天的工作就此结束，难点主要还是在软件本身的一些调配而非代码部分.

其它的大概就这样.

你可能会发现这是猫条最水的笔记之一，主要是这部分的内容确实没什么而且似乎初学者并不需要理解软件的底层逻辑，跟着用似乎就行了，所以我选择把培训的PDF扔到GitHub便于使用，当然也有图床的关系

路过图床免费图最多一天八张，而PicX传多了是真的卡，要是有好图床可以评论一下( )