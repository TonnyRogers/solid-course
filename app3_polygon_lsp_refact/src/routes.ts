import { Router } from 'express';
import Rectangle from './polygons/Rectangle';
import Square from './polygons/Square';
import Polygon from './Polygon';

const route = Router();

route.get('/', async (req,res) => {
    const polygon = new Polygon();

    polygon.setShape(new Square());
    polygon.getShape().setHeight(10);
    polygon.getShape().setWidth(5);

    return res.json({ area: polygon.getArea()});
});

export default route;