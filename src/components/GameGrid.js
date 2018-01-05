import React, { Component } from 'react';
import {View} from 'react-native';
import Cell from './Cell';

export default class GameGrid extends Component {
    state = {
        token:'O',
        cellValue : ['','','','','','','','','']
    }
    updateCellValue(indexOfArray){
        tempArray = []
        for(let i = 0; i<this.state.cellValue.length; i++){
            if(i==indexOfArray){
                tempArray[i] = this.state.token
            } else {
                tempArray[i] = this.state.cellValue[i];
            }
        }
        return tempArray
    }
    swapToken(){
        if(this.state.token=='O'){
            return 'X'
        } else {
            return 'O'
        }
    }
    turnPlayed(cellId){
        // interface is handled here
        if(this.state.cellValue[cellId]==''){
            this.setState({cellValue: this.updateCellValue(cellId)})
            this.setState({token: this.swapToken()})
        } else {
            //scope of a fancy modal here
            alert("Wrong Move! Try again.")
        }
        
    }
    render(){
        const {container, row, unit} = styles;        
        return (
            <View style={container}>
                <View style={row}>
                   <View style={unit}><Cell 
                        token={this.state.cellValue[0]} 
                        boardTap = {this.turnPlayed.bind(this)}
                        cellIdentity = {0}
                   /></View>
                   <View style={unit}><Cell 
                        token={this.state.cellValue[1]} 
                        boardTap = {this.turnPlayed.bind(this)}
                        cellIdentity = {1}
                    /></View>
                   <View style={unit}><Cell 
                        token={this.state.cellValue[2]} 
                        boardTap = {this.turnPlayed.bind(this)}
                        cellIdentity = {2}
                    /></View>
                </View>
                <View style={row}>
                    <View style={unit}><Cell 
                        token={this.state.cellValue[3]} 
                        boardTap = {this.turnPlayed.bind(this)}
                        cellIdentity = {3}
                    /></View>
                    <View style={unit}><Cell 
                        token={this.state.cellValue[4]} 
                        boardTap = {this.turnPlayed.bind(this)}
                        cellIdentity = {4}
                    /></View>
                    <View style={unit}><Cell 
                        token={this.state.cellValue[5]} 
                        boardTap = {this.turnPlayed.bind(this)}
                        cellIdentity = {5}
                    /></View>
                </View>
                <View style={row}>
                    <View style={unit}><Cell 
                        token={this.state.cellValue[6]} 
                        boardTap = {this.turnPlayed.bind(this)}
                        cellIdentity = {6}
                    /></View>
                    <View style={unit}><Cell 
                        token={this.state.cellValue[7]} 
                        boardTap = {this.turnPlayed.bind(this)}
                        cellIdentity = {7}
                    /></View>
                    <View style={unit}><Cell 
                        token={this.state.cellValue[8]} 
                        boardTap = {this.turnPlayed.bind(this)}
                        cellIdentity = {8}
                    /></View>
                </View>
            </View>
        )
    }
    
}

const styles = {
    container: {
        height: 280,
        width: 280,
        backgroundColor: '#fff'
    },
    row:{
        flexDirection: 'row',
        flex: 1
    },
    unit: {
        padding: 2,
        flex:1
    }
}