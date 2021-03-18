import Email from './Email';
import Sms from './Sms';

export default class Messager {
    #channel!: string;

    public setChannel(channel: 'email' | 'sms') {
        this.#channel = channel; 
    }

    public getChannel() {
        return this.#channel;
    }

    public sendToken() {
        switch (this.#channel) {
            case 'email':
                const email = new Email();
                email.send();
                break;
            case 'sms':
                const sms = new Sms();
                sms.send();
                break;
        
            default:
                break;
        }

        return true;
    }
}