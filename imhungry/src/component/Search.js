import React, { Component } from 'react';

import './CSS/Search.css';

const imagesPath = {
    grumpy: "https://i.imgur.com/q0NhwBx.png",
    happy: "https://i.imgur.com/gUtYQH7.png"
}

class Search extends Component {
    constructor(props) {
        super(props);
               this.state = {
                   query: '',
                   amount: '5',
                   open:true
                };
        //setting global parameters
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSignout = this.handleSignout.bind(this);
    }

    //state.open tracks whether or not button is pressed
        //only communicates with getImageName
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
        //when adding to database, we will want to cache THIS INFO
        localStorage.setItem('query', this.state.query);
        localStorage.setItem('amount', this.state.amount);

        //res
        localStorage.setItem("Favoritea", []);
        localStorage.setItem("NoShowa", []);
        localStorage.setItem("Explorea", []);

        //rec
        localStorage.setItem("Favoriteb", []);
        localStorage.setItem("NoShowb", []);
        localStorage.setItem("Exploreb", []);


        event.preventDefault();

        this.props.history.push('/Result');

    }
    handleSignout(event){
        this.props.history.push('/SignIn');
    }


    render() {
        if (localStorage.getItem('id') === -1){
            this.props.history.push('/SignIn')
        }
        //this way the image name dynamically updates
        const imageName = this.getImageName();
        if (localStorage.getItem('id') === -1){
            this.props.history.push('/SignIn');
        }
        return (
            <div className="Search">
                    <h1 id="title">I'm Hungry</h1>

                    <div id="form">
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" name="query" id="query" placeholder="Enter Food" onChange={this.handleChange} required />
                            <input type="number" class="numFood" name="amount" id="amount" min="1" value={this.state.amount} onChange={this.handleChange} required
                            href=" " title= "Number of items to show in results"/>
                        <br></br>
                            <br></br>
                            <input type="image" alt="pikachu" id="pik" onClick={this.toggleImage}
                                src={ imagesPath[imageName] } value="Submit"/>
                    </form>
                    </div>
                    <button onClick={this.handleSignout}>
                        Sign Out
                    </button>
            </div>
            
        );
    }
}

export default Search;
