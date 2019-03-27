import React, { Component } from 'react';
import './CSS/Result.css';
import ReactPaginate from 'react-paginate';
import Dropdown from './Dropdown';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';




class Result extends Component {
    constructor(props) {
        super(props);
        const fs = require('fs');
        //console.log(fs);

        //CHANGE THIS LET TO CONNECT TO ENDPOINTS
        let test = false;

        const link1 = "https://mysterious-refuge-36265.herokuapp.com/recipe?name="    +  localStorage.getItem('query') + "&amount=" + localStorage.getItem('amount') ;
        const link2 = "https://mysterious-refuge-36265.herokuapp.com/restaurant?name=" + localStorage.getItem('query') + "&amount=" + localStorage.getItem('amount');
        const link3 = "https://mysterious-refuge-36265.herokuapp.com/collage?searchTerm=" + localStorage.getItem('query');
        console.log(link1);
        console.log(link2);
        //TEST MODE
        const test1 = 'C:/Users/karti/ImHungry-frontend/imhungry/src/component/JSON/recip.json';
        const test2 = 'C:/Users/karti/ImHungry-frontend/imhungry/src/component/JSON/rest.json';
        

        let json1;
        let json2;
        //technically the following code can be done in any language
        if (test){
            fetch(test1).then(res => console.log(res));
            // json1 = JSON.parse(test1, {encoding: "utf8"}, function(err, data){
            //  if(err){
            //     console.log(err)
            //  }              
            //  console.log(data);
            // });
            json2 = JSON.parse(test2, {encoding: "utf8"}, function(err, data){
             if(err){
                console.log(err)
             }              
             console.log(data);
          });        
        } else {
            json1 = JSON.parse(this.loadData(link1));
            json2 = JSON.parse(this.loadData(link2));
            
        }

        this.state = {
            rstdrop: 'blank',
            recdata: json1,
            resdata: json2,
            size: localStorage.getItem('amount'),
            link4: link3,
            perPage: 2, //just a default for now
            offset: 0,
            pageCount: Math.ceil(localStorage.getItem('amount')/2),
            indOnPage: [0, 2], //from result x to result y displayed

        };

        this.handlePageClick = this.handlePageClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.returnSearch = this.returnSearch.bind(this);
        this.buttonManageList = this.buttonManageList.bind(this);
        this.handleDropdown = this.handleDropdown.bind(this);

        
    }

    
    loadData(url) {
        const Http = new XMLHttpRequest();
        Http.open("GET", url, false);
        Http.send();
        if(Http.status == 200) {
            console.log(Http.responseText)
            return Http.responseText;
        }
    }

    handleDropdown(event, value){
        this.setState({
            rstdrop: value
        });
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handlePageClick = data => {
        var selected = data.selected;
        var offset = selected;
        var ind1 = offset * this.state.perPage;
        var ind2 = Math.min(ind1+this.state.perPage, this.state.size);
        console.log(ind1);
        console.log(ind2);
        this.setState({ 
            offset: offset,
            indOnPage: [ind1, ind2]
        });
      };

    returnSearch() {
        //history redirects it and is appended to URL (i'm guessing)
        this.props.history.push('/')
    }

    buttonManageList() {
        var liststate = this.state.rstdrop;
        if (liststate != 'blank') {
            this.props.history.push('/' + liststate);
        }

    }

    render() {
        let recrows = [];
        let resrows = [];
        console.log("DATA",this.state.resdata);
        for (var i = this.state.indOnPage[0]; i < this.state.indOnPage[1]; i++) {

            recrows.push(<RecipeRow recdata={this.state.recdata} counter={i} history={this.props.history} />)
            resrows.push(<RestaurantRow resdata={this.state.resdata} counter={i} history={this.props.history} />)
        }

        return (
            <div className="Result">
                <div id="rstheader">
                    <img id="collage" src={this.state.link4} alt="collage" />


                    <div id="rstheader2">
                        <h1 id="rsttitle"> Results for: {localStorage.getItem('query')}</h1>

                        <div className="rstbuttons">
                            <Dropdown handleDropdown = {this.handleDropdown}/>
                            <button id="list" onClick={this.buttonManageList} > Manage List</button>
                            <br></br>
                            <button id="retsp" onClick={this.returnSearch}>Return to Search Page</button>
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

                <ReactPaginate
                    previousLabel={<ChevronLeftIcon/>}
                    nextLabel={<ChevronRightIcon/>}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={'pagination'}
                    subContainerClassName={'pages pagination'}
                    activeClassName={'active'}
                />
            

            </div>
        );
    }
}

class RestaurantRow extends Component {

    toResPage =(e)=> {
        console.log("previously was button4");
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
            row = <div className="recrow1" id={array.id} onClick={this.toResPage}>
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
            row = <div className="recrow2" id={array.id} onClick={this.toResPage} >
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

    toRecPage =(e)=> {
        console.log("was button5");
        console.log(e.currentTarget.id);
        localStorage.setItem('recid', e.currentTarget.id);

        this.props.history.push('/Recipe')
    }

    render() {
        const array = this.props.recdata[this.props.counter];
        let row;
        
        if (this.props.counter % 2 === 0) {
            row = <div className="recrow1" id={array.id} onClick={this.toRecPage}>
                <img src="http://pngimg.com/uploads/star/star_PNG41507.png" alt ="str" id="starimg"></img>
                <font id="star"> {array.id % 5} </font>
                <font>{array.title}</font>
                <br></br>
                <small>Prep Time: {array.prepTime} min</small>
                <br></br>
                <small>Cook Time: {array.cookTime} min</small>
            </div>
        }
        else {
            row = <div className="recrow2" id={array.id} onClick={this.toRecPage}>
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

export default Result;
