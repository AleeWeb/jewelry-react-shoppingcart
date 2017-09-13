import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import ProductCard from './ProductCard';
import products from './products.json';

class Landing extends Component {
    render() {
        const productCards = products.map(product => <ProductCard productId={product.id} key={product.id} />);

        return (
            <div class="container">
                <h1>Landing Component!</h1>

                <div class="row">
                {productCards}
                <Link to="/cart">Go to Cart</Link>
                </div>
            </div>
        );
    }
}

export default Landing;
