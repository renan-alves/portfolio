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

    componentDidMount(){
        let initial = document.getElementById("formacao");
        initial.checked = true;
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
                    <label for="formacao" onClick={this.toggleFormation}>Formação</label>
                    <input type="radio" name="label" id="formacao" />
                    <label for="formacao" onClick={this.toggleSkills}>Competências</label>
                    <input type="radio" name="label" id="competencia" />
                    <label for="formacao" onClick={this.toggleExperience}>Experiência</label>
                    <input type="radio" name="label" id="experiecia" /> 
                </div>
                <div className="content-content">
                    {this.showContent(this.state.currentOption)}
                </div>
                
            </div>
            
        );
    }
}