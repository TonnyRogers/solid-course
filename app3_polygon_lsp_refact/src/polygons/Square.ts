export default class Square {
    protected height!: number;
    protected width!: number;

    public setWidth(width: number): void {
        this.width = width;
        this.height = width;
    }

    public setHeight(height: number): void {
        this.height = height;
        this.width = height;
    }

    public getHeight() {
        return this.height;
    }

    public getWidth() {
        return this.width;
    }
}