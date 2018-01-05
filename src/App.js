import React, { Component } from 'react';
import {View, Text} from 'react-native';
import Banner from './components/Banner';
import GameGrid from './components/GameGrid';

export default class App extends Component {
  render(){
    return (
      <View style={styles.deck}>
        <Banner>Tic Tac Toe</Banner>
        <GameGrid/>
        <Banner>Beat me if you can</Banner>
      </View>
    );
  }
}

const styles = {
  deck : {
    flex : 1,
    backgroundColor : '#FFE381',
    alignItems : 'center',
    justifyContent: 'space-between'
  }
} 