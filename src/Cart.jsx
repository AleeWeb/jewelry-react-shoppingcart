import React, { Component } from 'react';
import { getItemsInCart } from './cartItems';
import products from './products.json';

class Cart extends Component {
    render() {
        const productIdsInCart = getItemsInCart();
        const productsInCart = productIdsInCart.map(productId => products.find(product => productId === product.id));

        const tableRows = productsInCart.map(product => (

            
            
    <table>
        <tbody>
            <tr>
                <td>{product.price}</td>
                <td>{product.name}</td>
            </tr>
        </tbody>
    </table>
        ));

        return (



            <div className="container">
                <h4>Welcome to your shopping cart</h4>
           
                <table>
                     <tbody>
                     {tableRows}
                        <tr>
                            <th>Price</th>
                            <th>Name</th>
                        </tr>
                        </tbody>
                </table>
            </div>
        );
    }
}

export default Cart;