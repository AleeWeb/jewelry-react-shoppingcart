import React, { Component } from 'react';
require('materialize-css/dist/css/materialize.min.css');

class About extends Component {
    render() {
        return (
            <div className="about-us" id="about">
            <h4>About Inspired Adornment</h4>
            <h5>Company Owner, Asia Simone Kelly</h5>

            <p>Asia S. Kelly was born and raised in NYC. She is a former teacher, tax professional 
                and executive assistant. Numbers and administration are her gifts. She loves jewelry, makeup,
                 cats, her natural hair, the latest episodes of Insecure, and considers herself a 
                 champion for Black girls and women alike. She graduated with a BS in Mathematics, 
                 and is currently attending graduate school pursuing her Master's degree in Mathematics. 
                 Though she has these skills, she has the persistent desire to work in the capacity where 
                 she can also help others with her gifts.
                </p>
            </div>
         );
    }
}
export default About;
