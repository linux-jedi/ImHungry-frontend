import React, { Component } from 'react';

import './Explore.css';

class Explore extends Component {
    constructor(props) {
        super(props);

        const link1 = "http://localhost:8080/list/EXPLORE";

        let json1 = JSON.parse(this.loadData(link1));
        console.log(json1);

               this.state = {
                   data: link1,
                   list3drop: 'blank'
               };

        this.handleChange = this.handleChange.bind(this);
        this.manageList = this.manageList.bind(this);
        this.returnSearch = this.returnSearch.bind(this);
        this.returnRes = this.returnRes.bind(this);
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

    manageList() {
        if (this.state.list3drop == 'blank') {
            //do nothing
        }
        else {
            this.props.history.push('/' + this.state.list3drop);
        }
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    returnSearch() {
        this.props.history.push('/')
    }

    returnRes() {
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
                    <select id="list3drop" name="list3drop" onChange={this.handleChange}>
                        <option value="blank" selected></option>
                        <option value="Favorite">Favorite</option>
                        <option value="NoShow">Do Not Show</option>
                    </select>
                    <br></br>
                    <button id="list3" onClick={this.manageList} > Manage List</button>
                    <br></br>
                    <button id="list3rp" onClick={this.retunRes}>Return to Results Page</button>
                    <br></br>
                    <button id="list3sp" onClick={this.returnSearch}>Return to Search Page</button>
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
