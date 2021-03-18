import Item from './Item';

class Cart {
    #items: Item[];

    constructor() {
        this.#items = [];
    }

    getItems() {
       return this.#items.map(item => item.getInfo());
    }

    addItem(item: Item) {
        if(item.validateItem()){
            this.#items.push(item);
            return true;
        }

        return false;
    }

    validateCart() {
        return this.#items.length > 0; 
    }
}

export default Cart;