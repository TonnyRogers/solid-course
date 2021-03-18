import Item from '../src/Item';

jest.mock('../src/Item');

describe('Item class', () => {
    const PRODUCT = {
        name: 'Iphone',
        price: 1500.00,
    }

    it('initial state', () => {

        const item = new Item();
        
        expect(item.getName()).toBe('');
        expect(item.getPrice()).toBe(0);
    });

    it('getters and setters', () => {

        const item = new Item();

        item.setName(PRODUCT.name);
        item.setPrice(PRODUCT.price);
        
        expect(item.getName()).toBe(PRODUCT.name);
        expect(item.getPrice()).toBe(PRODUCT.price);
    });

    it('get product info', () => {

        const item = new Item();

        item.setName(PRODUCT.name);
        item.setPrice(PRODUCT.price);
        
        expect(item.getName()).toBe(PRODUCT.name);
        expect(item.getPrice()).toBe(PRODUCT.price);

        expect(item.getInfo()).toMatchObject(PRODUCT);
    });

    it('validate product success', () => {

        const item = new Item();

        item.setName(PRODUCT.name);
        item.setPrice(PRODUCT.price);
        
        expect(item.getName()).toBe(PRODUCT.name);
        expect(item.getPrice()).toBe(PRODUCT.price);

        expect(item.validateItem()).toBe(true);
    });

    it('validate product falilure', () => {

        const item = new Item();

        item.setName(PRODUCT.name);
        
        expect(item.getName()).toBe(PRODUCT.name);

        expect(item.validateItem()).toBe(false);
    });
});