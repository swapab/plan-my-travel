import React, { Component } from 'react';
import './App.css';
import MyLocation from './home/MyLocation';

class App extends Component {
    render() {
        return (
            <div className="App">
                <MyLocation />
            </div>
        );
    }
}

export default App;
