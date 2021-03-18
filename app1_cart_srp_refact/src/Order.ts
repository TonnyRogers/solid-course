import Cart from './Cart';
import EmailService from './EmailService';

class Order {
    #status;
    #cart;
    #orderTotal;

    constructor() {
        this.#cart = new Cart();
        this.#status = 'aberto';
        this.#orderTotal = 0;
    }

    getOrderCart() {
        return this.#cart;
    }

    getOrderStatus() {
        return this.#status;
    }

    setStatus(status: string) {
         this.#status = status;
         return true;
    }


    confirm() {
        if(this.#cart.validateCart()){
            this.setStatus('confirmado')
            EmailService.sendMail();
            return true
        }

        return false
    }

}

export default Order;