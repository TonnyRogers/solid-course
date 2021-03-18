import DB from '../DB';
import IRegister from '../interfaces/IRegister';
import INotification from '../interfaces/INotification';
import ILog from '../interfaces/ILog';
import Log from '../components/Log';
import Notificatio from '../components/Notification';

export default class UserModel extends DB implements IRegister, ILog, INotification {
    public save() {

    }   
    
    public registerLog(log: Log) {

    }

    public sendNotification(notification: Notificatio) {

    }
}