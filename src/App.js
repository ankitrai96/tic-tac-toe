import React, { Component } from 'react';
import Banner from './components/Banner';
import {View, StatusBar} from 'react-native';
import Toggle from './components/Toggle'
import GameGrid from './components/GameGrid';

export default class App extends Component {
  state = {ghost:false, difficulty:false}
  //Ghost is alias Artificial Intelligence
  ghostMode(){
    this.setState({ghost:!this.state.ghost})
  }
  proMode(){
    this.setState({difficulty:!this.state.difficulty})
  }
  render(){
    return (
      <View style={styles.deck}>
        <StatusBar backgroundColor="#FB6107"/>
        <Banner>Pic Pac Poe</Banner>
        <GameGrid
          ghost = {this.state.ghost}
          difficulty = {this.state.difficulty}
        />
        <Toggle 
          ghostMode={this.ghostMode.bind(this)}
          proMode={this.proMode.bind(this)}
          ghost = {this.state.ghost}
          difficulty = {this.state.difficulty}
        />
      </View>
    );
  }
}

const styles = {
  deck : {
    flex : 1,
    backgroundColor : '#FBB02D',
    alignItems : 'center',
    justifyContent: 'space-between'
  }
} 