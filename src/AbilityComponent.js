import React from 'react';
//import ChampContext from './ChampContext';
import Champion from './ChampionObject'

const parentStyle = {
    display: 'inline-block',
    verticalAlign: 'top'
}
const childStyle = {
    display: 'inline-block',
    position: 'relative',
    top: '-20px',
    fontWeight: 'bold',
    paddingLeft: '5px'
}
const imgStyle = {
    height: '100px',
    width: '100px',
    float: 'left'
}
const noInLine = {
    display: 'inline',
    fontWeight: 'normal'
}

const containerStyle = {

}

class AbilityComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            abilityIcon: props.icons,
            abilityList: props.abilities
        };
    
    }
    

    
    render(){
        return(
            <div style={containerStyle}>
                <div style={parentStyle}>
                    <img style={imgStyle} src={this.state.abilityIcon} />
                </div>
                <div style={childStyle}>
                    <div>
                        <p></p>{this.state.abilityList[0]}
                    </div>
                    <div style={noInLine}>
                            {this.state.abilityList[1].slice(0,40)}<br></br>
                            {this.state.abilityList[1].slice(40,80)}<br></br>
                            {this.state.abilityList[1].slice(80,120)}<br></br>
                            {this.state.abilityList[1].slice(120,160)}...
                    </div>
                </div>
            </div>

        );
    }
}
export default AbilityComponent;