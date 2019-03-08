import React, { Component } from 'react';

import './Restaurant.css';

//will have to handle this page onload -> populate data on load


class Restaurant extends Component {
    constructor(props) {
        super(props);

        const link1 = "http://localhost:8080/restaurant/" + localStorage.getItem('resid');

        let json1 = JSON.parse(this.loadData(link1));

        const dest1 = json1.address;
        const dest2 = dest1.replace(" ", "+");
        const link2 = "https://www.google.com/maps/dir/?api=1&origin=Tommy+Trojan&destination=" + dest2 + "&travelmode=car";

        const link3 = "http://localhost:8080/list/";             //  listname/restaurant


        this.state = {
            resdrop: 'blank',
            data: json1,
            dest2: link2,
            destlist: link3

        };

        this.handleChange = this.handleChange.bind(this);
        this.button2 = this.button2.bind(this);
        this.button3 = this.button3.bind(this);

    }

    loadData(url) {
        const Http = new XMLHttpRequest();
        Http.open("GET", url, false);
        Http.send();
        if (Http.status === 200) {
            console.log(Http.responseText)
            return Http.responseText;
        }
    }

    addtolist(url) {
        const Http = new XMLHttpRequest();
        Http.open("POST", url, false);
        Http.setRequestHeader('Content-type', 'application/json');
        Http.send(JSON.stringify(this.state.data));


        if (Http.status === 200) {
            console.log("sent")
        }

    }

    button2() {
        this.props.history.push('/Result')
    }

    button3() {

        console.log(this.state.data);
        this.state.destlist = "http://localhost:8080/list/" + this.state.resdrop + "/restaurant";
        this.addtolist(this.state.destlist);
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
                        <a href={this.state.dest2}>{this.state.data.address}</a>
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
                        <select id="resdrop" name="resdrop" onChange={this.handleChange}>
                            <option value="blank" selected></option>
                            <option value="FAVORITE">Favorites</option>
                            <option value="EXPLORE">To Explore</option>
                            <option value="BLOCK">Do Not Show</option>
                        </select>
                        <br></br>
                        <button id="reslist" onClick={this.button3}>Add to List</button>
                    </div>
                </div>
            </div>

        );
    }
}

export default Restaurant;
