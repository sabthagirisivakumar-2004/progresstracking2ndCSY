import React, { Component } from 'react'
import './App.css'

import Button from '@mui/material/Button';
export default class classComponent extends Component {


    constructor()
    {
      super()
        this.state = {count:0};
    }

    handleIncrement = () => {
        this.setState(prevState => ({count: prevState.count + 1}));
    }
  render() {
    return (
      <div className='body'>
     <p><h3>Count: {this.state.count}</h3></p>
            <Button variant="contained" color="success" onClick={this.handleIncrement}>Increment</Button>
      </div>
    )
  }
}