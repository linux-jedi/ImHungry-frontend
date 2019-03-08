import React, { Component } from 'react';

import './Recipe.css';

//will have to handle this page onload -> populate data on load


class Recipe extends Component {
    constructor(props) {
        super(props);

        const link1 = "http://localhost:8080/recipe/" + localStorage.getItem('recid');
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
            return Http.responseText;
        }
    }

    button2() {
        this.props.history.push('/Result')
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
                                <button id="rcpprint" onClick={() => window.print()} > Printable View</button>
                            <br></br>
                            <button id="rcpsp" onClick={this.button2}>Return to Results Page</button>
                            <br></br>
                            <select id="rcpdrop" name="rcpdrop">
                                <option value="blank" selected></option>
                                <option value="fave">Favorites</option>
                                <option value="explo">To Explore</option>
                                <option value="noshow">Do Not Show</option>
                            </select>
                            <br></br>
                            <button id="rcplist">Add to List</button>
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
