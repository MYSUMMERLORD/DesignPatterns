# Singleton单例--对象创建型模式

## 意图

保证一个类仅有一个实例，并提供一个访问它的全局访问点

## Singleton模式优点

* 对唯一实例的受控访问
* 缩小命名空间
* 允许对操作和表示的精化：Singleton类可以有子类，而且用这个扩展类的实例来配置一个应用是很容易的；可以用需要的类的实例在运行时可配置应用
* 允许可变数目的实例 ？？ 不是单例么。。怎么是可变数目的实例
* 比类操作更灵活