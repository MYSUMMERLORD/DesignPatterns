type Watt = {
    x: string
}

// 定义一个抽象类Equipment，供子类继承实现
abstract class Equipment {
    private name: string
    protected _parent: Equipment = null
    protected constructor (name: string) {
        this.name = name
    }
    public getName(): string {
        return this.name
    }
    public abstract power(): void
    public abstract newPrice(): number
    public abstract discountPrice(): number
    public abstract createEquipment(equipment: Equipment): Array<Equipment>
    public get parent() {
        return this._parent
    }
}

// 软盘
class FloppyDisk extends Equipment {
    private _price = 100
    public constructor(name: string) {
        super(name)
    }
    public power(): string {
        return 'watt'
    }
    public newPrice(): number {
        return this._price
    }
    public discountPrice(): number {
        const result = 10
        return result 
    }
    public createEquipment(equipment: Equipment): Array<Equipment> {
        return []
    }
}

// 机壳
class Chassis extends Equipment {
    private _price = 200
    public constructor(name: string) {
        super(name)
    }
    public createEquipment(equipment: Equipment): Array<Equipment> {
        const iterators = []
        iterators.push(equipment)
        this._parent = this
        return iterators
    }
    public newPrice(): number {
        return this._price
    }
    public discountPrice(): number {
        const result = 10
        return result 
    }
    public power(): string {
        return 'xxx'
    }
}

const disk = new FloppyDisk('disk')
console.log(disk.getName())

const chassis = new Chassis('chassis')
console.log(chassis.getName())
chassis.createEquipment(disk)
