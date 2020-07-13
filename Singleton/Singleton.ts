interface ISingletonFactory {
  register(name: string, instance: ISingletonFactory): void
  lookup(name: string): ISingletonFactory
}

type InstanceObject = {
  key: string,
  value: ISingletonFactory
}

class SingletonMazaFactory implements ISingletonFactory {
  private static instance: SingletonMazaFactory = null
  private list: Array<InstanceObject> = []
  protected constructor() {}
  register(name: string, instance: ISingletonFactory): void {
    this.list.push({
      key: name,
      value: instance
    });
  }
  lookup(name: string): ISingletonFactory {
    const currentInstance = this.list.find((obj) => obj.key === name)
    return currentInstance ? currentInstance.value : null
  }
  static getInstance(): ISingletonFactory {
    if (!this.instance) {
      // 单例注册表？？根据单例注册表，实例化不同的类
      this.instance = new SingletonMazaFactory();
    }
    return this.instance;
  }
}

// 扩展子类

