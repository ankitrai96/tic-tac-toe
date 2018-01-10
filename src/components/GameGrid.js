import React, { Component } from 'react';
import {View, Image} from 'react-native';
import Cell from './Cell';

export default class GameGrid extends Component {
    state = {
        token:'O',
        winner: '',
        cellValue : ['','','','','','','','','']
    }
    componentDidUpdate(){
        let flag = false
        if(this.state.winner==''){
            this.gameOver('X')
            this.gameOver('O')
        }
        if(!this.state.cellValue.includes('')){
            alert("DRAW")
            this.setState({cellValue: ['','','','','','','','','']})
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
            this.setState({cellValue: this.updateCellValue(cellId), token: this.swapToken()})
            // this.setState({})
        } else {
            //scope of a fancy modal here
            alert("Wrong Move! Try again.")
        }
    }
    gameWon(winner){
        this.setState({winner: winner})
        setTimeout(() => {
            this.setState({cellValue: ['','','','','','','','',''], winner:''})
        }, 3000);
    }
    //To-Do: Shrinkify the gameOver if-else ladder
    gameOver(forToken) {
        if(this.state.cellValue[0]==forToken && this.state.cellValue[1]==forToken && this.state.cellValue[2]==forToken){
            this.gameWon(forToken)
        } else if(this.state.cellValue[3]==forToken && this.state.cellValue[4]==forToken && this.state.cellValue[5]==forToken){
            this.gameWon(forToken)
        } else if(this.state.cellValue[6]==forToken && this.state.cellValue[7]==forToken && this.state.cellValue[8]==forToken){
            this.gameWon(forToken)
        } else if(this.state.cellValue[0]==forToken && this.state.cellValue[3]==forToken && this.state.cellValue[6]==forToken){
            this.gameWon(forToken)
        } else if(this.state.cellValue[1]==forToken && this.state.cellValue[4]==forToken && this.state.cellValue[7]==forToken){
            this.gameWon(forToken)
        } else if(this.state.cellValue[2]==forToken && this.state.cellValue[5]==forToken && this.state.cellValue[8]==forToken){
            this.gameWon(forToken)
        } else if(this.state.cellValue[0]==forToken && this.state.cellValue[4]==forToken && this.state.cellValue[8]==forToken){
            this.gameWon(forToken)
        } else if(this.state.cellValue[2]==forToken && this.state.cellValue[4]==forToken && this.state.cellValue[6]==forToken){
            this.gameWon(forToken)
        }
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
    render(){       
        return (
            <View style={styles.container}>{this.board()}</View>
        )
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