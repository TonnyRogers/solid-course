  import Log from '../components/Log';
  import Notification from '../components/Notification';
  
  export default interface IRegister {
      save(): void;
      registerLog(log: Log): void;
      sendNotification(notification: Notification): void;
  }