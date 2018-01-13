import React, { Component } from 'react';
import {View, Image} from 'react-native';
import {GameOver, MinimaxAlgo} from '../GameEngine'
import Cell from './Cell';

export default class GameGrid extends Component {
    state = {
        token:'O',
        winner: '',
        cellValue : Array.from(Array(9).keys())
    }
    componentDidUpdate(){
        if(this.state.winner==''){
            if(GameOver(this.state.cellValue,'X')) this.gameWon('X')
            else if(GameOver(this.state.cellValue,'O')) this.gameWon('O')
        }
        if(this.state.token=='X'){
            // invoke artificial intelligence
            this.turnPlayed(MinimaxAlgo(this.state.cellValue,'X').index)
        }
    }
    render(){       
        return (
            <View style={styles.container}>{this.board()}</View>
        )
    }
    turnPlayed(cellId){
        // interface is handled here
        if(!isNaN(this.state.cellValue[cellId])){
                this.setState({cellValue: this.updateCellValue(cellId),
                token: this.state.token == 'O' ? 'X' : 'O'
            })
        } else if(cellId == -1){
            alert("Draw. Beat me if you can!")
            this.setState({cellValue: Array.from(Array(9).keys())})
        } else {
            //scope of a fancy modal here
            alert("Wrong Move! Try Again.")
        }
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
    gameWon(winner){
        this.setState({winner: winner})
        setTimeout(() => {
            this.setState({cellValue: Array.from(Array(9).keys()), winner:''})
        }, 3000)
    }
    board(){
        if(this.state.winner==''){
            return(
                <View style={{flex:1}}>
                    <View style={styles.row}>
                    <View style={styles.unit}><Cell 
                            token={this.state.cellValue[0]} 
                            boardTap = {this.turnPlayed.bind(this)}
                            cellIdentity = {0}
                    /></View>
                    <View style={styles.unit}><Cell 
                            token={this.state.cellValue[1]} 
                            boardTap = {this.turnPlayed.bind(this)}
                            cellIdentity = {1}
                        /></View>
                    <View style={styles.unit}><Cell 
                            token={this.state.cellValue[2]} 
                            boardTap = {this.turnPlayed.bind(this)}
                            cellIdentity = {2}
                        /></View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.unit}><Cell 
                            token={this.state.cellValue[3]} 
                            boardTap = {this.turnPlayed.bind(this)}
                            cellIdentity = {3}
                        /></View>
                        <View style={styles.unit}><Cell 
                            token={this.state.cellValue[4]} 
                            boardTap = {this.turnPlayed.bind(this)}
                            cellIdentity = {4}
                        /></View>
                        <View style={styles.unit}><Cell 
                            token={this.state.cellValue[5]} 
                            boardTap = {this.turnPlayed.bind(this)}
                            cellIdentity = {5}
                        /></View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.unit}><Cell 
                            token={this.state.cellValue[6]} 
                            boardTap = {this.turnPlayed.bind(this)}
                            cellIdentity = {6}
                        /></View>
                        <View style={styles.unit}><Cell 
                            token={this.state.cellValue[7]} 
                            boardTap = {this.turnPlayed.bind(this)}
                            cellIdentity = {7}
                        /></View>
                        <View style={styles.unit}><Cell 
                            token={this.state.cellValue[8]} 
                            boardTap = {this.turnPlayed.bind(this)}
                            cellIdentity = {8}
                        /></View>
                    </View>
                </View>
            )
        } else {
            if(this.state.winner=='O'){
                return (
                    <View style={{justifyContent:'center',alignItems:'center'}}>
                        <Image 
                            source={require('../../assets/poop.png')}
                            style = {{width: 250, height: 250}}
                        />
                    </View>
                )
            } else if(this.state.winner=='X'){
                return (
                    <View style={{justifyContent:'center',alignItems:'center'}}>
                        <Image 
                            source={require('../../assets/ghost.png')}
                            style = {{width: 250, height: 250}}
                        />
                    </View>
                )
            }
        }
    }    
}

const styles = {
    container: {
        height: 280,
        width: 280,
        backgroundColor: '#fffce8'
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