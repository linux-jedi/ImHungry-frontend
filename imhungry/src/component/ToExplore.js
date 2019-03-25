import React, { Component } from 'react';

import './CSS/Explore.css';

class Explore extends Component {
    constructor(props) {
        super(props);

        const link1 = "http://localhost:8080/list/EXPLORE";

        let json1 = JSON.parse(this.loadData(link1));
        console.log(json1);

               this.state = {
                    data:link1
               };

        this.handleChange = this.handleChange.bind(this);
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

    button2() {
        this.props.history.push('/')
    }

    button3() {
        this.props.history.push('/Result')
    }

    render() {
        return (
            <div className="Explore">

                        <h1 id="list3title">To Explore</h1>

  
                <div className="list3col">

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

                <div className="list3buttons">
                    <select id="list3drop" name="list1drop">
                        <option value="blank" selected></option>
                        <option value="FAVORITE">Favorite</option>
                        <option value="BLOCK">Do Not Show</option>
                    </select>
                    <br></br>
                    <button id="list3">Manage List</button>
                    <br></br>
                    <button id="list3rp" onClick={this.button3}>Return to Results Page</button>
                    <br></br>
                    <button id="list3sp" onClick={this.button2}>Return to Search Page</button>
                    <br></br>
                    <button id="list3remove"> Remove</button>
                    <br></br>
                    <button id="list3move"> Move</button>
                </div>
               
            </div>
        );
    }
}

export default Explore;
