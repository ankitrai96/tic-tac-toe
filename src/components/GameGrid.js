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
        if(this.state.winner==''){
            if(this.gameOver(this.state.cellValue,'X')) this.gameWon('X')
            else if(this.gameOver(this.state.cellValue,'O')) this.gameWon('O')
        }
        if(!this.state.cellValue.includes('')){
            alert("DRAW")
            this.setState({cellValue: ['','','','','','','','','']})
        }
        if(this.state.token=='X'){
            // invoke artificial intelligence
            this.ghostAI()
        }
    }
    render(){       
        return (
            <View style={styles.container}>{this.board()}</View>
        )
    }
    swapToken(){
        if(this.state.token=='O'){
            return 'X'
        } else {
            return 'O'
        }
    }
    gameWon(winner){
        this.setState({winner: winner})
        setTimeout(() => {
            this.setState({cellValue: ['','','','','','','','',''], winner:''})
        }, 3000);
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
    minimaxAlgo(boardState, player){
        let catalogue = [] // consequence(s) of possible variations
        
    }
    ghostAI(){
        // plays on behalf of X token based on minimaxAlgo
        
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
    //To-Do: Shrinkify the gameOver if-else ladder
    gameOver(evalBoard, forToken) {
        if(evalBoard[0]==forToken && evalBoard[1]==forToken && evalBoard[2]==forToken){
            return true
        } else if(evalBoard[3]==forToken && evalBoard[4]==forToken && evalBoard[5]==forToken){
            return true
        } else if(evalBoard[6]==forToken && evalBoard[7]==forToken && evalBoard[8]==forToken){
            return true
        } else if(evalBoard[0]==forToken && evalBoard[3]==forToken && evalBoard[6]==forToken){
            return true
        } else if(evalBoard[1]==forToken && evalBoard[4]==forToken && evalBoard[7]==forToken){
            return true
        } else if(evalBoard[2]==forToken && evalBoard[5]==forToken && evalBoard[8]==forToken){
            return true
        } else if(evalBoard[0]==forToken && evalBoard[4]==forToken && evalBoard[8]==forToken){
            return true
        } else if(evalBoard[2]==forToken && evalBoard[4]==forToken && evalBoard[6]==forToken){
            return true
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