import { Router } from 'express';
import Messager from './Messager';
import Sms from './Sms';
import Email from './Email';
import PushNotification from './PushNotification';

const route = Router();

route.get('/', async (req,res) => {
    const emailMessager = new Messager(new Email());
    emailMessager.sendToken();

    const smsMessager = new Messager(new Sms());
    smsMessager.sendToken();

    const pushMessager = new Messager(new PushNotification());
    pushMessager.sendToken();
    
    return res.status(200).send();
});

export default route;