import React, { Component } from 'react';

import './CSS/Dropdown.css';


class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resdrop: 'blank',
        };

    }

  

    render() {
        return (
            <div>
                <br></br>
                <select id="resdrop" name="resdrop" onChange={(e) => this.props.handleDropdown(e, e.target.value)}>
                    <option value="blank" selected></option>
                    <option value="Favorite">Favorites</option>
                    <option value="Explore">To Explore</option>
                    <option value="NoShow">Do Not Show</option>
                </select>
                <br></br>
            </div>

        );
    }
}

export default Dropdown;
