import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

const imagesPath = {
    grumpy: "https://i.imgur.com/q0NhwBx.png",
    happy: "https://i.imgur.com/gUtYQH7.png"
}

class App extends Component {
    constructor(props) {
        super(props);
               this.state = {
                    query: '',
                   amount: '',
                   open:true
        
                };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleImage = () => {
        this.setState(state => ({ open: !state.open }))
    }

    getImageName = () => this.state.open ? 'grumpy' : 'happy'

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        alert(this.state.query + " " + this.state.amount);
        event.preventDefault();

 /* this has not been tested and I prob need to import some library just placing this here for ref
  *
  * fetch('http://example.com', {
            method: "POST",
            body: JSON.stringify(userData),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(response => {
            response.json().then(data => {
                console.log("Successful" + data);
            })
        })
    }  
  */
    }

    render() {
        const imageName = this.getImageName();
        return (
            <div className="App">
                <header className="App-header">
                    <h1 id="title">I'm Hungry</h1>

                    <div id="form">
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" name="query" id="query" placeholder="Enter Food" onChange={this.handleChange} required />
                            <input type="number" name="amount" id="amount" min="1" placeholder="5" value={this.state.value} onChange={this.handleChange} required
                            href=" " title= "Number of items to show in results"/>
                        <br></br>
                            <br></br>
                            <input type="image" alt="pikachu" id="pik" onClick={this.toggleImage}
                                src={ imagesPath[imageName] } value="Submit"/>
                    </form>
                    </div>

                </header>
            </div>
        );
    }
}

export default App;