class Item {
    #name;
    #price;

    constructor() {
        this.#name = '';
        this.#price = 0;
    }

    getInfo() {
        return {
            name: this.#name,
            price: this.#price,
        }
    }

    getName() {
        return this.#name;
    }

    getPrice() {
        return this.#price;
    }

    setName(name: string) {
        this.#name = name;
    }

    setPrice(price: number) {
        this.#price = price;
    }

    validateItem() {
        if(this.#name == '' || this.#name == null ){
            return false;
        }

        if(this.#price <= 0) {
            return false;
        }

        return true;
    }
}

export default Item;