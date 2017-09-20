import React, { Component } from 'react';
require('materialize-css/dist/css/materialize.min.css');
import products from './products.json';
import { addToCart } from './cartItems';
import FontAwesome from 'react-fontawesome';

class ProductCard extends Component {

    addToCart() {
        addToCart(this.props.productId);
    }

    render() {
        const product = products.find(product => product.id === this.props.productId);

        return (

            <div className="cards-wrapper col s4" id="shop">
                <div className="card">
                    <div className="card-image">
                        <img src={product.imageUrl} />
                        
                        <a className="btn-floating halfway-fab" id="newbtn" onClick={this.addToCart.bind(this)}>
                        <FontAwesome name="cart-plus" size="2x"/>
                        </a>
                    </div>
                    <div className="card-content">
                    <span className="card-title">{product.name}</span>
                        <p>{product.description}</p>
                    </div>
                </div>
            </div> 
        );
    }
}

export default ProductCard;
