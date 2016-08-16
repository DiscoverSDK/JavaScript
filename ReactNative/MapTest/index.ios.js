/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import {
   AppRegistry,
   StyleSheet,
   Text,
   MapView,
   View
 } from 'react-native';

 class MapTest extends Component {
   render() {
     return (
       <MapView style={styles.map} />
     );
   }
 }

 const styles = StyleSheet.create({
   map: {
       flex: 1,
     },

 });

 AppRegistry.registerComponent('MapTest', () => MapTest);
