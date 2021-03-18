export default class Rectangle {
    protected height!: number;
    protected width!: number;

    public setHeight(height: number ) {
        this.height = height;
    }

    public setWidth(width: number ) {
        this.width = width;
    }

    public getHeight() {
        return this.height;
    }

    public getWidth() {
        return this.width;
    }

    public getArea() {
        return this.getHeight() * this.getWidth();
    }
}