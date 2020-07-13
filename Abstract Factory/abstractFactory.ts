/**
 * 使用AbstractFactory模式创建迷宫实例
 */

enum Direction {
    North = 0,
    South = 1,
    West = 2,
    East = 3,
}

interface IMazeFactory {
    makeMaze(): Maze
    makeWall(): IMapSite
    makeRoom(num: number): IMapSite
    makeDoor(room1: IMapSite, room2: IMapSite): IMapSite 
}
class MazeFactory implements IMazeFactory {
    public makeMaze(): Maze {
        return new Maze()
    }
    public makeWall(): IMapSite {
        return new Wall()
    }
    public makeRoom(num: number): Room {
        return new Room(num)
    }
    public makeDoor(room1: IMapSite, room2: IMapSite): IMapSite {
        return new Door(room1, room2)
    }
}

/**
 * 通过抽象工厂创建实例
 */
function mazeGame(factory: IMazeFactory): Maze {
    const maze: Maze = factory.makeMaze()
    const room1 = <Room>factory.makeRoom(1)
    const room2 = <Room>factory.makeRoom(2)
    const door = factory.makeDoor(room1, room2)

    maze.addRoom(room1)
    maze.addRoom(room2)

    room1.setSide(Direction.North, factory.makeWall())
    room1.setSide(Direction.West, door)

    room2.setSide(Direction.South, factory.makeWall())
    room2.setSide(Direction.East, door)
    return maze
}

mazeGame(new MazeFactory())

class EnchantedRoom implements IMapSite {
    private type: string
    private id: number
    constructor(id: number, type: string) {
        this.id = id
        this.type = type
    }
    enter(): number {
        return this.id * 100
    }
}

// 重新实现IMazeFactory
class EnchantedMazeFactory implements IMazeFactory {
    public makeRoom(num: number): EnchantedRoom {
        return new EnchantedRoom(num, '')
    }
    public makeMaze(): Maze {
        return new Maze()
    }
    public makeWall(): IMapSite {
        return new Wall()
    }
    public makeDoor(room1: IMapSite, room2: IMapSite): IMapSite {
        return new Door(room1, room2)
    }
}

mazeGame(new EnchantedMazeFactory())
