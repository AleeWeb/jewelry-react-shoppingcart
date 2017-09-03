import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import ProductCard from './ProductCard';
import products from './products.json';

class Landing extends Component {
    render() {
        const productCards = products.map(product => <ProductCard productId={product.id} key={product.id} />);

        return (
            <div>
                <h1>Landing Component!</h1>
                {productCards}
                <Link to="/cart">Go to Cart</Link>
            </div>
        );
    }
}

export default Landing;
