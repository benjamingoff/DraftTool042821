import React from 'react';
//import ChampContext from './ChampContext';
import Champion from './ChampionObject'
//Div Style Sheet: sets the height to be exactly that of 5 icons stacked,
//and the width so that it will be vertical but still give the champ pool room.
const divStyle = {
    height: '500px',
    width: '8%',
    float: 'left',
    padding: '10px',
};

//Setting image size to be a constant for now, until we can find out decent scaling percentages.
const imgStyle = {
    height: '100px',
    width: '100px',
    borderRadius:'10px'
};

const textStyle = {
    height: '10px'
}

class StatsComponent extends React.Component{
    constructor(props){
        super(props);
        //Takes in a list of ability names as it's only state variable.
        this.state = {
            abilities: props.abilities
        };
    }


    //Basically this code below is being passed a handler for the click through props, so I set that equal to the onClick event
    //Then it also passed the id (i.e. name of champ) through the event tag e to be parsed in the main app.
    //Sets the id of the champ equal to its name and the icon is fetched via a link provided by the Champion.icon method().
    
    render(){
        return(
            <div>
                <div style={divStyle}>
                    <img src={this.state.abilities[0]} style={imgStyle}></img>
                    <img src={this.state.abilities[1]} style={imgStyle}></img>
                    <img src={this.state.abilities[2]} style={imgStyle}></img>
                    <img src={this.state.abilities[3]} style={imgStyle}></img>
                    <img src={this.state.abilities[4]} style={imgStyle}></img>
                </div>
                <div style={textStyle}>
                    <text></text>
                </div>
            </div>
        );
    }
}

export default StatsComponent;