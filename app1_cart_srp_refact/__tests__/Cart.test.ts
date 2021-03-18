import Cart from '../src/Cart';
import Item from '../src/Item';

jest.mock('../src/Cart');
jest.mock('../src/Item');

describe('Cart class', () => {
    const PRODUCT = {
        name: 'Iphone',
        price: 1500.00,
    }

    it('initial state', () => {
        const cart = new Cart();

        expect(cart.getItems()).toMatchObject([]);
    });

    it('add item',() => {
        const cart = new Cart();
        const item = new Item();

        item.setName(PRODUCT.name);
        item.setPrice(PRODUCT.price);
        
        expect(item.validateItem()).toBe(true);

        cart.addItem(item);

        expect(cart.getItems()).toMatchObject([item]);
    });

    it('validate cart success',() => {
        const cart = new Cart();
        const item = new Item();

        item.setName(PRODUCT.name);
        item.setPrice(PRODUCT.price);
        
        expect(item.validateItem()).toBe(true);

        cart.addItem(item);

        expect(cart.getItems()).toMatchObject([item]);


        expect(cart.validateCart()).toBe(true);
    });

    it('validate cart failure',() => {
        const cart = new Cart();
        const item = new Item();

        item.setName(PRODUCT.name);
        item.setPrice(PRODUCT.price);
        
        expect(item.validateItem()).toBe(true);

        expect(cart.validateCart()).toBe(false);
    });
});