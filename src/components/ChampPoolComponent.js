import {Component} from 'react';
import React from 'react'
import Champion from './ChampionObject'

//CSS Params for this component, because otherwise it would lay out wrong on the page, also this keeps the div
//Inside of the screen so that you still see the team objects on the other sides even when you're scrolling through
//The pool.
const scrollDiv = {
    height: '750px',
    width: '60%',
    overflowY: 'scroll',
    float: 'left',
    padding: '40px',
};


class ChampPool extends React.Component{
    constructor(props){
        super(props)
        //Takes in an array of champs as input in props.champList, will probably also be revised later.
        this.state = {
            champs: props.champList,
            items: [],
        };
        //console.log(typeof(this.state.champs)) //Vestigial, uncomment if needed later.
    
    }

    //The Div here is declared using the stylesheet that is outlined above.
    //Using the javascript map function to give each icon a unique identifier and setting their source
    //equal to the champion being iterated over and calling the icon() method.
    render(){
        return(
            <div style={scrollDiv}>
                {this.state.champs.map((value,index) => {
                    return <img onClick={e => this.props.handler(e.target.id)} id={value.apiName} key={value.apiName} src={value.icon()}></img>
                })}
            </div>
        )
    }
}
export default ChampPool;