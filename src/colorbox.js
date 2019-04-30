import React, { Component } from 'react';

export default class ColorBox extends Component {
    constructor(props){
        super(props)
            this.state = {
                colors: 'white'
            }
        }

        clickButton = () => {
        let color = this.state.colors
        let colorArr = ['white', 'green', 'blue', 'yellow', 'red', 'purple', 'orange']
        let newColor = colorArr[Math.floor(Math.random()* colorArr.length)]
        this.setState({colors: newColor})
    }

    render(){
        let { colors } = this.state
        let styles = {
            borderStyle: 'dashed',
            borderWidth: 'thick',
            background: this.state.colors,
            height: '200px',
            width: '200px'
        }

        return(
            <div>
            <h1>Color Box</h1>
            <button style={styles} onClick ={this.clickButton}>{colors}</button>
            </div>
        )
    }
}
