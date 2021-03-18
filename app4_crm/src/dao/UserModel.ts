import DB from '../DB';
import Log from '../components/Log';
import IRegister from '../interfaces/IRegister';
import Notificatio from '../components/Notification';

export default class UserModel extends DB implements IRegister {
    public save() {

    }   
    
    public registerLog(log: Log) {

    }

    public sendNotification(notification: Notificatio) {

    }
}