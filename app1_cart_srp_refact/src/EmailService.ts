class EmailService {
    #from;
    #to;
    #subject;
    #body;

    constructor({from = 'lojinha@gmail.com',to = '',subjec = '',body = ''}) {
        this.#from = from ;
        this.#to = to;
        this.#subject = subjec ;
        this.#body = body;
    }

    static sendMail() {
        console.log(`Enviando email para...`);
    }
}

export default EmailService;