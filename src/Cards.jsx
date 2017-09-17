import React, { Component } from 'react';
require('materialize-css/dist/css/materialize.min.css');


class Cards extends Component {

    render() {
        return (
            <div className="cards-wrapper">
                 <div className="row">
                    <div className="col s12 m6">
                    <div className="card">
                        <div className="card-image">
                        <img src="http://materializecss.com/images/sample-1.jpg"/>
                        <span className="card-title">Card Title</span>
                        <a className="btn-floating halfway-fab" id="newbtn"><i className="material-icons">add</i></a>
                        </div>
                        <div className="card-content">
                        <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Cards;
