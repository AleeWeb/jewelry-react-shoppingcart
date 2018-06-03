import React, { Component } from 'react';
import { getItemsInCart } from './cartItems';
import products from './products.json';
import { Link } from 'react-router-dom';

export class Cart extends React.Component {
    render() {
        const productIdsInCart = getItemsInCart();
        const productsInCart = productIdsInCart.map(productId => products.find(product => productId === product.id));

        const tableRows = productsInCart.map(product => (
            <tr key={product.id}>
                <td>{product.price}</td>
                <td>{product.name}</td>
            </tr>
        ));

        return (
            <div className="container">
                <h4>Welcome to your shopping cart</h4>
           
                <table className="striped">
                     <tbody>
                        <tr>
                            <th>Price</th>
                            <th>Name</th>
                        </tr>
                        {tableRows}
                    </tbody>
                </table>
                <Link to="/">Go back to Home</Link>
            </div>
        );
    }
}
