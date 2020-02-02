import React from 'react';

export default class Cards extends React.Component{

    constructor(props){
        super(props);

    }

    render(){
        return(
            <div className="card-container">
                <h2 className="card-title">{this.props.content.title}</h2>
                <div className="card-content">
                    <img src={this.props.content.image} className="card-image"></img>
                    <div className="card-text">{this.props.content.text}</div>                  
                </div>
            </div>
        );
    }

}