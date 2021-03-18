import Order from '../src/Order';
import Cart from '../src/Cart';
import Item from '../src/Item';

jest.mock('../src/Order');
jest.mock('../src/Cart');
jest.mock('../src/Item');


describe('Order class', () => {
    const PRODUCT = {
        name: 'Iphone',
        price: 1500.00,
    }

    it('initial state', () => {
        const order = new Order();

        expect(order.getOrderStatus()).toBe('aberto');
        expect(order.getOrderCart()).toEqual(new Cart());
    });

    it('set status', () => {
        const order = new Order();

        order.setStatus('confirmado');

        expect(order.getOrderStatus()).toBe('confirmado');
    });

    it('confirm order success', () => {
        const order = new Order();
        const item = new Item();


        item.setName(PRODUCT.name);
        item.setPrice(PRODUCT.price);

        order.getOrderCart().addItem(item);
        expect(order.confirm()).toBe(true);
    });

    it('confirm order failure', () => {
        const order = new Order();
        const item = new Item();


        item.setName(PRODUCT.name);

        order.getOrderCart().addItem(item);
        expect(order.confirm()).toBe(false);
    });
});