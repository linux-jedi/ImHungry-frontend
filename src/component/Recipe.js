import React, { Component } from 'react';

import './Recipe.css';

//will have to handle this page onload -> populate data on load


class Recipe extends Component {
    constructor(props) {
        super(props);
               this.state = {

        
        };

        this.button2 = this.button2.bind(this);

    }

    button2() {
        this.props.history.push('/Result')
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {

        alert(this.state.query + " " + this.state.amount);
        event.preventDefault();

        this.props.history.push('/Result')

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
        return (
            <div className="Recipe">
                <div id="rcptitle">
                    <h1 >PLaceholder title</h1>

                </div>
                <div id="rcpbody">
                    <div id="rcpupper">
                        <img id="rcpimg" src="https://i.imgur.com/HRr2vgs.jpg" />
                        <div id="rcpbuttons">
                            <button>Printable View</button>
                            <br></br>
                            <button onClick={this.button2}>Return to Results Page</button>
                            <br></br>
                            <select name="rcpdrop">
                                <option value="blank" selected></option>
                                <option value="fave">Favorites</option>
                                <option value="explo">To Explore</option>
                                <option value="noshow">Do Not Show</option>
                            </select>
                            <br></br>
                            <button>Add to List</button>
                        </div>
                    </div>

                    <p>Prep Time:</p>
                    <p>Placeholder PTIme</p>
                    <br></br>
                    <p>Cook Time:</p>
                    <p>PLACEHOLDER Ctime</p>
                    <br></br>
                    <p>Ingredients:</p>
                    <p>listof Ingredient</p>
                    <br></br>
                    <p>Instructions:</p>
                    <p id="rcpinstruct">1. In a large measuring cup, whisk together the lemon juice, oil, garlic, salt and seasoning.

                    2. Place the pork chops in a large plastic resealable bag and pour the marinade over top, coating them pork chops on both sides.

                3. Seal the bag and refrigerate for 8 hours or overnight.

                4. If you can, turn the bag once in a while to coat the pork chops evenly.

                5. When you are ready to grill, preheat your outdoor grill on medium high heat, around 375-425 °F. Make sure to lightly oil the grill grate to prevent sticking if needed.

                6. Remove the pork chops from the marinade bag place the pork chops on top of the grill.  Take some of the remaining marinade and brush on top for one last flavour boost.

                7. Cook the pork chops for 7-10 minutes on each side OR until they reach an internal temperature of 140F. Remove, tent with tinfoil and let rest for a few minutes ,then serve. ( The temperature will raise if you tent them, but if you don't want to tent them, cook them to 145 °F.)</p>
                </div>


            </div>
        );
    }
}

export default Recipe;
