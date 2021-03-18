import MessageToken from './interface/MessageToken';

export default class Email implements MessageToken {
    public send() {
        console.log('E-mail: seu token é sa4d56as4das');
    }
} 