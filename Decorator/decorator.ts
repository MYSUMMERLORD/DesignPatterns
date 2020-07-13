abstract class VisualComponent {
    public constructor() {}
    public abstract draw(): void
    public abstract resize(): void
}
class Decorator extends VisualComponent {
    private component: VisualComponent
    public constructor(component: VisualComponent) {
        super()
    }
    public draw(): void {
        this.component.draw()
    }
    public resize(): void {
        this.component.resize()
    }
}

class BorderDecorator extends Decorator {
    private width: number
    private _component: VisualComponent
    public constructor(component: VisualComponent, borderWidth: number) {
        super(component)
        this._component = component
        this.width = borderWidth
    }
    public drawBorder(width: number): void {
        console.log(`绘制${width}px的边框`)
    }
    public draw(): void {
        this._component.draw()
        this.drawBorder(this.width)
    }
}