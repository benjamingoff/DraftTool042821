import React from 'react';
//import ChampContext from './ChampContext';
import Champion from './ChampionObject'

class ChampionComponent extends React.Component{
    constructor(props){
        super(props);
        //Takes in a champion object as it's only state variable.
        this.state = {
            champ: props.champ
        };
    }


    //Basically this code below is being passed a handler for the click through props, so I set that equal to the onClick event
    //Then it also passed the id (i.e. name of champ) through the event tag e to be parsed in the main app.
    //Sets the id of the champ equal to its name and the icon is fetched via a link provided by the Champion.icon method().
    
    render(){
        return(
            <div>
                <img onClick={e => this.props.handler(e.target.id)} id={this.state.champ.name} src={this.state.champ.icon()} alt="Test alternate"></img>
                <p>{this.state.champ.name}</p>
            </div>
        );
    }
}
export default ChampionComponent;