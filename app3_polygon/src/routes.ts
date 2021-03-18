import { Router } from 'express';
import Rectangle from './Rectangle';
import Square from './Square';

const route = Router();

route.get('/', async (req,res) => {
    const rectangle = new Rectangle();
    rectangle.setHeight(8);
    rectangle.setWidth(8);

    const square = new Square();
    square.setHeight(3);
    square.setWidth(5);

    return res.json({ area: square.getArea()});
});

export default route;