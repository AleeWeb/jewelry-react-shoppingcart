import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import Cart from './Cart';

class Header extends Component {
    render() {
        return (
            <div>
                <img src={source} />
                <h3>Inspired Adornment</h3>
            </div>
        );
    }
}

export default Header;
