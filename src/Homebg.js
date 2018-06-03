import React, { Component } from 'react';
require('materialize-css/dist/css/materialize.min.css');


export class Homebg extends React.Component {
    render() {
        return (
            <div id="banner">
                <div className="container header-txt">
                    <h2 id="main-txt">Inspired Adornment</h2>

                    <h5 id="subhead">Adorn yourself with our custom jewelry.</h5>
                    
                    <div className="row">

                    <a id="solid-btn" role="button" href="#shop">Shop Now</a>

                    <a id="clear-btn" href="#about">Learn More</a>
                    </div>
                </div>
            </div>
         );
    }
}
export default Homebg;
