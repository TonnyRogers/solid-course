import { Router } from 'express';
import Messager from './Messager';

const route = Router();

route.get('/', async (req,res) => {
    const messager = new Messager();
    messager.setChannel('email');
    messager.sendToken();

    messager.setChannel('sms');
    messager.sendToken();
    
    return res.status(200).send();
});

export default route;