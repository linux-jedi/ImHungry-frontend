import React, { Component } from 'react';

import './Restaurant.css';

//will have to handle this page onload -> populate data on load


class Restaurant extends Component {
    constructor(props) {
        super(props);

        const link1 = "http://localhost:8080/restaurant/" + localStorage.getItem('resid');
        console.log(link1);

        let json1 = JSON.parse(this.loadData(link1));

        this.state = {
            data: json1
        };

        this.button2 = this.button2.bind(this);

    }

    loadData(url) {
        const Http = new XMLHttpRequest();
        Http.open("GET", url, false);
        Http.send();
        if (Http.status == 200) {
            console.log(Http.responseText)
            return Http.responseText;
        }
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
                <h1 id="restitle" >{this.state.data.name}</h1>
                <div id="wrapper">
                    <div id="resbody">
                        <p>Address:</p>
                        <p>{this.state.data.address}</p>
                        <br></br>
                        <p>Phone Number:</p>
                        <p>{this.state.data.phoneNumber}</p>
                        <br></br>
                        <p>Website:</p>
                        <a href={this.state.data.websiteUrl} > { this.state.data.websiteUrl }</a>
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
