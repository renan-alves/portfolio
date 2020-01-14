import React from 'react';

export default class Profile extends React.Component {

    render() {

        return (
            <div className="profile">
                <div className="profile-background"></div>
                <div className="profile-picture-container">
                    <img src="./logo512.png" className="profile-picture"></img>
                    <div className="profile-name">
                        <h1> Renan Augusto Alves da Costa</h1>
                        <h2> Estagiário de TI </h2>
                    </div>
                    
                </div>
            </div>
        );
    }   
}