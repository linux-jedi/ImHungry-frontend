import React, { Component } from 'react';

import './Restaurant.css';

//will have to handle this page onload -> populate data on load


class Restaurant extends Component {
    constructor(props) {
        super(props);
               this.state = {

        
        };

        this.button2 = this.button2.bind(this);

    }

    button2() {
        this.props.history.push('/Result')
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }


    render() {
        return (
            <div className="Restaurant">
                <h1 id="restitle" >PLaceholder title</h1>
                <div id="wrapper">
                    <div id="resbody">
                        <p>Address:</p>
                        <p>Placeholder Address</p>
                        <br></br>
                        <p>Phone Number:</p>
                        <p>PLACEHOLDER PHONE#</p>
                        <br></br>
                        <p>Website:</p>
                        <p>PLACEHOLDER WEBSITE</p>
                        <br></br>
                    </div>

                    <div className="resbuttons">
                        <button id="resprint" onClick={() => window.print()}>Printable View</button>
                        <br></br>
                        <button id="resrp" onClick={this.button2}>Return to Results Page</button>
                        <br></br>
                        <select id="resdrop" name="resdrop">
                            <option value="blank" selected></option>
                            <option value="fave">Favorites</option>
                            <option value="explo">To Explore</option>
                            <option value="noshow">Do Not Show</option>
                        </select>
                        <br></br>
                        <button id="reslist">Add to List</button>
                    </div>
                </div>
            </div>

        );
    }
}

export default Restaurant;
