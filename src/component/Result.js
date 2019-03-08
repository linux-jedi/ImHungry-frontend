import React, { Component } from 'react';

import './Result.css';
import recip from './JSON/recip'
import rest  from './JSON/rest'

class Result extends Component {
    constructor(props) {
        super(props);

        this.state = {
                   rstdrop: 'blank',
                   recdata: recip,
                   resdata: rest,
                   size: localStorage.getItem('amount')
        };
        this.handleChange = this.handleChange.bind(this);
        this.button2 = this.button2.bind(this);
        this.button4 = this.button4.bind(this);
        this.buttonManageList = this.buttonManageList.bind(this);
        
    }


    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    button2() {
        this.props.history.push('/')
    }

    button4() {
        console.log(this.state.id);
        localStorage.setItem('resid', this.state.id);

        //    this.props.history.push('/Restaurant')
    }

    buttonManageList() {
        alert(this.state.rstdrop);
        var liststate = this.state.rstdrop;
        if (liststate == 'blank') {
            //do nothing
        }
        else{
            this.props.history.push('/' + liststate);
        }

    }

    render() {
        let recrows = [];
        let resrows = [];
        console.log(this.state.size);
        for (var i = 0; i < this.state.size; i++) {

            recrows.push(<RecipeRow recdata={this.state.recdata} counter={i}/>)
            resrows.push(<RestaurantRow resdata={this.state.resdata} counter={i} />)
        }

        return (
            <div className="Result">
                <div id="rstheader">
                    <img id="collage" src="https://i.imgur.com/LqvxCkC.png" alt="collage" />

                    <div id="rstheader2">
                        <h1 id="rsttitle"> Results for: {localStorage.getItem('query')}</h1>

                        <div className="rstbuttons">
                            <select id="rstdrop" name="rstdrop" onChange={this.handleChange} >
                                <option value="blank" selected></option>
                                <option value="Favorite">Favorites</option>
                                <option value="ToExplore">To Explore</option>
                                <option value="NotShow">Do Not Show</option>
                            </select>
                            <br></br>
                            <button id="list" onClick={this.buttonManageList} > Manage List</button>
                            <br></br>
                            <button id="retsp" onClick={this.button2}>Return to Search Page</button>
                        </div>
                    </div>
                </div>
                <div className="col1">
                    <h2 id="reshead">Restaurants</h2>
                    {resrows}

                </div>
                <div className= "col2">
                    <h2 id="rechead">Recipes</h2>
                    {recrows}
                </div>

            </div>
        );
    }
}

class RestaurantRow extends Component {
    button4() {
        console.log("fck this");
    }


    render() {
        const array = this.props.resdata[this.props.counter];
        let row;
        let price;

        if (array.priceRating == "EXPENSIVE") {
            price = "$$$";
        }
        else if (array.priceRating == "MODERATE") {
            price = "$$";
        }
        else if (array.priceRating == "INEXPENSIVE") {
            price = "$";
        }
        else {
            price = "";
        }

        if (this.props.counter % 2 === 0) {
            row = <div id="recrow1" onClick={this.button4}>
                <font>{array.name}</font>
                <br></br>
                <small>Distance: {array.distance}</small>
                <br></br>
                <small>Address: {array.address}</small>
                
                <small id="price">Price: {price}</small>

            </div>

        }
        else {
            row = <div id="recrow2" onClick={this.button4}>
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
    render() {
        const array = this.props.recdata[this.props.counter];
        let row;
        
        if (this.props.counter % 2 === 0) {
            row = <div id="recrow1">
                    <font>{array.title}</font>
                    <br></br>
                    <small>Prep Time: {array.prepTime}</small>
                    <br></br>
                    <small>Cook Time: {array.cookTime}</small>
                </div>
        }
        else {
            row = <div id="recrow2">
                <font>{array.title}</font>
                <br></br>
                <small>Prep Time: {array.prepTime}</small>
                <br></br>
                <small>Cook Time: {array.cookTime}</small>
            </div>
           

        }
        return row;
    }
}

export default Result;
