import MessageToken from './interface/MessageToken';

export default class Sms implements MessageToken {
    public send() {
        console.log('SMS: seu token é fsd784856a');
    }
} 