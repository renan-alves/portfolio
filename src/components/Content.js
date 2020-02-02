import React from 'react';
import Cards from './Cards';
import ContentFormationList from "./ContentLists/content_formation";
import ContentSkillsList from "./ContentLists/content_skills";
import ContentExperienceList from "./ContentLists/content_experience";

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
        
        switch(option){
            case 1: return(ContentFormationList.map((item, key) => {
                return(
                    <Cards content={item} index={this.state.currentOption} />
                )
            }));
            case 2: return(ContentSkillsList.map((item, key) => {
                return(
                    <Cards content={item} index={this.state.currentOption} />
                )
            }));
            case 3: return(ContentExperienceList.map((item, key) => {
                return(
                    <Cards content={item} index={this.state.currentOption} />
                )
            }));
            
        
            // case 3: return(<Cards category="experience" index={this.state.currentOption} />)
        }
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