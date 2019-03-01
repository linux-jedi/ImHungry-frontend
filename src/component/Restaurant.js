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

    handleSubmit(event) {
        localStorage.setItem('query', this.state.query);
        localStorage.setItem('amount', this.state.amount);

        alert(this.state.query + " " + this.state.amount);
        event.preventDefault();

        this.props.history.push('/Result')

 /* this has not been tested and I prob need to import some library just placing this here for ref
  *
  * fetch('http://example.com', {
            method: "POST",
            body: JSON.stringify(userData),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(response => {
            response.json().then(data => {
                console.log("Successful" + data);
            })
        })
    }  
  */
    }

    render() {
        return (
            <div className="Restaurant">
                <div id="restitle">
                    <h1 >PLaceholder title</h1>


                </div>

                <div id="reswrap">
                    <div id="resbody">
                    <p>Address:</p>
                    <p>Placeholder Address</p>
                    <br></br>
                    <p>Phone Number:</p>
                    <p>PLACEHOLDER PHONE#</p>
                    <br></br>
                    <p>Website:</p>
                    <p>PLACDEDFCa WEBSITE</p>
                        <br></br>
                    </div>
                    <div id="resbuttons">
                        <button>Printable View</button>
                        <br></br>
                        <button onClick={this.button2}>Return to Results Page</button>
                        <br></br>
                        <select name="resdrop">
                            <option value="blank" selected></option>
                            <option value="fave">Favorites</option>
                            <option value="explo">To Explore</option>
                            <option value="noshow">Do Not Show</option>
                        </select>
                        <br></br>
                        <button>Add to List</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Restaurant;
