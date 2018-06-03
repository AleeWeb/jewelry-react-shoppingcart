import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import products from './products.json';
import { About } from './About';
import { Homebg } from './Homebg';

export class Landing extends React.Component {
    render() {
        const productCards = products.map(product => <ProductCard productId={product.id} key={product.id} />);


return (   

<div id="wrap">
    
         <div className="row">
                <Homebg />
        </div>

        <div className="container">
            <div className="row">
                   <About />
            </div>

            <div className="row">
                {productCards}
            </div>

            <Link id="cart-btn" role="button" to="/cart">Go to Cart</Link>

        </div>
    </div>
        );
    }
}


