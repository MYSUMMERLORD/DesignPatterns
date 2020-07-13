# Builder生成器--对象创造型模式

## 意图

将一个复杂对象的构建与它的表示分离，使得同样的构建过程可以创建不同的表示。

## 适用性

在以下情况使用Builder模式

* 当创建复杂对象的算法应该独立于该对象的组成部分以及它们的装配方式时
* 当构造过程必须允许被构造的对象有不同的表示时

## 作用过程

* 客户创建Director对象，并用它所想要的Builder对象进行配置
* 一旦产品部件被生成，Direcotr就会通知Builder
* 客户从Builder中检索产品


## Builder-模式优点

* 可以改变一个产品的内部实现：Builder对象提供给Director一个构造产品的抽象接口。该接口使得生成器可以隐藏这个产品的表示和内部结构，同时也隐藏了该产品是如何装配的，因为产品使通过抽象接口构造的。在想要改变产品的内部表示时，所要做的就是定义一个新的生成器
* 将构造代码和表示代码分开：Builder模式通过封装一个复杂对象的创造和表示方法提高了对象的模块性。客户不需要知道定义产品内部结构的类的所有信息：这些类是不出现在Builder接口中的。每个ConcreteBuilder包含了创建和装配一个特定产品的所有代码，然后不同的Director可以复用它以在相同部件集合的基础上构建不同的Product
* 可对构造过程进行更精细的控制：Builder模式与一下子就生成产品的创建型模式不同，它是在导向者的控制下一步一步构造产品的，仅当该产品完成式导向者才会从生成器取回它。因此Builder接口相比其他创造型模式能更好地反映产品的构造过程，使得我们可以更精细的控制构造过程，从而能更精细的控制所得产品的内部结构