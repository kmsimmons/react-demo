import React, { Component } from 'react';
import './App.css';
import ColorBox from './colorbox'

export default class App extends Component {
    render(){
            console.log(this.state);
        return(
          <div>
            <ColorBox />
            <ColorBox />
            <ColorBox />
          </div>

      )
  }
}
