import Rectangle from './Rectangle';

export default class Square extends Rectangle{
    constructor() {
        super()
    }

    public setWidth(width: number): void {
        this.width = width;
        this.height = width;
    }

    public setHeight(height: number): void {
        this.height = height;
        this.width = height;
    }
}