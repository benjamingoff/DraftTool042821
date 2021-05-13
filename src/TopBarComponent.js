import {Component} from 'react';
import React from 'react'
import ChampionComponent from './ChampionComponent'
import Champion from './ChampionObject'
import icon from './icon.png'

//Div Style Sheet: sets the height to be exactly that of 5 icons stacked,
//and the width so that it will be vertical but still give the champ pool room.
const divStyle = {
    height: '110px',
    width: '90%',
    float: 'none',
    padding: '10px',
};
//Setting image size to be a constant for now, until we can find out decent scaling percentages.
const imgStyle = {
    height: '100px',
    width: '100px',
    margin: '10px',
    borderRadius: '50px'
};



class TopBarComponent extends React.Component{
    constructor(props){
        super(props);
        this.nullLink = 'https://www.pngkit.com/png/detail/117-1170063_red-circle-cross-out-png-cross-out-png.png'
        this.team1Images = [];
        this.team2Images = [];
        for(let i = 0; i < 5; i++){
            if(props.team1Bans[i] == 0){
                this.team1Images[i] = this.nullLink;
            }
            else{
                this.team1Images[i] = this.props.team1Bans[i].icon();
            }
            if(props.team2Bans[i] == 0){
                this.team2Images[i] = this.nullLink;
            }
            else{
                this.team2Images[i] = this.props.team2Bans[i].icon();
            }
        }
        this.state = {
            team1Bans: props.team1Bans,
            team2Bans: props.team2Bans,
            currentChampion: props.currentChampion
        }
        
    }
    
    render(){
        return(
            <div styles={divStyle}>
                <img key={JSON.stringify(this.team1Images[0])} src={this.team1Images[0]} style={imgStyle}/>
                <img key={JSON.stringify(this.team1Images[1])+'2'} src={this.team1Images[1]} style={imgStyle}/>
                <img key={JSON.stringify(this.team1Images[2])+'3'} src={this.team1Images[2]} style={imgStyle}/>
                <img key={JSON.stringify(this.team1Images[3])+'4'} src={this.team1Images[3]} style={imgStyle}/>
                <img key={JSON.stringify(this.team1Images[4])+'5'} src={this.team1Images[4]} style={imgStyle}/>

                <img src={icon} style={imgStyle}/>
                <img key={JSON.stringify(this.state.currentChampion)} src={this.state.currentChampion.icon()} style={imgStyle}/>
                <img src={icon} style={imgStyle}/>

                <img key={JSON.stringify(this.team2Images[0])+'6'} src={this.team2Images[0]} style={imgStyle}/>
                <img key={JSON.stringify(this.team2Images[1])+'7'} src={this.team2Images[1]} style={imgStyle}/>
                <img key={JSON.stringify(this.team2Images[2])+'8'} src={this.team2Images[2]} style={imgStyle}/>
                <img key={JSON.stringify(this.team2Images[3])+'9'} src={this.team2Images[3]} style={imgStyle}/>
                <img key={JSON.stringify(this.team2Images[4])+'0'} src={this.team2Images[4]} style={imgStyle}/>

            </div>
        )
    }

}
export default TopBarComponent;