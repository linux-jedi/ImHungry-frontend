import React, { Component } from 'react';

import './Favorite.css';

class Favorite extends Component {
    constructor(props) {
        super(props);
               this.state = {
                    //insert json into these resdata:[] and recdata:[]
                    data:[]
               };

        this.handleChange = this.handleChange.bind(this);
        this.button2 = this.button2.bind(this);
        this.button3 = this.button3.bind(this);
    }


    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    button2() {
        this.props.history.push('/')
    }

    button3() {
        this.props.history.push('/Result')
    }

    render() {
        return (
            <div className="Favorite">

                        <h1 id="list1title">Favorites</h1>

  
                <div className="list1col">

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

                <div className="list1buttons">
                    <select id="list1drop" name="list1drop">
                        <option value="blank" selected></option>
                        <option value="explo">To Explore</option>
                        <option value="noshow">Do Not Show</option>
                    </select>
                    <br></br>
                    <button id="list1">Manage List</button>
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

export default Favorite;
