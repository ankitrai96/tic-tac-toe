import React, { Component } from 'react';
import {View, StatusBar} from 'react-native';
import Banner from './components/Banner';
import GameGrid from './components/GameGrid';

export default class App extends Component {
  render(){
    return (
      <View style={styles.deck}>
        <StatusBar backgroundColor="#697a21"/>
        <Banner>Pic Pac Poe</Banner>
        <GameGrid/>
        <View/> 
      </View>
    );
  }
}

const styles = {
  deck : {
    flex : 1,
    backgroundColor : '#b8b42d',
    alignItems : 'center',
    justifyContent: 'space-between'
  }
} 