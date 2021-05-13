import React from 'react';
import AbilityComponent from './AbilityComponent'
//import ChampContext from './ChampContext';
import Champion from './ChampionObject'
import healthIcon from './healthIcon.png'
import shieldIcon from './shieldIcon.png'
import swordIcon from './swordIcon.png'
import msIcon from './msIcon.png'

//Div Style Sheet: sets the height to be exactly that of 5 icons stacked,
//and the width so that it will be vertical but still give the champ pool room.
const iconStyle = {
    height: '25px',
    width: '25px'
}
const divStyle = {
    height: '550px',
    float: 'left',
    paddingTop: '8px',
    width: '6%'
};
const statsDivStyle = {
    height: '550px',
    paddingTop: '8px',
    width: '550px',
    display: 'inline-block'
}
//Setting image size to be a constant for now, until we can find out decent scaling percentages.
const imgStyle = {
    height: '100px',
    width: '100px',
    borderRadius:'10px'
};

const divContainer = {
    height: '500px',
    width: '25%',
    top: '-50px',
    float: 'left'
};

const titleBlock = {
    height: '150px',
    paddingBottom: '20px',
    float: 'center',
}

const textStyle = {
    height: '10px',
    paddingBottom: '5px'
}
const inlineDiv = {
    display: "inline-block",
    position: "relative",
    verticalAlign: "top",
    top: '-1px'
}
class StatsComponent extends React.Component{
    constructor(props){
        super(props);
        //Takes in a list of ability names as it's only state variable.
        this.state = {
            champ: props.icon,
            abilities: props.abilities,
            abilityInfo: props.abilityInfo,
            //Stats are passed in this order: [name, typetag, health, armor, attack damage, movespeed]
            stats: props.stats
        };
    }


    //Basically this code below is being passed a handler for the click through props, so I set that equal to the onClick event
    //Then it also passed the id (i.e. name of champ) through the event tag e to be parsed in the main app.
    //Sets the id of the champ equal to its name and the icon is fetched via a link provided by the Champion.icon method().
    /*<div>
                    
                    
                    
                    
                </div>
    */

    render(){
        return(
            <div style={divContainer}>
                <div style={titleBlock}>
                    <h1 style={textStyle}>{this.state.stats[0]} : {this.state.stats[2]}</h1>
                    <p style={textStyle}>{this.state.stats[1]}</p>
                    <img src={this.state.champ.icon()} style={imgStyle}></img>
                <div style={inlineDiv}>
                    <p style={textStyle}><img src={healthIcon} style={iconStyle}></img> {this.state.stats[3]} <img src={shieldIcon} style={iconStyle}></img>  {this.state.stats[4]}</p>
                    <p style={textStyle}><img src={swordIcon} style={iconStyle}></img> {this.state.stats[5]} <img src={msIcon} style={iconStyle}></img>  {this.state.stats[6]}</p> 
                </div>
                    
                </div>
                <AbilityComponent abilities={this.state.abilityInfo[0]} icons={this.state.abilities[0]}></AbilityComponent>
                <AbilityComponent abilities={this.state.abilityInfo[1]} icons={this.state.abilities[1]}></AbilityComponent>
                <AbilityComponent abilities={this.state.abilityInfo[2]} icons={this.state.abilities[2]}></AbilityComponent>
                <AbilityComponent abilities={this.state.abilityInfo[3]} icons={this.state.abilities[3]}></AbilityComponent>
                <AbilityComponent abilities={this.state.abilityInfo[4]} icons={this.state.abilities[4]}></AbilityComponent>
                
                
            </div>
        );
    }
}

export default StatsComponent;