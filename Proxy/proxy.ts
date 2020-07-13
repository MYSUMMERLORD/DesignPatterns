namespace ProxyModel {
  type Point = any

  abstract class Graphic {
    protected constructor() {}
    public abstract draw(point: Point): void
    public abstract getExtent(): Point;
  }
  class Image extends Graphic {
    private _file: string
    public constructor(file: string) {
      super()
      this._file = file
    }
    public handleMouse(event: Event): void {}
    public draw(point: Point) {}
    public getExtent(): Point {}
  }
  class ImageProxy extends Graphic {
    private _image: Image;
    private _extent: Point;
    private _filename: string
    public constructor(fileName: string) {
      super()
      this._image = null
      this._extent = {}
      this._filename = fileName
    }
    public draw(point: Point) {}
    public getImage(): Image {
      if (!this._image) {
        this._image = new Image(this._filename)
      }
      return this._image
    }
    public getExtent(): Point {
      return this._extent
    }
  }
  class DocumentText {
    public constructor() {}
    public insert(graphic: Graphic): void {}
  }
  const text = new DocumentText()
  text.insert(new ImageProxy('filename'))
}