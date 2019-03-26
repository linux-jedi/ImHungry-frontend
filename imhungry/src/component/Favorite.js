import React, { Component } from 'react';

import './Favorite.css';

class Favorite extends Component {
    constructor(props) {
        super(props);
        let listWanted = localStorage.getItem("liststate");
        let keyword = "FAVORITE";
        if (listWanted === ("ToExplore")){
            keyword = "EXPLORE";
            //localStorage.setItem("liststate", "To Explore");
        } else if (listWanted === ("NoShow")){
            keyword = "BLOCK";
            //localStorage.setItem("liststate", "Do Not Show");
        }
        const link1 = "https://mysterious-refuge-36265.herokuapp.com/list/" + keyword;
        let json1 = JSON.stringify(this.loadData(link1));
        console.log(json1);
        this.favelist = json1;
               this.state = {
                   data: link1,
                   list1drop: listWanted,
                   opt1: 'blank',
                   opt2: 'blank'
               };
        this.remanageDropdown();


        this.handleChange = this.handleChange.bind(this);
        this.redirectList = this.redirectList.bind(this);
        this.returnSearch = this.returnSearch.bind(this);
        this.returnRes = this.returnRes.bind(this);
    }
    loadDataTest(url){
        var xhr = new XMLHttpRequest();

          xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                console.log("CALLBACK",xhr.response);
            } else{
                console.log("idk"); 
            }
          }
          xhr.open('GET', url, true);
         xhr.send('');
    }
    loadData(url) {
        const Http = new XMLHttpRequest();
        Http.open("GET", url, true);
        Http.responseType = 'json';
        Http.send();
        Http.onload = function() {
        if (Http.status == 200) {
            //cookie Issues! -- debug later!

           // let cookie = Http.getResponseHeader("Cookie");
           // console.log(cookie);
            //  console.log("adf");
            console.log(Http.response);
            return Http.response;
        } else{
            console.log("ERROR:", Http.status);
        }
        }

 
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    redirectList() {
        if (this.state.list1drop == 'blank') {
            //do nothing
        }
        else {
            //should just refresh the page
            localStorage.setItem("liststate",this.state.list1drop);
            this.props.history.push('/Favorite');
            console.log("refreshed localstorage to ", this.state.list1drop);
            this.remanageDropdown();
            window.location.reload();
        }
    }

    remanageDropdown(){
        if (this.state.list1drop == 'NoShow'){
            this.state.opt1="Favorite";
            this.state.opt2="ToExplore";

        } else if (this.state.list1drop == 'ToExplore'){
            this.state.opt1 = "Favorite";
            this.state.opt2 ="NoShow";
        } else if (this.state.list1drop == 'Favorite'){
            this.state.opt1="ToExplore";
            this.state.opt2="NoShow";
        }

        this.state.list1drop='blank';
    }

    returnSearch() {
        this.props.history.push('/')
    }

    returnRes() {
        this.props.history.push('/Result')
    }

    render() {

        let favelist = [];
        let faverows = [];
        //once we want to connect to DB, all can be generalized here
        //console.log(localStorage["Favoritea"]);
        //console.log(localStorage["Favoriteb"]);
        //we are gonna have an issue with ordering
        //var favelista = localStorage["Favoritea"];
        //var favelistb = localStorage["Favoriteb"];

        for (var i = 0; i < favelist.length; i++) {

            if (favelist[i].address == null) {

                faverows.push(<RecipeRow recdata={favelist[i]} counter={i} history={this.props.history} />)
            }
            else {
                faverows.push(<RestaurantRow resdata={favelist[i]} counter={i} history={this.props.history} />)
            }
        }

        return (
            <div className={localStorage.getItem("liststate")}>

                        <h1 id="list1title">{localStorage.getItem("liststate")}</h1>

  
                <div className="list1col">


                </div>

                <div className="list1buttons">
                    <select id="list1drop" name="list1drop" onChange={this.handleChange} >
                        <option value="blank" value></option>
                        <option value={this.state.opt1}>{this.state.opt1}</option>
                        <option value={this.state.opt2}>{this.state.opt2}</option>
                    </select>
                    <br></br>
                    <button id="list1" onClick={this.redirectList}>Manage List</button>
                    <br></br>
                    <button id="list1rp" onClick={this.returnRes}>Return to Results Page</button>
                    <br></br>
                    <button id="list1sp" onClick={this.returnSearch}>Return to Search Page</button>
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
