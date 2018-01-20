import React, { Component } from 'react';
import {View, Image, Text} from 'react-native';
import {GameOver, MinimaxAlgo, VacantCell} from '../GameEngine'
import Cell from './Cell';

export default class GameGrid extends Component {
    state = {
        token:'O',
        winner: '',
        refresh: this.props.ghost,
        cellValue : [0,1,2,3,4,5,6,7,8]
    }
    componentDidUpdate(){
        const {refresh, cellValue, winner, token} = this.state;
        const chance = VacantCell(cellValue)
        if(this.props.ghost!=refresh) this.gameWon()
        if(winner==''){
            if(GameOver(cellValue,'X')) this.gameWon('X')
            else if(GameOver(cellValue,'O')) this.gameWon('O')
            else if(chance.length==0) this.gameWon('d')    
            if(token=='X' && this.props.ghost){
                // invoke artificial intelligence
                if(this.props.difficulty && chance.length!=0){
                    this.turnPlayed(MinimaxAlgo(cellValue,'X').index)   
                } else if(chance.length!=0){
                    this.turnPlayed(chance[Math.floor(Math.random()*chance.length)])
                }
            }
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
        if(winner) this.setState({winner: winner})
        setTimeout(() => {
            this.setState({cellValue: [0,1,2,3,4,5,6,7,8], 
                winner:'', refresh: this.props.ghost
        })}, 500)
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
        } else if(this.state.winner=='O'){
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
            } else {
                return <Text style={styles.draw}>Draw</Text>
            }
    }    
}

const styles = {
    container: {
        height: 265,
        width: 265
    },
    row:{
        flexDirection: 'row',
        flex: 1
    },
    unit: {
        padding: 2,
        flex:1
    },
    draw: {
        fontWeight: 'bold',
        fontSize: 25,
        color: '#474747',
        alignSelf: 'center'
    }
}