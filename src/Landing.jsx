import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import ProductCard from './ProductCard';
import products from './products.json';
import About from './about';

class Landing extends Component {
    render() {
        const productCards = products.map(product => <ProductCard productId={product.id} key={product.id} />);

        return (
            <div className="container">

                <div className="row">
                   <About />
                </div>

                <div className="row">
                    {productCards}
                </div>
                <Link to="/cart">Go to Cart</Link>
            </div>
        );
    }
}

export default Landing;
