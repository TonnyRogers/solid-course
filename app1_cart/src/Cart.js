class Cart {
    constructor() {
        this.items = [];
        this.status = 'aberto';
        this.valorTotal = 0;
    }

    showItems() {
        console.log('itens:',this.items);
    }

    totalCart() {
        console.log('valor total:',this.valorTotal); 
    }

    statusCart() {
        console.log('status:',this.status);
    }

    _validateItem(name,price) {
        if(name == '' || name == null) {
            return false
        }
        if(price <= 0) {
            return false;
        }

        return true;
    }

    addItems(name,price) {
        if(this._validateItem(name,price)) {
            this.items.push({ name, price});
            this.valorTotal += price;
            return true;
        }

        return false;
    }

    finishCart() {
        if(this.validateCartItems()) {
            this.status = 'fechado';
            this.sendConfirmationMail();
            return true;
        }

        return false;
    }

    sendConfirmationMail() {
        console.log('Enviando email...');
    }

    validateCartItems() {
        return this.items.length > 0;
    }
}

module.exports = Cart;