import React from 'react';
import {View} from 'react-native';
import Cell from './Cell';

const GameGrid = () => {
    const {container, row, unit} = styles;
    return (
        <View style={container}>
            <View style={row}>
               <View style={unit}><Cell /></View>
               <View style={unit}><Cell /></View>
               <View style={unit}><Cell /></View>
            </View>
            <View style={row}>
                <View style={unit}><Cell /></View>
                <View style={unit}><Cell /></View>
                <View style={unit}><Cell /></View>
            </View>
            <View style={row}>
                <View style={unit}><Cell /></View>
                <View style={unit}><Cell /></View>
                <View style={unit}><Cell /></View>
            </View>
        </View>
    )
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

export default GameGrid;