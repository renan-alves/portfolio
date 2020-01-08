import React from 'react';
import Photo from './Photo';


export default class Header extends React.Component{

    render(){
        return(
            <div className="header-container">
                <div className="header-content">
                    <div className="header-items">
                        <div>HOME</div>
                        <div>SOBRE</div>
                        <div>HABILIDADES</div>
                    </div>
                    
                    <div className="header-download-button">Baixe meu currículo</div>
                </div>
                <div className="header-background"></div>
                <div className="header-display">
                    <h1>
                        Renan Augusto Alves da Costa    
                    </h1>
                    <h2>
                        Estagiário
                    </h2>
                </div>

                <div><Photo /></div>
            </div>
        );
    }
}