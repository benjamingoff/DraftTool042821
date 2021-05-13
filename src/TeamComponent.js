import {Component} from 'react';
import React from 'react'
import ChampionComponent from './ChampionComponent'
import Champion from './ChampionObject'

//HardCode link to an icon so that I can just have something to show, will be removed later.
const imageLink = 'http://ddragon.leagueoflegends.com/cdn/11.5.1/img/champion/Caitlyn.png';

//Div Style Sheet: sets the height to be exactly that of 5 icons stacked,
//and the width so that it will be vertical but still give the champ pool room.
const divStyle = {
    height: '500px',
    width: '6%',
    float: 'left',
    padding: '10px',
};

//Setting image size to be a constant for now, until we can find out decent scaling percentages.
const imgStyle = {
    height: '100px',
    width: '100px',
    borderRadius:'10px'
};

//Couple of hardcoded testers that were used in development.
const cait = new Champion('Caitlyn','Caitlyn');
const listCait = [cait,cait,cait,cait,cait]


class TeamComponent extends React.Component{
    constructor(props){
        super(props);
        //Reflects the same code as updateIcons(), just doing in the initialization of the components.
        this.champsList = this.props.team.listOfChamps;
        this.iconsList = []
        this.nullLink = 'https://www.pngkit.com/png/detail/117-1170063_red-circle-cross-out-png-cross-out-png.png';
        for(let i = 0; i < 5; i++){
            if(this.champsList[i] != 0){
                this.iconsList[i] = this.champsList[i].icon();
            }
            else{
                this.iconsList[i] = this.nullLink;
            }
        }
        //Takes in nothing at the moment as it's all hardcoded, but it will need a team object at some point or another.
        this.state = {
            team: props.team,
            iconsList: this.iconsList
        };
        this.updateIcons.bind(this);
    }
    updateIcons(){
        //Setting a list equal to the current state of champs then declaring the iconsList to be empty.
        this.champsList = this.state.team.listOfChamps;
        this.iconsList = []
        //A link to use if the spot in the list is going to be null so that we can sub in this icon for an image
        this.nullLink = 'https://www.pngkit.com/png/detail/117-1170063_red-circle-cross-out-png-cross-out-png.png';
        //Iterating through the list via indexes
        for(let i = 0; i < 5; i++){
            //If there's a champion object here (non-zero) then just use its icon for the link in the list
            if(this.champsList[i] != 0){
                this.iconsList[i] = this.champsList[i].icon();
            }
            //Otherwise give it the null link
            else{
                this.iconsList[i] = this.nullLink;
            }
        }
        //Updating the component state to reflect this
        this.setState(state => ({
            iconsList: this.iconsList
        }));
    }

    //Just a div holding all of the icons which it gets from the iconsList in state\
    //Also given a fresh style from the stylesheet above
    render(){
        return(
            <div style={divStyle}>
                <img src={this.state.iconsList[0]} style={imgStyle}></img>
                <img src={this.state.iconsList[1]} style={imgStyle}></img>
                <img src={this.state.iconsList[2]} style={imgStyle}></img>
                <img src={this.state.iconsList[3]} style={imgStyle}></img>
                <img src={this.state.iconsList[4]} style={imgStyle}></img>
            </div>
        );
    }

}
export default TeamComponent;