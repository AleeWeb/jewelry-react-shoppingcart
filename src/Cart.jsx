import React, { Component } from 'react';
import { getItemsInCart } from './cartItems';
import products from './products.json';

class Cart extends Component {
    render() {
        const productIdsInCart = getItemsInCart();
        const productsInCart = productIdsInCart.map(productId => products.find(product => productId === product.id));

        const tableRows = productsInCart.map(product => (
            <tr>
                <td>{product.price}</td>
                <td>{product.name}</td>
            </tr>
        ));

        return (
            <div>
                <h1>Cart Component!</h1>
                <table>
                    <tr>
                        <th>Price</th>
                        <th>Name</th>
                    </tr>
                    {tableRows}
                </table>
            </div>
        );
    }
}

export default Cart;
