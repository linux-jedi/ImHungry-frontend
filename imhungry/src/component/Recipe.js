import React, { Component } from 'react';

import './CSS/Recipe.css';
import Dropdown from './Dropdown';


//will have to handle this page onload -> populate data on load


class Recipe extends Component {
    constructor(props) {
        super(props);

        const link1 = "https://mysterious-refuge-36265.herokuapp.com/recipe/" + localStorage.getItem('recid');
        let json1 = JSON.parse(this.loadData(link1));


        this.state = {
            rcpdrop: 'blank',
            data: json1
        };

        this.handleChange = this.handleChange.bind(this);
        this.button2 = this.button2.bind(this);
        this.button3 = this.button3.bind(this);
        this.handleDropdown = this.handleDropdown.bind(this);



    }

    loadData(url) {
        const Http = new XMLHttpRequest();
        Http.open("GET", url, false);
        Http.send();
        if (Http.status == 200) {
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

    button2() {
        this.props.history.push('/Result')
    }

    button3() {

        console.log(this.state.rcpdrop);

        if (this.state.rcpdrop != 'blank') {
            var temp = localStorage[this.state.rcpdrop + "b"];
            console.log(temp);
            if (temp == "") {
                temp = [this.state.data];
            }
            else {
                temp.concat(this.state.data);
            }

            localStorage[this.state.rcpdrop + "b"] = temp;

            console.log(localStorage[this.state.rcpdrop]);

        }
    }


    render() {

        if (this.state.data.prepTime == null) {
            this.state.data.prepTime = 0;
        }

        if (this.state.data.cookTime == null) {

            this.state.data.cookTime = 0;
        }

        let ingredients = this.state.data.ingredients.join(', ');

        let instructs = this.state.data.instructions.split(".");
        console.log(instructs);

        let instructrows = [];
        for (var i = 0; i < instructs.length; i++)
        {
            instructrows.push(<p>{i+1}. {instructs[i]}</p>)
        }

        return (
            <div className="Recipe">

                <h1 id="rcptitle">{this.state.data.title}</h1>
                <div id="rcpbody">
                    <div id="rcpupper">
                        <img id="rcpimg" src={this.state.data.photoUrl} />

                            <div className="rcpbuttons">
                                <button id="rcpprint" onClick={() => window.print()} > Printable Version</button>
                            <br></br>
                            <button id="rcpsp" onClick={this.button2}>Return to Results Page</button>
                            <Dropdown handleDropdown = {this.handleDropdown}/>
                            <button id="rcplist" onClick={this.button3} > Add to List</button>
                            </div>

                    </div>

                    <div id="prep">
                        <p>Prep Time:</p>
                        <p>{this.state.data.prepTime} mins</p>
                    </div>
                    <div id="cook">
                        <p>Cook Time:</p>
                        <p>{this.state.data.cookTime} mins</p>
                    </div>
                    <br></br>
                    <p>Ingredients:</p>
                    <p>{ingredients}</p>
                    <br></br>
                    <p >Instructions:</p>
                    <p id="rcpinstruct">
                        {instructrows}
                    </p>
                </div>


            </div>
        );
    }
}

export default Recipe;
