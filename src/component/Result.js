import React, { Component } from 'react';

import './Result.css';

class Result extends Component {
    constructor(props) {
        super(props);
               this.state = {
                    //insert json into these resdata:[] and recdata:[]
                    rstdrop: 'blank',
                    data:[]
               };

        this.handleChange = this.handleChange.bind(this);
        this.button2 = this.button2.bind(this);
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

                    {/*
                    <table>
                        <tbody>{this.state.data.map(function (item, key) {

                            return (
                                <tr key={key}>
                                    <td>{item.userId}</td>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.body}</td>
                                </tr>
                            )

                        })}</tbody>
                    </table>
                    */}

                </div>
                <div className= "col2">
                    <h2 id="rechead">Recipes</h2>
                </div>
               
            </div>
        );
    }
}

export default Result;
