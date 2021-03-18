import DB from '../DB';
import IRegister from '../interfaces/IRegister';
import INotification from '../interfaces/INotification';
import Notificatio from '../components/Notification';

export default class LeadModel extends DB implements IRegister, INotification {
    public save() {

    }   

    public sendNotification(notification: Notificatio) {

    }
}