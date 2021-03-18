import MessageToken from './interface/MessageToken';

export default class PushNotification implements MessageToken {
    public send() {
        console.log('Push: seu token é b4gf7846ds8');
    }
} 