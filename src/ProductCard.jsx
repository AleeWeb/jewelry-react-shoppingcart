import React, { Component } from 'react';
require('materialize-css/dist/css/materialize.min.css');
import products from './products.json';
import { addToCart } from './cartItems';

class ProductCard extends Component {

    addToCart() {
        addToCart(this.props.productId);
    }

    render() {
        const product = products.find(product => product.id === this.props.productId);

        return (
            <div className="cards-wrapper">
                 <div className="row">
                    <div className="col s4 m4">
                    <div className="card">
                        <div className="card-image">
                        <img src={product.imageUrl} />
                        <span className="card-title">{product.name}</span>
                        <a className="btn-floating halfway-fab waves-effect waves-light red" onClick={this.addToCart.bind(this)}>
                            <i className="material-icons">add</i>
                        </a>
                        </div>
                        <div className="card-content">
                        <p>{product.description}</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductCard;
