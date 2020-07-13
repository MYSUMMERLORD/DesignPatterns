// 窗口抽象接口
interface IWindow {
    // 绘制内容区域
    drawContent(): void
    open(): void
    close(): void
    iconify(): void // 图标化
    deiconify(): void // 去图标化
    setOrigin(at: Point): void
    setExtend(extend: Point): void
    raise(): void
    lower(): void
}
interface View {
    drawOn(name: string): void
}

// 窗口抽象类
class SelfWindow implements IWindow {
    private impl: SelfWindowImpl
    private view: View
    protected constructor() {}
    protected getView(): View {
        return
    }
    drawContent(): void {}
    open(): void {}
    close(): void {}
    iconify(): void {} // 图标化
    deiconify(): void {} // 去图标化
    setOrigin(at: Point): void {}
    setExtend(extend: Point): void {}
    raise(): void {}
    lower(): void {}
}

// IWindowImpl定义了一个对底层窗口系统的接口
interface IWindowImpl {
    implTop (): void
    implBottom(): void
    implSetExtent(): void
    implSetOrigin(): void

    deviceRect(top: Coord, right: Coord, bottom: Coord, left: Coord): void
    deviceText(name: string, top: Coord, left: Coord): void
    deviceBitmap(name: string, right: Coord, bottom: Coord): void
}

// SelfWindowImpl定义了一个对底层窗口系统的接口的实现
class SelfWindowImpl implements IWindowImpl {
    protected constructor() {}
    implTop (): void {}
    implBottom(): void {}
    implSetExtent(): void {}
    implSetOrigin(): void {}

    deviceRect(): void {}
    deviceText(): void {}
    deviceBitmap(): void {}
}

// ApplicationWindow类将实现DrawContents操作以绘制它所存储的View实例
class ApplicationWindow extends SelfWindow {
    drawContent(): void {
        this.getView().drawOn('')
    }
}

class IconWindow extends SelfWindow {
    private bitmap: string
    drawContent(): void {
        const impl = this.getView()
        if (impl) {
            impl.drawOn(this.bitmap)
        }
    }
}