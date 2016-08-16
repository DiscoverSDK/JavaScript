import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';


class customerItem extends Component { 
  render()
  {
    return (<Text style={this.getstyle()}>
    Cusomer Name: {this.props.name}
    </Text>
  );
  }
  getstyle()
  {
    return {
      color: this.getcolor(),
      fontSize: this.getfontsize()
    };
  }
  getcolor()
  {
    var op = 1/this.props.num;
    return 'rgba(0,0,255,' + op + ')';
  }
  getfontsize()
  {
    return 20+this.props.num*2;
  }
};

module.exports = customerItem;
