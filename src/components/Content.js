import React from 'react';
import Cards from './Cards';

export default class Content extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            currentOption: 1
        }
    }

    toggleFormation = () =>{
        this.setState({currentOption: 1});
    }

    toggleSkills = () =>{
        this.setState({currentOption: 2});
    }

    toggleExperience = () =>{
        this.setState({currentOption: 3});
    }

    showContent = (option) =>{

        return(<Cards category="formation" index={this.state.currentOption} />)
    }

    render(){
        console.log(this.state.currentOption);
        return(
            <div className="content-box">
                <div className="content">
                    <div onClick={this.toggleFormation}>Formação</div>
                    <div onClick={this.toggleSkills}>Competências</div>
                    <div onClick={this.toggleExperience}>Experiência</div> 
                </div>
                <div className="content-content">
                    {this.showContent(this.state.currentOption)}
                </div>
                
            </div>
            
        );
    }
}