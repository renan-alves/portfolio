import React from 'react';
import Header from './Header';
import Profile from './Profile';
import Content from './Content';

export default class App extends React.Component {

    render() {
        return (
            <div>
                <Header />
                <Profile />
                <Content />
            </div>
        );
    }
}