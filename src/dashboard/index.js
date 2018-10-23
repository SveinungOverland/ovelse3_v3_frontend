import React from 'react';
import { Component } from 'react';


import View from './view';



export default class Dashboard extends Component {

    state = {

    };

    componentDidMount() {
        console.log("Hello Dashboard")
    }

    render() {
        return (
            <View state={this.state}/>
        )
    }

}
