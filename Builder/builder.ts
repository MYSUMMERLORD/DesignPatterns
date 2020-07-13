interface IMazeBuilder {
    buildMaze(): void
    buildRoom(num: number): void
    buildDoor(formId: number, toId: number): void
    getMaze(): Maze
}

class StandardMazeBuilder implements IMazeBuilder {
    private _currentMaze: Maze
    constructor() {}
    
    buildMaze() {
        this._currentMaze = new Maze()
    }

    buildRoom(num: number): void {
        if (!this._currentMaze.getRooomNo(num)) {
            const room: Room = new Room(num)
            this._currentMaze.addRoom(room)
            room.setSise(Direction.North, new Wall())
            room.setSide(Direction.West, new Wall())
        }
    }
    buildDoor(formId: number, toId: number): void {
        const room1 = <Room>this._currentMaze.getRooomNo(formId)
        const room2 = this._currentMaze.getRooomNo(toId)
        const door = new door(room1, room2)
        room1.setSide(Direction.South, door)
    }

    getMaze() {
        return this._currentMaze
    }
}

class MazeGame1 {
    createMaze(mazeBuilder: IMazeBuilder) {
        mazeBuilder.buildMaze()
        mazeBuilder.buildRoom(1)
        mazeBuilder.buildRoom(2)
        mazeBuilder.buildDoor(1, 2)
        return mazeBuilder.getMaze()
    }
}

const game = new MazeGame1()
game.createMaze(new StandardMazeBuilder())