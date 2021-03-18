import Notification from '../components/Notification';

export default interface INotification {
    sendNotification(notification: Notification): void;
}