import MessageToken from './interface/MessageToken';

export default class Messager {
    #channel!: MessageToken;

    constructor(channel: MessageToken) {
        this.#channel = channel;
    }

    public getChannel(): MessageToken {
        return this.#channel;
    }

    public sendToken() {
        this.#channel.send();
    }
}