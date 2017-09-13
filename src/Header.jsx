import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import Cart from './Cart';

class Header extends Component {
    render() {
        const source = require('../public/logo.png'); 
        return (
            <div>
                <img src={source} />
                <h1>Inspired Adornment</h1>
            </div>
        );
    }
}

export default Header;
