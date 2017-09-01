import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Landing from './Landing';
import Cart from './Cart';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path='/' component={Landing}/>
                    <Route exact path='/cart' component={Cart}/>
                </Switch>
            </div>
        );
    }
}

export default App;
