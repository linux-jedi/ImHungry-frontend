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
                <div id="header">
                    <img id="collage" src="https://i.imgur.com/LqvxCkC.png" alt="collage" />
                    <h2 id="title"> Results for: {localStorage.getItem('query')}</h2>
                    <select name="rstdrop">
                        <option value="blank" selected></option>
                        <option value="fave">Favorites</option>
                        <option value="explo">To Explore</option>
                        <option value="noshow">Do Not Show</option>
                    </select>

                    <br></br>
                    <button>Manage List</button>

                    <br></br>
                    <button onClick={this.button2}>Return to Search Page</button>
                </div>

                <div id="col1">
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

               
            </div>
        );
    }
}

export default Result;
