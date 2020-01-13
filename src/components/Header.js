import React from 'react';

export default class Header extends React.Component{

    render(){

        return(
            <div className="header">
                <div className="header-box">
                    <img src="./logo192.png" className="header-logo"></img>
                    <div className="header-searchbox">
                        www.linkedin.com/in/renan-aac
                        <img src="./search-icon.png" alt="16px" width="16px" className="header-searchicon"></img>
                    </div>
                    </div>
                <div className="header-social">
                    <img src="./instagram.png"></img>
                    <img src="./linkedin.png"></img>
                </div>
                <div className="header-curriculum">
                    Baixe meu currículo
                </div>
            </div>
        );
    }
}