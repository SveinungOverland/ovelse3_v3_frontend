import React, { Component } from 'react';

// Project imports
import View from './view';


export default class Navigation extends Component {

    state = {

    };

    render() {
        return <View state={this.state}>{this.props.children}</View>
    }

}
