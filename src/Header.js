import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Landing } from './Landing';
import { Cart } from './Cart';

export class Header extends React.Component {
    render() {
        return (
            <div>
                <img src={source} />
                <h3>Inspired Adornment</h3>
            </div>
        );
    }
}


