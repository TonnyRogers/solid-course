import { Router } from 'express';
import Item from './Item';
import Order from './Order';

const route = Router();

route.get('/',(req,res) => {    
    const order = new Order();

    const item1 = new Item();
    const item2 = new Item();

    // criar produtos 
    item1.setName('Iphone 12');
    item1.setPrice(1450.00);

    item2.setName('IBuds');
    item2.setPrice(1000.00);

    // adicionar produtos no carrinho
    // note que não foi preciso criar um instancia de cart
    // pois a classe de order ja faz isso
    order.getOrderCart().addItem(item1);
    order.getOrderCart().addItem(item2);

    // validar carrinho
    // note que para order não importa como cart se valida 
    // apenas chamamos o método que retorna se é valido ou não 
    const validCart = order.getOrderCart().validateCart();
    if(!validCart) {
        return res.status(401).send('Carrinho inválido!');
    }

    //fechar pedido
    const orderFinish = order.confirm();
    if(!orderFinish) {
        return res.status(401).send('Erro ao finalizar compra');
    }

    //checar status do pedido
    return res.status(200).send(order.getOrderStatus());    
});
 
export default route;