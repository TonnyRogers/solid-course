const express = require('express');
const Cart = require('./Cart');
const route = express.Router();

const carrinho = new Cart();

route.get('/',() => {
    carrinho.showItems();
    carrinho.addItems('Carro',10.000);
    carrinho.addItems('Moto',3.000);
    carrinho.showItems(); 
    carrinho.statusCart();
    if(carrinho.finishCart()) {
        console.log('Pedido Finalizado');
    }else {
        console.log('Erro ao Realizazr Pedido');
    }
    carrinho.statusCart();
    carrinho.totalCart();
});
 
module.exports = route;