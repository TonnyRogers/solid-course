import Email from '../Email';
import Sms from '../Sms';

export default interface MessageToken {
    send(): void;
}