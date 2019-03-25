import React, { Component } from 'react';

import './Restaurant.css';

//will have to handle this page onload -> populate data on load


class Restaurant extends Component {
    constructor(props) {
        super(props);

        const link1 = "https://mysterious-refuge-36265.herokuapp.com/restaurant/" + localStorage.getItem('resid');

        let json1 = JSON.parse(this.loadData(link1));

        const dest1 = json1.address;
        const dest2 = dest1.replace(" ", "+");
        const link2 = "https://www.google.com/maps/dir/?api=1&origin=Tommy+Trojan&destination=" + dest2 + "&travelmode=car";

        const link3 = "https://mysterious-refuge-36265.herokuapp.com/list/";             //  listname/restaurant


        this.state = {
            resdrop: 'blank',
            data: json1,
            dest2: link2,
            destlist: link3

        };

        this.handleChange = this.handleChange.bind(this);
        this.button2 = this.button2.bind(this);
        this.addL = this.addL.bind(this);

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
        Http.setRequestHeader('Content-type', 'application/json;CHARSET=UTF-8');
        this.state.data.distance = "1 min";
        //this.state.data = '{\"id\":\"ChIJk2uXa-PHwoARFOHSKjqYyFo\",\"name\":\"The Habit Burger Grill\",\"address\":\"3607 Trousdale Pkwy, Los Angeles\",\"phoneNumber\":\"(213) 740-2311\",\"websiteUrl\":\"https://www.habitburger.com/locations/echo-park/\",\"rating\":4.2,\"priceRating\":\"INEXPENSIVE\",\"distance\":\"1 min\"}';
        let json_send = JSON.stringify(this.state.data);
        console.log("sending ", json_send, " to ", url);
        Http.send(json_send);


        if (Http.status === 200) {
            console.log("sent")
        }else {
            console.log("not send because", Http.status);
        }

    
    }

    button2() {
        this.props.history.push('/Result')
    }

    addL() {

        if (this.state.resdrop != 'blank')
        {

            //var resa = localStorage[this.state.resdrop + "a"];
            //resa = JSON.parse(resa);
            //resa.push(this.state.data.id);
            //localStorage[this.state.resdrop + "a"] = JSON.stringify(resa);
            console.log(this.state.resdrop);
            this.state.resdrop = "EXPLORE";
            this.state.destlist = "https://mysterious-refuge-36265.herokuapp.com/list/" + this.state.resdrop + "/restaurant";
           this.addtolist(this.state.destlist);

            //console.log(localStorage[this.state.resdrop]);
        }

    //    this.state.destlist = "http://localhost:8080/list/" + this.state.resdrop + "/restaurant";
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
                            <option value="blank" value></option>
                            <option value="Favorite">Favorites</option>
                            <option value="Explore">To Explore</option>
                            <option value="NoShow">Do Not Show</option>
                        </select>
                        <br></br>
                        <button id="reslist" onClick={this.addL}>Add to List</button>
                    </div>
                </div>
            </div>

        );
    }
}

export default Restaurant;
