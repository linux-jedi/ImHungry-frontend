import React, { Component } from 'react';

import './Result.css';

class Result extends Component {
    constructor(props) {
        super(props);
               this.state = {
                    //insert json into these resdata:[] and recdata:[]
                };

        this.handleChange = this.handleChange.bind(this);
        this.button2 = this.button2.bind(this);
    }


    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    button2() {
        this.props.history.push('/')
    }

    render() {
        return (
            <div className="Result">
                <div id="rstheader">
                    <img id="collage" src="https://i.imgur.com/LqvxCkC.png" alt="collage" />

                    <div id="rstheader2">
                        <h1 id="rsttitle"> Results for: {localStorage.getItem('query')}</h1>

                        <div className="rstbuttons">
                            <select id="rstdrop" name="rstdrop">
                                <option value="blank" selected></option>
                                <option value="fave">Favorites</option>
                                <option value="explo">To Explore</option>
                                <option value="noshow">Do Not Show</option>
                            </select>
                            <br></br>
                            <button id="list">Manage List</button>
                            <br></br>
                            <button id="retsp" onClick={this.button2}>Return to Search Page</button>
                        </div>
                    </div>
                </div>
                <div className="col1">
                    <h2 id="reshead">Restaurants</h2>
{/*                    <table>         
                        <tbody>{this.state.data.map(function (item, key) {          //will have to figure out how to do alt colors
                                                                                    //also this fcks formatting up but can fix later mayb
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
