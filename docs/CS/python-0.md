---
title: Chapter 0 python入门
createTime: 2025-08-08 16:33:00
description: Hello world
permalink: /CS/python-0/
---

python作为本人在C之后学习的第二门编程语言，主要是用于比赛的代码调试

作为笔记的第一篇——这里将讲述轮廓

## Part 1 基础操作

### · Basic

**print**：`print("string")` 这种是最基础的代码操作，字符串的连接可以使用 `print("Hello"+"World") ` 

对于字符串，使用单引号或者双引号包裹都可以，不过单双引号同时存在要注意转义，比如 `print("Let\'s go! ")` 这里面的`\` 就自然而然起到了转义的作用。

对于换行的处理可以用 `\n`，如 `print("Hello!\nHi!")`，当然如果你想打印一首诗的话

```python
print('''Is this the real life?
Is this just fantasy?
Caught in a landslide, 
no escape from reality''')
```

**变量**：

```python
math_now = 120
print("当前 math_now 的值" + math_now )
print("=====")
math_now = math_ex
print("当前 math_ex 的值" + math_ex )
print("当前 math_now 的值" + math_now )
math_now = 150
print("=====")
math_now = 100
print("当前 math_now 的值" + math_now )
```

如上是一个变量替换的过程。print在有变量的情况下很有用，因为在程序逻辑很复杂的时候，可以用print打印出当前变量的值.

> 变量命名不能有空格，不能是数字开头
>
> 变量应该尽量理解和记忆，一般用英文

```python
greet = "您吃了吗"
print(greet + "张三")
```

python在3.0版本后开始支持中文变量名，不过主流仍然用英文（不然控制台或者日志不支持的话就不嘻嘻了）

python命名方法一般使用下划线命名，字母全部小写，不同单词用下划线隔开.

注意，变量名不要使用关键字.

**计算**：

简单运算与C语言相同，复杂运算先导入函数库：

```python
import math
math.sin(1)
print(math.sin(1))
```

**注释**：先给个笑话

> When I wrote this code,only God & I understood what it did.
>
> Now...only God knows.

注释的作用就是让人看懂注释：

```python
# 这是注释
"""
这是一行注释
这也是一行注释
"""
```

**数据类型**：

```python
"Hello"	# 字符串 str
6	-32	# 整数 int
6.0	10.07	# 浮点数 float
True False	# 布尔类型 bool
None	# 空值类型 NoneType
# 列表，字典，etc.
```

字符串长度函数为`len`.

```python
"Hello"[3]
# 完整的转义符才算一个字符，比如 \n 
# 索引从零开始，与C语言相同
```

`type` 函数可以返回该对象的数据类型，数据类型决定了你对该对象上能用什么函数.

**交互模式**：python两种模式，命令行模式和交互模式。

交互模式可以直接在控制台或者cmd终端进行，写一行编译一行.

**input**：

```python
input("您吃了吗")
food = input("您吃了吗")
print(food)
# input 返回的一律是字符串类型
# 整数不能和字符串在一起打印
# int, float, str, 这三个函数有转化作用
food_num = int(input("您吃了几顿"))
food_per = food_num / 1
print("您一天吃" + str(food_per) + "顿")
```

### · 条件判断

比较运算符为`==`, 不等于号为 `!=`

下面我们给出一个例子

```python
# BMI计算程序
# BMI = 体重 /（身高 ** 2）

# 获取用户输入并计算BMI
user_weight = float(input("请输入您的体重（单位：kg）："))
user_height = float(input("请输入您的身高（单位：m）："))
user_BMI = user_weight / (user_height) ** 2
print("您的BMI值为：" + str(user_BMI))

# 根据BMI值判断身体状况
if user_BMI <= 18.5:
    print("此BMI值属于偏瘦范围。")
elif 18.5 < user_BMI <= 25:
    print("此BMI值属于正常范围。")
elif 25 < user_BMI <= 30:
    print("此BMI值属于偏胖范围。")
else:
    print("此BMI值属于肥胖范围。")
```

在判断层数过多的情况下可以使用与或非的逻辑运算代替嵌套

```python
and or not
# not只能对一个操作对象计算
```

### · List

这部分与C语言的数组相对应，列表和其它类型不同的点在于列表是可变的。

python的列表可以放很多不同的数据，列表的长度相当于里面元素的数量,我们假设list是一个列表

那`list.append`和`list.remove`表示从列表中加减

```python
shopping_list = []
shopping_list.append("键盘")
shopping_list.append("键帽")
shopping_list.remove("键帽")
shopping_list.append("音响")
shopping_list.append("电竞椅")
shopping_list[1] = "硬盘"
print(shopping_list)
print(len(shopping_list))
print(shopping_list[0])

price = [799, 1024, 200, 800]
max_price = max(price)
min_price = min(price)
sorted_price = sorted(price)
print(max_price)
print(min_price)
print(sorted_price)
```

对于列表加减元素，明显感受这比C语言简单

### · Dictionary

字典里面有键值对，key and value，key是用来查找值的

而key一般是不能修改的，所以如果key里面需要多个元素可以使用tuple（元组）

字典可变，但键和元组不可变。

检测key是否在字典中可以用`"key" in dictionary`, key是要查找的键，print后会返回布尔值

```python
# 结合input、字典、if判断，做一个查询流行语含义的电子词典程序
slang_dict = {"YYDS":"“永远的神”的拼音缩写，用于表达对某人的高度敬佩和崇拜。"}
# 接下来是往字典中添加元素
slang_dict["双减"] = "指进一步减轻义务教育阶段学生作业负担和校外培训负担。"
slang_dict["破防"] = "现指因遇到一些事或看到一些信息后情感上受到很大冲击，心理防线被突破。"
slang_dict["元宇宙"] = "虚实相融的互联网应用和社会生活形态。"
slang_dict["躺平"] = "该词指人在面对压力时，内心再无波澜，主动放弃，不做任何反抗。“躺平”更像是年轻人的一种解压和调整方式，是改变不了环境便改变心态的自我解脱。短暂“躺平”是为了积聚能量，更好地重新出发。"
slang_dict["我看不懂，但我大受震撼"] = "现多用于表示自己对某件事情的不解、震惊。"

query = input("请输入您想要查询的流行语：")
if query in slang_dict:
    print("您查询的" + query + "含义如下")
    print(slang_dict[query])
else:
    print("您查询的流行语暂未收录。")
    print("当前本词典收录词条数为：" + str(len(slang_dict)) + "条。")

```

其中关于字典还有三个操作：

```python
dict.keys()		# 返回所有键
dict.values()	# 返回所有值
dict.items()	# 返回所有键值对
```

### · 循环

 Python的循环有两种，一种是for...in循环，依次把list或tuple中的每个元素迭代出来，

```python
names = ['Michael', 'Bob', 'Tracy']
for name in names:
    print(name)
```

所以`for x in ...`循环就是把每个元素代入变量`x`，然后执行缩进块的语句。

再比如我们想计算1-10的整数之和，可以用一个`sum`变量做累加：

```python
sum = 0
for x in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]:
    sum = sum + x
print(sum)
```

如果要计算1-100的整数之和，从1写到100有点困难，Python提供一个`range()`函数，可以生成一个整数序列，再通过`list()`函数可以转换为list。比如`range(5)`生成的序列是从0开始小于5的整数：

```python
>>> list(range(5))
[0, 1, 2, 3, 4]
```

`range(101)`就可以生成0-100的整数序列，计算如下：

```python
sum = 0
for x in range(101):
    sum = sum + x
print(sum)
```

第二种循环是while循环，只要条件满足，就不断循环，条件不满足时退出循环。比如我们要计算100以内所有奇数之和，可以用while循环实现：

```python
sum = 0
n = 99
while n > 0:
    sum = sum + n
    n = n - 2
print(sum)
```

在循环内部变量`n`不断自减，直到变为`-1`时，不再满足while条件，循环退出。

### · 格式化字符串

## Part 2 函数

定义函数时，需要确定函数名和参数个数；如果有必要，可以先对参数的数据类型做检查；

函数体内部可以用`return`随时返回函数结果；函数执行完毕也没有`return`语句时，自动`return None`。

函数可以同时返回多个值，但其实就是一个tuple。

我们这里直接举个例子

```python
def calculate_magnetic_field(current_input):
    magnetic_field = current_input * 3.0144
    return round(magnetic_field, 1)

def calculate_resistance(current_reading):
    resistance = (4 / (current_reading*1000)) * (10 ** 6)
    return round(resistance, 1)

def main():
    current_input = float(input("请输入恒流输入的值: "))
    current_reading = float(input("请输入电流表示数: "))
    magnetic_field = calculate_magnetic_field(current_input)
    resistance = calculate_resistance(current_reading)
    print(f"电阻值: {resistance} Ω")
    print(f"磁场强度: {magnetic_field} Gs")

if __name__ == "__main__":
    main()
```

核心解释： `if __name__ == '__main__':` 这行代码的作用是**判断当前模块是否是直接运行的**。

类比理解： 想象你有一个电灯（Python文件）：

- 当你直接按开关（直接运行这个文件）时，`__name__` 就是 `'__main__'`，灯会亮（执行代码块里的内容）。
- 当这个电灯被接到其他电路里（被其他文件导入时），`__name__` 就变成模块名，这时灯不会亮（不执行代码块里的内容）。

实际作用：

1. **直接运行时**：会执行这个代码块里的内容（就像程序的入口）
2. **被导入时**：不会执行这里的代码，只导入其他部分

### · 引入模块

## Part 3 面向对象编程

> 面向对象编程——Object Oriented Programming，简称OOP，是一种程序设计思想。OOP把对象作为程序的基本单元，一个对象包含了数据和操作数据的函数。
>
> 面向过程的程序设计把计算机程序视为一系列的命令集合，即一组函数的顺序执行。为了简化程序设计，面向过程把函数继续切分为子函数，即把大块函数通过切割成小块函数来降低系统的复杂度。
>
> 而面向对象的程序设计把计算机程序视为一组对象的集合，而每个对象都可以接收其他对象发过来的消息，并处理这些消息，计算机程序的执行就是一系列消息在各个对象之间传递。
>
> 在Python中，所有数据类型都可以视为对象，当然也可以自定义对象。自定义的对象数据类型就是面向对象中的类（Class）的概念。

### · 类和实例

读过《苏菲的世界》吗？这本书里面，那个“哲学家”提出了两个问题：

> 为什么每一匹马都是一样的？
>
> 点心师该如何做出五十个一模一样的姜饼人？

这实际上是柏拉图的思想。他曾提出过“理型”的概念，放到python里面类比一下，就是OOP中的“类”，而在理型的姜饼人模子下面的一个个看似相同实则有差异的姜饼人便可比做成“实例”。

所以说：类是抽象的模板，而实例是根据类创建出来的一个个具体的“对象”

我们以 "Student" 举例在Python中，定义类是通过`class`关键字：

```python
class Student(object):
    pass
```

`(object)` 表示该类是从哪个类继承下来的，继承的概念我们后面再讲，通常，如果没有合适的继承类，就使用`object`类，这是所有类最终都会继承的类。

由于类可以起到模板的作用，因此，可以在创建实例的时候，把一些我们认为必须绑定的属性强制填写进去。通过定义一个特殊的`__init__`方法，在创建实例的时候，就把`name`，`score`等属性绑上去：

```python
class Student(object):
    def __init__(self, name, score):
        self.name = name
        self.score = score
```

> 特殊方法`__init__`前后分别有两个下划线！！！

注意到`__init__`方法的第一个参数永远是`self`，表示创建的实例本身，因此，在`__init__`方法内部，就可以把各种属性绑定到`self`，因为`self`就指向创建的实例本身。

有了`__init__`方法，在创建实例的时候，就不能传入空的参数了，必须传入与`__init__`方法匹配的参数，但`self`不需要传，Python解释器自己会把实例变量传进去：

> 和普通的函数相比，在类中定义的函数只有一点不同，就是第一个参数永远是实例变量`self`，并且，调用时，不用传递该参数。除此之外，类的方法和普通函数没有什么区别，所以，你仍然可以用默认参数、可变参数、关键字参数和命名关键字参数。

#### · 数据封装

面向对象编程的一个重要特点就是数据封装。在上面的`Student`类中，每个实例就拥有各自的`name`和`score`这些数据。我们可以通过函数来访问这些数据，比如打印一个学生的成绩；

但是，既然`Student`实例本身就拥有这些数据，要访问这些数据，就没有必要从外面的函数去访问，可以直接在`Student`类的内部定义访问数据的函数，这样，就把“数据”给封装起来了。这些封装数据的函数是和`Student`类本身是关联起来的，我们称之为类的方法：

```python
class Student(object):
    def __init__(self, name, score):
        self.name = name
        self.score = score

    def print_score(self):
        print('%s: %s' % (self.name, self.score))
```

要定义一个方法，除了第一个参数是`self`外，其他和普通函数一样。

这样一来，我们从外部看`Student`类，就只需要知道，创建实例需要给出`name`和`score`，而如何打印，都是在`Student`类的内部定义的，这些数据和逻辑被“封装”起来了，调用很容易，但却不用知道内部实现的细节。

封装的另一个好处是可以给`Student`类增加新的方法，比如`get_grade`：

```python
class Student(object):
    ...

    def get_grade(self):
        if self.score >= 90:
            return 'A'
        elif self.score >= 60:
            return 'B'
        else:
            return 'C'
```

同样的，`get_grade`方法可以直接在实例变量上调用，不需要知道内部实现细节：

```python
class Student(object):
    def __init__(self, name, score):
        self.name = name
        self.score = score

    def get_grade(self):
        if self.score >= 90:
            return 'A'
        elif self.score >= 60:
            return 'B'
        else:
            return 'C'

lisa = Student('Lisa', 99)
bart = Student('Bart', 59)
print(lisa.name, lisa.get_grade())
print(bart.name, bart.get_grade())
```

最后给出一个练习（实际上有点烧脑）：

```python
# 定义一个学生类
# 要求：
# 1. 属性包括学生姓名、学号，以及语数英三科的成绩
# 2. 能够设置学生某科目的成绩
# 3. 能够打印出该学生的所有科目成绩

class Student:
    def __init__(self, name, student_id):
        self.name = name
        self.student_id = student_id
        self.grades = {"语文": 0, "数学": 0, "英语": 0}

    def set_grade(self, course, grade):
        if course in self.grades:
            self.grades[course] = grade

    def print_grades(self):
        print(f"学生{self.name} (学号：{self.student_id}) 的成绩为：")
        for course in self.grades:
            print(f"{course}: {self.grades[course]}分")

chen = Student("小陈", "100618")
chen.set_grade("语文", 92)
chen.set_grade("数学", 94)
chen.print_grades()
# zeng = Student("小曾", "100622")
# print(chen.name)
# zeng.set_grade("数学", 95)
# print(zeng.grades)
```

### · 继承

我们仍旧用姜饼人作为例子。

姜饼人作为面点的一种，我们可以说姜饼人具有面点的一些共性——那我在定义面点类后可以直接让姜饼人继承这个类的某些性质并加上一些新的性质——这就对应着python的继承。

比如，我们已经编写了一个名为`Animal`的class，有一个`run()`方法可以直接打印：

```python
class Animal(object):
    def run(self):
        print('Animal is running...')
```

当我们需要编写`Dog`和`Cat`类时，就可以直接从`Animal`类继承：

```python
class Dog(Animal):
    pass

class Cat(Animal):
    pass
```

对于`Dog`来说，`Animal`就是它的父类，对于`Animal`来说，`Dog`就是它的子类。`Cat`和`Dog`类似。

继承有什么好处？最大的好处是子类获得了父类的全部功能。由于`Animal`实现了`run()`方法，因此，`Dog`和`Cat`作为它的子类，什么事也没干，就自动拥有了`run()`方法：

```python
dog = Dog()
dog.run()

cat = Cat()
cat.run()
```

运行结果如下：

```python
Animal is running...
Animal is running...
```

当然，也可以对子类增加一些方法，比如Dog类：

```python
class Dog(Animal):
    def run(self):
        print('Dog is running...')

    def eat(self):
        print('Eating meat...')
```

继承的第二个好处需要我们对代码做一点改进。你看到了，无论是`Dog`还是`Cat`，它们`run()`的时候，显示的都是`Animal is running...`，符合逻辑的做法是分别显示`Dog is running...`和`Cat is running...`，因此，对`Dog`和`Cat`类改进如下：

```python
class Dog(Animal):
    def run(self):
        print('Dog is running...')

class Cat(Animal):
    def run(self):
        print('Cat is running...')
```

当子类和父类都存在相同的`run()`方法时，我们说，子类的`run()`覆盖了父类的`run()`，在代码运行的时候，总是会调用子类的`run()`。这样，我们就获得了继承的另一个好处：多态。

最后还是给出一个练习：

```python
# 类继承练习：人力系统
# - 员工分为两类：全职员工 FullTimeEmployee、兼职员工 PartTimeEmployee。
# - 全职和兼职都有"姓名 name"、"工号 id"属性，
#   都具备"打印信息 print_info"（打印姓名、工号）方法。
# - 全职有"月薪 monthly_salary"属性，
#   兼职有"日薪 daily_salary"属性、"每月工作天数 work_days"的属性。
# - 全职和兼职都有"计算月薪 calculate_monthly_pay"的方法，但具体计算过程不一样。

class Employee:
    def __init__(self, name, id):
        self.name = name
        self.id = id

    def print_info(self):
        print(f"员工名字：{self.name}，工号：{self.id}")

class FullTimeEmployee(Employee):
    def __init__(self, name, id, monthly_salary):
        super().__init__(name, id)
        self.monthly_salary = monthly_salary

    def calculate_monthly_pay(self):
        return self.monthly_salary

class PartTimeEmployee(Employee):
    def __init__(self, name, id, daily_salary, work_days):
        super().__init__(name, id)
        self.daily_salary = daily_salary
        self.work_days = work_days

    def calculate_monthly_pay(self):
        return self.daily_salary * self.work_days

zhangsan = FullTimeEmployee("张三", "1001", 6000)
lisi = PartTimeEmployee("李四", "1002", 230, 15)
zhangsan.print_info()
lisi.print_info()
print(zhangsan.calculate_monthly_pay())
print(lisi.calculate_monthly_pay())
```

## Part 4 文件

### · read

```python
# 需自行创建data.txt文件，并放在和此代码文件同一目录下，才能读出内容
# 也可以自行更改文件路径

# 1. read方法读文件
with open("./data.txt", "r", encoding="utf-8") as f:
    content = f.read()
    print(content)

# 2. readline方法读文件
with open("./data.txt", "r", encoding="utf-8") as f:
    line = f.readline()
    while line != "":
        print(line)
        line = f.readline()

# 3. readlines方法读文件
with open("./data.txt", "r", encoding="utf-8") as f:
    lines = f.readlines()
    for line in lines:
        print(line)
```

### · write

```python
# 任务1：在一个新的名字为"poem.txt"的文件里，写入以下内容：
# 我欲乘风归去，
# 又恐琼楼玉宇，
# 高处不胜寒。
with open("./poem.txt", "w", encoding="utf-8") as f:
    f.write("我欲乘风归去，\n又恐琼楼玉宇，\n高处不胜寒。\n")

# 任务2：在上面的"poem.txt"文件结尾处，添加以下两句：
# 起舞弄清影，
# 何似在人间。
with open("./poem.txt", "a", encoding="utf-8") as f:
    f.write("起舞弄清影，\n")
    f.write("何似在人间。")
```

## Part 5 测试

先给出一个实例，详细内容后续补充

```python
'''
注意：此文件是针对以下类的测试文件。
你可以在此文件同一文件夹下新建shopping_list.py，并复制以下内容到该文件：

class ShoppingList:
    """初始化购物清单，shopping_list是字典类型，包含商品名和对应价格
    例子：{"牙刷": 5, "沐浴露": 15, "电池": 7}"""
    def __init__(self, shopping_list):
        self.shopping_list = shopping_list

    """返回购物清单上有多少项商品"""
    def get_item_count(self):
        return len(self.shopping_list)

    """返回购物清单商品价格总额数字"""
    def get_total_price(self):
        total_price = 0
        for price in self.shopping_list.values():
            total_price += price
        return total_price
'''

import unittest
from shopping_list import ShoppingList

class TestShoppingList(unittest.TestCase):
    def setUp(self):
        self.shopping_list = ShoppingList({"纸巾": 8, "帽子": 30, "拖鞋": 15})

    def test_get_item_count(self):
        self.assertEqual(self.shopping_list.get_item_count(), 3)

    def test_get_total_price(self):
        self.assertEqual(self.shopping_list.get_total_price(), 55)
```

