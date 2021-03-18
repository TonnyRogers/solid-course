import Rectangle from './polygons/Rectangle';
import Square from './polygons/Square';

export default class Polygon {
    protected shape !: Rectangle | Square;

    public setShape(object: Rectangle | Square) {
        this.shape = object;
    }

    public getShape() {
        return this.shape;
    }

    public getArea() {
        return this.getShape().getHeight() * this.getShape().getWidth();
    }
}