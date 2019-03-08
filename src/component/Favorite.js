import React, { Component } from 'react';

import './Favorite.css';

class Favorite extends Component {
    constructor(props) {
        super(props);

        const link1 = "http://localhost:8080/list/FAVORITE";

        let json1 = JSON.parse(this.loadData(link1));
        console.log(json1);

               this.state = {
                   data: link1,
                   list1drop: 'blank'

               };

        this.handleChange = this.handleChange.bind(this);
        this.button1 = this.button1.bind(this);
        this.button2 = this.button2.bind(this);
        this.button3 = this.button3.bind(this);
    }

    loadData(url) {
        const Http = new XMLHttpRequest();
        Http.open("GET", url, false);
        Http.send();
        if (Http.status == 200) {
            let cookie = Http.getResponseHeader("Cookie");
            console.log(cookie);
            console.log("adf");

            return Http.responseText;
        }

 
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    button1() {
        if (this.state.list1drop == 'blank') {
            //do nothing
        }
        else {
            this.props.history.push('/' + this.state.list1drop);
        }
    }

    button2() {
        this.props.history.push('/')
    }

    button3() {
        this.props.history.push('/Result')
    }

    render() {

        let faverows = [];

        console.log(localStorage["Favoritea"]);
        console.log(localStorage["Favoriteb"]);
        var favelista = localStorage["Favoritea"];
        var favelistb = localStorage["Favoriteb"];

/*        for (var i = 0; i < favelist.length; i++) {

            if (favelist[i].address == null) {

                faverows.push(<RecipeRow recdata={favelist[i]} counter={i} history={this.props.history} />)
            }
            else {
                faverows.push(<RestaurantRow resdata={favelist[i]} counter={i} history={this.props.history} />)
            }
        }
*/
        return (
            <div className="Favorite">

                        <h1 id="list1title">Favorites</h1>

  
                <div className="list1col">


                </div>

                <div className="list1buttons">
                    <select id="list1drop" name="list1drop" onChange={this.handleChange} >
                        <option value="blank" selected></option>
                        <option value="Explore">To Explore</option>
                        <option value="NoShow">Do Not Show</option>
                    </select>
                    <br></br>
                    <button id="list1" onClick={this.button1}>Manage List</button>
                    <br></br>
                    <button id="list1rp" onClick={this.button3}>Return to Results Page</button>
                    <br></br>
                    <button id="list1sp" onClick={this.button2}>Return to Search Page</button>
                    <br></br>
                    <button id="list1remove"> Remove</button>
                    <br></br>
                    <button id="list1move"> Move</button>
                </div>
               
            </div>
        );
    }
}

class RestaurantRow extends Component {

    button4 = (e) => {
        console.log("temp4");
        console.log(e.currentTarget.id);
        localStorage.setItem('resid', e.currentTarget.id);

        this.props.history.push('/Restaurant')
    }


    render() {
        const array = this.props.resdata[this.props.counter];
        let row;
        let price;

        if (array.priceRating === "EXPENSIVE") {
            price = "$$$";
        }
        else if (array.priceRating === "MODERATE") {
            price = "$$";
        }
        else if (array.priceRating === "INEXPENSIVE") {
            price = "$";
        }
        else {
            price = "";
        }

        if (this.props.counter % 2 === 0) {
            row = <div className="recrow1" id={array.id} onClick={this.button4}>
                <img src="http://pngimg.com/uploads/star/star_PNG41507.png" alt="str" id="starimg"></img>
                <font id="star"> {array.rating} </font>
                <font>{array.name}</font>
                <br></br>
                <small>Distance: {array.distance}</small>
                <br></br>
                <small>Address: {array.address}</small>

                <small id="price">Price: {price}</small>

            </div>

        }
        else {
            row = <div className="recrow2" id={array.id} onClick={this.button4} >
                <img src="http://pngimg.com/uploads/star/star_PNG41507.png" alt="str" id="starimg"></img>
                <font id="star"> {array.rating} </font>
                <font>{array.name}</font>
                <br></br>
                <small>Distance: {array.distance}</small>
                <br></br>
                <small>Address: {array.address}</small>

                <small id="price">Price: {price}</small>
            </div>


        }
        return row;
    }
}


class RecipeRow extends Component {

    button5 = (e) => {
        console.log("temp5");
        console.log(e.currentTarget.id);
        localStorage.setItem('recid', e.currentTarget.id);

        this.props.history.push('/Recipe')
    }

    render() {
        const array = this.props.recdata[this.props.counter];
        let row;

        if (this.props.counter % 2 === 0) {
            row = <div className="recrow1" id={array.id} onClick={this.button5}>
                <img src="http://pngimg.com/uploads/star/star_PNG41507.png" alt="str" id="starimg"></img>
                <font id="star"> {array.id % 5} </font>
                <font>{array.title}</font>
                <br></br>
                <small>Prep Time: {array.prepTime} min</small>
                <br></br>
                <small>Cook Time: {array.cookTime} min</small>
            </div>
        }
        else {
            row = <div className="recrow2" id={array.id} onClick={this.button5}>
                <img src="http://pngimg.com/uploads/star/star_PNG41507.png" alt="str" id="starimg"></img>
                <font id="star"> {array.id % 5} </font>
                <font>{array.title}</font>
                <br></br>
                <small>Prep Time: {array.prepTime} min</small>
                <br></br>
                <small>Cook Time: {array.cookTime} min</small>
            </div>


        }
        return row;
    }
} 

export default Favorite;
