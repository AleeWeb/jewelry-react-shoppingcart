import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import ProductCard from './ProductCard';
import products from './products.json';

class Landing extends Component {
    render() {
        const productCards = products.map(product => <ProductCard productId={product.id} key={product.id} />);

        return (
            <div classNames="container">
                <div className="col s12">
                    <div className="row">

                {productCards}
                
                <Link to="/cart">Go to Cart</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Landing;
